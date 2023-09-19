import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = () => {
    const [rating, setRating] = useState(0);

    const handleStarClick = (index) => {
        setRating(index + 1);
    };

    return (
        <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className={`h-6 w-6 cursor-pointer ${index < rating ? 'text-yellow-500' : 'text-gray-400'
                        }`}
                    onClick={() => handleStarClick(index)}
                />
            ))}
            <p className="ml-2">{rating} stars</p>
        </div>
    );
};

export default StarRating;