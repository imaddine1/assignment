Tchnical Assessment

build a small web application that retrieves data from a third-party API and synchronizes
it with a local database.
Your goal is to fetch this data periodically, categorize the books, and update the local
database accordingly, providing real-time progress updates to users.

Requirements:
1. Create a web application using JavaScript (Nest.js for backend and Next.js for)
2. Implement functionality to fetch data from the third-party API
3. Design a local database (MONGODB) schema to store the fetched book data

**this part isn't clear i am making some assumption to implement it**

4. Implement real-time synchronization of data from the API with the local database,
providing progress updates in the interface
5. Display the synchronized data on a web page

Remark:
create a microservice architecture with one service responsible for retrieving data from
the third-party API and save it, and another service acting as the third-party API,
reading data from a JSON file and return it