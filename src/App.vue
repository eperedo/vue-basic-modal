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
					<div class="form-input">
						<label for="close-on-click">
							Close with esc?
						</label>
						<input type="checkbox" id="close-on-click" v-model="closeOnScape" />
					</div>
					<div class="form-input">
						<label for="extra-css-class">
							Extra css class
						</label>
						<input type="text" id="extra-css-class" v-model="modalClass" />
					</div>
				</form>
				<basic-modal :state="state" :close-on-click="closeOnClick"
					:modal-class="modalClass" :close-on-escape="closeOnScape"
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
		closeOnScape: true,
		modalClass: 'my-custom-class',
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

.form-input {
	display: flex;
	margin: 5px;
	padding: 10px;

	> label {
		min-width: 120px;
	}

	> input {
		margin-left: 5px;
	}
}

.my-custom-class {
	color: red;
}
</style>
