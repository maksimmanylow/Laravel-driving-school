<template>
  <div id="app">
    <Navbar
      v-show="login"
    >
      <router-link
        :to="{name: 'home'}"
        tag="li"
        class="nav-item"
        active-class="active"
      >
        <a class="nav-link">Главная</a>
      </router-link>
      <router-link
        :to="{name: 'user'}"
        tag="li"
        class="nav-item"
        active-class="active"
      >
        <a class="nav-link">Учащиеся</a>
      </router-link>
      <router-link
        :to="{name: 'group'}"
        tag="li"
        class="nav-item"
        active-class="active"
      >
        <a class="nav-link">Группы</a>
      </router-link>
    </Navbar>
    <transition
      name="fade"
      mode="out-in"
      appear
    >
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';

export default {
	components: {
		Navbar
	},
	computed: {
		...mapState({
			login: state => state.user.login,
		}),
	},
};
</script>

