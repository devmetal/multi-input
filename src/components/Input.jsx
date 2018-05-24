import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';

class Input extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
  }

  static defaultProps = {
    onChange: () => {},
    onClear: () => {},
  }

  state = { value: '' }

  onChange = (e) => {
    const { target: { value } } = e;
    this.setState({ value });
    this.props.onChange(value);
  }
  
  render() {
    return (
      <div>
        <TextField
          label={this.props.label}
          value={this.state.value}
          onChange={this.onChange}
        />
        <Icon onClick={this.props.onClear}>clear</Icon>
      </div>
    )
  }
}

export default Input;
