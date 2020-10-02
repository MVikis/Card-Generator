import React from 'react'
import { useSpring, animated as a} from 'react-spring';

 const IntroCards=(props)=>{

    const transNotDesktop = useSpring({
        to:  { transform: `translateX(${((props.id+1)*100)-300 }px) rotate(${((props.id+1)*20)-60 }deg)`},
        from: { transform:  `translateX(0px) rotate(0deg)`},
    })

const transDesktop = useSpring({
    to:  { transform: `translateX(${((props.id+1)*100)-300 }px) rotate(${((props.id+1)*20)-60 }deg)`},
    from: { transform:  `translateX(0px) rotate(0deg)`},
})

return(

    <a.div className="card intro-card border-style"  style={props.isDesktop?transDesktop:transNotDesktop} >
    <img className="card-img-top" src={props.image} alt="Card cap"></img>
    <div className="card-body border-corners">
<h4 className="card-title">{'Name: ' + props.name}</h4>
<h5 className="card-title">{'Class: ' + props.class}</h5>

    </div>
    </a.div>
)
        }
        export default IntroCards