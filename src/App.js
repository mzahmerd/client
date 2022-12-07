import './App.css';
import {BrowserRouter as Router,Route,Link, Routes} from 'react-router-dom'
import OtherPage from './OtherPage';
import MainComponent from './MainComponent';
import {Fragment} from 'react';

function App() {
  return (
    <Router>
      <Fragment>
      <header className='header'>
        This is multi-container application
        <Link to='/'>Home</Link>
        <Link to='/otherpage' >Other Page</Link>
      </header>
      <div className='main'>
        <Route exact path='/' component={MainComponent}/>
        <Route  path='/otherpage' component={OtherPage}/>
      </div>
    </Fragment>
    </Router>    
  );
}

export default App;
