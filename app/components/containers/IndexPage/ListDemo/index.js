import React, { Component, PropTypes } from 'react';
import reqwest from 'reqwest'
import styles from './index.less';

class ListDemo extends Component{

  constructor(props){

    super(props)
    
    this.state = {
      list :[]
    }

  }
  
  componentDidMount(){

    let that = this;
    reqwest({
        url: 'http://g1.cn',
        method: 'post',
        type: 'json',
    }).then(function (data) {
      debugger
      that.setState({
         list: data.list
      })
    })

  }


  render() {

    let nodeList = '';

    nodeList = this.state.list.map(function(item, i){
       return <p className = {"tr"} key = {i}>
        <span className = {'td'}>{item.id}</span>
        <span className = {'td'}>{item.number}</span>
        <span className = {'td'}>{item.string}</span>
        <span className = {'td'}>{item.array}</span>
        <span className = {'td'}>{item.date}</span>
       </p> 
    });

    return (
      <div className={"root"} >
        {/*config.greetText*/}
        <p className = {"tr"} style = {{marginBottom:10}}>
        <span className = {'td'}>{"id"}</span>
        <span className = {'td'}>{"number"}</span>
        <span className = {'td'}>{"string"}</span>
        <span className = {'td'}>{"array"}</span>
        <span className = {'td'}>{"date"}</span>
       </p> 
        {nodeList}
      </div>
    );
  }

}

export default ListDemo