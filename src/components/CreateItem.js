import { useState } from "react";

function CreateItem(props) {
  const {items, setItems} = props
  const [itemTitle, setItemTitle] = useState('')
  const [itemImage, setItemImage] = useState('')
  const [itemPrice, setItemPrice] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault();
    let itemsArray = [...items];
    const newItem = {
      id: items.length,
      title: itemTitle,
      img_src: itemImage,
      price: itemPrice
    };
    itemsArray.push(newItem);
    setItems([...itemsArray]);
    console.log(items);
    setItemTitle("");
    setItemImage("");
    setItemPrice(0);
  };

  return (
    <>
    <h2 className="m-2">Add new item</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label m-2">Title</label>
        <input type="text" value={itemTitle} onChange={e => setItemTitle(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label m-2">Image Source</label>
        <input type="text" value={itemImage} onChange={e => setItemImage(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label m-2">Price</label>
        <input type="number" value={itemPrice} onChange={e => setItemPrice(parseInt(e.target.value))} />
      </div>
      <button type="submit" className="btn btn-primary m-2">Submit</button>
    </form>
    <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title} - {item.price} - {item.img_src}
          </li>
        ))}
      </ul>
    </>
  );
}

export default CreateItem;
