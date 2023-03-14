import Navber from '../../Components/Navber/Navber';
import Header from '../../Components/Header/Header';
import './Home.css';
import Featured from '../../Components/Featured/Featured';
import PropertyList from '../../Components/PropertyList/PropertyList';

const Home = () => {
    return (
        <div>
            <Navber />
            <Header/>
            <div className="homeContainer">
                <Featured/>
                <h1 className='homeTitle'>Browse by property type</h1>
                <PropertyList/>
            </div>
        </div>
    )
}

export default Home