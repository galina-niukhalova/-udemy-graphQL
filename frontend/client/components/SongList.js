import React, { Component } from 'react'

// helpers that allows us to writes queries
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link } from 'react-router';
import fetchSongs from '../queries/fetchSongs';

class SongList extends Component {
    constructor(props) {
        super(props);
    }

    renderSongs = () => {
        return (
            this.props.data.songs.map(song => {
                return (
                    <li className='collection-item' key={song.id}>
                        {song.title}
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

export default withData(SongList);