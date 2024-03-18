import ProductComponent from "./ProductComponent";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {setProducts} from "../redux/actions/productActions.js"
import axios from "axios";

function ProductListing(){
    const products = useSelector((state)=> state.allProduct);
    const dispatch=useDispatch();

    async function fetchProduct(){
    const response  = await axios.get('https://fakestoreapi.com/products');
    dispatch(setProducts(response.data));
    }

    useEffect(()=>{
        fetchProduct();
    },[]);
    console.log(products);
    
    return(
       
        <div className="ui grid container">
            <ProductComponent/>

        </div>
    )
}
export default ProductListing;
