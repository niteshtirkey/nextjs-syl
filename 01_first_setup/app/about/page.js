import Link from 'next/link'
import React from 'react'

export const metadata = {
  title : "About",
}

const About = () => {
  return (
    <div>
        <h1>About page...</h1>

        <Link href="/">Home</Link>
    </div>
  )
}

export default About