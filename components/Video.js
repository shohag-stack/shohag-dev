import React from 'react'

export default function Video() {
  return (
    <div className='w-full max-w-4xl mx-auto px-4 py-24'>
        <video className='w-full' controls autoPlay muted loop playsInline src='https://res.cloudinary.com/dq9ckspti/video/upload/v1774869815/intro-compressed_cbnjs7.mov' />
    </div>
  )
}
