import React from 'react'

function Spinner() {
  return (
    <div>
        <div className="container-xxl bg-white p-0">
            <div className="show bg-white position-fixed translate-middle w-100 vh-100 top-50
            start-50 d-flex align-items-center justify-content-center"
            id='spinner'>
                <div className="spinner-border text-warning"
                style={{
                    width: "3rem",
                    height: "3rem"
                }}
                role="status">
                    <span className="sr-only">
                        Loading...
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Spinner