import { gql } from '@apollo/client'

export const MENUS_QUERY = gql`
  query menus($first: Int!) {
    menus (first: $first) {
      edges {
        node {
          id
          name
          items {
            id
            name
            page {
              slug
            }
          }
        }
      }
    }
  }
`

export const menuQueryVars = {
  first: 10,
}

export const CATEGORIES_QUERY = gql`
  query categories($first: Int!) {
    categories (first: $first) {
      edges {
        node {
          id
          name
          backgroundImage {
            url
          }
        }
      }
    }
  }
`

export const categoryQueryVars = {
  first: 4,
}
