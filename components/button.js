const Button = ({label}) => (
  <>
    <a className="btn">
      {label}
    </a>
    <style jsx>{`
      .btn {
        display: inline-block;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        text-decoration: none;
        padding: .75rem 1.5rem;
        font-size: 16px;
        line-height: 1.5;
        border-radius: 4px;
        border: 1px solid transparent;
        transition: color .3s ease,background-color .3s ease,border-color .3s ease,box-shadow .3s ease;
        font-weight: 600;
        letter-spacing: .04em;
        color: #fff;
        background-color: #577941;
        border-color: #577941;
        cursor: pointer;
      }
      .btn:hover {
        color: #fff;
        background-color: #354f24;
        border-color: #354f24;
      }
    `}</style>
  </>
);

export default Button