import { useEffect, useState } from 'react';

const ApiCall = () => {
  // Definimos tres estados:
  // - `posts`: para almacenar las publicaciones obtenidas de la API.
  // - `loading`: para indicar si los datos aún se están cargando.
  // - `error`: para manejar cualquier error que ocurra durante la llamada a la API.
  const [posts, setPosts] = useState([]);  // Estado para almacenar las publicaciones
  const [loading, setLoading] = useState(true);  // Estado para indicar si estamos cargando los datos
  const [error, setError] = useState(null);  // Estado para manejar errores en la llamada

  // `useEffect` se ejecuta cuando el componente se monta por primera vez.
  // Vamos a usarlo para hacer la llamada a la API.
  useEffect(() => {
    // Definimos una función asincrónica `fetchData` para obtener los datos de la API.
    const fetchData = async () => {
      try {
        // Realizamos la llamada a la API con `fetch`.
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');

        // Si la respuesta no es exitosa (res.ok es falso), lanzamos un error.
        if (!res.ok) throw new Error('Error al cargar los datos');

        // Convertimos la respuesta a formato JSON (es lo que devuelve la API).
        const data = await res.json();

        // Actualizamos el estado de `posts` con los datos obtenidos.
        setPosts(data);
      } catch (err) {
        // Si ocurre algún error (por ejemplo, la API no responde),
        // guardamos el mensaje de error en el estado `error`.
        setError(err.message);
      } finally {
        // Independientemente de si la llamada fue exitosa o falló,
        // cambiamos el estado de `loading` a false (ya hemos terminado de cargar).
        setLoading(false);
      }
    };

    // Llamamos a la función `fetchData` para hacer la solicitud a la API.
    fetchData();
  }, []);  // El segundo argumento vacío `[]` asegura que solo se ejecute una vez (cuando el componente se monta).

  // Si estamos en proceso de carga, mostramos un mensaje de "Cargando..."
  if (loading) return <p>Cargando...</p>;

  // Si ocurrió un error durante la llamada a la API, mostramos un mensaje con el error.
  if (error) return <p>Hubo un error: {error}</p>;

  // Si todo fue exitoso, renderizamos las publicaciones.
  return (
    <div>
      <h2>Publicaciones de JSONPlaceholder</h2>
      <ul>
        {/* Iteramos sobre las publicaciones y mostramos cada una */}
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3> {/* Mostramos el título de la publicación */}
            <p>{post.body}</p> {/* Mostramos el cuerpo de la publicación */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiCall; // Exportamos el componente para poder usarlo en otras partes de la aplicación
