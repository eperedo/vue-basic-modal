<template>
  <main>
		<section>
			<header>
				<h1>Basic Modal</h1>
			</header>
			<section>
				<form>
					<div class="form-input">
						<label for="state">
							Show Modal?
						</label>
						<input type="checkbox" id="state" v-model="state" />
					</div>
					<div class="form-input">
						<label for="close-on-click">
							Close on click?
						</label>
						<input type="checkbox" id="close-on-click" v-model="closeOnClick" />
					</div>
				</form>
				<basic-modal :state="state" :close-on-click="closeOnClick"
					@input="inputModal"
				>
				<button type="button" @click="state = false">X</button>
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
		closeOnClick: true,
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
