//리듀서 - 3개 API를 넘겨받음
//로딩 스피너 추가
//장르 추가
//디테일 추가
//유튜브 추가
//toolkit

import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    popularMovies: {},
    topRatedMovies: {},
    upcomingMovies: {},
    loading: true,
    genreList: [],
    detailMovies: {},
    trailerVideo: {},
};

//careateSlick : 리듀서를 만들어줌, 객체를 매개변수로, 3개 필요
const movieSlice = createSlice({
    name: "movie", //액션 네임을 만들어줌
    initialState,
    reducers: {
        // 기존 if elseif, switch역할, 함수 (2개의 매개변수를 받음)

        //로딩시작
        getMoviesRequest(state, action) {
            state.loading = true;
        },
        getMainMovies(state, action) {
            state.popularMovies = action.payload.popularMovies;
            state.topRatedMovies = action.payload.topRatedMovies;
            state.upcomingMovies = action.payload.upcomingMovies;
            state.genreList = action.payload.genreList;
            state.loading = false;
        },
        getMovieFailure(state, action) {
            state.loading = true;
        },
        getDetailMovies(state, action) {
            state.detailMovies = action.payload.detailMovies;
            state.trailerVideo = action.payload.trailerVideo;
            state.loading = false;
        },
    },
});

export const movieActions = movieSlice.actions;

export default movieSlice.reducer;
