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

### Explain about promises in ES-6 including, the problems they solve, a quick explanation of the Promise API and:
##### Es6 promise
Promises er et objekt, der bliver brugt ved asynkrone operationer.  
Det er en lovning på, at på et tidspunkt returnes data eller en error.  

Laver en instance ved at kalde new på Promise klassen.  

Promise.all returner et enkelt promise når alt i arrayet er resolved.  
---

### Example(s) that demonstrate how to avoid the callback hell  (“Pyramid of Doom")
Når en callback i en funktion kalder en callback, der kalder en callback osv. De er nestet.  

Se callbackHell.js  

---

### Example(s) that demonstrate how to execute asynchronous code in serial or parallel
Serial - et fetch ad gangen.  

Parallel - Alle fetch samtidig vha Promise.all().  

Se serialParalelAsync.js  

---

### Example(s) that demonstrate how to implement our own promise-solutions.
Se callbackHell.js  

---

### Example(s) that demonstrate error handling with promises
Catch i bunden af .then.  

Se callbackHell.js  

---

### Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API.
Er bygget oven på Promise apiet.  
Er syntaktisk sukker.  
Ser bedre og mere clean ud, og er lettere at debugge.  
Kan bruge try catch.  

---

# Express
### Explain briefly how to deploy a Node/Express application including how to solve the following deployment problems:

##### Deployment
Installer Node på serveren.  
Installer github, og klon din Node applikation.  
Gør app.js executable, og start din applikation.  
Sørg for at nginx ligger foran.  

Heroku dejligt nemt sammen med github
Digital Ocean tomcatserver ind og pille ved 


### Ensure that you Node-process restarts after a (potential) exception that closed the application
Installer pm2 - En process manager, der kan administrer Node applikationer, og bruges til at køre programmer i baggrunden som en service.  
pm2 start app.js  
pm2 startup systemd - Generer et start up script. Systemd er en linux system manager.  


### Ensure that you can take advantage of a multi-core system
Brug cluster modulet.  
Der findes også cluster-service eller node-pm.  
I pm2 kan du slå cluster mode til. 

---

### Ensure that you can run “many” node-applications on a single droplet on the same port (80)
Brug en load balancer til at fordele trafikken mellem dine instancer f.eks. nginx.  
Brug in-memory data-store som redis til sessioner.  
