import React from 'react'
import {RiDoubleQuotesR} from 'react-icons/ri'
function ClientCard({client}) {
  return (
    <div className='client-card'>
     <div>
     <h5>
        {client.review}
      </h5>
      <RiDoubleQuotesR className='quote'/>
      <p>
        {client.name}
      </p>
      <p className='role'>- {client.role}</p>
     </div>
      <img src={client.image} alt={client.image}/>
    </div>
  )
}

export default ClientCard
