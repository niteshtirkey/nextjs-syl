import React from 'react'

const Blogs1 = async ({params}) => {
    // console.log(await params);

    const {blog} = await params;

  return (
    <div>Blogs1 {blog}</div>
  )
}

export default Blogs1