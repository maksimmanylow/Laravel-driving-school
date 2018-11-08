<template>
  <TwoColumnsModal
    :show="modalShow"
    @close="closeModal">
    <template slot="header">
      <h3>{{ modalModeLabel }} группу</h3>
    </template>
    <template slot="body-left">
      <div class="form-group">
        <label for="exampleInputEmail1">Название</label>
        <input
          :class="{'is-invalid': validationErrors.includes('name')}"
          v-model="model.name"
          class="form-control"
          type="text"
          aria-describedby="emailHelp"
          placeholder="Название">
      </div>
      <div class="form-group">
        <label>Статус</label>
        <multiselect
          :options="constants.groupStatuses"
          v-model="model.status"
          label="value"
          track-by="value" />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Стоимость обучения</label>
        <input
          v-model="model.price"
          :class="{'is-invalid': validationErrors.includes('price')}"
          type="number"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Стоимость обучения">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Стоимость обучения для студентов</label>
        <input
          v-model="model.price_for_students"
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
          v-model="model.category"
          label="value"
          track-by="value" />
      </div>
    </template>
    <template slot="body-right">
      <div class="form-group">
        <label for="exampleInputEmail1">Начало занятий</label>
        <input
          v-model="model.start_at"
          :class="{'is-invalid': validationErrors.includes('start_at')}"
          type="date"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Начало занятий">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Экзамен</label>
        <input
          v-model="model.exam_date"
          type="date"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Экзамен">
      </div>
      <div class="form-group">
        <label>Дни занятий</label>
        <multiselect
          v-model="model.timetable"
          :options="constants.weekdays"
          :multiple="true"
          :close-on-select="false"
          :clear-on-select="false" />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Начало занятия</label>
        <input
          v-model="model.hours_start_at"
          :class="{'is-invalid': validationErrors.includes('hours_start_at')}"
          type="time"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Начало занятия">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Конец занятия</label>
        <input
          v-model="model.hours_finish_at"
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
        @click="closeModal">Отмена</span>
      <button
        class="btn btn-success"
        @click="create">Сохранить</button>
    </template>
  </TwoColumnsModal>
</template>

<script>
import TwoColumnsModal from './Modal/TwoColumnsModal';
import Multiselect from 'vue-multiselect';
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';

export default {
	components: {
		TwoColumnsModal,
		Multiselect
	},
	computed: {
		...mapState({
			model: state => state.group.model.value,
			validationErrors: state => state.group.model.validationErrors,
			errors: state => state.group.errors,
			modalShow: state => state.group.modalShow,
			modalModeLabel: state => state.group.modalModeLabel,
			constants: state => state.group.constants,
		}),
		...mapGetters('group',[
			'modalModeLabel'
		]),
	},
	methods: {
		...mapActions('group', [
			'create',
			'update',
			'delete'
		]),
		...mapMutations('group', [
			'closeModal',
		])
	},
};
</script>
