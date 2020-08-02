# CBH Storefront

![screenshot](https://github.com/quocs-studio/co-bang-handmade/blob/master/assets/images/screenshot.png)

***Note***: *This project is for demo purpose, which means it's not yet ready for production.*

Pretty SSR e-commerce website using [Next.js](http://nextjs.org) & [Apollo Client](http://apollographql.com/client), integrated with [Saleor](http://saleor.io), focused on performance & SEO 🌿

## Features

- [x] Green 🌱

- [x] Saleor GraphQL API integration

- [x] Server Side Rendering

- [x] Data caching

- [ ] Braintree Payment Gateway integration

## Demo

See the [public demo](https://co-bang-handmade.vercel.app/) of CBH Storefront!

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes

### Prerequisites

- Node.js 10.0+

- A running instance of Saleor.

- Update API_URI of your Saleor instance in `/lib/apolloClient.js` file. (Yes hard-coded I know, I promise it's only temporary :)

### Installing

Clone the repository:

```bash
git clone https://github.com/quocs-studio/co-bang-handmade.git
```

Enter the project directory:

```bash
cd co-bang-handmade
```

Install NPM dependencies:

```bash
yarn
```

Run the development server:

```bash
yarn dev
```

Go to http://localhost:3000 to access the storefront.

## License

This project is licensed under the BSD-3-Clause License - see the [LICENSE](https://github.com/quocs-studio/co-bang-handmade/blob/master/LICENSE) file for details

**Crafted with ❤️ by [Quocs Studio](https://quocs.com)**

[khanh@quocs.com](mailto:khanh@quocs.com)
