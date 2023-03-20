function CartHeader() {
return (
  <>
    <div className="row mx-2 py-2 border-bottom fw-bold">
        <div className="col-1"></div>
        <div className="col-5">Item</div>
        <div className="col-3 text-center">Qty</div>
        <div className="col-3 text-center">Price</div> 
    </div>
  </>
)
}
export default CartHeader;