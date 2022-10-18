import React, {useContext} from 'react';
import {Context} from "../../context";
import Productitem from '../ProductItem';
import s from "./style.module.sass";

export default function ProductContainer() {
    const {products} = useContext(Context);
  return (
    <div className={s.container}>
      {
        products.map(el=><Productitem key={el.id} {...el}/>)
      }
    </div>
  )
}
