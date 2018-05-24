import React from 'react';
import { shallow, mount } from 'enzyme';
import Input from '../Input';

it('renders without crashing', () => {
  shallow(<Input label="label" />);
});
