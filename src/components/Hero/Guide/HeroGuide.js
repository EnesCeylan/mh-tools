import heroData from "../../../data/heroData";
const HeroGuide = ({ hero }) => {
    return (
        <div>
            {heroData[hero].runes.map((rune, index) => (
                <img
                    src={
                        process.env.PUBLIC_URL +
                        '/assets/runes/' +
                        rune +
                        '.png'
                    }
                    alt={rune}
                    className="guide-rune"
                />
            ))}
            {heroData[hero].artifacts.map((artifact, index) => {
                const artifactPNG = artifact.replace(/ /g, '_');
                return (
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            '/assets/artifacts/' +
                            artifactPNG +
                            '.png'
                        }
                        alt={artifact}
                        className="guide-artifacts"
                    />
                )
            })}
            {heroData[hero].divinityNotables.map((divinity, index) => {
                const divinityPNG = divinity.replace(/ /g, '_');
                return (
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            '/assets/divinity/nodes/' +
                            divinityPNG +
                            '.png'
                        }
                        alt={divinityPNG}
                        className="guide-artifacts"
                    />
                )
            })}
        </div>
    );
}

export default HeroGuide;