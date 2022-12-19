//리듀서 - 3개 API를 넘겨받음

let initialState = {
	popularMovies: {},
	topRatedMovies: {},
	upcomingMovies: {},
};

function movieReducer(state = initialState, action) {
	let { type, payload } = action;
	switch (type) {
		case "GET_MOVIE_SUCCESS":
			return {
				...state,
				popularMovies: payload.popularMovies,
				topRatedMovies: payload.topRatedMovies,
				upcomingMovies: payload.upcomingMovies,
			};
		default:
			return { ...state };
	}
}

export default movieReducer;
