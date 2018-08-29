import React from "react";
const Header = props => {
  console.log("Header props : ", props);
  return (
    <header className="Toolbar__Toolbar">
      <div className="Toolbar__Home">Home</div>
      <svg
        className="Toolbar__BugerIcon sc-bdVaJa fUuvxv"
        fill="white"
        width="3rem"
        height="3rem"
        viewBox="0 0 1024 1024"
        rotate="0"
      >
        <path d="M128 288h768v64h-768v-64z M128 480h768v64h-768v-64z M128 672h768v64h-768v-64z" />
      </svg>
      <img
        className="Logo__Logo"
        src="https://uploads.codesandbox.io/uploads/user/b9ec71bd-ca7d-447a-b62a-99b4bf90b068/n3du-burger.74672e0d.svg"
        alt="burger logo"
      />
      <nav>
        <ul className="NavigationItems__NavigationItems">
          <li className="NavigationItem__Active NavigationItem__NavigationItem">
            <a href="/">Burger Builder</a>
          </li>
          <li className=" NavigationItem__NavigationItem">
            <a href="/orders">Orders</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
