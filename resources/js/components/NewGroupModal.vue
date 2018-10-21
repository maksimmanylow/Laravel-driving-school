<template>
  <TwoColumnsModal
    :show="show"
    @close="close">
    <template slot="header">
      <h1>Добавить группу</h1>
    </template>
    <template slot="body-left">
      <div class="form-group">
        <label for="exampleInputEmail1">Название</label>
        <input
          :class="{'is-invalid': validationErrors.includes('name')}"
          v-model="group.name"
          class="form-control"
          type="text"
          aria-describedby="emailHelp"
          placeholder="Название">
      </div>
      <div class="form-group">
        <label>Статус</label>
        <multiselect
          :options="constants.groupStatuses"
          v-model="group.status"
          label="value"
          track-by="value" />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Стоимость обучения</label>
        <input
          v-model="group.price"
          :class="{'is-invalid': validationErrors.includes('price')}"
          type="number"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Стоимость обучения">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Стоимость обучения для студентов</label>
        <input
          v-model="group.price_for_students"
          :class="{'is-invalid': validationErrors.includes('price_for_students')}"
          type="number"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Стоимость обучения для студентов">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Категория</label>
        <multiselect
          :options="constants.groupCategories"
          v-model="group.category"
          label="value"
          track-by="value" />
      </div>
    </template>
    <template slot="body-right">
      <div class="form-group">
        <label for="exampleInputEmail1">Начало занятий</label>
        <input
          v-model="group.start_at"
          :class="{'is-invalid': validationErrors.includes('start_at')}"
          type="date"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Начало занятий">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Экзамен</label>
        <input
          v-model="group.exam_date"
          type="date"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Экзамен">
      </div>
      <div class="form-group">
        <label>Дни занятий</label>
        <multiselect
          v-model="group.timetable"
          :options="constants.weekdays"
          :multiple="true"
          :close-on-select="false"
          :clear-on-select="false" />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Начало занятия</label>
        <input
          v-model="group.hours_start_at"
          :class="{'is-invalid': validationErrors.includes('hours_start_at')}"
          type="time"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Начало занятия">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Конец занятия</label>
        <input
          v-model="group.hours_finish_at"
          :class="{'is-invalid': validationErrors.includes('hours_finish_at')}"
          type="time"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Конец занятия">
      </div>
    </template>
    <template slot="footer">
      <span
        class="button-default"
        @click="close">Отмена</span>
      <button
        class="btn btn-success"
        @click="save">Сохранить</button>
    </template>
  </TwoColumnsModal>
</template>

<script>
import TwoColumnsModal from './Modal/TwoColumnsModal';
import Multiselect from 'vue-multiselect';
import C from '../constants';

export default {
	components: {
		TwoColumnsModal,
		Multiselect
	},
	props: {
		show: { type: Boolean, default: false }
	},
	data: () => ({
		validationErrors: [],
		constants: C,
		errors: [],
		group: {
			name: null,
			start_at: null,
			timetable: null,
			hours_start_at: null,
			hours_finish_at: null,
			status: C.groupStatuses[0],
			category: C.groupCategories[0],
			price: 25000,
			price_for_students: 23000,
			is_active: true,
		}
	}),
	methods: {
		close: function () {
			for (var key in this.group) {
				this.group[key] = null;
			}
			this.$emit('close');
		},
		save: function () {
			if (!this.validateAllNotEmpty()) {
				console.info('validation errors');
				return;
			}

			this.group.timetable = JSON.stringify(this.group.timetable);
			this.group.status = this.group.status.key;
			this.group.category = this.group.category.key;

			axios.post(this.constants.api.group, this.group)
				.then(reposnse => {
					console.log('saved');
					this.close();        })
				.catch(e => { this.errors.push(e); });
		},
		validateAllNotEmpty: function () {
			this.validationErrors = [];
			for (let key in this.group) {
				if (!this.group[key] || this.group[key].length == 0) {
					this.validationErrors.push(key);
				}
			}
			return this.validationErrors.length === 0;
		}
	}
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
