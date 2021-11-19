import { useEffect, useState } from "react";

const useCars = () => {
    const [cars, setCars] = useState([]);
  useEffect(()=> {
    fetch('https://polar-mountain-88734.herokuapp.com/cars')
    .then(res => res.json())
    .then(data => setCars(data));
  },[]);
  return [cars, setCars];
}
export default useCars;