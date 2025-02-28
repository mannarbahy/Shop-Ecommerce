import React, { useState } from 'react';
import './DescriptionBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; // Import star icon

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState('description');

  // Sample reviews with star ratings
  const reviews = [
    { name: 'John Doe', comment: 'Great product! Fits perfectly.', rating: 5 },
    { name: 'Jane Smith', comment: 'Very comfortable and stylish.', rating: 4 },
    { name: 'Mike Johnson', comment: 'Fast delivery and good quality.', rating: 5 },
  ];

  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-nav">
        <div 
          className={`descriptionbox-nav-box ${activeTab === 'description' ? 'active' : 'fade'}`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </div>
        <div 
          className={`descriptionbox-nav-box ${activeTab === 'reviews' ? 'active' : 'fade'}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews (123)
        </div>
      </div>

      <div className="descriptionbox-content">
        {activeTab === 'description' ? (
          <div className="descriptionbox-description">
            <p>
              Clothing E-Commerce Website
              Discover the latest fashion trends with our clothing e-commerce website, offering a wide range of stylish and high-quality apparel for men, women, and kids. Our platform provides a seamless shopping experience with easy navigation, secure payments, and fast delivery. From everyday essentials to statement pieces, we bring you trendy, comfortable, and affordable fashion. Enjoy personalized recommendations, size guides, and hassle-free returns, making online shopping effortless and enjoyable. Dress your best with just a click!
            </p>
          </div>
        ) : (
          <div className="descriptionbox-reviews">
            <h3>Customer Reviews</h3>
            {reviews.map((review, index) => (
              <div key={index} className="review">
                <div className="review-rating">
                  {/* Render star icons based on the rating */}
                  {[...Array(review.rating)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="star-icon" />
                  ))}
                </div>
                <p><strong>{review.name}</strong> - {review.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;