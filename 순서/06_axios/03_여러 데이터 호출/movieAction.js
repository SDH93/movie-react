//미들웨어 부분
//https://developers.themoviedb.org/3/getting-started/introduction

import api from "../api";

const APIkey = process.env.REACT_APP_APIKEY;
//받아온 키 값을 노출되지 않게 -> 루트에 .env 파일

//미들웨어는 함수가 함수를 리턴
function getMovies() {
    return async (dispatch) => {
        const popularMovieApi = await api.get(
            `/movie/popular?api_key=${APIkey}&language=en-US&page=1`,
        );
        const topRatedMovieApi = await api.get(
            `/movie/top_rated?api_key=${APIkey}&language=en-US&page=1`,
        );
        const upcomingMovieApi = await api.get(
            `/movie/upcoming?api_key=${APIkey}&language=en-US&page=1`,
        );

        //3개의 데이터를 병렬로 동시에
        /*
        let data = await Promise.all([
            popularMovieApi,
            topRatedMovieApi,
            upcomingMovieApi,
        ]);
        console.log("data는? ", data);
        */

        // 따로 받아옴
        let [popularMovie, topRatedMovie, upcomingMovie] = await Promise.all([
            popularMovieApi,
            topRatedMovieApi,
            upcomingMovieApi,
        ]);
        console.log("popularMovie data는?", popularMovie);
        console.log("topRatedMovie data는?", topRatedMovie);
        console.log("upcomingMovie data는?", upcomingMovie);
    };
}

export const movieAction = { getMovies };

/*
    API호출하는 방법
    1. Fetch / 2. Ajax / 3. Axios : https://axios-http.com/kr/docs/intro - 라이브러리형태
*/
