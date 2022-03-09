import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { useState, useEffect, useRef } from "react";
import { Transition } from "react-transition-group";
import Button from "../../components/Button/Button";
import classes from "../../styles/header.module.scss";
import Calendar from "../../assets/icons/calendar.svg";
import Menu from "../../assets/icons/menu.svg";
import Diagnostic from "../../assets/icons/dental.svg";
import Profilactic from "../../assets/icons/dental-care.svg";
import Therapy from "../../assets/icons/dental-therapy.svg";
import Restavration from "../../assets/icons/broken-tooth.svg";
import Endodontic from "../../assets/icons/root-canal.svg";
import Childdental from "../../assets/icons/baby-teeth.svg";
import Logo from "../../assets/images/dental-logo.svg";
import SideMenu from "../SideMenu";

function Header() {
  const linkHomePage = (): void => {
    Router.push("/");
  };

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  let menuRef = useRef(null);

  useEffect(() => {
    const handler = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const defaultStyle = {
    transition: `300ms`,
  };
  const transitionStyles = {
    entering: { right: "-250px" },
    entered: { right: "0" },
    exiting: { right: "-250px" },
    exited: { right: "-250px" },
  };

  return (
    <header className={classes.header}>
      <div className={classes.sticky}>
        <div className={classes.logo}>
          {/* <Image
            src={"/images/logodental.png"}
            width={150}
            height={44}
            layout="responsive"
            quality={50}
            onClick={linkHomePage}
            alt="Стоматология в Гомеле"
          /> */}
          <Logo height={44} width={150} onClick={linkHomePage}/>
        </div>
        <div className={classes.links}>
          <a href="tel:+375293854854">+375 (29) 3-854-854</a>
        </div>
        <div>
          <Button
            onClick={() => console.log("click")}
            className="icons"
            type={"button"}
          >
            <Calendar height={30} width={30} />
          </Button>
          <Button
            onClick={() => setIsOpenMenu((prev) => !prev)}
            type={"button"}
            className="icons"
          >
            <Menu height={30} width={30} />
          </Button>
        </div>
      </div>
      <Transition
        in={isOpenMenu}
        nodeRef={menuRef}
        timeout={{
          enter: 0,
          exit: 200,
        }}
        mountOnEnter
        unmountOnExit
      >
        {(state) => (
          <SideMenu
            ref={menuRef}
            isOpenMenu={setIsOpenMenu}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          />
        )}
      </Transition>
      <menu className={classes.wrapper}>
        <li className={classes.diag}>
          <Diagnostic height={35} width={35} />
          <Link href={"/about"}>
            <a>Диагностика</a>
          </Link>
        </li>
        <li className={classes.diag}>
          <Profilactic height={35} width={35} />
          <Link href={"/contacts"}>
            <a>Профилактика</a>
          </Link>
        </li>
        <li className={classes.diag}>
          <Therapy height={35} width={35} />
          <Link href={"/posts"}>
            <a>Терапия</a>
          </Link>
        </li>
        <li className={classes.diag}>
          <Restavration height={35} width={35} />
          <Link href={"/posts"}>
            <a>Реставрация</a>
          </Link>
        </li>
        <li>
          <Endodontic height={35} width={35} />
          <Link href={"/posts"}>
            <a>Эндодонтия</a>
          </Link>
        </li>
        <li>
          <Childdental height={35} width={35} />
          <Link href={"/posts"}>
            <a>Для детей</a>
          </Link>
        </li>
      </menu>
    </header>
  );
}

export default Header;
