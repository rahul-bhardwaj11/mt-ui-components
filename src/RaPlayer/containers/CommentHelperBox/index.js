import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './index.scss';
import { actions } from '../../actions';
import { toHHMMSS } from '../../utils/core';
import { connect } from '../../utils/providerHelper';
import EmojiPicker from '../../components/EmojiPicker';

function BoxContent({
  timestampReadable,
  commentHelperBoxClickHandler,
  emojiOnSelectHandler
}) {
  return (
    <div className={style.chBoxContent}>
      <div
        className={style.chBoxContentInfo}
        onClick={commentHelperBoxClickHandler}
      >
        <span className={style.plusIcon}>+</span> Add Comments @{
          timestampReadable
        }
      </div>
      <div className={style.chBoxControls}>
        <EmojiPicker onSelect={emojiOnSelectHandler} />
      </div>
      <div className={style.clear} />
    </div>
  );
}
BoxContent.propTypes = {
  commentHelperBoxClickHandler: PropTypes.func.isRequired,
  timestampReadable: PropTypes.string,
  emojiOnSelectHandler: PropTypes.func
};

class CommentHelperBox extends Component {
  static propTypes = {
    BoxContentComp: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    targetPlayerId: PropTypes.string,
    xPos: PropTypes.number,
    time: PropTypes.number,
    downArrowXPos: PropTypes.number,
    hideCommentBox: PropTypes.func,
    showCommentBox: PropTypes.func,
    hideCommentHelperBox: PropTypes.func,
    onClickHandler: PropTypes.func,
    postComment: PropTypes.func,
    videoWidth: PropTypes.number
  };

  static defaultProps = {
    BoxContentComp: BoxContent
  };

  commentHelperBoxClickHandler = () => {
    /*
			300px: width of comment box
			8px: default left for down arrow
		*/

    let { xPos, time, downArrowXPos } = this.props;
    let clientWidth = this.props.videoWidth - 20;
    let _xPos = xPos;
    let availableWindow = _xPos + 300,
      upperXLimit = clientWidth,
      _downArrowXPos = 8;

    _xPos -= 4;
    if (availableWindow > upperXLimit) {
      _xPos = clientWidth - 300;
      _downArrowXPos = xPos + downArrowXPos - _xPos - 6;
    }

    _downArrowXPos = _downArrowXPos < 8 ? 8 : _downArrowXPos;
    _downArrowXPos = _downArrowXPos > 274 ? 274 : _downArrowXPos;

    this.props.hideCommentBox();
    this.props.showCommentBox({
      xPos: _xPos,
      time: time,
      downArrowXPos: _downArrowXPos
    });
    this.props.hideCommentHelperBox();
    if (typeof this.props.onClickHandler === 'function') {
      this.props.onClickHandler(time);
    }
  };

  emojiOnSelectHandler = selectedEmoji => {
    this.props.postComment({
      time: this.props.time,
      text: selectedEmoji
    });
  };

  render() {
    const { xPos, time, downArrowXPos, BoxContentComp } = this.props;
    let divStyle = {
        left: xPos
      },
      timestampReadable = time ? toHHMMSS(time) : '00:00',
      downArrowStyle;
    if (downArrowXPos) {
      downArrowStyle = {
        left: downArrowXPos + 'px'
      };
    }
    return (
      <div style={divStyle} className={style.chBox}>
        <div className={style.downArrow} style={downArrowStyle} />
        <BoxContentComp
          emojiOnSelectHandler={this.emojiOnSelectHandler}
          timestampReadable={timestampReadable}
          commentHelperBoxClickHandler={this.commentHelperBoxClickHandler}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    xPos: state.commentHelperBox.data.xPos,
    time: state.commentHelperBox.data.time,
    downArrowXPos: state.commentHelperBox.data.downArrowXPos,
    videoWidth: state.media.videoWidth,
    postComment: state.postComment,
    BoxContentComp: state.BoxContentComp
  };
}

export default connect(
  mapStateToProps,
  actions
)(CommentHelperBox);
