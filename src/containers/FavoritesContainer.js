import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import PostsComponent from '../components/PostsComponent';
import {connect} from 'react-redux'

class FavoritesContainer extends Component {
  componentDidMount = () => {
    this.props.toggleList(false)
  }
  render() {
    return (
      <Container>
        --FavoritesContainer
        <PostsComponent />
        <PostsComponent />
      </Container>
    );
  }
}

function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
  return {
    toggleList: (bool) => {
      dispatch({type: "TOGGLE_LIST", payload: bool})
    }
  }
}

// export default FavoritesContainer;
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);
