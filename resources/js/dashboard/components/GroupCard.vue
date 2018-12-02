<template>
  <div
    class="card card--button text-center"

    @click="update(group.id)"
  >

    <div class="card__header">
      <div
        :class="group.status.class"
      />
      <h4 class="card__title">{{ group.name }}</h4>
      <h6 class="card__description">{{ group.description || "Группа воскресного обучения" }}</h6>
    </div>
    <div class="card__body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Стоимость обучения <br> <strong>{{ group.price }}</strong> рублей
          <hr>
          для студентов <br> стоимость обучения <br> <strong>{{ group.price_for_students }}</strong> рублей
        </li>
        <li class="list-group-item">Дни недели <br><strong>{{ group.timetable.join(', ') }}</strong></li>
        <li class="list-group-item">Часы <strong>{{ group.hours_start_at }} - {{ group.hours_finish_at }}</strong></li>
        <li class="list-group-item">Начало обучения <br><strong>{{ group.start_at }}</strong></li>
      </ul>
    </div>
    <div class="card__footer"/>
  </div>
</template>
<script>
export default {
	props: {
		group: { type: Object, default: () => [] },
	},
	methods: {
		update: function(id) {
			this.$emit('update', id);
		},
	}
};
</script>
