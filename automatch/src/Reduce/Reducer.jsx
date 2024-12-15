import { SET_SELECTED_OPTION } from "./action";
const stateInitial = {
    cars : [
       {
           id: 1,
           marque: {
               nom: "Toyota",
               logo: "/LOGO CARS/toyota.png"
           },
           models: [
               {
                   model: "Corolla",
                   anneesDisponibles: [2022, 2023],
                   detailsParAnnee: {
                       2022: {
                           carburant: "Hybride",
                           transmission: "Automatique",
                           puissance: "140 ch",
                           cylindree: "1987 cm³",
                           coffre: "370 L",
                           carrosserie: "Berline",
                           autonomie: "870 km",
                           vitesse: "195 km/h",
                           places: 5,
                           price: "26,000",
                           keyWords: ["famille", "sportif", "modern", "trend"],
                           colors: {
                               bleu: { code: "blue", image: "/CARS Pictures/toyota/corolla/2022/bleu.png" },
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation automatique, sièges en tissu",
                                   aidesConduite: ["Freinage automatique", "Alerte franchissement de ligne"],
                                   multimedia: "Écran tactile avec Bluetooth",
                                   prix: "26,000"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, GPS, caméra 360°",
                                   aidesConduite: ["Aide au stationnement", "Régulateur adaptatif"],
                                   multimedia: "Écran tactile avancé",
                                   prix: "30,000"
                               },
                               luxe: {
                                   description: "Sièges massants premium, toit panoramique, intérieur cuir Nappa",
                                   aidesConduite: ["Pilotage semi-automatique", "Détection des piétons"],
                                   multimedia: "Système audio JBL, écran 12 pouces",
                                   prix: "35,000"
                               }
                           }
                       },
                       2023: {
                           carburant: "Hybride",
                           transmission: "Automatique",
                           puissance: "145 ch",
                           cylindree: "1987 cm³",
                           coffre: "390 L",
                           carrosserie: "Berline",
                           autonomie: "900 km",
                           vitesse: "200 km/h",
                           places: 5,
                           price: "27,000",
                           keyWords: ["famille", "confort", "aventure", "éco"],
                           colors: {
                               blanc: { code: "#FFFFFF", image: "/CARS Pictures/toyota/corolla/2023/blanc.png" },
                               noir: { code: "#000000", image: "/CARS Pictures/toyota/corolla/2023/noir.png" },
                               bleu: { code: "#0000FF", image: "/CARS Pictures/toyota/corolla/2023/bleu.png" },
                               rouge: { code: "red", image: "/CARS Pictures/toyota/corolla/2023/rouge.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation automatique, sièges en tissu",
                                   aidesConduite: ["Freinage automatique", "Régulateur adaptatif"],
                                   multimedia: "Écran tactile avec Bluetooth",
                                   prix: "27,000"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, GPS intégré, caméra de recul",
                                   aidesConduite: ["Aide au stationnement", "Régulateur adaptatif"],
                                   multimedia: "Écran tactile avancé",
                                   prix: "31,000"
                               },
                               luxe: {
                                   description: "Sièges ventilés en cuir Nappa, toit ouvrant, projecteurs LED",
                                   aidesConduite: ["Pilotage semi-automatique", "Détection avancée des piétons"],
                                   multimedia: "Système audio Bose, écran tactile grand format",
                                   prix: "36,000"
                               }
                           }
                       }
                   }
               },
               {
                   model: "RAV4",
                   anneesDisponibles: [2022, 2023],
                   detailsParAnnee: {
                       2022: {
                           carburant: "Hybride",
                           transmission: "Automatique",
                           puissance: "218 ch",
                           cylindree: "2487 cm³",
                           coffre: "580 L",
                           carrosserie: "SUV",
                           autonomie: "1000 km",
                           vitesse: "180 km/h",
                           places: 5,
                           price: "36,000",
                           keyWords: ["aventurier", "familial", "polyvalent"],
                           colors: {
                               blanc: { code: "#FFFFFF", image: "/CARS Pictures/toyota/RAV4/2022/blanc.png" },
                               noir: { code: "#000000", image: "/CARS Pictures/toyota/RAV4/2022/noir.png" },
                               blue: { code: "blue", image: "/CARS Pictures/toyota/RAV4/2022/blue.png" },
                               rouge: { code: "red", image: "/CARS Pictures/toyota/RAV4/2022/rouge.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation bi-zone, sièges en tissu",
                                   aidesConduite: ["Alerte collision", "Régulateur de vitesse"],
                                   multimedia: "Écran 8 pouces avec Bluetooth",
                                   prix: "36,000"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, toit ouvrant électrique",
                                   aidesConduite: ["Aide au stationnement", "Caméra arrière"],
                                   multimedia: "Écran 10 pouces avec navigation intégrée",
                                   prix: "40,000"
                               },
                               luxe: {
                                   description: "Intérieur cuir Nappa, affichage tête haute",
                                   aidesConduite: ["Pilotage semi-autonome", "Caméras 360°"],
                                   multimedia: "Système audio JBL, écran 12 pouces",
                                   prix: "45,000"
                               }
                           }
                       },
                       2023: {
                           carburant: "Hybride",
                           transmission: "Automatique",
                           puissance: "306 ch",
                           cylindree: "2487 cm³",
                           coffre: "520 L",
                           carrosserie: "SUV",
                           autonomie: "1300 km",
                           vitesse: "200 km/h",
                           places: 5,
                           price: "40,000",
                           keyWords: ["éco-responsable", "technologique", "robuste"],
                           colors: {
                               bleu: { code: "#0000FF", image: "/CARS Pictures/toyota/RAV4/2023/bleu.png" },
                               blanc: { code: "#FFFFFF", image: "/CARS Pictures/toyota/RAV4/2023/blanc.png" },
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation bi-zone, sièges en tissu",
                                   aidesConduite: ["Alerte collision", "Régulateur de vitesse adaptatif"],
                                   multimedia: "Écran 8 pouces avec connectivité smartphone",
                                   prix: "40,000"
                               },
                               fullOption: {
                                   description: "Sièges chauffants en cuir, toit panoramique",
                                   aidesConduite: ["Aide au stationnement avancée", "Caméras multiples"],
                                   multimedia: "Écran tactile 10 pouces, navigation premium",
                                   prix: "44,000"
                               },
                               luxe: {
                                   description: "Intérieur en cuir haut de gamme, toit ouvrant électrique",
                                   aidesConduite: ["Pilotage autonome niveau 2", "Détection avancée des cyclistes"],
                                   multimedia: "Système audio premium, écran 12 pouces avec assistant vocal",
                                   prix: "50,000"
                               }
                           }
                       }
                   }
               }
   
   
           ]
       },
       {
           id: 2,
           marque: {
               nom: "Honda",
               logo: "/LOGO CARS/honda.png"
           },
           models: [
               {
                   model: "Civic",
                   anneesDisponibles: [2022, 2023],
                   detailsParAnnee: {
                       2022: {
                           carburant: "Hybride",
                           transmission: "Automatique",
                           puissance: "184 ch",
                           cylindree: "1993 cm³",
                           coffre: "410 L",
                           carrosserie: "Berline",
                           autonomie: "850 km",
                           vitesse: "190 km/h",
                           places: 5,
                           price: "28,000",
                           keyWords: ["fiable", "sportif", "économique"],
                           colors: {
                               blanc: { code: "#FFFFFF", image: "/CARS Pictures/honda/civic/2022/blanc.png" },
                               rouge: { code: "#FF0000", image: "/CARS Pictures/honda/civic/2022/rouge.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation manuelle, sièges en tissu",
                                   aidesConduite: ["Freinage d'urgence", "Alerte de franchissement de ligne"],
                                   multimedia: "Écran 7 pouces avec connectivité smartphone",
                                   prix: "28,000"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, toit ouvrant électrique",
                                   aidesConduite: ["Caméra de recul", "Régulateur de vitesse adaptatif"],
                                   multimedia: "Écran tactile 9 pouces, GPS intégré",
                                   prix: "32,000"
                               },
                               luxe: {
                                   description: "Sièges ventilés en cuir, toit panoramique",
                                   aidesConduite: ["Pilotage semi-autonome", "Détection des piétons"],
                                   multimedia: "Système audio premium, écran tactile 12 pouces",
                                   prix: "37,000"
                               }
                           }
                       },
                       2023: {
                           carburant: "Hybride",
                           transmission: "Automatique",
                           puissance: "200 ch",
                           cylindree: "1993 cm³",
                           coffre: "420 L",
                           carrosserie: "Berline",
                           autonomie: "950 km",
                           vitesse: "200 km/h",
                           places: 5,
                           price: "30,000",
                           keyWords: ["innovant", "familial", "polyvalent"],
                           colors: {
                               rouge: { code: "#FF0000", image: "/CARS Pictures/honda/civic/2023/rouge.png" },
                               gris: { code: "#808080", image: "/CARS Pictures/honda/civic/2023/gris.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation automatique, sièges en tissu",
                                   aidesConduite: ["Freinage automatique", "Alerte de collision"],
                                   multimedia: "Écran tactile avec connectivité smartphone",
                                   prix: "30,000"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, GPS, caméras périphériques",
                                   aidesConduite: ["Régulateur de vitesse adaptatif", "Assistance au stationnement"],
                                   multimedia: "Écran tactile 10 pouces, système audio avancé",
                                   prix: "34,000"
                               },
                               luxe: {
                                   description: "Intérieur cuir premium, toit ouvrant panoramique",
                                   aidesConduite: ["Pilotage autonome niveau 2", "Détection des cyclistes"],
                                   multimedia: "Système audio Bose, écran tactile grand format",
                                   prix: "40,000"
                               }
                           }
                       }
                   }
               },
               {
                   model: "CR-V",
                   anneesDisponibles: [2022, 2023],
                   detailsParAnnee: {
                       2022: {
                           carburant: "Hybride",
                           transmission: "Automatique",
                           puissance: "184 ch",
                           cylindree: "1993 cm³",
                           coffre: "561 L",
                           carrosserie: "SUV",
                           autonomie: "950 km",
                           vitesse: "185 km/h",
                           places: 5,
                           price: "33,000",
                           keyWords: ["aventure", "famille", "robuste"],
                           colors: {
                               blanc: { code: "#FFFFFF", image: "/CARS Pictures/honda/CR-V/2022/blanc.png" },
                               bleu: { code: "blue", image: "/CARS Pictures/honda/CR-V/2022/bleu.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation bi-zone, sièges en tissu",
                                   aidesConduite: ["Freinage d'urgence", "Alerte de collision frontale"],
                                   multimedia: "Écran tactile 8 pouces avec Bluetooth",
                                   prix: "33,000"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, caméra arrière, toit ouvrant",
                                   aidesConduite: ["Aide au stationnement", "Régulateur de vitesse adaptatif"],
                                   multimedia: "Écran tactile 10 pouces avec GPS",
                                   prix: "37,000"
                               },
                               luxe: {
                                   description: "Sièges ventilés en cuir, affichage tête haute",
                                   aidesConduite: ["Pilotage semi-autonome", "Caméra 360°"],
                                   multimedia: "Système audio premium, écran tactile 12 pouces",
                                   prix: "43,000"
                               }
                           }
                       },
                       2023: {
                           carburant: "Hybride",
                           transmission: "Automatique",
                           puissance: "204 ch",
                           cylindree: "1993 cm³",
                           coffre: "580 L",
                           carrosserie: "SUV",
                           autonomie: "1200 km",
                           vitesse: "190 km/h",
                           places: 5,
                           price: "35,000",
                           keyWords: ["confort", "écologique", "haut de gamme"],
                           colors: {
                               rouge: { code: "#FF0000", image: "/CARS Pictures/honda/CR-V/2023/rouge.png" },
                               bleu: { code: "#0000FF", image: "/CARS Pictures/honda/CR-V/2023/bleu.png" },
                               blanc: { code: "#FFFFFF", image: "/CARS Pictures/honda/CR-V/2023/blanc.png" },
                               noir: { code: "#000000", image: "/CARS Pictures/honda/CR-V/2023/noir.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation automatique, sièges en tissu premium",
                                   aidesConduite: ["Freinage automatique", "Alerte de franchissement de ligne"],
                                   multimedia: "Écran tactile 8 pouces avec connectivité smartphone",
                                   prix: "35,000"
                               },
                               fullOption: {
                                   description: "Intérieur cuir, toit ouvrant panoramique",
                                   aidesConduite: ["Aide au stationnement avancée", "Caméras multiples"],
                                   multimedia: "Écran tactile 10 pouces, système audio avancé",
                                   prix: "40,000"
                               },
                               luxe: {
                                   description: "Intérieur en cuir premium, sièges massants, affichage tête haute",
                                   aidesConduite: ["Pilotage autonome niveau 2", "Détection avancée des cyclistes"],
                                   multimedia: "Système audio Bose, écran 12 pouces avec assistant vocal",
                                   prix: "47,000"
                               }
                           }
                       }
                   }
               }
   
           ]
       },
       {
           id: 3,
           marque: {
               nom: "Ford",
               logo: "/LOGO CARS/ford.png"
           },
           models: [
               {
                   model: "Ranger",
                   anneesDisponibles: [2021, 2024],
                   detailsParAnnee: {
                       2021: {
                           carburant: "Diesel",
                           transmission: "Manuelle",
                           puissance: "160 ch",
                           cylindree: "1996 cm³",
                           coffre: "1150 L",
                           carrosserie: "Pick-up",
                           autonomie: "850 km",
                           vitesse: "175 km/h",
                           places: 5,
                           price: "33,000",
                           keyWords: ["robuste", "travail", "fiable"],
                           colors: {
                               noir: { code: "#000000", image: "/CARS Pictures/ford/ranger/2021/noir.png" },
                               gris: { code: "#808080", image: "/CARS Pictures/ford/ranger/2021/gris.png" },
                               blanc: { code: "#FFFFFF", image: "/CARS Pictures/ford/ranger/2021/blanc.png" },
                               bleu: { code: "blue", image: "/CARS Pictures/ford/ranger/2021/bleu.png" },
                               orange: { code: "orange", image: "/CARS Pictures/ford/ranger/2021/orange.png" },
                               rouge: { code: "red", image: "/CARS Pictures/ford/ranger/2021/rouge.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Sièges en tissu, climatisation manuelle",
                                   aidesConduite: ["Régulateur de vitesse", "Freinage d'urgence"],
                                   multimedia: "Écran tactile 7 pouces avec Bluetooth",
                                   prix: "33,000"
                               },
                               fullOption: {
                                   description: "Intérieur cuir, toit ouvrant manuel",
                                   aidesConduite: ["Caméra de recul", "Détection de piétons"],
                                   multimedia: "Écran tactile 9 pouces, GPS intégré",
                                   prix: "37,000"
                               },
                               luxe: {
                                   description: "Sièges chauffants en cuir, affichage tête haute",
                                   aidesConduite: ["Caméra 360°", "Pilotage semi-autonome"],
                                   multimedia: "Écran tactile 12 pouces, système audio premium",
                                   prix: "42,000"
                               }
                           }
                       },
                       2024: {
                           carburant: "Diesel",
                           transmission: "Automatique",
                           puissance: "220 ch",
                           cylindree: "1996 cm³",
                           coffre: "1250 L",
                           carrosserie: "Pick-up",
                           autonomie: "950 km",
                           vitesse: "195 km/h",
                           places: 5,
                           price: "40,000",
                           keyWords: ["puissant", "moderne", "polyvalent"],
                           colors: {
                               rouge: { code: "#FF0000", image: "/CARS Pictures/ford/ranger/2024/rouge.png" },
                               bleu: { code: "#0000FF", image: "/CARS Pictures/ford/ranger/2024/bleu.png" },
                               gris: { code: "#808080", image: "/CARS Pictures/ford/ranger/2024/gris.png" },
                               blanc: { code: "#FFFFFF", image: "/CARS Pictures/ford/ranger/2024/noir.png" },
                               noir: { code: "#000000", image: "/CARS Pictures/ford/ranger/2024/blanc.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation automatique, sièges en tissu renforcé",
                                   aidesConduite: ["Freinage automatique", "Aide au démarrage en côte"],
                                   multimedia: "Écran tactile 8 pouces avec connectivité smartphone",
                                   prix: "40,000"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, toit ouvrant panoramique",
                                   aidesConduite: ["Caméras périphériques", "Détection d'angles morts"],
                                   multimedia: "Écran tactile 10 pouces, GPS intégré",
                                   prix: "44,000"
                               },
                               luxe: {
                                   description: "Intérieur en cuir premium, sièges massants",
                                   aidesConduite: ["Pilotage autonome niveau 2", "Détection avancée des cyclistes"],
                                   multimedia: "Système audio Harman Kardon, écran 12 pouces",
                                   prix: "50,000"
                               }
                           }
                       }
                   }
               },
               {
                   model: "Mustang",
                   anneesDisponibles: [2021, 2024],
                   detailsParAnnee: {
                       2021: {
                           carburant: "Essence",
                           transmission: "Manuelle",
                           puissance: "450 ch",
                           cylindree: "5026 cm³",
                           coffre: "382 L",
                           carrosserie: "Coupé",
                           autonomie: "500 km",
                           vitesse: "250 km/h",
                           places: 4,
                           price: "45,000",
                           keyWords: ["sportif", "puissant", "musclé"],
                           colors: {
                               gris: { code: "gray", image: "/CARS Pictures/ford/mustang/2021/gris.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Sièges en tissu, climatisation manuelle",
                                   aidesConduite: ["Contrôle de stabilité", "Alerte de collision"],
                                   multimedia: "Écran tactile 8 pouces avec Bluetooth",
                                   prix: "45,000"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, toit ouvrant panoramique",
                                   aidesConduite: ["Caméra de recul", "Détection de piétons"],
                                   multimedia: "Écran tactile 10 pouces, GPS intégré",
                                   prix: "50,000"
                               },
                               luxe: {
                                   description: "Sièges ventilés en cuir, affichage tête haute",
                                   aidesConduite: ["Caméra 360°", "Pilotage semi-autonome"],
                                   multimedia: "Écran tactile 12 pouces, système audio premium",
                                   prix: "55,000"
                               }
                           }
                       },
                       2024: {
                           carburant: "Essence",
                           transmission: "Automatique",
                           puissance: "480 ch",
                           cylindree: "5026 cm³",
                           coffre: "400 L",
                           carrosserie: "Coupé",
                           autonomie: "520 km",
                           vitesse: "260 km/h",
                           places: 4,
                           price: "50,000",
                           keyWords: ["haut de gamme", "sportif", "performance"],
                           colors: {
                               blanc: { code: "#FFFFFF", image: "/CARS Pictures/ford/mustang/2024/blanc.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Sièges en tissu sport, climatisation automatique",
                                   aidesConduite: ["Régulateur de vitesse", "Alerte de franchissement de ligne"],
                                   multimedia: "Écran tactile 9 pouces avec connectivité smartphone",
                                   prix: "50,000"
                               },
                               fullOption: {
                                   description: "Sièges en cuir chauffants, toit ouvrant",
                                   aidesConduite: ["Détection des angles morts", "Aide au stationnement"],
                                   multimedia: "Écran tactile 10 pouces, système audio B&O",
                                   prix: "55,000"
                               },
                               luxe: {
                                   description: "Sièges ventilés, intérieur cuir premium",
                                   aidesConduite: ["Pilotage semi-autonome", "Système de détection des piétons"],
                                   multimedia: "Écran tactile 12 pouces, système audio Bang & Olufsen",
                                   prix: "60,000"
                               }
                           }
                       }
                   }
               }
   
   
           ]
       },
       {
           id: 4,
           marque: {
               nom: "Kia",
               logo: "/LOGO CARS/kia.png"
           },
           models: [
               {
                   model: "Ceed",
                   anneesDisponibles: [2021, 2022],
                   detailsParAnnee: {
                       2021: {
                           carburant: "Essence",
                           transmission: "Manuelle",
                           puissance: "120 ch",
                           cylindree: "1591 cm³",
                           coffre: "395 L",
                           carrosserie: "Berline",
                           autonomie: "750 km",
                           vitesse: "190 km/h",
                           places: 5,
                           price: "22,000",
                           keyWords: ["compact", "économique", "fiable"],
                           colors: {
                               blanc: { code: "#FFFFFF", image: "/CARS Pictures/kia/Ceed/2021/blanc.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation manuelle, sièges en tissu",
                                   aidesConduite: ["Assistance au freinage d'urgence", "Alerte de franchissement de ligne"],
                                   multimedia: "Écran tactile 7 pouces avec Bluetooth",
                                   prix: "22,000"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, caméra de recul",
                                   aidesConduite: ["Aide au stationnement", "Régulateur de vitesse adaptatif"],
                                   multimedia: "Écran tactile 8 pouces, GPS intégré",
                                   prix: "26,000"
                               },
                               luxe: {
                                   description: "Sièges chauffants en cuir, toit panoramique",
                                   aidesConduite: ["Aide au maintien de voie", "Détection des piétons"],
                                   multimedia: "Système audio premium, écran tactile 10 pouces",
                                   prix: "30,000"
                               }
                           }
                       },
                       2022: {
                           carburant: "Diesel",
                           transmission: "Automatique",
                           puissance: "136 ch",
                           cylindree: "1598 cm³",
                           coffre: "405 L",
                           carrosserie: "Berline",
                           autonomie: "800 km",
                           vitesse: "200 km/h",
                           places: 5,
                           price: "24,000",
                           keyWords: ["confort", "économique", "familial"],
                           colors: {
                               orange: { code: "orange", image: "/CARS Pictures/kia/Ceed/2022/orange.png" },
                               gris: { code: "#808080", image: "/CARS Pictures/kia/Ceed/2022/gris.png" },
                               noir: { code: "#000000", image: "/CARS Pictures/kia/Ceed/2022/noir.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation automatique, sièges en tissu",
                                   aidesConduite: ["Freinage automatique", "Régulateur de vitesse"],
                                   multimedia: "Écran 7 pouces avec connectivité smartphone",
                                   prix: "24,000"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, GPS, caméra de recul",
                                   aidesConduite: ["Aide au stationnement", "Régulateur adaptatif"],
                                   multimedia: "Écran tactile 8 pouces, système audio avancé",
                                   prix: "28,000"
                               },
                               luxe: {
                                   description: "Sièges ventilés, intérieur cuir premium",
                                   aidesConduite: ["Pilotage semi-automatique", "Détection des piétons"],
                                   multimedia: "Système audio JBL, écran 12 pouces",
                                   prix: "32,000"
                               }
                           }
                       }
                   }
               },
               {
                   model: "Sportage",
                   anneesDisponibles: [2021, 2022, 2023],
                   detailsParAnnee: {
                       2021: {
                           carburant: "Essence",
                           transmission: "Manuelle",
                           puissance: "150 ch",
                           cylindree: "1999 cm³",
                           coffre: "491 L",
                           carrosserie: "SUV",
                           autonomie: "600 km",
                           vitesse: "200 km/h",
                           places: 5,
                           price: "30,000",
                           keyWords: ["SUV", "familial", "confort"],
                           colors: {
                               blanc: { code: "#FFFFFF", image: "/CARS Pictures/kia/Sportage/2021/blanc.png" },
                               rouge: { code: "red", image: "/CARS Pictures/kia/Sportage/2021/rouge.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation automatique, sièges en tissu",
                                   aidesConduite: ["Freinage automatique", "Alerte de franchissement de ligne"],
                                   multimedia: "Écran tactile 7 pouces avec Bluetooth",
                                   prix: "30,000"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, caméra de recul",
                                   aidesConduite: ["Régulateur adaptatif", "Assistance au stationnement"],
                                   multimedia: "Écran tactile 8 pouces, GPS intégré",
                                   prix: "34,000"
                               },
                               luxe: {
                                   description: "Sièges ventilés en cuir, toit panoramique",
                                   aidesConduite: ["Pilotage semi-automatique", "Détection des piétons"],
                                   multimedia: "Système audio premium, écran tactile grand format",
                                   prix: "38,000"
                               }
                           }
                       },
                       2022: {
                           carburant: "Hybride",
                           transmission: "Automatique",
                           puissance: "180 ch",
                           cylindree: "1999 cm³",
                           coffre: "500 L",
                           carrosserie: "SUV",
                           autonomie: "800 km",
                           vitesse: "210 km/h",
                           places: 5,
                           price: "33,000",
                           keyWords: ["éco", "familial", "performant"],
                           colors: {
                               blanc: { code: "#FFFFFF", image: "/CARS Pictures/kia/Sportage/2022/blanc.png" },
                               rouge: { code: "#FF0000", image: "/CARS Pictures/kia/Sportage/2022/rouge.png" },
                               gris: { code: "#808080", image: "/CARS Pictures/kia/Sportage/2022/gris.png" },
                               bleu: { code: "blue", image: "/CARS Pictures/kia/Sportage/2022/bleu.png" },
                               noir: { code: "#000000", image: "/CARS Pictures/kia/Sportage/2022/noir.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation automatique, sièges en tissu",
                                   aidesConduite: ["Freinage d'urgence", "Régulateur adaptatif"],
                                   multimedia: "Écran tactile 7 pouces avec connectivité Bluetooth",
                                   prix: "33,000"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, GPS, caméra 360°",
                                   aidesConduite: ["Aide au stationnement", "Assistance au maintien de voie"],
                                   multimedia: "Écran tactile 10 pouces, système audio avancé",
                                   prix: "37,000"
                               },
                               luxe: {
                                   description: "Toit ouvrant panoramique, sièges chauffants en cuir",
                                   aidesConduite: ["Pilotage autonome", "Détection des piétons et cyclistes"],
                                   multimedia: "Système audio Bose, écran tactile grand format",
                                   prix: "42,000"
                               }
                           }
                       },
                       2023: {
                           carburant: "Hybride",
                           transmission: "Automatique",
                           puissance: "200 ch",
                           cylindree: "1999 cm³",
                           coffre: "510 L",
                           carrosserie: "SUV",
                           autonomie: "900 km",
                           vitesse: "220 km/h",
                           places: 5,
                           price: "36,000",
                           keyWords: ["innovant", "familial", "performance"],
                           colors: {
                               noir: { code: "#000000", image: "/CARS Pictures/kia/Sportage/2023/noir.png" },
                               bleu: { code: "#0000FF", image: "/CARS Pictures/kia/Sportage/2023/bleu.png" },
                               gris: { code: "#808080", image: "/CARS Pictures/kia/Sportage/2023/gris.png" },
                               blanc: { code: "#FFFFFF", image: "/CARS Pictures/kia/Sportage/2023/blanc.png" },
                               rouge: { code: "red", image: "/CARS Pictures/kia/Sportage/2023/rouge.png" },
                               vert: { code: "green", image: "/CARS Pictures/kia/Sportage/2023/vert.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation automatique, sièges en tissu",
                                   aidesConduite: ["Régulateur adaptatif", "Aide au stationnement"],
                                   multimedia: "Écran tactile 8 pouces, connectivité Bluetooth",
                                   prix: "36,000"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, caméra de recul, GPS intégré",
                                   aidesConduite: ["Régulateur adaptatif", "Aide au stationnement"],
                                   multimedia: "Écran tactile 10 pouces, système audio avancé",
                                   prix: "40,000"
                               },
                               luxe: {
                                   description: "Sièges ventilés, toit ouvrant panoramique",
                                   aidesConduite: ["Pilotage semi-automatique", "Détection des piétons et cyclistes"],
                                   multimedia: "Système audio premium, écran tactile grand format",
                                   prix: "45,000"
                               }
                           }
                       }
                   }
               }
           ]
       },
       {
           id: 5,
           marque: {
               nom: "Dacia",
               logo: "/LOGO CARS/Dacia.png"
           },
           models: [
               {
                   model: "Sandero",
                   anneesDisponibles: [2022, 2023],
                   detailsParAnnee: {
                       2022: {
                           carburant: "Essence",
                           transmission: "Manuelle",
                           puissance: "90 ch",
                           cylindree: "1197 cm³",
                           coffre: "320 L",
                           carrosserie: "Compacte",
                           autonomie: "600 km",
                           vitesse: "170 km/h",
                           places: 5,
                           price: "12,000",
                           keyWords: ["abordable", "pratique", "compact"],
                           colors: {
                               blanc: { code: "#FFFFFF", image: "url_to_blanc_image_2022.png" },
                               rouge: { code: "#FF0000", image: "url_to_rouge_image_2022.png" },
                               gris: { code: "#808080", image: "url_to_gris_image_2022.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation manuelle, sièges en tissu",
                                   aidesConduite: ["Assistance au freinage d'urgence", "Alerte de franchissement de ligne"],
                                   multimedia: "Radio avec connectivité Bluetooth",
                                   prix: "12,000"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, caméra de recul",
                                   aidesConduite: ["Aide au stationnement", "Régulateur de vitesse"],
                                   multimedia: "Écran tactile 7 pouces, GPS intégré",
                                   prix: "15,000"
                               },
                               luxe: {
                                   description: "Toit ouvrant, sièges chauffants",
                                   aidesConduite: ["Pilotage semi-automatique", "Détection des piétons"],
                                   multimedia: "Système audio avancé, écran tactile 9 pouces",
                                   prix: "18,000"
                               }
                           }
                       },
                       2023: {
                           carburant: "Diesel",
                           transmission: "Automatique",
                           puissance: "110 ch",
                           cylindree: "1461 cm³",
                           coffre: "350 L",
                           carrosserie: "Compacte",
                           autonomie: "700 km",
                           vitesse: "180 km/h",
                           places: 5,
                           price: "14,000",
                           keyWords: ["économique", "familial", "pratique"],
                           colors: {
                               noir: { code: "#000000", image: "url_to_noir_image_2023.png" },
                               bleu: { code: "#0000FF", image: "url_to_bleu_image_2023.png" },
                               gris: { code: "#808080", image: "url_to_gris_image_2023.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation manuelle, sièges en tissu",
                                   aidesConduite: ["Régulateur de vitesse", "Alerte de franchissement de ligne"],
                                   multimedia: "Radio, Bluetooth",
                                   prix: "14,000"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, caméra de recul, GPS intégré",
                                   aidesConduite: ["Régulateur adaptatif", "Aide au stationnement"],
                                   multimedia: "Écran tactile 8 pouces, système audio avancé",
                                   prix: "17,000"
                               },
                               luxe: {
                                   description: "Sièges chauffants, toit panoramique",
                                   aidesConduite: ["Pilotage semi-automatique", "Détection des piétons et cyclistes"],
                                   multimedia: "Système audio premium, écran tactile 10 pouces",
                                   prix: "20,000"
                               }
                           }
                       }
                   }
               },
               {
                   model: "Duster",
                   anneesDisponibles: [2021, 2022],
                   detailsParAnnee: {
                       2021: {
                           carburant: "Essence",
                           transmission: "Manuelle",
                           puissance: "130 ch",
                           cylindree: "1598 cm³",
                           coffre: "445 L",
                           carrosserie: "SUV",
                           autonomie: "700 km",
                           vitesse: "180 km/h",
                           places: 5,
                           price: "18,000",
                           keyWords: ["SUV", "familial", "aventureux"],
                           colors: {
                               blanc: { code: "#FFFFFF", image: "url_to_blanc_image_2021.png" },
                               gris: { code: "#808080", image: "url_to_gris_image_2021.png" },
                               noir: { code: "#000000", image: "url_to_noir_image_2021.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation manuelle, sièges en tissu",
                                   aidesConduite: ["Alerte de franchissement de ligne", "Assistance au freinage d'urgence"],
                                   multimedia: "Écran tactile 7 pouces, Bluetooth",
                                   prix: "18,000"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, caméra de recul, GPS intégré",
                                   aidesConduite: ["Régulateur de vitesse", "Aide au stationnement"],
                                   multimedia: "Écran tactile 8 pouces, système audio avancé",
                                   prix: "22,000"
                               },
                               luxe: {
                                   description: "Sièges chauffants en cuir, toit panoramique, radar de recul",
                                   aidesConduite: ["Pilotage semi-automatique", "Détection des piétons"],
                                   multimedia: "Système audio premium, écran tactile 10 pouces",
                                   prix: "25,000"
                               }
                           }
                       },
                       2022: {
                           carburant: "Diesel",
                           transmission: "Automatique",
                           puissance: "115 ch",
                           cylindree: "1461 cm³",
                           coffre: "460 L",
                           carrosserie: "SUV",
                           autonomie: "800 km",
                           vitesse: "190 km/h",
                           places: 5,
                           price: "19,500",
                           keyWords: ["confort", "économique", "pratique"],
                           colors: {
                               bleu: { code: "#0000FF", image: "url_to_bleu_image_2022.png" },
                               rouge: { code: "#FF0000", image: "url_to_rouge_image_2022.png" },
                               gris: { code: "#808080", image: "url_to_gris_image_2022.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation automatique, sièges en tissu",
                                   aidesConduite: ["Régulateur de vitesse", "Freinage automatique"],
                                   multimedia: "Écran tactile 7 pouces, Bluetooth",
                                   prix: "19,500"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, caméra 360°, GPS",
                                   aidesConduite: ["Aide au stationnement", "Régulateur adaptatif"],
                                   multimedia: "Écran tactile 8 pouces, système audio avancé",
                                   prix: "23,000"
                               },
                               luxe: {
                                   description: "Sièges ventilés, intérieur cuir premium, toit ouvrant",
                                   aidesConduite: ["Pilotage semi-automatique", "Détection avancée des piétons"],
                                   multimedia: "Système audio Bose, écran tactile 10 pouces",
                                   prix: "27,000"
                               }
                           }
                       }
                   }
               }
           ]
       },
       {
           id: 6,
           marque: {
               nom: "Hyundai",
               logo: "/LOGO CARS/hyundai.png"
           },
           models: [
               {
                   model: "Tucson",
                   anneesDisponibles: [2021, 2022],
                   detailsParAnnee: {
                       2021: {
                           carburant: "Essence",
                           transmission: "Manuelle",
                           puissance: "150 ch",
                           cylindree: "1591 cm³",
                           coffre: "513 L",
                           carrosserie: "SUV",
                           autonomie: "750 km",
                           vitesse: "200 km/h",
                           places: 5,
                           price: "28,000",
                           keyWords: ["SUV", "moderne", "familial"],
                           colors: {
                               blanc: { code: "#FFFFFF", image: "/CARS Pictures/hyundai/Tucson/2021/blanc.png" },
                               gris: { code: "#808080", image: "/CARS Pictures/hyundai/Tucson/2021/gris.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation automatique, sièges en tissu",
                                   aidesConduite: ["Freinage d'urgence", "Alerte de franchissement de ligne"],
                                   multimedia: "Écran tactile 8 pouces, Bluetooth",
                                   prix: "28,000"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, caméra de recul, GPS intégré",
                                   aidesConduite: ["Aide au stationnement", "Régulateur de vitesse adaptatif"],
                                   multimedia: "Écran tactile 10 pouces, système audio premium",
                                   prix: "32,000"
                               },
                               luxe: {
                                   description: "Sièges ventilés en cuir, toit panoramique",
                                   aidesConduite: ["Pilotage semi-automatique", "Détection des piétons"],
                                   multimedia: "Système audio Bose, écran tactile 12 pouces",
                                   prix: "36,000"
                               }
                           }
                       },
                       2022: {
                           carburant: "Hybride",
                           transmission: "Automatique",
                           puissance: "180 ch",
                           cylindree: "1580 cm³",
                           coffre: "520 L",
                           carrosserie: "SUV",
                           autonomie: "800 km",
                           vitesse: "210 km/h",
                           places: 5,
                           price: "30,000",
                           keyWords: ["éco", "confort", "technologique"],
                           colors: {
                               rouge: { code: "#FF0000", image: "/CARS Pictures/hyundai/Tucson/2022/rouge.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation automatique, sièges en tissu",
                                   aidesConduite: ["Alerte de collision", "Régulateur de vitesse adaptatif"],
                                   multimedia: "Écran tactile 8 pouces, connectivité smartphone",
                                   prix: "30,000"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, GPS, caméra de recul",
                                   aidesConduite: ["Aide au stationnement", "Assistance au freinage d'urgence"],
                                   multimedia: "Écran tactile 10 pouces, système audio avancé",
                                   prix: "34,000"
                               },
                               luxe: {
                                   description: "Intérieur cuir premium, toit ouvrant panoramique",
                                   aidesConduite: ["Pilotage semi-automatique", "Détection des piétons et cyclistes"],
                                   multimedia: "Système audio Harman Kardon, écran tactile grand format",
                                   prix: "38,000"
                               }
                           }
                       }
                   }
               },
               {
                   model: "i30",
                   anneesDisponibles: [2021, 2022],
                   detailsParAnnee: {
                       2021: {
                           carburant: "Essence",
                           transmission: "Manuelle",
                           puissance: "136 ch",
                           cylindree: "1598 cm³",
                           coffre: "395 L",
                           carrosserie: "Hatchback",
                           autonomie: "650 km",
                           vitesse: "190 km/h",
                           places: 5,
                           price: "22,500",
                           keyWords: ["compact", "économique", "design"],
                           colors: {
                               blanc: { code: "#FFFFFF", image: "/CARS Pictures/hyundai/i30/2021/blanc.png" },
                               rouge: { code: "#FF0000", image: "/CARS Pictures/hyundai/i30/2021/rouge.png" },
                               noir: { code: "#000000", image: "/CARS Pictures/hyundai/i30/2021/noir.png" },
                               bleu: { code: "#000000", image: "/CARS Pictures/hyundai/i30/2021/bleu.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation manuelle, sièges en tissu",
                                   aidesConduite: ["Freinage automatique", "Alerte de franchissement de ligne"],
                                   multimedia: "Écran tactile 7 pouces, Bluetooth",
                                   prix: "22,500"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, GPS, caméra de recul",
                                   aidesConduite: ["Aide au stationnement", "Régulateur de vitesse adaptatif"],
                                   multimedia: "Écran tactile 8 pouces, système audio premium",
                                   prix: "26,500"
                               },
                               luxe: {
                                   description: "Sièges chauffants en cuir, toit panoramique",
                                   aidesConduite: ["Pilotage semi-automatique", "Détection des piétons"],
                                   multimedia: "Système audio Bose, écran tactile 10 pouces",
                                   prix: "30,000"
                               }
                           }
                       },
                       2022: {
                           carburant: "Hybride",
                           transmission: "Automatique",
                           puissance: "150 ch",
                           cylindree: "1600 cm³",
                           coffre: "400 L",
                           carrosserie: "Hatchback",
                           autonomie: "700 km",
                           vitesse: "200 km/h",
                           places: 5,
                           price: "25,000",
                           keyWords: ["éco", "confort", "innovant"],
                           colors: {
                               bleu: { code: "#0000FF", image: "url_to_bleu_image_2022.png" },
                               gris: { code: "#808080", image: "url_to_gris_image_2022.png" },
                               argent: { code: "#C0C0C0", image: "url_to_argent_image_2022.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation automatique, sièges en tissu",
                                   aidesConduite: ["Régulateur de vitesse adaptatif", "Alerte de collision avant"],
                                   multimedia: "Écran tactile 7 pouces avec connectivité smartphone",
                                   prix: "25,000"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, caméra 360°, GPS",
                                   aidesConduite: ["Aide au stationnement", "Pilotage semi-automatique"],
                                   multimedia: "Écran tactile 9 pouces, système audio JBL",
                                   prix: "29,000"
                               },
                               luxe: {
                                   description: "Sièges ventilés en cuir, toit panoramique, intérieur premium",
                                   aidesConduite: ["Détection des piétons", "Assistance au freinage"],
                                   multimedia: "Système audio Harman Kardon, écran tactile 12 pouces",
                                   prix: "33,000"
                               }
                           }
                       }
                   }
               }
           ]
       },
       {
           id: 7,
           marque: {
               nom: "Tesla",
               logo: "/LOGO CARS/tesla.png"
           },
           models: [
               {
                   model: "Model 3",
                   anneesDisponibles: [2022, 2023],
                   detailsParAnnee: {
                       2022: {
                           carburant: "Électrique",
                           transmission: "Automatique",
                           puissance: "283 ch",
                           cylindree: "N/A",
                           coffre: "425 L",
                           carrosserie: "Berline",
                           autonomie: "590 km",
                           vitesse: "225 km/h",
                           places: 5,
                           price: "45,000",
                           keyWords: ["électrique", "innovant", "technologique"],
                           colors: {
                               noir: { code: "#FFFFFF", image: "/CARS Pictures/tesla/model 3/2022/blanc.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation automatique, sièges en tissu",
                                   aidesConduite: ["Freinage d'urgence automatique", "Alerte de collision"],
                                   multimedia: "Écran tactile 15 pouces avec connectivité smartphone",
                                   prix: "45,000"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, toit panoramique, caméra 360°",
                                   aidesConduite: ["Pilotage semi-autonome", "Assistance au stationnement"],
                                   multimedia: "Système audio premium, écran tactile 15 pouces",
                                   prix: "52,000"
                               },
                               luxe: {
                                   description: "Sièges ventilés en cuir, intérieur premium, système audio haut de gamme",
                                   aidesConduite: ["Conduite autonome", "Détection avancée des piétons"],
                                   multimedia: "Écran tactile 15 pouces, audio premium",
                                   prix: "58,000"
                               }
                           }
                       },
                       2023: {
                           carburant: "Électrique",
                           transmission: "Automatique",
                           puissance: "283 ch",
                           cylindree: "N/A",
                           coffre: "425 L",
                           carrosserie: "Berline",
                           autonomie: "620 km",
                           vitesse: "230 km/h",
                           places: 5,
                           price: "47,000",
                           keyWords: ["performance", "haut de gamme", "autonomie"],
                           colors: {
                               blanc: { code: "#FFFFFF", image: "/CARS Pictures/tesla/model 3/2023/blanc.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation automatique, sièges en tissu",
                                   aidesConduite: ["Freinage d'urgence automatique", "Alerte de collision"],
                                   multimedia: "Écran tactile 15 pouces avec connectivité smartphone",
                                   prix: "47,000"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, caméra 360°, toit panoramique",
                                   aidesConduite: ["Pilotage semi-autonome", "Régulateur adaptatif"],
                                   multimedia: "Système audio haut de gamme, écran tactile 15 pouces",
                                   prix: "54,000"
                               },
                               luxe: {
                                   description: "Sièges chauffants et ventilés, intérieur cuir premium",
                                   aidesConduite: ["Pilotage autonome", "Détection des piétons et cyclistes"],
                                   multimedia: "Système audio premium, écran tactile 15 pouces, son surround",
                                   prix: "60,000"
                               }
                           }
                       }
                   }
               }
           ]
       },
       {
           id: 8,
           marque: {
               nom: "BMW",
               logo: "/LOGO CARS/bmw.png"
           },
           models: [
               {
                   model: "Serie 3",
                   anneesDisponibles: [2021, 2022],
                   detailsParAnnee: {
                       2021: {
                           carburant: "Essence",
                           transmission: "Manuelle",
                           puissance: "184 ch",
                           cylindree: "1998 cm³",
                           coffre: "480 L",
                           carrosserie: "Berline",
                           autonomie: "750 km",
                           vitesse: "240 km/h",
                           places: 5,
                           price: "40,000",
                           keyWords: ["sportive", "prestige", "fiable"],
                           colors: {
                               noir: { code: "#000000", image: "/CARS Pictures/bmw/Serie 3/2021/noir.png" },
                               gris: { code: "#808080", image: "/CARS Pictures/bmw/Serie 3/2021/gris.png" },
                               blanc: { code: "#FFFFFF", image: "/CARS Pictures/bmw/Serie 3/2021/blanc.png" },
                               bleu: { code: "blue", image: "/CARS Pictures/bmw/Serie 3/2021/bleu.png" },
                               orange: { code: "orange", image: "/CARS Pictures/bmw/Serie 3/2021/orange.png" },
                               rouge: { code: "red", image: "/CARS Pictures/bmw/Serie 3/2021/rouge.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation automatique, sièges en tissu",
                                   aidesConduite: ["Assistance au freinage d'urgence", "Alerte de franchissement de ligne"],
                                   multimedia: "Écran 8 pouces avec connectivité smartphone",
                                   prix: "40,000"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, toit ouvrant",
                                   aidesConduite: ["Caméra de recul", "Régulateur de vitesse adaptatif"],
                                   multimedia: "Écran tactile 10 pouces, GPS intégré",
                                   prix: "45,000"
                               },
                               luxe: {
                                   description: "Sièges ventilés en cuir, intérieur premium",
                                   aidesConduite: ["Pilotage semi-autonome", "Détection des piétons"],
                                   multimedia: "Système audio Harman Kardon, écran tactile 12 pouces",
                                   prix: "50,000"
                               }
                           }
                       },
                       2022: {
                           carburant: "Diesel",
                           transmission: "Automatique",
                           puissance: "190 ch",
                           cylindree: "1995 cm³",
                           coffre: "500 L",
                           carrosserie: "Berline",
                           autonomie: "800 km",
                           vitesse: "250 km/h",
                           places: 5,
                           price: "42,000",
                           keyWords: ["confort", "économique", "performante"],
                           colors: {
                               bleu: { code: "#0000FF", image: "/CARS Pictures/bmw/Serie 3/2022/bleu.png" },
                               blanc: { code: "#FFFFFF", image: "/CARS Pictures/bmw/Serie 3/2022/blanc.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation automatique, sièges en tissu",
                                   aidesConduite: ["Freinage d'urgence", "Régulateur de vitesse"],
                                   multimedia: "Écran 8 pouces avec connectivité smartphone",
                                   prix: "42,000"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, GPS intégré, caméra de recul",
                                   aidesConduite: ["Aide au stationnement", "Régulateur adaptatif"],
                                   multimedia: "Écran tactile 10 pouces, système audio premium",
                                   prix: "48,000"
                               },
                               luxe: {
                                   description: "Sièges ventilés, intérieur cuir haut de gamme",
                                   aidesConduite: ["Pilotage semi-automatique", "Détection des piétons"],
                                   multimedia: "Système audio Harman Kardon, écran tactile 12 pouces",
                                   prix: "53,000"
                               }
                           }
                       }
                   }
               }
           ]
       },
       {
           id: 9,
           marque: {
               nom: "Mercedes-Benz",
               logo: "/LOGO CARS/mercedes.png"
           },
           models: [
               {
                   model: "Classe C",
                   anneesDisponibles: [2021, 2022],
                   detailsParAnnee: {
                       2021: {
                           carburant: "Essence",
                           transmission: "Automatique",
                           puissance: "204 ch",
                           cylindree: "1991 cm³",
                           coffre: "455 L",
                           carrosserie: "Berline",
                           autonomie: "750 km",
                           vitesse: "250 km/h",
                           places: 5,
                           price: "45,000",
                           keyWords: ["élégante", "luxueuse", "performante"],
                           colors: {
                               noir: { code: "#000000", image: "/CARS Pictures/mercedes/c-class/2021/noir.png" },
                               blanc: { code: "#FFFFFF", image: "/CARS Pictures/mercedes/c-class/2021/blanc.png" },
                               gris: { code: "gray", image: "/CARS Pictures/mercedes/c-class/2021/gris.png" },
                               bleu: { code: "blue", image: "/CARS Pictures/mercedes/c-class/2021/bleu.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation automatique, sièges en tissu",
                                   aidesConduite: ["Freinage d'urgence", "Alerte de franchissement de ligne"],
                                   multimedia: "Écran 8 pouces avec connectivité smartphone",
                                   prix: "45,000"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, toit ouvrant panoramique",
                                   aidesConduite: ["Caméra de recul", "Régulateur de vitesse adaptatif"],
                                   multimedia: "Écran tactile 10 pouces, GPS intégré",
                                   prix: "50,000"
                               },
                               luxe: {
                                   description: "Sièges chauffants en cuir Nappa, intérieur haut de gamme",
                                   aidesConduite: ["Pilotage semi-autonome", "Détection des piétons"],
                                   multimedia: "Système audio Burmester, écran tactile 12 pouces",
                                   prix: "55,000"
                               }
                           }
                       },
                       2022: {
                           carburant: "Diesel",
                           transmission: "Automatique",
                           puissance: "220 ch",
                           cylindree: "2143 cm³",
                           coffre: "480 L",
                           carrosserie: "Berline",
                           autonomie: "800 km",
                           vitesse: "260 km/h",
                           places: 5,
                           price: "48,000",
                           keyWords: ["confort", "économique", "performante"],
                           colors: {
                               bleu: { code: "#FFFFFF", image: "/CARS Pictures/mercedes/c-class/2022/blanc.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation automatique, sièges en tissu",
                                   aidesConduite: ["Freinage automatique", "Régulateur de vitesse"],
                                   multimedia: "Écran tactile 8 pouces avec connectivité smartphone",
                                   prix: "48,000"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, GPS, caméra de recul",
                                   aidesConduite: ["Aide au stationnement", "Régulateur adaptatif"],
                                   multimedia: "Écran tactile 10 pouces, système audio avancé",
                                   prix: "53,000"
                               },
                               luxe: {
                                   description: "Sièges ventilés en cuir Nappa, toit panoramique",
                                   aidesConduite: ["Pilotage semi-automatique", "Détection des piétons"],
                                   multimedia: "Système audio Burmester, écran tactile grand format",
                                   prix: "58,000"
                               }
                           }
                       }
                   }
               }
           ]
       },
       {
           id: 10,
           marque: {
               nom: "Volkswagen",
               logo: "/LOGO CARS/Volkswagen.png"
           },
           models: [
               {
                   model: "Golf",
                   anneesDisponibles: [2021, 2022],
                   detailsParAnnee: {
                       2021: {
                           carburant: "Essence",
                           transmission: "Manuelle",
                           puissance: "130 ch",
                           cylindree: "1395 cm³",
                           coffre: "380 L",
                           carrosserie: "Hatchback",
                           autonomie: "700 km",
                           vitesse: "210 km/h",
                           places: 5,
                           price: "25,000",
                           keyWords: ["pratique", "économique", "polyvalente"],
                           colors: {
                               bleu: { code: "#0000FF", image: "/CARS Pictures/Volkswagen/Golf/2021/bleu.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation manuelle, sièges en tissu",
                                   aidesConduite: ["Alerte de franchissement de ligne", "Détection de fatigue"],
                                   multimedia: "Écran tactile 8 pouces avec connectivité Bluetooth",
                                   prix: "25,000"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, système de navigation",
                                   aidesConduite: ["Régulateur de vitesse adaptatif", "Caméra de recul"],
                                   multimedia: "Écran tactile 9 pouces, GPS intégré",
                                   prix: "29,000"
                               },
                               luxe: {
                                   description: "Sièges chauffants en cuir, toit panoramique",
                                   aidesConduite: ["Pilotage semi-automatique", "Détection des piétons"],
                                   multimedia: "Système audio premium, écran tactile 10 pouces",
                                   prix: "33,000"
                               }
                           }
                       },
                       2022: {
                           carburant: "Diesel",
                           transmission: "Automatique",
                           puissance: "150 ch",
                           cylindree: "1598 cm³",
                           coffre: "420 L",
                           carrosserie: "Hatchback",
                           autonomie: "800 km",
                           vitesse: "220 km/h",
                           places: 5,
                           price: "27,000",
                           keyWords: ["économique", "pratique", "fiable"],
                           colors: {
                               bleu: { code: "blue", image: "/CARS Pictures/Volkswagen/Golf/2022/bleu.png" },
                               noir: { code: "#000000", image: "/CARS Pictures/Volkswagen/Golf/2022/noir.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation automatique, sièges en tissu",
                                   aidesConduite: ["Freinage automatique", "Régulateur de vitesse"],
                                   multimedia: "Écran 8 pouces avec connectivité Bluetooth",
                                   prix: "27,000"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, caméra de recul, GPS",
                                   aidesConduite: ["Régulateur adaptatif", "Assistance au stationnement"],
                                   multimedia: "Écran tactile 9 pouces, système audio avancé",
                                   prix: "31,000"
                               },
                               luxe: {
                                   description: "Sièges ventilés en cuir, toit ouvrant panoramique",
                                   aidesConduite: ["Pilotage semi-automatique", "Détection des piétons"],
                                   multimedia: "Système audio Bose, écran tactile grand format",
                                   prix: "35,000"
                               }
                           }
                       }
                   }
               }
           ]
       },
       {
           id: 11,
           marque: {
               nom: "Peugeot",
               logo: "/LOGO CARS/peugeot.png"
           },
           models: [
               {
                   model: "208",
                   anneesDisponibles: [2022, 2023],
                   detailsParAnnee: {
                       2022: {
                           carburant: "Essence",
                           transmission: "Manuelle",
                           puissance: "100 ch",
                           cylindree: "1199 cm³",
                           coffre: "311 L",
                           carrosserie: "Hatchback",
                           autonomie: "650 km",
                           vitesse: "180 km/h",
                           places: 5,
                           price: "18,000",
                           keyWords: ["compact", "économique", "design"],
                           colors: {
                               blanc: { code: "#FFFFFF", image: "/CARS Pictures/Peugeot/208/2022/blanc.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation manuelle, sièges en tissu",
                                   aidesConduite: ["Alerte de franchissement de ligne", "Freinage d'urgence"],
                                   multimedia: "Écran tactile 7 pouces avec Bluetooth",
                                   prix: "18,000"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, caméra de recul",
                                   aidesConduite: ["Régulateur de vitesse adaptatif", "Aide au stationnement"],
                                   multimedia: "Écran tactile 8 pouces, GPS intégré",
                                   prix: "22,000"
                               },
                               luxe: {
                                   description: "Sièges chauffants, toit panoramique",
                                   aidesConduite: ["Détection des piétons", "Aide au maintien de voie"],
                                   multimedia: "Système audio premium, écran tactile 10 pouces",
                                   prix: "25,000"
                               }
                           }
                       },
                       2023: {
                           carburant: "Hybride",
                           transmission: "Automatique",
                           puissance: "130 ch",
                           cylindree: "1399 cm³",
                           coffre: "320 L",
                           carrosserie: "Hatchback",
                           autonomie: "700 km",
                           vitesse: "190 km/h",
                           places: 5,
                           price: "21,500",
                           keyWords: ["écologique", "confort", "moderne"],
                           colors: {
                               bleu: { code: "#0000FF", image: "/CARS Pictures/Peugeot/208/2023/bleu.png" },
                               blanc: { code: "FFFFFF", image: "/CARS Pictures/Peugeot/208/2023/blanc.png" }
                           },
                           optionsConfort: {
                               standard: {
                                   description: "Climatisation automatique, sièges en tissu",
                                   aidesConduite: ["Freinage automatique", "Régulateur adaptatif"],
                                   multimedia: "Écran tactile avec connectivité smartphone",
                                   prix: "21,500"
                               },
                               fullOption: {
                                   description: "Sièges en cuir, caméra 360°, GPS intégré",
                                   aidesConduite: ["Assistance au stationnement", "Régulateur adaptatif"],
                                   multimedia: "Écran tactile 9 pouces, système audio avancé",
                                   prix: "25,000"
                               },
                               luxe: {
                                   description: "Sièges ventilés en cuir, toit panoramique",
                                   aidesConduite: ["Pilotage semi-automatique", "Détection des cyclistes"],
                                   multimedia: "Système audio JBL, écran tactile 12 pouces",
                                   prix: "28,000"
                               }
                           }
                       }
                   }
               }
           ]
       }
   ],
   selectedOption: null, 
}
export default function reducer(state = stateInitial, action) {
    switch (action.type) {
        case SET_SELECTED_OPTION:
            return {
                ...state,
                selectedOption: action.payload,
            };
        default:
            return state;
    }
}