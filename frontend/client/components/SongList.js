import React, { Component } from 'react'
import { compose } from 'redux';

// helpers that allows us to writes queries
import { graphql } from 'react-apollo'
import { Link } from 'react-router';
import fetchSongs from 'queries/fetchSongs';
import deleteSong from 'queries/deleteSong';

class SongList extends Component {
  constructor(props) {
    super(props);
  }

  onSongDelete = id => {
    this.props.mutate({
      variables: {
        id
      }
    }).then(() => {
      this.props.data.refetch();
    })
  }

  renderSongs = () => {
    return (
      this.props.data.songs.map(({id, title}) => {
        return (
          <li className='collection-item' key={id}>
            <Link to={`/songs/${id}`}>
              {title}
            </Link>
            <i className='material-icons' onClick={() => this.onSongDelete(id)}>
              delete
            </i>
          </li>
        )
      })
    )
  }

  render() {
    const { data } = this.props;

    if (data.loading) return <div>Loading</div>

    return (
      <div>
        <ul className='collection'>{this.renderSongs()}</ul>
        <Link
          to='/songs/new'
          className='btn-floating btn-large red right'
        >
          <i className='material-icons'>add</i>
        </Link>
      </div>
    )
  }
}

const withData = graphql(fetchSongs);
const withDeleteSong = graphql(deleteSong)

export default compose(
  withData,
  withDeleteSong
)(SongList);