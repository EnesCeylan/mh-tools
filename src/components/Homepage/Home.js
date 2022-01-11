import './Home.css';

const Home = () => {

    const socialArr = ['Main', 'Google_Play', 'Appstore', 'Discord', 'Facebook', 'Youtube', 'Instagram', 'Twitter', 'Twitch', 'Reddit']
    const socialURL = ['https://www.mythicheroes.com/',
        'https://play.google.com/store/apps/details?id=com.igg.android.mythicheroes&hl=en&gl=US',
        'https://apps.apple.com/US/app/id1580031550/id1580031550?mt=8',
        'https://discord.com/invite/mythicheroes',
        'https://www.facebook.com/MythicHeroesGlobal/',
        'https://www.youtube.com/channel/UC7g3DTAli5WaVgiDo8p3Hxw',
        'https://www.instagram.com/mythic_heroes/',
        'https://twitter.com/Mythic_Heroes',
        'https://www.twitch.tv/mythicheroes',
        'https://www.reddit.com/r/MythicHeroes/'
    ]
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
            <h1 className='social-media-title'>OFFICIAL MYTHIC HEROES SOCIAL MEDIA</h1>
            <div className="social-media">
                {socialArr.map((social, index) => (
                    <a href={socialURL[index]} target="_blank" key={index} rel='noreferrer'>
                        <img
                            alt={social}
                            src={
                                process.env.PUBLIC_URL +
                                '/assets/social-banner/' +
                                social +
                                '.png'
                            }
                            key={index}
                            className={'social ' + social}

                        />
                    </a>
                ))}

            </div>
        </div>

    );
};

export default Home;
