import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class InputList extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        index: PropTypes.number.isRequired,
        disabled: PropTypes.bool.isRequired,
        focused: PropTypes.bool,
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
        {items.map(({ index, disabled, focused }) => (
          <Input
            key={index}
            label={label}
            disabled={disabled}
            focused={focused}
            onChange={val => onChange(index, val)}
            onClear={() => onClear(index)}
            onActivate={() => onActivate(index)}
          />
        ))}
      </div>
    );
  }
}

export default InputList;
