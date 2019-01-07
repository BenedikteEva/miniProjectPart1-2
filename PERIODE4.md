### Explain shortly about GraphQL, its purpose and some of its use cases.
Alternativ til rest lavet af Facebook og vedligeholdes af et størere community.  
Mere fleksibel og effektiv i forhold til rest.  
Kun et endpoint til alle queries(hente data) og mutations(skrive data). Subscription(real time updates).  
Use cases: 

### Explain some of the Server Architectures that can be implemented with a GraphQL backend
GraphQl server med forbindelse til en server.  
GraphQl server med forbindelse til flere eksisterende systemer forbundet med et endpoint.  
Hybrid - Blanding af de 2 ovenstående. En forbindelse til en database og forbindet til eksisterende systemer.  

### What is meant by the terms over- and under-fetching in relation to REST
Over-fetching: Når et endpoint returner mere data end, hvad der er brug for.  
Under-fetching: Endpointet returner ikke nok data, og der skal laves flere requests.  

### Explain shortly about GraphQL’s type system and some of the benefits we get from this
Bruger et stærk type system til at definere apiets muligheder.   
Typerne skrives i et schema, der tjener som en kontrakt mellem server og klient i forhold til at definer, hvordan en klient kan tilgå dataene.  
Fordele: Når skemaet er defineret kan frontend og backend udviklere arbejde videre uden den store kommunikation, da alle nu kender strukturen på den data, der sendes. For frontend udviklerne er det let at lave mockup data, og det er let at skifte til det rigtige backend når man når dertil.  

### Explain shortly about GraphQL Schema Definition Language, and provide a number of examples of schemas you have defined.

### Provide a number of examples demonstrating data fetching with GraphQL. You should provide examples both running in a Sandbox/playground and examples executed in an Apollo Client

### Provide a number of examples demonstrating creating, updating and deleting with Mutations. You should provide examples both running in a Sandbox/playground and examples executed in an Apollo Client.  

### Explain the Concept of a Resolver function, and provide a number of simple example of resolvers you have implemented in a GraphQL Server.  
Resolver: Queries og mutations bliver resolved af en funktion(resolveren). Resolveren kaldes når den tilsvarende query eller mutation bliver udført.  

### Explain the benefits we get from using a library like Apollo-client, compared to using the plain fetch-API
Caching.   

### In an Apollo-based React Component, demonstrate how to perform GraphQL Queries, including:
#### Explain the structure of the Query Component

#### Explain the purpose of ApolloClient and the ApolloProvider component

#### Explain the purpose of the gql-function (imported from graphql-tag)

### In an Apollo-based React Component, demonstrate how to perform GraphQL Mutations?

### Demonstrate and highlight important parts of a “complete” GraphQL-app using Express and MongoDB on the server side, and Apollo-Client on the client.
