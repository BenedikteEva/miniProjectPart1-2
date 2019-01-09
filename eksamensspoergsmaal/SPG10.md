# Plain JavaScript + Node.js
### Why would you consider a Scripting Language as JavaScript as your Backend Platform?
Samme sprog på front og backend.  
Speed og performance.  
Skaler let.  

### Explain Pros & Cons in using Node.js + Express to implement your Backend compared to a strategy using, for example, Java/JAX-RS/Tomcat
Node simpel build process i forhold til java.  
Node er hurtigere end java.  
Node er ikke type stærkt. Det er java.  
Node ikke god til tunge opgaver(cpu krævende). 

Java har tråde. Tråd dør ved error i Node chrasher appen.
### Explain the difference between “Developer outputs” and application logging. What’s wrong with console.log(..) statements in our backend-code.
Det er noget der tager tid så dårligere performance. 
Det er vigtigt at ændre debugging til production mode når man skal deploye, så man ikke kommer til at give en hacker værdifuld viden om systemet. 
(eller fjerne console.log() statements)
Application logging man har f.eks. en logfil på sin server (eller man kan få sendt en mail eller push hvis noget går meget galt)hvor fejlmeddelser med et valgt niveau bliver skrevet til. 
Vi har brugt en logger der hedder morgan men har også forsøgt os med en der hedder winston der skriver til en fil i programmet (indkommenter logger i app.js)
eksempel app.js i miniprojektet eksempel 2 herokus app. Eksempler på ikke opryddet kode alle vores console.logs rundt omkring. 

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

##### Se app.js i backenden.
https://github.com/BenedikteEva/miniProjectPart1-2/blob/master/app.js  

### Explain the benefits of using Mongoose, and demonstrate, using your own code, an example involving all CRUD operations
Fordele ved at bruge mongoose fremfor native mongodb er at mongoose lææger et absatractions lag henover mongoDB der eleminierer behovet for at bruge named collections. isteded for at sige db.collection('user).en eller ander ting kan vi bruger User.find så det kører direkte på skemaet

Models i mongoose tager slæbet med at etablere default værdier for document properties og at validere data. 
man kan sætte funktioner på modeller i mongoose hvilket gør det nemmere at indkoporere ny funktionalitet. 
Queries bruger function chaining istedet for huskesymboler hvilket resulterer i i mere flexibel og læsbar kode og dermed også lettere at vedligeholde. 


### Explain, using relevant examples, about testing JavaScript code, relevant packages (Mocha etc.) and how to test asynchronous code.
unit testing finde ud en stump kode gør det den skal. INtegrationstest for eksempel virker facademertoder sammen med database, endpoints får man det resultat man gerne vil have ud når man kontakter database gennem endpoint (route) gennem facader og til database. 
Tests i miniproject. 
Vi har ikke rigtigt lavet nogle unittests i den forstand men mest testet facademetoder og endpoints men da vi ikke har meget der skal regnes ud. Det eneste vi bruger backenden til er mere eller mindre at lave et restapi der kan gøre database oplysninger tilgængelige for en klient er der ikke det store behov for det. 
