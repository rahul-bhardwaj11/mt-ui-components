import React, { Component } from 'react';
import style from './index.scss';
import { actions } from '../../actions';
import { toHHMMSS, getColorMap } from '../../utils/core';
import { connect } from '../../utils/providerHelper';
import Modal from '../../../Modal';
import {
  STRING_DELETED_COMMENT_CANT_BE_RESTORED,
  STRING_DELETE,
  STRING_CANCEL,
  MAX_CHAR_LIMIT_COMMENT
} from '../../config/constants';
import PropTypes from 'prop-types';

class CommentBox extends Component {
  static propTypes = {
    showCommentBox: PropTypes.func,
    hideCommentBox: PropTypes.func,
    readOnly: PropTypes.bool,
    deleteComment: PropTypes.func,
    id: PropTypes.string,
    editComment: PropTypes.func,
    time: PropTypes.number,
    postComment: PropTypes.func,
    xPos: PropTypes.number,
    commentText: PropTypes.string,
    downArrowXPos: PropTypes.number,
    edit: PropTypes.bool,
    showError: PropTypes.bool,
    author: PropTypes.object,
    commentBoxRenderer: PropTypes.func
  };
  static getDerivedStateFromProps(props, state) {
    if (props.showError && state.disableSaveButton) {
      clearTimeout(state.timer);
      state.disableSaveButton = false;
      state.timer = setTimeout(() => {
        props.hideCommentBoxError();
      }, 3000);
      return state;
    }
    return null;
  }
  constructor() {
    super();
    this.textAreaChangeHandler = this.textAreaChangeHandler.bind(this);
    this.editClickHandler = this.editClickHandler.bind(this);
    this.deleteClickHandler = this.deleteClickHandler.bind(this);
    this.closeSelf = this.closeSelf.bind(this);
    this.emojiOnSelectHandler = this.emojiOnSelectHandler.bind(this);
    this.postCommentHandler = this.postCommentHandler.bind(this);
    let intialState = {
      disableSaveButton: true
    };
    this.state = intialState;
  }

  ref = node => {
    this.commentTextArea = node;
  };

  emojiOnSelectHandler(selectedEmoji) {
    if (this.commentTextArea.value.length < MAX_CHAR_LIMIT_COMMENT) {
      let text = this.commentTextArea.value + selectedEmoji;
      this.props.showCommentBox({
        text
      });
      this.setState({
        disableSaveButton: false
      });
      this.commentTextArea.focus();
    }
  }

  textAreaChangeHandler(e) {
    let text = e.target.value;
    text = text && text.trim();
    this.setState({
      disableSaveButton: text ? false : true
    });
    this.props.showCommentBox({
      text: e.target.value
    });
  }

  closeSelf() {
    this.props.hideCommentBox();
  }

  editClickHandler() {
    this.props.showCommentBox({
      readOnly: false
    });
    this.setState({
      disableSaveButton: false
    });
    this.commentTextArea.addEventListener('keydown', this.autosize.bind(this));
    this.commentTextArea.focus();
  }

  componentDidMount() {
    this.autosize();
    if (!this.props.readOnly) {
      this.commentTextArea.addEventListener(
        'keydown',
        this.autosize.bind(this)
      );
      this.commentTextArea.focus();
    }
  }

  deleteClickHandler(event) {
    event.stopPropagation();
    let props = this.props;
    Modal.confirm({
      showFooter: true,
      title: STRING_DELETED_COMMENT_CANT_BE_RESTORED,
      okText: STRING_DELETE,
      cancelText: STRING_CANCEL,
      closable: true,
      onOk: () => {
        this.props.deleteComment({
          id: props.id
        });
        this.props.hideCommentBox();
      }
    });
  }

  postCommentHandler() {
    if (this.state.disableSaveButton) {
      return;
    }
    let text = this.commentTextArea.value && this.commentTextArea.value.trim();
    if (!text) {
      return;
    }
    this.setState({
      disableSaveButton: true
    });
    if (this.props.id) {
      this.props.editComment({
        commentObj: {
          id: this.props.id,
          text: text,
          time: this.props.time
        },
        isCommentBox: true,
        author: this.props.author
      });
    } else {
      this.props.postComment({
        commentObj: {
          text,
          time: this.props.time
        }
      });
    }
    this.closeSelf();
  }

  componentWillUnmount() {
    clearTimeout(this.state.timer);
    clearTimeout(this.autoSizeTimer);
    this.commentTextArea.removeEventListener('keydown', this.autosize);
  }

  autosize() {
    let el = this.commentTextArea;
    if (!el) {
      return;
    }
    this.autoSizeTimer = setTimeout(function() {
      el.style.cssText = 'height:auto; padding:0';
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0);
  }

  commentDidUpdate() {
    this.autosize();
  }

  render() {
    const {
      xPos,
      time,
      commentText,
      readOnly,
      downArrowXPos,
      edit,
      showError,
      author,
      commentBoxRenderer
    } = this.props;
    const { disableSaveButton } = this.state;
    let divStyle = {
        left: xPos
      },
      timestampReadable = toHHMMSS(time),
      downArrowStyle,
      timeStampColor;
    var opts = {};
    if (readOnly) {
      opts['readOnly'] = 'readOnly';
    }
    if (downArrowXPos) {
      downArrowStyle = {
        left: downArrowXPos + 'px'
      };
    }
    let colorMap = getColorMap();
    if (author && author.id && colorMap[author.id]) {
      timeStampColor = {
        backgroundColor: colorMap[author.id]
      };
    }

    return (
      <div style={divStyle} className={style.acBox}>
        {commentBoxRenderer({
          id: this.props.id,
          commentText,
          edit,
          showError,
          disableSaveButton,
          timestampReadable,
          downArrowStyle,
          timeStampColor,
          readOnly,
          textAreaOpts: opts,
          editClickHandler: this.editClickHandler,
          deleteClickHandler: this.deleteClickHandler,
          textAreaChangeHandler: this.textAreaChangeHandler,
          emojiOnSelectHandler: this.emojiOnSelectHandler,
          postCommentHandler: this.postCommentHandler,
          closeSelf: this.closeSelf,
          ref: this.ref
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    xPos: state.commentBox.data.xPos,
    time: state.commentBox.data.time,
    author: state.commentBox.data.author,
    commentText: state.commentBox.data.text,
    readOnly: state.commentBox.data.readOnly,
    id: state.commentBox.data.id,
    downArrowXPos: state.commentBox.data.downArrowXPos,
    showError: state.commentBox.error,
    postComment: state.postComment,
    editComment: state.editComment,
    deleteComment: state.deleteComment,
    commentBoxRenderer: state.commentBoxRenderer
  };
}

export default connect(
  mapStateToProps,
  actions
)(CommentBox);
