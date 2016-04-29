import Vue from 'vue';
import I18n from 'vue-i18n';

const locales = {
  en: {
    lang: 'en',
    headlines: {
      title: 'Open Source<br>Password Manager',
      subtitle: 'replaces all your tools that record your passwords as LastPass, 1Password, Keepass, Excel spreadsheet, post it, etc ...',
    },
    index: {
      search: 'search',
      previous: 'previous',
      next: 'next',
    },
    entry: {
      Create_new_entry: 'Create a new entry',
      create_new_entry: 'create entry',
      Cancel: 'Cancel',
      Create: 'Create',
      Update_new_entry: 'Update a new entry',
      Update: 'Update',
      entry_created: 'Your entry has been successfully created',
      error_creation: 'Your entry could not be created, try again in a moment',
      entry_update: 'Your entry has been successfully updated',
      error_update: 'Your entry could not be updated, try again in a moment',
      Delete_entry: 'Delete entry',
      delete_are_you_sure: 'Are you sure you want to delete this entry ?',
      Confirm: 'Confirm',
      entry_deleted: 'This entry has been deleted',
      error_deletion: 'Your entry could not be deleted, try again in a moment',
      copy_password: 'copy password',
      Copy: 'Copy',
      copy_to_clipboard: 'Copy to clipboard ctrl + c',
    },
    entry_form: {
      login: 'Email / Username',
      site: 'Site',
      advanced_options: 'Advanced options',
      lowercase_options: 'lowercase (a‑z)',
      uppercase_options: 'UPPERCASE (A‑Z)',
      numbers_options: 'numbers (0‑9)',
      symbols_options: 'symbols (@&%?)',
      counter: 'Counter',
      length: 'Length',
    },
    footer: {
      created_by: 'created by',
    },
    passwordgenerator: {
      who_are_you: 'Email / Username',
      what_is_your_secret: 'Password',
      where_are_you_going: 'Site (e.g. twitter.com)',
      copy: 'Copy',
      advanced_options: 'Advanced options',
      lowercase_options: 'lowercase (a‑z)',
      uppercase_options: 'UPPERCASE (A‑Z)',
      numbers_options: 'numbers (0‑9)',
      symbols_options: 'symbols (@&%?)',
      counter: 'Counter',
      generated_password: 'Generated password',
      length: 'Length',
    },
    features: {
      no_cloud_title: 'No storage',
      responsive_title: 'Available everywhere',
      open_source_title: 'Open Source',
      free_title: 'Free',
      no_cloud: 'LessPass regenerates your passwords when you need them. No cloud storage is required',
      responsive: 'LessPass is a web application and works on all devices (computer, smartphone, tablet and your smartTV)',
      open_source: 'LessPass is <strong>open-source</strong>. So its security can be audited. Source code is available on <a href="https://github.com/lesspass/core">Github</a>',
      free: 'LessPass is free<br>and always will be',
    },
    how_it_works: {
      title: 'How LessPass works&nbsp;?',
      detail: 'LessPass is a password manager that guarantees you to generate the same password on the basis of unique information you provide. You can use LessPass to create passwords for various internet services (social networks , email, server passwords , ...).',
      always_sync: 'No synchronisation',
      always_sync_detail: 'LessPass don’t need any cloud storage. It’s a webapp, with some Javascript, that derive your password in a secure way.',
      derivation: 'Math and Crypto',
      derivation_detail: 'LessPass use different key derivation functions to transform your personal information into an unique password. These transformations are robust against brute force attacks.',
      self_hosting: 'Self hosted ',
      self_hosting_detail: 'LessPass can be hosted on your server :',
    },
    feedback: {
      feedback_1: 'Finally a security tool that I did not need to trust.',
      feedback_1_author: 'Édouard Lopez, LessPass Team Member',
      feedback_2: 'I no longer need a personal cloud to manage my passwords.<br>One secret and I have access to my passwords everywhere.',
      feedback_2_author: 'Guillaume Vincent, LessPass Founder',
    },
    login: {
      login: 'Login',
      Email: 'Email',
      Password: 'Password',
      Sign_in: 'Sign In',
      register: 'Register',
      logout: 'Logout',
      logout_ok: 'Logout successful, thank you for spending some time on LessPass',
      welcome: 'Login successful, welcome on LessPass',
      credentials_invalids: '<strong>Invalid Email or Password.</strong><br> Please try again.',
    },
    register: {
      beta: 'Inscriptions are closed for now. To obtain an invitation to LessPass, send us an <a href="mailto:contact@oslab.fr">email</a>',
    },
  },
  fr: {
    lang: 'fr',
    headlines: {
      title: 'Gestionnaire de mot de passe open source',
      subtitle: 'remplace tous vos outils qui sauvegardent vos mots de passe comme Lastpass, 1password, Keepass, tableur Excel, post it, etc...',
    },
    index: {
      search: 'rechercher',
      previous: 'précédent',
      next: 'suivant',
    },
    entry: {
      Create_new_entry: 'Créer un mot de passe',
      create_new_entry: 'créer un mot de passe',
      Cancel: 'Annuler',
      Create: 'Créer',
      Update_new_entry: 'Mettre à jour un mot de passe',
      Update: 'Mettre à jour',
      entry_created: 'Votre mot de passe a bien été créé',
      error_creation: 'Une erreur est survenue pendant la création, retentez dans un instant',
      entry_update: 'Votre mot de passe a bien été mis à jour',
      error_update: 'Une erreur est survenue pendant la mise à jour, retentez dans un instant',
      Delete_entry: 'Supprimer un mot de passe',
      delete_are_you_sure: 'Est vous sur de vouloir supprimer ce mot de passe ?',
      Confirm: 'Confirmer',
      entry_deleted: 'Votre mot de passe a bien été supprimé',
      error_deletion: 'Une erreur est survenue pendant la suppression, retentez dans un instant',
      copy_password: 'copier le mot de passe',
      Copy: 'Copier',
      copy_to_clipboard: 'Copier (CTRL + C)',
    },
    entry_form: {
      login: 'Email / Nom d\'utilisateur',
      site: 'Site (ex: twitter.com)',
      advanced_options: 'Options avancées',
      lowercase_options: 'minuscules (a‑z)',
      uppercase_options: 'MAJUSCULES (A‑Z)',
      numbers_options: 'nombres (0‑9)',
      symbols_options: 'caractères spéciaux (@&%?)',
      counter: 'Version',
      length: 'Longueur',
    },
    footer: {
      created_by: 'créé par',
    },
    passwordgenerator: {
      who_are_you: 'Email / Nom d\'utilisateur',
      what_is_your_secret: 'Mot de passe',
      where_are_you_going: 'Site (ex: twitter.com)',
      copy: 'Copier',
      advanced_options: 'Options avancées',
      lowercase_options: 'minuscules (a‑z)',
      uppercase_options: 'MAJUSCULES (A‑Z)',
      numbers_options: 'nombres (0‑9)',
      symbols_options: 'caractères spéciaux (@&%?)',
      counter: 'Version',
      generated_password: 'Mot de passe généré',
      length: 'Longueur',
    },
    features: {
      no_cloud_title: 'Pas de stockage',
      responsive_title: 'Disponible partout',
      open_source_title: 'Open Source',
      free_title: 'Gratuit',
      no_cloud: 'LessPass régénère vos mots de passe à chaque fois que vous en avez besoin.<br>Aucun stockage sur le cloud n\'est nécessaire',
      responsive: 'LessPass est une application web qui fonctionne<br>sur tous les appareils :<br>ordinateur, smartphone, tablette et smartTV',
      open_source: 'LessPass est open source. Le code source est disponible sur <a href="https://github.com/lesspass/core">Github</a>, vous pouvez l\'auditer',
      free: 'LessPass est gratuit et le sera toujours',
    },
    how_it_works: {
      title: 'Comment fonctionne LessPass&nbsp;?',
      detail: 'LessPass est un gestionnaire de mot de passe qui n\'enregistre pas vos mots de passe. Il les regénère sur la base d\'informations uniques que vous lui fournissez. Vous pouvez donc utiliser LessPass pour créer des mots de passe pour vos différents services internet (Réseaux sociaux, mails, mots de passe serveurs, ...).',
      always_sync: 'Pas besoin de synchronisation',
      always_sync_detail: 'Vous n\'avez plus besoin de synchroniser sur le cloud vos coffres fort pour mots de passe. LessPass est une application web qui dérive vos mots de passe de manière sécurisée.',
      derivation: 'Mathématique et chiffrement',
      derivation_detail: 'LessPass utilise différentes fonctions de dérivation pour transformer vos informations personnelles en un mot de passe unique. Ces transformations sont robustes aux attaques par force brute.',
      self_hosting: 'Auto Hébergement',
      self_hosting_detail: 'Vous pouvez héberger LessPass sur votre serveur :',
    },
    feedback: {
      feedback_1: 'Enfin un outil de sécurité a qui je n\'ai pas besoin de faire confiance.',
      feedback_1_author: 'Édouard Lopez,<br> membre de l\'équipe de LessPass',
      feedback_2: 'Je n\'ai plus besoin d\'un cloud personnel pour gérer mes mots de passe.<br> Une seule phrase secrete et j\'ai accès à mes mots de passe partout.',
      feedback_2_author: 'Guillaume Vincent,<br> créateur de LessPass',
    },
    login: {
      login: 'Connexion',
      Email: 'Email',
      Password: 'Mot de passe',
      Sign_in: 'Se connecter',
      register: 'Inscription',
      logout: 'Déconnexion',
      logout_ok: 'Déconnexion réussie, merci d\'avoir passé du temps sur LessPass',
      welcome: 'Connexion réussie, bienvenue sur LessPass',
      credentials_invalids: 'L\'adresse e-mail et/ou mot de passe sont invalides',
    },
    register: {
      beta: 'Les inscriptions sont pour l\'intant fermées. Pour obtenir une invitation, envoyez nous un <a href="mailto:contact@oslab.fr">email</a>',
    },
  },
};

const browserLanguage = (navigator.language || navigator.browserLanguage).split('-')[0];
const lang = browserLanguage in locales ? browserLanguage : 'en';

Vue.use(I18n, {
  lang,
  locales,
});

