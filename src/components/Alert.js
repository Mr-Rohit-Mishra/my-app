import React from 'react'

function Alert(props) {
  return (
    <>

      {/* props.alert && */}<div className="container w-50"> 
        <div className="alert alert-primary alert-dismissible fade show" role="alert">
          {/* <strong>{props.alert.type}{props.alert.message}</strong> */}this button not working
          <button type="button"className="btn-close" data-bs-dismiss="alert" aria-label="close"></button>
        </div>
      </div>
    </>
  )
}

export default Alert