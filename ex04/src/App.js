import React, {Component} from 'react';

class App extends Component {
    render() {
        const setLocalStorage = (event) => {
            localStorage.setItem("Arena", "Selection Month");
        }

        const getLocalStorage = (event) => {
          const myLocalStorageData = localStorage.getItem('Arena');
          return myLocalStorageData;
        }

        return (
            <div className='App'>
                <button  onClick={setLocalStorage}>setLocalStorage</button><br/>
                <button onClick={getLocalStorage}>getLocalStorage</button>
            </div>
        )
    }
}

export default App;