import React, { Component } from 'react';
import './PlayerBar.css';

class PlayerBar extends Component {


  formatPlayerTime(time) {
    return time ? `${Math.floor(time / 60)}:${Number(time % 60 / 100).toFixed(2).substr(2, 3)}` : '-:--'
  }

  render() {
    return (
      <section className="player-bar">

        <section id="buttons">
          <button id="previous" onClick={this.props.handlePrevClick}>
            <span className="ion-skip-backward"></span>
          </button>
          <button id="play-pause" onClick={this.props.handleSongClick} >
            <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
          </button>
          <button id="next" onClick={this.props.handleNextClick}>
            <span className="ion-skip-forward"></span>
          </button>
        </section>

        <section id="time-control">
          <div className="current-time">{this.formatPlayerTime(this.props.currentTime)}</div>
          <input
            type="range"
            className="seek-bar"
            value={(this.props.currentTime / this.props.duration) || 0}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleTimeChange}
          />
          <div className="total-time">{this.formatPlayerTime(this.props.duration)}</div>
        </section>
        <section id="volume-control">
          <div className="icon ion-volume-low" >
          </div>
          <input
            value={this.props.volume}
            type="range"
            className="seek-bar"
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleVolumeChange}
          />
          <div className="icon ion-volume-high">
          </div>
        </section>
      </section>
    );
  }
}

export default PlayerBar;