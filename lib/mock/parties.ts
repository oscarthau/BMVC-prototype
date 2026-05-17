/** Danish parties — names stay Danish; descriptions in English */
export type Party = {
  id: string;
  name: string;
  shortCode: string;
  color: string;
  description: string;
};

export const parties: Party[] = [
  {
    id: "socialdemokratiet",
    name: "Socialdemokratiet",
    shortCode: "S",
    color: "#A82721",
    description:
      "Centre-left emphasis on welfare, labour markets, and pragmatic climate steps.",
  },
  {
    id: "venstre",
    name: "Venstre",
    shortCode: "V",
    color: "#254264",
    description:
      "Liberal party focused on enterprise, rural interests, and streamlined public sector.",
  },
  {
    id: "sf",
    name: "SF",
    shortCode: "SF",
    color: "#E5314E",
    description:
      "Green-left priorities on climate justice, public services, and redistribution.",
  },
  {
    id: "konservative",
    name: "Konservative",
    shortCode: "KF",
    color: "#0B533B",
    description:
      "Conservative emphasis on institutions, rule of law, and cautious fiscal policy.",
  },
  {
    id: "enhedslisten",
    name: "Enhedslisten",
    shortCode: "Ø",
    color: "#E6332A",
    description:
      "Socialist-green bloc stressing solidarity, climate action, and welfare expansion.",
  },
  {
    id: "liberal-alliance",
    name: "Liberal Alliance",
    shortCode: "LA",
    color: "#3CB6CE",
    description:
      "Classical liberal focus on lower taxes, entrepreneurship, and regulatory restraint.",
  },
  {
    id: "radikale",
    name: "Radikale",
    shortCode: "B",
    color: "#733280",
    description:
      "Social-liberal profile on civil liberties, EU cooperation, and education investment.",
  },
  {
    id: "dansk-folkeparti",
    name: "Dansk Folkeparti",
    shortCode: "DF",
    color: "#EAC73E",
    description:
      "National-conservative emphasis on culture, controlled immigration, and elderly care.",
  },
  {
    id: "moderaterne",
    name: "Moderaterne",
    shortCode: "M",
    color: "#B43A8A",
    description:
      "Centrist reform agenda bridging business pragmatism with green transition funding.",
  },
  {
    id: "alternativet",
    name: "Alternativet",
    shortCode: "Å",
    color: "#2B8738",
    description:
      "Ecological democracy and participatory politics with bold climate experimentation.",
  },
  {
    id: "danmarksdemokraterne",
    name: "Danmarksdemokraterne",
    shortCode: "DD",
    color: "#264F8E",
    description:
      "Populist-centrist mix stressing rural communities, energy affordability, and control.",
  },
];

export function getPartyById(id: string): Party | undefined {
  return parties.find((p) => p.id === id);
}
