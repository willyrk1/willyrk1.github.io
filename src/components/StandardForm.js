import React, { useState, useRef } from 'react'
import classNames from 'classnames/bind'
import ReactSelect from 'react-select'
import styles from './StandardForm.module.scss'
import StFrancisRescue from '../apis/StFrancisRescue'

const cx = classNames.bind(styles)

const StandardForm = ({
  className,
  method = 'post',
  onSubmit = StFrancisRescue.postForm,
  ...rest
}) => (
  <form
    className={cx(className, 'form')}
    method={method}
    onSubmit={onSubmit}
    {...rest}
  />
)

StandardForm.Input = ({ className, ...rest }) => (
  <div className={cx(className, 'input')} {...rest} />
)

const RequiredSelect = ({ className, onChange, value, ...rest }) => {
  const [hiddenValue, setHiddenValue] = useState(value)
  const selectRef = useRef()

  const handleChange = newValue => {
    onChange && onChange(newValue)
    setHiddenValue(newValue)
  }

  return (
    <div className={cx(className, 'input-select', 'required-select')}>
      <ReactSelect
        value={value}
        onChange={handleChange}
        {...rest}
        ref={selectRef}
      />
      <input
        tabIndex={-1}
        autoComplete="off"
        style={{
          opacity: 0,
          width: '100%',
          height: 0,
          position: 'absolute',
        }}
        value={hiddenValue}
        onChange={() => {}}
        onFocus={() => selectRef.current.focus()}
        required
      />
    </div>
  )
}

StandardForm.Select = ({ className, required, ...rest }) =>
  required ? (
    <RequiredSelect className={className} {...rest} />
  ) : (
    <ReactSelect className={cx(className, 'input-select')} {...rest} />
  )

StandardForm.RadioGroup = ({
  className,
  label,
  name,
  id = name,
  inputs,
  required,
}) => (
  <li className={className}>
    <label htmlFor={id}>{label}</label>
    <StandardForm.Input>
      {inputs.map(({ label: inputLabel, id: inputId = inputLabel, value }) => (
        <label htmlFor={`${id}${inputId}`}>
          <input
            type="radio"
            id={`${id}${inputId}`}
            {...{ name, value, required }}
          />
          {inputLabel}
        </label>
      ))}
    </StandardForm.Input>
  </li>
)

export default StandardForm
