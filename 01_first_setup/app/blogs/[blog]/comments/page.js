import React from 'react'

const comments = async ({params}) => {
    const paramsObj = await params;
    const {blog} = paramsObj;
    console.log(paramsObj);
    
  return (
    <div>All comments {blog} page.</div>
  )
}

export default comments