export const drawer_labels = [];

export const options_options = [
  /* {
    id: 1,
    icon: "",
    section: "Modules",
    items: [
      {
        icon: "apps",
        name: "Activer ou désactiver des modules",
        navigate: { where: "", params: {} },
      },
    ],
  }, */
  {
    id: 2,
    icon: "",
    section: "Statistiques",
    items: [
      {
        icon: "chart-bar",
        name: "Statistiques des visites",
        navigate: { where: "statistic_stack", params: {} },
      },
    ],
  },
  {
    id: 3,
    icon: "",
    section: "Données",
    items: [
      {
        icon: "database-export",
        name: "Exporter les données",
        navigate: { where: "export_stack", params: {} },
      },
      /* {
        icon: "database-import",
        name: "Importer les données",
        navigate: { where: "", params: {} },
      }, */
    ],
  },
  /* {
    id: 4,
    icon: "",
    section: "Application",
    items: [
      {
        icon: "backup-restore",
        name: "Sauvegarder l'application",
        navigate: { where: "", params: {} },
      },
      {
        icon: "restore",
        name: "Restaurer l'application",
        navigate: { where: "", params: {} },
      },
    ],
  }, */
  {
    id: 5,
    icon: "",
    section: "Licence",
    items: [
      {
        icon: "license",
        name: "Gestion de la licence",
        navigate: { where: "", params: {} },
      },
    ],
  },
];

export const support_options = [
  {
    id: 1,
    icon: "",
    section: "Support technique",
    items: [
      {
        icon: "email-send",
        name: "Contacter le support",
        navigate: { where: "contacter_stack", params: {} },
      },
      {
        icon: "help",
        name: "Aide",
        navigate: { where: "", params: {} },
      },
    ],
  },
];

export const diagram_colors = [
  "tomato",
  "orange",
  "gold",
  "cyan",
  "yellow",
  "gray",
  "black",
  "purple",
  "lightgreen",
  "blue",
  "green",
  "lightblue",
  "white",
  "#F0F8FF",
  "#FAEBD7",
  "#00FFFF",
  "#7FFFD4",
  "#F0FFFF",
  "#F5F5DC",
  "#FFE4C4",
  "#FFEBCD",
  "#8A2BE2",
  "#A52A2A",
  "#708090",
  "#00FF7F",
  "#4682B4",
  "#D2B48C",
  "#008080",
  "#40E0D0",
  "#9ACD32",
  "#D8BFD8",
  "#FF6347",
  "#808000",
  "#6B8E23",
  "#DA70D6",
  "#EEE8AA",
  "#98FB98",
  "#AFEEEE",
  "#DB7093",
];

export const keys_values = [
  { key: "first_name", value: "prénom", table: "visitor", tid: "i" },
  { key: "last_name", value: "nom", table: "visitor", tid: "i" },
  { key: "gender", value: "sexe", table: "visitor", tid: "i" },
  { key: "phone", value: "contact", table: "visitor", tid: "i" },
  { key: "email", value: "courriel", table: "visitor", tid: "i" },
  { key: "birthdate", value: "date de naissance", table: "visitor", tid: "i" },
  { key: "birthplace", value: "lieu de naissance", table: "visitor", tid: "i" },
  { key: "is_blacklisted", value: "blacklisté", table: "visitor", tid: "i" },
  { key: "card_num", value: "numéro indentité", table: "iddoc", tid: "d" },
  { key: "card_type", value: "type de document", table: "iddoc", tid: "d" },
  { key: "id_num", value: "nip", table: "iddoc", tid: "d" },
  { key: "made_on", value: "établie le", table: "iddoc", tid: "d" },
  { key: "expire_on", value: "expire le", table: "iddoc", tid: "d" },
  { key: "edit_place", value: "établie à", table: "iddoc", tid: "d" },
  { key: "badge", value: "badge", table: "visit", tid: "v" },
  {
    key: "visited_person",
    value: "personne visitée",
    table: "visit",
    tid: "v",
  },
  { key: "is_ongoing", value: "est en cours", table: "visit", tid: "v" },
  { key: "started_on", value: "début", table: "visit", tid: "v" },
  { key: "finished_on", value: "fin", table: "visit", tid: "v" },
  { key: "name", value: "service", table: "service", tid: "s" },
  { key: "username", value: "agent accueil", table: "user", tid: "u" },
  { key: "numberplate", value: "immatriculation", table: "vehicle", tid: "t" },
  { key: "model", value: "modèle", table: "vehicle", tid: "t" },
];

export const keys_values_2 = [
  { key: "id", value: "visitor_id", table: "visitor", tid: "i" },
  { key: "first_name", value: "first_name", table: "visitor", tid: "i" },
  { key: "last_name", value: "last_name", table: "visitor", tid: "i" },
  { key: "gender", value: "gender", table: "visitor", tid: "i" },
  { key: "phone", value: "phone", table: "visitor", tid: "i" },
  { key: "email", value: "email", table: "visitor", tid: "i" },
  { key: "birthdate", value: "birthdate", table: "visitor", tid: "i" },
  { key: "birthplace", value: "birthplace", table: "visitor", tid: "i" },
  {
    key: "is_blacklisted",
    value: "is_blacklisted",
    table: "visitor",
    tid: "i",
  },
  { key: "id", value: "iddoc_id", table: "iddoc", tid: "d" },
  { key: "card_num", value: "card_num", table: "iddoc", tid: "d" },
  { key: "card_type", value: "card_type", table: "iddoc", tid: "d" },
  { key: "id_num", value: "id_num", table: "iddoc", tid: "d" },
  { key: "made_on", value: "made_on", table: "iddoc", tid: "d" },
  { key: "expire_on", value: "expire_on", table: "iddoc", tid: "d" },
  { key: "edit_place", value: "edit_place", table: "iddoc", tid: "d" },
  { key: "id", value: "visit_id", table: "visit", tid: "v" },
  { key: "badge", value: "badge", table: "visit", tid: "v" },
  { key: "visited_person", value: "visited_person", table: "visit", tid: "v" },
  { key: "is_ongoing", value: "is_ongoing", table: "visit", tid: "v" },
  { key: "started_on", value: "started_on", table: "visit", tid: "v" },
  { key: "finished_on", value: "finished_on", table: "visit", tid: "v" },
  { key: "name", value: "service", table: "service", tid: "s" },
  { key: "id", value: "user_id", table: "user", tid: "u" },
  { key: "first_name", value: "ufirst_name", table: "user", tid: "u" },
  { key: "last_name", value: "ulast_name", table: "user", tid: "u" },
  { key: "username", value: "username", table: "user", tid: "u" },
  { key: "numberplate", value: "immatriculation", table: "vehicle", tid: "t" },
  { key: "model", value: "modèle", table: "vehicle", tid: "t" },
];

function is_ascii(str) {
  return /^[\x00-\x7F]*$/.test(str);
}

export const to_sql_values = (keys_list) => {
  let query = "";
  for (let line = 0; line < keys_list.length; line++) {
    if (
      keys_list[line].value.includes(" ") ||
      !is_ascii(keys_list[line].value)
    ) {
      query += `${keys_list[line].tid}.${keys_list[line].key} AS '${keys_list[line].value}'`;
    } else {
      query += `${keys_list[line].tid}.${keys_list[line].key} AS ${keys_list[line].value}`;
    }

    if (line === keys_list.length - 1) {
      query += " ";
    } else {
      query += ", ";
    }
  }

  return query;
};
