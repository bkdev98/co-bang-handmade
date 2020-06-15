const Button = ({label, type = 'primary', append, ...props}) => (
  <>
    <a className={`btn ${type} ${append && 'append'}`} {...props}>
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
        cursor: pointer;
      }
      .primary {
        color: #fff;
        background-color: #577941;
        border-color: #577941;
      }
      .primary:hover {
        color: #fff;
        background-color: #354f24;
        border-color: #354f24;
      }
      .secondary {
        background-color: #fff;
        border-color: #fff;
        color: #212529;
      }
      .secondary:hover {
        background-color: #d6d6d6;
        border-color: #d6d6d6;
        color: #212529;
      }
      .append {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        font-size: 15px;
        font-weight: 600;
        letter-spacing: .05em;
        text-transform: none;
      }
      @media (max-width: 991.98px) {
        .btn {
          padding: .65rem 1.3rem;
          font-size: 14px;
          line-height: 1.3;
        }
      }
    `}</style>
  </>
);

export default Button