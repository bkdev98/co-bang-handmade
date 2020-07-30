import { gql } from '@apollo/client'

export const PRODUCTS_QUERY = gql`
  query productsQuery($firstCategories: Int!, $firstProducts: Int!) {
    categories (first: $firstCategories) {
      edges {
        node {
          id
          name
          translation(languageCode: VI) {
            name
          }
        }
      }
    }
    products (first: $firstProducts) {
      edges {
        node {
          id
          slug
          name
          description
          seoTitle
          seoDescription
          translation(languageCode: VI) {
            name
            description
            seoTitle
            seoDescription
          }
          images {
            id
            url
          }
          pricing {
            onSale
            discount {
              net {
                amount
                currency
              }
            }
            priceRange {
              start {
                net {
                  amount
                  currency
                }
              }
            }
          }
        }
      }
    }
  }
`

export const productsQueryVars = {
  firstCategories: 10,
  firstProducts: 12,
}

export const PRODUCT_DETAIL_QUERY = gql`
  query productDetailQuery($slug: String!) {
    product(slug: $slug) {
      id
      name
      description
      seoTitle
      seoDescription
      slug
      variants {
        id
        name
        images {
          id
          url
        }
        pricing {
          price {
            net {
              amount
            }
          }
        }
        sku
        translation(languageCode: VI) {
          name
        }
      }
      pricing {
        onSale
        discount {
          net {
            amount
            currency
          }
        }
        priceRange {
          start {
            net {
              amount
              currency
            }
          }
        }
      }
      translation(languageCode: VI) {
        name
        description
        seoTitle
        seoDescription
      }
      images {
        id
        url
      }
    }
  }
`
