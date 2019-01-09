# Plain JavaScript
### Explain generally about node.js, and when it “makes sense” and npm, and how it “fits” into the node echo system
1. c++ container - V8 engine - js på server siden. 
2. Skaler.  
3. Hurtig backend.  
4. Tråde.  
5. Ikke cpu krævende som chat server, web server, REST server streaming server ect. 

##### NPM(Node Package Manager)
1. Et comand line interface til at tilføje packages til din applikation.
2. Det kan være tools, css libraries eller du kan dele din kode. 

---
### Provide one or more examples demonstrating User defined Callback Functions
En funktion, der tager en anden funktion som argument.  

Da alle funktioner i javascript er objekter kan funktioner tage andre funktioner som argumenter og returner funktioner. Det kaldes higher order functions.  

Callbacks kan bruges til at sikre at kode ikke udføres før andet kode er kørt.  

En af måderne til at håndtere asynckronitet.  

Se callback.js  

---
# Express, REST and GraphQL
### Explain, using relevant examples (mini-project, preferably), your strategy for implementing a REST-API with Node/Express and show how you can "test" all the four CRUD operations programmatically.
### SE PÅ SVARET TIL DET HER SPØRGSMÅL!!!
Database på mongodb
##### Se api.js i routes
endpoints ('./routes/api).  
facade metoder til at lave crud metoder.  
response ('./views/forskellige endpoints).  

mocha test metoder til at teste endpoints

### Explain shortly about GraphQL, its purpose and some of its use cases
Alternativ til rest lavet af Facebook og vedligeholdes af et størere community.  
Mere fleksibel og effektiv i forhold til rest.  
Kun et endpoint til alle queries(hente data) og mutations(skrive data). Subscription(real time updates).  

##### Use cases MANGLER!!!!

### What is meant by the terms over- and under-fetching in relation to REST
Over-fetching: Når et endpoint returner mere data end, hvad der er brug for.  
Under-fetching: Endpointet returner ikke nok data, og der skal laves flere requests.  

### Demonstrate and highlight important parts of a “complete” GraphQL-app using Express and MongoDB on the server side, and Apollo-Client on the client.
#### GraphQL i backenden
##### /routes/graph.js
GraphQl's endpoint.  

##### /models/graphqlSchema
resolvers.js (mutation og queries).  
schema.js (vores schemas).  

#### Apollo i native
##### App.js
Instans af ApolloClient.  
ApolloProvider komponent (root, for at gøre ApolloClient tilgænglig for all komponenter).  

##### Apollo folderen
Her ligger mutation og query komponenter.  
