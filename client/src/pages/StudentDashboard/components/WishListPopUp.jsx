import React from 'react';
import '../styles/WishListPopUp.css';
import { useSelector , useDispatch } from 'react-redux';
import { removeFromList } from '../../../features/wishListSlice';
import {useNavigate} from 'react-router-dom';

export default function WishListPopUp() {
  const { wishList } = useSelector((state) => state.wishList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (name) => {
    console.log(name)
    dispatch(removeFromList(name));
    console.log(`Deleting item with name: ${name}`);
  };

  const handleBuy = () => {
    navigate(`/courseCheckOut`);
  };

  return (
    <div className="wishlist-popup">
      <h2>Your Wishlist</h2>
      {!wishList || wishList.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul className='wishlist-items'>
          {wishList.map((item) => (
            <li key={item.id}>
              {item.name}
              <div className="cart-buttons-container">
                <button onClick={() => handleDelete(item.name)}>X</button>
                <button onClick={() => handleBuy()}>Buy</button>
              </div>
              <hr></hr>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
