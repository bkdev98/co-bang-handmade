import { useState, useEffect } from 'react'

import { X } from 'react-feather'

const Sidebar = ({ width, height, visible, children, onClose }) => {
  const [xPosition, setX] = useState(width);

  useEffect(() => {
    if (visible) {
      setX(0);
    } else {
      setX(width);
    }
  }, [visible]);

  return (
    <>
      <div
        className="side-bar"
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height
        }}
      >
        <div className="content">
          <button
            onClick={() => onClose ? onClose() : setX(width)}
            className="close-btn"
          >
            <X color="#000" />
          </button>
          {children}
        </div>
      </div>
      <style jsx>{`
        .side-bar {
          position: fixed;
          right: 0;
          top: 0;
          bottom: 0;
          height: 100% !important;
          display: flex;
          flex-direction: column;
          background-color: rgb(255, 255, 255);
          transition: 0.8s ease;
          z-index: 1031;
          box-shadow: 0 0 10px 0 rgba(0,0,0,.1);
        }
        .content {
          position: relative;
        }
        .close-btn {
          position: absolute;
          top: 25px;
          right: 25px;
          outline: none;
          border: none;
          z-index: 1;
          background-color: #fff;
        }
      `}</style>
    </>
  )
}

export default Sidebar
