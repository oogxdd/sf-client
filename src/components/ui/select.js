import React, { Component } from 'react'
import ReactSelect from 'react-select'
import { Controller } from 'react-hook-form'

const Select = ({ label, name = '', options = [], hint, control }) => (
  <div className="mb-4">
    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <div className="mt-1">
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          console.log(field.onChange)
          return (
            <ReactSelect
              options={options}
              classNamePrefix="react-select"
              placeholder=""
              maxMenuHeight={170}
              styles={{
                control: (base) => ({
                  ...base,
                  '&:focus': {
                    boxShadow:
                      'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
                  },
                }),
                // menu: (base) => ({
                //   ...base,
                //   height: 100,
                // }),
              }}
              {...field}
            />
          )
        }}
      />
    </div>
    {hint && <p className="mt-2 text-sm text-gray-500">{hint}</p>}
  </div>
)

export default Select
