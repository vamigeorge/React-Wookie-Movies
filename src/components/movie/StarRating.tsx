import React from 'react';
import { ReactComponent as Star } from './star.svg';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const roundedRating = Math.round(rating / 2);
  const numberOfStars = Array(5).fill(0);
  return (
    <div>
      {numberOfStars.map((star: number, index: number) => {
        return (
          <Star
            key={index}
            style={{
              fill: roundedRating > index ? 'red' : 'black',
              width: '2em',
              height: '2em',
              marginRight: '.5em',
            }}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
