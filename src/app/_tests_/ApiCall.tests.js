import { render, screen, waitFor } from '@testing-library/react';
import ApiCall from '../components/ApiCall'; // Asegúrate de que la ruta esté correcta

// Simulamos la llamada a la API con jest
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: 1, title: 'Test Post', body: 'This is a test post' }]),
  })
);

describe('ApiCall Component', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Limpiamos las llamadas a fetch después de cada prueba
  });

  test('debe renderizar las publicaciones de la API correctamente', async () => {
    render(<ApiCall />); // Renderizamos el componente ApiCall

    // Verificamos que el texto "Cargando..." se muestra inicialmente
    expect(screen.getByText(/Cargando.../i)).toBeInTheDocument();

    // Esperamos a que los datos se carguen y se actualice el DOM
    await waitFor(() => expect(screen.getByText(/Test Post/i)).toBeInTheDocument());

    // Verificamos que el título de la publicación se muestre correctamente
    expect(screen.getByText(/Test Post/i)).toBeInTheDocument();
    expect(screen.getByText(/This is a test post/i)).toBeInTheDocument();
  });

  test('debe manejar los errores si la llamada a la API falla', async () => {
    // Simulamos un error en la llamada a la API
    global.fetch.mockImplementationOnce(() => Promise.reject('API error'));

    render(<ApiCall />); // Renderizamos el componente ApiCall

    // Verificamos que el mensaje de error se muestra cuando hay un fallo en la API
    await waitFor(() => expect(screen.getByText(/Hubo un error/i)).toBeInTheDocument());
  });
});
