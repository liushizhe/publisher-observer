var Event = (function(){
  let eventList = {}, on, trigger, remove;
  on = function(key, callback) {
    if (!eventList[key]) {
      eventList[key] = [];
    }
    eventList[key].push(callback);
  };

  trigger = function() {
    let key = [].shift.call(arguments);
    let cbs = eventList[key];

    if (!cbs || cbs.length === 0) {
      return false;
    }

    for (let i = 0, cb; cb = cbs[i++];) {
      cb.apply(this, arguments);
    }
  };

  remove = function(key, callback) {
    let cbs = eventList[key];

    if (!cbs) {
      return false;
    }

    if (!callback) {
      if (cbs) {
        cbs.length = 0;
      } else {
        let len = cbs.length;
        for (let i = len - 1; i >= 0; i--) {
          if (cbs[i] === callback) {
            cbs.splice(i, 1);
          }
        }
      }
    }
  };

  return {
    on,
    trigger,
    remove
  }

}());

module.exports = Event;