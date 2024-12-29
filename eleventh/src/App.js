import Likes from './Likes';
import './App.css';
import Title from './Title';
import Comments from './Comments';


function App() {
  const image = "https://plus.unsplash.com/premium_photo-1668373496860-0c4bb952835c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNjg5fHx8ZW58MHx8fHx8";

  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src={image} alt="" />
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
