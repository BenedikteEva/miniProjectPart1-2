# miniProjectPart1 BenedikteEva

examples:
1. testing a REST-API using Node/JavaScript + relevant packages (mocha and chai) se test mappen har kun en test af restapen so far men den passer
2. the Express concept; middleware. app.get('/', function (req,res,next)) det der sker mellem request og response i en http metode (get,put, post, delete osv.)
kan være mange forskellige funktioner tjek lige mine api metoder og tilhørende tests. 
3. Explain, using relevant examples, how to implement sessions, and the legal implications of doing this.
promise pending har ikke brugt sessions her mn kommer vel med part 2 og 3
4. Explain (conceptually) how you would handle sessions if you run your app in clusters to solve some of problems related to deployment.
promise pending
5. Compare the express strategy toward (server side) templating with the one you used with Java on second semester. kort fortalt ejs==jsp (ikke ===)
6. Demonstrate a simple Server Side Rendering example using a technology of your own choice. https://www.youtube.com/watch?v=GQzn7XRdzxY
Server Side Rendering (SSR) is the process of taking a client-side JavaScript Framework website and rendering it to static HTML and CSS on the server. Why is this important? We all want fast loading websites and SSR is a tool to help you get your website rendered faster. SSR flips the process of rendering a JavaScript framework app and when done right can give your users a better page load. (need to catch up here)
7. Explain, using relevant examples, your strategy for implementing a REST-API with Node/Express and show how you can "test" all the four CRUD operations programmatically using for example the Request package. Pattern: - database på mongodb - facade metoder til at lave crud metoder - httpmetoder på endpoints ('./routes/api) - response ('./views/forskellige endpoints) - mocha test metoder til at teste endpoints (indtil videre har jeg kun 1)
8. Explain, using relevant examples, about testing JavaScript code, relevant packages (Mocha etc.) and how to test asynchronous code.
9. Explain, using relevant examples, different ways to mock out databases, HTTP-request etc. (testdatabase, nock)

NoSQL, MongoDB and Mongoose 

These two topics will be introduced in period-3
10. Explain about indexes in MongoDB, how to create them, and demonstrate how you have used them.
Explain, using your own code examples, how you have used some of MongoDB's "special" indexes like TTL and 2dsphere 2dsphere bliver brugt i position schemaet under models ?
11. Demonstrate, using a REST-API you have designed, how to perform all CRUD operations on a MongoDB 
12. Explain the benefits from using Mongoose, and demonstrate, using your own code, an example involving all CRUD operations
13. Explain the “6 Rules of Thumb: Your Guide Through the Rainbow” as to how and when you would use normalization vs. denormalization.
14. Demonstrate, using your own code-samples, decisions you have made regarding → normalization vs denormalization - her har vi ikke selv taget mange beslutninger men jeg har min react to do list app hvor jeg bruger mongodb til at teste mine levels of appreciation og react native local mongo db til todos og projects
15. Explain, using a relevant example, a full JavaScript backend including relevant test cases to test the REST-API (not on the production database)




Explainations in general:
Why would you consider a Scripting Language as JavaScript as your Backend Platform?
Explain Pros & Cons in using Node.js + Express to implement your Backend compared to a strategy using for example Java/JAX-RS/Tomcat
Node.js uses a Single Threaded Non-blocking strategy to handle asynchronous task. Explain strategies to implement a Node.js based server architecture that still could take advantage of a multi-core Server.
Explain briefly how to deploy a Node/Express application including how to solve the following deployment problems:
Ensure that you Node-process restarts after a (potential) exception that closed the application
Ensure that you Node-process restarts after a server (Ubuntu) restart
Ensure that you can take advantage of a multi-core system
Ensure that you can run “many” node-applications on a single droplet on the same port (80)
Explain the difference between “Developer outputs” and application logging. What’s wrong with console.log(..) statements in our backend-code, 
Explain, generally, what is meant by a NoSQL database.
Explain Pros & Cons in using a NoSQL database like MongoDB as your data store, compared to a traditional Relational SQL Database like MySQL.
Explain reasons to add a layer like Mongoose, on top on of a schema-less database like MongoDB



function HaventFinishedRestEndPointsYet (){

    let workHard= true;
    const result;
    if(workHard){
       return  result= 'done with part1'; 
    }else{
        return result='not done, work in my vacation.argh';
    })

.then (I will create an overview of where to find which kind of examples for the learning goals)
.then (i will answer some of the questions asked in learning goals that do not require('./examples'))
.then (i will take a break)
.then(test my endpoints (kind of difficult without  a rear mirror))
.then( make my other homework)
.catch (myBreath){
    alert('phew')
}

}
$node readme 

promise '<'pending'>'

console.log(https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai)