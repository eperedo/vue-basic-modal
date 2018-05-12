<template>
	<div ref="basicModal" class="modal-container" v-if="state">
		<div class="modal" v-bind="$attrs">
			<slot></slot>
		</div>
	</div>
</template>

<script>
function isClickingOutside() {
	if (event.target === this.$refs.basicModal) {
		this.$emit('input', false);
	}
}

function destroyed() {
	this.$el.ownerDocument.removeEventListener(
		'click',
		isClickingOutside.bind(this),
	);
}
function mounted() {
	this.$el.ownerDocument.addEventListener(
		'click',
		isClickingOutside.bind(this),
		false,
	);
}

export default {
	name: 'basic-modal',
	destroyed,
	mounted,
	inheritAttrs: false,
	props: {
		state: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style lang="scss" scoped>
.modal-container {
	align-items: center;
	background-color: rgba(211, 211, 212, 0.884);
	display: flex;
	height: 100vh;
	justify-content: center;
	margin: 0;
	position: absolute;
	right: 0;
	top: 0;
	width: 100%;
	z-index: 999999999999;
}

.modal {
	background-color: #fff;
	border-radius: 5%;
	flex-basis: 400px;
	height: calc(100% / 2);
}
</style>
