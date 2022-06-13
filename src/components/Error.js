import React from 'react'

// ##############################################################
// Error to be shown on screen if needed
// ##############################################################

export default function Error({children, style, ...props}) {
    const styles = {error:{color:'red'}}
  
    return (
        <div style={{...styles.error, ...style}} {...props}>{children}</div>
    )
}
