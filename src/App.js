import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './state/store';

function App() {
  return (
    <div>
      <Provider store={store} >
        <Navbar />
        <Home />
      </Provider>
    </div>
  );
}

export default App;
