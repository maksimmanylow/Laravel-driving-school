<template>
  <section class="bg-light">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-md-4 mt-3">
          <SignUpForm />
        </div>
      </div>
    </div>
  </section>
</template>
<script>

import SignUpForm from '../components/SignUpForm';

export default {
	components: {
		SignUpForm,
	},
};
</script>
