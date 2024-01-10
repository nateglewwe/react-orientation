//To use state, we need hooks
import {useState} from 'react';

function Card () {
    const [myName, setMyName] = useState('Nathaniel');

    //props.globalName

    function clickChangeName () {
        //set name to new name
        console.log('Testing!');
        setMyName('NATHANIEL');
    }

    return (
        <div className="card">
        <button>
          count is 0
        </button>
        <p>{props.globalName ? props.globalName : myName}</p>
        <p>{myName}</p>
        <button onClick={clickChangeName}>Change Name</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    );
}

export default Card;