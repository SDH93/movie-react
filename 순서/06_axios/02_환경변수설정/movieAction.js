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

        /*
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1`;
        let response = fetch(url);
        let data = await response.json();

        let url2 = `https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1`;
        let response2 = fetch(url2);
        let data2 = await response2.json();

        let url3 = `https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1`;
        let response3 = fetch(url3);
        let data3 = await response3.json();
        */
    };
}

export const movieAction = { getMovies };

/*
    API호출하는 방법
    1. Fetch / 2. Ajax / 3. Axios : https://axios-http.com/kr/docs/intro - 라이브러리형태
*/
