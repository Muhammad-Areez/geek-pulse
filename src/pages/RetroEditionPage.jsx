import { Col, Container, Row } from "react-bootstrap"
import { images } from "../assets/images"
import GlitchText from "../components/GlitchText"
import Header from "../components/Header"
import Warning from "../components/warning"
import { Footer } from "../components/Footer"
import { Swiper, SwiperSlide } from "swiper/react";
import retro from "../assets/images/Retro-editions.png";
import frozen from "../assets/images/Frozen-editions.png";
import seasonal from "../assets/images/Seasonal-editions.png";
import basic from "../assets/images/Basic-editions.png";
import cosmo from "../assets/images/Cosmo-editions.png";
import smoothie from "../assets/images/Smoothie-editions.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

function RetroEditionPage() {
    return (
        <div className="position-relative retro-edition-main">
            <Warning backgroundColor="#F46CFE" borderRadius="0px" />
            <Header />
            <section className="retro-edition-hero">
                <img src={images.retroBanner1} />
                <img src={images.retroBanner2} />
                <img src={images.retroBanner3} />
                <img src={images.retroBanner4} />
                <GlitchText
                    speed={2}
                    enableShadows={true}
                    enableOnHover={false}
                    className='retro-heading'
                >
                    RETRO
                </GlitchText>
                <GlitchText
                    speed={2}
                    enableShadows={true}
                    enableOnHover={false}
                    className='retro-heading'
                >
                    EDITION
                </GlitchText>
            </section>
            <section className="retro-sec">
                <Row>
                    <Col md={6}>
                        <div className="retro-sec-left">
                            <img src={images.starVector} className="star-vector1" />
                            <img src={images.starVector} className="star-vector2" />
                            <img src={images.retroSec} className="box-img" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="retro-sec-right">
                            <h3>Turn back time with a modern twist. The Retro Edition brings nostalgic vibes to the future of vaping, bold design, vibrant colours, and three classic flavours that hit just right. It’s a tribute to the golden era, reimagined for today’s generation of Pulse lovers.</h3>
                        </div>
                    </Col>
                </Row>
            </section>
            <section className="retro-products">
                <h3>PRODUCT</h3>
                <Container>
                    <Row className="retro-product-row">
                        <Col md={3}>
                            <div className="retro-product-card">
                                <h5>Groove Grape</h5>
                                <div className="retro-product-img-main">
                                    <img src={images.retroProductVector1} alt="vector" className="retro-product-vector1" />
                                    <img src={images.retroProductVector2} alt="vector" className="retro-product-vector2" />
                                    <img src={images.retroProduct1} alt="product" className="retro-product-img" />
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="retro-product-card">
                                <h5>Neon Grape Soda</h5>
                                <div className="retro-product-img-main">
                                    <img src={images.retroProductVector3} alt="vector" className="retro-product-vector1" />
                                    <img src={images.retroProduct2} alt="product" className="retro-product-img" />
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="retro-product-card">
                                <h5>Strawberry Rollerpink</h5>
                                <div className="retro-product-img-main">
                                    <img src={images.retroProductVector1} alt="vector" className="retro-product-vector3" />
                                    <img src={images.retroProduct3} alt="product" className="retro-product-img" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="retro-simper-main">
                <img src={images.retroSimperBg} alt="bg" className="retro-simper-bg"/>
                <Container className="retro-simper-cont">
                <Swiper
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 2, spaceBetween: 30 },
          1200: { slidesPerView: 2, spaceBetween: 20 },
        }}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {[retro, frozen, seasonal, basic, cosmo, smoothie].map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt={`Product ${i + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
                </Container>
            </section>
            <Footer
                background="#00A651"
            />
        </div>
    )
}

export default RetroEditionPage