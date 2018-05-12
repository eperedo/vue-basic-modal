<template>
  <main>
		<section>
			<header>
				<h1>Basic Modal</h1>
			</header>
			<section>
				<button type="button" @click="state = !state">Show Modal</button>
				<basic-modal :state="state" @input="inputModal">
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

function inputModal(newState) {
	this.state = newState;
}

export default {
	name: 'app',
	components: {
		basicModal,
	},
	data,
	methods: {
		inputModal,
	},
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
