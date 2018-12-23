import React, { Component } from 'react';
import logo from './logo.svg';
import Users from './Users';
import { loadJson } from './Utils';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: null
    };
  }

  async componentDidMount() {
    this.setState({
      loading: true
    });
    try {
      const data = await loadJson(`http://localhost:3004/users/`);
      this.setState({
        data,
        loading:false
      })
    } catch(error) {
      this.setState({
        loading:false
      })
      //alert(error);
    }
  }

  render() {
    const { loading, data } = this.state;
    console.log('loading ', loading);
    return (
      <div className="App">
        <Users
          loading={loading}
          data={data}
        />
      </div>
    );
  }
}

export default App;
