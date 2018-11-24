<template>
  <div>
    <Message />
    <UserModal />
    <div class="container">
      <div class="row mx-0">
        <div class="col-lg-5">
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
        <div class="col-lg-3">
          <multiselect
            :options="groups"
            v-model="group_id"
            class="filter-dropdown"
            label="name"
            track-by="name" />
        </div>
        <div class="col-lg-4 text-right">
          <SearchInput
            :value="query"
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
import Multiselect from 'vue-multiselect';
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
		Multiselect,
		Message,
		SearchInput,
		Paginator,
	},
	data: function() {
		return {
			group_id: null
		};
	},
	computed: mapState({
		users: state => state.user.all,
		groups: state => state.group.all,
		from: state => state.user.paginator.from,
		to: state => state.user.paginator.to,
		total: state => state.user.paginator.total,
		current_page: state => state.user.paginator.current_page,
		last_page: state => state.user.paginator.last_page,
		query: state => state.user.search.query,
		// query: {
		// 	get() {
		// 		return this.$store.state.user.search.query;
		// 	},
		// 	set(value) {
		// 	  this.$store.commit('user/setSearchQuery', value);
		// 	}
		// },
	}),
	// watch: {
	// 	// call again the method if the route changes
	// 	'$route': 'fetchData'
	// },
	created () {
		this.$store.dispatch('user/getPage', 1);
		this.$store.dispatch('group/getPage', 1);
	},
	methods: {
		search: function (query) {
			this.$store.commit('user/setSearchQuery', query);
			this._search();
		},
		_search: debounce(
			function () {this.$store.dispatch('user/search');},
			// this.$store.state.user.search.debounceTimeout
			1000
		),
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
