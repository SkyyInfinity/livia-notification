
# Livia Notification
Livia Notification est un module Node.js conçu pour aider les développeurs à ajouter facilement des notifications à leurs applications web. Il fournit une API simple et intuitive pour créer des notifications en temps réel qui peuvent être affichées aux utilisateurs.

***

## Tables of contents
1. [Installation](#installation)
2. [How to use](#howtouse)
3. [Setup options](#options)
4. [Examples](#examples)
5. [Contribute](#contribute)
6. [License](#license)

***

## Installation <a id="installation"></a>
Pour installer Livia Notification, vous pouvez utiliser le gestionnaire de paquets npm en exécutant la commande suivante :

```bash
npm install livia-notification
```

***

## How to use <a id="howtouse"></a>
Pour utiliser Livia Notification dans votre application, vous devez d'abord l'importer :

```js
const { LiviaNotification } = require('livia-notification');
```
Ou
```js
import LiviaNotification from 'livia-notification';
```
Ensuite, vous pouvez créer une nouvelle instance de la classe LiviaNotification en spécifiant les options de configuration :

```js
const options = {
  // les options de configuration
};

const notification = new LiviaNotification(options);
```
Une fois que vous avez créé une instance de Livia, vous pouvez utiliser les méthodes de l'API pour créer et afficher des notifications :

```js
// Créer une nouvelle notification
const newNotification = {
  titre: 'Nouvelle notification',
  message: 'Vous avez un nouveau message',
  type: 'info',
};

// Afficher la notification
notification.afficher(newNotification);
```

***

## Setup options <a id="options"></a>
Livia Notification accepte les options de configuration suivantes :

- **duration :** La durée en millisecondes pendant laquelle la notification doit être affichée. Par défaut, la durée est de 5000 millisecondes.

- **position :** La position de la notification à l'écran. Les valeurs possibles sont "haut-gauche", "haut-droite", "bas-gauche" et "bas-droite". Par défaut, la position est "haut-droite".

- **animation :** L'animation à utiliser lors de l'affichage et de la fermeture de la notification. Les valeurs possibles sont "fade-in" et "slide-in". Par défaut, l'animation est "fade-in".

- **maxNotifications :** Le nombre maximum de notifications à afficher à la fois. Si le nombre de notifications dépasse ce nombre, la plus ancienne sera supprimée. Par défaut, le nombre maximum est de 5 notifications.

***

## Examples <a id="examples"></a>
Voici un exemple d'utilisation de Livia Notification dans une application Express.js :

```js
const express = require('express');
const { LiviaNotification } = require('livia-notification');

const app = express();

// Créer une nouvelle instance de LiviaNotification avec les options par défaut
const notification = new LiviaNotification();

app.get('/', (req, res) => {
  // Créer une nouvelle notification
  const newNotification = {
    titre: 'Nouvelle notification',
    message: 'Vous avez un nouveau message',
    type: 'info',
  };

  // Afficher la notification
  notification.afficher(newNotification);

  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
```

***

## Contribute <a id="contribute"></a>
Si vous souhaitez contribuer à Livia Notification, vous pouvez cloner le dépôt GitHub et soumettre des pull requests. Assurez-vous de bien tester vos modifications avant de les soumettre.

***

## License <a id="license"></a>
Livia Notification est sous licence MIT. Voir le fichier LICENSE pour plus d'informations.
