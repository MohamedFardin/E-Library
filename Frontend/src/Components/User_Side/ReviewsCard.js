import React from 'react'
import './Product.css';

function ReviewsCard({user, what_they_say}) {

    return (
        // The product card
        <div className="product">
            <div className="product__info">
                {/* <p>{description}</p> */}
                <p className="product__author">
                    <strong>{what_they_say}</strong>
                </p>
                <small>~</small>
                <h2>{user}</h2>
            </div>
        </div>
    )
}

export default ReviewsCard