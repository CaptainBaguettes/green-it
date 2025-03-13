# green-it

## Le groupe : 
Pavard Raphaël -> prototype + front authentification + style
Linz Pierre -> front home, préférences + TU
Victorien Dit Richard Teddy -> Back + BDD + Readme + sitemap

## Description de la solution :
C'est une preuve de concepte pour une application servant à accompagner les utilisateurs dans leur transition écologique, en ce basant sur trois piliers : 

- Comprendre
- Transiter
- Agir

L'utilisateur va pouvoir choisir parmis 5 thématiques les sujets qui l'intéressent.
- Alimentaire
- Vestimentaire
- Transport
- Electronique
- Entretient


## Technologies utilisées : 
### front

- react: "^19.0.0",
- react-dom: "^19.0.0",
- react-router-dom: "^7.3.0"
- vitest: "^3.0.8"

### back

- bcrypt: "^5.1.1",
- express: "^4.21.2",
- jsonwebtoken: "^9.0.2",
- mysql2: "^3.13.0",
- sequelize: "^6.37.6"

## Conception

Nous avons décider pour notre solution, de mettre en place quelques notions du green-it. 
- Eviter les imbrications.
- La mise en cache de certaines données.
- Lazyload sur les images présentes sur l'application.
- Nous avons diminuer poids des assets.(compression + format)
- Requêtes API ne retournant que les éléments nécessaires
- Mise en place de tests Unitaires
- Mise en place de sitemap
- Ajout d'élément d'accessiblité (alt)
- Recherche effectué sur un navigateur vert : ecosia (Teddy)
- Utilisation de matériel non neuf, et reconditionné
- 

### Difficultés rencontrées 

Concernant la mise en cache des données de préférences. Nous nous sommes posé la question de retourner les informations de préférences lors de la connexion, dans la même requête. Cependant cela ne correspondait pas aux bonnes pratiques de développement qui est de garder un but et un seul pour un méthode. Dans notre cas, la méthode de connexion aurait du faire la connexion plus la récupération des préférences. Il a donc été décider de créer une requête API pour la récupération des préférences, et de mettre celle-ci en cache afin de ne pas à avoir à rappeler celle-ci.

## Mise en production

Pour la mise en production de ce POC afin de faire tester l'application, nous avons choisi l'hébergeur ecomail, qui est notre fournisseur de mail, et qui propose une solution d'hébergement de site web. Celui-ci est Français, basé en Corrèze qui est alimenté en électicité verte. entre 30 et 50 % de leurs CA est réversé à des associations ecologique, ils conservent leurs équipements le plus longtemps possible. pour en savoir plus https://www.ecomail.fr/apropos 

Si L'application est amené à grandir et devoir être déployé à plus grande échelle, nous avons pensé à O2Switch qui est Français et Vert. Pour en savoir plus : https://www.o2switch.fr/ 


Pour le moment notre solution n'étant pas en production, nous n'avons pas eu à implémenté d'htaccess, si nous avons à le faire, nous renseignerons allow override : none, afin d'empêcher des éléments externes de mofifier la configuration des serveurs.

## Ce que nous aurions aimé mettre en place

- Appliquer plus d'élèments de l'accessibilité
- Avoir plus de logique métier "complexe" afin de rencontrer de réels difficultés d'implémentation de green-it
- test de bout en bout (cf : cas de test)
- TU back
- Mise en place sonarQube, scafendre, axecore, 

### Cas de test
1. Tests Fonctionnels

    Objectif : Vérifier que la fonctionnalité de login fonctionne comme prévu.
    Cas de Test :
        Login Réussi
            Description : Vérifier que l'utilisateur peut se connecter avec des identifiants valides.
            Étapes :
                Entrer un nom d'utilisateur et un mot de passe valides.
                Cliquer sur le bouton "Login".
                Vérifier que l'utilisateur est redirigé vers la page d'accueil ou le tableau de bord.
        Login Échoué - Mot de Passe Incorrect
            Description : Vérifier que l'utilisateur ne peut pas se connecter avec un mot de passe incorrect.
            Étapes :
                Entrer un nom d'utilisateur valide et un mot de passe incorrect.
                Cliquer sur le bouton "Login".
                Vérifier qu'un message d'erreur s'affiche indiquant que le mot de passe est incorrect.
        Login Échoué - Nom d'Utilisateur Incorrect
            Description : Vérifier que l'utilisateur ne peut pas se connecter avec un nom d'utilisateur incorrect.
            Étapes :
                Entrer un nom d'utilisateur incorrect et un mot de passe valide.
                Cliquer sur le bouton "Login".
                Vérifier qu'un message d'erreur s'affiche indiquant que le nom d'utilisateur est incorrect.
        Login Échoué - Champs Vides
            Description : Vérifier que l'utilisateur ne peut pas se connecter sans entrer de nom d'utilisateur ou de mot de passe.
            Étapes :
                Laisser les champs de nom d'utilisateur et de mot de passe vides.
                Cliquer sur le bouton "Login".
                Vérifier qu'un message d'erreur s'affiche indiquant que les champs sont obligatoires.
        Login Échoué - Compte Désactivé
            Description : Vérifier que l'utilisateur ne peut pas se connecter si son compte est désactivé.
            Étapes :
                Entrer les identifiants d'un compte désactivé.
                Cliquer sur le bouton "Login".
                Vérifier qu'un message d'erreur s'affiche indiquant que le compte est désactivé.

2. Tests de Sécurité

    Objectif : Vérifier que la fonctionnalité de login est sécurisée contre les attaques courantes.
    Cas de Test :
        Injection SQL
            Description : Vérifier que l'application est protégée contre les attaques par injection SQL.
            Étapes :
                Entrer des valeurs SQL dans les champs de nom d'utilisateur et de mot de passe.
                Cliquer sur le bouton "Login".
                Vérifier que l'application ne renvoie pas d'erreurs SQL et qu'elle gère correctement les entrées malveillantes.
        Force Brute
            Description : Vérifier que l'application est protégée contre les attaques par force brute.
            Étapes :
                Tenter de se connecter plusieurs fois avec des mots de passe incorrects.
                Vérifier que l'application bloque l'accès après un certain nombre de tentatives échouées.
        Mot de Passe Faible
            Description : Vérifier que l'application impose des règles de complexité pour les mots de passe.
            Étapes :
                Tenter de créer un compte avec un mot de passe faible (par exemple, "123456").
                Vérifier que l'application affiche un message d'erreur indiquant que le mot de passe est trop faible.

3. Tests de Performance

    Objectif : Vérifier que la fonctionnalité de login peut gérer un grand nombre d'utilisateurs simultanément.
    Cas de Test :
        Charge Normale
            Description : Vérifier que l'application peut gérer un nombre normal d'utilisateurs se connectant simultanément.
            Étapes :
                Simuler un nombre normal d'utilisateurs se connectant en même temps.
                Vérifier que l'application répond rapidement et que les utilisateurs peuvent se connecter sans problème.
        Charge Élevée
            Description : Vérifier que l'application peut gérer un nombre élevé d'utilisateurs se connectant simultanément.
            Étapes :
                Simuler un nombre élevé d'utilisateurs se connectant en même temps.
                Vérifier que l'application répond toujours rapidement et que les utilisateurs peuvent se connecter sans problème.
        Pics de Charge
            Description : Vérifier que l'application peut gérer des pics de charge, par exemple, lors d'une promotion ou d'un événement.
            Étapes :
                Simuler un pic de charge avec un grand nombre d'utilisateurs se connectant en même temps.
                Vérifier que l'application reste stable et que les utilisateurs peuvent se connecter sans problème.

4. Tests d'Interface Utilisateur (UI)

    Objectif : Vérifier que l'interface utilisateur est conviviale et réactive.
    Cas de Test :
        Accessibilité
            Description : Vérifier que l'interface de login est accessible aux utilisateurs ayant des handicaps.
            Étapes :
                Utiliser des outils d'accessibilité pour vérifier que les champs de nom d'utilisateur et de mot de passe sont accessibles.
                Vérifier que les messages d'erreur sont lisibles et compréhensibles.
        Responsive Design
            Description : Vérifier que l'interface de login est responsive et fonctionne bien sur différents appareils.
            Étapes :
                Tester l'interface de login sur différents appareils (ordinateurs, tablettes, smartphones).
                Vérifier que l'interface s'adapte correctement à la taille de l'écran et que les champs sont faciles à utiliser.
        Messages d'Erreur
            Description : Vérifier que les messages d'erreur sont clairs et informatifs.
            Étapes :
                Tenter de se connecter avec des identifiants incorrects ou incomplets.
                Vérifier que les messages d'erreur s'affichent correctement et fournissent des informations utiles à l'utilisateur.
