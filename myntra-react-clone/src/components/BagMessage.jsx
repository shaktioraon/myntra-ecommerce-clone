const BagMessage = () => {
  //  // <center className="bag-message" style={{ padding: "10%" }}>
  //   <h1>Bag is Empty!!!!...</h1>

  // </center>
  return (
    <center style={{ padding: "10%" }}>
      <div style={{ background: "none", height: "165px", width: "146px" }}>
        <picture style={{ width: "100%" }}>
          <source
            srcset="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"
            type="image/webp"
          />
          <img
            src="https://constant.myntassets.com/checkout/assets/img/empty-bag.png"
            alt="image"
            fetchpriority="auto"
            loading="eager"
            style={{ height: "165px", width: "146px" }}
          />
        </picture>
      </div>
      <div>
        <h2>Hey, it feels so light!</h2>
      </div>
      <div>
        <p>There is nothing in your bag. Let's add some items.</p>
      </div>
      <div>
        <div
          data-testid="button"
          style={{
            border: "1px solid pink",
            color: "darkpink",
            width: "30%",
            padding: "4px 0",
            fontWeight: "500",
            fontSize: "1rem",
            fontStyle: "italic",
          }}
        >
          ADD ITEMS FROM WISHLIST
        </div>
      </div>
    </center>
  );
};
export default BagMessage;
