# Learning Goals Periode 1

TODO: SPLIT THE EXAMPLES IN TO SMALL FILES AND UPDATE THE README FILE.  

### Explain and Reflect:
#### Explain differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.

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

#### Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers
1. Forskellige udgaver af js.  
2. Transpilere f.eks. Babel.  

##### Typescript: Superset af js. 
1. Har de nyeste features fra js med. 
2. Transpiler, type check og extra features som private, interface, optional variabler.  
3. Gør js mere objekt orienteret.  

##### Hvad kræver det for at kunne køre js?
En c++ container, hvor V8 engine er embedded.

---

#### Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.
1. c++ container - V8 engine - js på server siden. 
2. Skaler.  
3. Hurtig backend.  
4. Tråde.  
5. Ikke cpu krævende som chat server, web server, REST server streaming server ect. 

##### NPM(Node Package Manager)
1. Et comand line interface til at tilføje packages til din applikation.
2. Det kan være tools, css libraries eller du kan dele din kode. 

---

#### Explain about the Event Loop in Node.js
1. stack.  
2. web api / c++ api(Node).  
3. callback kø.  
4. event loop.  

http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

---

#### RED: Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises
##### Babel
1. Transpiler.  

##### Webpack
1. Bygge og bundle værktøj. 
2. Build - transpiler.
3. Bundle - Alle filer bundles til en fil, og der laves en dependency graph.
4. Ekstra features f.eks.
5. Minificer.
6. Build server.
7. Lazy loading.

---

#### Explain the purpose of “use strict” and Linters, exemplified with ESLint 
##### Linters 
1. Standadiser kode.  

##### "use strict"
1. Gør debugging lettere.  
Fejl, som ikke kaster exceptions vil nu kaste exceptions.  

2. Hvordan bruges use strict i fil/funktion?  
3. Hvorfor er det en string?  

Se eksempler i useStrict.js.  

---

#### Explain using sufficient code examples the following features in JavaScript. 
#### Variable/function-Hoisting.  
Muligt at deklarer en variabel efter den er brugt.  

1. Deklarering løftes op. Tildeling kommer ikke med.

##### Løsning
1. Deklarer i toppen.
2. Brug let og const.

---

#### this in JavaScript and how it differs from what we know from Java/.net.  
| Java | JavaScript |
| :-------------: |:-------------:|
| Klassebaseret | Prototype baseret |

##### this i Java
I java referer this altid til objektet.  
this referer til objektet gennem den metode, der bliver kaldt.

```
// I en metode, der hedder move indgår følgende kode.  
if(this.position == piece2.position)  
    result = false;  

bishop1.move(); // this referer til objektet bishop1.  
bishop2.move(); // this referer til objektet bishop2.  
```
##### this i JavaScript
Som udgangspunkt referer this til det globale objekt.  
Se filen this.js for Javascript eksempler.  

For en løsning på udfordringen med this i JavaScript se filen thisApplyCallBind.js

---

#### Function Closures and the JavaScript Module Pattern.
##### Function Closure
Closure er en funktion, der er inden i en anden funktion.  
Den indre funktion kan referer til variabler fra den ydre funktion og globale variabler.  
Normalt når en funktion bliver kaldt, og variablen er out of scope så slettes den. Beholder referance til variablen.  

##### Module Pattern
Kan bruges til private funktioner.  
Den anonyme funktion virker som en wrapper omkring de 3 indre funktioner, og derfor kan objektet ikke tilgås udefra. Det skal ske gennem de indre funktioner.  

Se closureAndModulePattern.js  

---

#### RED: Immediately-Invoked Function Expressions (IIFE).  
En funktion der bliver til en expression og udføres med det samme.  

Det du definere i en funktion, eksisterer kun i den function blok.  
Der er ikke adgang til variablen uden for funktionens scope.  

Kan bruges til ikke at forurene det globale variabel.  

Se iife.js  

---

#### JavaScripts Prototype.  
I Javascript er funktioner objekter.  
Når en funktion laves så tilføjes et prototype objekt til funktionen <function>.prototype.  

Vi kan tilføje funktioner til prototypen af et objekt.  

En konstruktør funktion har en prototype property, der referer til et objekt.  
Det objekt bliver prototypen til alle instancer, der bliver lavet med konstruktøren.  
Vi kan tilføje nye funktioner og properties til det objekt som vil blive delt af alle instancer.  

Se prototype.js  

---

#### User defined Callback Functions (writing your own functions that takes a callback).  
En funktion, der tager en anden funktion som argument.  

Da alle funktioner i javascript er objekter kan funktioner tage andre funktioner som argumenter og returner funktioner. Det kaldes higher order functions.  

Callbacks kan bruges til at sikre at kode ikke udføres før andet kode er kørt.  

Se callback.js  

---

#### Explain the methods map, filter and reduce.  
Map - Tilføjer noget til hvert element i et array.  

Filter - Returner et nyt array med de elementer, der er true.

Reduce - Kører en reduce funktion(som du selv skriver) mod hvert element af et array og returner et enkelt tal.  

Se mapFilterReduce.js  

---

#### Provide examples of user defined reusable modules implemented in Node.js.  
Importer et modul.  
. er i samme folder.  
.. en folder tilbage.

---

#### ES6-7 and TypeScript  
#### Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, de-structuring assignments, maps/sets etc.  
##### let
Har block scope og hoistes ikke.  
Kan ikke sættes på det globale scope.  

Se let.js  
##### Arrow functions
Kortere syntaks og implicit return.  
Arrow funktioner har ikke sin egen this(som almindelige funktioner). Binder derfor ikke this. Så vær opmærksom ved objekter.  
Kan ikke bruges ved konstruktør.  

Se arrowFunctions.js  
##### this


##### rest parameter
Du kan tildele resten af variablerne til ...rest. Returners som array.  

De må ikke have fået et separat navn.  
Det er muligt at bruge map, sort og forEach på rest.  

Se rest.js  

##### de-structuring
Pakke værdierne fra et array eller properties fra et objekt ud og lægge det i variabler.  
rest parametere kan blive destructured(kun arrays) dvs resten af variablerne bliver lagt i en variabel.  

Se deconstructuring.js

---

#### Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.  
Flere metoder exporteres fra samme modul eller en default export per modul.  

Det er også muligt at importer med forkortelse.  

Exporterede moduler er i strict mode.  

Se consolen i webpack-demo.

---

#### Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.  
##### Java klasse baseret. 
En klasse(subclass) kan arve metoder og attributes fra en anden klasse(superclass).  

##### Javascript prototype baseret.  
Prototype chain. Muligt at linke et objekt til et andet, og dermed "arve" properties og metoder.  

##### Es6 inheritance
Er stadig prototype baseret, men ligner det vi ser i java. Er syntaktisk sukker.  

---

#### RED: Provide examples with es6, running in a browser, using Babel and Webpack.  
Se webpack-demo  

---

#### Provide an number of examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics.  
##### Types

##### Interface

##### Classes

Se typescript-demo  
---

#### Callbacks, Promises and async/await.  
#### Explain about promises in ES-6 including, the problems they solve, a quick explanation of the Promise API and:  

##### Es6 promise
Promises er et objekt, der bliver brugt ved asynkrone operationer.  
Det er en lovning på, at på et tidspunkt returnes data eller en error.  



---

#### Example(s) that demonstrate how to avoid the callback hell  (“Pyramid of Doom").  

---

#### Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel.  

---

#### Example(s) that demonstrate how to implement our own promise-solutions.  

---

#### Example(s) that demonstrate error handling with promises.  

---

#### Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API.  

---

#### Provide examples to demonstrate 
#### Why this often is the preferred way of handling promises.  

---

#### Error handling with async/await.    

---

#### Serial or parallel execution with async/await.  
