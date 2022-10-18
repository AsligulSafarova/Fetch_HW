import React, {useContext} from 'react';
import {Context} from "../../context";
import {addUser} from "../../reguest/product_request";
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import s from "./style.module.sass";

export default function Form() {
  const {addForm} = useContext(Context);

  const submit =event=>{
    event.preventDefault();
    const{img, title,desc, price} = event.target;
    addForm({
     images:[img.value], 
      title:title.value, 
      dascription:desc.value,
      price: price.value
    }, addUser)
    img.value = " ";
    title.value = " ";
    desc.value =" ";
    price.value = " ";
    }

  return (
   <form className ={s.container} onSubmit = {submit}>
   <Input type ="url" placeholder = " Avatar..." name ="img"/>
   <Input placeholder = " Title..." name ="title"/>
   <Input placeholder = " Description..." name ="desc"/>
   <Input placeholder = " Price..." name ="price"/>
   <Button>Add</Button>
   </form>
   )
  
}
