import './front.css'
import React, { Component} from 'react';
import Card from './Card' 
import 'swiper/css/swiper.css'
import Swiper from 'react-id-swiper'
import {AiFillPlusCircle} from 'react-icons/ai'



const HeroSliderConfigs={
  spaceBetween: 30,
  rebuildOnUpdate: true,
  clickable: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
}

export default class Front extends Component{


render(){
   
    

    return(
      
       <div>
        <AiFillPlusCircle fill="white" onClick={this.props.newCard}className="icon plus"/>
        {this.props.isDesktop ? (
          <div className="row">
          {this.props.cardInfo.map((character) =>(
           <Card  key={character.id} name={character.name} culture={character.culture} class={character.class}image={character.img} desc={character.desc} />
           ))}
          </div>) 
           : 
           (<Swiper {...HeroSliderConfigs}>
              {this.props.cardInfo.map((character) =>(
               <div key={character.id}><Card name={character.name}
                class={character.class} desc={character.desc} culture={character.culture} image={character.img}/></div> ))}
           </Swiper>)}

        
        </div>
       
    )


}

}
