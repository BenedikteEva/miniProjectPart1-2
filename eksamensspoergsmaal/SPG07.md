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

En NoSql database er en database der ikke bruger SQL en keyvalue database (asyncStorage f.eks.), wide column store (?),  en document database (mongodb), graph stores (graphql).  

NoSQL database giver en måde at gemme og hente data der ikke er modelleret på samme måde som tabeller og relationer mellem tabeller som i relationelle databaser (SQL/ MySQL).  

Motivationen for at finde på noget andet en sql inkluderer:  
  simpelt design.  
  Horizontal scaling (nemmere at skalere)  
  Bedre kontrol over tilgængelighed  

### cap-theorem
Consistent or availability.  
Du kan have levels of consistnens or availability.  
Trade of consistency between response time.  
  
The CAP theorem states:
It's theoretically impossible to have all 3 requirements met, so a combination of 2 must be chosen and this is usually the deciding factor in what technology is used. 
cap teorien går ud på at det er umuligt både at have consistens (Consistense), tilgængelighed (Availability) og partition tolerance 

#### Consistency
All the servers in the system will have the same data so anyone using the system will get the same copy regardless of which server answers their request.

### Availability
The system will always respond to a request (even if it's not the latest data or consistent across the system or just a message saying the system isn't working).

### Partition Tolerance
The system continues to operate as a whole even if individual servers fail or can't be reached.

### Explain Pros & Cons in using a NoSQL database like MongoDB as your data store, compared to a traditional Relational SQL Database like MySQL.
pros  
    No Impedance mismatch (relational vs. OO)  
    Schemaless - Mere fleksibelt. Dog når du laver querry du går ud fra implicit schema.  
    Supports large volumes of data by running on clusters  
    flexibelt   
    nemt at bruge  
    hurtigere  
cons  
    Data er mindre strukteret  
    en sql database har et strengt sæt regler om normalisering hvilket sikrer databasens integritet. Det har NoSql ikke.   
    Mangler joins. I en dokument baseret nosql database giver det et problem. (men så kom grapQL)  


### Explain reasons to add a layer like Mongoose, on top on of a schema-less database like MongoDB
Data fra den virkelige verden har ofte en struktur og også typer.  
 samme grunde som vi vil bruge orm sammen med en relationel database.  


### Explain the benefits of using Mongoose, and demonstrate, using your own code, an example involving all CRUD operations
Fordele ved at bruge mongoose fremfor native mongodb er at  
mongoose lægger et absatractions lag henover mongoDB der eleminierer behovet for at bruge named collections. isteded for at sige db.collection('user).en eller ander ting kan vi bruger User.find så det kører direkte på skemaet

Models i mongoose tager slæbet med at etablere default værdier for document properties og at validere data. 
man kan sætte funktioner på modeller i mongoose hvilket gør det nemmere at indkoporere ny funktionalitet. 
Queries bruger function chaining istedet for huskesymboler hvilket resulterer i i mere flexibel og læsbar kode og dermed også lettere at vedligeholde.

se facader
