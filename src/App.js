import './App.css';
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";


function App() {
    return (
        <div className="App">
            <ClickCounter name='Hiwa'/>
            <HoverCounter name="Janet"/>
        </div>
    );
}

export default App;
