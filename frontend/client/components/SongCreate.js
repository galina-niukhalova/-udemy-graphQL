import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link, hashHistory } from 'react-router'
import fetchSongs from 'queries/fetchSongs'
import createSongQuery from 'queries/createSong'

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    }
  }

  handleChange = ({ target }) => {
    this.setState({ title: target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title } = this.state;

    this.props.mutate({
      variables: {
        title
      },
      refetchQueries: [{
        query: fetchSongs
      }]
    }).then(() => { hashHistory.push('/') })
  }

  render() {
    return (
      <div className='container'>
        <Link to='/'>Back</Link>
        <h3>Create a new song</h3>
        <form onSubmit={this.onSubmit}>
          <label>Song Title:</label>
          <input value={this.state.input} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

const withCreateSong = graphql(createSongQuery);

export default withCreateSong(SongCreate);