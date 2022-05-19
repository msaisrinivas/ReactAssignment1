//import React from "react";
import * as React from 'react'


class Item extends React.Component<any,any>{

  constructor(props:any)
  {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.add=this.add.bind(this);
    this.cle = this.cle.bind(this);
    this.state = { value: '' };
    console.log(this.state);
  }

  handleChange(e:any) {
    this.setState({value : e});
  }

  add (id:number){
    var num:number = id;
    let x = document.getElementsByClassName("try").item(num)!;
    x.innerHTML = x.innerHTML + "<li>" + this.state.value + "</li><br/><hr/>";
    console.log(x.innerHTML);
  };

  cle(id:number)
  {
    var num:number = id;
    let x = document.getElementsByClassName("try").item(num)!;
    x.innerHTML = "";
  }

  render(): React.ReactNode {
    return (
      <div className="card">
        <h2>{this.props.text}</h2>
        <div className="actions">
          <input type="text" placeholder="Enter List Items" onChange={e => this.handleChange(e.target.value)}/>
          <br></br>
          <br></br>
          <button onClick={e => this.add(this.props.id)}>Add</button>
          <button onClick={e => this.cle(this.props.id)}>Clear</button>
          <br></br>
          <br></br>
          <hr></hr>
          <div className='try'></div>
        </div>
      </div>
    );
  }
  
}

export default Item;
