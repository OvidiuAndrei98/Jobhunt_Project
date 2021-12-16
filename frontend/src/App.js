import './App.css';
import Routes from './components/main/Routes';
import { useAtom } from 'jotai';
import {USER} from './states/STATES';
import AppUserFreelancer from './service/AppUserFreelancer';
import AuthService from './service/AuthService';
import { useEffect } from 'react';



function App() {
const [appUser, setAppUser] = useAtom(USER);



  return (
    <div className="App">
     <Routes />
    </div>
  );
}

export default App;
