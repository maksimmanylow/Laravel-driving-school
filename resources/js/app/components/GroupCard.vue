<template>
  <div
    class="card text-center"
  >
    <div class="card__header">
      <div class="card__indicator-badge">
        <div :class="group.status.class" />
        <!-- <span class="text-muted">{{ group.status.value }}</span> -->
      </div>
      <h4 class="card__title">{{ group.name }}</h4>
      <h6 class="card__description text-muted">{{ group.description || "Группа воскресного обучения" }}</h6>
    </div>
    <div class="card__body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><div class="text-muted">cтоимость обучения</div>
          <p>{{ group.price }} рублей</p>
          <p class="text-muted">{{ group.price_for_students }} рублей - для студентов</p>
        </li>
        <li class="list-group-item"><div class="text-muted">дни</div>{{ group.timetable.length > 1 ? group.timetable.join(', ') : group.timetable[0]}}</li>
        <li class="list-group-item"><div class="text-muted">часы</div>{{ group.hours_start_at }} - {{ group.hours_finish_at }}</li>
        <li class="list-group-item"><div class="text-muted">начало обучения</div>{{ group.start_at }}</li>
      </ul>
    </div>
    <div class="card__footer">
      <div
        class="btn btn--gray"
        @click="select(group.id)">выбрать</div>
    </div>
  </div>
</template>
<script>
export default {
	props: {
		group: { type: Object, default: () => [] },
	},
	methods: {
		select: function(id) {
			this.$emit('select', id);
		},
	}
};
</script>
