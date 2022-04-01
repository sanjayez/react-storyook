import './App.css';
import Email from './Email';
import Text from './Text';
import Date from './Date';
import Pass from './Pass';
import Radio from './Radio';
import Submit from './Submit';
import Area from './Area'
import Banner from './Banner';

function App() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        <Banner />
        <Email label='Email'/>
        <Text label='text'/>
        <Area label='post'/>
        <Date label='Date'/>
        <Pass label='Paswword'/>
        <Radio label='post'/>
        <Submit label='SUBMIT'/>
      </form>
    </div>
  );
}

export default App;
