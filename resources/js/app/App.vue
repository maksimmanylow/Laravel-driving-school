<template>
  <div id="app">
    <Nav>
      <router-link
        :to="{name: 'home'}"
        tag="li"
        class="nav-item"
        active-class="active"
      >
        <a class="nav-link">Главная</a>
      </router-link>
      <router-link
        :to="{name: 'sign-up'}"
        tag="li"
        class="nav-item"
        active-class="active"
      >
        <a class="nav-link">Запись</a>
      </router-link>
      <router-link
        :to="{name: 'login'}"
        tag="li"
        class="nav-item"
        active-class="active"
      >
        <a class="nav-link">Вход</a>
      </router-link>
    </Nav>
    <transition
      name="fade"
      mode="out-in"
      appear
      @after-enter="afterEnter">
      <router-view/>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';

export default {
	components: {
		Nav,
		Footer,
	}
};
</script>

