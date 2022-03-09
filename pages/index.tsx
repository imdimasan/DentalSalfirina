import MainLayout from "../layout/MainLayout";
import Slider from "../components/Slider/Slider";
import Image from "next/image";
import classes from "../styles/pages/index.module.scss";
import CallbackForm from "../components/CallbackForm/CallbackForm";
import Diagnostic from "../assets/icons/dental.svg";
import Profilactic from "../assets/icons/dental-care.svg";
import Therapy from "../assets/icons/dental-therapy.svg";
import Restavration from "../assets/icons/broken-tooth.svg";
import Endodontic from "../assets/icons/root-canal.svg";
import Childdental from "../assets/icons/baby-teeth.svg";

export default function HomePage() {
  const slides = [
    {
      image: "/images/banners/banner1.png",
      title: "Крепкие зубы с детства",
      alt: "Детская стоматология",
      color: "#0794e6",
      link: "/contacts",
    },
    {
      image: "/images/banners/banner2.png",
      title: "Яркая улыбка за один визит",
      alt: "Ультразвуковая чистка зубов",
      color: "#0794e6",
      link: "/about",
    },
  ];

  return (
    <MainLayout
      title={"Стоматология в Гомеле - стоматологический кабинет"}
      description={
        "Стоматология в Гомеле медицинский центр Salfirina: диагностика, профилактика, лечение, десткая стоматология, эндодонтия, реставрация. Стоматология от А до Я"
      }
      keywords={"стоматология, стоматолог"}
    >
      <Slider slides={slides} perView={1} />
      <section>
        <h1>Стоматология в Гомеле</h1>
        <p>
          Стоматологический кабинет Salfirina предлагает множество самых
          востребованных процедур для здоровой и красивой улыбки у вас и ваших
          детей.
        </p>
        <p>
          Оставьте Ваши данные и наши администраторы свяжутся с Вами в ближайшее
          время.
        </p>

        <div className={classes.callback}>
          <h3>Мы перезвоним!</h3>
          <CallbackForm />
        </div>

        <h2>Врачи стоматологи</h2>
        <p>
          Стоматология Salfirina гордится нашими опытными и квалифицированными
          врачами с огромным стажем.
        </p>
        <div className={classes.workers}>
          <div className={classes.worker__item}>
            <div className={classes.image}>
              <Image
                src={"/images/pages/index/tkacheva.jpg"}
                width={350}
                height={350}
                layout="responsive"
                quality={50}
                alt={"Реставрация зубов"}
              />
            </div>
            <div className={classes.text}>
              <p>
                <strong>Ткачова Анна Николаевна</strong>
              </p>
              <p>Высшая категория</p>
              <p>2001 г. Гомельское медицинское училище</p>
            </div>
          </div>
          <div className={classes.worker__item}>
            <div className={classes.image}>
              <Image
                src={"/images/pages/index/hazeev.jpg"}
                width={350}
                height={350}
                layout="responsive"
                quality={50}
                alt={"Реставрация зубов"}
              />
            </div>
            <div className={classes.text}>
              <p>
                <strong>Хазеев Максим Николаевич</strong>
              </p>
              <p>Первая категория</p>
              <p>2006 г. Гомельский государственный медицинский колледж</p>
            </div>
          </div>
          <div className={classes.worker__item}>
            <div className={classes.image}>
              <Image
                src={"/images/pages/index/krivenkova.jpg"}
                width={350}
                height={350}
                layout="responsive"
                quality={50}
                alt={"Реставрация зубов"}
              />
            </div>
            <div className={classes.text}>
              <p>
                <strong>Кривенкова Тамара Юрьевна</strong>
              </p>
              <p>Первая категория</p>
              <p>2011 г. Гомельский государственный медицинский колледж</p>
            </div>
          </div>
        </div>
        <div className={classes.services}>
          <h2>Услуги стоматологии</h2>
          <div className={classes.services__grid}>
            <div className={classes.services__item}>
              <Diagnostic height={40} width={40} />
              <p>Осмотр стоматолога и диагностика на ранних этапах.</p>
            </div>
            <div className={classes.services__item}>
              <Profilactic height={40} width={40} />
              <p>Прафилактика кариеса, чистка и отбеливание зубов.</p>
            </div>
            <div className={classes.services__item}>
              <Therapy height={40} width={40} />
              <p>Лечения кариеса эмали и дентина, пломбирование.</p>
            </div>
            <div className={classes.services__item}>
              <Restavration height={40} width={40} />
              <p>Реставрация и полное восстановление коронковой части зуба.</p>
            </div>
            <div className={classes.services__item}>
              <Endodontic height={40} width={40} />
              <p>Лечение пульпита, периодонтита, пломбирование зуба.</p>
            </div>
            <div className={classes.services__item}>
              <Childdental height={40} width={40} />
              <p>Герметизация, пломбирование, лечение временных зубов.</p>
            </div>
          </div>
        </div>
        <h2>О стоматологии</h2>
        <p>
          Медицинский центр “Сальфирина” открыл свои двери в 2007 году. С тех
          пор мы становились лучше с каждым днем. На сегодняшний момент мы
          оказываем полный спектр медицинских услуг. В том числе
          стоматологических.
        </p>
        <p>
          Мы гордимся отзывами наших пациентов и дорожим мнением каждого нашего
          посетителя. Стараясь не только оказывать качественный сервис но и
          действительно решать проблемы и лечить наших соотечественников и
          гостей Беларуси.
        </p>
        <h2>Стоматология по страховке</h2>
        <p>
          Мы оказываем стоматологические услуги по страховкам большинства
          страховых компаний в Гомеле
        </p>
        <div className={classes.insurance}>
          <div className={classes.insurance__item}>
            <Image
              src={"/images/insurance/belgosstrah.jpg"}
              width={130}
              height={88}
              layout="responsive"
              quality={90}
              alt={"Стоматология по страховке в Гомеле"}
            />
          </div>
          <div className={classes.insurance__item}>
            <Image
              src={"/images/insurance/belneftestrah.jpg"}
              width={130}
              height={88}
              layout="responsive"
              quality={90}
              alt={"Стоматология по страховке в Гомеле"}
            />
          </div>
          <div className={classes.insurance__item}>
            <Image
              src={"/images/insurance/belrosstrakh.jpg"}
              width={130}
              height={88}
              layout="responsive"
              quality={90}
              alt={"Стоматология по страховке в Гомеле"}
            />
          </div>
          <div className={classes.insurance__item}>
            <Image
              src={"/images/insurance/kentavr.jpg"}
              width={130}
              height={88}
              layout="responsive"
              quality={90}
              alt={"Стоматология по страховке в Гомеле"}
            />
          </div>
          <div className={classes.insurance__item}>
            <Image
              src={"/images/insurance/kupala.jpg"}
              width={130}
              height={88}
              layout="responsive"
              quality={90}
              alt={"Стоматология по страховке в Гомеле"}
            />
          </div>
          <div className={classes.insurance__item}>
            <Image
              src={"/images/insurance/promtransinvest.jpg"}
              width={130}
              height={88}
              layout="responsive"
              quality={90}
              alt={"Стоматология по страховке в Гомеле"}
            />
          </div>
        </div>
        <h2>Отзывы о стоматологии</h2>
      </section>
    </MainLayout>
  );
}
