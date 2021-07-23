import { Route } from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Detail} />
    </div>
  );
}

export default App;
