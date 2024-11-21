import React, { useState } from "react";
import "../../App.css";
import Shoes from "../../latestShoes.json";
import { store, add } from "../../store";
import cartImage from "../../images/cart1.svg";
import Tooltip from "@material-ui/core/Tooltip";

function Home() {
  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // Filter shoes based on search query
  const filteredShoes = Object.keys(Shoes).filter((key) =>
    Shoes[key].name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div>
        <span className="tagline">JUST DO IT</span>
        <div className="tagline-para">
          JB Silver Sports has been your companion in sports, both big and small, for over 50 years. Our roots are firmly grounded in Pakistan and with its people.
        </div>

        <br />
        <br />
        <br />
        <div className="latest-container">
          <hr className="line" /> &nbsp; &nbsp;
          <span className="latest-designs">Latest Products</span>&nbsp;&nbsp;
          <hr className="line" />
          <br />
          <br />
          
          {/* Search Bar */}
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search by name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="product-container image-gallery">
            {filteredShoes.length > 0 ? (
              filteredShoes.map((keyName) => {
                const shoe = Shoes[keyName];
                return (
                  <div className="home-products" key={keyName}>
                    <img
                      className="products-shoe-image"
                      alt={shoe.name}
                      src={shoe.img}
                    />
                    <h3 className="shoe-name">{shoe.name}</h3>
                    <h3 className="shoe-price">${shoe.price}</h3>
                    
                    {/* Add to Cart Button */}
                    <Tooltip title="Add to cart" aria-label="add to cart">
                      <button
                        onClick={() => store.dispatch(add(shoe))}
                        className="cart-button"
                      >
                        <img
                          className="cart-image"
                          src={cartImage}
                          alt="add to cart"
                        />
                      </button>
                    </Tooltip>
                  </div>
                );
              })
            ) : (
              <p>No products found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
