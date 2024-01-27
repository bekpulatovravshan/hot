import { Link } from "react-router-dom";
import articleImg from "../../assets/article-img.png";
import "./style.css";
const Article = () => {
    return (
        <div className='article'>
            <div className='container'>
                <div className='article-content'>
                    <div className='article-info'>
                        <h2 className='article-title'>long established</h2>
                        <p className='article-text'>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that....
                        </p>

                        <div className='article-date'>
                            <span className='date'>May 20th 2020</span>
                            <Link to='/articles' className='article-link'>
                                Read more
                            </Link>
                        </div>
                    </div>
                    <div className='article-img'>
                        <img src={articleImg} alt='man working on laptop' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;
