export interface MenuItems {
  index: number;
  menuItem: string;
  href?: string;
}

export const menu_items: MenuItems[] = [
  {
    index: 1,
    menuItem: "Início",
    href: "/",
  },
  {
    index: 2,
    menuItem: "Profissional",
    href: "#profissional",
  },
  {
    index: 3,
    menuItem: "Acupuntura",
    href: "#acupuntura",
  },
  {
    index: 4,
    menuItem: "Consulta",
    href: "#consulta",
  },
  {
    index: 5,
    menuItem: "Contatos",
    href: "#contatos",
  },
];
