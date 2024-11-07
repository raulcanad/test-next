// jest.config.js
// eslint-disable-next-line @typescript-eslint/no-require-imports
const nextJest = require('next/jest');  // Importamos next/jest para usar su transformador

// Usamos nextJest() para crear un entorno de Jest adecuado para Next.js
const createJestConfig = nextJest({
  dir: './', // Directorio base de tu proyecto, ajusta si tienes una estructura diferente
});

const customJestConfig = {
  testEnvironment: 'jsdom', // Ambiente simulado de navegador
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'], // Carga de los métodos adicionales de jest-dom
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy', // Mapea CSS módulos
    '\\.css$': 'identity-obj-proxy', // Mapea archivos CSS
  },
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], // Ignorar estas carpetas en las pruebas
};

// Llamamos a la función `createJestConfig` de next/jest para obtener la configuración completa
module.exports = createJestConfig(customJestConfig);
