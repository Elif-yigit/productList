import { useState } from 'react'
import  product  from "./data";
import './App.css'
// import basket from './components/sepet';
import Basket from './components/sepet';
import { use } from 'react';


function App() {
 console.log(product);
const [count , setCount] = useState(0);
const [basket, setBasket] = useState([]);

function addBasket(product){
  if(!product)
    return;
  const addFind = basket.find(item =>item.name === product.name);

  if (addFind){

    addFind.count += 1;
    setBasket([...basket.filter(item => item.name !== product.name),
      {
        name:product.name,
        icon:product.icon,
        price:product.price,
        count:addFind.count

      } 
    ])
  } else {
setBasket([...basket,
  {
    name:product.name,
    icon:product.icon,
    price:product.price,
    count:1,

  } 
])
  }
}


function removeBasket (product) {

  const removeFind = basket.find(item => item.name === product.name);
  removeFind.count -=1;

  if(removeFind.count === 0) {
   setBasket([...basket.filter(item => item.name !== product.name)
   ]);
  } else {
    setBasket([...basket.filter(item => item.name !== product.name),
      {
    name:product.name,
    icon:product.icon,
    price:product.price,
    count:removeFind.count
    }
    ]);
  }
}

  return (
  <>
  { product.map((product) => (

      <div key={product.name} className='container'>
        <img 
        src={product.icon} />
        <div className='btn'>
        <button disabled={!basket.find(x => x.name == product.name)} onClick={() => removeBasket(product)} >-</button>
        <img
        src={product.image}
        />
        <button onClick={() => addBasket(product) }>+</button>
        </div>
        <div >{product.name}</div>
        <p>{product.category}</p>
        <span>{product.price} </span>


        </div>
      )
      
    )}
    <Basket basket={basket} />
  </>
  )
}

export default App
