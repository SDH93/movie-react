import React from "react";
import { Badge } from "react-bootstrap";

const MovieCard = ({ item }) => {
    return (
        <div
            className="slide-card"
            style={{
                backgroundImage: `url(
                https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${item.backdrop_path}
                )`,
            }}
        >
            <div className="card-info">
                <h5>{item.title}</h5>
                <p>
                    {item.genre_ids.map((id) => (
                        <Badge bg="danger">{id}</Badge>
                    ))}
                </p>
                <div className="card-infoSub">
                    <span className="star">⭐ {item.vote_average}</span>
                    <span className={item.adult ? "r-rated" : "g-rated"}>
                        {" "}
                        {item.adult ? "R-rated" : "G-rated"}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
