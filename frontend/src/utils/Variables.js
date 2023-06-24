//----------         momentJS         ----------//

import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");

//----------  PERSONNAL INFORMATION  ----------//

export const name = "julien froger";
export const address = "12 route de Brénat 16730 Fléac";
export const phone = "06-50-17-32-57";
export const mail = "contact@histoire-de-vie.fr";
export const licence = "Permis B + Véhicule";
export const dateBirthday = "02-08-1984";
export const birthday = moment(dateBirthday, "DD-MM-YYYY").fromNow(true);
export const dateYear = new Date().getFullYear();
export const copyright = " " + dateYear + " Tous droits réservés";

//----------           SKILL         ----------//

export const maintenance = "Maintenance informatique";
export const network = "Configuration réseau";
export const webFrontEnd = "Développement Front-end";
export const webBackEnd = "Développement Back-end";

//----------     Array Skill Text    ----------//

//     -----     Maintenance Info    -----     //
const textWindows = "Windows";
const textLinux = "Linux";
const textMacosx = "Mac OSX";
const textPrinter = "Réparation & Maintenance copieur/imprimante";
const textOpti = "Optimisation hardware";
const textPreparation = "Préparation poste informatique";
const textRemote = "Assistance à distance";

//     -----  Configuration réseaux  -----     //
const textNetwork = "Installation & configuration équipement réseaux";
const textNas = "Installation & configuration serveur de stockage";
const textFreenas = "Freenas";

//     -----      Développement      -----     //

//     -----        Front-End        -----     //
const textHtml = "HTML 5/CSS 3";
const textSass = "SASS";
const textJs = "JavaScript";
const textVue = "Vue JS";
const textReact = "React";

//     -----         Back-End        -----     //
const textApi = "Conception d’une API REST";
const textUserData = "Gestion des données utilisateurs";
const textDataBase = "Gestion de la base de données";

export const textSkillArray = [
  textWindows,
  textLinux,
  textMacosx,
  textPrinter,
  textOpti,
  textPreparation,
  textRemote,
  textNetwork,
  textNas,
  textFreenas,
  textHtml,
  textSass,
  textJs,
  textVue,
  textReact,
  textApi,
  textUserData,
  textDataBase,
];

//----------      Hobbies      ----------//

export const textTelescope = "Astronomie";
export const textCode = "Code";
export const textPhoto = "Photo";
export const textInformatique = "Informatique";
