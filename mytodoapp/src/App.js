import logo from './logo.svg';
import './App.css';
import LoginPage from './Component/LoginPage';
import SignUp from './Component/SignUp';
import { useEffect } from 'react';

function App() {
  // useEffect(()=>{
  //   fetch("https://us-central1-todoapp-e33b8.cloudfunctions.net/ping").then(res=>res.json()).then(data=>console.log(data))
  // },[])
  return (
    <div className="App">
      {/* <LoginPage/> */}
      <SignUp/>
    </div>
  );
}

export default App;
