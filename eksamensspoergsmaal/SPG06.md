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

### Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, de-structuring assignments
##### let
Har block scope og hoistes ikke.  
Kan ikke sættes på det globale scope.  

Se let.js  
##### Arrow functions
Kortere syntaks og implicit return.  
Arrow funktioner har ikke sin egen this(som almindelige funktioner). Binder derfor ikke this.  
Kan ikke bruges ved konstruktør.  

Se arrowFunctions.js  
##### this
Se arrowFunctions.js  

##### rest parameter
Du kan tildele resten af variablerne til ...rest. Returners som array.  

De må ikke have fået et separat navn.  
Det er muligt at bruge map, sort og forEach på rest.  

Se rest.js  

##### de-structuring
Pakke værdierne fra et array eller properties fra et objekt ud og lægge det i variabler.  

Se deconstructuring.js  

---

# Geo-handling on the server and on the Client (period-3)
Er et format designet til at representere geografisk data i programmering.  

### Explain and demonstrate a REST API that implements geo-features, using MongoDB's geospatial queries and indexes.
Demo: https://miniprojectfsjsbebop.herokuapp.com/friendfinderweb  
Sekvens: views/login - friendfinderweb.ejs  
routes/api.js - Login routes  
Facades/loginFacade.js  
Models/position.js   

### Explain and demonstrate a React Native Client that uses geo-components (Location, MapView, etc.)
js_native_to_mini_project for at vise login med MapView.  

Demo: https://expo.io/@benedikteeva/FriendFinderBB  

Sekvens: Screens/LoginScreen (via App.js og TabNavigator)- -postfetch til https://miniprojectfsjsbebop.herokuapp.com/api/login -  
- returnerer jsonobject m venners koordinater og navn igen som befinder sig indenfor valgt distance.  
- efter du har fået data fra fetch call sættes det i state.
- bruges til at rendere et Mapview med markers ved hjælp af Array.map...

MapView har forskellige properties f.eks. region, hvor man kan sætte positionen og koordinatdelta*  samt også nogle componenter/ metoder såsom Markers hvor man kan vise en position eventuelt med en title property, et billede eller en farve.  








*latitudeDelta
The amount of north-to-south distance (measured in degrees) to display on the map. Unlike longitudinal distances, which vary based on the latitude, one degree of latitude is always approximately 111 kilometers (69 miles). this is Why we use the number 0.9 something for latitude the longitude delta is probably not neccessary)
