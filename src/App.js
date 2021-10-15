import { connect } from "react-redux";
import Header from "./components/Header";
import { setProduct } from "./redux/action/productAction";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import ProductList from "./components/ProductList";
import ProductDetail from "./container/ProductDetail";

function App() {
  return (
   
      <div className="ui">
           <Header />
       <Router>
         <Switch>
           <Route exact  path='/' component={ProductList} />
           <Route  path='/product/:productId' component={ProductDetail} />
           <Route path="*">404 NOT FOUND</Route>
         </Switch>
       </Router>
      </div>
   
  );
}



export default App;
