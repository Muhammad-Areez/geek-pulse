import { Col, Container, Row } from "react-bootstrap"
import { images } from "../assets/images"
import GlitchText from "../components/GlitchText"
import Header from "../components/Header"
import Warning from "../components/Warning"
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
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";

function RetroEditionPage() {
    return (
        <div className="position-relative retro-edition-main">
            <Warning backgroundColor="#F46CFE" borderRadius="0px" />
            <Header />
            <section className="retro-edition-hero">
                <motion.img
                    src={images.retroBanner1}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.img
                    src={images.retroBanner2}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.img
                    src={images.retroBanner3}
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.img
                    src={images.retroBanner4}
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <GlitchText
                    speed={3}
                    enableShadows={true}
                    enableOnHover={false}
                    className='retro-heading'
                >
                    RETRO
                </GlitchText>
                <GlitchText
                    speed={3}
                    enableShadows={true}
                    enableOnHover={false}
                    className='retro-heading'
                >
                    EDITION
                </GlitchText>
            </section>
            <section>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    loop={true}
                    modules={[Autoplay]}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    className="retro-sec-slider"
                    speed={1000}
                >
                    <SwiperSlide>
                        <div className="retro-sec">
                            <Row>
                                <Col md={6}>
                                    <div className="retro-sec-left">
                                        <motion.img
                                            src={images.starVector}
                                            className="star-vector1"
                                            alt="star"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        />
                                        <motion.img
                                            src={images.starVector}
                                            className="star-vector2"
                                            alt="star"
                                            animate={{ rotate: -360 }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        />
                                        <motion.img
                                            src={images.retroSec3}
                                            className="box-img"
                                            alt="retro"
                                            initial={{ y: 100, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="retro-sec-right">
                                        <motion.h3
                                            initial={{ x: 100, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            viewport={{ once: true }}
                                        >
                                            Turn back time with a modern twist. The Retro Edition brings
                                            nostalgic vibes to the future of vaping, bold design, vibrant
                                            colours, and three classic flavours that hit just right. It’s
                                            a tribute to the golden era, reimagined for today’s generation
                                            of Pulse lovers.
                                        </motion.h3>
                                        <motion.img
                                            src={images.pizzaIcon}
                                            initial={{ x: 100, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="retro-sec">
                            <Row>
                                <Col md={6}>
                                    <div className="retro-sec-left">
                                        <motion.img
                                            src={images.starVector}
                                            className="star-vector1"
                                            alt="star"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        />
                                        <motion.img
                                            src={images.starVector}
                                            className="star-vector2"
                                            alt="star"
                                            animate={{ rotate: -360 }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        />
                                        <motion.img
                                            src={images.retroSec2}
                                            className="box-img"
                                            alt="retro"
                                            initial={{ y: 100, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="retro-sec-right" style={{background:'#F46CFE'}}>
                                        <motion.h3
                                            initial={{ x: 100, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            viewport={{ once: true }}
                                        >
                                            Turn back time with a modern twist. The Retro Edition brings
                                            nostalgic vibes to the future of vaping, bold design, vibrant
                                            colours, and three classic flavours that hit just right. It’s
                                            a tribute to the golden era, reimagined for today’s generation
                                            of Pulse lovers.
                                        </motion.h3>
                                        <motion.img
                                            src={images.pizzaIcon}
                                            initial={{ x: 100, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="retro-sec">
                            <Row>
                                <Col md={6}>
                                    <div className="retro-sec-left">
                                        <motion.img
                                            src={images.starVector}
                                            className="star-vector1"
                                            alt="star"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        />
                                        <motion.img
                                            src={images.starVector}
                                            className="star-vector2"
                                            alt="star"
                                            animate={{ rotate: -360 }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        />
                                        <motion.img
                                            src={images.retroSec1}
                                            className="box-img"
                                            alt="retro"
                                            initial={{ y: 100, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="retro-sec-right" style={{background:"#01004C"}}>
                                        <motion.h3
                                            initial={{ x: 100, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            viewport={{ once: true }}
                                        >
                                            Turn back time with a modern twist. The Retro Edition brings
                                            nostalgic vibes to the future of vaping, bold design, vibrant
                                            colours, and three classic flavours that hit just right. It’s
                                            a tribute to the golden era, reimagined for today’s generation
                                            of Pulse lovers.
                                        </motion.h3>
                                        <motion.img
                                            src={images.pizzaIcon}
                                            initial={{ x: 100, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
            <section className="retro-products">
                <h3>PRODUCT</h3>
                <Container>
                    <Row className="retro-product-row">
                        <Col md={3}>
                            <div className="retro-product-card">
                                <motion.h5
                                    initial={{ x: -100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                >
                                    Groove Grape
                                </motion.h5>
                                <div className="retro-product-img-main">
                                    <img src={images.retroProductVector1} alt="vector" className="retro-product-vector1" />
                                    <img src={images.retroProductVector2} alt="vector" className="retro-product-vector2" />
                                    <motion.img
                                        src={images.retroProduct1}
                                        alt="product"
                                        className="retro-product-img"
                                        initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                    />
                                    <img src={images.retroBox2} alt="box" className="retro-box-img" />
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="retro-product-card">
                                <motion.h5
                                    initial={{ x: -100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    Neon Grape Soda
                                </motion.h5>
                                <div className="retro-product-img-main">
                                    <img src={images.retroProductVector3} alt="vector" className="retro-product-vector1" />
                                    <motion.img
                                        src={images.retroProduct2}
                                        alt="product"
                                        className="retro-product-img"
                                        initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                        viewport={{ once: true }}
                                    />
                                    <img src={images.retroBox3} alt="box" className="retro-box-img" />
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="retro-product-card">
                                <motion.h5
                                    initial={{ x: -100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    Strawberry Rollerpink
                                </motion.h5>
                                <div className="retro-product-img-main">
                                    <img src={images.retroProductVector1} alt="vector" className="retro-product-vector3" />
                                    <motion.img
                                        src={images.retroProduct3}
                                        alt="product"
                                        className="retro-product-img"
                                        initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                                        viewport={{ once: true }}
                                    />
                                    <img src={images.retroBox1} alt="box" className="retro-box-img" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="retro-simper-main">
                <img src={images.retroSimperBg} alt="bg" className="retro-simper-bg" />
                <Container className="retro-simper-cont">
                    <motion.h4
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.1 }}
                        style={{ display: 'inline-block' }}
                    >
                        {"SIMILAR PRODUCTS".split("").map((char, index) => (
                            <motion.span
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                }}
                                style={{ display: 'inline-block' }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h4>
                    <Swiper
                        className="mySwiper"
                        effect="coverflow"
                        slidesPerView={1}
                        spaceBetween={100}
                        centeredSlides={true}
                        initialSlide={1}
                        loop={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 300,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        breakpoints={{
                            768: { slidesPerView: 2, spaceBetween: 150 },
                            1024: { slidesPerView: 2, spaceBetween: 150 },
                            1200: { slidesPerView: 2, spaceBetween: 150 },
                        }}
                        modules={[EffectCoverflow, Autoplay]}
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