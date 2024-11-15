import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import settingsIcon from "../assets/settings.png";

const Header = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      setDeferredPrompt(null);
    }
  };

  return (
    <header className="bg-body-tertiary">
      <nav className="d-flex justify-content-around align-items-center">
        <NavLink to="/" className="fs-1 navbar-brand px-4">
          #Weather-App
        </NavLink>
        <NavLink to="/about" className="link-underline-info fs-5">
          About
        </NavLink>
        {deferredPrompt && (
          <button className="btn btn-primary" onClick={handleInstall}>
            Install
          </button>
        )}
        <NavLink to="/setting" className="link-success fs-6">
          <img
            src={settingsIcon}
            alt="settings"
            style={{
              width: "28px",
              height: "28px",
            }}
          />
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
