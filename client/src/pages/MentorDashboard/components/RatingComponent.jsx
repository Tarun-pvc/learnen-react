import React from 'react';

const RatingComponent = ({ staticRating }) => {
  return (
    <div className="rating">
      {[5, 4, 3, 2, 1].map((value) => (
        <React.Fragment key={value}>
          <input
            type="radio"
            id={`star${value}`}
            name="rate"
            value={value}
            checked={staticRating === value}
            onChange={() => {}}
            disabled
          />
          <label title="text" htmlFor={`star${value}`}></label>
        </React.Fragment>
      ))}
    </div>
  );
};

export default RatingComponent;
