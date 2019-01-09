# Plain JavaScript 
### Variable/function-Hoisting
Muligt at deklarer en variabel/funktion længere ned i koden.  

1. Deklarering løftes op. Tildeling kommer ikke med.  

##### Løsning
1. Deklarer i toppen.  
2. Brug let og const.  

Se hoisting.js  

---

### this in JavaScript and how it differs from what we know from Java/.net.
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

Se this.js  
---

### Function Closures and the JavaScript Module Pattern
##### Function Closure
Closure er en funktion, der er inden i en anden funktion.  
Den indre funktion kan referer til variabler fra den ydre funktion og globale variabler.  
Normalt når en funktion bliver kaldt, og variablen er out of scope så slettes den. Beholder referance til variablen.  

##### Module Pattern
Kan bruges til private funktioner.  
Den anonyme funktion virker som en wrapper omkring de 3 indre funktioner, og derfor kan objektet ikke tilgås udefra. Det skal ske gennem de indre funktioner.  

Se closureAndModulePattern.js  

---

# Express

### Explain Pros & Cons in using Node.js + Express to implement your Backend compared to a strategy using, for example, Java/JAX-RS/Tomcat
Node simpel build process i forhold til java.  
Node er hurtigere end java.  
Node er ikke type stærkt. Det er java.  
Node ikke god til tunge opgaver(cpu krævende).  

Java har tråde. Tråd dør ved error i Node chrasher appen.  

---

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

### Compare the express strategy toward (server side) templating with the one you used with Java on second semester and demonstrate a simple Server Side Rendering example using a technology of your own choice
I Express kan du vælge mellem forskellige template engines pug, mustache, dust ect.  

ejs (embedded javascript templates) og jsp (java server pages).  
Minder meget om det samme. Html med embedded javascript.  
Bag ejs har vi javascript og bag jsp har vi servletter skrevet i Java.  

kig i routes and views i miniprojektet.  

---
