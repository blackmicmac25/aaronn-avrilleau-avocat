import React from 'react';
import { createRoot } from 'react-dom/client'; // Importation directe pour plus de légèreté
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  // On retire le StrictMode temporairement si l'aperçu bugge trop
  root.render(<App />); 
} else {
  console.error("Élément root introuvable");
}