import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        navigation: {
          about: "About",
          services: "Services",
          join_vip: "Join VIP",
          tutorials: "Tutorials",
          faqs: "FAQs"
        },
        hero: {
            title: "Take your Trade To the next ",
            level:"level",
            subtitle: "With over 10 years of experience, helping Traders to grow",
            about_me_title: "About me",
            typed_text: "Amin Chaabi has been trading in financial markets since 2014, achieving consistent, documented success. Over the last 17 months, his performance has been transparently broadcast live, proving that trading can be a sustainable income source. Committed to benefiting the Arab and Tunisian community, Amin ensures his analyses and advice are clear and accessible through live broadcasts, videos, and official pages. Join us to leverage his expertise and achieve your financial goals with confidence and security."
        },
          services: {
            section_title: "What do we offer?",
            training_courses_title: "Training Courses",
            training_courses_description: "Over 35 hours of live training with personal follow-up...",
            live_daily_followup_title: "Live Daily Follow-Up",
            live_daily_followup_description: "17 months of live sessions explaining key opportunities...",
            vip_groups_title: "VIP Groups",
            vip_groups_description: "Exclusive, free groups for Forex and Crypto traders."
          }
      }
    },
    ar: {
      translation: {
        navigation: {
          about: "حول",
          services: "الخدمات",
          join_vip: "الانضمام VIP",
          tutorials: "الدروس",
          faqs: "الأسئلة الشائعة"
        },
        hero: {
    title: "ارتق بتجارتك إلى المستوى ",
    level:"التالي",

    subtitle: "أكثر من 10 سنوات من الخبرة، لمساعدة المتداولين على النمو",
    about_me_title: "عنّي",
    typed_text: "أمين الشابي يتداول في الأسواق المالية منذ عام 2014، وحقق نجاحًا موثقًا وثابتًا. خلال الأشهر الـ 17 الماضية، تم بث أدائه مباشرةً بشفافية، مما يثبت أن التداول يمكن أن يكون مصدر دخل مستدام. ملتزمًا بفائدة المجتمع العربي والتونسي، يضمن أمين أن تكون تحليلاته ونصائحه واضحة ويمكن الوصول إليها من خلال البث المباشر، الفيديوهات، والصفحات الرسمية. انضم إلينا للاستفادة من خبرته وتحقيق أهدافك المالية بثقة وأمان."
  },
  "services": {
    "section_title": "ماذا نقدم؟",
    "training_courses_title": "دورات تدريبية",
    "training_courses_description": "أكثر من 35 ساعة من التدريب المباشر مع متابعة شخصية...",
    "live_daily_followup_title": "متابعة يومية مباشرة",
    "live_daily_followup_description": "17 شهرًا من الجلسات الحية تشرح الفرص الأساسية والدخول في التداول...",
    "vip_groups_title": "مجموعات VIP",
    "vip_groups_description": "مجموعات حصرية ومجانية للمتداولين في الفوركس والعملات الرقمية."
  }
      }
    },
    fr: {
      translation: {
        navigation: {
          about: "À propos",
          services: "Services",
          join_vip: "Rejoindre VIP",
          tutorials: "Tutoriels",
          faqs: "FAQs"
        },
        hero: {
            "title": "Améliorez votre commerce au niveau ",
            level:"supérieur",

            "subtitle": "Avec plus de 10 ans d'expérience, aidant les traders à se développer",
            "about_me_title": "À propos de moi",
            typed_text: "Amin Chaabi trade sur les marchés financiers depuis 2014, avec un succès constant et documenté. Au cours des 17 derniers mois, ses performances ont été diffusées en direct de manière transparente, prouvant que le trading peut être une source de revenu durable. Engagé à bénéficier à la communauté arabe et tunisienne, Amin s'assure que ses analyses et conseils soient clairs et accessibles via des diffusions en direct, des vidéos et des pages officielles. Rejoignez-nous pour tirer parti de son expertise et atteindre vos objectifs financiers en toute confiance et sécurité."
        },
          "services": {
            "section_title": "Que proposons-nous ?",
            "training_courses_title": "Cours de formation",
            "training_courses_description": "Plus de 35 heures de formation en direct avec suivi personnel...",
            "live_daily_followup_title": "Suivi quotidien en direct",
            "live_daily_followup_description": "17 mois de sessions en direct expliquant les opportunités clés...",
            "vip_groups_title": "Groupes VIP",
            "vip_groups_description": "Groupes exclusifs et gratuits pour les traders Forex et Crypto."
          }
      }
    }
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false // React already escapes by default
  }
});

export default i18n;
