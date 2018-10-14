<template>
  <Modal @close="close" :show="show">
    <template slot="header">
      <h1>Добавить нового учащегося</h1>
    </template>
    <template slot="body">
      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input v-model="email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Email">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Имя</label>
        <input v-model="name" type="text" class="form-control" aria-describedby="emailHelp" placeholder="Имя">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Фамилия</label>
        <input v-model="surname" type="text" class="form-control" aria-describedby="emailHelp" placeholder="Фамилия">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Телефон</label>
        <input v-model="phone" type="text" class="form-control" placeholder="Телефон">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Группа</label>
        <select v-model="group" class="form-control form-control-sm">
          <option>Small select</option>
          <option>Small select</option>
          <option>Small select</option>
        </select>
      </div>
    </template>
    <template slot="footer">
      <button class="btn btn-success" @click="save">Сохранить</button>
      <button class="btn btn-danger" @click="close">Отмена</button>
    </template>
  </Modal>
</template>

<script>
  import Modal  from './Modal';

  export default {
    components: {
      Modal
    },
    props: {
      show: Boolean
    },
    data: () => ({
      name: '',
      surname: '',
      phone: '',
      email: '',
      group: ''
    }),
    methods: {
      close: function () {
        this.$emit('close');
        this.name = '';
        this.surname = '';
        this.phone = '';
        this.email = '';
        this.group = '';
      },
      save: function() {
        this.$emit('save');
        this.close();
      }
    }
  }
</script>
