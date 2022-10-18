import React ,{useContext} from 'react';
import {Context} from "../../context";
import s from "./style.module.sass";

export default function Productitem({id, images, title,description, price}) {
  const {dellProduct} = useContext(Context)

  return (
    <div className={s.container} onClick = {()=>dellProduct(id)}>
      <img src = {images[0]} alt ="avatar" className={s.img}/>
      <p>Title:  {title}</p>
      <p> Description:  {description }</p>
      <p> Price:  {price}</p>
    </div>
  )
}
