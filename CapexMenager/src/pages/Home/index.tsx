import Header from '../../components/Header';
import { Helmet } from 'react-helmet';
import './Home.css'; // Importe o arquivo CSS

const Home = () => {
    return (
        <div className="Home"> 
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Header />
        </div>
    );
}

export default Home;
