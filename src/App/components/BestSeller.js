import React from "react";
import Slider from "react-slick";
import product1 from "../../assets/images/product_1.jpg";
import product2 from "../../assets/images/product_2.jpg";
import product3 from "../../assets/images/product_3.jpg";
import product4 from "../../assets/images/product_4.jpg";
import product5 from "../../assets/images/product_5.jpg";
import product6 from "../../assets/images/product_6.jpg";
import product8 from "../../assets/images/product_8.png";
import product9 from "../../assets/images/product_9.png";
import nextbtn from "../../assets/images/prev.svg";
import prevbtn from "../../assets/images/next.svg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={nextbtn}
      alt=""
      className={className}
      style={{
        ...style,
        display: "block",
        right: "20%",
        width: "3rem",
        height: "2rem",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      alt=""
      src={prevbtn}
      className={className}
      style={{
        ...style,
        display: "block",
        width: "3rem",
        height: "2rem",
        left: "20%",
        zIndex: "999",
      }}
      onClick={onClick}
    />
  );
}

function BestSeller() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="bestseller_wrapper">
      <div className="bestseller_title">
        <div className="title_item">
          <span>S???n ph???m m???i</span>
        </div>
        <div className="title_item center">
          <span>S???n ph???m b??n ch???y </span>
        </div>
        <div className="title_item">
          <span>S???n ph???m ?????c bi???t</span>
        </div>
      </div>
      <div className="linebottom">
        <div className="line_before"></div>
        <span>///////////</span>
        <div className="line_after"></div>
      </div>
      <div className="bestseller_option">
        <div className="container option_desktop">
          <div className="option_item">M??? ph???m</div>
          <div className="option_item">Ch??m s??c da</div>
          <div className="option_item">D??nh cho t??c</div>
          <div className="option_item">N?????c hoa</div>
          <div className="option_item">Trang s???c</div>
          <div className="option_item">Qu?? t???ng</div>
        </div>
        <div className="container option_mobile">
          <div className="left">
            <div className="option_item">M??? ph???m</div>
            <div className="option_item">Ch??m s??c da</div>
            <div className="option_item">D??nh cho t??c</div>
          </div>
          <div className="right">
            <div className="option_item">N?????c hoa</div>
            <div className="option_item">Trang s???c</div>
            <div className="option_item">Qu?? t???ng</div>
          </div>
        </div>
      </div>
      <div className="bestseller_carousel">
        <Slider {...settings}>
          <div className="bestseller_item">
            <div className="img">
              <img src={product1} alt="" />
            </div>
            <div className="content">
              <p className="name">TYFFANY</p>
              <p className="title">M??? ph???m ch??u ??u </p>
              <div className="line"></div>

              <div className="price">
                <p className="price_sale">
                  355.000 <span>??</span>{" "}
                </p>
                <p className="price_normal">
                  450.000 <span>??</span>
                </p>
              </div>
            </div>
            {/* <div className="bestseller_btn">
              <button className="buy">MUA H??NG</button>
              <button className="heart">
                <i className="fa fa-heart"></i>
              </button>
              <button></button>
            </div> */}
          </div>
          <div className="bestseller_item">
            <div className="img">
              <img src={product2} alt="" />
            </div>
            <div className="content">
              <p className="name">TYFFANY</p>
              <p className="title">M??? ph???m ch??u ??u </p>
              <div className="line"></div>

              <div className="price">
                <p className="price_sale">
                  355.000 <span>??</span>{" "}
                </p>
                <p className="price_normal">
                  450.000 <span>??</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bestseller_item">
            <div className="img">
              <img src={product3} alt="" />
            </div>
            <div className="content">
              <p className="name">TYFFANY</p>
              <p className="title">M??? ph???m ch??u ??u </p>
              <div className="line"></div>

              <div className="price">
                <p className="price_sale">
                  355.000 <span>??</span>{" "}
                </p>
                <p className="price_normal">
                  450.000 <span>??</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bestseller_item">
            <div className="img">
              <img src={product4} alt="" />
            </div>
            <div className="content">
              <p className="name">TYFFANY</p>
              <p className="title">M??? ph???m ch??u ??u </p>
              <div className="line"></div>

              <div className="price">
                <p className="price_sale">
                  355.000 <span>??</span>{" "}
                </p>
                <p className="price_normal">
                  450.000 <span>??</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bestseller_item">
            <div className="img">
              <img src={product5} alt="" />
            </div>
            <div className="content">
              <p className="name">TYFFANY</p>
              <p className="title">M??? ph???m ch??u ??u </p>
              <div className="line"></div>

              <div className="price">
                <p className="price_sale">
                  355.000 <span>??</span>{" "}
                </p>
                <p className="price_normal">
                  450.000 <span>??</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bestseller_item">
            <div className="img">
              <img src={product6} alt="" />
            </div>
            <div className="content">
              <p className="name">TYFFANY</p>
              <p className="title">M??? ph???m ch??u ??u </p>
              <div className="line"></div>

              <div className="price">
                <p className="price_sale">
                  355.000 <span>??</span>{" "}
                </p>
                <p className="price_normal">
                  450.000 <span>??</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bestseller_item">
            <div className="img">
              <img src={product8} alt="" />
            </div>
            <div className="content">
              <p className="name">TYFFANY</p>
              <p className="title">M??? ph???m ch??u ??u </p>
              <div className="line"></div>

              <div className="price">
                <p className="price_sale">
                  355.000 <span>??</span>{" "}
                </p>
                <p className="price_normal">
                  450.000 <span>??</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bestseller_item">
            <div className="img">
              <img src={product9} alt="" />
            </div>
            <div className="content">
              <p className="name">TYFFANY</p>
              <p className="title">M??? ph???m ch??u ??u </p>
              <div className="line"></div>

              <div className="price">
                <p className="price_sale">
                  355.000 <span>??</span>{" "}
                </p>
                <p className="price_normal">
                  450.000 <span>??</span>
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default BestSeller;
