// import './App.css';

// import { ReactComponent as ClockIcon } from './icons/clock.svg';
// import { ReactComponent as CalenderIcon } from './icons/calendar.svg';

// function App() {
// 	return (
// 		<div className="App">
// 			<CalenderIcon />
// 			<p>date</p>
// 			<ClockIcon />
// 			<p>time</p>
// 		</div>
// 	);
// }

// export default App;

import  React, { useState , useEffect } from 'react'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div>
           
    <h3>
          <p> Time : {date.toLocaleTimeString()}</p>
            <p> Date : {date.toLocaleDateString()}</p>
    </h3>
           

        </div>
    )
}

export default DateTime