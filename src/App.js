import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Galery from './components/Galery/Galery';
import Newsletter from './components/Newsletter/Newsletter';
import { Footer } from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <ItemListContainer/>
      <Galery/>
      <Newsletter/>
      <Footer/> 
    </div>
  );
}

export default App;
