## Periode 2 - Learning Goals
### Why would you consider a Scripting Language as JavaScript as your Backend Platform?
Samme sprog på front og backend.  
Speed og performance.  
Skaler let.  

### Explain Pros & Cons in using Node.js + Express to implement your Backend compared to a strategy using, for example, Java/JAX-RS/Tomcat
Node simpel build process i forhold til java.  
Node er hurtigere end java.  
Node er ikke type stærkt. Det er java.  
Node ikke god til tunge opgaver(cpu krævende). 

Java har tråde. Tråd dør ved error i Node chrasher appen.

### Node.js uses a Single Threaded Non-blocking strategy to handle asynchronous task. Explain strategies to implement a Node.js based server architecture that still could take advantage of a multi-core Server.
Det er muligt at skaler Node op til en multi-core server, da der kan køre en instans på hver kerne.  
Det kan gøres ved hjælp af det modul, der hedder clustering.  

### Explain briefly how to deploy a Node/Express application including how to solve the following deployment problems:
##### Deployment
Installer Node på serveren.  
Installer github, og klon din Node applikation.  
Gør app.js executable, og start din applikation.  

#### Ensure that you Node-process restarts after a (potential) exception that closed the application
#### Ensure that you Node-process restarts after a server (Ubuntu) restart
Installer pm2 - En process manager, der kan administrer Node applikationer, og bruges til at køre programmer i baggrunden som en service.  
pm2 start app.js  
pm2 startup systemd - Generer et start up script. Systemd er en linux system manager.  

#### Ensure that you can take advantage of a multi-core system
Brug cluster modulet.  
Der findes også cluster-service eller node-pm.  
I pm2 kan du slå cluster mode til.  


#### Ensure that you can run “many” node-applications on a single droplet on the same port (80)
Brug en load balancer til at fordele trafikken mellem dine instancer f.eks. nginx.  
Brug in-memory data-store som redis til sessioner.  

#### Explain the difference between “Developer outputs” and application logging. What’s wrong with console.log(..) statements in our backend-code 
##### Developer outputs
Det er ustrukturet, og er ikke noget som kan vedligeholdes. Det kan give en ide om, hvordan systemet er bygget op til folk som ikke har brug for den viden.  

Det er vigtigt at ændre debugging til production mode når man skal deploye, så man ikke kommer til at give en hacker værdifuld viden om systemet.  

##### Application logging
Log systemet f.eks. performance, error messages, login forsøg, system filer der ændre sig ect til specifikke filer og sorg for at give admin besked(response) når noget er kritisk.  

---
### 1. testing a REST-API using Node/JavaScript + relevant packages (mocha and chai) 
##### Mocha
En describe() blok giver dig mulighed for at gruppere dine test.  
it() blok sætter testen op med kode.  
done() er en callback, der kan bruges med it(). Så ved Mocha at det er en asynkron metode at, og den skal vente.  
God til integrations og unit test.  

##### Chai
Er et assertion bibliotek til test i node.  
expect() sættes sammen med getters som to.be.equal ect.  

Se test mappen i backenden. https://github.com/BenedikteEva/miniProjectPart1-2/tree/master/test  

--- 

### 2. the Express concept; middleware. 
Det der sker mellem request og responset.  
Middleware udføres før route handleren bliver kaldt.  
Modtager request og response objektet.
Rækkefølgen er vigtig ved middleware.  

Middleware funktioner kan være logging, authentication ect.  

Kan også bruges i route handleren.  

var app = express()  
app.use(myMiddleware)  

* * *  

app.get('/', function (req,res,next))  

Det der sker mellem request og responset i en http metode (get,put, post, delete osv.).  
Kan være mange forskellige funktioner tjek mine api metoder og tilhørende tests.  

##### Se app.js i backenden.
https://github.com/BenedikteEva/miniProjectPart1-2/blob/master/app.js  

### 3. Explain, using relevant examples, how to implement sessions, and the legal implications of doing this.
Har ikke brugt sessions her mn kommer vel med part 2 og 3  

### 4. Explain (conceptually) how you would handle sessions if you run your app in clusters to solve some of problems related to deployment.
Med in-memory datastore som redis, så man ikke mester sin session, hvis en instance går ned.  
Da state er lokal for, hver instans er det ikke muligt at dele data mellem instancer.  
Man kan bruge session affinity(sticky session).  

### 5. Compare the express strategy toward (server side) templating with the one you used with Java on second semester. 
kort fortalt ejs==jsp (ikke ===)

### 6. Demonstrate a simple Server Side Rendering example using a technology of your own choice. 
route -view
jeg har brugt ejs sider. Ejs er en server side rendering template engine

### 7. Explain, using relevant examples, your strategy for implementing a REST-API with Node/Express and show how you can "test" all the four CRUD operations programmatically using for example the Request package. 
Database på mongodb
##### Se api.js i routes
endpoints ('./routes/api).  
facade metoder til at lave crud metoder.  
response ('./views/forskellige endpoints).  

mocha test metoder til at teste endpoints

### 8. Explain, using relevant examples, about testing JavaScript code, relevant packages (Mocha etc.) and how to test asynchronous code.
Se test mappen i backenden. https://github.com/BenedikteEva/miniProjectPart1-2/tree/master/test  

### 9. Explain, using relevant examples, different ways to mock out databases, HTTP-request etc. 
Testdatabase.  
Nock.  

### NoSQL, MongoDB and Mongoose 
These two topics will be introduced in period-3

### 10. Explain about indexes in MongoDB, how to create them, and demonstrate how you have used them.

### Explain, using your own code examples, how you have used some of MongoDB's "special" indexes like TTL and 2dsphere 
2dsphere bliver brugt i position schemaet under models 

### 11. Demonstrate, using a REST-API you have designed, how to perform all CRUD operations on a MongoDB 
se api.js i routes og api facade.  

### 12. Explain the benefits from using Mongoose, and demonstrate, using your own code, an example involving all CRUD operations

### 13. Explain the “6 Rules of Thumb: Your Guide Through the Rainbow” as to how and when you would use normalization vs. denormalization.

### 14. Demonstrate, using your own code-samples, decisions you have made regarding → normalization vs denormalization 
Her har vi ikke selv taget mange beslutninger men jeg har min react to do list app hvor jeg bruger mongodb til at teste mine levels of appreciation og react native local mongo db til todos og projects

### 15. Explain, using a relevant example, a full JavaScript backend including relevant test cases to test the REST-API (not on the production database)
tjek lige forhåndenværende project ud ;-)

### Explainations in general:
### Why would you consider a Scripting Language as JavaScript as your Backend Platform?

### Explain Pros & Cons in using Node.js + Express to implement your Backend compared to a strategy using for example Java/JAX-RS/Tomcat
Node.js uses a Single Threaded Non-blocking strategy to handle asynchronous task. Explain strategies to implement a Node.js based server architecture that still could take advantage of a multi-core Server.

### Explain briefly how to deploy a Node/Express application including how to solve the following deployment problems:
#### Ensure that you Node-process restarts after a (potential) exception that closed the application

#### Ensure that you Node-process restarts after a server (Ubuntu) restart

#### Ensure that you can take advantage of a multi-core system

#### Ensure that you can run “many” node-applications on a single droplet on the same port (80)

### Explain the difference between “Developer outputs” and application logging. What’s wrong with console.log(..) statements in our backend-code 

### Explain, generally, what is meant by a NoSQL database.

### Explain Pros & Cons in using a NoSQL database like MongoDB as your data store, compared to a traditional Relational SQL Database like MySQL.

### Explain reasons to add a layer like Mongoose, on top on of a schema-less database like MongoDB



console.log(https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai)
