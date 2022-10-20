import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
         let list = ['Chhavi','Rahul','Ajay','Yuvi','Aanaya','Ankita','Johnisha']
        return(
            <div id="main">
               <ol key='relativeList'>
                   {
                      list.map((item, index) => {
                         return ( <li key={`relativeListItem${index+1}`}>{item}</li>)
                      })
                   }
               </ol>
            </div>
        )
    }
}


export default App;
