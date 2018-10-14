<template>
  <TwoColumnsModal @close="close" :show="show">
    <template slot="header">
      <h1>Добавить группу</h1>
    </template>
    <template slot="body-left">
      <div class="form-group">
        <label for="exampleInputEmail1">Название</label>
        <input
          required
          v-model="name"
          type="text"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Название"
        >
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Стоимость обучения</label>
        <input
          required
          v-model="price"
          type="number"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Стоимость обучения"
        >
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Стоимость обучения для студентов</label>
        <input
          required
          v-model="priceForStudent"
          type="number"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Стоимость обучения для студентов"
        >
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Категория</label>
        <input
          required
          v-model="category"
          type="text"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Категория"
        >
      </div>
    </template>
    <template slot="body-right">
      <div class="form-group">
        <label for="exampleInputEmail1">Начало занятий</label>
        <input
          required
          v-model="startDate"
          type="date"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Начало занятий"
        >
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Экзамен</label>
        <input
          v-model="examDate"
          type="date"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Экзамен"
        >
      </div>
      <div class="form-group">
        <Multiselect
          v-model="weekdays"
          :options="weekdaysOptions"
          :multiple="true"
          :close-on-select="false"
          :clear-on-select="false"
          :preserve-search="true"
          placeholder="Выберите дни недели"
          label="Дни занятий"
        />
        <ul>
          <li v-for="weekday in weekdays">{{weekday}}</li>
        </ul>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Начало занятия</label>
        <input
          required
          v-model="hoursStart"
          type="time"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Начало занятия"
        >
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Конец занятия</label>
        <input
          required
          v-model="hoursFinish"
          type="time"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Конец занятия"
        >
      </div>
    </template>
    <template slot="footer">
      <button class="btn btn-success" @click="save">Сохранить</button>
      <button class="btn btn-danger" @click="close">Отмена</button>
    </template>
  </TwoColumnsModal>
</template>

<script>
  import TwoColumnsModal  from './Modal/TwoColumnsModal';
  import Multiselect from 'vue-multiselect';

  export default {
    components: {
      TwoColumnsModal,
      Multiselect
    },
    props: {
      show: Boolean,
      postURI: String
    },
    data: () => ({
      name: null,
      price: null,
      priceForStudent: null,
      category: null,
      startDate: null,
      examDate: null,
      weekdays: [],
      hoursStart: null,
      hoursFinish: null,
      weekdaysOptions: ['Понедельник', 'Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],
      errors: []
    }),
    methods: {
      close: function () {
        this.$emit('close');
        this.name = null;
        this.priceForStudent = null;
        this.category = null;
        this.startDate = null;
        this.examDate = null;
        this.weekdays = null;
        this.hoursStart = null;
        this.hoursFinish = null;
      },
      save: function() {
        const group = {
          name: this.name,
          price: this.price,
          priceForStudent: this.priceForStudent,
          category: this.category,
          startDate: this.startDate,
          examDate: this.examDate,
          weekdays: this.weekdays,
          hoursStart: this.hoursStart,
          hoursFinish: this.hoursFinish,
        };

        axios.post(this.postURI, group)
          .then(reposnse => {})
          .catch(e => {this.errors.push(e)});

        this.close();
      }
    }
  }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
