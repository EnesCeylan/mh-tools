import './Home.css';
const Home = () => {


    return (
        <div className='home-container'>
            <img
                src={process.env.PUBLIC_URL + '/assets/Background/Homepage_Banner.png'}
                alt="homepage banner"
                className="home-banner"
            />
        </div>
    );
};

export default Home;
