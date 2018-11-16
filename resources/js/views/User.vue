<template>
  <div>
    <Message />
    <UserModal />
    <div class="container">
      <div class="row mx-0">
        <div class="col-lg-6">
          <h3>Учащиеся</h3>
          <Paginator
            :from="from"
            :to="to"
            :total="total"
            :current_page="current_page"
            :last_page="last_page"
            @goToNextPage="goToNextPage"
            @goToPrevPage="goToPrevPage"
          />
        </div>
        <div class="col-lg-6 text-right">
          <SearchInput
            v-model="query"
            @input="search" />
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
            :objects="users"
            @update="showUpdateModal" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import TableComponent from './DataTable/TableComponent';
import UserModal from '../components/UserModal';
import Message from '../components/Message';
import SearchInput from '../components/SearchInput';
import Paginator from '../components/Paginator';
import TableComponent from '../components/DataTable/TableComponent';
import { mapState, mapMutations, mapActions } from 'vuex';
import debounce from '../helpers/debounce';

export default {
	components: {
		TableComponent,
		UserModal,
		Message,
		SearchInput,
		Paginator,
	},
	computed: mapState({
		users: state => state.user.all,
		query: state => state.user.search.query,
		from: state => state.user.paginator.from,
		to: state => state.user.paginator.to,
		total: state => state.user.paginator.total,
		current_page: state => state.user.paginator.current_page,
		last_page: state => state.user.paginator.last_page,
	}),
	// watch: {
	// 	// call again the method if the route changes
	// 	'$route': 'fetchData'
	// },
	created () {
		this.$store.dispatch('user/getPage', 1);
	},
	methods: {
		search: function () {
			return debounce(
				() => this.$store.dispatch('user/search'),
				this.$store.state.user.search.debounceTimeout
			);
		},
		...mapMutations('user', [
			'showCreateModal',
			'showUpdateModal',
		]),
		...mapActions('user', [
			'goToNextPage',
			'goToPrevPage',
		]),
	}
};
</script>
