import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Landing extends Component {
  componentDidMount() {
    this.props.fetchUser({ orgID: 1, parent: 1 })
  }

  renderAll() {
    return this.props.todo.map(org =>
      <div key={org.id}>
        {this.renderHead(org)}
        {this.renderSeperator(org)}
        {this.renderChildren(org.childUnitis)}
      </div>
    );
  }

  renderHead(orgUnit) {
    if (orgUnit.id === 1) {
      return <button key={orgUnit.id}> { orgUnit.name }</button>;
    }
  }

  renderSeperator(orgUnit) {
    if (orgUnit.id === 1) {
      return <br />;
    }
  }

  renderChildren(childUnits) {
    return childUnits.map(child =>
      <button key={child.id} onClick={() => this.props.fetchUser({ orgID: child.id, parent: child.parent })}> { child.name }</button>
    );
  }

  render() {
    return (
      <div>
        {/* <button onClick={() => this.props.fetchUser({ orgID: 1, parent: 1 })}>Call API</button> */}
        <h2> Org Hierarchy </h2>
        {this.renderAll()}
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    todo: state.auth
  };
}

export default connect(mapStateToProps, actions)(Landing);
