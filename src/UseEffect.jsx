import { useEffect, useState } from 'react';
import './App.css';
import Heading from './Components/Heading';


function App() {

const[product, setproduct] = useState([]);
const[search, setsearch]= useState("");
useEffect(()=>{FetchProduct()},[])

const FetchProduct= ()=>{
    fetch("https://fakestoreapi.com/products")
    .then((response)=> response.json())
    .then((product)=> setproduct(product));
};

const Filtered = product.filter((data)=> data.title.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <>
    <div className='container mx-auto'>
        <input placeholder='Search'
        onChange={(e)=> setsearch(e.target.value)}
        className='p-2 border rounded w-full mx-auto my-2' />
        {Filtered.map((data)=>(
            <Heading id={data.id} title={data.title} key={data.id}/>

        ))}
    </div>
    
    
    </>
  );
}

export default App;
