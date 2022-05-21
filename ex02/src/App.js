import React, {Component} from 'react';

class App extends Component {
    render() {
        const setMyStorage = (event) => {
            document.cookie = "Year=2021";
            localStorage.setItem("Paragon", "yes, but Arena first");
            sessionStorage.setItem('frontend', 'React');
        }

        const getMyStorage = (event) => {
            const myCookieData = document.cookie
            const myLocalStorageData = localStorage.getItem('Paragon');
            const mySessionStorageData = sessionStorage.getItem('frontend');
            return { myCookieData, myLocalStorageData, mySessionStorageData};
        }

        return (
            <div className='App'>
                <button  onClick= {setMyStorage}>Set Storage</button><br/>
                <button onClick={getMyStorage}>Get Storage</button>
            </div>
        )
    }
}

export default App;
