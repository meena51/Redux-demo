import logo from './logo.svg';
import './App.css';
import store from "./redux/store"
import CakeCounter from './components/CakeCounter';
import { Provider } from 'react-redux';
import HooksCakeContainer from './components/HooksCakeContainer';
function App() {
  return (
     <Provider store={store}>
      <div className="App">
      <HooksCakeContainer/>
    </div>
     </Provider>
  );
}

export default App;
