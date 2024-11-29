import { ServiceList } from "./components/serviceList";
import { services } from "../../data/services";
import { ToggleSwitch } from "../../ui/ToggleSwitch";
import { useServiceStore } from "./store/ServiceStore";
import banner from "../../../assents/banner.png";

export default function Home() {
  const { toggleSuscription, updatePrices } = useServiceStore();

  const onToggle = (value: boolean) => {
    toggleSuscription(value);
    updatePrices(value);
  };

  return (
    <div className="flex flex-col min-h-screen max-w-screen-lg mx-auto">
      <header className="flex flex-col w-3/4 mx-auto gap-4 mt-7">
        <h2 className="font-bold">IT Academy</h2>
        <img className=" mb-16 h-40" src={banner} alt="banne" />
      </header>

      <div className="flex justify-center items-center gap-2 mb-10">
        <span>Pago mensual</span>
        <ToggleSwitch onToggle={onToggle} />
        <span>Pago anual</span>
      </div>
      <main className="flex-grow mb-40">
        <div className="w-2/3 mx-auto">
          <ServiceList services={services} />
        </div>
      </main>
      <footer className="flex w-3/4 mx-auto bg-black h-14 items-center justify-center ">
        <p className="text-white">
          <p>© {new Date().getFullYear()} Henry Mosquera Guaman</p>
        </p>
      </footer>
    </div>
  );
}
