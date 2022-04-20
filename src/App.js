import './App.css';
import CounterTwo from "./components/CounterTwo";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";


function App() {
    return (
        <div className="App">
            <CounterTwo render={(count, incrementCounter) => (<ClickCounterTwo count={count}
                                                                               incrementCounter={incrementCounter}/>)}/>
            <CounterTwo render={(count, incrementCounter) => (
                <HoverCounterTwo count={count} incrementCounter={incrementCounter}/>)}/>
                {/*<ClickCounterTwo/>*/}
                {/*<HoverCounterTwo/>*/}
                {/*<User render={(isLoggedIn)=> isLoggedIn ? 'Hiwa': 'Guest'}/>*/}
        </div>
    );
}

export default App;
