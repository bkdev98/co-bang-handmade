import Head from 'next/head'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'

import { initializeApollo } from '../../lib/apolloClient'
import { PRODUCT_DETAIL_QUERY, PRODUCTS_QUERY, productsQueryVars } from '../../graphql/queries'

export default function ProductDetail({}) {
  const router = useRouter()
  const { slug } = router.query
  const { data } = useQuery(
    PRODUCT_DETAIL_QUERY,
    {
      variables: {slug},
      notifyOnNetworkStatusChange: true,
    }
  )

  return (
    <>
      <Head>
        <title>{data?.product?.name} | Cỏ Bàng Handmade</title>
      </Head>
      <section style={{padding: 100}}>
        <h2 className="page-heading">{data?.product?.name}</h2>
      </section>
    </>
  )
}

export async function getStaticProps({params}) {
  const {slug} = params;

  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: PRODUCT_DETAIL_QUERY,
    variables: {slug},
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    unstable_revalidate: 1,
  }
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo()

  const {data: {products}} = await apolloClient.query({
    query: PRODUCTS_QUERY,
    variables: productsQueryVars,
  })

  const paths = products.edges.map(({node}) => ({params: {slug: node.slug}}));

  return {
    paths,
    fallback: true,
  }
}
