import React from 'react'
import classNames from 'classnames/bind'

const DonationExamples = ({ styles }) => {
  const cx = classNames.bind(styles)

  return (
    <div className={cx('donation-examples')}>
      <div>
        <div className={cx('money')}>$10</div>
        <div className={cx('caption')}>Feed a kitten<br/> for a month.</div>
      </div>
      <hr/>
      <div>
        <div className={cx('money')}>$25</div>
        <div className={cx('caption')}>Vaccinate one<br/> animal.</div>
      </div>
      <hr/>
      <div>
        <div className={cx('money')}>$100</div>
        <div className={cx('caption')}>For life-saving<br/> medicine.</div>
      </div>
      <div className={cx("btn-container")}>
        <a className={cx("btn btn--accent")} href="#">DONATE</a>
      </div>
    </div>
  )
}

export default DonationExamples