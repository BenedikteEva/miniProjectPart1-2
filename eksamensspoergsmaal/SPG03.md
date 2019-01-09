# Plain JavaScript
### Explain the differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features
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

### Explain about the Event Loop in Node.js
1. stack.  
2. web api / c++ api(Node).  
3. callback kø.  
4. event loop.  

---

### Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.
Flere metoder exporteres fra samme modul eller en default export per modul.  

Det er også muligt at importer med forkortelse.  

Exporterede moduler er i strict mode.  

Se consolen i webpack-demo.

---

# Express
### Explain Pros & Cons in using Node.js + Express to implement your Backend compared to a strategy using, for example, Java/JAX-RS/Tomcat
Node simpel build process i forhold til java.  
Node er hurtigere end java.  
Node er ikke type stærkt. Det er java.  
Node ikke god til tunge opgaver(cpu krævende). 

Java har tråde. Tråd dør ved error i Node chrasher appen.

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

### Explain, using relevant examples, how to implement sessions and the legal implications of doing this.
Exempel (både på middleware og en session cookie): app.js er der importeret (required) cookiesessions. I linje 21 setter vi sessions til at stole på den første den bedste proxy den møder. 
Derefter bruger vi den i linje 29 hvor vi blandt andet sætter en key normalt hvis man sætter keys her er der et par stykker her har vi bare nøjes med en string. en set key er allerede signed med keys[0]. Der sættes også en max levetid. 

i vores api route er der så bare som eksamens eksempel lavet en route der hedder session som tæller views og lægger det på routen som json. 
 npm start og åbn developer tools og tjek cookies under get requests i netværk fane

 Man kunne med fordel have brugt sessions til login ala vi gjorde på 2. semester i Fog i java men da vi ikke har et sikkert login i vores database er det lidt underordnet. 
