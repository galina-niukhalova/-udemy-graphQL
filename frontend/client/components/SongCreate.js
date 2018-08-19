import React, { Component } from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link, hashHistory } from 'react-router'
import fetchSongs from '../queries/fetchSongs'


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
            <div>
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

const createSongQuery = gql`
    mutation AddSong($title: String!) {
        addSong(title: $title)  {
            id
            title
        }
    }
`

const withMutation = graphql(createSongQuery);

export default withMutation(SongCreate);