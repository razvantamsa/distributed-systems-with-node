# The Event Loop
The event loop has several phases to it.
<br><br>

## Poll
The poll phase executes I/O-related callbacks. \
This is the phase that application code is most likely to execute in. \
When your main application code starts running, it runs in this phase.

## Check
In this phase, callbacks that are triggered via setImmediate() are executed.

## Close
This phase executes callbacks that are triggered via EventEmitter close events. \
For example, when a net.Server TCP server closes, it emits a close event that runs a callback in this phase.

## Timers
Callbacks scheduled using setTimeout() and setInterval() are executed in this phase.

## Pending
Special system events are run in this phase, like when a net.Socket TCP socket throws an ECONNREFUSED error.

<br>

To make things a little more complicated, there are also two special microtask queues that can have callbacks added to them while a phase is running.
The first microtask queue handles callbacks that have been registered using process.nextTick(). THe second microtask queue handles promises that reject or resolve. Callbacks in the microtask queues take priority over callbacks in the phase's normal queue, and callbacks in the next tick microtask queue run before callbacks in the promsie microtask queue.

When the application starts running, the event loop is also started and the phases are handled one at a time. Node.js adds callbacks to different queues as appropriate while the application runs. When the event loop gets to a phase, it will run all the callbacks in that phase's queue. Once all the callbacks in a given phase are exhausted, the event loop then moves on to the next phase. If the application runs out of things to do but is waiting for I/O operations to complete, it'll hang out in the poll phase.