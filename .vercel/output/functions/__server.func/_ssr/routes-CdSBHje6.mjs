import { i as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowUpRight, a as Plus, c as KeyRound, d as Cog, f as CircuitBoard, g as Calendar, h as Check, i as Shield, l as Info, m as ChevronDown, n as Waypoints, o as Minus, p as CircleDashed, s as Menu, t as X, u as Eye, v as ArrowDown } from "../_libs/lucide-react.mjs";
import { t as instance } from "../_libs/i18next.mjs";
import { n as initReactI18next, t as useTranslation } from "../_libs/react-i18next.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CdSBHje6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Города и языки RoboComm.
*
* Новый язык:
*   1. Скопируйте src/i18n/locales/ru.ts → src/i18n/locales/<code>.ts
*   2. Переведите строки
*   3. Добавьте импорт в src/i18n/index.ts и строку сюда
*
* Новый город:
*   1. Добавьте объект в `cities` (id + код страны)
*   2. В КАЖДОЙ локали добавьте city.<id>.name и city.<id>.genitive
*   Контент страницы общий; название города подставляется в тексты.
*/
var languages = [{
	code: "ru",
	label: "Русский",
	short: "RU"
}, {
	code: "en",
	label: "English",
	short: "EN"
}];
var cities = [{
	id: "bishkek",
	country: "KG"
}];
var LANGUAGE_KEY = "robocomm.language";
var CITY_KEY = "robocomm.city";
function isLanguage(value) {
	return languages.some((language) => language.code === value);
}
function isCity(value) {
	return cities.some((city) => city.id === value);
}
var en = {
	nav: {
		opening: "Opening",
		network: "Network",
		projects: "Projects",
		about: "The club",
		team: "Team",
		menu: "Menu",
		close: "Close"
	},
	switcher: {
		label: "City and language",
		city: "City",
		language: "Language"
	},
	city: { bishkek: {
		name: "Bishkek",
		genitive: "Bishkek"
	} },
	hero: {
		eyebrow: "For students. By students.",
		title: "RoboComm — a student robotics club of four colleges in {{city}}",
		lead: "Free. No experience needed. Founded by students for students — with a mentor's support.",
		cta: "Register for the opening",
		secondary: "How the club works"
	},
	banner: {
		date: "27.11",
		text: "Opening — 27 November, 16:00, Salymbekov University. 40 students raise the electronic flag of Kyrgyzstan.",
		reg: "Registration:",
		form: "[form link]"
	},
	opening: {
		index: "02",
		kicker: "Opening 27 November",
		title: "40 rays — one flag",
		diagram: "RoboComm / contour diagram",
		rays: "rays / participants",
		p1: "On 27 November, 40 students from four colleges each solder one LED onto a circular sun contour. The result is the electronic flag of Kyrgyzstan: 40 rays — 40 tribes from the Manas epic, joined into one people.",
		p2: "At the finale, college representatives turn four keys at the same time. The flag lights up only when every key is turned. That is how the club opens.",
		program: "On the program",
		items: [
			"flag soldering — we teach on the spot, 40 seats, 10 per college;",
			"the Oppora mini-challenge in mixed teams — for those who are not soldering;",
			"a demo zone with student projects;",
			"a draw for 6 AICademy discount certificates and 3 certificates for a free NEN test."
		],
		keysCaption: "4 keys → one shared action",
		key: "Key",
		when: "When and where",
		place: "27 November, 16:00–18:30, Salymbekov University, assembly hall, [address, building].",
		door: "Registration at the door from 15:45.",
		come: "I want to come"
	},
	network: {
		index: "03",
		kicker: "Network",
		title: "Four colleges — one network",
		p1: "A robot is not only code. It is also design, game mechanics and a business model. That is why RoboComm is a network of chapters at different colleges.",
		p2: "Chapters at other colleges open after 27 November. Studying somewhere else? Come anyway — mark it on the form.",
		colCollege: "College",
		colTrack: "Chapter",
		opens: "Opens 27 November",
		colleges: [
			{
				id: "salym",
				name: "International College of IT and Business, Salymbekov University",
				track: "IT and business"
			},
			{
				id: "tsi",
				name: "TSI AUCA",
				track: "IT and business"
			},
			{
				id: "compass",
				name: "Compass College",
				track: "Design"
			},
			{
				id: "portal",
				name: "Portal College (not decided yet)",
				track: "Game Dev"
			}
		]
	},
	stages: {
		index: "04",
		kicker: "What you can learn",
		title: "Four stages",
		note: "You choose the level. The club grows each track gradually — as members prepare the sessions.",
		items: [
			{
				title: "Mechanics and electronics",
				text: "Soldering, sensors, 3D printing."
			},
			{
				title: "Arduino and microcontrollers",
				text: "C/C++, ESP32."
			},
			{
				title: "Raspberry Pi and computer vision",
				text: "Python, OpenCV."
			},
			{
				title: "ROS 2 and autonomy",
				text: "SLAM, Nav2."
			}
		]
	},
	projects: {
		index: "05",
		kicker: "From idea to robot",
		title: "Club projects",
		items: [
			{
				tag: "RoboComm / shared project",
				status: "In preparation",
				title: "Electronic flag of Kyrgyzstan",
				text: "The club's first shared project: 40 rays, 40 participants, 4 colleges. We build it at the opening on 27 November."
			},
			{
				tag: "RoboComm / concept",
				status: "Planned, looking for people",
				title: "Autonomous platform",
				text: "A wheeled Raspberry Pi robot that drives without an operator."
			},
			{
				tag: "RoboComm / your idea",
				status: "Open",
				title: "Your project",
				text: "Bring an idea — we will find a team and a mentor among the members."
			}
		]
	},
	principles: {
		index: "06",
		kicker: "Principles",
		title: "How the club works",
		lead: "From students, for students.",
		text: "Members prepare the sessions themselves, find materials and run the events. You leave with skills and with experience you can show an employer.",
		cards: [
			{
				title: "What we have now",
				text: "A launch team, a mentor, a venue for the opening at Salymbekov University, and partners who help with equipment."
			},
			{
				title: "What we don't have yet",
				text: "Our own space and budget. Meetings happen in partner colleges' rooms, and we find materials together with partners."
			},
			{
				title: "What we expect",
				text: "Show up regularly, finish projects, and help newcomers."
			},
			{
				title: "What there won't be",
				text: "Grades, homework and supervision. This is a club, not a class."
			}
		]
	},
	path: {
		index: "07",
		kicker: "Taking part and growing",
		title: "A member's path",
		steps: [
			{
				title: "Member",
				text: "You come to meetings and work on a project."
			},
			{
				title: "Club active",
				text: "You lead a chapter, a track or an event."
			},
			{
				title: "Physical AI",
				text: "The first grant-funded robotics course. Active club members are first in line for selection."
			}
		],
		note: "BIROK is a separate organization that trains robotics mentors and works with schools. The club is free and is not financially tied to BIROK."
	},
	events: {
		index: "08",
		kicker: "Club calendar",
		title: "Events",
		items: [
			{
				date: "6 November",
				time: "—",
				title: "Registration for the opening is open",
				hot: false
			},
			{
				date: "27 November",
				time: "16:00",
				title: "Club opening and flag soldering, Salymbekov University",
				hot: true
			},
			{
				date: "4 December",
				time: "16:00",
				title: "First club meeting and active-member vote",
				hot: false
			}
		],
		telegram: "All announcements are in the club Telegram channel",
		telegramLink: "[Telegram]"
	},
	team: {
		index: "09",
		kicker: "Club people",
		title: "Launch team",
		people: [
			{
				id: "rayana",
				name: "Rayana Urmatbekova",
				role: "Project lead",
				bio: "Runs the launch and makes sure everything happens on time"
			},
			{
				id: "akylai",
				name: "Akylai Ashirbekova",
				role: "Event manager",
				bio: "Opening script and the flag-lighting ceremony"
			},
			{
				id: "aizirek",
				name: "Aizirek Mairambekova",
				role: "SMM",
				bio: "The club's voice on social media"
			},
			{
				id: "aisha",
				name: "Aisha Timurova",
				role: "College partnerships",
				bio: "Agrees the network with the colleges"
			},
			{
				id: "elina",
				name: "Elina Erkinbekova",
				role: "Logistics and registration",
				bio: "Venue and participant registration"
			},
			{
				id: "adilkhan",
				name: "Adilkhan Satymkulov",
				role: "Tech lead",
				bio: "Electronic-flag schematic and the technical side"
			},
			{
				id: "anvar",
				name: "Anvar Kumushbekov",
				role: "Web and data",
				bio: "Site and registration"
			},
			{
				id: "abdykerim",
				name: "Abdykerim Adenov",
				role: "Mentor",
				bio: "Head of BIROK, WRCC 2026 participant in Baku"
			}
		]
	},
	faq: {
		index: "10",
		kicker: "FAQ",
		title: "Questions and answers",
		items: [
			{
				q: "Do I need experience?",
				a: "No. We will teach soldering and programming."
			},
			{
				q: "How much does it cost?",
				a: "Nothing. The club is free."
			},
			{
				q: "I study at another college. Can I join?",
				a: "Yes. Choose “another college” when you register."
			},
			{
				q: "What is Physical AI?",
				a: "The first grant-funded robotics course. Active club members are first in line for selection."
			},
			{
				q: "How do I join the club active?",
				a: "Come to the opening or the first meeting on 4 December and fill in the form. The active is chosen by vote at the first meeting."
			}
		]
	},
	contact: {
		index: "11",
		kicker: "Contact",
		title: "In touch with RoboComm",
		mail: "[email]",
		instagram: "Instagram [Instagram]",
		telegram: "Telegram [Telegram]"
	},
	footer: {
		rights: "© 2026 RoboComm, {{city}}. Student robotics club of Salymbekov · TSI AUCA · Compass College.",
		year: "2026"
	}
};
var ru = {
	nav: {
		opening: "Открытие",
		network: "Сеть",
		projects: "Проекты",
		about: "О клубе",
		team: "Команда",
		menu: "Меню",
		close: "Закрыть"
	},
	switcher: {
		label: "Город и язык",
		city: "Город",
		language: "Язык"
	},
	city: { bishkek: {
		name: "Бишкек",
		genitive: "Бишкека"
	} },
	hero: {
		eyebrow: "Студентам. Для студентов.",
		title: "RoboComm — студенческий клуб робототехники четырёх колледжей {{city}}",
		lead: "Бесплатно. Без опыта. Основан студентами для студентов — при поддержке куратора.",
		cta: "Зарегистрироваться на открытие",
		secondary: "Как устроен клуб"
	},
	banner: {
		date: "27.11",
		text: "Открытие — 27 ноября, 16:00, Salymbekov University. 40 студентов ставят электронный флаг Кыргызстана.",
		reg: "Регистрация:",
		form: "[ссылка на форму]"
	},
	opening: {
		index: "02",
		kicker: "Открытие 27 ноября",
		title: "40 лучей — один флаг",
		diagram: "RoboComm / схема контура",
		rays: "лучей / участников",
		p1: "27 ноября 40 студентов из четырёх колледжей припают по одному светодиоду на круговой контур солнца. Получится электронный флаг Кыргызстана: 40 лучей — 40 племён из эпоса «Манас», объединившихся в один народ.",
		p2: "В финале представители колледжей одновременно повернут четыре ключа. Флаг загорится, только когда повернут все. Так откроется клуб.",
		program: "В программе",
		items: [
			"пайка флага — паять научим на месте, 40 мест, по 10 на колледж;",
			"мини-челлендж «Опора» в смешанных командах — для тех, кто не паяет;",
			"демо-зона с проектами студентов;",
			"розыгрыш 6 сертификатов на скидку AICademy и 3 сертификатов на бесплатное прохождение теста NEN."
		],
		keysCaption: "4 ключа → одно общее действие",
		key: "Ключ",
		when: "Когда и где",
		place: "27 ноября, 16:00–18:30, Salymbekov University, актовый зал, [адрес, корпус].",
		door: "Регистрация на входе с 15:45.",
		come: "Хочу прийти"
	},
	network: {
		index: "03",
		kicker: "Сеть",
		title: "Четыре колледжа — одна сеть",
		p1: "Робот — это не только код. Это ещё дизайн, игровая механика и бизнес-модель. Поэтому RoboComm — сеть отделений при разных колледжах.",
		p2: "Отделения в других колледжах открываются после 27 ноября. Учишься в другом колледже? Тоже приходи — отметь это в форме.",
		colCollege: "Колледж",
		colTrack: "Отделение",
		opens: "Открывается 27 ноября",
		colleges: [
			{
				id: "salym",
				name: "Международный колледж IT и бизнеса Salymbekov University",
				track: "IT и бизнес"
			},
			{
				id: "tsi",
				name: "TSI AUCA",
				track: "IT и бизнес"
			},
			{
				id: "compass",
				name: "Compass College",
				track: "Дизайн"
			},
			{
				id: "portal",
				name: "Portal College (Не определились)",
				track: "Game Dev"
			}
		]
	},
	stages: {
		index: "04",
		kicker: "Чему можно научиться",
		title: "Четыре ступени",
		note: "Уровень выбираешь сам. Направления клуб развивает постепенно — по мере того, как участники готовят занятия.",
		items: [
			{
				title: "Механика и электроника",
				text: "Пайка, датчики, 3D-печать."
			},
			{
				title: "Arduino и микроконтроллеры",
				text: "C/C++, ESP32."
			},
			{
				title: "Raspberry Pi и компьютерное зрение",
				text: "Python, OpenCV."
			},
			{
				title: "ROS 2 и автономность",
				text: "SLAM, Nav2."
			}
		]
	},
	projects: {
		index: "05",
		kicker: "От идеи к роботу",
		title: "Проекты клуба",
		items: [
			{
				tag: "RoboComm / общий проект",
				status: "Идёт подготовка",
				title: "Электронный флаг Кыргызстана",
				text: "Первый общий проект клуба: 40 лучей, 40 участников, 4 колледжа. Собираем на открытии 27 ноября."
			},
			{
				tag: "RoboComm / концепция",
				status: "В планах, ищем участников",
				title: "Автономная платформа",
				text: "Колёсный робот на Raspberry Pi, который ездит без оператора."
			},
			{
				tag: "RoboComm / твоя идея",
				status: "Открыто",
				title: "Твой проект",
				text: "Предложи идею — найдём команду и наставника среди участников."
			}
		]
	},
	principles: {
		index: "06",
		kicker: "Принципы",
		title: "Как устроен клуб",
		lead: "От студентов для студентов.",
		text: "Участники сами готовят занятия, находят материалы и проводят мероприятия. Так ты получаешь не только навыки, но и опыт, который можно показать работодателю.",
		cards: [
			{
				title: "Что есть сейчас",
				text: "Команда запуска, куратор, площадка для открытия в Salymbekov University и партнёры, которые помогают оборудованием."
			},
			{
				title: "Чего пока нет",
				text: "Своего помещения и бюджета. Встречи проходят в аудиториях колледжей-партнёров, материалы находим вместе с партнёрами."
			},
			{
				title: "Что ждём от участников",
				text: "Приходить регулярно, доводить проекты до конца, помогать новичкам."
			},
			{
				title: "Чего не будет",
				text: "Оценок, домашних заданий и контроля. Это клуб, а не пара."
			}
		]
	},
	path: {
		index: "07",
		kicker: "Участие и рост",
		title: "Путь участника",
		steps: [
			{
				title: "Участник",
				text: "Приходишь на встречи, работаешь над проектом."
			},
			{
				title: "Актив клуба",
				text: "Ведёшь отделение, направление или мероприятие."
			},
			{
				title: "Physical AI",
				text: "Первый грантовый курс по робототехнике. Активные участники клуба — в приоритете отбора."
			}
		],
		note: "BIROK — отдельная организация, которая готовит менторов по робототехнике и работает со школами. Клуб бесплатный и с BIROK не связан финансово."
	},
	events: {
		index: "08",
		kicker: "Календарь клуба",
		title: "События",
		items: [
			{
				date: "6 ноября",
				time: "—",
				title: "Открыта регистрация на открытие",
				hot: false
			},
			{
				date: "27 ноября",
				time: "16:00",
				title: "Открытие клуба и пайка флага, Salymbekov University",
				hot: true
			},
			{
				date: "4 декабря",
				time: "16:00",
				title: "Первая встреча клуба и выбор актива",
				hot: false
			}
		],
		telegram: "Все анонсы — в Telegram-канале клуба",
		telegramLink: "[Telegram]"
	},
	team: {
		index: "09",
		kicker: "Люди клуба",
		title: "Команда запуска",
		people: [
			{
				id: "rayana",
				name: "Райана Урматбекова",
				role: "Руководитель проекта",
				bio: "Ведёт запуск клуба и следит, чтобы всё случилось вовремя"
			},
			{
				id: "akylai",
				name: "Акылай Аширбекова",
				role: "Ивент-менеджер",
				bio: "Сценарий открытия и церемония зажигания флага"
			},
			{
				id: "aizirek",
				name: "Айзирек Майрамбекова",
				role: "SMM",
				bio: "Голос клуба в соцсетях"
			},
			{
				id: "aisha",
				name: "Аиша Тимурова",
				role: "Партнёрства с колледжами",
				bio: "Договаривается с колледжами сети"
			},
			{
				id: "elina",
				name: "Элина Эркинбекова",
				role: "Логистика и регистрация",
				bio: "Площадка и регистрация участников"
			},
			{
				id: "adilkhan",
				name: "Адилхан Сатымкулов",
				role: "Техлид",
				bio: "Схема электронного флага и техническая часть"
			},
			{
				id: "anvar",
				name: "Анвар Кумушбеков",
				role: "Веб и данные",
				bio: "Сайт и регистрация"
			},
			{
				id: "abdykerim",
				name: "Абдыкерим Аденов",
				role: "Куратор",
				bio: "Руководитель BIROK, участник WRCC 2026 в Баку"
			}
		]
	},
	faq: {
		index: "10",
		kicker: "FAQ",
		title: "Вопросы и ответы",
		items: [
			{
				q: "Нужен ли опыт?",
				a: "Нет. Паять и программировать научим."
			},
			{
				q: "Сколько стоит?",
				a: "Нисколько. Клуб бесплатный."
			},
			{
				q: "Я учусь в другом колледже. Можно?",
				a: "Да. При регистрации выбери «другой колледж»."
			},
			{
				q: "Что такое Physical AI?",
				a: "Первый грантовый курс по робототехнике. Активные участники клуба — в приоритете отбора."
			},
			{
				q: "Как попасть в актив клуба?",
				a: "Приходи на открытие или на первую встречу 4 декабря и заполни анкету. Актив выбирают голосованием на первой встрече."
			}
		]
	},
	contact: {
		index: "11",
		kicker: "Контакты",
		title: "На связи с RoboComm",
		mail: "[почта]",
		instagram: "Instagram [Instagram]",
		telegram: "Telegram [Telegram]"
	},
	footer: {
		rights: "© 2026 RoboComm, {{city}}. Студенческий клуб робототехники Salymbekov · TSI AUCA · Compass College.",
		year: "2026"
	}
};
if (!instance.isInitialized) instance.use(initReactI18next).init({
	resources: {
		ru: { translation: ru },
		en: { translation: en }
	},
	lng: "ru",
	fallbackLng: "ru",
	interpolation: { escapeValue: false },
	react: { useSuspense: false }
});
var i18n_default = instance;
var LocaleContext = (0, import_react.createContext)(null);
function LocaleProvider({ children }) {
	const [city, setCityState] = (0, import_react.useState)("bishkek");
	const [language, setLanguageState] = (0, import_react.useState)("ru");
	(0, import_react.useEffect)(() => {
		const storedLanguage = localStorage.getItem(LANGUAGE_KEY);
		const storedCity = localStorage.getItem(CITY_KEY);
		if (isLanguage(storedLanguage)) {
			setLanguageState(storedLanguage);
			i18n_default.changeLanguage(storedLanguage);
			document.documentElement.lang = storedLanguage;
		}
		if (isCity(storedCity)) setCityState(storedCity);
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		city,
		language,
		setCity: (next) => {
			setCityState(next);
			localStorage.setItem(CITY_KEY, next);
		},
		setLanguage: (next) => {
			setLanguageState(next);
			localStorage.setItem(LANGUAGE_KEY, next);
			i18n_default.changeLanguage(next);
			document.documentElement.lang = next;
		}
	}), [city, language]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocaleContext.Provider, {
		value,
		children
	});
}
function useLocale() {
	const value = (0, import_react.useContext)(LocaleContext);
	if (!value) throw new Error("useLocale must be used within LocaleProvider");
	return value;
}
function useCityName(form = "name") {
	const { t } = useTranslation();
	const { city } = useLocale();
	return t(`city.${city}.${form}`);
}
function RayDiagram({ compact = false, label, caption }) {
	const dots = 40;
	const rays = 40;
	const coord = (value) => value.toFixed(3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: compact ? "relative" : "relative overflow-hidden rounded-3xl bg-panel",
		children: [
			!compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/media/Flag_of_Kyrgyzstan.webp",
				alt: "",
				className: "pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30 saturate-0"
			}) : null,
			!compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg/45" }) : null,
			!compact && label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow absolute top-4 left-4 z-10",
				children: label
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 320 320",
				className: compact ? "h-full w-full" : "relative mx-auto w-full max-w-md",
				"aria-hidden": true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
						className: "spin-slow",
						children: Array.from({ length: rays }, (_, index) => {
							const angle = index / rays * Math.PI * 2;
							const x2 = coord(160 + Math.cos(angle) * 98);
							const y2 = coord(160 + Math.sin(angle) * 98);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "160",
								y1: "160",
								x2,
								y2,
								stroke: "rgba(200,182,255,0.38)",
								strokeWidth: "1"
							}, index);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "160",
						cy: "160",
						r: "78",
						fill: "none",
						stroke: "rgba(200,182,255,0.28)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "160",
						cy: "160",
						r: "112",
						fill: "none",
						stroke: "rgba(200,182,255,0.45)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "160",
						cy: "160",
						r: "128",
						fill: "none",
						stroke: "rgba(200,182,255,0.22)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "160",
						y1: "18",
						x2: "160",
						y2: "302",
						stroke: "rgba(200,182,255,0.28)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "18",
						y1: "160",
						x2: "302",
						y2: "160",
						stroke: "rgba(200,182,255,0.28)"
					}),
					[
						[160, 14],
						[160, 306],
						[14, 160],
						[306, 160]
					].map(([x, y]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: x,
						cy: y,
						r: "2.2",
						fill: "#c8b6ff"
					}, `${x}-${y}`)),
					Array.from({ length: dots }, (_, index) => {
						const angle = index / dots * Math.PI * 2 - Math.PI / 2;
						const x = coord(160 + Math.cos(angle) * 128);
						const y = coord(160 + Math.sin(angle) * 128);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							className: "dot-breathe",
							cx: x,
							cy: y,
							r: "4.3",
							fill: "#d5c8ff",
							style: { animationDelay: `${index * 70}ms` }
						}, index);
					}),
					!compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "160",
						y: "168",
						textAnchor: "middle",
						fill: "#f3f2f8",
						fontSize: "78",
						fontFamily: "Inter, sans-serif",
						fontWeight: "650",
						children: "40"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "160",
						y: "196",
						textAnchor: "middle",
						fill: "#b7b3c9",
						fontSize: "11",
						letterSpacing: "1.5",
						fontFamily: "Inter, sans-serif",
						children: (caption ?? "").toUpperCase()
					})] }) : null
				]
			})
		]
	});
}
function cn(...parts) {
	return parts.filter(Boolean).join(" ");
}
function Reveal({ children, className, delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setShown(true);
			return;
		}
		const observer = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setShown(true);
				observer.disconnect();
			}
		}, {
			threshold: .18,
			rootMargin: "0px 0px -10% 0px"
		});
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("reveal", shown && "is-in", className),
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function LocaleSwitcher({ className }) {
	const { t } = useTranslation();
	const { city, language, setCity, setLanguage } = useLocale();
	const [open, setOpen] = (0, import_react.useState)(false);
	const rootRef = (0, import_react.useRef)(null);
	const panelId = (0, import_react.useId)();
	const cityName = t(`city.${city}.name`);
	const short = languages.find((item) => item.code === language)?.short ?? "RU";
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onPointer = (event) => {
			if (!rootRef.current?.contains(event.target)) setOpen(false);
		};
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		document.addEventListener("mousedown", onPointer);
		document.addEventListener("keydown", onKey);
		return () => {
			document.removeEventListener("mousedown", onPointer);
			document.removeEventListener("keydown", onKey);
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: rootRef,
		className: cn("relative", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "flex h-11 items-center gap-2 rounded-full border border-hairline bg-white/5 px-3.5 text-xs font-semibold tracking-[0.12em] text-lilac uppercase transition-colors hover:bg-white/10",
			"aria-haspopup": "dialog",
			"aria-expanded": open,
			"aria-controls": panelId,
			onClick: () => setOpen((value) => !value),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "size-1.5 rounded-full bg-lilac",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "max-w-28 truncate",
					children: cityName
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-soft",
					children: "/"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: short }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-3.5 transition-transform", open && "rotate-180") })
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			id: panelId,
			role: "dialog",
			"aria-label": t("switcher.label"),
			className: "absolute top-[calc(100%+0.5rem)] right-0 z-50 w-72 rounded-2xl border border-hairline bg-card p-2 shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-3 pt-2 pb-1 text-[0.68rem] font-semibold tracking-[0.14em] text-dim uppercase",
					children: t("switcher.city")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: cities.map((item) => {
					const selected = item.id === city;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: cn("flex min-h-11 w-full items-center gap-3 rounded-xl px-3 text-left text-sm transition-colors", selected ? "bg-lilac/15 text-ink" : "text-soft hover:bg-white/5 hover:text-ink"),
						onClick: () => setCity(item.id),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: cn("size-4 text-lilac", !selected && "opacity-0") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 font-medium",
								children: t(`city.${item.id}.name`)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs tracking-wider text-dim",
								children: item.country
							})
						]
					}) }, item.id);
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 px-3 pt-2 pb-1 text-[0.68rem] font-semibold tracking-[0.14em] text-dim uppercase",
					children: t("switcher.language")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: languages.map((item) => {
					const selected = item.code === language;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: cn("flex min-h-11 w-full items-center gap-3 rounded-xl px-3 text-left text-sm transition-colors", selected ? "bg-lilac/15 text-ink" : "text-soft hover:bg-white/5 hover:text-ink"),
						onClick: () => {
							setLanguage(item.code);
							setOpen(false);
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: cn("size-4 text-lilac", !selected && "opacity-0") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 font-medium",
								children: item.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs tracking-wider text-dim",
								children: item.short
							})
						]
					}) }, item.code);
				}) })
			]
		}) : null]
	});
}
var links = [
	{
		href: "#opening",
		key: "opening"
	},
	{
		href: "#network",
		key: "network"
	},
	{
		href: "#projects",
		key: "projects"
	},
	{
		href: "#club",
		key: "about"
	},
	{
		href: "#team",
		key: "team"
	}
];
function SiteHeader() {
	const { t } = useTranslation();
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-hairline/80 bg-bg/80 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap flex h-16 items-center gap-3 md:h-[4.5rem]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex min-w-0 items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/brand/mark.png",
						alt: "",
						className: "size-9 rounded-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-lg font-semibold tracking-tight",
						children: "RoboComm"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "ml-auto hidden items-center gap-7 lg:flex",
					"aria-label": t("nav.menu"),
					children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "text-sm text-soft transition-colors hover:text-ink",
						children: t(`nav.${link.key}`)
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-center gap-2 lg:ml-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocaleSwitcher, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-11 place-items-center rounded-full border border-hairline text-ink lg:hidden",
						"aria-expanded": open,
						"aria-label": open ? t("nav.close") : t("nav.menu"),
						onClick: () => setOpen((value) => !value),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("border-t border-hairline lg:hidden", !open && "hidden"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "wrap flex flex-col py-2",
				"aria-label": t("nav.menu"),
				children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					className: "flex min-h-12 items-center text-base text-ink",
					onClick: () => setOpen(false),
					children: t(`nav.${link.key}`)
				}, link.href))
			})
		})]
	});
}
/** Ссылки клуба. Пустая строка — на сайте остаётся подпись из макета. */
var site = {
	registrationUrl: "",
	email: "",
	instagram: "",
	telegram: ""
};
var stageArt = [
	{
		image: "/media/stage-mech.jpg",
		icon: Cog
	},
	{
		image: "/media/stage-arduino.jpg",
		icon: CircuitBoard
	},
	{
		image: "/media/stage-pi.jpg",
		icon: Eye
	},
	{
		image: "/media/stage-ros.jpg",
		icon: Waypoints
	}
];
var collegeLogos = {
	salym: "/media/college-salym.png",
	tsi: "/media/college-tsi.png",
	compass: "/media/college-compass.png",
	portal: "/media/college-portal.png"
};
var principleIcons = [
	Check,
	CircleDashed,
	Shield,
	Minus
];
var teamPhotos = {
	rayana: "/media/Urmatbekova_img.jpg",
	akylai: "/media/Ashirbekova_img.jpg",
	aizirek: "/media/Mairambekova_img.jpg",
	aisha: "/media/Timurova_img.jpg",
	elina: "/media/Erkinbekova_img.jpg",
	adilkhan: "/media/Satymkulov_img.jpg",
	anvar: "/media/Kumushbekov_img.jpg",
	abdykerim: "/media/Adenov_img.jpg"
};
function registrationHref() {
	return site.registrationUrl || "#opening";
}
function FormLink({ children }) {
	const external = site.registrationUrl.startsWith("http");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: registrationHref(),
		className: "text-soft underline decoration-white/20 underline-offset-4 transition-colors hover:text-ink",
		...external ? {
			target: "_blank",
			rel: "noreferrer"
		} : {},
		children
	});
}
function SectionKicker({ index, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6 flex items-center gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "eyebrow shrink-0",
			children: [index, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-dim",
				children: [" / ", label]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-hairline" })]
	});
}
function HomeContent() {
	const { t } = useTranslation();
	const cityGen = useCityName("genitive");
	const cityName = useCityName("name");
	const { city } = useLocale();
	const country = cities.find((item) => item.id === city)?.country ?? "";
	const [openFaq, setOpenFaq] = (0, import_react.useState)(null);
	const stages = t("stages.items", { returnObjects: true });
	const colleges = t("network.colleges", { returnObjects: true });
	const program = t("opening.items", { returnObjects: true });
	const projects = t("projects.items", { returnObjects: true });
	const cards = t("principles.cards", { returnObjects: true });
	const steps = t("path.steps", { returnObjects: true });
	const events = t("events.items", { returnObjects: true });
	const people = t("team.people", { returnObjects: true });
	const faqs = t("faq.items", { returnObjects: true });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-screen bg-bg text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "wrap pt-12 pb-8 md:pt-16 md:pb-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hero-in eyebrow",
								style: { animationDelay: "40ms" },
								children: t("hero.eyebrow")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "hero-in display mt-4 max-w-3xl",
								style: { animationDelay: "90ms" },
								children: t("hero.title", { city: cityGen })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hero-in mt-6 max-w-xl text-base leading-relaxed text-soft md:text-lg",
								style: { animationDelay: "160ms" },
								children: t("hero.lead")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hero-in mt-8 flex flex-wrap gap-3",
								style: { animationDelay: "220ms" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: registrationHref(),
									className: "inline-flex min-h-12 items-center gap-3 rounded-2xl bg-lilac px-5 text-sm font-semibold text-onlilac transition-transform duration-150 hover:brightness-105 active:scale-[0.96]",
									...site.registrationUrl.startsWith("http") ? {
										target: "_blank",
										rel: "noreferrer"
									} : {},
									children: [t("hero.cta"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#club",
									className: "inline-flex min-h-12 items-center gap-3 rounded-2xl border border-hairline px-5 text-sm font-medium text-ink transition-colors hover:bg-white/5 active:scale-[0.96]",
									children: [t("hero.secondary"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-4" })]
								})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hero-in float-y mx-auto w-full max-w-md",
							style: { animationDelay: "180ms" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/brand/hero-logo.png",
								alt: "RoboComm",
								className: "w-full max-w-full rounded-[2rem]"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#opening",
						className: "hero-in mt-10 flex flex-col items-start gap-3 rounded-3xl bg-band px-5 py-4 transition-transform duration-150 hover:brightness-110 sm:flex-row sm:items-center sm:gap-4 md:px-7 md:py-5",
						style: { animationDelay: "280ms" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shrink-0 text-2xl font-medium tracking-tight text-lilac md:text-3xl",
								children: t("banner.date")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden h-8 w-px bg-hairline sm:block" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 flex-1 text-sm leading-relaxed text-ink md:text-base",
								children: t("banner.text")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "hidden size-4 shrink-0 text-lilac sm:block" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-dim",
						children: [
							t("banner.reg"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLink, { children: t("banner.form") })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "opening",
				className: "scroll-mt-24 py-16 md:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
							index: t("opening.index"),
							label: t("opening.kicker")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "section-title",
							children: t("opening.title")
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 grid items-start gap-10 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RayDiagram, {
									label: t("opening.diagram"),
									caption: t("opening.rays")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4",
									children: [
										1,
										2,
										3,
										4
									].map((key, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-hairline bg-panel/80 text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, {
											className: "key-turn size-5 text-lilac",
											style: { animationDelay: `${index * .35}s` }
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "eyebrow",
											children: [
												t("opening.key"),
												" ",
												key
											]
										})]
									}, key))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-xs tracking-[0.16em] text-dim uppercase",
									children: t("opening.keysCaption")
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								delay: 80,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-4 text-base leading-relaxed text-soft",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("opening.p1") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("opening.p2") })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-8 text-xl font-semibold",
										children: t("opening.program")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-4 space-y-3",
										children: program.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-3 text-sm leading-relaxed text-soft md:text-base",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 rounded-full bg-lilac" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
										}, item))
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "mt-10 flex flex-col gap-4 border-t border-hairline pt-6 sm:flex-row sm:items-end sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-dim",
									children: t("opening.when")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 max-w-2xl text-ink",
									children: t("opening.place")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm text-dim",
									children: [
										t("opening.door"),
										" · ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLink, { children: t("banner.form") })
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: registrationHref(),
								className: "inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-2xl bg-lilac px-5 text-sm font-semibold text-onlilac active:scale-[0.96]",
								...site.registrationUrl.startsWith("http") ? {
									target: "_blank",
									rel: "noreferrer"
								} : {},
								children: [t("opening.come"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "network",
				className: "scroll-mt-24 py-16 md:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
						index: t("network.index"),
						label: t("network.kicker")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-title max-w-3xl",
						children: t("network.title")
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 text-soft leading-relaxed",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("network.p1") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("network.p2") })]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: 80,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden grid-cols-[1fr_auto] px-2 pb-2 text-xs tracking-[0.14em] text-dim uppercase sm:grid",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("network.colCollege") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("network.colTrack") })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: colleges.map((college, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid grid-cols-[auto_auto_1fr] items-center gap-3 border-t border-hairline py-4 sm:grid-cols-[auto_auto_1fr_auto] sm:gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-2 rounded-full", index === 0 ? "bg-lilac" : "border border-soft/70") }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: collegeLogos[college.id],
										alt: "",
										className: "size-11 rounded-xl object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium text-ink",
											children: college.name
										}), index === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 inline-flex rounded-full bg-band px-2.5 py-1 text-xs text-lilac sm:hidden",
											children: t("network.opens")
										}) : null]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "col-span-3 text-sm text-soft sm:col-span-1 sm:text-right",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: college.track }), index === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 hidden rounded-full bg-band px-2.5 py-1 text-xs text-lilac sm:inline-flex",
											children: t("network.opens")
										}) : null]
									})
								]
							}, college.id)) })]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "learn",
				className: "scroll-mt-24 py-16 md:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
							index: t("stages.index"),
							label: t("stages.kicker")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "section-title",
							children: t("stages.title")
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
							children: stages.map((stage, index) => {
								const Icon = stageArt[index]?.icon ?? Cog;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: index * 80,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "relative h-72 overflow-hidden rounded-3xl",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: stageArt[index]?.image,
												alt: "",
												className: "absolute inset-0 h-full w-full object-cover"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative flex h-full flex-col justify-between p-5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-start justify-between text-sm text-ink/80",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["0", index + 1] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-xl leading-tight font-semibold",
													children: stage.title
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-sm text-ink/80",
													children: stage.text
												})] })]
											})
										]
									})
								}, stage.title);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-3xl text-soft leading-relaxed",
							children: t("stages.note")
						}) })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "projects",
				className: "scroll-mt-24 py-16 md:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
						index: t("projects.index"),
						label: t("projects.kicker")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-title",
						children: t("projects.title")
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 lg:grid-cols-3",
						children: projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: index * 90,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "flex h-full flex-col rounded-3xl border border-hairline bg-card p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative aspect-[4/3] overflow-hidden rounded-2xl bg-panel",
										children: [index === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RayDiagram, { compact: true }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: index === 1 ? "/media/proj-rover.jpg" : "/media/proj-expo.jpg",
											alt: "",
											className: "h-full w-full object-cover"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "absolute bottom-3 left-3 text-xs tracking-widest text-ink/80 uppercase",
											children: project.tag
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-4 inline-flex w-fit rounded-full bg-band px-3 py-1 text-xs text-lilac",
										children: project.status
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 text-2xl leading-tight font-semibold",
										children: project.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 pb-2 text-sm leading-relaxed text-soft",
										children: project.text
									})
								]
							})
						}, project.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "club",
				className: "scroll-mt-24 py-16 md:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
						index: t("principles.index"),
						label: t("principles.kicker")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-title",
						children: t("principles.title")
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-3xl leading-tight font-semibold text-lilac md:text-4xl",
							children: t("principles.lead")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md leading-relaxed text-soft",
							children: t("principles.text")
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3 sm:grid-cols-2",
							children: cards.map((card, index) => {
								const Icon = principleIcons[index] ?? Minus;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: index * 70,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "h-full rounded-3xl bg-card p-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 text-lilac" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-4 text-lg font-semibold",
												children: card.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm leading-relaxed text-soft",
												children: card.text
											})
										]
									})
								}, card.title);
							})
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "path",
				className: "scroll-mt-24 py-16 md:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
							index: t("path.index"),
							label: t("path.kicker")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "section-title",
							children: t("path.title")
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-10 grid gap-8 md:grid-cols-3",
							children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: index * 90,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-4 flex items-center gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "grid size-10 place-items-center rounded-full border border-lilac/50 text-sm text-lilac",
												children: ["0", index + 1]
											}),
											index < steps.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden h-px flex-1 bg-hairline md:block" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden h-px flex-1 bg-hairline md:block" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "hidden size-4 -rotate-45 text-dim md:block" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-2xl font-semibold",
										children: step.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-sm text-sm leading-relaxed text-soft",
										children: step.text
									})
								] })
							}, step.title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-10 flex gap-3 rounded-2xl border border-hairline px-4 py-4 text-sm leading-relaxed text-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "mt-0.5 size-4 shrink-0 text-lilac" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("path.note") })]
						}) })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "events",
				className: "scroll-mt-24 py-16 md:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
						index: t("events.index"),
						label: t("events.kicker")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-title",
						children: t("events.title")
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 overflow-hidden rounded-3xl border border-hairline",
						children: events.map((event) => {
							const row = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("font-medium", event.hot ? "text-lilac" : "text-ink"),
									children: event.date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-dim",
									children: event.time
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-ink",
									children: event.title
								}),
								event.hot ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 justify-self-end text-lilac" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-4 justify-self-end text-lilac" })
							] });
							const className = cn("grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 px-4 py-4 sm:grid-cols-[9rem_4.5rem_1fr_auto] sm:px-5", event.hot && "bg-band");
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-t border-hairline first:border-t-0",
								children: event.hot ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#opening",
									className,
									children: row
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className,
									children: row
								})
							}, event.title);
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-dim",
						children: [
							t("events.telegram"),
							" ",
							site.telegram ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.telegram,
								className: "text-lilac hover:underline",
								target: "_blank",
								rel: "noreferrer",
								children: t("events.telegramLink")
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-soft",
								children: t("events.telegramLink")
							}),
							"."
						]
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "team",
				className: "scroll-mt-24 py-16 md:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
						index: t("team.index"),
						label: t("team.kicker")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-title",
						children: t("team.title")
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-x-10 md:grid-cols-2",
						children: people.map((person, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: index % 2 * 60,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex min-w-0 gap-4 border-t border-hairline py-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: teamPhotos[person.id] ?? `/media/avatar-${person.id}.jpg`,
									alt: "",
									className: "size-16 shrink-0 rounded-full object-cover sm:size-18"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold",
											children: person.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-lilac",
											children: person.role
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-soft",
											children: person.bio
										})
									]
								})]
							})
						}, person.id))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "faq",
				className: "scroll-mt-24 py-16 md:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
						index: t("faq.index"),
						label: t("faq.kicker")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-title",
						children: t("faq.title")
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 border-t border-hairline",
						children: faqs.map((item, index) => {
							const open = openFaq === index;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-b border-hairline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "flex w-full flex-wrap items-start gap-x-6 gap-y-2 py-5 text-left",
									"aria-expanded": open,
									"aria-controls": `faq-answer-${index}`,
									onClick: () => setOpenFaq((current) => current === index ? null : index),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "order-1 min-w-0 flex-1 text-lg font-medium md:w-[38%] md:flex-none",
											children: item.q
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											id: `faq-answer-${index}`,
											className: cn("order-3 basis-full text-sm leading-relaxed text-soft md:order-2 md:flex-1 md:basis-0", !open && "hidden"),
											children: item.a
										}),
										open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "order-2 size-4 shrink-0 text-dim md:order-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "order-2 size-4 shrink-0 text-dim md:order-3" })
									]
								})
							}, item.q);
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				id: "contact",
				className: "scroll-mt-24 bg-band text-ink",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap py-16 md:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
								index: t("contact.index"),
								label: t("contact.kicker")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "section-title",
									children: t("contact.title")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "mt-2 size-7 text-lilac" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-8 text-base text-lilac md:text-lg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactBit, {
										href: site.email ? `mailto:${site.email}` : "",
										children: t("contact.mail")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-soft",
										children: " · "
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactBit, {
										href: site.instagram,
										children: t("contact.instagram")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-soft",
										children: " · "
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactBit, {
										href: site.telegram,
										children: t("contact.telegram")
									})
								]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "wordmark mt-12",
							children: "RoboComm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-end justify-between gap-4 text-xs tracking-[0.16em] text-lilac/80 uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-xl text-sm tracking-normal text-soft normal-case",
								children: t("footer.rights", { city: cityName })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-right",
								children: [
									cityName,
									" / ",
									country,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									t("footer.year")
								]
							})]
						})
					]
				})
			})
		] })]
	});
}
function ContactBit({ href, children }) {
	if (!href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children });
	const external = href.startsWith("http");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: "hover:underline",
		...external ? {
			target: "_blank",
			rel: "noreferrer"
		} : {},
		children
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocaleProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeContent, {}) });
}
var SplitComponent = HomePage;
//#endregion
export { SplitComponent as component };
