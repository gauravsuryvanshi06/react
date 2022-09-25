import "./App.css";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import { useState } from "react";
import axios from "axios";
import DateTime from "./components/date";

import { ReactComponent as ClockIcon } from './icons/clock.svg';
import { ReactComponent as CalenderIcon } from './icons/calendar.svg';

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
const [Kshitij,setKshitij]=useState('');
const [Ishwar,setIshwar]=useState('');
const [Gaurav,setGaurav]=useState('');
const [Darshan,setDarshan]=useState('');
const [Anuj,setAnuj]=useState('');


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
  
  ];

  //handlesubmit Event
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Kshitij,Ishwar,Gaurav,Darshan,Anuj);
    
     const data = {
      Kshitij: Kshitij,
      Ishwar: Ishwar,
      Gaurav: Gaurav,
      Darshan: Darshan,
      Anuj: Anuj,

    };
    axios
      .post("https://sheet.best/api/sheets/0b8992b4-5a13-4598-8ae0-4b77eb13338d", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <NavBar />
      <div className="App">
			<CalenderIcon />
			<p>date</p>
			<ClockIcon />
			<p>time</p>

		</div>
    
     <DateTime />

      {/* <Login/> */}
      <main className="container mt-4">
        <ProductList productList={productList} />
      </main>
      {/* <main>
        <CreateTodo />
      </main> */}
        
   <div className="container">
    <form autoComplete='off' className='form-group'
    onSubmit={handleSubmit}
    >
      <label><h3>Kshitij</h3></label>
      <input type='text' placeholder='Enter Name :' 
      required className='form-control'
      onChange={(e)=>setKshitij(e.target.value)} value={Kshitij} 

      />
      <br></br>
      <label><h3>Ishwar</h3></label>
      <input type='text' placeholder='Enter Age :' 
      required className='form-control'
      onChange={(e)=>setIshwar(e.target.value)} value={Ishwar}
      />
      <br></br>
      <label><h3>Gaurav</h3></label>
      <input type='text' placeholder='Enter Count :'
       required className='form-control'
       onChange={(e)=>setGaurav(e.target.value)} value={Gaurav}
       />
       <br></br>
       <label><h3>Darshan</h3></label>
      <input type='text' placeholder='Enter Age :' 
      required className='form-control'
      onChange={(e)=>setDarshan(e.target.value)} value={Darshan}
      />
      <label><h3>Anuj</h3></label>
      <input type='text' placeholder='Enter Age :' 
      required className='form-control'
      onChange={(e)=>setAnuj(e.target.value)} value={Anuj}
      />
      <br></br>
      <br></br>
<div style={{display:'flex',justifyContent:'flex-start'}}>
  <button type='submit' className='btn btn-primary'>Submit</button>
{/* tabular data input of Kshitij,Gaurav,Anuj */}

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