import { FC } from "react";
import s from "./footer.module.scss";

const Footer: FC = () => {
  return (
    <div className={s.footer__container}>
      <a
        className={s.footer__text}
        href="https://github.com/OlegRabushko/Chess-Server#readme"
      >
        Уважаемый проверяющий, пожалуйста перейдите по этой ссылке. Здесь кратко
        о сделанной работе!
      </a>
      <div>Rabushko Oleg© - RS School 2021</div>
    </div>
  );
};

export default Footer;
