import './App.css';
import C from './components/C'
import {UserProvider} from "./components/userContext";


function App() {
    return (
        <div className="App">
            <UserProvider value='Hiwa'>
                <C/>
            </UserProvider>
        </div>
    );
}

export default App;
