'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var commentModel = {
  read: function read(obj) {
    var parsedObject = {
      id: obj.id,
      cname: obj.cname,
      author: {
        id: obj.author.id,
        name: obj.author.name
      },
      createdTime: obj.createdTime
    };

    if (obj.text) {
      parsedObject.text = obj.text;
    }

    if (obj.time) {
      parsedObject.time = obj.time;
    }

    if (obj.contentList && obj.contentList.length) {
      obj.contentList.map(function (content) {
        if (content.type === 'TEXT') {
          parsedObject.text = content.text;
        }
      });
    }
    if (obj.reference && obj.reference.type === 'TIMELINE') {
      parsedObject.time = obj.reference.start;
    }

    return parsedObject;
  },
  write: function write(obj) {
    var payload = {
      cname: obj.cname,
      subjectId: obj.subjectId,
      type: 'COMMENT',
      author: {
        id: obj.author.id,
        name: obj.author.name
      },
      contents: [{
        text: obj.text,
        type: 'TEXT'
      }],
      reference: {
        type: 'TIMELINE',
        start: obj.time
      }
    };
    return payload;
  },
  sort: function sort(models) {
    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'time';

    return models.sort(function (a, b) {
      if (a[key] === b[key]) {
        return a.createdTime - b.createdTime;
      }
      return a[key] - b[key];
    });
  }
};

exports.default = commentModel;