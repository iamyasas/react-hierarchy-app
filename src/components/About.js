import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class About extends Component {
  componentDidMount() {
    this.props.fetchPosts(1);
  }

  render() {
    return (
      <div style={styles.containerStyle} onScroll={this.handleScroll()}>
        <h2>Infinite scroll</h2>
        <div style={styles.divStyle}>
          {this.renderPosts()}
        </div>
      </div>
    )
  };

  handleScroll() {
    // var element = event.target;
    // if (element.scrollHeight - element.scrollTop === element.clientHeight) {
    //   console.log('scrolled');
    // }
    alert("scroll");
  }

  renderPosts() {
    return this.props.post.map(singlePost =>
      <h4 key={singlePost.id}>{singlePost.content}</h4>
    )
  };
}

const styles = {
  containerStyle: {
    marginTop: '50px',
    height: '300px',
    width: '500px'
  },
  divStyle: {
    borderStyle: 'groove',
    borderColor: 'red',
    height: '300px',
    overflow: 'auto'
  }
};

const mapStateToProps = (state) => {
  return {
    post: state.post
  };
}

export default connect(mapStateToProps, actions)(About);
