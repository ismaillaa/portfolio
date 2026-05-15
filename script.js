// ---------- i18n dictionary ----------
const translations = {
  en: {
    "meta.title": "Portfolio",
    "meta.description": "Software Engineer specializing in ASP.NET Core, C#, and Entity Framework Core. Building clean, well-tested REST APIs.",

    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.contact": "Contact",

    "hero.eyebrow": "ASP.NET Core Backend Developer",
    "hero.title": "Building production-ready REST APIs with <span class=\"gradient\">ASP.NET Core</span> &amp; <span class=\"gradient\">C#</span>",
    "hero.lead": "Software engineer specializing in .NET backend development — Clean Architecture, Entity Framework Core, and well-tested REST APIs. Currently looking for junior .NET roles (remote or hybrid).",
    "hero.cta.cv": "Download CV",
    "hero.highlight2": "Clean Architecture • REST • JWT",

    "about.title": "About",
    "about.p1": "I'm a final-year Computer Engineering student specializing in <strong>backend development with the .NET stack</strong>. My goal is straightforward: become a software engineer who writes clean, well-tested ASP.NET Core code that other developers actually enjoy maintaining.",
    "about.p2": "I focus on the things that make a backend reliable in production — Clean Architecture and proper layering, dependency injection, Entity Framework Core with thoughtful migrations, JWT authentication, validation, DTOs, and clear OpenAPI documentation. I containerize my projects with Docker and automate builds and tests with GitHub Actions.",
    "about.p3": "Beyond .NET, I've worked across the stack — Laravel, Spring Boot, Angular, and Vue.js — through three real internships and academic projects. That breadth helps me design APIs that frontend developers can actually consume. But .NET is where I'm investing for the long run.",
    "about.focus.title": "Focus",
    "about.focus.body": "ASP.NET Core<br/>Backend & REST APIs",
    "about.contact.title": "Contact",
    "about.availability.title": "Availability",
    "about.availability.body": "Open to Remote / Hybrid<br/>Internship & Junior .NET roles",
    "about.languages.title": "Languages",
    "about.languages.body": "French (Fluent)<br/>English (Professional working — B2)<br/>Arabic (Native)",

    "skills.title": "Technical Skills",
    "skills.dotnet": ".NET Core Stack",
    "skills.primary": "Primary",
    "skills.di": "Dependency Injection",
    "skills.jwt": "JWT Authentication",
    "skills.arch": "Architecture & Practices",
    "skills.clean": "Clean Architecture",
    "skills.repo": "Repository Pattern",
    "skills.solid": "SOLID Principles",
    "skills.rest": "REST API Design",
    "skills.unit": "Unit Testing",
    "skills.db": "Databases",
    "skills.devops": "DevOps & Tools",
    "skills.front": "Frontend & Other Backends",

    "exp.title": "Experience",
    "exp.1.role": "Web Developer Intern",
    "exp.1.company": "Mesfournisseurs.be — Belgium (Remote)",
    "exp.1.desc": "Contributed to site maintenance and built responsive HTML newsletters. Designed and delivered <strong>RegistryApp</strong>, a student registry web app built with <strong>ASP.NET Core MVC</strong>, Entity Framework Core, and SQL Server, including authentication, full CRUD, and server-side validation.",
    "exp.2.role": "Backend Developer Intern",
    "exp.2.company": "National Office of Electricity and Drinking Water (ONEE) — Rabat",
    "exp.2.desc": "Built a <strong>Laboratory Management web application</strong> to streamline lab operations — sample tracking, test results, and reporting. Stack: Laravel, MySQL, Bootstrap. Gained solid experience with MVC patterns, ORM design, and authentication flows that translate directly to ASP.NET Core.",
    "exp.3.role": "Web Developer Intern",
    "exp.3.company": "Regional Inspectorate of Urbanism & Land Use Planning — Oriental",
    "exp.3.desc": "Developed an <strong>Employee Management application</strong> with full CRUD, role-based access, validation, and reporting — replacing manual spreadsheet workflows for the HR department.",

    "proj.title": "Featured Projects",
    "proj.subtitle": "Selected work demonstrating my focus on .NET backend development and clean architecture.",
    "proj.repo": "Repo",
    "proj.inprogress": "In Progress",
    "proj.1.desc": "A production-grade REST API for tracking job applications through the hiring pipeline. Built with <strong>ASP.NET Core</strong>, <strong>Entity Framework Core</strong>, and <strong>PostgreSQL</strong>, structured around <strong>Clean Architecture</strong> (Domain, Application, Infrastructure, API layers). Features JWT authentication, DTOs with AutoMapper, FluentValidation, Swagger documentation, xUnit tests, and a Docker-based deployment with a GitHub Actions CI/CD pipeline.",
    "proj.2.title": "StudentRegistry — University Management",
    "proj.2.desc": "An <strong>ASP.NET Core MVC</strong> web application for managing university student records, built during my summer internship. Implements full authentication (register / login / logout), CRUD operations, search by name or email, server-side validation, and a responsive Bootstrap UI. Data layer uses <strong>Entity Framework Core</strong> with SQL Server and code-first migrations.",
    "proj.3.title": "PFA — Full-Stack Web Application",
    "proj.3.desc": "My end-of-year project: a full-stack web application with a <strong>Spring Boot</strong> REST API backend and an <strong>Angular</strong> SPA frontend, backed by PostgreSQL. The codebase is split into separate frontend and backend repositories with a Git feature-branch workflow and pull requests. While not .NET, this project sharpens the same backend fundamentals I apply in ASP.NET Core: REST design, JPA / ORM relations, validation, and clean layering.",

    "edu.title": "Education",
    "edu.1": "<strong>Engineering Degree</strong> — Computer Engineering (Génie Informatique), ENIAD Berkane (2025–Present) · 4th year",
    "edu.2": "<strong>Bachelor's Degree</strong> — Web & Mobile Application Engineering, EST Salé (2024–2025)",
    "edu.3": "<strong>DUT</strong> — Computer Engineering, EST Salé (2022–2024)",
    "edu.4": "<strong>Baccalaureate</strong> — Experimental Sciences (Physics), Mohamed VI High School, Oujda (2021–2022)",

    "contact.title": "Let's Talk",
    "contact.body": "I'm actively looking for <strong>junior ASP.NET / .NET backend roles</strong> — remote or hybrid. If you're hiring or want to chat about a project, I'd love to hear from you."
  },

  fr: {
    "meta.title": "Portfolio",
    "meta.description": "Ingénieur logiciel spécialisé en ASP.NET Core, C# et Entity Framework Core. Conception d'APIs REST propres et testées.",

    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.experience": "Expérience",
    "nav.projects": "Projets",
    "nav.education": "Formation",
    "nav.contact": "Contact",

    "hero.eyebrow": "Développeur Backend ASP.NET Core",
    "hero.title": "Conception d'APIs REST prêtes pour la production avec <span class=\"gradient\">ASP.NET Core</span> &amp; <span class=\"gradient\">C#</span>",
    "hero.lead": "Ingénieur logiciel spécialisé en développement backend .NET — Clean Architecture, Entity Framework Core et APIs REST bien testées. Actuellement à la recherche de postes junior .NET (à distance ou hybride).",
    "hero.cta.cv": "Télécharger le CV",
    "hero.highlight2": "Clean Architecture • REST • JWT",

    "about.title": "À propos",
    "about.p1": "Je suis étudiant en dernière année d'ingénierie informatique, spécialisé en <strong>développement backend avec la stack .NET</strong>. Mon objectif est clair : devenir un ingénieur logiciel qui écrit du code ASP.NET Core propre, bien testé et agréable à maintenir.",
    "about.p2": "Je me concentre sur ce qui rend un backend fiable en production — Clean Architecture et bonne séparation des couches, injection de dépendances, Entity Framework Core avec des migrations réfléchies, authentification JWT, validation, DTOs et documentation OpenAPI claire. Je conteneurise mes projets avec Docker et j'automatise les builds et tests avec GitHub Actions.",
    "about.p3": "Au-delà de .NET, j'ai travaillé sur toute la stack — Laravel, Spring Boot, Angular et Vue.js — à travers trois vrais stages et plusieurs projets académiques. Cette polyvalence m'aide à concevoir des APIs que les développeurs frontend peuvent réellement utiliser. Mais .NET reste l'axe sur lequel j'investis sur le long terme.",
    "about.focus.title": "Spécialisation",
    "about.focus.body": "ASP.NET Core<br/>Backend & APIs REST",
    "about.contact.title": "Contact",
    "about.availability.title": "Disponibilité",
    "about.availability.body": "Ouvert au télétravail / hybride<br/>Stages & postes junior .NET",
    "about.languages.title": "Langues",
    "about.languages.body": "Français (Courant)<br/>Anglais (Professionnel — B2)<br/>Arabe (Langue maternelle)",

    "skills.title": "Compétences techniques",
    "skills.dotnet": "Stack .NET Core",
    "skills.primary": "Principal",
    "skills.di": "Injection de dépendances",
    "skills.jwt": "Authentification JWT",
    "skills.arch": "Architecture & Bonnes pratiques",
    "skills.clean": "Clean Architecture",
    "skills.repo": "Pattern Repository",
    "skills.solid": "Principes SOLID",
    "skills.rest": "Conception d'API REST",
    "skills.unit": "Tests unitaires",
    "skills.db": "Bases de données",
    "skills.devops": "DevOps & Outils",
    "skills.front": "Frontend & Autres backends",

    "exp.title": "Expérience",
    "exp.1.role": "Stagiaire Développeur Web",
    "exp.1.company": "Mesfournisseurs.be — Belgique (À distance)",
    "exp.1.desc": "Participation à la maintenance du site et conception de newsletters HTML responsives. Conception et livraison de <strong>RegistryApp</strong>, une application web de registre étudiant développée avec <strong>ASP.NET Core MVC</strong>, Entity Framework Core et SQL Server, incluant l'authentification, le CRUD complet et la validation côté serveur.",
    "exp.2.role": "Stagiaire Développeur Backend",
    "exp.2.company": "Office National de l'Électricité et de l'Eau Potable (ONEE) — Rabat",
    "exp.2.desc": "Développement d'une <strong>application web de gestion de laboratoire</strong> pour fluidifier les opérations — suivi des échantillons, résultats d'analyses et reporting. Stack : Laravel, MySQL, Bootstrap. Solide expérience acquise sur les patterns MVC, la conception ORM et les flux d'authentification, transposables directement à ASP.NET Core.",
    "exp.3.role": "Stagiaire Développeur Web",
    "exp.3.company": "Inspection Régionale de l'Urbanisme et de l'Aménagement du Territoire — Oriental",
    "exp.3.desc": "Développement d'une <strong>application de gestion des employés</strong> avec CRUD complet, accès basé sur les rôles, validation et reporting — remplaçant les flux manuels sur tableurs pour le service RH.",

    "proj.title": "Projets phares",
    "proj.subtitle": "Une sélection de projets illustrant mon focus sur le développement backend .NET et la clean architecture.",
    "proj.repo": "Repo",
    "proj.inprogress": "En cours",
    "proj.1.desc": "Une API REST de qualité production pour le suivi des candidatures à travers le pipeline de recrutement. Construite avec <strong>ASP.NET Core</strong>, <strong>Entity Framework Core</strong> et <strong>PostgreSQL</strong>, structurée selon la <strong>Clean Architecture</strong> (couches Domain, Application, Infrastructure, API). Inclut l'authentification JWT, des DTOs avec AutoMapper, FluentValidation, la documentation Swagger, des tests xUnit et un déploiement Docker avec un pipeline CI/CD GitHub Actions.",
    "proj.2.title": "StudentRegistry — Gestion universitaire",
    "proj.2.desc": "Une application web <strong>ASP.NET Core MVC</strong> pour la gestion des étudiants universitaires, développée pendant mon stage d'été. Implémente l'authentification complète (inscription / connexion / déconnexion), les opérations CRUD, la recherche par nom ou email, la validation côté serveur et une interface Bootstrap responsive. La couche de données utilise <strong>Entity Framework Core</strong> avec SQL Server et des migrations code-first.",
    "proj.3.title": "PFA — Application web full-stack",
    "proj.3.desc": "Mon projet de fin d'année : une application web full-stack avec un backend API REST <strong>Spring Boot</strong> et un frontend SPA <strong>Angular</strong>, adossé à PostgreSQL. Le code est divisé en deux dépôts (frontend et backend) avec un workflow Git par feature branches et pull requests. Bien qu'il ne soit pas en .NET, ce projet renforce les mêmes fondamentaux backend que j'applique en ASP.NET Core : conception REST, relations JPA / ORM, validation et architecture propre.",

    "edu.title": "Formation",
    "edu.1": "<strong>Cycle d'Ingénieur</strong> — Génie Informatique (ADIGI), ENIAD Berkane (2025–présent) · 4ème année",
    "edu.2": "<strong>Licence Professionnelle</strong> — Ingénierie des Applications Web et Mobiles, EST Salé (2024–2025)",
    "edu.3": "<strong>DUT</strong> — Génie Informatique, EST Salé (2022–2024)",
    "edu.4": "<strong>Baccalauréat</strong> — Sciences Expérimentales (Physique), Lycée Mohamed VI, Oujda (2021–2022)",

    "contact.title": "Discutons",
    "contact.body": "Je recherche activement des <strong>postes junior ASP.NET / backend .NET</strong> — à distance ou en hybride. Si vous recrutez ou souhaitez échanger sur un projet, je serais ravi d'en discuter."
  }
};

// ---------- i18n engine ----------
function applyLang(lang) {
  document.documentElement.lang = lang;
  const dict = translations[lang] || translations.en;

  // Plain text
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const attr = el.getAttribute('data-i18n-attr');
    if (dict[key] !== undefined) {
      if (attr) el.setAttribute(attr, dict[key]);
      else el.textContent = dict[key];
    }
  });

  // HTML
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  const langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.textContent = lang === 'fr' ? 'EN' : 'FR';

  const cvLink = document.getElementById('cvLink');
  if (cvLink) cvLink.setAttribute('href', lang === 'fr' ? 'cv/CV_Ismail_Laaouan_FR.pdf' : 'cv/CV_Ismail_Laaouan_EN.pdf');

  localStorage.setItem('lang', lang);
}

const browserLang = (navigator.language || 'en').toLowerCase().startsWith('fr') ? 'fr' : 'en';
const initialLang = localStorage.getItem('lang') || browserLang;
applyLang(initialLang);

const langBtn = document.getElementById('langToggle');
if (langBtn) {
  langBtn.addEventListener('click', () => {
    const current = document.documentElement.lang === 'fr' ? 'fr' : 'en';
    applyLang(current === 'fr' ? 'en' : 'fr');
  });
}

// ---------- Smooth scroll ----------
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

// ---------- Theme toggle ----------
const root = document.documentElement;
const themeBtn = document.getElementById('themeToggle');
function setTheme(mode) {
  if (mode === 'light') root.classList.add('light');
  else root.classList.remove('light');
  localStorage.setItem('theme', mode);
}
const preferred = localStorage.getItem('theme') || 'light';
setTheme(preferred);
if (themeBtn) themeBtn.addEventListener('click', () => setTheme(root.classList.contains('light') ? 'dark' : 'light'));

// ---------- Mobile menu ----------
const menuBtn = document.getElementById('menuToggle');
const nav = document.getElementById('primaryNav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
  window.addEventListener('scroll', () => {
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

// ---------- Year ----------
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();