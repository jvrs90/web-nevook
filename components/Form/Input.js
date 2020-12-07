

const Input = ({
  label,
  className,
  placeHolder,
  ref,
  name,
  ...props
}) => {
  return (
    <>
      <label>
        {label}
        <input
          className={`w-full px-1 py-0.5 rounded-lg border bg-secondary dark:bg-gray-900 text-white-dark dark:text-white ${error
            ? 'border-red-600'
            : 'border-primary focus:border-primary-hover focus:border-2'
            }`}
          name={name} ref={ref} placeholder={placeHolder} />
      </label>
      {errors.exampleRequired && <span>This field is required</span>}
    </>
  )
}

export default Input
