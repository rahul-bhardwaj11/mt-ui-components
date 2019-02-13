import outlookCalendarSvg from './assests/images/outlookCalendar.svg';
import googleCalendar from './assests/images/googleCalendar.svg';
import keywordsFull from './assests/images/keywordsFull.svg';
import textConditionFull from './assests/images/textConditionFull.svg';
import keywordsFullActive from './assests/images/keywordsFullActive.svg';
import textConditionFullActive from './assests/images/textConditionFullActive.svg';

export default {
  outlookCalendar: ({ width = 30, height = 30 }) => ({
    background: `url(${outlookCalendarSvg})  no-repeat 0 0 / contain transparent`,
    width: width,
    height: height
  }),
  googleCalendar: ({ width = 30, height = 30 }) => ({
    background: `url(${googleCalendar})  no-repeat 0 0 / contain transparent`,
    width: width,
    height: height
  }),
  keywordsFull: ({ width = 30, height = 30 }) => ({
    background: `url(${keywordsFull})  no-repeat 0 0 / contain transparent`,
    width: width,
    height: height
  }),
  textConditionFull: ({ width = 30, height = 30 }) => ({
    background: `url(${textConditionFull})  no-repeat 0 0 / contain transparent`,
    width: width,
    height: height
  }),
  keywordsFullActive: ({ width = 30, height = 30 }) => ({
    background: `url(${keywordsFullActive})  no-repeat 0 0 / contain transparent`,
    width: width,
    height: height
  }),
  textConditionFullActive: ({ width = 30, height = 30 }) => ({
    background: `url(${textConditionFullActive})  no-repeat 0 0 / contain transparent`,
    width: width,
    height: height
  })
};
