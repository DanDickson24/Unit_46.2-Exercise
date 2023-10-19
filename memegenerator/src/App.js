import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeMeme, setTopText, setBottomText, setImageUrl, addMeme } from './redux/memes'; 
import './App.css';

function App() {
  const memes = useSelector((state) => state.memes.memes);
  const topTextInput = useSelector((state) => state.memes.topTextInput);
  const bottomTextInput = useSelector((state) => state.memes.bottomTextInput);
  const imageUrl = useSelector((state) => state.memes.imageUrl); 
  const dispatch = useDispatch();

  const handleRemoveMeme = (memeId) => {
    dispatch(removeMeme(memeId));
  };

  const handleCreateMeme = () => {
    const newMeme = {
      id: Date.now(), 
      imageUrl,
      topText: topTextInput,
      bottomText: bottomTextInput,
    };
    dispatch(addMeme(newMeme));
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="memes-container">
        {memes.map((meme) => (
          <div key={meme.id} className="meme">
            <p>{meme.topText}</p>
            <img src={meme.imageUrl} alt="Meme" />
            <p>{meme.bottomText}</p>
            <button onClick={() => handleRemoveMeme(meme.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="text-inputs">
        <input
          type="text"
          placeholder="Top Text"
          value={topTextInput}
          onChange={(e) => dispatch(setTopText(e.target.value))}
        />
        <input
          type="text"
          placeholder="Bottom Text"
          value={bottomTextInput}
          onChange={(e) => dispatch(setBottomText(e.target.value))}
        />
        <input
          type="text"
          placeholder="Image URL" 
          value={imageUrl}
          onChange={(e) => dispatch(setImageUrl(e.target.value))}
        />
        <button onClick={handleCreateMeme}>Create Meme</button> 
      </div>
    </div>
  );
}

export default App;
