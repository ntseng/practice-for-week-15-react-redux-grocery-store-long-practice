import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, incrementCart, decrementCart, setCart } from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);



  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          onChange={(e) => {
            setCount(parseInt(e.target.value))
            dispatch(setCart(e.target.value, item.id))
            }
          }

        />
        <button
          className="cart-item-button"
          onClick={(e) => dispatch(incrementCart(item.id))}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={(e) => dispatch(decrementCart(item.id))}
        >
          -
        </button>
        <button
          className="cart-item-button"
		  onClick={e=> dispatch(removeFromCart(item.id))}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
