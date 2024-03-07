import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Header/Navbar';
import Main from './Components/Main/main';
import YouMayAlsoLike from './Components/Main/YouMayAlsoLike/YouMayAlsoLike';

function App() {
  return (
    <div className="">
      <Navbar/>
      <div>
        <Main/>
      </div>
      <YouMayAlsoLike/>
     
    </div>
  );
}

export default App;
