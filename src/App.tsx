import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './routes/routes';
import Header from './components/shared/header';
import Footer from './components/shared/footer';
import { Provider } from 'react-redux';
import store from './store';
import ProtectedRoute from './routes/ProtectedRoute';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <>
     <Provider store={store}>
        <Header />
          <RouterProvider router={router} />
        <Footer />
     </Provider>
    </>
  );
}

export default App;
