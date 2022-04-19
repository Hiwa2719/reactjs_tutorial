import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import LifeCycle from "./components/LifeCycle";
import FragmentsDemo from "./components/FragmentsDemo";
import Table from './components/Table'
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";


function App() {
  return (
    <div className="App">
      <ParentComp/>
        {/*<PureComp/>*/}
        {/*<Table/>*/}
        {/*<FragmentsDemo/>*/}
        {/*<LifeCycle/>*/}
        {/*<Form/>*/}
    </div>
  );
}

export default App;
