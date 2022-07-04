import { ReactComponent as Logo } from "assets/logo.svg";
import styles from "./menu.module.scss";
import { Link } from "react-router-dom";

export default function Menu() {
  const routes = [
    {
      label: "Início",
      link: "/",
    },
    {
      label: "Cardápio",
      link: "/cardapio",
    },
    {
      label: "Sobre",
      link: "/sobre",
    },
  ];

  return (
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.menu__list}>
        {routes.map((item, index) => (
          <li key={index} className={styles.menu__link}>
            <Link to={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
