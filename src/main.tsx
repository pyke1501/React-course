// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/bootstrap-custom.css'
import './styles/index.css';

import App from './App.tsx'
import { AppProvider } from './context/AppContext.tsx';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store.ts';

/* user
import UserEdit from './pages/user/edit';
import UserShow from './pages/user/show';
import UserCreate from './pages/user/create';
import UserList from './pages/user/list';

------
import { UserList, UserShow, UserCreate, UserEdit } from './pages/user';
*/

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <Provider store={store}>
  < BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </Provider>
  // </StrictMode>,
)