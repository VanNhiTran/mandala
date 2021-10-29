import React from "react";
import location from "../../assets/images/map.svg";
import phone from "../../assets/images/phone.svg";
import fax from "../../assets/images/fax.svg";
import mail from "../../assets/images/email.svg";
import card from "../../assets/images/footer_extend.png";

function Footer() {
  return (
    <footer className="text-center text-lg-start text-muted footer">
      <div className="container text-left text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-lg-4 col-12 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              LIÊN HỆ VỚI CHÚNG TÔI
            </h6>
            <div className="footer_contact">
              <div className="d-flex">
                <div className="footer_contact-icon">
                  <img src={location} alt="" />
                </div>
                <p>
                  Tầng 4, tòa nhà Hanoi Group Số 442 Đội Cấn, P.Cống Vị, Q. Ba
                  Đình, Hà Nội
                </p>
              </div>

              <div className="d-flex">
                <div className="footer_contact-icon">
                  <img src={phone} alt="" />
                </div>
                <p>(04) 6674 2332</p>
                <span>-</span>
                <div className="footer_contact-icon">
                  <img src={fax} alt="" />
                </div>
                <p>(04) 3786 8904</p>
              </div>
              <div className="d-flex">
                <div className="footer_contact-icon">
                  <img src={phone} alt="" />
                </div>
                <p>(04) 6680 9686</p>
                <span>-</span>
                <div className="footer_contact-icon">
                  <img src={mail} alt="" />
                </div>
                <a href="mailto: Support@bizweb.vn">Support@bizweb.vn</a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-12 mx-auto mb-4">
            <h6 className="mb-4">CHUYỂN HÀNG</h6>
            <ul className="footer_contact">
              <li>Mua sắm trực tuyến</li>
              <li>Đến từ chúng tôi gửi đến</li>
              <li>Chính sách vận chuyển</li>
              <li>Vận chuyển thông tin</li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 col-12 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">HỖ TRỢ</h6>
            <ul className="footer_contact">
              <li>Câu chuyện của chúng tôi</li>
              <li>Thanh toán an toàn</li>
              <li>Tùy chọn vận chuyển</li>
              <li>Chính sách vận chuyển</li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 col-12 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">THÔNG TIN</h6>
            <ul className="footer_contact">
              <li>Về chúng tôi</li>
              <li>Điều khoản & Điều kiện</li>
              <li>Chính sách riêng tư</li>
              <li>Đơn đặt hàng và returns</li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 col-12  mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">MY ACCOUNT</h6>
            <ul className="footer_contact">
              <li>Xem giỏ hàng</li>
              <li>Sản phẩm yêu thích</li>
              <li>Kiểm tra</li>
              <li>Theo dõi đặt hàng của tôi</li>
            </ul>
          </div>
        </div>
        <div className="row  footer__bottom">
          <div className="col-sm-8 col-12">
            <p>© Copyright 2008-2014 DKT Technology JSC</p>
          </div>
          <div className="col-sm-4 col-12 footer_img">
            <img src={card} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
