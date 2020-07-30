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
