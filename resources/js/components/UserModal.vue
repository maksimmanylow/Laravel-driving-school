<template>
  <Modal
    :show="modalShow"
    @open="showCreateModal"
    @close="closeModal"
    @save="saveUser"
    @delete="deleteUser"
  >
    <template slot="header">
      <h3>{{ modalModeLabel }} учащегося</h3>
    </template>
    <template slot="body">
      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          aria-describedby="emailHelp">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Имя</label>
        <input
          v-model="name"
          :class="{'is-invalid': validationErrors.includes('name')}"
          type="text"
          class="form-control"
          aria-describedby="emailHelp">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Фамилия</label>
        <input
          v-model="surname"
          type="text"
          class="form-control"
          aria-describedby="emailHelp">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Телефон</label>
        <input
          v-model="phone"
          :class="{'is-invalid': validationErrors.includes('phone')}"
          type="text"
          class="form-control">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Группа</label>
        <select
          v-model="group_id"
          :class="{'is-invalid': validationErrors.includes('group_id')}"
          class="form-control">
          <option
            v-for="group in groups"
            :key="group.id"
            :value="group.id">
            {{ group.name }} ({{ group.timetable }})
          </option>
        </select>
      </div>
    </template>
    <template slot="footer">
      <span
        class="btn button-default"
        @click="closeModal">Отмена</span>
      <button
        v-if="modalMode == constants.mode.UPDATE"
        class="btn btn-danger"
        @click="deleteUser">Удалить</button>
      <button
        class="btn btn-success"
        @click="saveUser">Сохранить</button>
    </template>
  </Modal>
</template>

<script>
import Modal from './Modal/Modal';
import SearchInput from './SearchInput';

import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';

export default {
	components: {
		Modal,
	},
	computed: {
		name: {
			get() {
				return this.$store.state.user.model.value.name;
			},
			set(val) {
				this.$store.commit('user/setName', val);
			},
		},
		surname: {
			get() {
				return this.$store.state.user.model.value.surname;
			},
			set(val) {
				this.$store.commit('user/setSurname', val);
			},
		},
		phone: {
			get() {
				return this.$store.state.user.model.value.phone;
			},
			set(val) {
				this.$store.commit('user/setPhone', val);
			},
		},
		email: {
			get() {
				return this.$store.state.user.model.value.email;
			},
			set(val) {
				this.$store.commit('user/setEmail', val);
			},
		},
		group_id: {
			get() {
				return this.$store.state.user.model.value.group_id;
			},
			set(val) {
				this.$store.commit('user/setGroup', val);
			},
		},
		...mapState({
			validationErrors: state => state.user.model.validationErrors,
			errors: state => state.user.errors,
			modalShow: state => state.user.modalShow,
			constants: state => state.user.constants,
			groups: state => state.group.all,
			modalMode: state => state.user.modalMode,
		}),
		...mapGetters('user', [
			'modalModeLabel'
		]),
	},
	created () {
		this.$store.dispatch('group/getAll');
		// setTimeout(() => (this.$store.dispatch('user/showMessageOK', 'Just another test')), 2000);
	},
	methods: {
		...mapActions('user', {
			saveUser: 'save',
			deleteUser: 'delete',
		}),
		...mapMutations('user', [
			'closeModal',
			'showCreateModal',
		])
	}
};
</script>
