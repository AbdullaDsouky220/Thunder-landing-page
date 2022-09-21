import React, { useCallback } from 'react'
import line from "../../Assets/image.png";
import './client.scss'
import client1 from '../../Assets/client1.png'
import client2 from '../../Assets/client2.png'
import client3 from '../../Assets/client3.png'
import client4 from '../../Assets/client4.png'
import ClientCard from './ClientCard';
import { useState ,useEffect} from 'react';
let start=0;
function ClientSection() {
    const [sliderNumber,setSliderNumber]=useState(1)
    const clients=[
        {
            id:1,
            review:'The European languages are members of the Same family Their separate existence is a myth For science, music, sport, etc, europe convals d feugiat egdgfet cursus tellus their languages common words.',
            name:'Michelle Stehle',
            role:'Manager',
            image:client1
},
        {
            id:2,
            review:'The European languages are members of the Same family Their separate existence is a myth For science, music, sport, etc, europe convals d feugiat egdgfet cursus tellus their languages common words.',
            name:'Brandon Carney',
            role:'Designer',
            image:client2,
},
        {
            id:3,
            review:'The European languages are members of the Same family Their separate existence is a myth For science, music, sport, etc, europe convals d feugiat egdgfet cursus tellus their languages common words.',
            name:'Samuel Campbell',
            role:'Developer',
            image:client3,
},
        {
            id:4,
            review:'The European languages are members of the Same family Their separate existence is a myth For science, music, sport, etc, europe convals d feugiat egdgfet cursus tellus their languages common words.',
            name:'Margaret Lampley',
            role:'Developer',
            image:client4,
},
    ]
  
    const slideShowHandler=useCallback(
        ()=>{
            if(start<4){
                setSliderNumber(start)
                start++;
            }else if(start===4){
            
                start=0;
            setSliderNumber(0)
    }
                  },
      [setSliderNumber],
    )
    
    useEffect(() => {
      const interval=setInterval(slideShowHandler,5000)
    
      return () => {
        clearInterval(interval)
      }
    }, [slideShowHandler])
    
  return (
    <div className='client__section'>
      <div className="container">
      <div className="upper">
          <h1>Clients Loved Products
</h1>
          <p className="light-p">
            Vivamus ac nulla ultrices laoreet neque mollis mi morbi elementum
            mauris sit amet arcu fringilla auctor In eleifend maximus nisi sed
            vulputate.
          </p>
          <img src={line} alt="line in undeline" />
        </div>
<ClientCard client={clients[sliderNumber]}/>
      <div className="current__image">
        {
            clients.map((client,i)=>{
                return (
                    <div className={`image__container ${sliderNumber===i?'active':null}`} key={client.id} onClick={()=>setSliderNumber(i)}>
                        <img src={client.image}  alt={client.name}/>
                    </div>
                )
            })
        }
      </div>
      </div>
    </div>
  )
}

export default ClientSection
