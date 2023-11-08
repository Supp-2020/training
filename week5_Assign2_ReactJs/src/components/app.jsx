import { Component } from "react";
import axios from "axios";
class App extends Component {
  state = {
    users : []
  }
  componentDidMount(){
    axios.get("https://reqres.in/api/users?page=2")
    .then( res => this.setState({users : res.data.data}))
    .catch( err => console.log("ERROR!!",err))
  }
  render() {
    return <div>
      <h1>Ajax | API Call</h1>
      <hr />
      <ol>
        {this.state.users.map((val,idx) => (<li key={val.id} className={idx % 2 === 0 ? "even-list" : "odd-list"}>
          <img width="70" alt="" src={val.avatar} />
          {val.first_name}</li>))}
      </ol>
    </div>
  }
}

export default App;