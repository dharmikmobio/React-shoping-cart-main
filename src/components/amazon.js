import React from "react";
// import list from "../data";
import Cards from "./card";
import "../styles/amazon.css";
import {collection, getDocs} from 'firebase/firestore';
import { fireDB } from '../firebase';



const Amazon = ({ handleClick }) => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      // setLoading(true);
      const users = await getDocs(collection(fireDB, "dishes"));
      const productsArray = [];
      users.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };

        productsArray.push(obj);
        // setLoading(false);
      });

      setProducts(productsArray);
    } catch (error) {
      console.log(error);
      // setLoading(false);
    }
  }

  return (
    <section>
      {products.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;
