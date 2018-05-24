import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from '../components/Input';

storiesOf('Multiple Input', module)
  .add('Input', () => (
      <Input label="Test Prop" onChange={action('onChange')} onClear={action('onClear')} />
    )
  )
