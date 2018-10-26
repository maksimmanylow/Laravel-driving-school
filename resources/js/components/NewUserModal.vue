<template>
  <Modal
    :show="show"
    @close="close">
    <template slot="header">
      <h3>Добавить учащегося</h3>
    </template>
    <template slot="body">
      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input
          v-model="user.email"
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
        >
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Имя</label>
        <input
          v-model="user.name"
          :class="{'is-invalid': validationErrors.includes('name')}"
          type="text"
          class="form-control"
          aria-describedby="emailHelp"
        >
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Фамилия</label>
        <input
          v-model="user.surname"
          type="text"
          class="form-control"
          aria-describedby="emailHelp">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Телефон</label>
        <input
          v-model="user.phone"
          :class="{'is-invalid': validationErrors.includes('phone')}"
          type="text"
          class="form-control">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Группа</label>
        <select
          v-model="user.group_id"
          :class="{'is-invalid': validationErrors.includes('group_id')}"
          class="form-control form-control-sm">
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
        @click="close">Отмена</span>
      <button
        class="btn btn-success"
        @click="save">Сохранить</button>
    </template>
  </Modal>
</template>

<script>
import Modal  from './Modal/Modal';
import C from '../constants';

export default {
	components: {
		Modal
	},
	props: {
		show: { type: Boolean, default: false }
	},
	data: () => ({
		constants: C,
		user: {
			name: '',
			surname: '',
			phone: null,
			email: '',
			group_id: null
		},
		required: ['name', 'phone', 'group_id'],
		validationErrors: [],
		errors: [],
		groups: [],
	}),
	mounted: function () {
		axios.get(C.api.group)
			.then(reposnse => {
				this.groups = reposnse.data.data;//.map((group) => {
				//   ...group,
				//   timetable: JSON(group.timetable).decode()
				// });
			})
			.catch(e => { this.errors.push(e); });
	},
	methods: {
		close: function () {
			for (var key in this.user) {
				this.user[key] = null;
			}
			this.$emit('close');
		},
		save: function () {
			if (!this.validateNotEmpty(this.required)) {
				console.info('validation errors');
				return;
			}

			axios.post(C.api.user, this.user)
				.then(reposnse => {
					this.$emit('userSaved', response);
					this.close();
				})
				.catch(e => { this.errors.push(e); });
		},
		validateNotEmpty: function (attributes) {
			this.validationErrors = [];
			for (let key of attributes) {
				if (!this.user[key] || this.user[key].length == 0) {
					this.validationErrors.push(key);
				}
			}
			return this.validationErrors.length === 0;
		}
	}
};
</script>
