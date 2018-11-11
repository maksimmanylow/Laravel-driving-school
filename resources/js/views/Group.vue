<template>
  <div>
    <Message />
    <GroupModal />
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3>Группы</h3>
        </div>
        <div class="col-lg-6 text-right">
          <SearchInput/>
          <span
            class="btn-add btn-add--outline"
            @click="showCreateModal">
            +
          </span>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <TableComponent
            :objects="groups"
            @update="showUpdateModal" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import TableComponent from './DataTable/TableComponent';
import GroupModal from '../components/GroupModal';
import Message from '../components/Message';
import TableComponent from '../components/DataTable/TableComponent';
import SearchInput from '../components/SearchInput';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
	components: {
		TableComponent,
		GroupModal,
		Message,
		SearchInput,
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
