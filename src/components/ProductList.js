import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ProductConatiner from "../container/ProductConatiner";
import { setProduct } from "../redux/action/productAction";
import { ActionType } from "../redux/constants/actionType";

const ProductList = () => {
const products = useSelector(state => state) //we can use this hook to connect to store without connect() function 
const dispatch=useDispatch()
 const fetchProducts=async()=>
 {
    let response=await axios
    .get('https://fakestoreapi.com/products')
    .catch((err)=>{
        console.log("err \t"+err);
    })
    dispatch(setProduct(response.data))
 }
 
 useEffect(()=>{
    fetchProducts();
   
 },[])
    return ( 
        <div className="ui grid container">
             <ProductConatiner />
        </div>
     );
}
 
export default ProductList;