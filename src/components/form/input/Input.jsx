const Input = (props) => {
  if (props.type === 'radio') {
    return (
      <div className='mb-5'>
        <div className='flex'>
          <input
            id={props.value}
            type='radio'
            name={props.name}
            className='hidden'
            checked={props.checked}
            {...props.register}
            value={props.value}
          />
          <label
            htmlFor={props.value}
            className='flex items-center cursor-pointer text-xl font-normal'
          >
            <span className='w-[23px] h-[23px] mr-5 rounded-full border border-custom-neutral-800 '></span>
            {props.label}
          </label>
        </div>
      </div>
    );
  }
  return (
    <div className={props.className}>
      <div className='max-w-lg w-full'>
        {props.label && (
          <div className='mb-3'>
            <label className='text-[22px] font-bold'>{props.label}</label>
          </div>
        )}
        <input
          {...props.register}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          className='w-full px-5 h-[50px] border-[0.8px] border-custom-neutral-800 text-lg focus:ring-0 focus:border-current font-normal text-custom-neutral-800'
        />
      </div>
    </div>
  );
};

export default Input;
