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
          minimalVariantPrice {
            amount
            currency
          }
          isAvailable
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
      attributes {
        attribute {
          slug
        }
        values {
          id
          name
          slug
          translation(languageCode: VI) {
              name
            }
        }
      }
      variants {
        id
        name
        pricing {
          price {
            net {
              currency
              amount
            }
          }
        }
        attributes {
          attribute {
            name
            slug
          }
          values {
            id
            name
            slug
            translation(languageCode: VI) {
              name
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
