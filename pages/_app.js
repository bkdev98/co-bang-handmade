import App from 'next/app'
import { ApolloProvider } from '@apollo/client'
import NextNprogress from 'nextjs-progressbar'

import { useApollo, initializeApollo } from '../lib/apolloClient'

import { MENUS_QUERY, menuQueryVars } from '../graphql/queries'
import Layout from '../layouts/main'

export default function MyApp({ Component, pageProps, layoutData }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <>
        <NextNprogress color="#577941" options={{ showSpinner: false }} />
        <Layout data={layoutData}>
          <Component {...pageProps} />
        </Layout>
      </>
    </ApolloProvider>
  )
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);

  const apolloClient = initializeApollo()

  const {data} = await apolloClient.query({
    query: MENUS_QUERY,
    variables: menuQueryVars,
  })

  return {
    ...appProps,
    layoutData: data,
  }
}
