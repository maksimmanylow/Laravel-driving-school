const constants = {
	weekdays: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
	groupStatuses: [{
		key: 1,
		value: 'Открыт набор'
	},
	{
		key: 2,
		value: 'Идет обучение'
	},
	{
		key: 3,
		value: 'Обучение завершено'
	},
	],
	groupCategories: [{
		key: 1,
		value: 'B'
	},{
		key: 2,
		value: 'BC'
	}],
	api: {
		user: '/api/users',
		group: '/api/group'
	}
};

export default constants;
