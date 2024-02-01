import Header from '../Components/header.jsx'
import Info from '../Components/info.jsx'
import Cards from '../Components/cards.jsx'
import Footer from '../Components/footer.jsx'

function Home(){

    return(
        <>
            <Header />
            <Info title="Home Page" />
            <Cards />
            <Footer title='Home Page' />
        </>
    )
}

export default Home