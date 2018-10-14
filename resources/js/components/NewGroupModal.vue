<template>
  <TwoColumnsModal @close="close" :show="show">
    <template slot="header">
      <h1>Добавить новую группу</h1>
    </template>
    <template slot="body-left">
      <div class="form-group">
        <label for="exampleInputEmail1">Название</label>
        <input v-model="name" type="text" class="form-control" aria-describedby="emailHelp" placeholder="Название">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Стоимость обучения</label>
        <input v-model="price" type="text" class="form-control" aria-describedby="emailHelp" placeholder="Стоимость обучения">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Стоимость обучения для студентов</label>
        <input v-model="priceforStudent" type="text" class="form-control" aria-describedby="emailHelp" placeholder="Стоимость обучения для студентов">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Категория</label>
        <input v-model="category" type="text" class="form-control" aria-describedby="emailHelp" placeholder="Категория">
      </div>
    </template>
    <template slot="body-right">
      <div class="form-group">
        <label for="exampleInputEmail1">Начало занятий</label>
        <input v-model="startDate" type="text" class="form-control" aria-describedby="emailHelp" placeholder="Начало занятий">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Экзамен</label>
        <input v-model="examDate" type="text" class="form-control" aria-describedby="emailHelp" placeholder="Экзамен">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Дни недели</label>
        <input v-model="weekdays" type="text" class="form-control" aria-describedby="emailHelp" placeholder="Дни недели">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Начало занятия</label>
        <input v-model="hoursStart" type="text" class="form-control" aria-describedby="emailHelp" placeholder="Начало занятия">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Конец занятия</label>
        <input v-model="hoursFinish" type="text" class="form-control" aria-describedby="emailHelp" placeholder="Конец занятия">
      </div>
    </template>
    <template slot="footer">
      <button class="btn btn-success" @click="save">Сохранить</button>
      <button class="btn btn-danger" @click="close">Отмена</button>
    </template>
  </TwoColumnsModal>
</template>

<script>
  import TwoColumnsModal  from './TwoColumnsModal';

  export default {
    components: {
      TwoColumnsModal
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
