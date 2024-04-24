
<h1> the approach that i came up with </h1>

--- image here ---



<p>The first part I completed involved asking myself how the servers would communicate. At regular intervals, I brainstormed ideas for implementation. As of now, this is my latest and most refined idea for implementation</p>

<p>What I did exactly was set up the front-end to make requests to the 'fetch-data' server every 10 seconds, which we can reduce to 5 seconds. This way, users won't feel the delay. This approach was inspired by real estate websites that refresh a component with new data every 5 seconds from an external API. Initially, I considered using WebSockets, but since all the external APIs use HTTP requests, it would not be ideal to implement. Perhaps there is another solution to this problem, but this is my final result</p>



