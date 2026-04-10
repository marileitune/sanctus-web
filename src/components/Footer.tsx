import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-400 text-sm py-6 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>
          © {new Date().getFullYear()} Sanctus. {t("footer_rights")}
        </span>
        <span>
          {t("footer_made_by")} <span aria-hidden="true">✦</span>
          <a
            href="https://include.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold hover:text-brand transition-colors duration-200"
          >
            Include
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
