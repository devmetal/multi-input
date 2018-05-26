import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import InputList from './InputList';

class MultiInput extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    values: PropTypes.arrayOf(PropTypes.string)
  };

  static defaultProps = {
    onChange: () => {},
    values: ['']
  };

  constructor(props) {
    super(props);

    this.state = {
      items: this.getDefaultItems()
    };
  }

  getDefaultItems = () => {
    const { values } = this.props;
    const items = values.map(value => ({
      value,
      disabled: false
    }));

    return [...items, { disabled: true, value: '' }];
  };

  onSave = () => {
    const { items } = this.state;
    this.props.onChange(items.filter(i => !i.disabled).map(i => i.value));
  };

  onCancel = () =>
    this.setState({
      items: this.getDefaultItems()
    });

  onActivate = (index, value) => {
    const activated = this.state.items.map((item, i) => {
      if (i !== index) {
        return item;
      }

      return {
        ...item,
        value,
        disabled: false
      };
    });

    const items = [
      ...activated,
      {
        disabled: true,
        value: ''
      }
    ];

    this.setState({ items });
  };

  onChange = (index, value) => {
    const items = this.state.items.map((item, i) => {
      if (i !== index) {
        return item;
      }

      return {
        ...item,
        value
      };
    });

    this.setState({ items });
  };

  onClear = index => {
    this.state.items.splice(index, 1);
    this.setState({ items: [...this.state.items] });
  };

  render() {
    const { items } = this.state;
    const { label } = this.props;

    return (
      <Card>
        <CardContent>
          <InputList
            label={label}
            items={items}
            onActivate={this.onActivate}
            onChange={this.onChange}
            onClear={this.onClear}
          />
        </CardContent>
        <CardActions>
          <Button onClick={this.onSave} color="primary">
            Save
          </Button>
          <Button onClick={this.onCancel}>Cancel</Button>
        </CardActions>
      </Card>
    );
  }
}

export default MultiInput;
