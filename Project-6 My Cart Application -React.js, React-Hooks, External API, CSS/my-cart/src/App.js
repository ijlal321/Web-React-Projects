import './App.css';
import Items from './components/Items';
import NavBar from './components/NavBar';
import CartProvider from './context/GlobalContext';

function App() {
  return (
    <CartProvider>
    <div className="App">
    <NavBar />
    <Items />
    </div>
    </CartProvider>
  );
}

export default App;
