import React from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata'

export const Seo = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='robots' content='index'/>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      {children}
    </>
  )
}
