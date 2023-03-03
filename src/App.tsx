import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router/app-router';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
