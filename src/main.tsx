// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/bootstrap-custom.css'
import './styles/index.css';
import "./styles/hai-color-box.css";
import App from './App.tsx'

/* user
import UserEdit from './pages/user/edit';
import UserShow from './pages/user/show';
import UserCreate from './pages/user/create';
import UserList from './pages/user/list';

------
import { UserList, UserShow, UserCreate, UserEdit } from './pages/user';
*/

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <App />
  // </StrictMode>,
);
