import React from 'react';

const RaveCategory = ({ category }) => {
  return (
    <div className='form-check form-check-inline'>
      <input className='form-check-input' type='radio' name='inlineRadioOptions' id={category.name} value={category.name} />
      <label className='form-check-label' htmlFor={category.name}>{category.displayName}</label>
    </div>
  );
};

export default RaveCategory;
