import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import img1 from "../../assets/images/product_20.png";
import img2 from "../../assets/images/product_21.png";
import img3 from "../../assets/images/product_22.png";

function Product() {
  const [show, setShow] = useState(0);
  const [typeLayout, setTypeLayout] = useState(true);

  const productArr = [
    { img: img1, name: "OHUI" },
    { img: img2, name: "HOME" },
    { img: img3, name: "DEBORA" },
    { img: img1, name: "OHUI" },
    { img: img2, name: "HOME" },
    { img: img3, name: "DEBORA" },
    { img: img1, name: "OHUIAAAA" },
    { img: img2, name: "HOME" },
    { img: img3, name: "DEBORA" },
    { img: img1, name: "OHUI" },
    { img: img2, name: "HOME" },
    { img: img3, name: "DEBORA" },
    { img: img1, name: "OHUIBBBB" },
    { img: img2, name: "HOME" },
    { img: img3, name: "DEBORA" },
    { img: img1, name: "OHUI" },
    { img: img2, name: "HOME" },
    { img: img3, name: "DEBORA" },
    { img: img1, name: "OHUICCCC" },
    { img: img2, name: "HOME" },
    { img: img3, name: "DEBORA" },
    { img: img1, name: "OHUI" },
    { img: img2, name: "HOME" },
    { img: img3, name: "DEBORA" },
  ];
  const renderProductItem = () => {
    return productArr.map((item, index) => {
      if (typeLayout) {
        return (
          <div className="col-sm-4 col-6" key={index}>
            <div className="product__content-item">
              <div className="item-img">
                <img src={item.img} alt="" />
              </div>
              <div className="item-text">
                <p>{item.name}</p>
                <span>Mỹ phẩm châu Âu</span>
                <p className="line"></p>
              </div>
              <div className="item-price d-flex justify-content-center">
                <div className="item-price_sale">
                  <p>
                    355.000<span>đ</span>
                  </p>
                </div>
                <div className="item-price_normal">
                  <p>
                    450.000<span>đ</span>
                  </p>
                </div>
              </div>
              <div className="item-btn">
                <button>MUA HÀNG</button>
                <button>
                  <i class="fa fa-heart"></i>
                </button>
                <button>
                  <i class="fa fa-sync"></i>
                </button>
              </div>
            </div>
          </div>
        );
      }
      if (!typeLayout) {
        return (
          <div className="col-12">
            <div className="item_list d-flex">
              <div className="col-3">
                <div className="item_list-img">
                  <img src={item.img} alt="" />
                </div>
              </div>
              <div className="col-9">
                <div className="item_list-content">
                  <span>Mỹ phẩm châu Âu</span>
                  <div className="content_rate d-flex">
                    <div className="icon">
                      <i class="fa fa-heart"></i>
                      <i class="fa fa-heart"></i>
                      <i class="fa fa-heart"></i>
                      <i class="fa fa-heart"></i>
                      <i class="fa fa-heart"></i>
                    </div>
                    <p>(4 lượt mua)</p>
                  </div>
                  <p className="des">
                    Tự hào được ghi là năm mà Tiffany & Co là thành lập, bộ sưu
                    tập mang tính biểu tượng này cung cấp cho một cái gật đầu
                    với qua trong khi thể hiện một cảm giác hiện đại với kiểu
                    dáng đẹp đường cong và đường nét mượt mà.
                  </p>
                  <p className="price">355.000đ</p>
                </div>
                <div className="item_list-btn">
                  <button>MUA HÀNG</button>
                  <button>
                    <i class="fa fa-heart"></i>
                  </button>
                  <button>
                    <i class="fa fa-sync"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      }
    });
  };
  return (
    <div className="product">
      <div className="product__top">
        <div className="container">
          <NavLink to="/">
            Home <i className="fa fa-angle-right"></i>
          </NavLink>
          <a href="">
            Sản phẩm <i className="fa fa-angle-right"></i>
          </a>
          <a href="">
            Trang sức <i className="fa fa-angle-right"></i>
          </a>
        </div>
      </div>
      <div className="product__banner">
        <div className="container">
          <div className="product__banner-title">
            <p className="title-left">Giảm giá 50%</p>
            <p className="title-right">
              Trong vòng 3 ngày
              <span>25/5 - 28/5/2015</span>
            </p>
          </div>
        </div>
      </div>
      <div className="product__wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12">
              <div className="product__menu">
                <h1 className="product__menu-title">
                  <i className="fa fa-bars" />
                  DANH MỤC SẢN PHẨM
                </h1>
                <ul>
                  <li>
                    <p
                      className="d-flex justify-content-between"
                      onClick={() => {
                        setShow(show === 1 ? 0 : 1);
                      }}
                    >
                      MỸ PHẨM
                      <i
                        class={`fa fa-angle-down ${
                          show === 1 ? "up-down" : ""
                        }`}
                      ></i>
                    </p>
                    {show === 1 && (
                      <div className="menu-dropdown">
                        <ul>
                          <li>Sữa Rửa Mặt</li>
                          <li>Kem Dưỡng Da</li>
                          <li>Kem Chống Nắng</li>
                          <li>Son Môi</li>
                        </ul>
                      </div>
                    )}
                  </li>
                  <li>
                    <p
                      className="d-flex justify-content-between"
                      onClick={() => {
                        setShow(show === 2 ? 0 : 2);
                      }}
                    >
                      TRANG SỨC
                      <i
                        class={`fa fa-angle-down ${
                          show === 2 ? "up-down" : ""
                        }`}
                      ></i>
                    </p>
                    {show === 2 && (
                      <div className="menu-dropdown">
                        <ul>
                          <li> Vòng Tay</li>
                          <li>Nhẫn</li>
                          <li>Lắc Chân</li>
                          <li>Phụ Kiện Khác</li>
                        </ul>
                      </div>
                    )}
                  </li>
                  <li>
                    <p
                      className="d-flex justify-content-between"
                      onClick={() => {
                        setShow(show === 3 ? 0 : 3);
                      }}
                    >
                      PHỤ KIỆN
                      <i
                        class={`fa fa-angle-down ${
                          show === 3 ? "up-down" : ""
                        }`}
                      ></i>
                    </p>
                    {show === 3 && (
                      <div className="menu-dropdown">
                        <ul>
                          <li>Túi Xách</li>
                          <li>Đồng Hồ</li>
                        </ul>
                      </div>
                    )}
                  </li>
                  <li>
                    <p
                      className="d-flex justify-content-between"
                      onClick={() => {
                        setShow(show === 4 ? 0 : 4);
                      }}
                    >
                      NƯỚC HOA
                      <i
                        class={`fa fa-angle-down ${
                          show === 4 ? "up-down" : ""
                        }`}
                      ></i>
                    </p>
                    {show === 4 && (
                      <div className="menu-dropdown">
                        <ul>
                          <li> Nước Hoa Việt Nam</li>
                          <li>Nước Hoa Mỹ</li>
                          <li>Nước Hoa Pháp</li>
                          <li>Nước Hoa Nhật</li>
                        </ul>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
              <div className="product__compare">
                <h1 className="product__menu-title">SO SÁNH SẢN PHẨM</h1>
                <p>Bạn chưa có sản phẩm nào để so sánh</p>
              </div>
              <div className="product__tag">
                <h1 className="product__menu-title">TAG SẢN PHẨM</h1>
                <div className="product__tag-list">
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
              <div className="product__img">
                <p>
                  MANDALA <br />
                  STORE
                </p>
              </div>
            </div>
            <div className="col-lg-9 col-12">
              <div className="product__content">
                <div className="news_controlbar d-flex">
                  <div className="left">
                    <i
                      className="fa fa-th-large"
                      onClick={() => {
                        setTypeLayout(true);
                      }}
                    ></i>
                    <i
                      className="fa fa-list icon-right"
                      onClick={() => {
                        setTypeLayout(false);
                      }}
                    ></i>
                  </div>
                  <div className="right">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="#"
                            aria-label="Previous"
                          >
                            <span aria-hidden="true">
                              <i class="fa fa-caret-left"></i>
                            </span>
                            <span className="sr-only">Previous</span>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">
                              <i class="fa fa-caret-right"></i>
                            </span>
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="row">
                  {renderProductItem()}
                  {/* <PaginatedItems itemsPerPage={6} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
