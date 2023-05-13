import { IAction, IState } from "../modules";

const initialState: IState = {
	userInfo: {
		userFirstNameEU: 'Andrey', userSurnameEU: 'Kurnosov', userFirstNameRU: 'Андрей', userSurnameRU: 'Курносов',
		photoProfile: './img/PhotoUser/1.jpg', logo: '', aboutme: 'внимательный, пунктуальный, трудолюбивый, коммуникабельный.',
		bio: [
			{ id: 1, year: 2001, info: 'Родился в Чувашеской Республике г. Алатырь.' },
			{ id: 2, year: 2016, info: 'Закончил муниципальное бюджетное общеобразовательное учреждение / "Средняя общеобразовательная школа № 2" / города Алатырь Чувашеской Республике.' },
			{ id: 3, year: 2018, info: 'Освоил программу профессионального обучения / Оператора электронно-вычислительных и вычислительных машин.' },
			{ id: 4, year: 2020, info: 'Закончил обучение в Филиале СамГупс в г.Алатырь по специальности / 09.02.03 Программирование в компьютерных системах (техник-программист).' },
			{ id: 5, year: 2022, info: 'Начал заниматься / Frontend разработкой./' },
		],
		like: [
			{ id: 1, info: 'Искусство' },
			{ id: 2, info: 'музыка' },
			{ id: 3, info: 'фотографии' },
			{ id: 4, info: 'игры' },
		],
		links: [
			{ id: 1, label: '@kaenu2', link: 'https://github.com/kaenu2', soc: 'github' },
			{ id: 2, label: '@kaenu2', link: 'https://t.me/kaenu2', soc: 'tg' },
			{ id: 2, label: '@kaenu2', link: 'https://vk.com/kaenu2', soc: 'vk' },
		]
	},
	navMenu: [
		{ id: 1, label: 'Мои работы', link: '/works' },
		{ id: 2, label: 'Источник', link: 'https://github.com/kaenu2/kaenu2-portfolio' },
	],
	stack: [
		{ id: 1, label: 'HTML5', link: 'https://ru.wikipedia.org/wiki/HTML5' },
		{ id: 2, label: 'CSS', link: 'https://ru.wikipedia.org/wiki/CSS' },
		{ id: 3, label: 'SASS, LESS', link: 'https://developer.mozilla.org/ru/docs/Glossary/CSS_preprocessor' },
		{ id: 4, label: 'JavaScript', link: 'https://ru.wikipedia.org/wiki/JavaScript' },
		{ id: 5, label: 'React', link: 'https://react.dev/' },
		{ id: 6, label: 'React-redux', link: 'https://react-redux.js.org/' },
		{ id: 7, label: 'TypeScript', link: 'https://www.typescriptlang.org/' },
		{ id: 10, label: 'Git', link: 'https://git-scm.com/' },
		{ id: 11, label: 'Webpack', link: 'https://webpack.js.org/' },
		{ id: 12, label: 'Gulp', link: 'https://gulpjs.com/' },
		// { id: 9, label: 'Figma (адаптивная и кроссбраузерная верстка по макету)', link: 'https://www.figma.com/' },
		// { id: 8, label: 'Visual Code Studio', link: 'https://code.visualstudio.com/' },
		// { id: 13, label: 'Adobe Photoshop', link: 'https://ru.wikipedia.org/wiki/Adobe_Photoshop' }
	],
	works: [
		{
			id: 1, title: 'Trustcrypt', image: 'https://i.ibb.co/XpwM8GF/2.png', links: 'trustcrypt', category: 'react', website: 'https://kaenu2.github.io/react-trustcrypt/', year: 2023, stack: 'React, React-redux, React-router, SCSS, TypeScript, webpack', screens: [
				{ id: 1, image: 'https://i.ibb.co/Q6Dyyhf/1.jpg' },
				{ id: 2, image: 'https://i.ibb.co/tZjvtCq/2.jpg' }
			], desc: 'Адаптивный и кроссбраузерный Инфо-cайт для компании Trustcrypt на тему криптовалюты. Фичи: React-slider, форма которая делает POST запрос на мой free API. Сортировка, пагинация продуктов и новостей.', source: 'https://github.com/kaenu2/react-trustcrypt', show: true,
		},
		{
			id: 2, title: 'GoCorona', image: './img/Products/logo/GoCorona.jpg', links: 'gocorona', category: 'old', website: 'https://kaenu2.github.io/GoCorona/dist/', year: 2022, stack: 'GULP, SASS, HTML, JS', screens: [
				{ id: 1, image: 'https://i.ibb.co/Dbyd16M/corona.png' },
			], desc: 'Инфо-сайт, который имеет адаптивную и кросбраузерную верстку.', source: 'https://github.com/kaenu2/GoCorona', show: false,
		},
		{
			id: 3, title: 'Flower Shop', image: './img/Products/logo/FlowerShop.jpg', links: 'flowershop', category: 'react', website: 'https://kaenu2.github.io/react-flowers-shop/', year: 2023, stack: 'React, SCSS, redux, webpack', screens: [
				{ id: 1, image: 'https://i.ibb.co/dWJmWvh/fs.png' },
			], desc: 'Интернет магизн цветов. Фичи добавлять (удалять) в корзину, изменять количество товара в корзине. Есть сортировка, фильтр и поиск по товарам.', source: 'https://github.com/kaenu2/react-flowers-shop', show: true,
		},
		{
			id: 4, title: 'Antools.', image: './img/Products/logo/antools.jpg', links: 'antools', category: 'old', website: 'https://kaenu2.github.io/Antools/dist/', year: 2022, stack: 'HTML, SASS, JS, GULP ', screens: [
				{ id: 1, image: 'https://i.ibb.co/VvNKyLD/antools.png' },
			], desc: 'Инфо-сайт, который имеет адаптивную и кросбраузерную верстку.', source: 'https://github.com/kaenu2/Antools', show: false,
		},
		{
			id: 5, title: 'ToDo', image: 'https://i.ibb.co/VH6yxjX/Todo.png', links: 'todo', category: 'app', website: 'https://kaenu2.github.io/todo-app/', year: 2023, stack: 'React, SASS, React-redux, webpack ', screens: [
				{ id: 1, image: 'https://i.ibb.co/VH6yxjX/Todo.png' },
			], desc: 'Это ToDo приложение которое может добавлять быструю задачу или задачу с датой, а так же удалять, изменять, добавлять в избранные, выполненные или лайкнуть. Есть сортировка по задачам и их дате + поиск. ', source: 'https://github.com/kaenu2/todo-app', show: true,
		},
		{
			id: 6, title: 'Конвертер валют', image: 'https://i.ibb.co/xzHdyJ8/convert.png', links: 'converter', category: 'app', website: 'https://kaenu2.github.io/Converter/', year: 2023, stack: 'HTML, css, JS', screens: [
				{ id: 1, image: 'https://i.ibb.co/xzHdyJ8/convert.png' },
			], desc: 'Конвертер валют. Конвертирует Русский рубль, Доллар США, Евро, Казахстанский тенге', source: 'https://github.com/kaenu2/Converter', show: false,
		},
		{
			id: 7, title: 'Секундомер', image: 'https://i.ibb.co/2Y90nDj/sec2.png', links: 'stopwatch', category: 'app', website: 'https://kaenu2.github.io/stopwatch/', year: 2023, stack: 'HTML, css, JS', screens: [
				{ id: 1, image: 'https://i.ibb.co/2KY43pS/sec1.png' },
				{ id: 2, image: 'https://i.ibb.co/2Y90nDj/sec2.png' }
			], desc: 'Это небольшое, аккуратное и простое в использовании приложение, которое предназначено для измерения времени в разных ситуациях: спорт, готовка, игры, обучение и так далее', source: 'https://github.com/kaenu2/stopwatch', show: false,
		},
		{
			id: 8, title: 'Таймер', image: 'https://i.ibb.co/TbYH6RM/timer.png', links: 'timer', category: 'app', website: 'https://kaenu2.github.io/Timer/', year: 2023, stack: 'HTML, css, JS', screens: [
				{ id: 1, image: 'https://i.ibb.co/TbYH6RM/timer.png' },
			], desc: 'Таймер обратного отсчета помогает отслеживать оставшееся время до наступления важных моментов в вашей жизни. Идеально подходит для дней рождения, свадеб и других предстоящих, особенных событий.', source: 'https://github.com/kaenu2/Timer', show: false,
		},
		{
			id: 9, title: 'Cart', image: './img/Products/logo/cart.jpg', links: 'cart', category: 'app', website: 'https://kaenu2.github.io/cart/', year: 2023, stack: 'HTML, css, JS', screens: [
				{ id: 1, image: 'https://i.ibb.co/QmLg85K/cart1.png' },
				{ id: 2, image: 'https://i.ibb.co/KDh8FZt/cart2.png' }
			], desc: 'Приложение Cart - добавляет товары в корзину, увеличивают или уменьшает количество товара в корзине. На 2 старнице мы можем заплнить форму с данными которая отправит POST запрос с данными пользователя. ', source: 'https://github.com/kaenu2/cart', show: true,
		},
		{
			id: 11, title: 'Twits', image: 'https://i.ibb.co/vL82Tm2/twits.png', links: 'twits', category: 'app', website: 'https://kaenu2.github.io/app-twits/', year: 2023, stack: 'React, SASS', screens: [
				{ id: 1, image: 'https://i.ibb.co/vL82Tm2/twits.png' },
			], desc: 'Добавляем твит, который можно лайкнуть, удалить, добавить в избранные. Сортировка твитсов.', source: 'https://github.com/kaenu2/app-twits', show: false,
		},
		{
			id: 12, title: 'Словарь (англ.)', image: './img/Products/logo/vocabulary.jpg', links: 'vocabulary', category: 'app', website: 'https://kaenu2.github.io/app-vocabulary/dist/', year: 2023, stack: 'HTML, SASS, JS, Gulp', screens: [
				{ id: 1, image: 'https://i.ibb.co/cX5yzNj/voc2.png' }
			], desc: '', source: 'https://github.com/kaenu2/app-vocabulary', show: false,
		},
		{
			id: 13, title: 'Anow', image: './img/Products/logo/anow.jpg', links: 'anow', category: 'old', website: 'https://kaenu2.github.io/Anow/dist/', year: 2022, stack: 'HTML, SASS, JS, Gulp', screens: [
				{ id: 1, image: 'https://i.ibb.co/1Rv2WkK/anow1.png' },
			], desc: 'Инфо-сайт, который имеет адаптивную и кросбраузерную верстку.', source: 'https://github.com/kaenu2/Anow', show: false,
		},
		{
			id: 14, title: 'Relvise', image: './img/Products/logo/Relvise.jpg', links: 'relvise', category: 'old', website: 'https://kaenu2.github.io/Relvise/dist/', year: 2022, stack: 'HTML, SASS, JS, Gulp', screens: [
				{ id: 1, image: 'https://i.ibb.co/ZxqPbkB/relvise1.png' },
			], desc: 'Инфо-сайт, который имеет адаптивную и кросбраузерную верстку.', source: 'https://github.com/kaenu2/Relvise', show: false,
		},
		{
			id: 15, title: 'MOVEON', image: './img/Products/logo/moveon.jpg', links: 'moveon', category: 'old', website: 'https://kaenu2.github.io/Moveon/dist/', year: 2022, stack: 'HTML, SASS, JS, Gulp', screens: [
				{ id: 1, image: 'https://i.ibb.co/3YcnF8T/moveon1.png' },
			], desc: 'Инфо-сайт, который имеет адаптивную и кросбраузерную верстку.', source: 'https://github.com/kaenu2/Moveon', show: false,
		},
		{
			id: 16, title: 'Погода', image: './img/Products/logo/weather.jpg', links: 'weather', category: 'app', website: 'https://kaenu2.github.io/app-weather/dist/', year: 2023, stack: 'HTML, SASS, JS, gulp', screens: [
				{ id: 2, image: 'https://i.ibb.co/whfVFfr/weat2.png' }
			], desc: '', source: 'https://github.com/kaenu2/app-weather', show: false,
		},
	],
	footerInfo: {
		label: '© 2023 Andrey Kurnosov'
	},
};


const reducers = (state = initialState, action: IAction) => {
	const { type, payload } = action;
	switch (type) {
		case 'NAME':
			return {
				...state,
			}

		default:
			return {
				...state,
			}
	}
}

export default reducers;
