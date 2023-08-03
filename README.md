# Stealth Bot - Documentation
Stealth Bot est un bot Discord en Node.js qui peut activer le mode "stealth" en changeant le nom d'utilisateur et la photo de profil du bot Discord. Le mode "stealth" peut être activé en utilisant la commande +stealth on, et désactivé en utilisant la commande +stealth off. Le bot ne répondra qu'aux utilisateurs dont les ID sont autorisés à l'aide de la commande.

![image](https://github.com/thesmokerfish/STEALTH-BOT-DISCORD/assets/78930118/e5e39f86-5346-40bc-bf65-0ca3421877b3)


## Commandes ✨
- +help : Affiche la liste des commandes disponibles.
- +stealth on : Active le mode "stealth" (change le nom d'utilisateur et la photo de profil).
- +stealth off : Désactive le mode "stealth" (rétablit l'ancien nom d'utilisateur et la photo de profil).

1. ✅ : Indique le succès ou une action accomplie.
2. ❌ : Indique une erreur ou une action non accomplie.
3. 📜 : Utilisé pour indiquer la liste des commandes disponibles.
4. 🔧 : Utilisé pour indiquer les paramètres et les options.
5. 🤖 : Indique le début ou la fin de l'exécution du bot.
6. 🕵️ : Utilisé pour indiquer le mode "stealth" ou quelque chose de discret.

## Configuration ⚙️
Pour utiliser le bot, assurez-vous de configurer les éléments suivants :

Remplacez `'YOUR_DISCORD_BOT_TOKEN'` par votre véritable jeton Discord dans le fichier `index.js`.
Définissez les ID des utilisateurs autorisés dans le tableau allowedUserIDs du fichier `index.js`. Cela permettra au bot de répondre uniquement à ces utilisateurs.

## Utilisation 🤔
Installez les dépendances requises en exécutant npm install discord.js dans votre terminal.
Exécutez le bot en utilisant la commande node index.js dans votre terminal.
Exemples
Commande +help :

+help
Affiche la liste des commandes disponibles dans un message embed.

Commande +stealth on :

`+stealth on`

Active le mode "stealth" en changeant le nom d'utilisateur et la photo de profil du bot. Le bot répondra avec un message indiquant que le mode "stealth" est activé.

Commande +stealth off :

`+stealth off`

Désactive le mode "stealth" en rétablissant l'ancien nom d'utilisateur et la photo de profil du bot. Le bot répondra avec un message indiquant que le mode "stealth" est désactivé.

Remarque
Assurez-vous que le bot a les autorisations appropriées pour changer son nom d'utilisateur et sa photo de profil sur le serveur Discord où il est invité.
