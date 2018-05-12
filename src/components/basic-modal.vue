<template>
	<div ref="basicModal" @keydown.esc="close"
		tabindex="1"
		class="modal-container" v-if="state">
		<div class="modal" v-bind="$attrs">
			<slot :is-open="isOpen"></slot>
		</div>
	</div>
</template>

<script>
function isClickingOutside() {
	if (event.target === this.$refs.basicModal) {
		if (this.closeOnClick) {
			this.$emit('input', false);
		}
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

function close() {
	this.$emit('input', false);
}

function isOpen() {
	if (this.state) {
		this.$nextTick(() => {
			this.$refs.basicModal.focus();
		});
		return true;
	}
	return false;
}

export default {
	name: 'basic-modal',
	computed: {
		isOpen,
	},
	destroyed,
	inheritAttrs: false,
	mounted,
	props: {
		closeOnClick: {
			type: Boolean,
			default: true,
		},
		state: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		close,
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
}

.modal {
	background-color: #fff;
	flex-basis: 400px;
	height: calc(100% / 2);
	padding: 10px;
}
</style>
