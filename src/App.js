import React, {Component} from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': 'hong kil dong',
    'birthday': '961222',
    'gender': 'man',
    'job': 'college student'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': 'na dong bin',
    'birthday': '960508',
    'gender': 'man',
    'job': 'programmer'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': 'lee sun sin',
    'birthday': '961127',
    'gender': 'man',
    'job': 'designer'
  }
]


class App extends Component {
  render() {
    return (
      <div>
        {customers.map(c=>{
          return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
        })}
      </div>
    );
  }
}

export default App;
