import React from 'react'

function Alert(props) {
  return (
    <>
      <div className="alert-container" style={{height:0}}>
        {props.alert && 
          <div className="alert alert-primary alert-dismissible fade show" role="alert">
            <strong>{props.alert.type}{props.alert.message}</strong>This form is Working
            <button type="button"className="btn-close" data-bs-dismiss="alert" aria-label="close"></button>
          </div>
        } 
      </div>
    </>
  )
}

export default Alert