<script>
	export let places
	export let categories

	import Grid from '../components/Grid.svelte'
</script>

<script context="module">
	import { getDataFor } from '../support/data'

	export async function preload() {
		const {
			places,
			categories,
		} = await getDataFor.call(this)

		return {
			places,
			categories,
		}
	}
</script>

<style>
	.container {
		color: #313d69;
		font-size: 20px;
		padding: 15px 15px 0;
		margin: 0 10px;
	}

	h1 {
		margin-bottom: 20px;
		color: #313d69;
	}
</style>

<svelte:head>
	<title>Comida en Playas de Tijuana | Restaurantes, Cafes  y Bares</title>
	<meta name="description" content="Que comer en Playas de Tijuana. Restaurantes, Cafes y Bares. Descubre la mejor comida y disfruta la gastronomia de playami.">
</svelte:head>

<div class="container">
	<h1>Restaurantes y la mejor Comida en Playas de Tijuana</h1>

	<Grid places={places} categories={categories} />
</div>

<div>
	<a href="https://www.feedmetj.com/" title="Que comer en Tijuana">¿Que comer en Tijuana?</a>
</div>


