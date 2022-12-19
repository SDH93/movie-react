import React from "react";
import { Col, Container, Row, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

const MovieExplain = ({ item }) => {
    const { genreList } = useSelector((state) => state.movie);

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <img
                            className="detail-img"
                            src={`https://www.themoviedb.org/t/p/original/${item.poster_path}`}
                            alt=""
                        />
                    </Col>
                    <Col>
                        <div className="box-wrap">
                            <div className="title-box">
                                {item.genres?.map((item) => (
                                    <Badge key={item.id} bg="danger">
                                        {item.name}
                                    </Badge>
                                ))}
                                <h1>{item.title}</h1>
                                <i>{item.release_date}</i>
                                <p>{item.tagline}</p>
                            </div>

                            <div className="score-box">
                                <span className="star">
                                    ⭐ {item.vote_average.toFixed(1)}
                                </span>
                                <span
                                    className={
                                        item.adult ? "r-rated" : "g-rated"
                                    }
                                >
                                    {" "}
                                    {item.adult ? "🔺 R-rated" : "✔ G-rated"}
                                </span>
                            </div>

                            <div className="overview-box">{item.overview}</div>
                            <div>비디오버튼</div>

                            <p></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MovieExplain;
