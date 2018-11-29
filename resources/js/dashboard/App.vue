<template>
  <div id="app">
    <Navbar>
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
      @after-enter="afterEnter">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
	components: {
		Navbar
	}
};
</script>

