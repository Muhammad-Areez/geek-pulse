import { Col, Row } from "react-bootstrap"
import { images } from "../assets/images"
import GlitchText from "../components/GlitchText"
import Header from "../components/Header"
import Warning from "../components/warning"

function RetroEditionPage () {
    return(
        <div className="position-relative retro-edition-main">
            <Warning backgroundColor="#F46CFE" borderRadius="0px"/>
            <Header/>
            <section className="retro-edition-hero">
                <img src={images.retroBanner1}/>
                <img src={images.retroBanner2}/>
                <img src={images.retroBanner3}/>
                <img src={images.retroBanner4}/>
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
                            <img src={images.retroSec}/>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="retro-sec-right">

                        </div>
                    </Col>
                </Row>
            </section>
        </div>
    )
}

export default RetroEditionPage