import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import userMock from './sys/user';
import menuMock from './sys/menu';

/**
 * Used in a production environment. Need to manually import all modules
 */
export function setupProdMockServer() {
  createProdMockServer([...userMock, ...menuMock]);
}
