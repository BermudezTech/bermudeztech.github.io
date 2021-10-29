import './App.css';
import './styles/setup.scss';
import Header from './components/Header/Header';
import Maintenance from './components/Pages/Maintenance';

function App() {
  return (
    <div className="App">
      <Header />
      <Maintenance />
    </div>
  );
}

export default App;
