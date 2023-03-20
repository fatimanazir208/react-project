import Item from "./Item";

function ItemsArea(props) {
  const { addItem } = props;

  return (
    <div className="col-7 col-sm-5 col-md-6 col-lg-7 text-center pt-2">
      <h3 className="text-center mb-5">Items</h3>
      <div className="row row-cols-1 row-cols-xxl-3 row-cols-xl-2 row-cols-md-1">
        <Item addToCart={addItem} />
      </div>
    </div>
  );
}

export default ItemsArea;
