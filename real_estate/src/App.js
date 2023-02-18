import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import style from './Styles/app.module.css';
import AllRoutes from './AllRoutes/Routes';

function App() {
  return (
    <div className={style.App}>
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
