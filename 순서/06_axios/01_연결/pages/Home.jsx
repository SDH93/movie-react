//api를 불러오기 위한 세팅

import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { movieAction } from "../redux/action/movieAction";

const Home = () => {
    const dispatch = useDispatch();
    //키면서 데이터를 불러와야 함,리덕스미들웨어 이용
    useEffect(() => {
        dispatch(movieAction.getMovies());
    }, []);
    return <div>Home - 대문 페이지입니다.</div>;
};

export default Home;
