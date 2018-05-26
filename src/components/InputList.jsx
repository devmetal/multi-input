import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class InputList extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        disabled: PropTypes.bool.isRequired,
        value: PropTypes.string.isRequired
      })
    ),
    onChange: PropTypes.func,
    onClear: PropTypes.func,
    onActivate: PropTypes.func
  };

  static defaultProps = {
    items: [],
    onChange: () => {},
    onClear: () => {},
    onActivate: () => {}
  };

  render() {
    const { items, label, onChange, onClear, onActivate } = this.props;
    return (
      <div>
        {items.map((item, index) => (
          <Input
            key={index}
            label={label}
            disabled={item.disabled}
            value={item.value}
            onChange={val => onChange(index, val)}
            onClear={() => onClear(index)}
            onActivate={val => onActivate(index, val)}
          />
        ))}
      </div>
    );
  }
}

export default InputList;
