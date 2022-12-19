import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieExplain from "../components/MovieExplain";
import { movieAction } from "../redux/action/movieAction";
import { PuffLoader } from "react-spinners/";
import Footer from "../components/Footer";

const MovieDetail = () => {
    const { id } = useParams();
    const { detailMovies, loading, trailerVideo } = useSelector(
        (state) => state.movie,
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieAction.getdetailMovies(id));
        window.scrollTo(0, 0);
    }, []);

    if (loading) {
        return (
            <div className="loader-container">
                <PuffLoader color="#fff" loading={loading} size={350} />
            </div>
        );
    }

    return (
        <div>
            <MovieExplain item={detailMovies} videoId={trailerVideo} />
            <br />
            <br />
            <h1>영화리뷰들 넣을 곳</h1>
            <Footer />
        </div>
    );
};

export default MovieDetail;
