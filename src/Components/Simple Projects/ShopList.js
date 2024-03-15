import React, { useState } from "react";
import "./ShopList.css";

function ShopList() {
  const [items, setItems] = useState([]);

  function onRemoveItem(itemToremove) {
    const newitems = items.filter((item) => {
      return item !== itemToremove;
    });
    setItems(newitems);
  }

  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  }

  return (
    <>
      <h1>Shopping List</h1>
      <div className="shopping-list">
        <h2>Items to buy</h2>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="item"
            placeholder="Add a new item"
            required
          />
          <button>Add</button>
        </form>
        <ul>
          {items.map((item, index) => (
            <Item onRemoveItem={onRemoveItem} key={index + item} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default ShopList;

function Item({ item, onRemoveItem }) {
  return (
    <li>
      {item}
      <button className="delete" onClick={() => onRemoveItem(item)}>
        x
      </button>
    </li>
  );
}
