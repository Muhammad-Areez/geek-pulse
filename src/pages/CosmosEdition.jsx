import Header from "../components/Header"
import Warning from "../components/warning"
import {Footer} from "../components/Footer"
import OurProducts from "../components/OurProducts"

function CosmosEdition (){
    return(
        <div className="position-relative cosmos-edition-main">
            <Warning borderRadius={"0px"}/>
            <Header/>
            <section>
                
            </section>
            <section>
                <OurProducts headingText="SIMILAR PRODUCTS" color="#fff"/>
            </section>
            <Footer/>
        </div>
    )
}

export default CosmosEdition