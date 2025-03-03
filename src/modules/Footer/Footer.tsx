import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="container px-[42px] pt-[128px] xl:px-[150px] xl:pt-[278px] xl:pb-[100px] pb-[80px] mx-auto ">
        <Link
          className="text-white self-stretch md:justify-start flex justify-center text-center text-[20px] font-bold tracking-[7px] uppercase hover:opacity-80 hover:text-gray-300 transition duration-300"
          href="/"
        >
          RSD Radar
        </Link>
        <div className="md:flex md:justify-between xl:items-baseline md:mt-[70px]">
          <nav className="flex flex-col md:items-start items-center xl:flex-row mt-[74px] md:mt-0 gap-[20px]">
            <Link
              className="text-white text-[16px] tracking-[0.64px] hover:opacity-80 hover:text-gray-300 transition duration-300"
              href="/"
            >
              Наші переваги
            </Link>
            <Link
              className="text-white text-[16px] tracking-[0.64px] hover:opacity-80 hover:text-gray-300 transition duration-300"
              href="/"
            >
              Про нас
            </Link>
            <Link
              className="text-white text-[16px] tracking-[0.64px] hover:opacity-80 hover:text-gray-300 transition duration-300"
              href="/"
            >
              Продукція
            </Link>
            <Link
              className="text-white text-[16px] tracking-[0.64px] hover:opacity-80 hover:text-gray-300 transition duration-300"
              href="/"
            >
              Напрямки
            </Link>
          </nav>
          <div className="flex flex-col md:items-start xl:flex-row xl:items-center mt-[56px] md:mt-0 items-center justify-center gap-[20px] ">
            <a
              className="text-white text-[16px] tracking-[0.64px] hover:opacity-80 hover:text-gray-300 transition duration-300"
              href="tel:+380441234567"
            >
              Тел.: +38 044 123 45 67
            </a>
            <a
              className="text-white text-[16px] tracking-[0.64px] hover:opacity-80 hover:text-gray-300 transition duration-300"
              href="mailto:info@mysite.ua"
            >
              Email: info@mysite.ua
            </a>
            <div>
              <p className="text-white text-[16px] md:text-left tracking-[0.64px] text-center max-w-[190px]">
                вул. Хрещатик, 22
              </p>
              <p className="text-white text-[16px] md:text-left tracking-[0.64px] text-center max-w-[190px]">
                м. Київ, 01001, Україна
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between mt-[56px] md:mt-[70px] items-center justify-center gap-[20px]">
          <p className="text-white text-center leading-[180%] tracking-[0.64px] text-[16px]">
            © 2025 RSD Radar
          </p>
          <p className="text-white text-center leading-[180%] tracking-[0.64px] text-[16px]">
            Сайт розробили{" "}
            <Link
              target="_blank"
              href="https://cyanidium.dev"
              className="hover:opacity-80 hover:text-gray-300 transition duration-300"
            >
              cyanidium.dev
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
