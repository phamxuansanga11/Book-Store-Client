import React from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { fetchApiLogout } from "../../redux/apiRequest";

function Header(props) {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.user.accessToken);

  const handleLogout = () => {
    console.log("Log out Click...");
    fetchApiLogout(dispatch, accessToken);
  };

  return (
    <header>
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo ">
            <Link href="/">
              <a>
                <img src="../../../img/logo-book-store.png" alt="" />
              </a>
            </Link>
          </div>
          <div className="header__search">
            <input
              className="header__search-input"
              type="text"
              placeholder="Tìm kiếm sách..."
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="login-and-cart">
            {accessToken ? (
              <div className="login" onClick={handleLogout}>
                Sign out
              </div>
            ) : (
              <Link href="/login">
                <a className="login">Sign in</a>
              </Link>
            )}

            <Link href="/cart">
              <a className="cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
