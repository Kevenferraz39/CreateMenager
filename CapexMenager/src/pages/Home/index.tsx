import Header from '../../components/Header'
import { Helmet } from 'react-helmet'
import './Home.css'

const Home = () =>{
    return(
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Header/>
        </>
    )
}
export default Home