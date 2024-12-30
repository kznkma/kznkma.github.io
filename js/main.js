import { initializeFolders } from './folders.js';
import { initializeStartMenu } from './startMenu.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeFolders();
  initializeStartMenu();
});