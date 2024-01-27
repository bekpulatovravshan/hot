import bannerImg from "../../assets/banner.png";
import "./style.css";

const Banner = () => {
    return (
        <div className='banner'>
            <div className='container'>
                <div className='banner-content'>
                    <div className='banner-content_info'>
                        <h1 className='banner-title'>Make better coffee</h1>
                        <p className='banner-text'>why learn how to blog?</p>
                    </div>

                    <div className='banner-img'>
                        <img src={bannerImg} alt='community' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
