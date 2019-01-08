# Plain JavaScript
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

### Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) browsers
1. Forskellige udgaver af js.  
2. Transpilere f.eks. Babel.  

##### Typescript: Superset af js. 
1. Har de nyeste features fra js med. 
2. Transpiler, type check og extra features som private, interface, optional variabler.  
3. Gør js mere objekt orienteret.  

##### Hvad kræver det for at kunne køre js?
En c++ container, hvor V8 engine er embedded.

---

### Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises
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

Se webpack-demo  

---

### User-defined Callback Functions (writing your own functions that take a callback)
En funktion, der tager en anden funktion som argument.  

Da alle funktioner i javascript er objekter kan funktioner tage andre funktioner som argumenter og returner funktioner. Det kaldes higher order functions.  

Callbacks kan bruges til at sikre at kode ikke udføres før andet kode er kørt.  

En af måderne til at håndtere asynckronitet.  

Se callback.js  

---

# Express + JavaScript Backend Testing
### Explain, using relevant examples, the Express concept; middleware.
Det der sker mellem request og responset.  
Middleware udføres før route handleren bliver kaldt.  
Modtager request og response objektet.
Rækkefølgen er vigtig ved middleware.  

Middleware funktioner kan være logging, authentication ect.  

Kan også bruges i route handleren.  

var app = express()  
app.use(myMiddleware)  

* * *  

app.get('/', function (req,res,next))  

Det der sker mellem request og responset i en http metode (get,put, post, delete osv.).  
Kan være mange forskellige funktioner tjek mine api metoder og tilhørende tests.  

---

### Explain, using relevant examples, about testing JavaScript code, relevant packages (Mocha etc.) and how to test asynchronous code.
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

### Explain, using relevant examples, your strategy for implementing a REST-API with Node/Express and show how you can "test" all the four CRUD operations programmatically 


Se test mappen i backenden. https://github.com/BenedikteEva/miniProjectPart1-2/tree/master/test  
