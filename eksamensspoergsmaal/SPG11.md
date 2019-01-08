# Plain JavaScript + Node.js
### Explain the differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.
| Java | JavaScript |
| :-------------: |:-------------:|
| Højt abstraktionsnivea - kompileres. | Engine(v8) - udfører koden med det samme. |
Typer.  | Js deklares typer ikke.
JVM(Java Virtual Machine).  | Browseren eller i applikationer.
Objekter er klasse baseret.  | Objekter prototype baseret. 
.java - oversættes til bytes og udføres af JVM.  | .js - Kompiles ikke - interpretter.
Trådbaseret.  |  Js er event baseret. 
Objekter som parameter.  | Funktioner som parameter. 
Returner objekter fra metoder.  | Returner funktioner fra metoder.

---
### Explain the topic Function Closures 
##### Function Closure
Closure er en funktion, der er inden i en anden funktion.  
Den indre funktion kan referer til variabler fra den ydre funktion og globale variabler.  
Normalt når en funktion bliver kaldt, og variablen er out of scope så slettes den. Beholder referance til variablen.  

##### Module Pattern
Kan bruges til private funktioner.  
Den anonyme funktion virker som en wrapper omkring de 3 indre funktioner, og derfor kan objektet ikke tilgås udefra. Det skal ske gennem de indre funktioner.  

Se closureAndModulePattern.js  

---
### Explain the javascript methods map, filter and explain and demonstrate the reduce method
Map - Tilføjer noget til hvert element i et array.  

Filter - Returner et nyt array med de elementer, der er true.

Reduce - Kører en reduce funktion(som du selv skriver) mod hvert element af et array og returner et enkelt tal.  

Se mapFilterReduce.js  

---
# GraphQL 
### Explain shortly about GraphQL, it purpose and some of its use cases
Alternativ til rest lavet af Facebook og vedligeholdes af et størere community.  
Mere fleksibel og effektiv i forhold til rest.  
Kun et endpoint til alle queries(hente data) og mutations(skrive data). Subscription(real time updates).  

##### Use cases: MANGLER!!!!!!
---
### Explain some of the Server Architectures that can be implemented with a GraphQL backend
GraphQl server med forbindelse til en server.  
GraphQl server med forbindelse til flere eksisterende systemer forbundet med et endpoint.  
Hybrid - Blanding af de 2 ovenstående. En forbindelse til en database og forbindet til eksisterende systemer.  

---
### What is meant by the terms over- and under-fetching in relation to REST
Over-fetching: Når et endpoint returner mere data end, hvad der er brug for.  
Under-fetching: Endpointet returner ikke nok data, og der skal laves flere requests.  

---
### Explain shortly about GraphQL’s type system and some of the benefits we get from this
Bruger et stærk type system til at definere apiets muligheder.   
Typerne skrives i et schema, der tjener som en kontrakt mellem server og klient i forhold til at definer, hvordan en klient kan tilgå dataene.  

##### Fordele 
Når skemaet er defineret kan frontend og backend kan udviklerne(front og backend) arbejde videre uden den store kommunikation, da alle nu kender strukturen på den data, der sendes. 

For frontend udviklerne er det let at lave mockup data, og det er let at skifte til det rigtige backend når man når dertil.  

---
### Provide a number of examples demonstrating data fetching with GraphQL. You should provide examples both running in a Sandbox/playground and examples executed in an Apollo Client
##### Sandbox/playground
https://miniprojectfsjsbebop.herokuapp.com/graphql  

##### Fra vores native app i folderen Apollo.
Queryen lægges i en variabel, der passes til Query komponenten.  
loading, error og data - alt efter staten af queryen.  
Derefter fortæller vi, hvad der skal renderes.  

Apollo tjekker først cachen. Hvis dataene ikke er der så fetches dataen, og lægges i cachen.  
Query komponenten opdateres når dataene lægges i cachen pga den subscriber på resultatet.  

https://github.com/BoMarconiHenriksen/js_native_to_mini_project/tree/master/mini_project/apollo  

Læs mere https://www.apollographql.com/docs/react/essentials/queries.html  
