import React from 'react'

const Blogs = async ({params}) => {
    console.log(await params);
  return (
    <div>
        <h1>Our Blogs</h1>

        <p>blog 1</p>
        <p>blog 2</p>
        <p>blog 3</p>
    </div>
  )
}

export default Blogs