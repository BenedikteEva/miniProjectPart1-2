# Plain JavaScript
### Explain generally about node.js, and when it “makes sense” and npm, and how it “fits” into the node echo system

### Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, de-structuring assignments

# Geo-handling on the server and on the Client (period-3)
er et format designet til at representere geografisk data i programmering. 

### Explain and demonstrate a REST API that implements geo-features, using MongoDB's geospatial queries and indexes.

Demo: https://miniprojectfsjsbebop.herokuapp.com/friendfinderweb
Sekvens: views/login- -routes/api.js- -Facades/loginFacade.js- -Models/position.js

### Explain and demonstrate a React Native Client that uses geo-components (Location, MapView, etc.)
js_native_to_mini_project for at vise login med MapView

Demo: https://expo.io/@benedikteeva/FriendFinderBB

Sekvens: Screens/LoginScreen (via App.js og TabNavigator)- -postfetch til https://miniprojectfsjsbebop.herokuapp.com/api/login - 
-returnerer jsonobject m venners koordinater og navn igen som befinder sig indenfor valgt distance - 
- efter du har fået data fra fetch call sættes det i state-
-bruges til at rendere et Mapview med markers ved hjælp af Array.map...

MapView har forskellige properties f.eks. region hvor man kan sætte positionen og koordinatdelta*  samt også nogle componenter/ metoder såsom Markers hvor man kan vise en position eventuelt med en title property, et billede eller en farve. 








*latitudeDelta
The amount of north-to-south distance (measured in degrees) to display on the map. Unlike longitudinal distances, which vary based on the latitude, one degree of latitude is always approximately 111 kilometers (69 miles). this is Why we use the number 0.9 something for latitude the longitude delta is probably not neccessary)