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
          translation(languageCode: VI) {
            name
          }
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

export const HOME_QUERY = gql`
  query homeQuery($firstMenus: Int!, $firstCategories: Int!) {
    menus (first: $firstMenus) {
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
    categories (first: $firstCategories) {
      edges {
        node {
          id
          name
          translation(languageCode: VI) {
            name
          }
          backgroundImage {
            url
          }
        }
      }
    }
  }
`

export const homeQueryVars = {
  firstMenus: 10,
  firstCategories: 4,
}
