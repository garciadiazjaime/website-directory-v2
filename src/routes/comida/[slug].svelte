<script>
	import Lazy from 'svelte-lazy';
	export let places
	export let category

	const sections = {
		restaurant: {
			title: 'Restaurantes en Playas de Tijuana',
			description: 'Qué comer en Playas de Tijuana? La mejor comida de Tijuana se cocina en Playas de Tijuana.'
		},
		cafe: {
			title: 'Cafés en Playas de Tijuana',
			description: 'Qué cafés hay en Playas de Tijuana? El mejor café de Tijuana se hace en Playas de Tijuana.'
		},
		bar: {
			title: 'Bares en Playas de Tijuana',
			description: 'Qué bares hay en Playas de Tijuana? Los mejores bares de Tijuana están en Playas de Tijuana.'
		},
	}
</script>

<script context="module">
	export async function preload(page) {
		const { slug } = page.params;
		const result = await this.fetch(`process.env.API_URL/gmaps-place/${slug}`)
		const places = await result.json()

		return {
			places: Array.isArray(places) && places.length ? places[0] : {},
			category: slug
		}
	}
</script>

<style>
	.cover {
		padding: 170px 12px;
		background-color: #313d69;
		color: white;
		margin-bottom: 40px;
	}

	ul {
		padding: 0;
		margin: 0;
	}
	li {
    list-style-type: none;
		margin-bottom: 20px;
  }

	.content {
		max-width: 960px;
		margin: 0 auto;
	}

	.container {
		padding: 0 12px;
	}

	img {
		height: 300px;
		width: 100%;
		object-fit: cover;
	}

	a {
		text-decoration: none;
	}

	h2 {
		font-size: 2em;
	}
</style>

<svelte:head>
	<title>{sections[category].title}</title>
	<meta property="og:title" content={sections[category].title}>
	<meta property="og:description" content={sections[category].description}>
	<meta property="og:image" content="https://www.playami.com/banner.webp">
	<meta property="og:url" content="https://www.playami.com/">
	<meta name="description" content={sections[category].description}>
	<link href="https://www.google-analytics.com" rel="dns-prefetch">
</svelte:head>

<div class="content">
	<div class="cover">
		<h1>{sections[category].title}</h1>
	</div>

	<section>
		<ul>
			{#each places.data as place, index}
			<li>
				<h2 class="container">
					{index + 1} -
					<a href={place.website || place.url}
						rel="nofollow noreferrer"
						target="_blank">{place.name}</a>
				</h2>
				<Lazy height={300}>
					<img src={place.photoURL} alt={place.name}>
				</Lazy>
				<div class="container">
					{#each place.reviews.slice(0, 3) as review}
						<p>
							- {review.text}
						</p>
					{/each}
					<small>{place.address}</small>
				</div>
			</li>
			{/each}
		</ul>
	</section>
</div>

<br />

<p class="container">
	Playas de Tijuana, conocido como Playami, además de contar con opciones de comida se cuenta con la playa, la cual siempre es buena para una caminata, especialmente durante el atardecer. Si buscas de un ambiente relajado y precios razonables, Playas es la opción.
</p>

<p class="container">{sections[category].description}</p>	
