import {
  iconBackEnd,
  iconComputer,
  iconFrontEnd,
  iconNetwork
} from "../utils/FontAwesome";

//----------        MOMENT JS        ----------//

import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");

console.log({ iconComputer });

//----------           SKILL         ----------//

export const textSkillArray = [
  {
    title: "Maintenance informatique",
    icon: iconComputer,
    list: [
      {
        category: "Windows",
        className: "textWindows"
      },
      {
        category: "Linux",
        className: "textLinux"
      },
      {
        category: "Mac OSX",
        className: "textMacosx"
      },
      {
        category: "Réparation & Maintenance copieur/imprimante",
        className: "textPrinter"
      },
      {
        category: "Optimisation hardware",
        className: "textOpti"
      },
      {
        category: "Préparation poste informatique",
        className: "textPreparation"
      },
      {
        category: "Assistance à distance",
        className: "textRemote"
      }
    ]
  },
  {
    title: "Configuration réseau",
    icon: iconNetwork,
    list: [
      {
        category: "Installation & configuration équipement réseaux",
        className: "textNetwork"
      },
      {
        category: "Installation & configuration serveur de stockage",
        className: "textNas"
      },
      {
        category: "Freenas",
        className: "textFreenas"
      }
    ]
  },
  {
    title: "Développement Front-end",
    icon: iconFrontEnd,
    list: [
      {
        category: "HTML 5/CSS 3",
        className: "textHtml"
      },
      {
        category: "SASS",
        className: "textSass"
      },
      {
        category: "JavaScript",
        className: "textJs"
      },
      {
        category: "React",
        className: "textReact"
      }
    ]
  },
  {
    title: "Développement Back-end",
    icon: iconBackEnd,
    list: [
      {
        category: "Conception d’une API REST",
        className: "textApi"
      },
      {
        category: "Gestion des données utilisateurs",
        className: "textUserData"
      },
      {
        category: "Gestion de la base de données",
        className: "textDataBase"
      }
    ]
  }
];

//----------  PERSONNAL INFORMATION  ----------//

export const name = "julien froger";
export const address = "12 route de Brénat 16730 Fléac";
export const phone = "06-50-17-32-57";
export const mail = "julien.froger@histoire-de-vie.fr";
export const licence = "Permis B + Véhicule";
export const dateBirthday = "02-08-1984";
export const birthday = moment(dateBirthday, "DD-MM-YYYY").fromNow(true);
// export const dateBirthday = "02-08-1984";
// export const birthday = moment(dateBirthday, "DD-MM-YYYY");
// export const now = moment();
// export let age = now.diff(birthday, "years");
// if (now.format("MM-DD") < birthday.format("MM-DD")) {
//   age--; // Si l'anniversaire n'est pas encore passé, soustraire un an
// }
export const dateYear = new Date().getFullYear();
export const copyright = " " + dateYear + " Tous droits réservés";

//----------      Hobbies      ----------//

export const textTelescope = "Astronomie";
export const textCode = "Code";
export const textPhoto = "Photo";
export const textInformatique = "Informatique";
