import React, { Component } from 'react';

class LyricList extends Component {
  onLike = (lyricId) => {
    console.log(lyricId)
  }

  renderLyrics = () => {
    const { lyrics } = this.props;

    return lyrics.map(({ id, content }) => (
      <li key={id} className='collection-item'>
        {content}
        <i className='material-icons' onClick={() => this.onLike(id)}>
          thumb_up
        </i>
      </li>
    ));
  }

  render() {


    return (
      <ul className='collection'>
        {this.renderLyrics()}
      </ul>
    )
  }
}

export default LyricList;