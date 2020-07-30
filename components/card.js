import Tag from './tag'
import Button from './button'

const Card = ({image, images, title, type = 'category', tag, pricing}) => (
  <>
    <div className={`card ${type}`}>
      <div className="card-img-wrap">
        <div className="card-overlay" />
        <div className="card-img" />
        <div className="card-img card-img-2" />
      </div>
      <div className={type}>
        <div className="card-header">
          {tag && <Tag label={tag} style={{marginBottom: 5}} />}
          <div className="card-title">{title}</div>
          {type === 'article' && <a className="readmore">Đọc tiếp</a>}
          {type === 'product' && (
            <div className="pricing">
              Từ <span className="amount">{pricing?.priceRange?.start?.net?.amount?.toLocaleString()}</span> <span className="currency">{pricing?.priceRange?.start?.net?.currency}</span>
            </div>
          )}
        </div>
        {type === 'product' && (
          <div className="card-footer">
            <div className="add-to-cart">
              <input name="quantity" type="number" id="quantity" placeholder="1" className="quantity-input" />
              <Button label="THÊM VÀO GIỎ" append type="card-footer" />
            </div>
          </div>
        )}
      </div>
    </div>
    <style jsx>{`
      .card {
        cursor: pointer;
        box-shadow: 0 0 20px 0 rgba(0,0,0,.12);
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        background: #ffffff;
        border: none;
        margin: 0;
        transition: box-shadow .7s ease;
      }
      .card-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-color: #202024;
        opacity: 0;
        transition: opacity .7s ease;
        z-index: 1;
      }
      .card-img-wrap {
        background-position: 50% 50%;
        background-size: cover;
        position: relative;
        height: 200px;
      }
      .card-img {
        background-position: 50% 50%;
        background-size: cover;
        position: relative;
        background-repeat: no-repeat;
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url(${image || images?.[0]?.url});
      }
      .card-img-2 {
        opacity: 0;
        transition: opacity .7s ease;
        position: absolute;
        background-image: url(${image || images?.[1]?.url || images?.[0]?.url});
      }
      .card:hover {
        box-shadow: 0 0 40px 0 rgba(0,0,0,.19);
      }
      .card:hover .card-img-wrap .card-overlay {
        opacity: .2;
      }
      .card:hover .card-img-wrap .card-img-2 {
        opacity: 1;
      }
      .category .card-header {
        padding: 1.5rem 16px;
      }
      .category .card-title {
        padding: 0;
        margin: 0;
        border: none;
        flex: 1;
        font-size: 16px;
        line-height: 1.3em;
        font-weight: 600;
        text-align: center;
        color: #212529;
      }
      .product .card-header {
        padding: 1rem 16px;
      }
      .product .card-title {
        padding: 0;
        margin: 0;
        border: none;
        flex: 1;
        font-size: 16px;
        line-height: 1.3em;
        height: 2.6em;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: 600;
        color: #212529;
      }
      .product .pricing {
        margin-top: 8px;
        font-size: 14px;
      }
      .product .pricing .amount {
        font-size: 20px;
        font-weight: 600;
        color: #577941;
        margin-left: 2px;
        margin-right: 2px;
      }
      .product .pricing .currency {
      }
      .product .card-img-wrap {
        height: 270px;
      }
      .article .card-header {
        padding: 1.5rem 16px;
        text-align: left;
      }
      .article .card-title {
        padding: 0;
        margin: 0;
        border: none;
        flex: 1;
        font-size: 18px;
        line-height: 1.3em;
        font-weight: 500;
        color: #212529;
        text-align: left;
        height: 3.9em;
      }
      .readmore {
        color: #577941;
        text-decoration: underline;
        margin-top: 5px;
      }
      .product .card-footer {
        overflow: hidden;
      }
      .add-to-cart {
        display: flex;
        justify-content: center;
        align-items: stretch;
      }
      .add-to-cart .quantity-input {
        width: 60px;
        font-size: 16px;
      }
      @media (max-width: 991.98px) {
        .category .card-header {
          padding: 1.3rem 12px;
        }
        .category .card-title {
          font-size: 14px;
          line-height: 1.1em;
        }
        .product .card-header {
          padding: 1.3rem 12px;
        }
        .product .card-title {
          font-size: 14px;
          line-height: 1.1em;
        }
        .article .card-header {
          padding: 1.3rem 12px;
        }
        .article .card-title {
          font-size: 16px;
          line-height: 1.1em;
          height: 3.3em;
        }
        .card-img-wrap {
          height: 180px;
        }
      }
    `}</style>
  </>
);

export default Card;