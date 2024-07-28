
import IconEmail from "../../assets/images/icon-email.svg";
import IconMarketing from "../../assets/images/icon-marketing.svg";
import ImageSony from "../../assets/images/sony.svg";
import ImageLgpd from "../../assets/images/canallgpd.svg";

export default function Footer() {
  return (
    <footer className="w-full h-96 relative bg-footer-paulo-flores bg-center bg-cover py-8 px-4">
      <div className="flex flex-col items-center justify-center gap-8 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-12">
          <div className="flex items-center gap-4">
            <img src={IconEmail} alt="Email Icon" />
            <div>
              <h3 className="text-sm md:text-base font-bold text-white">CONTATO PARA SHOWS</h3>
              <p className="text-sm md:text-base font-medium text-white">comercial@pauloflores.co.ao</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={IconMarketing} alt="Marketing Icon" />
            <div>
              <h3 className="text-sm md:text-base font-bold text-white">MARKETING</h3>
              <p className="text-sm md:text-base font-medium text-white">publicidade@pauloflores.co.ao</p>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-white mt-6 mb-4"></div>
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-2">
            <p className="text-xs md:text-sm font-medium text-white">Todos os direitos reservados 2024 © Paulo Flores</p>
            <img src={ImageLgpd} alt="LGPD Icon" className="w-16 md:w-20" />
          </div>
          <div>
            <img src={ImageSony} alt="Sony Logo" className="w-24 md:w-28" />
          </div>
        </div>
      </div>
    </footer>
  );
}
