import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import ConfirmBox from '../ConfirmBox';
import Tag from '../Tag';
import Icon from '../Icon';
import MTPDFPlayer from './style';
import styled from 'styled-components';
const DEFAULT_STYLE = { width: 650, height: 'inherit' };

const Loader = styled.div`
  position: absolute;
  background-color: rgb(0, 0, 0);
  opacity: 0.5;
  color: white;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  right: 0;
  align-items: center;
  text-shadow: 1px 2px rgba(0, 0, 0, 0.5);
  &:before {
    content: 'Loading...';
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    text-align: center;
    font-size: 14px;
    font-weight: normal;
  }
`;

class PdfPlayer extends Component {
  static propTypes = {
    nextPage: PropTypes.number,
    src: PropTypes.string.isRequired,
    uuid: PropTypes.string.isRequired,
    onPageChange: PropTypes.func,
    isEditMode: PropTypes.bool,
    onRemove: PropTypes.func,
    onTitleEdit: PropTypes.func,
    style: PropTypes.object,
    title: PropTypes.string,
    deleteConfirmText: PropTypes.string,
    onLoaded: PropTypes.func
  };

  static defaultProps = {
    nextPage: 1,
    style: {},
    deleteConfirmText: 'Are you sure you want to delete this file ?',
    onLoaded: () => {}
  };

  state = {
    edit: false,
    title: this.props.title,
    loading: true
  };

  setRef = ref => {
    if (this.ref || !ref) {
      return;
    }

    this.ref = ref;
    const { src, uuid, isEditMode } = this.props;
    let staticUrl = uuid + '&width=547&height=401';
    staticUrl = staticUrl.replace('crocodoc', 'pdfViewer');
    const target = Math.random();
    let iframe = document.createElement('iframe');
    this.iframe = iframe;
    iframe.name = target;
    iframe.scrolling = 'no';
    iframe.style.width = '100%';
    iframe.style.height = isEditMode ? 'calc(100% - 48px)' : '100%';
    iframe.style.border = '0';
    iframe.style.position = 'absolute';
    iframe.style.left = '0';

    this.ref.appendChild(iframe);

    let form = document.createElement('form');
    form.action = staticUrl;
    form.target = target;
    form.method = 'post';
    form.style.display = 'none';

    let input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'pdf';
    input.value = src;
    form.appendChild(input);

    this.ref.appendChild(form);
    form.submit();

    if (!window.addEventListener) {
      window.attachEvent('onmessage', this.handleIncomingMessage);
    } else {
      window.addEventListener('message', this.handleIncomingMessage, false);
    }
  };

  componentWillUnmount() {
    if (!window.removeEventListener) {
      window.detachEvent('onmessage', this.handleIncomingMessage);
    } else {
      window.removeEventListener('message', this.handleIncomingMessage, false);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.nextPage != this.props.nextPage) {
      this.goToPage(nextProps.nextPage);
    }
    if (nextProps.isEditMode != this.props.isEditMode && this.iframe) {
      this.iframe.style.height = nextProps.isEditMode
        ? 'calc(100% - 48px)'
        : '100%';
    }
  }

  onLoaded = () => {
    this.props.onLoaded();
    this.setState({
      loading: false
    });
  };

  handleIncomingMessage = event => {
    const { onPageChange, nextPage } = this.props;
    if (!event.data || typeof event.data !== 'string') return;
    if (event.data === 'viewerinitialized') {
      this.onLoaded();
      setTimeout(() => {
        this.goToPage(nextPage);
      }, 500);
      return;
    }
    var data = event.data.split('.');
    if (data[0] == 'A') {
      const pageNumber = parseInt(data[1]);
      if (this.pageNumber !== pageNumber) {
        this.pageNumber = pageNumber;
        onPageChange && onPageChange(pageNumber);
      }
    }
  };

  goToPage = pageNumber => {
    this.iframe.contentWindow.postMessage('page.' + pageNumber, '*');
  };

  handleTitleChange = () => {
    const { onTitleEdit } = this.props;
    this.setState({ title: this.newTitle, edit: false });
    onTitleEdit && onTitleEdit(this.newTitle);
  };

  activeEditMode = () => {
    this.setState({ edit: true });
    this.newTitle = this.state.title;
  };

  renderEditTitleDiv = () => {
    const { edit, title } = this.state;
    return (
      <div className="editMode">
        {edit ? (
          <React.Fragment>
            <div className="inputBox">
              <Input
                className="inputTitle"
                defaultValue={title}
                onChange={(e, value) => {
                  this.newTitle = value;
                }}
              />
            </div>
            <div className="tagBox">
              <Tag
                className="saveTag"
                type="action"
                onClick={this.handleTitleChange}
              >
                Save
              </Tag>
              <Tag onClick={() => this.setState({ edit: false })}>Cancel</Tag>
            </div>
          </React.Fragment>
        ) : (
          <div className="titleText" onClick={this.activeEditMode}>
            {title}
          </div>
        )}
      </div>
    );
  };

  renderReplaceDiv = () => {
    const { onRemove, deleteConfirmText } = this.props;
    return (
      <ConfirmBox
        title={deleteConfirmText}
        placement="bottomRight"
        onConfirm={() => {
          onRemove && onRemove();
        }}
      >
        <Icon type="delete2" className="replaceModeIcon" />
      </ConfirmBox>
    );
  };

  render() {
    const { style, isEditMode } = this.props;
    const { loading } = this.state;
    const __style = {
      minHeight: 'inherit',
      position: 'relative',
      ...DEFAULT_STYLE,
      ...style
    };
    return (
      <MTPDFPlayer style={__style} innerRef={this.setRef}>
        {loading && <Loader />}
        {isEditMode && (
          <div className="uploaderHeader">
            {this.renderEditTitleDiv()}
            {this.renderReplaceDiv()}
          </div>
        )}
      </MTPDFPlayer>
    );
  }
}
export default PdfPlayer;
