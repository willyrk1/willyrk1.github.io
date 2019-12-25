import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Sponsors.module.scss'
import bigCatLogo from '../assets/images/BigCatRescueLogo.png'
import petcoLogo from '../assets/images/PetcoLogo.png'
import gulfCoastLogo from '../assets/images/Gulfcoast Veterinary Center.png'
import westChaseLogo from '../assets/images/Westchase_Veterinary_Center_and_Emergenc.png'
import bisselLogo from '../assets/images/bisselpetfoundation.jpg'
import petSmartLogo from '../assets/images/petsmart_charities-1.jpg'

const cx = classNames.bind(styles)

const Sponsors = () => {
  const [ scrollIndex, setScrollIndex ] = useState(0)

  return (
    <div className={cx('sponsors')}>
      <div>
        <h1>Our Sponsors</h1>
        <hr/>
      </div>
      <div className={cx('arrow')}>
        <h1>
          <a href="#" onClick={event => { setScrollIndex(scrollIndex + 1); event.preventDefault();}}>
            &lt;
          </a>
        </h1>
      </div>
      <div className={cx('tiles')}>
        {[
          { key: 1, logo: <img src={petcoLogo} /> },
          { key: 2, logo: <img src={gulfCoastLogo} /> },
          { key: 3, logo: <img src={westChaseLogo} /> },
          { key: 4, logo: <img src={petSmartLogo} /> },
          { key: 5, logo: <img src={bigCatLogo} /> },
          { key: 6, logo: <img src={bisselLogo} /> },
        ].map(({ logo, key }, index, ary) => {
          const adjustedIndex = (((index - scrollIndex + 1) % ary.length) + ary.length) % ary.length
          return (
            <div
              key={key}
              className={cx({
                hide: !adjustedIndex || adjustedIndex === ary.length - 1
              })}
              style={{ left: `${(adjustedIndex - 1) * 20}rem` }}
            >
              {logo}
            </div>
          )
        })}
      </div>
      <div className={cx('arrow')}>
        <h1>
          <a href="#" onClick={event => { setScrollIndex(scrollIndex - 1); event.preventDefault();}}>
            &gt;
          </a>
        </h1>
      </div>
    </div>
  )
}

export default Sponsors