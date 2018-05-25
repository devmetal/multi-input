import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from '../components/Input';
import InputList from '../components/InputList';
import MultiInput from '../components/MultiInput';

storiesOf('Multiple Input', module)
  .add('Input', () => (
    <Input
      label="Test Prop"
      onChange={action('onChange')}
      onClear={action('onClear')}
    />
  ))
  .add('Disabled Input', () => (
    <Input label="Test Prop" onActivate={action('activate')} disabled />
  ))
  .add('InputList', () => {
    const items = [{ index: 1, disabled: false, }, { index: 2, disabled: false }];

    return (
      <InputList
        label="Test Prop"
        items={items}
        onClear={action('onClear')}
        onChange={action('onChange')}
      />
    );
  })
  .add('MultiInput', () => (
    <MultiInput onChange={action('onChange')} label="Test Prop" />
  ));
