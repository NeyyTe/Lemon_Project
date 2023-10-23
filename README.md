   <img width="75" src= "https://www.activateurdeprogres.fr/sites/default/files/activator_form/8iweJYPphuYFRF37XZ9p5uUV.png">    

&nbsp;  

# **Projet LemonFlix**  
 A fluid, innovative web interface for customers that will
allow them to organize better the shows that they want to watch.
### **This Project Use** :

**ReactJS** framework for Front Interface and the datas API are based on [TVMazeAPI](https://www.tvmaze.com/api)

## **How to run this project**

Follow those 3 steps :

1. ### **Require**

[NodeJs](https://nodejs.org/fr/download) ( LTS version minimum )  
[npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) ( installed with nodeJs but its require to install it directly as mentionned on the link)  

( I'm personnally using [pnpm](https://pnpm.io/fr/installation), its faster and more efficient)


2. ### **Installation**

* #### Clone the GitHub repository localy on your pc with GitBash :  
**```git clone https://github.com/NeyyTe/Lemon_test.git```**

 then **`cd Lemon_test`** and open it with VsCode with **`code .`**

 * #### Dependencies :
  
Before running, install all dependencies -> New Terminal and apply the command : **`npm install`** for the node_modules

***

3. ### **Run**

Once you are on the folder root (Lemon_test)  

&nbsp;
 **`npm start`** 

The browser will automatically open at the following URL : `http://localhost:3000`

### **Now you are ready to go !**  


## **Limitations**

  Toutes les consignes demandés ont été effectués avec succés, cependant je fais face à un problème au niveau des données que je reçois. Le endpoint "https://api.tvmaze.com/shows" renvoit une page de 250 résultats et je ne parviens pas à récuperer les données les plus récentes (qui ne comprend que les données datant de 2014 pour la page 0 par exemple) de même pour chercher des films par genres ( ex les films d'horreur les plus récents ).J'ai réfléchi à d'éventuelles solutions :

 - il m'est possible de faire un appel de toutes les données mais la base de données étant trop conséquentes, il me parait difficile de toutes les retourner d'un coup sans avoir de problème de latence. Je me suis beaucoup documenté sur internet et les topics sur ce sujet qui beaucoup demandé, sans réel solution concrète.

 -  J'ai tout de même pensé à trier par date ( dans mon cas 2023) cependant mettre en dur l'année me paraissait peu pertinent pour un site qui se veut dynamique.

Je suis très interessé pour avoir une solution à ce problème, en attendant une réponse de votre part.