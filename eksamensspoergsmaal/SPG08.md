# Plain JavaScript + Typescript
### Provide a number of examples to demonstrate the benefits of using TypeScript,
##### Types
Deklarerer variablens type som String, Number, Boolean, Array ect.  

##### Interface
Beskriver et objekt, og tjekker at en property har den rigtige type.  

##### Classes
Es6 feature. Ligner det vi kender fra java.  
Keywords er obligatoriske i konstruktøren.  

Se typescript-demo  

##### Generics
I stedet for any typen.  

Se typescript-demo  
---

### Explain briefly about promises in ES-6 including, and the problems they solve.
##### Es6 promise
Løser problemet med callback hell.

Promises er et objekt, der bliver brugt ved asynkrone operationer.  
Det er en lovning på, at på et tidspunkt returnes data eller en error.  

Laver en instance ved at kalde new på Promise klassen.  

Promise.all returner et enkelt promise når alt i arrayet er resolved.  

---

### Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API. Provide examples to demonstrate:
Er bygget oven på Promise apiet.  
Er syntaktisk sukker.  
Ser bedre og mere clean ud, og er lettere at debugge.  

---
### Why this often is the preferred way of handling promises
Kan bruge try catch. 
man er fri for lange promisechains. (.then) fordi await håndterer ventetiden for os
Ser bedre og mere clean ud, og er lettere at debugge.  

---
### Error handling with async/await
Kan bruge try catch.  
Se callbackHell.js  
se friendfinder web list of all blogs get metode
---
### Serial or parallel execution with async/await
Serial - et fetch ad gangen.  

Parallel - Alle fetch samtidig vha Promise.all().  

Se serialParalelAsync.js  

# Geo-JSON 
### Demonstrate both server and client-side, of the geo-related parts of your implementation of the mini project
Serverside:
Demo: https://miniprojectfsjsbebop.herokuapp.com/friendfinderweb backend
Sekvens: views/login- -routes/api.js- -Facades/loginFacade.js- -Models/position.js

clientside
Demo: https://expo.io/@benedikteeva/FriendFinderBB

Sekvens: Screens/LoginScreen (via App.js og TabNavigator)- -postfetch til https://miniprojectfsjsbebop.herokuapp.com/api/login - 
-returnerer jsonobject m venners koordinater og navn igen som befinder sig indenfor valgt distance - 
- efter du har fået data fra fetch call sættes det i state-
-bruges til at rendere et Mapview med markers ved hjælp af Array.map...

MapView har forskellige properties f.eks. region hvor man kan sætte positionen og koordinatdelta*  samt også nogle componenter/ metoder såsom Markers hvor man kan vise en position eventuelt med en title property, et billede eller en farve. 








*latitudeDelta
The amount of north-to-south distance (measured in degrees) to display on the map. Unlike longitudinal distances, which vary based on the latitude, one degree of latitude is always approximately 111 kilometers (69 miles). this is Why we use the number 0.9 something for latitude the longitude delta is probably not neccessary)