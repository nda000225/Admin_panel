import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Single from './pages/single/Single';
import New from './pages/new/New';
import List from './pages/list/List';
import './style/dark.scss';
import { userInputs, productInputs } from './formSource';
import { useContext } from 'react';
import { darkModeContext } from './context/darkModeContext';



import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const {darkMode} = useContext(darkModeContext);
  return (
  <div className={ darkMode ? "app dark" : "app"}>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title="Add new User"/>} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} title="Add new Product"/>} />
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
