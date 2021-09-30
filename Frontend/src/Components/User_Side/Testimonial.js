import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
// import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Product from "./Product";
import './Home.css'

import { Reviews_Testimonials } from "./Reviews";
import ReviewsCard from "./ReviewsCard";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const Testimonial = () => {
  return (
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 50}}
    >
      {/* <div style={{ width: "20%", textAlign: "center", backgroundColor: "blue" }}>
        <h1 style={{ marginBottom: 20 }}>TESTIMONIALS</h1>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
        </Slider>
      </div> */}
        <div className="home__container">
                <div>
                  <h1 className="home__genre__text">Testimonial</h1>
                  {/* {console.log(Reviews_Testimonials.reviews_list)} */}
                  {
                    Reviews_Testimonials.reviews_list.map(review => (
                      <div className="home__row">
                        <ReviewsCard user={review.user} what_they_say={review.review}/>
                      </div>
                    ))
                  }
                    {/* {
                    Reviews_Testimonials.reviews_list.map((row) => (
                        <div>
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
                    } */}
                </div>
            </div>

    </div>
  );
};

const Card = ({ img }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      {/* <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      /> */}
      <p>
        Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
        Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
        tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
        fringilla massa. Etiam hendrerit dolor eget rutrum
      </p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "green" }}>PAULA WILSON</span> ,
      </p>
    </div>
  );
};

export default Testimonial;
