import React from 'react'

const YoutubePage = ({imageLink,title,views}) => {
  return (
    <div>
<img src={imageLink} alt=""/>

      
<h5>{title}</h5>
<p>{views}</p>


    </div>
  )
}

export default YoutubePage;