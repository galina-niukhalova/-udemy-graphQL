import React, { Component } from 'react';
import CreateLyricMutation from 'queries/createLyric';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ''
    }
  }

  onChange = ({ target }) => {
    this.setState({ content: target.value })
  }

  onSubmit = e => {
    e.preventDefault();

    this.props.mutate({
      variables: {
        songId: this.props.songId,
        content: this.state.content
      }
    }).then(() => this.setState({ content: '' }))
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Add a Lyric</label>
        <input value={this.state.content} onChange={this.onChange} />
      </form>
    )
  }
}

const withMutation = graphql(CreateLyricMutation);
export default withMutation(LyricCreate);