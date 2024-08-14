import './App.css';
import VirtualizedList from './components/VirtualizedList';


const LIST = Array.from({ length: 10000 }, (_, index) => index + 1)


function App() {
  return <>
    <VirtualizedList list={LIST}  height={400} width={300} itemHeight={35} />
  </>;
}

export default App;
