function CartItem(props) {
  const {cartItems, addItem, removeItem, decrementItem} = props
  return (
    <>
        {cartItems.map(cartItem => (
          <div className="row mx-2 py-2 border-bottom fw-bold" key={cartItem.id}>
            <div className="col-1 text-center">
              <button onClick={() => removeItem(cartItem.itemId)} className='btn btn-rounded btn-danger py-0 px-2'>x</button>
            </div>
            <div className="col-5">{cartItem.title}</div>
            <div className='col-3 text-center p-0 mx-auto'>
              <div className='btn-group' role='group'>
                <button onClick={() => decrementItem(cartItem.itemId)} className='counter-btn btn btn-outline-secondary border-dark rounded-start py-0 px-1'>-</button>
                <p className='qty border-top border-bottom border-1 border-dark m-0 p-0'>{cartItem.quantity}</p>
                <button onClick={() => addItem(cartItem.itemId)} className='counter-btn btn btn-outline-secondary border-dark rounded-end py-0 px-1'>+</button>
              </div>
            </div>
            <div className="col-3 text-center">Rs. {cartItem.price}</div> 
          </div>
        ))}

        
  

    </>
  )
  }
export default CartItem;