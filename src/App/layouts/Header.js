import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import product from "../../assets/images/product.png";

function Header() {
  const [show, setShow] = useState(false);
  return (
    <div className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="" />
          </NavLink>

          <div className="header_desktop">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/">
                    TRANG CHỦ <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/introduction">
                    GIỚI THIỆU
                  </NavLink>
                </li>
                <li className="nav-item nav-item_product">
                  <NavLink className="nav-link" to="/product">
                    SẢN PHẨM
                    <i className="fa fa-chevron-down"></i>
                  </NavLink>
                  <div className="disable-div"></div>
                  <div className="nav-item_dropdown">
                    <div className="nav-item_icon">
                      <i className="fa fa-sort-up"></i>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <h3>DƯỠNG DA</h3>
                        <ul>
                          <li>
                            <NavLink to="/product-detail">Áo khoác</NavLink>
                          </li>
                          <li>
                            <NavLink to="/product-detail">
                              Bộ áo liền quần
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/product-detail">Dresses</NavLink>
                          </li>
                          <li>
                            <NavLink to="/product-detail">Quần / váy</NavLink>
                          </li>
                          <li>
                            <NavLink to="/product-detail">Quần shorts</NavLink>
                          </li>
                          <li>
                            <NavLink to="/product-detail">Quần jeans</NavLink>
                          </li>
                          <li>
                            <NavLink to="/product-detail">Đồ đan</NavLink>
                          </li>
                          <li>
                            <NavLink to="/product-detail">Áo nỉ</NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className="col-4">
                        <h3>NƯỚC HOA</h3>
                        <ul>
                          <li>
                            <NavLink to="/product-detail">Áo khoác</NavLink>
                          </li>
                          <li>
                            <NavLink to="/product-detail">
                              Bộ áo liền quần
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/product-detail">Dresses</NavLink>
                          </li>
                          <li>
                            <NavLink to="/product-detail">Quần / váy</NavLink>
                          </li>
                          <li>
                            <NavLink to="/product-detail">Quần shorts</NavLink>
                          </li>
                          <li>
                            <NavLink to="/product-detail">Quần jeans</NavLink>
                          </li>
                          <li>
                            <NavLink to="/product-detail">Đồ đan</NavLink>
                          </li>
                          <li>
                            <NavLink to="/product-detail">Áo nỉ</NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className="col-4">
                        <h3>TRANG SỨC</h3>
                        <ul>
                          <li>
                            <NavLink to="/product-detail">Áo khoác</NavLink>
                          </li>
                          <li>
                            <NavLink to="/product-detail">
                              Bộ áo liền quần
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/product-detail">Dresses</NavLink>
                          </li>
                          <li>
                            <NavLink to="/product-detail">Quần / váy</NavLink>
                          </li>
                          <li>
                            <NavLink to="/product-detail">Quần shorts</NavLink>
                          </li>
                          <li>
                            <NavLink to="/product-detail">Quần jeans</NavLink>
                          </li>
                          <li>
                            <NavLink to="/product-detail">Đồ đan</NavLink>
                          </li>
                          <li>
                            <NavLink to="/product-detail">Áo nỉ</NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/news">
                    TIN TỨC
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/404">
                    BẢN ĐỒ
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    LIÊN HỆ
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="navbar_icon">
            <a className="icon_cart icon-left" href="#">
              <i className="fa fa-shopping-cart"></i>
              <div className="disable-div"></div>
              <div className="cart_dropdown">
                <div className="cart_icon">
                  <i className="fa fa-sort-up"></i>
                </div>
                <div className="cart_wrapper">
                  <div className="row">
                    <div className="col-4">
                      <img src={product} alt="" />
                    </div>
                    <div className="col-5">
                      <div className="cart_name">Áo sơ mi Nam</div>
                      <div className="price">
                        120.000 <span>đ</span>
                      </div>
                    </div>
                    <div className="col-3">
                      <i className="fa fa-times"></i>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <img src={product} alt="" />
                    </div>
                    <div className="col-5">
                      <div className="cart_name">Áo sơ mi Nam</div>
                      <div className="price">
                        120.000 <span>đ</span>
                      </div>
                    </div>
                    <div className="col-3">
                      <i className="fa fa-times"></i>
                    </div>
                  </div>
                  <div className="cart_price d-flex justify-content-between">
                    <p className="price-title">Tổng số</p>
                    <p className="price">
                      240.000 <span>đ</span>
                    </p>
                  </div>
                  <button className="cart-btn">
                    <a href="/cart">GIỎ HÀNG</a>
                  </button>
                </div>
              </div>
            </a>
            <a href="#" className="icon_cart">
              <i className="fa fa-search"></i>
            </a>
            <button
              onClick={() => setShow(!show)}
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
        </nav>
        {show && (
          <div className="header_mobile">
            <ul>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  TRANG CHỦ
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/introduction">
                  GIỚI THIỆU
                </NavLink>
              </li>
              <li className="nav-item nav-item_product">
                <NavLink className="nav-link" to="/product">
                  SẢN PHẨM <i className="fa fa-chevron-down"></i>
                </NavLink>
                <div className="nav-item_dropdown">
                  <div className="row">
                    <div className="col-4">
                      <h3>DƯỠNG DA</h3>
                      <ul>
                        <li>
                          <NavLink to="/product-detail">Áo khoác</NavLink>
                        </li>
                        <li>
                          <NavLink to="/product-detail">
                            Bộ áo liền quần
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/product-detail">Dresses</NavLink>
                        </li>
                        <li>
                          <NavLink to="/product-detail">Quần / váy</NavLink>
                        </li>
                        <li>
                          <NavLink to="/product-detail">Quần shorts</NavLink>
                        </li>
                        <li>
                          <NavLink to="/product-detail">Quần jeans</NavLink>
                        </li>
                        <li>
                          <NavLink to="/product-detail">Đồ đan</NavLink>
                        </li>
                        <li>
                          <NavLink to="/product-detail">Áo nỉ</NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="col-4">
                      <h3>NƯỚC HOA</h3>
                      <ul>
                        <li>
                          <NavLink to="/product-detail">Áo khoác</NavLink>
                        </li>
                        <li>
                          <NavLink to="/product-detail">
                            Bộ áo liền quần
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/product-detail">Dresses</NavLink>
                        </li>
                        <li>
                          <NavLink to="/product-detail">Quần / váy</NavLink>
                        </li>
                        <li>
                          <NavLink to="/product-detail">Quần shorts</NavLink>
                        </li>
                        <li>
                          <NavLink to="/product-detail">Quần jeans</NavLink>
                        </li>
                        <li>
                          <NavLink to="/product-detail">Đồ đan</NavLink>
                        </li>
                        <li>
                          <NavLink to="/product-detail">Áo nỉ</NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="col-4">
                      <h3>TRANG SỨC</h3>
                      <ul>
                        <li>
                          <NavLink to="/product-detail">Áo khoác</NavLink>
                        </li>
                        <li>
                          <NavLink to="/product-detail">
                            Bộ áo liền quần
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/product-detail">Dresses</NavLink>
                        </li>
                        <li>
                          <NavLink to="/product-detail">Quần / váy</NavLink>
                        </li>
                        <li>
                          <NavLink to="/product-detail">Quần shorts</NavLink>
                        </li>
                        <li>
                          <NavLink to="/product-detail">Quần jeans</NavLink>
                        </li>
                        <li>
                          <NavLink to="/product-detail">Đồ đan</NavLink>
                        </li>
                        <li>
                          <NavLink to="/product-detail">Áo nỉ</NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/news">
                  TIN TỨC
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/404">
                  BẢN ĐỒ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  LIÊN HỆ
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
