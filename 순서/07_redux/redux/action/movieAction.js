//미들웨어 부분
//https://developers.themoviedb.org/3/movies/get-popular-movies

import api from "../api";
const APIkey = process.env.REACT_APP_APIKEY;
//받아온 키 값을 노출되지 않게 만든다 -> 루트에 .env 파일

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
		//3개 데이타를 병렬로 동시에.
		//let data =  await Promise.all([popularMovieApi,topRatedMovieApi,upcomingMovieApi,]);
		//console.log("data는? ", data);

		//따로 받아옴
		let [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
			popularMovieApi,
			topRatedMovieApi,
			upcomingMovieApi,
		]);
		console.log("popularMovie data는? ", popularMovies);
		console.log("topRatedMovie data는? ", topRatedMovies);
		console.log("upcomingMovie data는? ", upcomingMovies);

		dispatch({
			type: "GET_MOVIE_SUCCESS",
			payload: {
				popularMovies: popularMovies.data,
				topRatedMovies: topRatedMovies.data,
				upcomingMovies: upcomingMovies.data,
			}, //data필드만 보내줌. Axios는 받은 데이터를 data 필드에 넣어서 줌
		});
	};
}

export const movieAction = { getMovies };

/*
    API호출하는 방법
    1.Fetch  /  2.Ajax  /  3.Axios-1보다 더 많은 기능, 라이브러리형태  
    https://axios-http.com/kr/ 
    $  yarn add axios
*/
