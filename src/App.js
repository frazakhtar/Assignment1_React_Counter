import './App.css';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';

function App() {
  return (
    <div className="App">
      <h1 className='appheading'>Assignment-2 Counter Application</h1>
      <div className='container'>
      <div className='counterOne'>
      <CounterOne />
      </div>
      <div className='counterTwo'>
      <CounterTwo />
      </div>
      </div>
    </div>
  );
}

export default App;
