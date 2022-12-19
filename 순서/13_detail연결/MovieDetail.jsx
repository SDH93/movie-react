import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { movieAction } from "../redux/action/movieAction";

const MovieDetail = () => {
    const { id } = useParams();
    const { detailMovies, loading } = useSelector((state) => state.movie);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieAction.getdetailMovies(id));
    }, []);

    return <div>MovieDetail</div>;
};

export default MovieDetail;
