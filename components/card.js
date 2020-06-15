const Card = ({image, title}) => (
  <>
    <div className="card">
      <div className="card-img-wrap">
        <div className="card-overlay" />
        <div className="card-img" style={{backgroundImage: `url(${image})`}} />
      </div>
      <div className="card-header">
        <div className="card-title">{title}</div>
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
      .card-header {
        padding: 1.5rem 16px;
      }
      .card-title {
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
    `}</style>
  </>
);

export default Card;