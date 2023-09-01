
import './App.css';
import Banner from './components/banner/Banner';
import NavBar from './components/navBar/NavBar';
import RowPost from './components/rowpost/RowPost';
import {Originals,Actions,Comedy,Horror} from './urls'
function App() {
  const rowPost = [
    {title:'Netflix Originals',url:Originals, isSmall:false},
    {title:'Action',url:Actions,isSmall:true},
    {title:'Horror',url:Horror,isSmall:true},
    {title:'Comedy',url:Comedy,isSmall:true}
  ]

  
  return (
    <div className="App">
      <NavBar/>
      <Banner />
      {rowPost.map((rowPost)=>{
        return <RowPost isSmall={rowPost.isSmall} title={rowPost.title} url={rowPost.url} />
      })}
    </div>
  );
}

export default App;
