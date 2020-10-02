import './form.css'
import React, { Component } from 'react';
import {IoMdCloseCircle} from 'react-icons/io'
import {FaUserCircle} from 'react-icons/fa'
import 'swiper/css/swiper.css'
import Swiper from 'react-id-swiper'
import './card.css'


const HeroSliderConfigs={
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
}

export default class Form extends Component{
constructor(props){
    super(props)
    this.state={
      showImgSlider: false,
      name: '',
      culture: '',
      class: '',
      desc: '',
      img: null,
      id: this.props.newId + 1
    }
}

CreateSlider=()=>{
  
  return (
   <div >
     <h5 className="form-text">Choose Portrait</h5>
     {this.props.isDesktop?
        ( <div className="flex-row" >
        {this.props.dogs.map((photo, index) =>(
        <div className="img-wrapper" key={index} ><img onClick={() => { this.setState({img:photo}); this.ToggleImage();}} className="full-card-img" id="swiper-image" src={photo} alt="dog"/></div>))}
        </div>)
     :
        ( <Swiper {...HeroSliderConfigs}>
        {this.props.dogs.map((photo, index) =>(
        <div className="card" key={index}><img onClick={() => { this.setState({img:photo}); this.ToggleImage();}} style={{display:'block', margin:'auto'}}  className="card-img-top" id="swiper-image" src={photo} alt="dog"/></div> ))}
       </Swiper>)}
  </div> )
    
  
}
ToggleImage=()=>{
 
  this.setState(prevState =>({
    showImgSlider: !prevState.showImgSlider
  }))
}
FormChange=(event)=>{
   this.setState({[event.target.name]: event.target.value})
}
handleSumbit = (event) => {
  event.preventDefault()
  this.props.addCharacter(this.state)
  
}
render(){

    return(
     
     
        <div className="form-overlay border-corners border-style">
          {this.state.showImgSlider? this.CreateSlider() :(<div > <IoMdCloseCircle className="icon close-circle"
          onClick={this.props.toggle}/>
              <form className="grid-system" onSubmit={this.handleSumbit}>
                  {this.state.img !== null? (<div className="img-container"><img className="full-card-img" src={this.state.img} onClick={this.ToggleImage} 
              alt="Choose portrait"/></div>)  : (<FaUserCircle style={{width: '200px', height:'auto', margin:'auto'}} onClick={this.ToggleImage}/>) }
                <div className="char column"> 
                <input name="name" className="form-control" type="text" placeholder="Enter name"
              onChange={this.FormChange}></input>
              
              <input  className="form-control" name="culture" type="text"
              onChange={this.FormChange} placeholder="Enter Race"></input>
                    
      <select onChange={this.FormChange} name="class" className="form-control" id="inputGroupSelect02">
          <option defaultValue>Choose class...</option>
          <option value="Tank">Tank</option>
          <option value="Paladin">Paladin</option>
          <option value="Healer">Healer</option>
        </select>
</div>
<div className="desc">
<h5 className="form-text">Description</h5>
<div >
  <textarea name="desc" onChange={this.FormChange} className=" form-control" rows="5"></textarea>
  </div>
</div>
        <input className="form-button border-corners" value="Create" type="submit"></input>
    </form> </div>
    )}
        </div>
      
    )
    
}

}