import React from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";

const Spinner = () => {
  return (
    <>
    <div className="text-center py-16 flex aitems-center justify-center">

      <PropagateLoader color="#3F51B5" />
    </div>
    </>
  )
}

export default Spinner
