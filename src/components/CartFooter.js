function CartFooter(props) {
  const { emptyCart, cartItems } = props;

  function getTotal() {
    let total = 0;
    cartItems.map((item) => (total = total + item.price * item.quantity));
    return total;
  }

  return (
    <>
      <div className="row mx-2 py-2 fw-bold">
        <div className="col-1"></div>
        <div className="col-5"></div>
        <div className="col-3 text-center">Total</div>
        <div className="col-3 text-center">Rs {getTotal()}</div>
      </div>
      {cartItems.length > 0 && (
        <button
          onClick={() => emptyCart()}
          className="btn btn-secondary btn-sm m-4 px-3"
        >
          Empty Cart
        </button>
      )}
    </>
  );
}
export default CartFooter;
