import React from 'react'
import { Helmet } from 'react-helmet'

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Housevesting</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <title>Housevesting</title>
      <div className="h-64">
        <div className="p-4 m-4 bg-yellow-50 rounded">
          <h1 className="text-2xl font-bold text-gray-700">
            Housing VS Investments
          </h1>
        </div>
        <div className="p-4 m-4 bg-yellow-50 h-full rounded">
          <h2 className="text-gray-700">Which is better for you?</h2>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
