import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import img1 from "../../assets/images/product_15.png";
import img2 from "../../assets/images/product_12.png";
import img3 from "../../assets/images/product_13.png";
import img4 from "../../assets/images/product_11.png";
import img5 from "../../assets/images/product_14.png";
import img8 from "../../assets/images/product_10.png";
import img9 from "../../assets/images/product_16.png";
import img10 from "../../assets/images/product_17.png";
import img11 from "../../assets/images/product_18.png";
import img12 from "../../assets/images/product_19.png";
import img13 from "../../assets/images/product_view.png";
import author from "../../assets/images/auther.jpg";

function ProductDetail() {
  const [img, setImg] = useState(img1);
  const imgSrc = [img1, img2, img3, img4, img5, img5, img5, img5];
  const renderImgList = () => {
    return imgSrc.map((img, index) => {
      return (
        <div className="select-img">
          <img src={img} key={index} onClick={() => setImg(img)} alt="" />
        </div>
      );
    });
  };

  return (
    <div className="detail">
      <div className="container">
        <div className="detail__top">
          <NavLink to="/">
            Home <i className="fa fa-angle-right"></i>
          </NavLink>
          <a href="">
            Sản phẩm <i className="fa fa-angle-right"></i>
          </a>
          <a href="">
            Trang sức <i className="fa fa-angle-right"></i>
          </a>
          <a href="" className="active">
            Lắc tay <i className="fa fa-angle-right"></i>
          </a>
        </div>
        <div className="detail__product">
          <div className="row">
            <div className="col-lg-1 col-3">
              <div className="detail__product-select">
                <div className="select-up">
                  <i class="fa fa-arrow-up"></i>
                </div>
                {renderImgList()}
                <div className="select-down">
                  <i class="fa fa-arrow-down"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-9">
              <div className="detail__product-img d-flex">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <div className="detail__product-info">
                <div className="info__title">
                  <h1>LẮC TAY TYFFANY XU HƯỚNG MỚI NHẤT</h1>
                  <h3>TYFFANY MS 3201</h3>
                </div>
                <div className="info__price">
                  <span>950.000đ</span>
                  <span class="info__price-normal">999.000đ</span>
                </div>
                <p className="info__text">
                  Không thể phủ nhận, thời trang và phong cách chính là “tuyên
                  ngôn” không lời mạnh mẽ nhất của mỗi người phụ nữ. Do đó, việc
                  mua sắm thời trang trở thành niềm vui, và có khi là nguồn cảm
                  hứng vô tận để phái đẹp sống vui, sống đẹp hơn trong mắt nửa
                  còn lại của thế giới. Để F5 tủ đồ của mình trước những xu
                  hướng ngày một đa dạng hơn trong thế giới thời trang, nhiều
                  chị em không ngần ngại chi tiêu “mạnh tay” để sở hữu những món
                  đồ yêu thích.
                </p>
              </div>
              <form className="info__form">
                <div className="form_group">
                  <label htmlFor="">Màu sắc</label>
                  <select name="" id="">
                    <option value="">Chọn màu</option>
                    <option value="">Màu đồng</option>
                    <option value="">Màu bạc</option>
                    <option value="">Màu vàng</option>
                  </select>
                </div>
                <div className="form_group">
                  <label htmlFor="">Size</label>
                  <select name="" id="">
                    <option value="">Chọn size</option>
                    <option value="">12</option>
                    <option value="">13</option>
                    <option value="">14</option>
                  </select>
                </div>
                <div className="form_group">
                  <label htmlFor="">Số lượng</label>
                  <input type="number" min={0} />
                </div>
                <div className="form_btn">
                  <button>MUA HÀNG</button>
                  <button>
                    <i class="fa fa-heart"></i>
                  </button>
                  <button>
                    <i class="fa fa-sync"></i>
                  </button>
                </div>
              </form>
              <div className="info__social">
                <div className="info__social-title">
                  <p>Shipping & </p>
                  <p className="title-right"> Returns</p>
                </div>
                <div className="info__social-btn d-flex">
                  <button className="btn-fb">
                    <i class="fab fa-facebook-square"></i>
                    <span>Like</span>
                  </button>
                  <button className="btn-tw">
                    <i class="fab fa-twitter-square"></i>
                    <span>Tweet</span>
                  </button>
                  <button className="btn-gg">
                    <i class="fab fa-google-plus-g"></i>
                    <span>1</span>
                  </button>
                  <button className="btn-link">
                    <i class="fab fa-linkedin-in"></i>
                    <span>Share</span>
                  </button>
                  <button className="btn-pin">
                    <i class="fab fa-pinterest"></i>
                    <span>In it</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="detail__more">
          <div className="row">
            <div className="col-lg-9 col-12">
              <div className="detail__more-tabs">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      ĐẶC ĐIỂM NỔI BẬT
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      THÔNG TIN SẢN PHẨM
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="contact-tab"
                      data-toggle="tab"
                      href="#contact"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      ĐÁNH GIÁ
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row content-item">
                      <div className="col-9">
                        <div className="content-text">
                          <p className="title">THE MARK OF A LEGEND</p>
                          <p className="text">
                            Tự hào được ghi là năm mà Tiffany & Co là thành lập,
                            bộ sưu tập mang tính biểu tượng này cung cấp cho một
                            cái gật đầu với qua trong khi thể hiện một cảm giác
                            hiện đại với kiểu dáng đẹp đường cong và đường nét
                            mượt mà.
                          </p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="content-img">
                          <img src={img8} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="row content-item item2">
                      <div className="col-6">
                        <div className="content-img">
                          <img src={img9} alt="" />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="content-text">
                          <p className="title">THE MARK OF A LEGEND</p>
                          <p className="text">
                            Tự hào được ghi là năm mà Tiffany & Co là thành lập,
                            bộ sưu tập mang tính biểu tượng này cung cấp cho một
                            cái gật đầu với qua trong khi thể hiện một cảm giác
                            hiện đại với kiểu dáng đẹp đường cong và đường nét
                            mượt mà.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row content-item">
                      <div className="col-9">
                        <div className="content-text">
                          <p className="title">THE MARK OF A LEGEND</p>
                          <p className="text">
                            Tự hào được ghi là năm mà Tiffany & Co là thành lập,
                            bộ sưu tập mang tính biểu tượng này cung cấp cho một
                            cái gật đầu với qua trong khi thể hiện một cảm giác
                            hiện đại với kiểu dáng đẹp đường cong và đường nét
                            mượt mà.
                          </p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="content-img">
                          <img src={img10} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="row content-item item2">
                      <div className="col-6">
                        <div className="content-img">
                          <img src={img11} alt="" />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="content-text">
                          <p className="title">THE MARK OF A LEGEND</p>
                          <p className="text">
                            Tự hào được ghi là năm mà Tiffany & Co là thành lập,
                            bộ sưu tập mang tính biểu tượng này cung cấp cho một
                            cái gật đầu với qua trong khi thể hiện một cảm giác
                            hiện đại với kiểu dáng đẹp đường cong và đường nét
                            mượt mà.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="content-img">
                      <img src={img13} alt="" />
                    </div>

                    <p className="text">
                      Không thể phủ nhận, thời trang và phong cách chính là
                      “tuyên ngôn” không lời mạnh mẽ nhất của mỗi người phụ nữ.
                      Do đó, việc mua sắm thời trang trở thành niềm vui, và có
                      khi là nguồn cảm hứng vô tận để phái đẹp sống vui, sống
                      đẹp hơn trong mắt nửa còn lại của thế giới. Để F5 tủ đồ
                      của mình trước những xu hướng ngày một đa dạng hơn trong
                      thế giới thời trang, nhiều chị em không ngần ngại chi tiêu
                      “mạnh tay” để sở hữu những món đồ yêu thích.
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="feedback">
                      <form action="" className="feedback_form">
                        <h1>HÃY ĐỂ LẠI NHẬN XÉT CỦA BẠN</h1>
                        <div className="feedback_rate">
                          <i class="fa fa-heart"></i>
                          <i class="fa fa-heart"></i>
                          <i class="fa fa-heart"></i>
                          <i class="fa fa-heart"></i>
                          <i class="fa fa-heart"></i>
                        </div>
                        <div className="form_group">
                          <label htmlFor="">Nội dung</label>
                          <textarea name="" id="" cols="30" rows="5"></textarea>
                        </div>

                        <button className="form_btn btn">Nhận xét</button>
                      </form>
                      <div className="feedback_recent">
                        <h1>NHẬN XÉT GẦN ĐÂY</h1>
                        <div className="feedback_title d-flex">
                          <h3>LẮC TAY TYFFANY XU HƯỚNG MỚI NHẤT</h3>
                          <ul>
                            <i class="fa fa-heart"></i>
                            <i class="fa fa-heart"></i>
                            <i class="fa fa-heart"></i>
                            <i class="fa fa-heart"></i>
                            <i class="fa fa-heart"></i>
                          </ul>
                        </div>

                        <p className="feedback_author">
                          Nhận xét bởi <span>Thùy Trúc</span> vào ngày 18-8-2020
                        </p>
                        <div className="feedback_content d-flex">
                          <div className="img">
                            <img src={author} alt="" />
                          </div>
                          <p>Đẹp lắm luôn!!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12">
              <div className="detail__more-right">
                <h1 className="right-title">SẢN PHẨM BÁN CHẠY</h1>
                <div className="right-content">
                  <div className="bestseller">
                    <div className="bestseller_img">
                      <img src={img12} alt="" />
                    </div>
                    <div className="bestseller_info">
                      <p>Mỹ phẩm châu âu </p>
                      <div className="bestseller_info-rate">
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-heart"></i>
                        <span>(4 lượt mua)</span>
                      </div>
                      <p class="bestseller_info-price">355.000đ</p>
                    </div>
                  </div>
                  <div className="bestseller">
                    <div className="bestseller_img">
                      <img src={img12} alt="" />
                    </div>
                    <div className="bestseller_info">
                      <p>Mỹ phẩm châu âu </p>
                      <div className="bestseller_info-rate">
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-heart"></i>
                        <span>(4 lượt mua)</span>
                      </div>
                      <p class="bestseller_info-price">355.000đ</p>
                    </div>
                  </div>
                  <div className="bestseller">
                    <div className="bestseller_img">
                      <img src={img12} alt="" />
                    </div>
                    <div className="bestseller_info">
                      <p>Mỹ phẩm châu âu </p>
                      <div className="bestseller_info-rate">
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-heart"></i>
                        <span>(4 lượt mua)</span>
                      </div>
                      <p class="bestseller_info-price">355.000đ</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="detail__more-right">
                <h1 className="right-title">SẢN PHẨM MUA NHIỀU</h1>
                <div className="right-content">
                  <div className="bestseller">
                    <div className="bestseller_img">
                      <img src={img12} alt="" />
                    </div>
                    <div className="bestseller_info">
                      <p>Mỹ phẩm châu âu </p>
                      <div className="bestseller_info-rate">
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-heart"></i>
                        <span>(4 lượt mua)</span>
                      </div>
                      <p class="bestseller_info-price">355.000đ</p>
                    </div>
                  </div>
                  <div className="bestseller">
                    <div className="bestseller_img">
                      <img src={img12} alt="" />
                    </div>
                    <div className="bestseller_info">
                      <p>Mỹ phẩm châu âu </p>
                      <div className="bestseller_info-rate">
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-heart"></i>
                        <span>(4 lượt mua)</span>
                      </div>
                      <p class="bestseller_info-price">355.000đ</p>
                    </div>
                  </div>
                  <div className="bestseller">
                    <div className="bestseller_img">
                      <img src={img12} alt="" />
                    </div>
                    <div className="bestseller_info">
                      <p>Mỹ phẩm châu âu </p>
                      <div className="bestseller_info-rate">
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-heart"></i>
                        <span>(4 lượt mua)</span>
                      </div>
                      <p class="bestseller_info-price">355.000đ</p>
                    </div>
                  </div>
                  <div className="bestseller">
                    <div className="bestseller_img">
                      <img src={img12} alt="" />
                    </div>
                    <div className="bestseller_info">
                      <p>Mỹ phẩm châu âu </p>
                      <div className="bestseller_info-rate">
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-heart"></i>
                        <span>(4 lượt mua)</span>
                      </div>
                      <p class="bestseller_info-price">355.000đ</p>
                    </div>
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

export default ProductDetail;
