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
          v-model="group.name"
          type="text"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Название"
        >
      </div>
      <div class="form-group">
        <label>Статус</label>
        <multiselect
          v-model="group.status"
          :options="constants.groupStatuses"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Стоимость обучения</label>
        <input
          required
          v-model="group.price"
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
          v-model="group.price_for_students"
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
          v-model="group.category"
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
          v-model="group.start_at"
          type="date"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Начало занятий"
        >
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Экзамен</label>
        <input
          v-model="group.exam_date"
          type="date"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Экзамен"
        >
      </div>
      <div class="form-group">
        <label>Дни занятий</label>
        <multiselect
          v-model="group.timetable"
          :options="constants.weekdays"
          :multiple="true"
          :close-on-select="false"
          :clear-on-select="false"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Начало занятия</label>
        <input
          required
          v-model="group.hours_start_at"
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
          v-model="group.hours_finish_at"
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
  import C from '../constants';

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
      constants: C,
      errors: [],
      group:{
        name: null,
        start_at: null,
        timetable: null,
        hours_start_at: null,
        hours_finish_at: null,
        status: null,
        category: null,
        price: null,
        price_for_students: null,
        is_active: null,
    }
    }),
    methods: {
      close: function () {
        for (var key in this.group ) {
          this.group[key] = null;
        }
        this.$emit('close');
      },
      save: function() {
        axios.post(this.postURI, this.group)
          .then(reposnse => {
            console.info("Group saved");
            this.close();})
          .catch(e => {this.errors.push(e)});
      }
    }
  }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
