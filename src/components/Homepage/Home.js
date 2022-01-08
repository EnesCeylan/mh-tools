import './Home.css';
const Home = () => {


    return (
        <div className='home-container'>
            <img
                src={process.env.PUBLIC_URL + '/assets/Background/Homepage_Banner.png'}
                alt="homepage banner"
                className="home-banner"
            />
            <p className="home-message"> "You don't have to do this, OwO-kun"</p>
            <p className="home-message"> ( OwO)づ︻╦̵̵̿╤── \(UwU)/</p>
            <p className="home-message"> "...It has to be done...UwU-chan..."</p>
            <p className="home-message"> And they all live happily ever after</p>
        </div>
    );
};

export default Home;
