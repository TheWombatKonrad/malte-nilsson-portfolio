import * as React from 'react'

const Layout = ({ height, children }) => {
  return <main style={{ height: height }}>{children}</main>
}

export default Layout
