# AlexisLeMasne_P7_01062021<<

Bonjour,

Afin d'initialiser le projet :
Pour le back :
1. aller dans Groupomania > Backend 
2. Rennomer le fichier exemple.env en .env puis rentrer les informations suivantes :

DB_HOST= localhost (ou autre si vous n'utilisez pas cette méthode)
DB_USER= votre user mysql (par défault root)
DB_PASS= votre mdp mysql
DB_DATABASE=groupomaniaalexislm
TOKEN= un token secret

3. ouvrir le terminal et dans le backend taper "npm install" pour ajouter le package node. 
4. dans le terminal backend toujours, taper "nodemon server"

Pour le frontend :
5. aller dans le terminal et taper dans le front : "npm install" puis une fois le module telechargé, tapez "npm run serve"

Pour la base de données (qui est dans le dossier Groupomania > bdd)
6. Dans mysql : CREATE DATABASE groupomaniaalexislm;
7. mysql -u root -p groupomaniaalexislm < "le chemin vers groupomaniaalexslm".sql
6-7-Alternative : Il est possible d'utiliser Workbench ou phpmyadmin afin d'importer une base de donnée existante  

En cas de besoin, n'hésitez pas à me contacter.
Merci et bonne navigation !
