
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';
import './defaultLayout.css'
import GuestLayout from './guestLayout';
function defaultLayout(props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return (
            <div className='default'>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }
    return <GuestLayout/>
   
}

export default defaultLayout;   