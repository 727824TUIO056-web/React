import { useDispatch, useSelector } from "react-redux";

import { cartAction, Clearcart } from "./cartAction";

export default function Appp() {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.cart);
  const laptop = {
    name: "dell",
    price: 45000,
  };
  return (
    <div>
      <h2>Product</h2>

      <button onClick={() => dispatch(cartAction(laptop))}>ADD</button>
      <button onClick={() => dispatch(Clearcart())}>REMOVE</button>

      <h3>Cart Items:</h3>
      <ul>
        {item.map((item, index) => (
          <li key={index}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}