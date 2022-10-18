import { useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import Form from "../../pages/Form";
import {Context} from "../../context";
import NavBar from "../NavBar";
import ContainerUsers from "../../pages/ContainerUsers";
import { getProduct} from "../../reguest/product_request";


function App() {
const [products, setProducts] = useState([]);

useEffect(() => {
  getProduct( setProducts); 

}, []);


const addForm =(prod)=>{
  setProducts(prev=>[...prev,prod] )
}
 

const dellProduct = (id)=>setProducts(products.filter(elem=>elem.id !== id));

  return (
    <>
    <Context.Provider value = {{products,dellProduct, addForm }}>
    <NavBar/>
    <Routes>
    <Route path ="/Form" element = {<Form/>}/>
    <Route path = "/cont"  element = {<ContainerUsers/>}/>
 </Routes>
 </Context.Provider>
    </>
  );
}

export default App;
