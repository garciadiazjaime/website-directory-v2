<script>
	export let places
	export let categories

	import Grid from '../components/Grid.svelte'

	const title = 'Restaurantes Cafes Bares Playas Tijuana Disfruta su Comida'
	const description = 'Que comer en Playas de Tijuana? Descubre los mejores Restaurantes, Cafes y Bares. La mejor comida de Tijuana se cocina en Playas de Tijuana.'
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
	<title>{title}</title>
	<meta property="og:title" content={title}>
	<meta property="og:description" content={description}>
	<meta property="og:image" content="https://www.playami.com/banner.png">
	<meta property="og:url" content="https://www.playami.com/">
	<meta name="description" content={description}>
	<link href="https://www.google-analytics.com" rel="dns-prefetch">
</svelte:head>

<div class="container">
	<h1>Restaurantes, Cafes y Bares en Playas de Tijuana</h1>

	<Grid places={places} categories={categories} />
</div>

<p>
	Playas de Tijuana, conocido como Playami, además de contar con opciones de comida se cuenta con la playa, la cual siempre es buena para una caminata, especialmente durante el atardecer. Si buscas de un ambiente relajado y precios razonables, Playas es la opción.
</p>

<footer>
	<p>{description}</p>

	Proyecto en Colaboración con: <br />
	<a href="https://www.garitacenter.com/">Reporte de Garitas | Linea Tijuana / San Ysidro - Otay</a>
	<br />
	<a href="https://www.feedmetj.com/">¿Qué comer en Tijuana?</a>
	<br />
	<a href="https://www.noticiasmexico.org/">Las Últimas noticias de México</a>
	<br />
	<a href="https://www.mintitmedia.com/">Desarrollo Web en Tijuana</a>
</footer>
