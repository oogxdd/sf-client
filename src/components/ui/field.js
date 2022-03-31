const Field = ({
  label = 'Label',
  placeholder = 'Placeholder',
  hint,
  value,
  onChange = () => {},
  type = 'text',
  leading,
  addon,
  register = {},
  name,
  ...rest
}) => {
  console.log(rest)
  return (
    <div className="mb-4">
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1 relative">
        {leading && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">{leading}</span>
          </div>
        )}
        <input
          className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${
            leading ? 'pl-7' : ''
          } ${addon ? 'pr-12' : ''}`}
          placeholder={placeholder}
          type={type}
          // value={value}
          // onChange={onChange}
          {...register(name)}
          {...rest}
        />
        {addon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm" id="price-currency">
              {addon}
            </span>
          </div>
        )}
      </div>
      {hint && (
        <p className="mt-2 text-sm text-gray-500" id="email-description">
          {hint}
        </p>
      )}
    </div>
  )
}

export default Field
