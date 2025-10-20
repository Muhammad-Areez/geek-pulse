import Header from "../components/Header"
import Warning from "../components/warning"
import {Footer} from "../components/Footer"
import OurProducts from "../components/OurProducts"
import { images } from "../assets/images"

function CosmosEdition (){
    return(
        <div className="position-relative cosmos-edition-main">
            <Warning borderRadius={"0px"}/>
            <Header/>
            <section className="cosmos-hero-main">
                <div className="position-relative">
                    <h1>COSMOS</h1>
                    <span className="outline">COSMOS</span>
                </div>
                <div className="position-relative">
                    <h1>EDITIONS</h1>
                    <span className="outline">EDITIONS</span>
                </div>
                <img src={images.cosmosGalaxy} alt="galaxy" className="cosmos-galaxy"/>
                <img src={images.cosmosDevice1} alt="cosmosDevice1" className="cosmos-device1"/>
                <img src={images.cosmosDevice2} alt="cosmosDevice2" className="cosmos-device2"/>
            </section>
            <section>
                <OurProducts headingText="SIMILAR PRODUCTS" color="#fff"/>
            </section>
            <Footer/>
        </div>
    )
}

export default CosmosEdition