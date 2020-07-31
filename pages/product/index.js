import Head from 'next/head'
import { useQuery } from '@apollo/client'
import { Container, Row, Col } from 'react-grid-system'

import { initializeApollo } from '../../lib/apolloClient'
import { PRODUCTS_QUERY, productsQueryVars } from '../../graphql/queries'

import Tag from '../../components/tag'
import Button from '../../components/button'
import Card from '../../components/card'

export default function Product({}) {
  const { data } = useQuery(
    PRODUCTS_QUERY,
    {
      variables: productsQueryVars,
      notifyOnNetworkStatusChange: true,
    }
  )

  return (
    <div>
      <Head>
        <title>Sản phẩm | Cỏ Bàng Handmade</title>
      </Head>
      <section className="section-product-hero">
        <div className="product-hero-branches">
          <div className="product-hero-branches-img" />
        </div>
        <h2 className="page-heading">Những sản phẩm cho tương lai</h2>
        <div className="search-input-group">
          <input name="search" id="search" placeholder="Tên sản phẩm..." className="form-input" />
          <div className="search-input-group-append">
            <Button label="Tìm kiếm" append type="dark" />
          </div>
        </div>
        <div className="category-wrapper">
          <Tag label="Tất cả danh mục" active large margin />
          {data.categories.edges.map(({node}) => {
            const name = node.translation?.name || node.name;
            return (
              <Tag label={name} key={node.id} large margin />
            )
          })}
        </div>
      </section>
      <section className="section-product-list">
        <div className="container">
          <Container fluid>
            <Row gutterWidth={15} style={{marginLeft: -20, marginRight: -20}}>
              {data.products.edges.map(({node}) => {
                const name = node.translation?.name || node.name;
                return (
                  <Col lg={3} sm={6} xs={6} style={{marginBottom: 15}} key={node.id}>
                    <Card type="product" images={node.images} title={name.toUpperCase()} pricing={node.minimalVariantPrice} slug={node.slug} />
                  </Col>
                )
              })}
            </Row>
          </Container>
        </div>
      </section>
      
      <style jsx>{`
        .section-product-hero {
          position: relative;
          padding-top: 100px;
        }
        .category-wrapper {
          text-align: center;
        }
        .page-heading {
          font-size: 42px;
          margin-bottom: 1.5rem;
          color: #577941;
          font-weight: 600;
          text-align: center;
          margin: 80px auto 60px;
        }
        .search-input-group {
          display: flex;
          justify-content: center;
          align-items: stretch;
          padding-bottom: .5rem;
          margin-top: 15px;
          margin: 20px auto;
          max-width: 500px;
          margin-bottom: 50px;
        }
        .form-input {
          font-family: 'Barlow', sans-serif;
          position: relative;
          flex: 1 1 auto;
          margin-bottom: 0;
          padding: .6rem .8rem;
          font-size: 14px;
          background-color: hsla(0,0%,100%,.05);
          border: 1px solid #CED4DA;
          border-radius: 4px;
          border-top-right-radius: 0px;
          border-bottom-right-radius: 0px;
          transition: border-color .3s ease,box-shadow .3s ease;
          outline: none;
          display: block;
          line-height: 1.5;
          background-clip: padding-box;
        }
        .search-input-group-append {
          margin-left: -1px;
          display: flex;
        }
        .product-hero-branches {
          position: absolute;
          top: 1rem;
          z-index: -1;
          width: 100%;
        }
        .product-hero-branches-img {
          width: 500px;
          height: 757px;
          background-size: contain;
          max-width: 100%;
          opacity: .8;
          background-image: url(/images/branch-1.png);
        }
        .section-product-list {
          position: relative;
          padding-top: 6rem;
          padding-bottom: 6rem;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: PRODUCTS_QUERY,
    variables: productsQueryVars,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    unstable_revalidate: 1,
  }
}
