import React, {Component} from 'react';

class App extends Component {
    render() {
        const setLocalStorage = (event) => {
            localStorage.setItem("Arena", "Selection Month");
        }

        return (
            <div className='App'>
                <button  onClick={setLocalStorage}>setLocalStorage</button>
            </div>
        )
    }
}

export default App;
