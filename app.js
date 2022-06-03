class SideBar extends React.Component{
    render(){
        return(
          <div className="side-bar">
            <h1>Dashboard</h1>
            <h1>Widget</h1>
            <h1>Reviews</h1>
            <h1>Customers</h1>
            <h1>Online Analysis</h1>
            <h1>Settings</h1>
          </div>
            
        )
    }
}

class Square extends React.Component {
    render () {
      return (
        <div className="data-container">
          {this.props.data.map(obj => <Data  obj={obj}/>)}
        </div>
      )
    }
  }

class Data extends React.Component {
    render () {
      return (
        <div className='data'>
          <h1>{this.props.obj.title}</h1>
          <ul>
            {this.props.obj.data.map(value => <li>{value}</li>)}
          </ul>
        </div>
      )
    }
  }

class Graph extends React.Component {
    render () {
      return (
        <div className="graph">
          <h1>Website Visitors</h1>
          <h2>{this.props.visitors}</h2>
          <div className="display-graph">
          </div>
        </div>
      )
    }
  }

class App extends React.Component{
    //state
    //functions
    render(){
        return(
            <div className="parent">
                <SideBar />
                <Square data={[{title:"Reviews", data:[1281]}, {title:"Average Rating", data:[4.6]}, {title:"Sentimet Analysiss", data:[960, 122, 321]}]}/>
                <Graph visitors={821}/>
            </div>
            
        )
    }
}

ReactDOM.render(
    // <h1>{message}</h1>,
    <App />,
    document.querySelector('.container')
);