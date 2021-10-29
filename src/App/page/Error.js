import React from "react";
import { NavLink } from "react-router-dom";
import errImg from "../../assets/images/404.png";

function Error() {
  return (
    <div className="error">
      <div className="container">
        <div className="error_img">
          <img src={errImg} alt="" />
        </div>

        <h1 className="error_title">
          Đây không phải là trang web bạn đang tìm kiếm
        </h1>
        <form action="">
          <input type="text" />
          <i className="fa fa-search"></i>
        </form>
        <div className="error_menu d-flex">
          <a href="" className="error_menu-contact">
            LIÊN HỆ
          </a>
          <NavLink to="/">TRANG CHỦ</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Error;
