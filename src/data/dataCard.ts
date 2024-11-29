import Managment from "../../assents/time_managment.svg";
import Programing from "../../assents/programming.svg";
import Meditation from "../../assents/meditation.svg";

export interface IData {
  tittle: string;
  content: string;
  image: string;
  bgColor: string;
}

export const data: Array<IData> = [
  {
    tittle: "Haz Presupuestos en Minutos",
    content:
      "Crear presupuestos nunca fue tan fácil. Dedica solo unos minutos para personalizarlos según las necesidades de tus clientes.",
    image: Managment,
    bgColor: "#4ca2a8",
  },

  {
    tittle: "Personaliza Cada Detalle Sin Esfuerzo",
    content:
      "Con nuestra página, puedes personalizar tus presupuestos de forma sencilla. Ajusta los términos según tu estilo.",
    image: Programing,
    bgColor: "#d2d5d9",
  },
  {
    tittle: "Comparte Tus Presupuestos al Instante",
    content:
      "Una vez creado y personalizado tu presupuesto, puedes compartirlo fácilmente con tus clientes.",
    image: Meditation,
    bgColor: "#ffd167",
  },
];
