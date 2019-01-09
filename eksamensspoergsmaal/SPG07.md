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

### Explain and demonstrate the array-method reduce
Reduce - Kører en reduce funktion(som du selv skriver) mod hvert element af et array og returner et enkelt tal.  
Se mapFilterReduce.js  

---

### Provide examples and explain the es2015 features:  rest parameters, de-structuring assignments
##### rest parameter
Du kan tildele resten af variablerne til ...rest. Returners som array.  

De må ikke have fået et separat navn.  
Det er muligt at bruge map, sort og forEach på rest.  

Se rest.js  

##### de-structuring
Pakke værdierne fra et array eller properties fra et objekt ud og lægge det i variabler.  

Se deconstructuring.js

---

# NoSQL, MongoDB and mongoose
### Explain, generally, what is meant by a NoSQL database.

### Explain Pros & Cons in using a NoSQL database like MongoDB as your data store, compared to a traditional Relational SQL Database like MySQL.
pros
    No Impedance mismatch (relational vs. OO)
    Schemaless
    Supports large volumes of data by running on clusters
    flexibelt 
    nemt at bruge 
    hurtigere
cons 
    Data er mindre strukteret 
    en sql database har et strengt sæt regler om normalisering hvilket sikrer databasens integritet. Det har NoSql ikke- 
    Mangler joins. I en dokument baseret nosql database giver det et problem. (men så kom grapQL)


### Explain reasons to add a layer like Mongoose, on top on of a schema-less database like MongoDB

### Explain the benefits of using Mongoose, and demonstrate, using your own code, an example involving all CRUD operations
