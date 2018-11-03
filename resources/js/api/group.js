import axios from 'axios';
import C from './constants';

export default {
	async getAllGroups() {
		axios.get(C.REST.group)
			.then(reposnse => {
				this.groups = reposnse.data.data;
			});
	}
};
