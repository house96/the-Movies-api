import React from 'react'
import { SyncLoader } from 'react-spinners'

import './loader.css'

const Loader = () => {
  const style = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
  }
  return (
    <div className="sweet-loading">
      <SyncLoader css={style} sizeUnit={'px'} size={20} color="#61efff" />
    </div>
  )
}

export { Loader }
