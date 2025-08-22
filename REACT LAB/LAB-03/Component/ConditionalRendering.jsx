import React from 'react'

const ConditionalRendering = (prop) => {
  return (
    <>
    <h1>Conditional Rendering</h1>
    {prop.isDisplay && <h3>Visible True</h3>}
    {!prop.isDisplay && <h3>Visible False</h3>}
    <hr />
    </>
  )
}

export default ConditionalRendering