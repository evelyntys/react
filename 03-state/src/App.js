import logo from './logo.svg';
import './App.css';
import NumberBox from './NumberBox';
import AlertBox from './AlertBox';
import TickleBox from './TickleBox';

function App() {
  return (
    <div>
      <h1>our react app</h1>
      {/* when numberbox is called, it will render */}
      {/* render() means to make visible or show*/}
      <NumberBox initialValue={10}/>
      <NumberBox initialValue={0}/>
      <AlertBox initialMessage='hello'/>
      <TickleBox initialMessage='that tickles!'/>
      </div>
  );
}

export default App;
