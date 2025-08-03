import Link from 'next/link'
import React from 'react'

export const metadata = {
  title : "Service",
}

const service = () => {
  return (
    <div>
        <h2>All Technical services</h2>

        <div>
            <Link  href="/service/web-dev" >App Developement</Link>
        </div>
        <div>
            <Link  href="/" >Web Developement</Link>
        </div>
        <div>
            <Link  href="/" >web/app design</Link>
        </div>
        <div>
            <Link  href="/service/seo" >seo</Link>
        </div>

        <Link href="/">Return Home</Link>
        
    </div>
  )
}

export default service