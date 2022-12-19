//리듀서 - 3개 API를 넘겨받음
//로딩 스피너 추가
//장르 추가
//디테일 추가

let initialState = {
    popularMovies: {},
    topRatedMovies: {},
    upcomingMovies: {},
    loading: true,
    genreList: [],
    detailMovies: {},
    trailerVideo: {},
};

function movieReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case "GET_MOVIE_REQUEST": //로딩시작
            return { ...state, loading: true };
        case "GET_MOVIE_SUCCESS":
            return {
                ...state,
                popularMovies: payload.popularMovies,
                topRatedMovies: payload.topRatedMovies,
                upcomingMovies: payload.upcomingMovies,
                genreList: payload.genreList,
                loading: false,
            };
        case "GET_MOVIE_FAIL":
            return { ...state, loading: false };

        case "GET_D_MOVIE_REQUEST": //로딩시작
            return { ...state, loading: true };
        case "GET_D_MOVIE_SUCCESS":
            return {
                ...state,
                detailMovies: payload.detailMovies,
                trailerVideo: payload.trailerVideo,
                loading: false,
            };
        case "GET_D_MOVIE_FAIL":
            return { ...state, loading: false };

        default:
            return { ...state };
    }
}

export default movieReducer;
