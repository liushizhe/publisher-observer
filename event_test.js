let event = require ('./event.js')

event.on('demo', function(data) {
  console.log(data)
})
event.on('demo', function(data) {
  console.log('2', data)
})

event.trigger('demo', 'abcd');
event.trigger('demo', '1234');
event.remove('demo');
event.trigger('demo', 'abcd');
