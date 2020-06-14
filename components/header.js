import { User, ShoppingBag } from 'react-feather'

const Header = () => (
  <>
    <header>
      <div className="container">
        <nav role="navigation" className="navbar">
          <h1 className="navbar-brand">
            <div className="navbar-brand-text">
            CỎ BÀNG<br /><strong>HANDMADE</strong>
            </div>
          </h1>
          <div className="navbar-collapse">
            <ul className="navbar-nav">
              <li>
                <a className="nav-link">
                  SẢN PHẨM
                </a>
              </li>
              <li>
                <a className="nav-link">
                  GIỚI THIỆU
                </a>
              </li>
              <li>
                <a className="nav-link">
                  BLOG
                </a>
              </li>
              <li>
                <a className="nav-link">
                  LIÊN HỆ
                </a>
              </li>
            </ul>
          </div>
          <ul className="navbar-icons">
            <li>
              <a className="nav-link">
                <User size={20} />
              </a>
            </li>
            <li>
              <a className="nav-link">
                <ShoppingBag size={20} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <style jsx>{`
      header {
        position: fixed;
        width: 100%;
        background-color: #fff;
        z-index: 1030;
        box-shadow: 0 0 10px 0 rgba(0,0,0,.1);
      }
      .navbar {
        display: flex;
        align-items: center;
        padding: 1rem 0px;
        justify-content: flex-start;
        flex-flow: row nowrap;
      }
      .navbar-brand {
        margin: 0;
        white-space: nowrap;
      }
      .navbar-brand-text {
        font-size: 18px;
        line-height: 1em;
        letter-spacing: .1em;
        font-weight: 400;
      }
      .navbar-collapse {
        display: flex;
        flex-grow: 1;
        justify-content: flex-end;
      }
      .navbar-nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        list-style: none;
        margin: 0;
      }
      .nav-link {
        color: #212529;
        font-size: 14px;
        padding: .75rem;
        display: block;
        text-transform: uppercase;
        letter-spacing: .15em;
        text-decoration: none;
      }
      .navbar-icons {
        display: flex;
        flex-direction: row;
        align-items: center;
        list-style: none;
        margin: 0;
      }
    `}</style>
  </>
)

export default Header;
