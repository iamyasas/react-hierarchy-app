import React from 'react';
import RaveCategory from './RaveCategory';

const RaveCategories = () => {
  var categories = [
    {
      displayName: 'Thank You',
      name: 'thank_you'
    },
    {
      displayName: 'Teamphoria',
      name: 'teamphoria'
    },
    {
      displayName: 'Pat on the Back',
      name: 'pat_on_the_back'
    },
    {
      displayName: 'Give a Wow',
      name: 'give_a_wow'
    }
  ]

  return (

    categories.map(category =>
      <RaveCategory key={category.name} category={category} />
    )
  );
};

export default RaveCategories;
