import React from "react";
import Header from "../layouts/Header";
import logo from "../../assets/images/logo.png";
import blogImg from "../../assets/images/blog-img.png";
import bannerImg1 from "../../assets/images/Layer_product_new.png";
import bannerImg2 from "../../assets/images/Layer_tablet.png";
import plane from "../../assets/images/plane.svg";
import gift from "../../assets/images/gift.svg";
import star from "../../assets/images/star.svg";
import product1 from "../../assets/images/item-mother-1.png";
import product2 from "../../assets/images/item-mother-2.png";
import product3 from "../../assets/images/item_2--right--img.png";
import product4 from "../../assets/images/Item_3--left--img.jpg";
import product5 from "../../assets/images/item-mother-3.png";
import product6 from "../../assets/images/item-mother-4.png";
import Slick from "../components/Slick";
import BestSeller from "../components/BestSeller";
import twitter from "../../assets/images/twitter.svg";
import fb from "../../assets/images/facebook.svg";
import ins from "../../assets/images/instagram.svg";
import gg from "../../assets/images/google.svg";
import pinterest from "../../assets/images/pinterest.svg";
import linkedin from "../../assets/images/linkedin.svg";
import Footer from "../layouts/Footer";

function Homepage() {
  return (
    <div className="home">
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-12 banner_left">
              <img className="banner_productImg" src={bannerImg1} alt="" />

              <div className="banner_content">
                <ul>
                  <li>
                    <h1>GreenVera</h1>
                  </li>
                  <li>
                    <p>Sản phẩm tinh dầu dưỡng da mới nhất của Mandala</p>
                  </li>
                  <li>
                    <h2>
                      GIÁ CHỈ 750.000<span>đ</span>
                    </h2>
                  </li>
                  <li>
                    <a href="#">MUA HÀNG</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-12 banner_right ">
              <img className="banner_layoutImg" src={bannerImg2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="promotion">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-xs-12">
              <div className="promotion_item">
                <img src={plane} alt="" />
                <span>Miễn phí vận chuyển trên toàn quốc</span>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="voucher promotion_item">
                <img src={gift} alt="" />
                <span>Tặng ngay quà tặng trị giá 350.000đ</span>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="promotion_item">
                <img src={star} alt="" />
                <span>Giảm 30% cho đơn hàng trên 5.000.000đ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="container">
          <div className="product_wrapper">
            <div className="product_item">
              <div className="product_item-left">
                <div className="img_top">
                  <img src={product1} alt="" />
                </div>
                <div className="img-bottom">
                  <img src={product2} alt="" />
                </div>
              </div>
              <div>
                <img src={product3} alt="" />
              </div>
            </div>
            <div className="product_item">
              <div className="product_item-left">
                <img src={product4} alt="" />
              </div>
              <div>
                <div className="product_top">
                  <img src={product5} alt="" />
                </div>
                <img src={product6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slick">
        <Slick />
      </div>
      <div className="bestseller">
        <BestSeller />
      </div>
      <div className="social">
        <div className="container">
          <ul className="row">
            <li className="col-lg-2 col-sm-4 col-6">
              <div className="social_item">
                <div className="img">
                  <img src={fb} alt="" />
                </div>
                <span>FACEBOOK</span>
              </div>
            </li>
            <li className="col-lg-2 col-sm-4 col-6">
              <div className="social_item">
                <div className="img">
                  <img src={twitter} alt="" />
                </div>
                <span>TWITTER</span>
              </div>
            </li>

            <li className="col-lg-2 col-sm-4 col-6">
              <div className="social_item">
                <div className="img">
                  <img src={ins} alt="" />
                </div>
                <span>INSTAGRAM</span>
              </div>
            </li>
            <li className="col-lg-2 col-sm-4 col-6">
              <div className="social_item">
                <div className="img">
                  <img src={gg} alt="" />
                </div>
                <span>GOOGLE +</span>
              </div>
            </li>
            <li className="col-lg-2 col-sm-4 col-6">
              <div className="social_item">
                <div className="img">
                  <img src={pinterest} alt="" />
                </div>
                <span>PINTEREST</span>
              </div>
            </li>
            <li className="col-lg-2 col-sm-4 col-6">
              <div className="social_item">
                <div className="img">
                  <img src={linkedin} alt="" />
                </div>
                <span>LINKEDIN</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="information">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-12 information_item">
              <div className="information_title">
                <h1>VỀ CHÚNG TÔI</h1>
                <span>///////////////</span>
              </div>

              <div className="information_logo">
                <img src={logo} alt="" />
              </div>
              <div className="information_text">
                <h3>GIỚI THIỆU CHUNG VỀ MỸ PHẨM HANDMADE MANDALA</h3>
                <p>
                  Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ
                  quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi
                  bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.Hi,
                  chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ
                  quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi
                  bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.Hi,
                  chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ
                  quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi
                  bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.
                </p>
                <a href="">Xem thêm</a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 information_item">
              <div className="information_title">
                <h1>BLOG</h1>
                <span>///////////////</span>
              </div>
              <div className="information_img">
                <img src={blogImg} alt="" />
              </div>
              <div className="information_text">
                <h3>REVIEW SON KEM BOURJOIS VELVET</h3>
                <p>
                  Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ
                  quay lại hăm nóng cái Blog này vào một ngày đầu hè nóng oi
                  bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.
                </p>
                <a href="" className="information_author">
                  Bởi NamTran (27/05/2015)
                </a>
                <div className="information_detail">
                  <a href="">
                    Đọc thêm <i className="fa fa-angle-right"></i>
                  </a>
                  <a href="">23 bình luận</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 information_item">
              <div className="row">
                <div className="col-lg-12  col-sm-6 col-12">
                  <div className="information_title">
                    <h1>GỬI EMAIL CHO CHÚNG TÔI</h1>
                    <span>///////////////</span>
                  </div>
                  <form className="information_form">
                    <input type="text" placeholder="Email của bạn" name="" />
                    <p>Gửi email để nhận những ưu đãi mới nhất</p>
                    <button>GỬI</button>
                  </form>
                </div>
                <div className="col-lg-12  col-sm-6 col-12">
                  <div className="information_title">
                    <h1>TAG SẢN PHẨM</h1>
                    <span>///////////////</span>
                  </div>
                  <div className="information_list">
                    <a href="">Đồng hồ</a>
                    <a href="">Túi</a>
                    <a href="">Phụ kiện</a>
                    <a href="">Đồng hồ</a>
                    <a href="">Túi</a>
                    <a href="">Giày</a>
                    <a href="">Sandal</a>
                    <a href="">Áo sơ mi</a>
                    <a href="">Nước hoa</a>
                    <a href="">Giày</a>
                    <a href="">Sandal</a>
                    <a href="">Trẻ em</a>
                    <a href="">Thời trang nữ</a>
                    <a href="">Trẻ em</a>
                    <a href="">Thời trang nữ</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
