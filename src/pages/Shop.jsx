import './Shop.css';

export default function Shop() {
  return (
    <div className="shop-page">
      <div className="shop-overlay">
        <h1> Welcome to the Cosmic Shop</h1>
        <p>Enchanting items and mystical artifacts await!</p>

        <li> Item 1
          <ul>Name</ul>
          <ul>Price</ul>
          <ul>Link</ul>
        </li>

        <li> Item 2
          <ul>Name</ul>
          <ul>Price</ul>
          <ul>Link</ul>
        </li>

      </div>
    </div>
  );
}
