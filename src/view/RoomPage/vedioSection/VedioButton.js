import React from 'react'
import MicButton from './MicButton'
import CameraButton from './CameraButton'
import LeaveRoomButton from './LeaveRoomButton'
import SwithToScreenSharingButton from './SwithToScreenSharingButton'

function VedioButton() {
  return (
    <div className='video_buttons_container'>
      <MicButton/>
      <CameraButton/>
      <LeaveRoomButton/>
      <SwithToScreenSharingButton/>  
      </div>
  )
}

export default VedioButton
