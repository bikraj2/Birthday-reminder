import React from 'react'

function List  (props)  {
    const {image,name,age} = props.value
  return (
    <div className='list'>
    <img src={image} alt="profile_picture" className="profile" />
    <h1 className='name'>{name}</h1>
    <h4 className='age'>{age}</h4>
    </div>
  );
}

export default List
