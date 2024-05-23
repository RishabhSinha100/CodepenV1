
import './App.css';
 import Header from './Components/Header';
import Home from './Components/Home';
import DataProdiver from './Context/DataProdiver';
function App() {
  return (

      <DataProdiver>
            <Home/>
      </DataProdiver>
   
  );
}

export default App;
