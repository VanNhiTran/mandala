import React from "react";
import { NavLink } from "react-router-dom";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__top">
          <NavLink to="/" className="active">
            Home <i className="fa fa-angle-right"></i>
          </NavLink>
          <a href="/news">Liên hệ</a>
        </div>
        <h1>LIÊN HỆ</h1>

        <div className="contact__content row">
          <div className="contact__content-map col-lg-6 col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.2797540092415!2d108.20346501460054!3d16.05096628889219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219bbac29a89b%3A0xd1216d40b4bca153!2zMTUwIER1eSBUw6JuLCBIw7JhIFRodeG6rW4gTmFtLCBI4bqjaSBDaMOidSwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1635236846365!5m2!1svi!2s"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="contact__content-form col-lg-6 col-12">
            <form action="">
              <h3>GỬI EMAIL CHO CHÚNG TÔI</h3>
              <div className="form__group">
                <label htmlFor="">Tên *</label>
                <input type="text" />
              </div>
              <div className="form__group">
                <label htmlFor="">Email *</label>
                <input type="text" />
              </div>
              <div className="form__group">
                <label htmlFor="">Tin nhắn *</label>
                <textarea rows="10"></textarea>
              </div>
              <div className="form__btn">
                <button>GỬI</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
