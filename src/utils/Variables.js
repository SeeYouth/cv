//----------          IMPORT         ----------//

//----------       Font Awesome      ----------//
import { 
    faBirthdayCake,
    faCar,
    faDatabase,
    faEnvelope,
    faGlobe,
    faHome, 
    faNetworkWired, 
    faPhoneAlt,
    faToolbox
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//----------         momentJS         ----------//

import moment from "moment";
import 'moment/locale/fr';
moment.locale('fr');

//----------------------------------------------//


//----------       FONT AWESOME       ----------//

export const iconHome =      <FontAwesomeIcon icon={ faHome } />;
export const iconMobileAlt = <FontAwesomeIcon icon={ faPhoneAlt } />;
export const iconCar =       <FontAwesomeIcon icon={ faCar } />;
export const iconEnvelope =  <FontAwesomeIcon icon={ faEnvelope } />;
export const iconBirthday =  <FontAwesomeIcon icon={ faBirthdayCake } />;
export const iconComputer =  <FontAwesomeIcon icon={ faToolbox } />;
export const iconNetwork =   <FontAwesomeIcon icon={ faNetworkWired } />;
export const iconFrontEnd =  <FontAwesomeIcon icon={ faGlobe } />;
export const iconBackEnd =   <FontAwesomeIcon icon={ faDatabase } />;

//----------  PERSONNAL INFORMATION  ----------//

export const name =         "julien froger";
export const address =      "12 route de Brénat 16730 Fléac";
export const phone =        "06-50-17-32-57";
export const mail =         "julienfroger16@gmail.com";
export const licence =      "Permis B + Véhicule";
export const dateBirthday = "02-08-1984"
export const birthday =     moment(dateBirthday, "DDMMYYYY").fromNow(true);

//----------           SKILL         ----------//

export const maintenance =  "Maintenance informatique";
export const network =      "Configuration réseau";
export const webFrontEnd =  "Développement Front-end";
export const webBackEnd =   "Développement Back-end";

//----------     Array Skill Text    ----------//

//----------     Maintenance Info    ----------//
const textWindows =     "Windows";
const textLinux =       "Linux";
const textMacosx =      "Mac OSX";
const textPrinter =     "Réparation & Maintenance copieur/imprimante";
const textOpti =        "Optimisation hardware";
const textPreparation = "Préparation poste informatique";
const textRemote =      "Assistance à distance";

//----------  Configuration réseaux  ----------//
const textNetwork = "Installation & configuration équipement réseaux";
const textNas =     "Installation & configuration serveur de stockage";
const textFreenas = "Freenas";

//----------      Développement      ----------//

//----------        Front-End        ----------//
const textHtml =  "HTML 5/CSS 3";
const textSass =  "SASS";
const textJs =    "JavaScript";
const textVue =   "Vue JS";
const textReact = "React";

//----------         Back-End        ----------//
const textApi =      "Conception d’une API REST";
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
    textDataBase
]