export type ExtraIten = {
  id: number;
  title: string;
  price: number;
  detail: string;
  currency: "€" | "$";
};

export interface IServices {
  id: number;
  title: string;
  description: string;
  price: number;
  discount: number;
  currency: "€" | "$";
  customization?: Array<ExtraIten>;
}

export const services: Array<IServices> = [
  {
    id: 1,
    title: "Seo",
    description: "Haz una campaña de SEO",
    price: 300,
    discount: 0.25,
    currency: "€",
    customization: [
      {
        id: 1,
        title: "Keywords",
        price: 25,
        detail: "Palabras que posicionaremos para mantener un buen SEO",
        currency: "€",
      },
    ],
  },
  {
    id: 2,
    title: "Ads",
    description: "Realizar una campaña publicitaria",
    price: 400,
    discount: 0.3,
    currency: "€",
  },
  {
    id: 3,
    title: "Web",
    description: "Hacer un sitio web",
    price: 500,
    discount: 0.2,
    currency: "€",
    customization: [
      {
        id: 1,
        title: "paginas",
        price: 15,
        detail: "Paginas que diseñaremos segun sus especificaciones",

        currency: "€",
      },
      {
        id: 2,
        title: "lenguajes",
        price: 15,
        detail: "Idiomas del contenido del sitio web",
        currency: "€",
      },
    ],
  },
  {
    id: 4,
    title: "Desing",
    description: "Diseñar sitio web",
    price: 300,
    discount: 0.4,
    currency: "€",
  },
];
