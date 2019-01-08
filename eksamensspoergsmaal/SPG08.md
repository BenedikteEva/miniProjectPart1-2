# Plain JavaScript + Typescript
### Provide a number of examples to demonstrate the benefits of using TypeScript,

### Explain briefly about promises in ES-6 including, and the problems they solve.

### Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API. Provide examples to demonstrate:

### Why this often is the preferred way of handling promises

### Error handling with async/await

### Serial or parallel execution with async/await

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