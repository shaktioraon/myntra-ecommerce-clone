const HomeItem = ({ item }) => {
  return (
    <div className="item-container">
      <img
        className="item-image"
        src={item.image}
        alt={item.item_name}
      />

      <div className="rating">
        {item.rating?.stars ?? 0} ⭐ | {item.rating?.count ?? 0}
      </div>

      <div className="company">{item.company}</div>

      <div className="item-name">{item.item_name}</div>

      <div className="price">
        Rs {item.current_price}{" "}
        <span className="original-price">
          Rs {item.original_price}
        </span>{" "}
        <span className="discount">
          ({item.discount_percentage}% OFF)
        </span>
      </div>

      <button className="btn-add-bag">Add to Bag</button>
    </div>
  );
};

export default HomeItem;