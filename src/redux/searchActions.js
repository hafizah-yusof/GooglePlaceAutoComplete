import axios from 'axios';

// Define your API key here or from environment
const GOOGLE_PLACES_API_KEY = 'YOUR_API_KEY';

export const SEARCH_PLACES_REQUEST = 'SEARCH_PLACES_REQUEST';
export const SEARCH_PLACES_SUCCESS = 'SEARCH_PLACES_SUCCESS';
export const SEARCH_PLACES_FAILURE = 'SEARCH_PLACES_FAILURE';

export const FIND_PLACES_REQUEST = 'FIND_PLACES_REQUEST';
export const FIND_PLACES_SUCCESS = 'FIND_PLACES_SUCCESS';
export const FIND_PLACES_FAILURE = 'FIND_PLACES_FAILURE';

// Redux Thunk action to fetch place autocomplete suggestions
export const searchPlaces = (query) => {
  return async (dispatch) => {
    dispatch({ type: SEARCH_PLACES_REQUEST });

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${GOOGLE_PLACES_API_KEY}`
      );
      
      dispatch({
        type: SEARCH_PLACES_SUCCESS,
        payload: response.data.predictions,
      });
    } catch (error) {
      dispatch({
        type: SEARCH_PLACES_FAILURE,
        error: error.message,
      });
    }
  };
};

export const getCoordinates = (query) => {
    return async (dispatch) => {
      dispatch({ type: FIND_PLACES_REQUEST });

      let input = encodeURIComponent(query)

      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${input}&key=${GOOGLE_PLACES_API_KEY}&inputtype=textquery&fields=geometry`
        );
        
        dispatch({
          type: FIND_PLACES_SUCCESS,
          payload: response.data.candidates,
        });
      } catch (error) {
        dispatch({
          type: FIND_PLACES_FAILURE,
          error: error.message,
        });
      }
    };
  };
