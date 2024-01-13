//To use state, we need hooks
import {useState} from 'react';

function Card (props) {
    const [myName, setMyName] = useState('Nathaniel');
    const [count, setCount] = useState(0)

    //props.globalName

    function clickChangeName () {
        //set name to new name
        console.log('Testing!');
        setMyName('NATHANIEL');
    }

    function clickCounter () {
      //Add 1 to counter
      setCount(count+1);
    }

    return (
        <div className="card">
        <button onClick={clickCounter}>
          {count}
        </button>
        <p>{props.givenName ? props.givenName : myName}</p>
        <p>{myName}</p>
        <button onClick={clickChangeName}>Change Name</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    );
}

export default Card;