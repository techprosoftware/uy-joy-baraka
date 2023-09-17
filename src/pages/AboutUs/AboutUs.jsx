/* eslint-disable react/no-unescaped-entities */
import { BackButton } from "@components/BackButton/BackButton";
import { lazy } from "react";
const Social = lazy(() => import("@components/Social/Social"));

// import "./about-as.scss"
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <>
      <main className="favorite-inner">
        <div className="about">
          <div className="container">
            <div className="back-btn">
              <BackButton />
            </div>
            <h2 className="about__title">{t("about.aboutme")}</h2>
            <div className="about__text">
              <p>
                Toshkent, Samarqand, Andijon yoki boshqa shu kabi shaharlarda
                kvartira, uy yoki ofis sotib olish yoki sotishni istaysizmi? Siz
                to'g'ri manzildasiz! Bu yerda O'zbekistonning eng yaxshi
                agentliklarini va ko'plab potentsial sotuvchilarni ko'rish
                mumkin. Biz sizning didingizdagi uy-joylarni topishga yoki
                sizning uyingizni muvaffaqiyatli sotishingizda yordam bera
                olishimiz mumkin. Biz mijozlarimizni qadrlaymiz. Bizning
                adminstratorlarimiz platformamiz yoki joylashtirilgan e'lonlar
                haqida savollaringizga javob berishadi. Biz o'zimizni qidiruvni
                qulaylashtiradigan tanlov kriteriyalarini taqdim etamiz, shunda
                siz qidirayotgan narsani va qidirayotgan joyda topishingiz
                mumkin. Siz telefon orqali yoki e'lon joylashtirgan sotuvchi
                bilan to'g'ridan-to'g'ri bog'lanishingiz mumkin. Biz sizning
                xohishlarizni topishning tez, tashkil etilgan va samarali
                usulini taqdim etishga harakat qilamiz.
              </p>
            </div>
            <Social />
            <div className="about__text bottom-text">
              <p>
                Bizning platformada e'lon joylashtirish tezkor va qulay. Siz bir
                necha daqiqada e'lon joylashtirishingiz mumkin, tasvirlarni
                qo'shishingiz va potentsial sotuvchilar uchun qulayliklarni
                ko'rsatishingiz mumkin. Siz o'z profilni boshqarishingiz va
                O'zbekistondagi ko'plab potentsial sotuvchilarga kirishga ega
                bo'lishingiz mumkin. Nima uchun kutmoqdasiz? Qo'shiling! 
                
              </p>
                <span className="fw-bold mt -3 d-block">Hurmat bilan, <a href="https://uyjoybaraka.uz/">uyjoybaraka.uz</a> jamoasi</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutUs;
