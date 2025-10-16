import { Col, Container, Row } from "react-bootstrap"
import { images } from "../assets/images"
import { Link } from "react-router-dom"

export const Footer = () => {
    return(
        <Container className="footer-main">
            <img src={images.matrix} className="matrix-img" />
            <Row>
                <Col md={5}>
                    <img src={images.logo} className="footer-logo"/>
                    <h5>Copyright © Geek Pulse | All Rights Served</h5>
                    <ul>
                        <li>
                            <Link>
                                <img src={images.facebook}/>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <img src={images.twitter}/>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <img src={images.instagram}/>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <img src={images.linkedin}/>
                            </Link>
                        </li>
                    </ul>
                </Col>
                <Col md={2}>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link>About Us</Link></li>
                        <li><Link>VPU</Link></li>
                        <li><Link>WholeSale</Link></li>
                        <li><Link>Products</Link></li>
                        <li><Link>Licenses</Link></li>
                        <li><Link>Changelog</Link></li>
                    </ul>
                </Col>
                <Col md={2}>
                    <h4>Product Links</h4>
                    <ul>
                        <li><Link>Retro Edition</Link></li>
                        <li><Link>Smoothie Edition</Link></li>
                        <li><Link>Frozen Edition</Link></li>
                        <li><Link>Cosmo Edition</Link></li>
                        <li><Link>Basic Edition</Link></li>
                        <li><Link>Seasonal Edition</Link></li>
                    </ul>
                </Col>
                <Col md={3}>
                    <h4>Contact us</h4>
                    <ul>
                        <li>
                            <p>Write us an email</p>
                            <a href="#">contact@geekpulse.com</a>
                        </li>
                        <li>
                            <p>Give us a call</p>
                            <a href="#">(123) 456 - 7890</a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}