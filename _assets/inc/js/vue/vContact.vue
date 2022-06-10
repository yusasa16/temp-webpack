<template>
	<form class="v-contact">
		<div class="v-contact__input">
			<div>
				<label for="name">Name</label>
			</div>
			<div>
				<input type="text" id="name">
			</div>
			<div>
				<label for="email">E-mail</label>
			</div>
			<div>
				<input type="email" id="email">
			</div>
			<div>
				<label for="message">MESSAGE</label>
			</div>
			<div>
				<textarea id="message"></textarea>
			</div>
		</div>
		<div class="v-contact__button">
			<button type="submit">送信</button>
		</div>
	</form>
</template>
<script>
export default {

}
</script>
<style lang="scss">
@use '../../css/variables' as var;
@use '../../css/mixin' as mix;

.v-contact {
	&__input {
		display: grid;
		grid-template-columns: 107px 1fr;
		gap: 10px;

		@media (var.$break-sp) {
			grid-template-columns: 1fr;
			gap: 4px;
		}

		> div {
			@media (var.$break-sp) {
				&:nth-of-type(even) {
					margin-bottom: 10px;
				}
			}
		}

		input,
		textarea {
			width: 100%;
			padding: 10px 1em;
			border: 1px solid var.$color-border;
			font-size: 1.6rem;
			line-height: 1.25;
		}

		textarea {
			min-height: 160px;
		}
	}

	&__button {
		margin-top: 30px;

		button[type='submit'] {
			min-width: 200px;
			margin: 0 auto;
			padding: 16px 20px;
			background: var.$color-darkest;
			border: 1px solid var.$color-darkest;
			display: block;
			color: var.$color-lightest;
			cursor: pointer;
			appearance: none;

			&:hover {
				background: var.$color-lightest;
				color: var.$color-font-primary;
			}
		}
	}
}
</style>
