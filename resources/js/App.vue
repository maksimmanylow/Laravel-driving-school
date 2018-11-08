<template>
  <div id="app">
    <Navbar>
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
    <div class="router-view">
      <router-view/>
    </div>
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

