import "./App.css";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import axios from "axios";
// constructor(props) {
//   super(props)

//   this.state = {
//      name: '',
//      age: '',
//      salary: '',
//      hobby: ''
//   }
// }
// import CreateTodo from "./components/formss.js";
function App() {

  const productList = [
    {
      price: 99999,
      name: "Event 1",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Event 2",
      quantity: 0,
    },
    
    {
      price: 999,
      name: "Event 3",
      quantity: 0,
    },
    {
      price: 999,
      name: "Event 4",
      quantity: 0,
    },
    {
      price: 999,
      name: "Event 5",
      quantity: 0,
    },
    {
      price: 9939,
      name: "Event 6",
      quantity: 0,
    },
    {
      price: 9993,
      name: "Event 7",
      quantity: 0,
    },
    {
      price: 999,
      name: "Event 8",
      quantity: 0,
    },
  ];
  return (
    <>
      <NavBar />
      {/* <Login/> */}
      <main className="container mt-4">
        <ProductList productList={productList} />
      </main>
      {/* <main>
        <CreateTodo />
      </main> */}
        
   <div className="container">
    <br></br>
    <h1>React Axios Example</h1>
    <h1>Save Data to google sheets</h1>
    <form autoComplete='off' className='form-group'>
      <label>Name...</label>
      <input type='text' placeholder='Enter Name :' required className='form-control'/>
      <br></br>
      <label>Date...</label>
      <input type='text' placeholder='Enter Name :' required className='form-control'/>
      <br></br>
      <label>Count...</label>
      <input type='text' placeholder='Enter Name :' required className='form-control'/>
      <br></br>
      <br></br>
<div style={{display:'flex',justifyContent:'flex-end'}}>
  <button type='submit' className='btn btn-primary'>Submit</button>

</div>
      </form>
      <br></br>
    
   </div>
    </>
    

  );
}

export default App;


// // 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

// import axios from 'axios';

// import {useState, useEffect} from 'react';

// function App() {
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts/1').then(response => {
//       setPost(response.data);
//     });
//   }, []);

//   if (!post) return null;

//   console.log(post);

//   return (
//     <div>
//       <p>{post.title}</p>
//     </div>
//   );
// }

// export default App;