# Plain JavaScript + Node.js
### Why would you consider a Scripting Language as JavaScript as your Backend Platform?
Samme sprog på front og backend.  
Speed og performance.  
Skaler let.  

---
### Explain Pros & Cons in using Node.js + Express to implement your Backend compared to a strategy using, for example, Java/JAX-RS/Tomcat
Node simpel build process i forhold til java.  
Node er hurtigere end java.  
Node er ikke type stærkt. Det er java.  
Node ikke god til tunge opgaver(cpu krævende). 

Java har tråde. Tråd dør ved error i Node chrasher appen.

---
### Explain the difference between “Developer outputs” and application logging. What’s wrong with console.log(..) statements in our backend-code. 
##### Developer outputs
Det er ustrukturet, og er ikke noget som kan vedligeholdes. Det kan give en ide om, hvordan systemet er bygget op til folk som ikke har brug for den viden.  

Det er vigtigt at ændre debugging til production mode når man skal deploye, så man ikke kommer til at give en hacker værdifuld viden om systemet.  

##### Application logging
Log systemet f.eks. performance, error messages, login forsøg, system filer der ændre sig ect til specifikke filer og sorg for at give admin besked(response) når noget er kritisk.  

---
# Express and MongoDB
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
### Explain the benefits of using Mongoose, and demonstrate, using your own code, an example involving all CRUD operations


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
