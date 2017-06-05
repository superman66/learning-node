const EventEmitter = require('events').EventEmitter;
const event = new EventEmitter();

event.on('test_event', () => {
    console.log('test_event trigger');
})

setTimeout(() => {
    event.emit('test_event')
}, 1000)