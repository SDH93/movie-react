//미들웨어 부분
//https://developers.themoviedb.org/3/movies/get-popular-movies
//로딩 스피너 추가
//장르 추가
//디테일 추가
//유튜브 추가

import api from "../api";
const APIkey = process.env.REACT_APP_APIKEY;
//받아온 키 값을 노출되지 않게 만든다 -> 루트에 .env 파일
//미들웨어는 함수가 함수를 리턴

//영화 데이터 가져오기
function getMovies() {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_MOVIE_REQUEST" }); //로딩 전 던져줌

            const popularMovieApi = await api.get(
                `/movie/popular?api_key=${APIkey}&language=ko-KR&page=1`,
            );
            const topRatedMovieApi = await api.get(
                `/movie/top_rated?api_key=${APIkey}&language=ko-KR&page=1`,
            );
            const upcomingMovieApi = await api.get(
                `/movie/upcoming?api_key=${APIkey}&language=ko-KR&page=1`,
            );
            const genreApi = await api.get(
                `/genre/movie/list?api_key=${APIkey}&language=ko-KR`,
            );

            //3개 데이타를 병렬로 동시에.
            //let data =  await Promise.all([popularMovieApi,topRatedMovieApi,upcomingMovieApi,]);
            //console.log("data는? ", data);

            //따로 받아옴
            let [popularMovies, topRatedMovies, upcomingMovies, genreList] =
                await Promise.all([
                    popularMovieApi,
                    topRatedMovieApi,
                    upcomingMovieApi,
                    genreApi,
                ]);
            // console.log("popularMovie data는? ", popularMovies);
            // console.log("topRatedMovie data는? ", topRatedMovies);
            // console.log("upcomingMovie data는? ", upcomingMovies);
            // console.log("genreList data는? ", genreList);

            //데이터 도착 후
            dispatch({
                type: "GET_MOVIE_SUCCESS",
                payload: {
                    popularMovies: popularMovies.data,
                    topRatedMovies: topRatedMovies.data,
                    upcomingMovies: upcomingMovies.data,
                    genreList: genreList.data.genres,
                }, //data필드만 보내줌. Axios는 받은 데이터를 data 필드에 넣어서 줌
            });
        } catch (error) {
            //에러 발생
            dispatch({ type: "GET_MOVIE_FAIL" });
        }
    };
}

//디테일 데이터 가져오기
function getdetailMovies(id) {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_D_MOVIE_REQUEST" });

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

            console.log("detailMovies? ", detailMovies);
            console.log("trailerVideo? ", trailerVideo);

            dispatch({
                type: "GET_D_MOVIE_SUCCESS",
                payload: {
                    detailMovies: detailMovies.data,
                    trailerVideo: trailerVideo.data,
                },
            });
        } catch (error) {
            dispatch({ type: "GET_D_MOVIE_FAIL" });
        }
    };
}

export const movieAction = { getMovies, getdetailMovies };

/*
    API호출하는 방법
    1.Fetch  /  2.Ajax  /  3.Axios-1보다 더 많은 기능, 라이브러리형태  
    https://axios-http.com/kr/ 
    $  yarn add axios
*/
