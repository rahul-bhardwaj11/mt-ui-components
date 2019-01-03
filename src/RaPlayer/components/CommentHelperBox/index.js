import React from 'react';
import PropTypes from 'prop-types';
import EmojiPicker from '../EmojiPicker';

import style from './index.scss';

export default function CommentHelperBox({
  timestampReadable,
  commentHelperBoxClickHandler,
  emojiOnSelectHandler,
  downArrowStyle
}) {
  return (
    <React.Fragment>
      <div className={style.downArrow} style={downArrowStyle} />
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
    </React.Fragment>
  );
}
CommentHelperBox.propTypes = {
  commentHelperBoxClickHandler: PropTypes.func.isRequired,
  timestampReadable: PropTypes.string,
  emojiOnSelectHandler: PropTypes.func,
  downArrowStyle: PropTypes.object
};
