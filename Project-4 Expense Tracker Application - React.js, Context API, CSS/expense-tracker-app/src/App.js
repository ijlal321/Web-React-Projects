import './App.css';
import Balance from './components/Balance';
import Title from './components/Title';
import History from './components/History';
import AddNewTransaction from './components/AddNewTransaction';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Title />
        <Balance />
        <History />
        <AddNewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
