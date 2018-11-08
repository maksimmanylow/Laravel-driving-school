<template>
  <Modal
    :show="modalShow"
    @close="closeModal">
    <template slot="header">
      <h3>Добавить учащегося</h3>
    </template>
    <template slot="body">
      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input
          v-model="model.email"
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
        >
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Имя</label>
        <input
          v-model="model.name"
          :class="{'is-invalid': validationErrors.includes('name')}"
          type="text"
          class="form-control"
          aria-describedby="emailHelp"
        >
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Фамилия</label>
        <input
          v-model="model.surname"
          type="text"
          class="form-control"
          aria-describedby="emailHelp">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Телефон</label>
        <input
          v-model="model.phone"
          :class="{'is-invalid': validationErrors.includes('phone')}"
          type="text"
          class="form-control">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Группа</label>
        <select
          v-model="model.group_id"
          :class="{'is-invalid': validationErrors.includes('group_id')}"
          class="form-control">
          <option
            v-for="group in groups"
            :key="group.id"
            :value="group.id"
          >
            {{ group.name }} ({{ group.timetable }})
          </option>
        </select>
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
  </Modal>
</template>

<script>
import Modal  from './Modal/Modal';
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
	components: {
		Modal
	},
	computed: mapState({
		model: state => state.user.model.value,
		validationErrors: state => state.user.model.validationErrors,
		errors: state => state.user.errors,
		modalShow: state => state.user.modalShow,
		groups: state => state.group.all,
	}),
	created () {
		this.$store.dispatch('group/getAll');
	},
	methods: {
		...mapActions('user', [
			'create',
			'update',
			'delete'
		]),
		...mapMutations('user', [
			'closeModal',
		])
	}
};
</script>
