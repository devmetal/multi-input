import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import MultiInput from './MultiInput';

const Body = styled.div`
  flex-grow: 1;
`;

class Root extends Component {
  state = {
    values: ['foo', 'bar', 'baz'],
    label: 'Test Property'
  };

  onCange = values => this.setState({ values });

  render() {
    return (
      <Body>
        <Grid container>
          <Grid item xs={12} sm={12} md={3}>
            <Paper>
              <div>Test</div>
              <React.Fragment>
                {this.state.values.map((v, i) => <div key={i}>{v}</div>)}
              </React.Fragment>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={9}>
            <MultiInput
              values={this.state.values}
              onChange={this.onCange}
              label={this.state.label}
            />
          </Grid>
        </Grid>
      </Body>
    );
  }
}

export default Root;
