import {
    Article,
    ArticleList,
    Banner,
    Footer,
    Header,
    Lorem,
} from "../components";

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Article />
            <ArticleList />
            <Lorem />
            <Footer />
        </div>
    );
};

export default Home;
