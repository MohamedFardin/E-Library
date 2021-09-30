import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { useWindowScroll } from "react-use";
import './Home.css';
import HomeI from './Home_Screen.png';
import Product from './Product';
import SideBar from './SideBar/SideBar';
import FloatingButton from './FloatingButton';
import BookService from '../Admin_Side/Services/BookService';
import Testimonial from './Testimonial';

function Home(books) {
    // Getting books
    const [Allbooks, setBooks] = useState([]);

    useEffect(() => {
        getBooks()
    }, [])
    const getBooks = () =>{
        BookService.getUrl().then((response)=>{
            setBooks(response.data)
            // console.log(response.data)
            // console.log(Allbooks);
        })
    }

    const Genre = useRef(null);
    const TestimoniaL = useRef(null);

    const gotoHome = () =>
        window.scrollTo({
            top: 0,
            behavior:"smooth"
        });

    const SIDEBAR = React.forwardRef((ref) => <SideBar genreRef={Genre} testimonialRef={TestimoniaL}/>);

    return (
        <div className="home">
            
            {console.log(Allbooks)}

            <div onClick={gotoHome}>
                <FloatingButton />
            </div>


            <SIDEBAR />

            
            <div className="home__container">
                {/* Top scrolling image */}
                {/* <img className="home__image" src="https://wallup.net/wp-content/uploads/2016/03/10/323586-photography-nature-landscape-water-river-mountain-rock-748x468.jpg" /> */}
                <img className="home__image" src={HomeI} />

                <div ref={Genre}>
                    {
                    books.books.map((row) => (
                        <div>
                            <div className="home__genre">
                                {/* <Link
                                to={row[0].toLowerCase()}
                                className="home__genre__link"
                                >
                                    <h3 className="home__genre__text">{row[0]}...</h3>
                                </Link> */}
                                <h3
                                    className="home__genre__text"
                                >{row[0]}...</h3>
                            </div>
                            <div
                                id={row[0].toLowerCase()}
                                className="home__row"
                            >
                                {
                                row[1].map((card) => (
                                    <Product
                                    id={card.id}
                                    title={card.title}
                                    author={card.author}
                                    description={card.description}
                                    cover_images={card.cover_images}
                                    images={card.images}
                                    rating={card.rating}
                                    />
                                ))
                                }
                            </div>
                        </div>
                    ))
                    }
                    {/* <h1 onClick={gotoGenre}>click here!</h1> */}
                </div>
                <div
                    ref={TestimoniaL}
                    className="testimonial__div"
                >
                    <Testimonial />
                </div>
            </div>

            {/* <SideBar ref={forwardRef(Genre)}/> */}

        </div>
    )
}

export default Home
