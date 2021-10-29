import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../assets/images/about.png";
import logo from "../../assets/images/logo.png";

function Introduction() {
  return (
    <div className="introduction">
      <div className="container">
        <div className="introduction_top">
          <NavLink to="/" className="active">
            Home <i className="fa fa-angle-right"></i>
          </NavLink>
          <a href="/introduction">Về chúng tôi</a>
        </div>
        <h1>VỀ CHÚNG TÔI</h1>
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="introduction_img">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="introduction_content">
              <div className="introduction_content-logo">
                <img src={logo} alt="" />
              </div>
              <h3>GIỚI THIỆU CHUNG VỀ MỸ PHẨM HANDMADE MANDALA</h3>
              <div className="introduction_content-text">
                <p>
                  Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ
                  quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi
                  bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt. Hi,
                  chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ
                  quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi
                  bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.sau khá
                  nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog
                  này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau
                  đi tắm Free để giải nhiệt.
                </p>
                <a href="">Xem thêm</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
