import React, { Component } from 'react';
import './App.css';
import './style.css';
import Form from './components/Form'
import 'bootstrap/dist/css/bootstrap.css';
import 'mdbreact/dist/css/mdb.css';
import Front from './components/Front';
import dog from './images/dog.jpg'
import dog2 from './images/dog2.jpeg'
import dog3 from './images/dog3.jpeg'
import IntroCards from './components/IntroCards';
import {GiBrutalHelm} from 'react-icons/gi'








const characters = [
  {id: 1, name:'Heran', Race:'Aserai',class:'Healer',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',img:dog},
  {id: 2, name:'Jacob', Race:'Breton',class:'Tank',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',img:dog2},
  {id: 3, name:'Steve', Race:'Wood elf',class:'Acrobat',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',img:dog3}

]
const exampleCharacters = [
  {id: 1, name:'Heran', Race:'Aserai',class:'Healer',desc:'',img:dog },
  {id: 2, name:'Jacob', Race:'Breton',class:'Tank',desc:'',img:dog2},
  {id: 3, name:'Steve', Race:'Wood elf',class:'Acrobat',desc:'',img:dog3}

]

class App extends Component {
constructor(){
  super()
  this.state={
    showInfo : true,
    showForm : false,
    isDesktop: false //This is where I am having problems
  };

  this.updatePredicate = this.updatePredicate.bind(this);
}
  CloseInfo =() =>{
    this.setState({
     showInfo : false
    });
  }
 CreateForm=()=>{
   return (
    
       <Form newId={characters[characters.length -1].id} dogs={[dog,dog2,dog3]} isDesktop={this.state.isDesktop} addCharacter={this.Add} toggle={this.ToggleForm} />
   
   )
 }
 ToggleForm=()=>{
  this.setState(prevState =>({
    showForm: !prevState.showForm
  }))
 }
 Add=(state)=>{
characters.push(state)
this.ToggleForm()
 }
 

componentDidMount() {
this.updatePredicate();
window.addEventListener("resize", this.updatePredicate);
}

componentWillUnmount() {
window.removeEventListener("resize", this.updatePredicate);
}

updatePredicate() {
this.setState({ isDesktop: window.innerWidth > 425 });
}
  
  render(){
  return (
    <div  className="App">
  <div className="header">
           <div className="logo-container">
        <GiBrutalHelm style={{position: 'relative',height: '200px', width: 'auto', display:'block', margin:'auto'}} fill="white"/>
        </div>
      <div className="intro">
      <div className="text-container">
        <h2>Create your character!</h2>
        <p >With this simple website create your next roleplaying character for the upcoming game or D&D session.</p>
        
        </div>
       
      <div className="card-collection">
        {exampleCharacters.map((character) =>(
            
             <IntroCards key={character.id} isDesktop={this.state.isDesktop} id={character.id} name={character.name} culture={character.culture} class={character.class}image={character.img}/>
           
            ))}
            </div>
       
        </div>   
     {this.state.showForm? this.CreateForm() : null}
     <Front newCard={this.ToggleForm} isDesktop={this.state.isDesktop} examples={exampleCharacters} cardInfo ={characters}/> 
    
     
    </div>
    </div>
  );
}}

export default App;
