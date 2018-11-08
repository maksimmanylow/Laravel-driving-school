export default {
	mode: {
		CRAETE: 'create',
		UPDATE: 'update'
	},
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
	}, {
		key: 2,
		value: 'BC'
	}],
	get defaultGroup() {
		return {
			name: null,
			start_at: null,
			timetable: null,
			hours_start_at: null,
			hours_finish_at: null,
			status: this.groupStatuses[0],
			category: this.groupCategories[0],
			price: 25000,
			price_for_students: 23000,
			is_active: true,
		};
	},
	get defaultUser() {
		return {
			name: null,
			surname: null,
			phone: null,
			email: null,
			group_id: null
		};
	},
};
