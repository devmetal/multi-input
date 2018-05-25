import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';

class Input extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    focused: PropTypes.bool,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
    onActivate: PropTypes.func
  };

  static defaultProps = {
    onChange: () => {},
    onClear: () => {},
    onActivate: () => {},
    disabled: false,
    focused: false
  };

  state = {
    value: ''
  };

  onChange = e => {
    const {
      target: { value }
    } = e;
    this.setState({ value });
    this.props.onChange(value);
  };

  onFocus = () => {
    if (this.props.disabled === true) {
      this.props.onActivate();
    }
  };

  render() {
    return (
      <div>
        <TextField
          autoFocus={this.props.focused}
          label={this.props.label}
          value={this.state.value}
          onChange={this.onChange}
          onFocus={this.onFocus}
        />
        {!this.props.disabled && <Icon onClick={this.props.onClear}>clear</Icon>}
      </div>
    );
  }
}

export default Input;
