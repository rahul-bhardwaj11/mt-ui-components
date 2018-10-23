import React, { Component } from 'react';
import { actions } from '../../actions';
import { connect } from '../../utils/providerHelper';
import style from './index.scss';
import Player from '../../components/Player';
import VideoControls from '../VideoControls';

/*eslint-disable*/
class VideoPlayerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.showControls = this.showControls.bind(this);
    this.hideControls = this.hideControls.bind(this);
    this.onSelectTrack = this.onSelectTrack.bind(this);
    this.onSeekHandler = this.onSeekHandler.bind(this);
    this.volumeUpdateHandler = this.volumeUpdateHandler.bind(this);
    this.onVideoLoadedHandler = this.onVideoLoadedHandler.bind(this);
    this.onVideoEndedHandler = this.onVideoEndedHandler.bind(this);
    this.onVideoPlayedHandler = this.onVideoPlayedHandler.bind(this);
    this.videoPauseAtTimeHandler = this.videoPauseAtTimeHandler.bind(this);
    this.updateMediaAttributes = this.props.updateMediaAttributes.bind(
      this.props
    );
    this.togglePlayPause = this.togglePlayPause.bind(this);
    this.setTrackOnStart();
  }

  /* 
    	Later we can optimize this method to check for best suitable track for end uses
    */

  setTrackOnStart() {
    let selectedTrack = 0;
    const defaultTrack =
      this.props.primaryTracks.find(track => track.default) ||
      this.props.primaryTracks[0];
    this.state = {
      ...this.state,
      selectedTrack: this.props.primaryTracks.indexOf(defaultTrack)
    };
  }

  togglePlayPause() {
    if (this.videoPlayer) {
      this.videoPlayer.togglePlayPause();
    }
  }

  showControls() {
    this.setState({
      controls: true
    });
  }

  hideControls(event) {
    var e = event.toElement || event.relatedTarget;
    if (this.container.contains(e)) {
      return;
    }
    this.setState({
      controls: false
    });
  }

  onSelectTrack(selectedTrack) {
    let currentTime = this.props.currentTime;
    let isPaused = this.videoPlayer.isPaused();
    this.setState({
      selectedTrack
    });
    setTimeout(() => {
      this.videoPlayer.seekToTime(currentTime);
      if (!isPaused) {
        this.videoPlayer.play();
        this.setState({
          showPlayButton: false
        });
      }
    }, 500);
  }

  onSeekHandler(seekbarValue) {
    this.videoPlayer.moveTo(seekbarValue);
  }

  volumeUpdateHandler(volume) {
    this.videoPlayer.updateVolume(volume);
  }

  onVideoLoadedHandler() {
    let showPlayButton = this.videoPlayer.isPaused();
    this.setState({
      showPlayButton,
      controls: false
    });
  }

  onVideoEndedHandler() {
    this.setState({
      showPlayButton: true,
      controls: false
    });
  }

  onVideoPlayedHandler() {
    this.setState({
      showPlayButton: false,
      controls: true
    });
  }

  videoPauseAtTimeHandler(time) {
    this.videoPlayer.pauseAtTime(time);
  }

  render = () => {
    const {
      primaryTracks,
      secondaryTracks,
      fullScreen,
      edit,
      id,
      secondaryId,
      onRenderComplete,
      showControlsOnly,
      namespace,
      controlOptions,
      downloadSrc,
      currentTime
    } = this.props;
    let { controls, selectedTrack, showPlayButton } = this.state;
    controls = showControlsOnly || controls;
    let downloadSrcLink = primaryTracks[selectedTrack].src;
    if (showControlsOnly) {
      downloadSrcLink = downloadSrc ? downloadSrc : undefined;
    }
    return (
      <div
        ref={e => (this.container = e)}
        className={[
          style.videoContainer,
          style.posRel,
          fullScreen ? style.fullScreen : ''
        ].join(' ')}
        onMouseOver={this.showControls}
        onMouseOut={this.hideControls}
      >
        {showPlayButton &&
          !showControlsOnly && (
            <div className={style.play} onClick={this.togglePlayPause} />
          )}
        <Player
          ref={e => (this.videoPlayer = e)}
          src={primaryTracks[selectedTrack].src}
          secondarySrc={
            secondaryTracks && secondaryTracks[0] && secondaryTracks[0].src
          }
          updateMediaAttributes={this.updateMediaAttributes}
          onVideoLoaded={this.onVideoLoadedHandler}
          onVideoEnded={this.onVideoEndedHandler}
          onVideoPlayed={this.onVideoPlayedHandler}
          onRenderComplete={onRenderComplete}
          hidemedia={showControlsOnly}
          currentTime={currentTime}
          id={id}
          secondaryId={secondaryId}
        />

        <div
          className={[
            style.videoControls,
            controls ? style.showControls : style.hideControls
          ].join(' ')}
        >
          <VideoControls
            edit={edit}
            targetPlayerId={id}
            videoTracks={primaryTracks}
            downloadSrc={downloadSrcLink}
            selectedTrack={selectedTrack}
            onSelectTrack={this.onSelectTrack}
            onVideoPlayed={this.onVideoPlayedHandler}
            onSeekHandler={this.onSeekHandler}
            volumeUpdateHandler={this.volumeUpdateHandler}
            videoPauseAtTimeHandler={this.videoPauseAtTimeHandler}
            controlOptions={controlOptions}
            namespace={namespace}
            currentTime={currentTime}
          />
        </div>
      </div>
    );
  };
}

/* eslint-disable */

function mapStateToProps(state) {
  return {
    fullScreen: state.media.fullScreen,
    currentTime: state.media.currentTime
  };
}

export default connect(
  mapStateToProps,
  actions
)(VideoPlayerContainer);
