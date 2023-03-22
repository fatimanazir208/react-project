import React from "react";

class Item extends React.Component{
  constructor(props) {
    super(props);
  }
  
  render(){
    const { items, addToCart } = this.props;
    return (
      <>
        {
          items.map((item) => 
          <div className="col mb-5" key={item.id}>
            <div className="card h-100 rounded-0 border-0 mx-auto shadow">
              <img src={item.img_src} className="card-img-top mx-auto rounded-0 mb-2"></img>
              <div className="card-body p-1">
                <h5 className="card-title m-0">{item.title}</h5>
                <p className="card-text mb-1 text-muted">{item.price}</p>
                <button className="btn btn-success btn-sm w-100 mt-2" id={item.id} onClick={() => addToCart(item.id)}>Add to cart</button>
              </div>
            </div>
          </div>
          )
        }
      </>
    );
  }
}

export default Item;
