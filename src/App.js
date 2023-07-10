import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Layout from "./components/Layout";
import Cards from "./components/Cards    /index"
import Login from "./components/Login";
import ProductPage from './screen/Product';
import OrderPage from "./screen/OrderPage"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Switch>
  
    <Route exact path="/" component={ Layout } />
    <Route exact path="/login" component={ Login } />
    <Route exact path="/product" component={ ProductPage } />

    <Route exact path="/order" component={ OrderPage } />

    </Switch>
    </BrowserRouter>


      {/* <Layout>
          <Cards/>
      </Layout> */}
    </div>
  );
}

export default App;
