import Navber from '../../Components/Navber/Navber';
import Header from '../../Components/Header/Header';
import './Home.css';
import Featured from '../../Components/Featured/Featured';
import PropertyList from '../../Components/PropertyList/PropertyList';
import FeaturedProperties from '../../Components/FeaturedProperties/FeaturedProperties';
import MailList from '../../Components/MailList/MailList';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navber />
            <Header/>
            <div className="homeContainer">
                <Featured/>
                <h1 className='homeTitle'>Browse by property type</h1>
                <PropertyList/>
                <h1 className='homeTitle'>Browse by property type</h1>
                <FeaturedProperties/>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home