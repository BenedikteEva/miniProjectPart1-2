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

### Provide an example of a User Defined Callback Function
En funktion, der tager en anden funktion som argument.  

Da alle funktioner i javascript er objekter kan funktioner tage andre funktioner som argumenter og returner funktioner. Det kaldes higher order functions.  

Callbacks kan bruges til at sikre at kode ikke udføres før andet kode er kørt.  

En af måderne til at håndtere asynckronitet.  

Se callback.js  

---

# Geo-JSON 
### Explain and demonstrate basic Geo-JSON, involving as a minimum, Points and Polygons

### Explain and demonstrate ways to create Geo-JSON test data

### Explain the typical order of longitude and latitude used by Server Side API’s and Client Side API’s

### Explain and demonstrate a REST API that implements geo-features, using a relevant geo-library and plain JavaScript
