import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import InputList from './InputList';

class MultiInput extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    defaultValues: PropTypes.arrayOf(PropTypes.string)
  };

  static defaultProps = {
    onChange: () => {},
    defaultValues: ['']
  };

  constructor(props) {
    super(props);

    this.state = {
      items: this.getDefaultItems()
    };
  }

  getDefaultItems = () => {
    const items = this.props.defaultValues.map((v, i) => ({
      index: i,
      value: v,
      disabled: false
    }));

    return [...items, { disabled: true, value: '', index: items.length }];
  };

  onSave = () => {
    const { items } = this.state;
    this.props.onChange(items.filter(i => !i.disabled).map(i => i.value));
  };

  onCancel = () =>
    this.setState({
      items: this.getDefaultItems()
    });

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
  };

  onClear = ind => {
    const items = this.state.items.filter(item => item.index !== ind);
    this.setState({ items });
  };

  render() {
    const { items } = this.state;
    const { label } = this.props;

    return (
      <div>
        <InputList
          label={label}
          items={items}
          onActivate={this.onActivate}
          onChange={this.onChange}
          onClear={this.onClear}
        />
        <Button onClick={this.onSave} color="primary">
          Save
        </Button>
        <Button onClick={this.onCancel}>Cancel</Button>
      </div>
    );
  }
}

export default MultiInput;
