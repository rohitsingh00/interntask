import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginUser from './Component/LoginForm';
import app from './app2';


function App() {
  
  return (
    <BrowserRouter>
    <switch>
        <Route exact path="/" component={LoginUser} />
        <Route exact path="/add" component={app} />
        </switch>
    </BrowserRouter>
  );
}

export default App;