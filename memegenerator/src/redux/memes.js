const ADD_MEME = 'ADD_MEME';
const REMOVE_MEME = 'REMOVE_MEME';


export const addMeme = (meme) => ({
  type: ADD_MEME,
  payload: meme,
});

export const removeMeme = (memeId) => ({
  type: REMOVE_MEME,
  payload: memeId,
});

export const setTopText = (text) => ({
  type: 'SET_TOP_TEXT',
  payload: text,
});

export const setBottomText = (text) => ({
  type: 'SET_BOTTOM_TEXT',
  payload: text,
});

export const setImageUrl = (url) => ({
  type: 'SET_IMAGE_URL',
  payload: url,
});

const initialState = {
  memes: [],
  topTextInput: '',      
  bottomTextInput: '',   
};

const memesSliceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEME: 
      return {
        ...state,
        memes: [...state.memes, action.payload],
      };

    case REMOVE_MEME:
      return {
        ...state,
        memes: state.memes.filter((meme) => meme.id !== action.payload),
      };

    case 'SET_TOP_TEXT':
      return {
        ...state,
        topTextInput: action.payload,
      };

    case 'SET_BOTTOM_TEXT':
      return {
        ...state,
        bottomTextInput: action.payload,
      };

    case 'SET_IMAGE_URL':
      return {
        ...state,
        imageUrl: action.payload,
      };

    default:
      return state;
  }
};
export default memesSliceReducer;
