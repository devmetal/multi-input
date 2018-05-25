import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputList from './InputList';

class MultiInput extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: () => {}
  };

  state = {
    items: [
      {
        disabled: false,
        index: 0,
        value: ''
      },
      {
        disabled: true,
        index: 1,
        value: ''
      }
    ]
  };

  changed = items => {
    this.props.onChange(items.filter(i => !i.disabled).map(i => i.value));
  };

  onActivate = ind => {
    const activated = this.state.items.map(item => {
      if (item.index !== ind) {
        return { ...item, focused: false };
      }
      return {
        ...item,
        disabled: false,
        focused: true
      };
    });

    const items = [
      ...activated,
      {
        disabled: true,
        index: activated.length,
        value: ''
      }
    ];

    this.changed(items);
    this.setState({ items });
  };

  onChange = (ind, value) => {
    const items = this.state.items.map(item => {
      if (item.index !== ind) {
        return item;
      }

      return {
        ...item,
        value
      };
    });

    this.setState({ items });
    this.changed(items);
  };

  onClear = ind => {
    const items = this.state.items.filter(item => item.index !== ind);

    this.changed(items);
    this.setState({ items });
  };

  render() {
    const { items } = this.state;
    const { label } = this.props;

    return (
      <InputList
        label={label}
        items={items}
        onActivate={this.onActivate}
        onChange={this.onChange}
        onClear={this.onClear}
      />
    );
  }
}

export default MultiInput;
