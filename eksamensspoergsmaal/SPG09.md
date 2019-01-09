# Plain JavaScript + Typescript
### Explain about the Event Loop in Node.js
1. stack.  
2. web api / c++ api(Node).  
3. callback kø.  
4. event loop.  

---
### Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers
1. Forskellige udgaver af js.  
2. Transpilere f.eks. Babel.  

##### Typescript: Superset af js. 
1. Har de nyeste features fra js med. 
2. Transpiler, type check og extra features som private, interface, optional variabler.  
3. Gør js mere objekt orienteret.  

##### Hvad kræver det for at kunne køre js?
En c++ container, hvor V8 engine er embedded.

---
### Provide examples with es6, running in a browser, using Babel and Webpack
Arrow funktion.  
Import/export.  

Se webpack-demo  

---
# NoSQL, MongoDB and Mongoose
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
 Data fra den virkelige verden har ofte en struktur og også typer. 
 samme grunde som vi vil bruge orm sammen med en relationel database. 


### Explain the “6 Rules of Thumb: Your Guide Through the Rainbow” as to how and when you would use normalization vs. denormalization.
1. Indlejr data i et skema medmindre der er en god grund til ikke at gøre det. (denormaliszation) (jobscema)
2. en god grund til ikke at indlejre er hvis noget skal kunne findes frem udenom der hvor det er indlejret. (f,eks, users i posistionscema)
3. en anden er hvis der er rigtig meget data (50000 likes på en location blog med user ids)
4. Lad være med at være bange for at lave joins i din applikation
5. overvej hvor ofte et felt bliver skrevet til og læst i forhold til denormalisering. Hvis et felt mest bliver læst og sjældent skal opdateres er det meget fint at denormalisere men hvis der er mange instancer af et felt og der skal opdateres ofte er det bøvlet og tager lang tid at finde og opdatere alle instancer. 
6. Hvordan du strukture data kommer an på din applications behov. Det kommer helt an på hvor dan applikation laver forespørgelser og updateringer. 

### Explain, using a relevant example, a full JavaScript backend including relevant test cases to test the REST-API (not on the production database)

mongodb mongoose schemas facade metoder og herunder queries samt test af facader og testdatabase og dbsetup . 