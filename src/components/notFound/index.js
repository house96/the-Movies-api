import React from 'react'

const style = {
  fontSize: '30px',
  fontWeight: '700',
  color: '#8ccff1bd',
  textShadow: '#8ccff1bd 0px 0px 6px',
}

const NotFound = props => {
  return (
    <div style={{ ...style }}>
      Nothing found by request{' '}
      <span role="img" aria-label="sad smiley">
        😰
      </span>
    </div>
  )
}

export default NotFound
