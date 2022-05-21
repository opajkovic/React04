import React, {Component} from 'react';

class App extends Component {
    render() {
        const setMyStorage = (event) => {
            document.cookie = "Year=2021";
            localStorage.setItem("Paragon", "yes, but Arena first");
            sessionStorage.setItem("frontend", "React");
        }

        return (
            <div className='App'>
                <button  onClick={setMyStorage}>Set Storage</button>
            </div>
        )
    }
}

export default App;