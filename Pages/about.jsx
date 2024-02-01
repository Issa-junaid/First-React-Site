import Header from '../Components/header.jsx'
import Info from '../Components/info.jsx'
import Cards from '../Components/cards.jsx'
import Footer from '../Components/footer.jsx'

function About(){

    return(
        <div>
            <Header />
            <Info title="About Page" />
            <Cards />
            <Footer title="About Page" />
        </div>
    )
}

export default About