const Tag = ({label, large, active, margin, ...props}) => (
  <>
    <a className={`tag ${large && 'tag-large'} ${active && 'tag-active'} ${margin && 'tag-margin'}`} {...props}>
      {label}
    </a>
    <style jsx>{`
      .tag {
        padding: 1px 6px;
        width: auto!important;
        font-size: 11px;
        font-weight: 400;
        color: #fff;
        background-color: #577941;
        border-color: #577941;
        cursor: pointer;
        display: inline-block;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        text-decoration: none;
        line-height: 1.5;
        border-radius: 4px;
        border: 1px solid transparent;
        transition: color .3s ease,background-color .3s ease,border-color .3s ease,box-shadow .3s ease;
        letter-spacing: .02em;
      }
      .tag:hover {
        background-color: #354f24;
        border-color: #354f24;
      }
      .tag-large {
        padding: 4px 12px;
        border-radius: 5px;
        font-size: 14px;
        font-weight: 600;
      }
      .tag-active {
        background-color: #212529;
        border-color: #212529;
      }
      .tag-margin {
        margin: 5px;
      }
    `}</style>
  </>
);

export default Tag
