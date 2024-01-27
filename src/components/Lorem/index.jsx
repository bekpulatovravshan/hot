import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import img from "../../assets/lorem-img.png";
import icon from "../../assets/arrow-down.svg";

const Lorem = () => {
    return (
        <div className='lorem'>
            <div className='container'>
                <div className='lorem-content'>
                    <div className='content-info'>
                        <h2 className='content-info_title'>
                            What is Lorem Ipsum?
                        </h2>
                        <p className='content-info_text'>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution...
                        </p>
                        <div className='article-date'>
                            <span className='date'>May 20</span>
                            <Link to='/articles' className='article-link'>
                                Read more
                            </Link>
                        </div>
                    </div>
                    <div className='content-img'>
                        <img src={img} alt='What is Lorem Ipsum?' />
                    </div>
                </div>
                <button type='button' className='lorem-btn'>
                    See more
                    <img src={icon} alt='arrow-down' />
                </button>
            </div>
        </div>
    );
};

export default Lorem;
