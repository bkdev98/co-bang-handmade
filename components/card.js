import Tag from './tag'

const Card = ({image, title, type = 'category', tag}) => (
  <>
    <div className="card">
      <div className="card-img-wrap">
        <div className="card-overlay" />
        <div className="card-img" style={{backgroundImage: `url(${image})`}} />
      </div>
      <div className={type}>
        <div className="card-header">
          {tag && <Tag label={tag} style={{marginBottom: 5}} />}
          <div className="card-title">{title}</div>
          {type === 'article' && <a className="readmore">Đọc tiếp</a>}
        </div>
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
      }
      .card-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-color: #202024;
        opacity: 0;
        transition: opacity .3s ease;
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
        width: 100%;
        height: 100%;
      }
      .card .card-img-wrap:hover .card-overlay {
        opacity: .3;
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
      @media (max-width: 991.98px) {
        .category .card-header {
          padding: 1.3rem 12px;
        }
        .category .card-title {
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