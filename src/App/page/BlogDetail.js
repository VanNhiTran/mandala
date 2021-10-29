import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "../../assets/images/blog_2.png";
import img2 from "../../assets/images/blog_3.png";
import img3 from "../../assets/images/blog_4.png";
import video from "../../assets/images/video.png";
import img_right from "../../assets/images/post_4.png";

function BlogDetail() {
  return (
    <div className="blog">
      <div className="container">
        <div className="blog__top">
          <NavLink to="/" className="home">
            Home <i className="fa fa-angle-right"></i>
          </NavLink>
          <a href="/news">Blog</a>
        </div>
        <div className="blog__title">
          <h1>BLOG</h1>
        </div>
        <div className="row">
          <div className="col-lg-3 col-12">
            <div className="blog__left">
              <div className="blog__left-title">
                <h2>BÀI VIẾT MỚI NHẤT</h2>
              </div>
              <div className="blog__left-list">
                <ul className="list">
                  <li className="list-item d-flex">
                    <div className="item-img">
                      <img src={img1} alt="" />
                    </div>
                    <div className="item-text">
                      <p className="text-date">
                        11 <span>/ Tháng 5</span>
                      </p>
                      <p className="text-author">Đăng bởi Giangle</p>
                    </div>
                  </li>
                  <li className="list-item d-flex">
                    <div className="item-img">
                      <img src={img2} alt="" />
                    </div>
                    <div className="item-text">
                      <p className="text-date">
                        11 <span>/ Tháng 5</span>
                      </p>
                      <p className="text-author">Đăng bởi Giangle</p>
                    </div>
                  </li>
                  <li className="list-item d-flex">
                    <div className="item-img">
                      <img src={img3} alt="" />
                    </div>
                    <div className="item-text">
                      <p className="text-date">
                        11 <span>/ Tháng 5</span>
                      </p>
                      <p className="text-author">Đăng bởi Giangle</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="blog__left-tag">
                <h1 className="left-title">BLOG TAG</h1>
                <div className="tag-list">
                  <a href="">Hoa tai</a>
                  <a href="">Son</a>
                  <a href="">Nước hoa</a>
                  <a href="">Giày</a>
                  <a href="">Sandal</a>
                  <a href="">Áo sơ mi</a>
                  <a href="">Nước hoa</a>
                  <a href="">Trẻ em</a>
                  <a href="">Thời trang nữ</a>
                </div>
              </div>
              <div className="blog__left-video">
                <h1 className="left-title">LATEST VIDEO</h1>
                <div className="video-img">
                  <img src={video} alt="" className="img" />
                  <button className="btn btn-play">
                    <i className="fa fa-play-circle"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-12">
            <div className="blog__right">
              <div className="blog__right-img">
                <img src={img_right} alt="" />
              </div>
              <div className="blog__right-content">
                <h1 className="title">
                  NÀNG BÉO KHÔNG NGẠI DIỆN VÁY ÁO NỔI BẬT
                </h1>
                <p className="disc">
                  Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ
                  quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi
                  bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.Trong
                  tiết xuân hè, nàng ngoại cỡ thắp sáng phong cách bằng quần họa
                  tiết nhiệt đới đi kèm áo sơ mi nhã nhặn.Trang phục họa tiết
                  điện tử được nàng phối cùng chân váy kẻ caro, làm nên style
                  vừa hiện đại, vừa phảng phất nét cổ điển.Lối diện đồ hàng ngày
                  đơn giản, khỏe khoắn của cô khi kết hợp chất liệu jean.Nữ
                  blogger rực rỡ khi hòa trộn các gam đỏ, hồng, tím... một cách
                  vui tươi, kèm theo các phụ kiện điệu đà.
                </p>
                <a href="" className="author">
                  Bởi NamTran ( 27 / 05 / 2015 )
                </a>
                <div className="more">
                  <a href="">Đọc thêm</a>
                  <a href="">23 bình luận</a>
                </div>
              </div>
              <div className="blog__right-form">
                <form action="">
                  <h1 className="form-title">ĐÓNG GÓP Ý KIẾN</h1>
                  <div className="form-group">
                    <label className="form-label">
                      Tên <span>*</span>
                    </label>
                    <input type="text" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Email<span>*</span>
                    </label>
                    <input type="text" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Ý kiến <span>*</span>
                    </label>
                    <textarea rows="15" className="form-input" />
                  </div>
                  <button className="form-btn">GỬI Ý KIẾN</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
