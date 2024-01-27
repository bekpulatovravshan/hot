import "./style.css";
const ArticleHeading = () => {
    return (
        <div className='article-heading'>
            <h1 className='article-heading_title'>
                Finibus Bonorum et Malorum
            </h1>
            <div className='article-heading_info'>
                <p className='author-name'>Written by John doe</p>
                <span className='article-date'>Monday May 20</span>
            </div>
        </div>
    );
};

export default ArticleHeading;
