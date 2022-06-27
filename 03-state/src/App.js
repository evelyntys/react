import logo from './logo.svg';
import './App.css';
import NumberBox from './NumberBox';
import AlertBox from './AlertBox';
import TickleBox from './TickleBox';
import NewNumberBox from'./NewNumberBox';
import Dice from './Dice';
import TickleBox2 from './TickleBox2'

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
      <NewNumberBox initialValue={0}/>
      <Dice/>
      <TickleBox2/>
      </div>
  );
}

export default App;
