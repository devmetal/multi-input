import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import styled from 'styled-components';

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: nowrap;
`;

const PointerIcon = styled(Icon)`
  cursor: pointer;
`;

class Input extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
    onActivate: PropTypes.func
  };

  static defaultProps = {
    onChange: () => {},
    onClear: () => {},
    onActivate: () => {},
    disabled: false
  };

  onChange = e => {
    const {
      target: { value }
    } = e;
    this.props.onChange(value);
  };

  onFocus = () => {
    if (this.props.disabled === true) {
      this.props.onActivate();
    }
  };

  render() {
    return (
      <InputRow>
        <TextField
          fullWidth
          label={this.props.label}
          value={this.props.value}
          onChange={this.onChange}
          onFocus={this.onFocus}
        />
        {!this.props.disabled && (
          <PointerIcon onClick={this.props.onClear}>clear</PointerIcon>
        )}
      </InputRow>
    );
  }
}

export default Input;
