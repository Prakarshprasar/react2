import logo from './logo.svg';
import './App.css';
import Logo from './components/logo';
import Links from './components/links';
import Button from './components/button';

function App() {
  let arr=["Services","Projects","About"];
  return (
    <div className="App">
     <Logo/>
     <Links arr={arr}/>
     <Button/>
    </div>
  );
}

export default App;
