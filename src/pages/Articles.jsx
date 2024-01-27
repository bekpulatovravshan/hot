import {
    ArticleHeading,
    ArticleMainImg,
    ArticleText,
    Footer,
    Header,
} from "../components";

const Articles = () => {
    return (
        <div>
            <Header />
            <ArticleMainImg />
            <div className='article-container'>
                <ArticleHeading />
                <ArticleText />
            </div>
            <Footer />
        </div>
    );
};

export default Articles;
