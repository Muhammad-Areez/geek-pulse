import Header from "../components/Header"
import Warning from "../components/warning"
import { Footer } from "../components/Footer"
import OurProducts from "../components/OurProducts"
import { images } from "../assets/images"
import { Col, Container, Row } from "react-bootstrap"
import Version from "../components/Version"

const products = [
    {
        title: 'SIRUS A',
        image: images.cosmosProductDevice2
    },
    {
        title: 'URANUS',
        image: images.cosmosProductDevice3
    },
    {
        title: 'THE MOON',
        image: images.cosmosProductDevice4
    },
    {
        title: 'WHITE HOLE',
        image: images.cosmosProductDevice1
    },
    {
        title: 'BLACK HOLE',
        image: images.cosmosProductDevice5
    }
]

function CosmosEdition() {
    return (
        <div className="position-relative cosmos-edition-main">
            <Warning borderRadius={"0px"} />
            <Header />
            <section className="cosmo-hero-bg">
                <div className="cosmos-hero-main">
                    <div className="position-relative">
                        <h1>COSMOS</h1>
                        <span className="outline">COSMOS</span>
                    </div>
                    <div className="position-relative">
                        <h1>EDITIONS</h1>
                        <span className="outline">EDITIONS</span>
                    </div>
                    <img src={images.cosmosGalaxy} alt="galaxy" className="cosmos-galaxy" />
                    <img src={images.cosmosDevice1} alt="cosmosDevice1" className="cosmos-device1" />
                    <img src={images.cosmosDevice2} alt="cosmosDevice2" className="cosmos-device2" />
                    <img src={images.astronaut} alt="astronaut" className="astronaut" />
                </div>
                <div className="cosmos-ultra">
                    <img src={images.aeroplane} alt="aeroplane" className="cosmos-aeroplane-img"/>
                    <Container className="cosmos-ultra-cont">
                        <Version
                            showContext={false}
                            cosmosEdition={true}
                            featureColor="linear-gradient(#7C81FF, #A42789)"
                            features={[
                                { icon: images.versionIcon1, text: "E-CPU Inside" },
                                { icon: images.versionIcon2, text: "Dual Mesh Coil" },
                                { icon: images.versionIcon3, text: "Dual Core" },
                                {
                                    icon: images.versionIcon4,
                                    text: "Regular 40K<br />Pulse Mode 30K",
                                },
                                { icon: images.versionIcon5, text: "50 ML" },
                                { icon: images.versionIcon6, text: "5% Nicotine" },
                                { icon: images.versionIcon7, text: "Quick Charge" },
                            ]}
                        />
                    </Container>
                </div>
                <div className="cosmos-product-heading">
                    <h3>OUR PRODUCTS</h3>
                </div>
            </section>
            <section className="cosmos-product-main">
                <img src={images.matrix} alt="martix" className="cosmos-matrix"/>
                <Container>
                    <Row className="d_flex justify-content-center">
                        {
                            products.map((item,index)=>(
                                <Col md={4}>
                                    <div className="cosmos-product-card">
                                        <div className="cosmos-card-top">
                                            <img src={item.image} alt="Device" className="cosmos-device"/>
                                            <img src={images.cosmosStand} alt="Device"/>
                                        </div>
                                        <div className="cosmos-card-bottom">
                                            <h5>{item.title}</h5>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>
            <section>
                <OurProducts headingText="SIMILAR PRODUCTS" color="#fff" />
            </section>
            <Footer />
        </div>
    )
}

export default CosmosEdition