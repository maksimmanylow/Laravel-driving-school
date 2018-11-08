<template>
  <div>
    <GroupModal />
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-header">
              <h3>Группы</h3>
              <span
                class="btn-add float-right"
                @click="showCreateModal">
                +
              </span>
            </div>
            <div class="card-body">
              <TableComponent
                :objects="groups"
                @update="showUpdateModal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import TableComponent from './DataTable/TableComponent';
import GroupModal from '../components/GroupModal';
import TableComponent from '../components/DataTable/TableComponent';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
	components: {
		TableComponent,
		GroupModal
	},
	computed: mapState({
		groups: state => state.group.all,
	}),
	created () {
		this.$store.dispatch('group/getAll');
	},
	methods: {
		...mapMutations('group', [
			'showCreateModal',
			'showUpdateModal',
		]),
	}
};
</script>
