import React from 'react'
import moment from 'moment'
import './comment.scss'

const Comment = () => {
   return (
      <div className='p-2 comment d-flex'>
         <img
            src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
            alt=''
            className='mr-3 rounded-circle'
         />
         <div className='comment__body'>
            <p className='mb-1 comment__header'>
              User • {moment("2021-04-1").fromNow()}
            </p>
            <p className='mb-0'>Nice Video , Keep It Up!!!</p>
         </div>
      </div>
   )
}

export default Comment
