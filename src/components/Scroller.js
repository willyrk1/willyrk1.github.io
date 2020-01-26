import React, { useState } from 'react'
import classNames from 'classnames/bind'
import scrollerStyles from './Scroller.module.scss'

const Scroller = ({ components = [], styles, scrollRems = 20, state }) => {
  const cx = classNames.bind({...styles, ...scrollerStyles})
  const thisState = useState(0)
  const [ scrollIndex, setScrollIndex ] = state || thisState

  return (
    <>
      <div className={cx('scroller-arrow', 'scroller-arrow-left', 'arrow')}>
        <button onClick={() => setScrollIndex(scrollIndex + 1)}>
          &lt;
        </button>
      </div>
      <div className={cx('scroller-tiles', 'tiles')}>
        {components.map(({ component, key }, index, ary) => {
          const adjustedIndex = (((index - scrollIndex + 1) % ary.length) + ary.length) % ary.length
          return (
            <div
              key={key}
              className={
                cx((val => ({
                  'scroller-hide': val,
                  hide: val,
                }))(!adjustedIndex || adjustedIndex === ary.length - 1))
              }
              style={{ left: `${(adjustedIndex - 1) * scrollRems}rem` }}
            >
              {component}
            </div>
          )
        })}
      </div>
      <div className={cx('scroller-arrow', 'scroller-arrow-right', 'arrow')}>
        <button onClick={() => setScrollIndex(scrollIndex - 1)}>
          &gt;
        </button>
      </div>
    </>
  )
}

export default Scroller