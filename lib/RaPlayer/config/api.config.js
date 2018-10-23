'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var apiUrls = {
  postComment: function postComment(_ref) {
    var cname = _ref.cname,
        subjectId = _ref.subjectId,
        entityId = _ref.entityId,
        learnerId = _ref.learnerId;

    return {
      url: '/' + cname + '/social/mission?submissionId=' + subjectId + '&entityId=' + entityId + '&learnerId=' + learnerId
    };
  },
  getComments: function getComments(_ref2) {
    var socialId = _ref2.socialId,
        cname = _ref2.cname;

    var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        authors = _ref3.authors;

    var authorsList = [];
    if (authors && authors.length) {
      authorsList = authors.map(function (author) {
        return author.id;
      });
    }
    var url = '/' + cname + '/social/' + socialId;
    if (authorsList.length) {
      url += '?authors=' + authorsList.join(',');
    }
    return { url: url };
  },
  editComment: function editComment(_ref4) {
    var socialId = _ref4.socialId,
        cname = _ref4.cname;

    return { url: '/' + cname + '/social/' + socialId };
  },
  deleteComment: function deleteComment(_ref5) {
    var socialId = _ref5.socialId,
        cname = _ref5.cname;

    return { url: '/' + cname + '/social/' + socialId };
  }
};

exports.default = apiUrls;