import GA from './GoogleAnalytics'
// import siteMetadata from '@/data/siteMetadata'
// import Plausible from './Plausible'
// import SimpleAnalytics from './SimpleAnalytics'
// import Umami from './Umami'

const isProduction = process.env.NODE_ENV === 'production'

const Analytics = () => {
  return (
    <>
      {/* {isProduction && siteMetadata.analytics.plausibleDataDomain && <Plausible />}
      {isProduction && siteMetadata.analytics.simpleAnalytics && <SimpleAnalytics />}
      {isProduction && siteMetadata.analytics.umamiWebsiteId && <Umami />} */}
      {isProduction && <GA />}
    </>
  )
}

export default Analytics
