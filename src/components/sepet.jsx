
export default function Basket({ basket=[] }) {
  console.log(basket);
  
  return (

    <>
    <div className="basketContainer">
     <h3>Your Cart </h3>
        {
        basket.map((item) => (
          <div className="info" key={item.name}>
           <img 
    src={item.icon} />
     <div >{item.name}</div>
    <p>{item.category}</p>
    <span>{item.price * item.count} </span>
          </div>
        ))
        }
     <button>Confirm Order</button>
    </div>
    
    </>
  )
}