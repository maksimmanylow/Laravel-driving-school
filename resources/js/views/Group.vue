<template>
  <div>
    <NewGroupModal
      :show="modalShow"
      @close="showModal(false)"/>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-header">
              <h3>Группы</h3>
              <span
                class="btn-add float-right"
                @click="showModal(true)">
                +
              </span>
            </div>
            <div class="card-body">
              <TableComponent :objects="groups" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import TableComponent from './DataTable/TableComponent';
import NewGroupModal from '../components/NewGroupModal';
import TableComponent from '../components/DataTable/TableComponent';
import { mapState, mapMutations } from 'vuex';

export default {
	components: {
		TableComponent,
		NewGroupModal
	},
	computed: mapState({
		groups: state => state.group.all,
		modalShow: state => state.group.modalShow,
	}),
	created () {
		this.$store.dispatch('group/getAll');
	},
	methods: {
		...mapMutations('group', [
			'showModal'
		]),
	}
};
</script>
