'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createDefaultLogger;

var _common = require('./common');

let SESSIONCOUNTER = 0;

function createDefaultLogger(username, hostname) {
  const session = ++SESSIONCOUNTER;
  let log = (level, messages) => {
    messages = messages.map(msg => typeof msg === 'function' ? msg() : msg);
    const date = new Date().toISOString();
    let logMessage = `[${date}][${session}][${username}][${hostname}] ${messages.join(' ')}`;
    if (level === _common.LOG_LEVEL_DEBUG) {
      console.log('[DEBUG]' + logMessage);
    } else if (level === _common.LOG_LEVEL_INFO) {
      console.info('[INFO]' + logMessage);
    } else if (level === _common.LOG_LEVEL_WARN) {
      console.warn('[WARN]' + logMessage);
    } else if (level === _common.LOG_LEVEL_ERROR) {
      console.error('[ERROR]' + logMessage);
    }
  };

  return {
    debug: msgs => log(_common.LOG_LEVEL_DEBUG, msgs),
    info: msgs => log(_common.LOG_LEVEL_INFO, msgs),
    warn: msgs => log(_common.LOG_LEVEL_WARN, msgs),
    error: msgs => log(_common.LOG_LEVEL_ERROR, msgs)
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2dnZXIuanMiXSwibmFtZXMiOlsiY3JlYXRlRGVmYXVsdExvZ2dlciIsIlNFU1NJT05DT1VOVEVSIiwidXNlcm5hbWUiLCJob3N0bmFtZSIsInNlc3Npb24iLCJsb2ciLCJsZXZlbCIsIm1lc3NhZ2VzIiwibWFwIiwibXNnIiwiZGF0ZSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImxvZ01lc3NhZ2UiLCJqb2luIiwiY29uc29sZSIsImluZm8iLCJ3YXJuIiwiZXJyb3IiLCJkZWJ1ZyIsIm1zZ3MiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQVN3QkEsbUI7O0FBVHhCOztBQU9BLElBQUlDLGlCQUFpQixDQUFyQjs7QUFFZSxTQUFTRCxtQkFBVCxDQUE4QkUsUUFBOUIsRUFBd0NDLFFBQXhDLEVBQWtEO0FBQy9ELFFBQU1DLFVBQVUsRUFBRUgsY0FBbEI7QUFDQSxNQUFJSSxNQUFNLENBQUNDLEtBQUQsRUFBUUMsUUFBUixLQUFxQjtBQUM3QkEsZUFBV0EsU0FBU0MsR0FBVCxDQUFhQyxPQUFPLE9BQU9BLEdBQVAsS0FBZSxVQUFmLEdBQTRCQSxLQUE1QixHQUFvQ0EsR0FBeEQsQ0FBWDtBQUNBLFVBQU1DLE9BQU8sSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBQWI7QUFDQSxRQUFJQyxhQUFjLElBQUdILElBQUssS0FBSU4sT0FBUSxLQUFJRixRQUFTLEtBQUlDLFFBQVMsS0FBSUksU0FBU08sSUFBVCxDQUFjLEdBQWQsQ0FBbUIsRUFBdkY7QUFDQSxRQUFJUixpQ0FBSixFQUErQjtBQUM3QlMsY0FBUVYsR0FBUixDQUFZLFlBQVlRLFVBQXhCO0FBQ0QsS0FGRCxNQUVPLElBQUlQLGdDQUFKLEVBQThCO0FBQ25DUyxjQUFRQyxJQUFSLENBQWEsV0FBV0gsVUFBeEI7QUFDRCxLQUZNLE1BRUEsSUFBSVAsZ0NBQUosRUFBOEI7QUFDbkNTLGNBQVFFLElBQVIsQ0FBYSxXQUFXSixVQUF4QjtBQUNELEtBRk0sTUFFQSxJQUFJUCxpQ0FBSixFQUErQjtBQUNwQ1MsY0FBUUcsS0FBUixDQUFjLFlBQVlMLFVBQTFCO0FBQ0Q7QUFDRixHQWJEOztBQWVBLFNBQU87QUFDTE0sV0FBT0MsUUFBUWYsNkJBQXFCZSxJQUFyQixDQURWO0FBRUxKLFVBQU1JLFFBQVFmLDRCQUFvQmUsSUFBcEIsQ0FGVDtBQUdMSCxVQUFNRyxRQUFRZiw0QkFBb0JlLElBQXBCLENBSFQ7QUFJTEYsV0FBT0UsUUFBUWYsNkJBQXFCZSxJQUFyQjtBQUpWLEdBQVA7QUFNRCIsImZpbGUiOiJsb2dnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBMT0dfTEVWRUxfRVJST1IsXG4gIExPR19MRVZFTF9XQVJOLFxuICBMT0dfTEVWRUxfSU5GTyxcbiAgTE9HX0xFVkVMX0RFQlVHXG59IGZyb20gJy4vY29tbW9uJ1xuXG5sZXQgU0VTU0lPTkNPVU5URVIgPSAwXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRMb2dnZXIgKHVzZXJuYW1lLCBob3N0bmFtZSkge1xuICBjb25zdCBzZXNzaW9uID0gKytTRVNTSU9OQ09VTlRFUlxuICBsZXQgbG9nID0gKGxldmVsLCBtZXNzYWdlcykgPT4ge1xuICAgIG1lc3NhZ2VzID0gbWVzc2FnZXMubWFwKG1zZyA9PiB0eXBlb2YgbXNnID09PSAnZnVuY3Rpb24nID8gbXNnKCkgOiBtc2cpXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgIGxldCBsb2dNZXNzYWdlID0gYFske2RhdGV9XVske3Nlc3Npb259XVske3VzZXJuYW1lfV1bJHtob3N0bmFtZX1dICR7bWVzc2FnZXMuam9pbignICcpfWBcbiAgICBpZiAobGV2ZWwgPT09IExPR19MRVZFTF9ERUJVRykge1xuICAgICAgY29uc29sZS5sb2coJ1tERUJVR10nICsgbG9nTWVzc2FnZSlcbiAgICB9IGVsc2UgaWYgKGxldmVsID09PSBMT0dfTEVWRUxfSU5GTykge1xuICAgICAgY29uc29sZS5pbmZvKCdbSU5GT10nICsgbG9nTWVzc2FnZSlcbiAgICB9IGVsc2UgaWYgKGxldmVsID09PSBMT0dfTEVWRUxfV0FSTikge1xuICAgICAgY29uc29sZS53YXJuKCdbV0FSTl0nICsgbG9nTWVzc2FnZSlcbiAgICB9IGVsc2UgaWYgKGxldmVsID09PSBMT0dfTEVWRUxfRVJST1IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tFUlJPUl0nICsgbG9nTWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGRlYnVnOiBtc2dzID0+IGxvZyhMT0dfTEVWRUxfREVCVUcsIG1zZ3MpLFxuICAgIGluZm86IG1zZ3MgPT4gbG9nKExPR19MRVZFTF9JTkZPLCBtc2dzKSxcbiAgICB3YXJuOiBtc2dzID0+IGxvZyhMT0dfTEVWRUxfV0FSTiwgbXNncyksXG4gICAgZXJyb3I6IG1zZ3MgPT4gbG9nKExPR19MRVZFTF9FUlJPUiwgbXNncylcbiAgfVxufVxuIl19