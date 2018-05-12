<template>
  <main>
		<section>
			<header>
				<h1>Basic Modal</h1>
			</header>
			<section>
				<button type="button" @click="state = !state">Show Modal</button>
				<basic-modal :state="state">
					I am a Modal
				</basic-modal>
			</section>
		</section>
  </main>
</template>

<script>
import basicModal from './components/basic-modal.vue';

function data() {
	return {
		state: false,
	};
}

export default {
	name: 'app',
	components: {
		basicModal,
	},
	data,
};
</script>

<style lang="scss">
* {
	font-family: 'Roboto';
	font-size: 16px;
}

body {
	background-color: cyan;
}
</style>
