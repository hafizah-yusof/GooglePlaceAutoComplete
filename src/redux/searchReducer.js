import {
    SEARCH_PLACES_REQUEST,
    SEARCH_PLACES_SUCCESS,
    SEARCH_PLACES_FAILURE,
    FIND_PLACES_REQUEST,
    FIND_PLACES_SUCCESS,
    FIND_PLACES_FAILURE,
  } from './searchActions';
  
  const initialState = {
    loading: false,
    places: [],
    error: '',
    searchHistory: [],
    coordinates: null
  };
  
  const searchReducer = (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_PLACES_REQUEST:
        return { ...state, loading: true };
  
      case SEARCH_PLACES_SUCCESS:
        return {
          ...state,
          loading: false,
          places: action.payload,
          searchHistory: [...state.searchHistory, action.payload[0]],
        };
  
      case SEARCH_PLACES_FAILURE:
        return { ...state, loading: false, error: action.error };

      case FIND_PLACES_SUCCESS:
        return {
            ...state,
            coordinates: {
                latitude: action.payload[0].geometry.location.lat,
                longitude: action.payload[0].geometry.location.lng,
            }
        }
  
      default:
        return state;
    }
  };
  
  export default searchReducer;
  