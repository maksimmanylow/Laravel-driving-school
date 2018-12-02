<template>
  <div class="card p-3">
    <div class="site-login">
      <h1 class="text-center">Вход</h1>
    </div>
    <div class="form">
      <div class="form-group">
        <label for="exampleInputEmail1">Email или номер телефона</label>
        <input
          v-validate="'required'"
          v-model="email"
          :class="{'is-invalid': errors.has('email')}"
          name="email"
          type="email"
          class="form-control"
          aria-describedby="emailHelp">
        <div class="invalid-feedback">
          {{ errors.first('email') }}
        </div>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Пароль</label>
        <input
          v-validate="'required|min:2|max:255'"
          v-model="password"
          :class="{'is-invalid': errors.has('password')}"
          name="password"
          type="password"
          class="form-control"
          aria-describedby="emailHelp">
        <div class="invalid-feedback">
          {{ errors.first('password') }}
        </div>
      </div>
      <div class="text-right">
        <a href="">Забыли пароль?</a>
        <button
          class="btn btn--gray"
          @click="beforeLogin">Войти</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';

export default {
	computed: {
		email: {
			get() {
				return this.$store.state.user.model.value.email;
			},
			set(val) {
				this.$store.commit('user/setName', val);
			},
		},
		password: {
			get() {
				return this.$store.state.user.model.value.password;
			},
			set(val) {
				this.$store.commit('user/setSurname', val);
			},
		},
		...mapState({
			validationErrors: state => state.user.model.validationErrors,
			constants: state => state.user.constants,
		}),
	},
	methods: {
		async beforeLogin () {
			if (await this.$validator.validateAll())
				this.$store.dispatch('user/login');
		},
	}
};
</script>
