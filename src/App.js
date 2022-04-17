import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/hello'

function App() {
  return (
    <div className="App">
        <Greet name={'hiwa'} heroName={'Batman'}><p>this is props</p></Greet>
        <Greet name={'sara'} heroName={'superman'}>
            <button>action</button>
        </Greet>
        <Greet name={'john'} heroName={'wonder woman'}>
            <h1>hello hiwa</h1>
        </Greet>
        <Welcome name={'hiwa'} heroName={'Batman'}>
            <p>hey you</p>
        </Welcome>
        <Welcome name={'sara'} heroName={'superman'}/>
        <Welcome name={'john'} heroName={'wonder woman'}/>
        {/*<Hello />*/}
    </div>
  );
}

export default App;
