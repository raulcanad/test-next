//Función del Carrito

function calcularTotal(carrito) {
    return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
}

//Pruebas Unitarias en Jasmine

describe('calcularTotal', () => {
    it('debería devolver 0 para un carrito vacío', () => {
        expect(calcularTotal([])).toBe(0);
    });

    it('debería calcular correctamente el total para un solo artículo', () => {
        const carrito = [{ precio: 10, cantidad: 2 }];
        expect(calcularTotal(carrito)).toBe(20);
    });

    it('debería calcular correctamente el total para varios artículos', () => {
        const carrito = [
            { precio: 10, cantidad: 2 },
            { precio: 5, cantidad: 4 }
        ];
        expect(calcularTotal(carrito)).toBe(40);
    });
});



//Estrucrura MicroFrontend
/*ecommerce-app/
├── catalog/
│   ├── src/
│   ├── package.json
├── cart/
│   ├── src/
│   ├── package.json
├── user-profile/
│   ├── src/
│   ├── package.json
├── shell/
    ├── src/
    ├── package.json*/
