import Head from 'next/head'

export default function Product() {
  return (
    <div>
      <Head>
        <title>Sản phẩm | Cỏ Bàng Handmade</title>
      </Head>
      <section className="section-product-hero">Products</section>
      <style jsx>{`
        .section-product-hero {
          position: relative;
          padding-top: 100px;
        }
      `}</style>
    </div>
  )
}
