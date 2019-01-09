# Plain JavaScript
### Explain about promises in ES-6 including, the problems they solve, and a quick explanation of the Promise API 
Løser problemet med callback hell.

Promises er et objekt, der bliver brugt ved asynkrone operationer.  
Det er en lovning på, at på et tidspunkt returnes data eller en error.  

Laver en instance ved at kalde new på Promise klassen.  

Promise.all returner et enkelt promise når alt i arrayet er resolved.  

---
### Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API
Er bygget oven på Promise apiet.  
Er syntaktisk sukker.  
Ser bedre og mere clean ud, og er lettere at debugge.  
Kan bruge try catch.  

---
### Provide examples to demonstrate either both or one of the topics mentioned above
Se callbackHell.js  

---
# GraphQL, Period-4
### Explain shortly about GraphQL, it purpose and some of its use cases
Alternativ til rest lavet af Facebook og vedligeholdes af et størere community.  
Mere fleksibel og effektiv i forhold til rest.  
Kun et endpoint til alle queries(hente data) og mutations(skrive data). Subscription(real time updates).  

---
### Explain shortly about GraphQL Schema Definition Language, and provide a number of examples of schemas you have defined.
Et meget enkelt sprog, der bruges til at definer schemas.  

Objekter er defineret med type, og starter med stort bogstav.  
Int, Float, String, Boolean og ID referer til data. ID er en string, og skal være unik.  

---
### Explain the Concept of a Resolver function, and provide a few simple examples of resolvers you have implemented in a GraphQL Server.
Resolver: Queries og mutations bliver resolved af en funktion(resolveren). Resolveren kaldes når den tilsvarende query eller mutation bliver udført.  

##### Reslovers i backend ./models/graphqlSchema/resolvers.js
https://github.com/BenedikteEva/miniProjectPart1-2/blob/bospg/models/graphqlSchema/resolvers.js  

---
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
