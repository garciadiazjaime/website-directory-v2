<script>
	export let places
	export let categories

	import Card from '../components/Card.svelte'

	const title = 'Restaurantes Cafés Bares Playas Tijuana Disfruta su Comida'
	const description = 'Qué comer en Playas de Tijuana? Descubre los mejores Restaurantes, Cafés y Bares. La mejor comida de Tijuana se cocina en Playas de Tijuana.'
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
	}

	h1 {
		padding: 20px 0;
		color: #313d69;
	}

	a {
		text-decoration: none;
	}

	.grid-container {
		display: grid;
		grid-column-gap: 20px;
		grid-row-gap: 12px;
		grid-template-columns: repeat( auto-fit, minmax(100%, 1fr) );
		margin-bottom: 120px;
	}

	h2 {
		margin: 20px 0;
	}

	@media (min-width: 600px) {
		.grid-container {
			grid-template-columns: repeat( auto-fit, minmax(48%, 1fr) );
		}
	}

	@media (min-width: 900px) {
		.grid-container {
			grid-template-columns: repeat( auto-fit, minmax(30%, 1fr) );
		}
	}

	@media (min-width: 1200px) {
		.grid-container {
			grid-template-columns: repeat( auto-fit, minmax(23%, 1fr) );
		}
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
	<h1>Restaurantes, Cafés y Bares en Playas de Tijuana</h1>

	<div class="container">
		{#each places as item}
			<h2><a href="/comida/{item.slug}" title={categories[item.slug].fullTitle}>{categories[item.slug].fullTitle}</a></h2>
	
			<div class="grid-container">
				{#each item.data as place}
					<Card 
						id={place.id} 
						website={place.website} 
						url={place.url} 
						name={place.name} 
						photoURL={place.photoURL} 
						category={item.slug}
						comments={place.reviews}
					/>
				{/each}
			</div>
		{/each}
	</div>
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
	<br />
	<a href="https://www.comprarcasatijuana.com/">Comprar casa en Tijuana</a>
	<br />
	<a href="http://www.larutadelvinoensenada.com/">La Ruta del Vino Ensenada</a>
</footer>
