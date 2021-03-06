import { useState } from 'react'
import { Search, ShoppingBag, Menu } from 'react-feather'
import { Visible } from 'react-grid-system'
import Link from 'next/link'

import Sidebar from '../components/sidebar'

const Header = ({menus}) => {
  const navbar = menus.edges.find(({node}) => node.name === 'navbar')

  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <header>
        <div className="container">
          <nav role="navigation" className="navbar">
            <h1 className="navbar-brand">
              <Link href="/">
                <div className="navbar-brand-text">
                  CỎ BÀNG<br /><strong>HANDMADE</strong>
                </div>
              </Link>
            </h1>
            <div className="navbar-collapse">
              <Visible md lg xl xxl>
                <ul className="navbar-nav">
                  {navbar.node.items.map(item => (
                    <li key={item.id}>
                      <Link href={`/${item.page.slug}`}>
                        <a className="nav-link">
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Visible>
            </div>
            <ul className="navbar-icons">
              <li>
                <a className="nav-link">
                  <Search size={20} />
                </a>
              </li>
              <li>
                <a className="nav-link" onClick={() => setCartOpen(true)}>
                  <ShoppingBag size={20} />
                </a>
              </li>
              <Visible xs sm>
                <li>
                  <a className="nav-link">
                    <Menu size={20} />
                  </a>
                </li>    
              </Visible>
            </ul>
          </nav>
        </div>
      </header>
      <Sidebar visible={cartOpen} width={350} height='100vh' onClose={() => setCartOpen(false)}>
        <p style={{margin: 25}}>Cart</p>
      </Sidebar>
      <style jsx>{`
        header {
          position: fixed;
          width: 100%;
          z-index: 1030;
          box-shadow: 0 0 10px 0 rgba(0,0,0,.1);
          background: hsla(0,0%,100%,.6);
          backdrop-filter: blur(3px);
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
          cursor: pointer;
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
        @media (max-width: 991.98px) {
          .navbar-brand-text {
            font-size: 16px;
          }
          .navbar {
            padding: 0.6rem 0px;
          }
        }
      `}</style>
    </>
  )
}

export default Header;
