
import './App.css';
      
const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan walke",
    num_comments: 3,
    points: 4,
    objectID: 0,

  },
  {
    title:"redux",
    url: "http://redux.js.org/",
    author: "Dan abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function getTitle(){
  return "Hello React"
}
function App() {
  return(
    <div className="container">
      <h1>{getTitle()}</h1>
      <label htmlFor="search">search</label>
      <input id="search"/>
      <div className="tableHeader">
      <span>Title</span>
          <span>URL</span>
          <span>Author</span>
      </div>

      {list.map((item) => (
        <div>
          <span>{item.title}</span>
          <span>{item.url}</span>
          <span>{item.author}</span>
          </div>
      ))}
    </div>
  );
}
export default App;