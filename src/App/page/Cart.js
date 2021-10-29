import React from "react";
import { NavLink } from "react-router-dom";
import cartImg from "../../assets/images/cart_product_1.png";

function Cart() {
  return (
    <div className="cart">
      <div className="container">
        <div className="cart__top">
          <NavLink to="/" className="active">
            Home <i className="fa fa-angle-right"></i>
          </NavLink>
          <a href="/">Cart</a>
        </div>
        <h1 className="cart__title">GIỎ HÀNG</h1>
        <table className="cart__table">
          <thead>
            <th>ẢNH</th>
            <th>SẢN PHẨM</th>
            <th>GIÁ</th>
            <th>SỐ LƯỢNG</th>
            <th>TỔNG SỐ</th>
            <th>XÓA</th>
          </thead>
          <tbody>
            <tr>
              <td className="table__img">
                <img src={cartImg} alt="" />
              </td>
              <td className="table__name">
                <p> lắc tay D&G</p>
              </td>
              <td className="table_price">
                <p>
                  345.000 <span>đ</span>
                </p>
              </td>
              <td>
                <p>1</p>
              </td>
              <td className="table_total">
                <p>
                  345.000 <span>đ</span>
                </p>
              </td>
              <td className="table_delete">
                <i className="fa fa-trash-alt"></i>
              </td>
            </tr>
            <tr>
              <td className="table__img">
                <img src={cartImg} alt="" />
              </td>
              <td className="table__name">
                <p> lắc tay D&G</p>
              </td>
              <td className="table_price">
                <p>
                  345.000 <span>đ</span>
                </p>
              </td>
              <td>
                <p>1</p>
              </td>
              <td className="table_total">
                <p>
                  345.000 <span>đ</span>
                </p>
              </td>
              <td className="table_delete">
                <i className="fa fa-trash-alt"></i>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="cart__btn">
          <button>TIẾP TỤC MUA HÀNG</button>
          <button>XÓA</button>
          <button>CẬP NHẬT</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
