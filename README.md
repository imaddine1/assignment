<h2> SETUP </h2>
<table>
  <li>
    make sure mongodb is running.
  </li>
  <li>
    replace string either by using cloud or localhost: MongooseModule.forRoot("mongodb://localhost/books-data") in fetch-server > src > app.module.ts
  </li>
  <li>
    access to third-pary-api run > npm run start
  </li>
  <li>
    access to fetch-server run > npm run start
  </li>
  <li>
    access to front-end run > npm run start
  </li>
  <li>
    enter http://localhost:3000
  </li>
</table>



<h1> the approach that i came up with </h1>

--- image here ---


<p>The first part I completed involved asking myself how the servers would communicate. At regular intervals, I brainstormed ideas for implementation. As of now, this is my latest and most refined idea for implementation</p>

<p>What I did exactly was set up the front-end to make requests to the 'fetch-data' server every 10 seconds, which we can reduce to 5 seconds. This way, users won't feel the delay. This approach was inspired by real estate websites that refresh a component with new data every 5 seconds from an external API. Initially, I considered using WebSockets, but since all the external APIs use HTTP requests, it would not be ideal to implement. Perhaps there is another solution to this problem, but this is my final result</p>

<h3>test update data on front </h3>
<p>Open the third-party-api folder, edit the file book-big.json, and you will see the updated data reflected in the frontend and saved on database</p>.

<h3>what should  be in real project</h3>
<p> env to strore credentials sercret </p>
<p> don't publish server with dev  mode </p>
<p> Use docker for containerization your app</p>







