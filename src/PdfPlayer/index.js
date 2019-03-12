import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import ConfirmBox from '../ConfirmBox';
import Tag from '../Tag';

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
    title: PropTypes.string
  };

  static defaultProps = {
    style: { width: 650, height: 378 }
  };

  state = {
    edit: false,
    title: this.props.title
  };

  componentDidMount() {
    const { src, uuid } = this.props;
    let staticUrl = uuid + '&width=547&height=401';
    staticUrl = staticUrl.replace('crocodoc', 'pdfViewer');

    let form = document.createElement('form');
    form.action = staticUrl;
    form.target = uuid;
    form.method = 'post';
    form.style.display = 'none';

    let input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'pdf';
    input.value = src;
    form.appendChild(input);

    let iframe = document.createElement('iframe');
    this.iframe = iframe;
    iframe.name = uuid;
    iframe.scrolling = 'no';
    iframe.style.position = 'absolute';
    iframe.style.left = '0px';
    iframe.style.border = '0px';
    iframe.style.width = '100%';
    iframe.style.height = '100%';

    this.ref.appendChild(iframe);
    this.ref.appendChild(form);
    form.submit();

    if (!window.addEventListener) {
      window.attachEvent('onmessage', this.pageChanged);
    } else {
      window.addEventListener('message', this.pageChanged, false);
    }
  }

  componentWillUnmount() {
    if (!window.removeEventListener) {
      window.detachEvent('onmessage', this.pageChanged);
    } else {
      window.removeEventListener('message', this.pageChanged, false);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.nextPage != this.props.nextPage) {
      this.goToPage(nextProps.nextPage);
    }
  }

  pageChanged = event => {
    const { onPageChange } = this.props;
    if (!event.data || typeof event.data !== 'string') return;
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
    return edit ? (
      <div>
        <Input
          defaultValue={title}
          onChange={(e, value) => {
            this.newTitle = value;
          }}
        />
        <Tag onClick={this.handleTitleChange}>save</Tag>
        <Tag onClick={() => this.setState({ edit: false })}>cancel</Tag>
      </div>
    ) : (
      <div onClick={this.activeEditMode}>{title}</div>
    );
  };

  renderReplaceDiv = () => {
    const { onRemove } = this.props;
    return (
      <ConfirmBox
        onConfirm={() => {
          onRemove && onRemove();
        }}
      >
        Replace
      </ConfirmBox>
    );
  };

  render() {
    const { style, isEditMode } = this.props;
    return (
      <React.Fragment>
        {isEditMode && (
          <div>
            {this.renderEditTitleDiv()}
            {this.renderReplaceDiv()}
          </div>
        )}
        <div
          ref={e => (this.ref = e)}
          style={{ minHeight: 'inherit', position: 'relative', ...style }}
        />
      </React.Fragment>
    );
  }
}
export default PdfPlayer;
