import React from 'react';
import SuggestableInput from './common/SuggestableInput';
import RaveCategories from './common/RaveCategories';

const Rave = () => {
  return (
    <div className='container'>
      <div className='row'>
        <form>
          <label name='name' className='row'>Name</label>
          {/* <input name='name_input' type='text' className='row' /> */}
          <SuggestableInput name='name_input' />

          <label name='category' className='row'>Category</label>
          <RaveCategories />

          <label name='cc' className='row'>Who else should know</label>
          {/* <input name='cc_input' type='text' className='row' /> */}
          <SuggestableInput name='cc_input' />

          <input name='submit' type='submit' className='row' />
        </form>
      </div>
    </div>
  );
};

export default Rave;
