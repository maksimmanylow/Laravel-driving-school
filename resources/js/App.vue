<template>
  <div id="app">
    <Navbar>
      <li class="nav-item">
        <router-link
          class="nav-link"
          to="/">Пользователи</router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          to="/group">Группы</router-link>
      </li>
    </Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
	components: {
		Navbar
	}
};
</script>

