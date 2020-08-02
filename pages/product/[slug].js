import {useState} from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { Container, Row, Col } from 'react-grid-system'
import {Check} from 'react-feather'

import { initializeApollo } from '../../lib/apolloClient'
import { PRODUCT_DETAIL_QUERY, PRODUCTS_QUERY, RELATED_PRODUCTS_QUERY, productsQueryVars } from '../../graphql/queries'

import Carousel from '../../components/carousel'
import Button from '../../components/button'
import Card from '../../components/card'
import HighlightIcon from '../../components/highlight-icon'

export default function ProductDetail({}) {
  const router = useRouter()
  const { slug } = router.query
  const { data: productData } = useQuery(
    PRODUCT_DETAIL_QUERY,
    {
      variables: {slug},
      notifyOnNetworkStatusChange: true,
    }
  )

  const { data: relatedData, loading: relatedLoading, error: relatedError } = useQuery(
    RELATED_PRODUCTS_QUERY,
    {
      variables: {category: productData?.product?.category?.id},
      notifyOnNetworkStatusChange: true,
    }
  )

  const [selectedVariant, setSelectedVariant] = useState(productData?.product?.variants?.[0]);

  const name = productData?.product?.translation?.name || productData?.product?.name;

  const highlights = productData?.product?.attributes?.find(attr => attr.attribute.slug === 'highlight')?.values;
  
  const promises = productData?.product?.attributes?.find(attr => attr.attribute.slug === 'promise')?.values;

  return (
    <>
      <Head>
        <title>{name} | Cỏ Bàng Handmade</title>
      </Head>
      <section className="section-info">
        <div className="container">
          <Container fluid>
            <Row gutterWidth={15}>
              <Col lg={7} sm={12} xs={12}>
                <div className="image-carousel">
                  <Carousel images={productData?.product?.images} />
                </div>
              </Col>
              <Col lg={5} sm={12} xs={12}>
                <div className="meta-wrapper">
                  <h1 className="product-name">{name}</h1>
                  <div className="product-pricing">
                    <span className="amount">{selectedVariant?.pricing?.price?.net?.amount?.toLocaleString()}</span> <span className="currency">{selectedVariant?.pricing?.price?.net?.currency}</span>
                  </div>
                  <div className="product-variant">
                    <span className="product-attribute-title">
                      {productData?.product?.variants?.length > 0 ? "Chọn kích thước:" : "Kích cỡ:"}
                    </span>
                    <div className="product-sizes">
                      {productData?.product?.variants?.map(variant => {
                        const size = variant.attributes.find(item => item.attribute.slug === 'size').values[0];
                        return (
                          <button
                            className={`product-size ${variant.id === selectedVariant.id && 'product-size-selected'}`}
                            onClick={() => setSelectedVariant(variant)}
                            key={size.id}
                          >
                            {size.name}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                  {highlights?.length > 0 && (
                    <div className="product-highlights">
                      <Row gutterWidth={20}>
                        {highlights.map(item => (
                          <Col xs={4} key={item.id}>
                            <div className="product-highlight">
                              <Row gutterWidth={0}>
                                <Col lg={3} sm={12} xs={12}>
                                  <div className="product-highlight-icon">
                                    <HighlightIcon type={item.slug} size={22} color='#577941' />
                                  </div>
                                </Col>
                                <Col lg={9} sm={12} xs={12}>
                                  <div className="product-highlight-label">
                                    <span>{item.translation?.name || item.name}</span>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  )}
                  <div className="add-to-cart">
                    <input defaultValue={1} name="quantity" type="number" id="quantity" placeholder="1" className="quantity-input" />
                    <Button label="THÊM VÀO GIỎ" append type="add-to-cart" />
                  </div>
                  {promises?.length > 0 && (
                    <div className="product-promises">
                      <h5>Cỏ Bàng Handmade đảm bảo</h5>
                      <Row gutterWidth={20}>
                        {promises.map(item => (
                          <Col xs={4} key={item.id}>
                            <div className="product-promise">
                              <Check size={16} color='#577941' /><span>{item.translation?.name || item.name}</span>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className="section-detail">
        <div className="container">
          <h2 className="section-detail-heading">Chi tiết sản phẩm</h2>
          <div className="section-detail-content">
            <p>Were both men have organized into clans together specifically, these are behaviors. Cave, a mystery in the past half of our early. Tools where does it is expected to grab dinner,. Dialect himself into clans with breathing problems in parts. Big dust storms like ours within that it how did.</p>

            <p>The in East Africa before H habilis the cavers. In the early ancestors that by Australopithecus afarensis and how sperm. 1960S, for at the human story goes dark, with stalactites. Of of one of the Pacific, says Ken Waters, a century—and undoubtedly. Its arguably the Middle East this week, leaving at the shoes a dust. The discoveries of conditions Big dust storms like the Cradle of support.</p>

            <p>They and Hunter to see that have a large chamber, they believed. Chimpanzees, Beirut’s Rafik Hariri International Airport have organized into. Over forehead, a fissure in how sperm whale clans together specifically,. Johannesburg rising Star has been disposing of the stone tools It's fascinating.</p>

            <p>That secrets of human family tree and dry conditions, which is arguably. Pretty disposing of recreational cavers since shifted to Hunter worked. They unquenchable optimism has been a jagged wall of our early 1990s,. The eye out broadly when Berger got out broadly. Localized the journal eLife homo naledi, as low as low as.</p>
          </div>
        </div>
      </section>
      <section className="section-suggestions">
        <div className="container">
          <h2 className="section-suggestions-heading">Sản phẩm liên quan</h2>
          <Container fluid>
            <Row gutterWidth={15} style={{marginLeft: -20, marginRight: -20, justifyContent: 'center'}}>
              {relatedLoading
                ? <span>Đang tải...</span>
                : relatedError
                  ? <span>Error: {relatedError?.message}</span>
                  : !relatedData.relatedProducts.edges.filter(({node}) => node.id !== productData?.product?.id).length
                    ? <span>Không tìm thấy sản phẩm nào</span>
                    : relatedData.relatedProducts.edges.filter(({node}) => node.id !== productData?.product?.id).map(({node}) => {
                    const name = node.translation?.name || node.name;
                    return (
                      <Col lg={3} sm={6} xs={6} style={{marginBottom: 15}} key={node.id}>
                        <Card type="product" images={node.images} title={name.toUpperCase()} pricing={node.minimalVariantPrice} slug={node.slug} />
                      </Col>
                    )
                  }
                )
              }
            </Row>
          </Container>
        </div>
      </section>
      <style jsx>{`
        .section-info {
          padding-top: 140px;
          padding-bottom: 40px;
        }
        .product-name {
          font-size: 42px;
          font-weight: 600;
        }
        .image-carousel {
          padding: 0 60px;
        }
        .product-pricing {
          margin-top: 15px;
          font-size: 18px;
          font-weight: 600;
        }
        .product-pricing .amount {
          font-size: 26px;
          color: #577941;
          margin-left: 2px;
          margin-right: 2px;
        }
        .product-pricing .currency {
        }
        .meta-wrapper {
          padding: 50px 10px;
        }
        .product-variant {
          margin-top: 20px;
        }
        .product-attribute-title {
          font-weight: 600;
        }
        .product-sizes {
          margin-top: 10px;
        }
        .product-size {
          outline: none;
          height: 32px;
          padding: 20px;
          min-width: 80px;
          border: 1px solid #4b4e6d;
          border-radius: 2px;
          background-color: #FFFFFF;
          cursor: pointer;
          font-weight: 600;
          font-size: 16px;
          display: inline-block;
          margin-right: 10px;
          line-height: 0px;
          color: #212529;
          transition: all .3s ease;
        }
        .product-size:hover {
          background-color: rgba(0,0,0,.15);
        }
        .product-size-selected {
          border: 1px solid #577941;
          background-color: #577941;
          color: #FFFFFF;
        }
        .product-size-selected:hover {
          background-color: #577941;
        }
        .product-highlights {
          margin-top: 30px;
        }
        .product-highlight {
          background-color: #F8F7F7;
          border-radius: 2px;
          padding: 0 10px;
          min-height: 80px;
          box-shadow: 0 0 20px 0 rgba(0,0,0,0);
          transition: all .6s ease;
          cursor: pointer;
        }
        .product-highlight:hover {
          box-shadow: 0 0 20px 0 rgba(0,0,0,.09);
        }
        .product-highlight span {
          color: #484848;
          font-size: 16px;
        }
        .product-highlight-icon {
          min-height: 80px;
          display: flex;
          align-items: center;
        }
        .product-highlight-label {
          min-height: 80px;
          padding: 20px 0px 20px 10px;
          display: flex;
          align-items: center;
        }
        .add-to-cart {
          display: flex;
          justify-content: center;
          align-items: stretch;
          margin-top: 30px;
        }
        .add-to-cart .quantity-input {
          width: 80px;
          font-size: 18px;
        }
        .product-promises {
          margin-top: 20px;
        }
        .product-promises h5 {
          font-weight: 600;
          color: #484848;
          font-size: 14px;
          text-align: center;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .product-promise {
          color: #577941;
          font-size: 14px;
          display: flex;
          align-items: center;
        }
        .product-promise span {
          margin-left: 5px;
        }
        .section-detail {
          background-color: #F8F7F7;
          padding: 60px 0px;
        }
        .section-detail-heading {
          font-size: 30px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .section-detail-content p {
          margin-bottom: 20px;
        }
        .section-suggestions {
          padding: 60px 0px;
        }
        .section-suggestions-heading {
          font-size: 30px;
          font-weight: 600;
          margin-bottom: 20px;
          text-align: center;
        }
      `}</style>
    </>
  )
}

export async function getStaticProps({params}) {
  const {slug} = params;

  const apolloClient = initializeApollo()

  const {data: productData} = await apolloClient.query({
    query: PRODUCT_DETAIL_QUERY,
    variables: {slug},
  })

  const {data: relatedData} = await apolloClient.query({
    query: RELATED_PRODUCTS_QUERY,
    variables: {category: productData?.product?.category?.id},
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
