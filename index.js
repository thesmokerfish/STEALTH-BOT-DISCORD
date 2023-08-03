const Discord = require('discord.js');
const client = new Discord.Client();

const TOKEN = 'TOKEN';
const PREFIX = '+';


// ID autorisés à utiliser le bot (à remplir avec les ID des utilisateurs autorisés)
const allowedUserIDs = ['123'];

// Paramètres pour le mode "stealth"
const stealthMode = {
  enabled: false,
  originalAvatarURL: '', // Photo de profil orignale (url)
  originalUsername: '', // Pseudo original
  newAvatarURL: '', // Nouvelle photo de profil (url)
  newUsername: ''  // Nouveau nom d'utilisateur
};

client.once('ready', () => {
  console.log("----------------------------------------");
  console.log("         Connecté !         ");
  console.log("https://discord.com/oauth2/authorize?client_id=" + client.user.id + "&permissions=8&scope=bot")
  console.log("----------------------------------------");
  console.log("Pseudo  : " + client.user.username)
  console.log("ID : " + client.user.id)
});

// Fonction pour afficher la liste des commandes disponibles
function showHelp(message) {
  const helpEmbed = new Discord.MessageEmbed()
    .setTitle('📜 Liste des commandes disponibles:')
    .addField(`${PREFIX}help`, 'Affiche la liste des commandes disponibles.')
    .addField(`${PREFIX}stealth on`, 'Active le mode "stealth" (change le nom d\'utilisateur et la photo de profil).')
    .addField(`${PREFIX}stealth off`, 'Désactive le mode "stealth" (rétablit l\'ancien nom d\'utilisateur et la photo de profil).')
    .setColor('#0099ff');

  message.channel.send(helpEmbed);
}

// Fonction pour activer le mode "stealth"
async function enableStealthMode(message) {
  if (!allowedUserIDs.includes(message.author.id)) {
    message.channel.send('❌ Vous n\'êtes pas autorisé à utiliser cette commande.');
    return;
  }

  if (stealthMode.enabled) {
    message.channel.send('✅ Le mode "stealth" est déjà activé.');
  } else {
    stealthMode.enabled = true;
    stealthMode.originalAvatarURL = client.user.displayAvatarURL();
    stealthMode.originalUsername = client.user.username;

    await client.user.setAvatar(stealthMode.newAvatarURL);
    await client.user.setUsername(stealthMode.newUsername);

    message.channel.send('✅ Mode "stealth" activé. Nom d\'utilisateur et photo de profil modifiés.');
  }
}

// Fonction pour désactiver le mode "stealth"
async function disableStealthMode(message) {
  if (!allowedUserIDs.includes(message.author.id)) {
    message.channel.send('❌ Vous n\'êtes pas autorisé à utiliser cette commande.');
    return;
  }

  if (!stealthMode.enabled) {
    message.channel.send('✅ Le mode "stealth" est déjà désactivé.');
  } else {
    stealthMode.enabled = false;

    await client.user.setAvatar(stealthMode.originalAvatarURL);
    await client.user.setUsername(stealthMode.originalUsername);

    message.channel.send('✅ Mode "stealth" désactivé. Nom d\'utilisateur et photo de profil rétablis.');
  }
}

client.on('message', (message) => {
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;

  const args = message.content.slice(PREFIX.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'help') {
    showHelp(message);
  } else if (command === 'stealth') {
    const subCommand = args.shift().toLowerCase();
    if (subCommand === 'on') {
      enableStealthMode(message);
    } else if (subCommand === 'off') {
      disableStealthMode(message);
    } else {
      message.channel.send('❌ Commande invalide. Utilisez `+stealth on` pour activer le mode "stealth" ou `+stealth off` pour le désactiver.');
    }
  }
});

async function startBot() {
  try {
    await client.login(TOKEN);
  } catch (err) {
    console.error('❌ Erreur lors de la connexion du bot:', err);
  }
}

startBot();
