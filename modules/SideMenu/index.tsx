import ThemeToggle from "../../components/ThemeToogle/ThemeToggle";
import classes from "../../styles/sidemenu.module.scss";
import { CSSProperties, forwardRef, LegacyRef } from "react";
import ArrowRigth from "../../assets/icons/right-arrow.svg";
import Button from "../../components/Button/Button";

interface IsideMenuProps {
  style?: CSSProperties;
  isOpenMenu: any;
}

function SideMenu(
  { style, isOpenMenu }: IsideMenuProps,
  ref: LegacyRef<HTMLDivElement>
): JSX.Element {
  const notes = localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : null;

  return (
    <div className={classes.overlay}>
      <div className={classes.sidemenu} ref={ref} style={style}>
        <div className={classes.header}>
          <Button onClick={() => isOpenMenu(false)} className={classes.buttons} type="button">
            <ArrowRigth height={30} width={30} />
          </Button>
          <ThemeToggle className={classes.buttons} />
        </div>
        <div className={classes.body}>
          <div className={classes.contacts}>
            <a href="tel:+375293854854">+375 (29) 3-854-854</a>
            <a href="tel:+375295354354">+375 (29) 5-354-354</a>
            <a
              target="_blank"
              href="https://www.google.ru/maps/dir//%D0%9C%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9+%D1%86%D0%B5%D0%BD%D1%82%D1%80+%22%D0%A1%D0%B0%D0%BB%D1%8C%D1%84%D0%B8%D1%80%D0%B8%D0%BD%D0%B0%22+-+%D0%A3%D0%97%D0%98,+%D0%93%D0%B8%D0%BD%D0%B5%D0%BA%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F,+%D0%9C%D0%B0%D0%BC%D0%BC%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F,+%D0%94%D0%B5%D1%80%D0%BC%D0%B0%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F,+%D0%9D%D0%B5%D0%B2%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F,+%D0%A1%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F,+%D0%9A%D0%BE%D1%81%D0%BC%D0%B5%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F,+%D0%9C%D0%B0%D1%81%D1%81%D0%B0%D0%B6+%D0%B2+%D0%93%D0%BE%D0%BC%D0%B5%D0%BB%D0%B5,+%D0%BF%D1%80%D0%BE%D1%81%D0%BF.+%D0%9A%D0%BE%D1%81%D0%BC%D0%BE%D0%BD%D0%B0%D0%B2%D1%82%D0%BE%D0%B2+61+%22%D0%B1,+%D0%93%D0%BE%D0%BC%D0%B5%D0%BB%D1%8C+246031/@52.4566174,30.9577995,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x46d46bd623e4b9eb:0x7ddf2603fa6a837c!2m2!1d30.9599882!2d52.4566142"
            >
              Карты Google
            </a>
            <a
              className={classes.yandex}
              target="_blank"
              href="yandexnavi://build_route_on_map?lat_to=52.457323&lon_to=30.957894"
            >
              Яндекс Навигатор
            </a>
          </div>
          {notes ? (
            <div className={classes.notes}>
              <p>
                {notes.name}, не забудьте: <br />
                <strong>{notes.date}</strong> в <strong>{notes.time}</strong>{" "}
                <br />
                вас ожидает {notes.service.toLowerCase()}.
              </p>
              <p>Врач стоматолог уже натирает зеркальце 👩‍⚕️</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default forwardRef(SideMenu);
