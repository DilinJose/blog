import PostList from "./PostList";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  // const result = () => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // };

  return (
    <div className="container-fluid" >
     <Header/>
      <PostList />
      <Footer/>
    </div>
  );
}

export default App;
