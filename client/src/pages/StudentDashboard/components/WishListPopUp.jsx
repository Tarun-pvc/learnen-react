import React from 'react';
import { useSelector } from 'react-redux';

export default function WishListPopUp() {
  const  {wishList} = useSelector((state) => state.wishList); 
  console.log(wishList)

  return (
    <div className="wishlist-popup">
      <h2>Your Wishlist</h2>
      {!wishList || wishList.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishList.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
