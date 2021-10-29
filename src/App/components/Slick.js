import React from "react";
import Slider from "react-slick";
import ava1 from "../../assets/images/feedback_1--img.png";
import ava2 from "../../assets/images/feedback_2--img.png";

function Slick() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="slick_wrapper container">
        <Slider {...settings}>
          <div className="slick_item">
            <div className="ava">
              <div className="img-fluid">
                <img src={ava1} alt="" />
              </div>
            </div>
            <div className="slick_content">
              <div className="col-lg-8 col-sm-12">
                <span>
                  "Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng,
                  hồng làm chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai
                  cầm trên tay sản phẩm ấy! Với công nghệ cải tiến mới nhất,
                  hảng Rohto"
                </span>
                <div className="slick_info">
                  <h6>
                    TUTILE
                    <span> _ Giám đốc phát triển sản phẩm</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="slick_item">
            <div className="ava">
              <div className="img-fluid">
                <img src={ava1} alt="" />
              </div>
            </div>
            <div className="slick_content">
              <div className="col-lg-8 col-sm-12">
                <span>
                  "Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng,
                  hồng làm chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai
                  cầm trên tay sản phẩm ấy! Với công nghệ cải tiến mới nhất,
                  hảng Rohto"
                </span>
                <div className="slick_info">
                  <h6>
                    TUTILE
                    <span> _ Giám đốc phát triển sản phẩm</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="slick_item">
            <div className="ava">
              <div className="img-fluid">
                <img src={ava2} alt="" />
              </div>
            </div>
            <div className="slick_content">
              <div className="col-lg-8 col-sm-12">
                <span>
                  "Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng,
                  hồng làm chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai
                  cầm trên tay sản phẩm ấy! Với công nghệ cải tiến mới nhất,
                  hảng Rohto"
                </span>
                <div className="slick_info">
                  <h6>
                    TUTILE
                    <span> _ Giám đốc phát triển sản phẩm</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="slick_wrapper_mobile">
        <div className="container">
          <Slider {...settings}>
            <div className="slick_mobile-item">
              <div className="item-content">
                <span>
                  "Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng,
                  hồng làm chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai
                  cầm trên tay sản phẩm ấy! Với công nghệ cải tiến mới nhất,
                  hảng Rohto"
                </span>
              </div>
              <div className="item-author d-flex">
                <div className="author-ava">
                  <img src={ava1} alt="" />
                </div>
                <div className="author-info">
                  <h6>TUTILE</h6>
                  <span>Giám đốc phát triển sản phẩm</span>
                </div>
              </div>
            </div>
            <div className="slick_mobile-item">
              <div className="item-content">
                <span>
                  "Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng,
                  hồng làm chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai
                  cầm trên tay sản phẩm ấy! Với công nghệ cải tiến mới nhất,
                  hảng Rohto"
                </span>
              </div>
              <div className="item-author d-flex">
                <div className="author-ava">
                  <img src={ava1} alt="" />
                </div>
                <div className="author-info">
                  <h6>TUTILE</h6>
                  <span>Giám đốc phát triển sản phẩm</span>
                </div>
              </div>
            </div>
            <div className="slick_mobile-item">
              <div className="item-content">
                <span>
                  "Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng,
                  hồng làm chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai
                  cầm trên tay sản phẩm ấy! Với công nghệ cải tiến mới nhất,
                  hảng Rohto"
                </span>
              </div>
              <div className="item-author d-flex">
                <div className="author-ava">
                  <img src={ava2} alt="" />
                </div>
                <div className="author-info">
                  <h6>TUTILE</h6>
                  <span>Giám đốc phát triển sản phẩm</span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Slick;
