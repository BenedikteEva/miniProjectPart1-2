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
Er et format designet til at representere geografisk data i programmering.  

### Explain and demonstrate basic Geo-JSON, involving as a minimum, Points and Polygons
Demonstrate here : http://geojson.io  

Der er forskellige typer i Geojeon ( Point, LineString, Polygon, og alle tre ting med multi foran også )  

Et point har et sæt koordinater bestående af en latitude og en longitude (eller omvendt i mongodb).  
En linje har eller 2 sæt koordinater. (der kan også være en elevation coordinat involveret, men den har vi ikke brugt. ).  
 
Et polygon består af lige så mange koordinater, som der er vinkler.  

### Explain and demonstrate ways to create Geo-JSON test data
For at lave test data kan man f.eks. bruge geojson.io og copy paste  
(se øvelsen med spillet)
https://docs.google.com/document/d/1AmOU_c_ELEyn522X1j8rFnfUAt7u8fMpvH7t-KshS1s/edit


### Explain the typical order of longitude and latitude used by Server Side API’s and Client Side API’s
På geojson.io er coordinat-rækkefølgen latitude longitude i f.eks. i mongodb er det omvendt.  

Ligeledes bruge google maps rækkefølgen lon lat.  
 

### Explain and demonstrate a REST API that implements geo-features, using a relevant geo-library and plain JavaScript
Mini project backend with mongodDb se login facade linie 38 (friendfinder utility).  

position er en reference til en user via user id.  
Det popolate gør er at lave en query på useriderne og skaffe user oplysningerne.  

workspace: miniProjectPart1-2 + callbacks  
