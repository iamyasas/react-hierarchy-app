import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Landing extends Component {

  renderAll() {
    return this.props.todo.map(org =>
      <div key={org.id}>
        {this.renderHead(org)}
        <br />
        {this.renderChildren(org.childUnitis)}
      </div>
    );
  }

  renderHead(orgUnit) {
    if (orgUnit.id === 1) {
      return <button key={orgUnit.id}> { orgUnit.name }</button>;
    }
  }

  renderChildren(childUnits) {
    return childUnits.map(child =>
      <button key={child.id} onClick={() => this.props.fetchUser(child.id)}> { child.name }</button>
    );
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.fetchUser(1)}>Call API</button>
        <div> Org Hierarchy </div>
        {this.renderAll()}
      </div>
    )
  };
}

function mapStateToProps(state) {
  return {
    todo: state.auth
  };
}

export default connect(mapStateToProps, actions)(Landing);
