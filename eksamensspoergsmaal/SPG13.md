# Plain JavaScript
### Explain about the Event Loop in Node.js
1. stack.  
2. web api / c++ api(Node).  
3. callback kø.  
4. event loop.  

---
### Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS
Flere metoder exporteres fra samme modul eller en default export per modul.  

Det er også muligt at importer med forkortelse.  

Exporterede moduler er i strict mode.  

Se consolen i webpack-demo.

---
### Explain, using relevant examples, about testing JavaScript code, relevant packages (Mocha etc.) and how to test asynchronous code (see next question, and if it makes sense, use the same code example for this and the next question)
##### Mocha
En describe() blok giver dig mulighed for at gruppere dine test.  
it() blok sætter testen op med kode.  
done() er en callback, der kan bruges med it(). Så ved Mocha at det er en asynkron metode at, og den skal vente.  
God til integrations og unit test.  

##### Chai
Er et assertion bibliotek til test i node.  
expect() sættes sammen med getters som to.be.equal ect.  

Se test mappen i backenden. https://github.com/BenedikteEva/miniProjectPart1-2/tree/master/test  

---
# GraphQL, Period-4
### Demonstrate and highlight important parts of a “complete” GraphQL-app using Express and MongoDB on the server side, and Apollo-Client on the client.
