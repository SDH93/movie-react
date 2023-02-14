//미들웨어 부분
//https://developers.themoviedb.org/3/movies/get-popular-movies
//로딩 스피너 추가
//장르 추가
//디테일 추가
//유튜브 추가
//미들웨어 toolkit

import api from "../api";
import { movieActions } from "../reducers/movieReducer";

const APIkey = process.env.REACT_APP_APIKEY;
//받아온 키 값을 노출되지 않게 만든다 -> 루트에 .env 파일
//미들웨어는 함수가 함수를 리턴

//영화 데이터 가져오기
function getMovies() {
    return async (dispatch) => {
        try {
            dispatch(movieActions.getMoviesRequest()); //로딩 전 던져줌

            const popularMovieApi = api.get(
                `/movie/popular?api_key=${APIkey}&language=ko-KR&page=1`,
            );
            const topRatedMovieApi = api.get(
                `/movie/top_rated?api_key=${APIkey}&language=ko-KR&page=1`,
            );
            const upcomingMovieApi = api.get(
                `/movie/upcoming?api_key=${APIkey}&language=ko-KR&page=1`,
            );
            const genreApi = api.get(
                `/genre/movie/list?api_key=${APIkey}&language=ko-KR`,
            );

            let [popularMovies, topRatedMovies, upcomingMovies, genreList] =
                await Promise.all([
                    popularMovieApi,
                    topRatedMovieApi,
                    upcomingMovieApi,
                    genreApi,
                ]);

            //데이터 도착 후
            dispatch(
                movieActions.getMainMovies({
                    popularMovies: popularMovies.data,
                    topRatedMovies: topRatedMovies.data,
                    upcomingMovies: upcomingMovies.data,
                    genreList: genreList.data.genres,
                }),
            );
        } catch (error) {
            //에러 발생
            dispatch(movieActions.getMovieFailure());
        }
    };
}

//디테일 데이터 가져오기
function getMoviesDetail(id) {
    return async (dispatch) => {
        try {
            dispatch(movieActions.getMoviesRequest()); //로딩 전 던져줌

            const detailMoviesApi = await api.get(
                `/movie/${id}?api_key=${APIkey}&language=ko-KR`,
            );
            const trailerVideoApi = await api.get(
                `/movie/${id}/videos?api_key=${APIkey}&language=ko-KR`,
            );

            let [detailMovies, trailerVideo] = await Promise.all([
                detailMoviesApi,
                trailerVideoApi,
            ]);

            console.log("trailerVideo? ", trailerVideo);

            dispatch(
                movieActions.getDetailMovies({
                    detailMovies: detailMovies.data,
                    trailerVideo: trailerVideo.data,
                }),
            );
        } catch (error) {
            dispatch(movieActions.getMovieFailure());
        }
    };
}

export const movieAction = { getMovies, getMoviesDetail };

/*
    API호출하는 방법
    1.Fetch  /  2.Ajax  /  3.Axios-1보다 더 많은 기능, 라이브러리형태  
    https://axios-http.com/kr/ 
    $  yarn add axios
*/
