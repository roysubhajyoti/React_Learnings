//want to export both component then use named and defaulf export
export const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
      alt="logo food vila"
    />
  </a>
);
const Header = () => (
  <div className="header">
    <Title />
    <div className="navItem">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Conatct</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
