<script>
	import Lazy from 'svelte-lazy';
	export let placesByCategory

	const title = 'Restaurantes, Cafés y Bares en Playas Tijuana'
	const description = 'Qué comer en Playas de Tijuana? Descubre los mejores Restaurantes, Cafés y Bares. La mejor comida de Tijuana se cocina en Playas de Tijuana.'
	const sections = [
		['restaurant', 'Restaurantes en Playas de Tijuana'],
		['cafe', 'Cafés en Playas de Tijuana'],
		['bar', 'Bares en Playas de Tijuana']
	]
	const labels = {
		restaurant: 'Restaurante',
		cafe: 'Café',
		bar: 'Bar'
	}
</script>

<script context="module">
	export async function preload() {
		const result = await this.fetch('process.env.API_URL/gmaps-place')
		const placesByCategory = await result.json()

		return {
			placesByCategory
		}
	}
</script>

<style>
	.cover {
		padding: 170px 12px;
		background-color: #313d69;
		color: white;
		margin-bottom: 40px;
		text-align: center;
	}

	ul {
		padding: 0;
		margin: 0;
	}
	li {
    list-style-type: none;
		margin-bottom: 20px;
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
		margin-top: 40px;
	}

	h3 {
		font-size: 2em;
	}
	h3 small {
		font-size: 0.5em;
	}
</style>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title}>
	<meta property="og:description" content={description}>
	<meta property="og:image" content="https://www.playami.com/banner.webp">
	<meta property="og:url" content="https://www.playami.com/">
	<meta name="description" content={description}>
	<link href="https://www.google-analytics.com" rel="dns-prefetch">
</svelte:head>

<div class="content">
	<div class="cover">
		<h1>Restaurantes, Cafés y Bares en Playas de Tijuana</h1>
	</div>

	{#each sections as [category, title]}
		<section>
			<h2 class="container">
				<a href={`comida/${category}`}>{title}</a>
			</h2>
			<ul>
				{#each placesByCategory[category] as place, index}
				<li data-id={place.id}>
					<h3 class="container">
						{index + 1}.
						<a href={place.website || place.url}
							rel="nofollow noreferrer"
							target="_blank">{place.name}</a>
							<small>{labels[category]}</small>
					</h3>
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
	{/each}
</div>

<br />

<p class="container">
	Playas de Tijuana, conocido como Playami, además de contar con opciones de comida se cuenta con la playa, la cual siempre es buena para una caminata, especialmente durante el atardecer. Si buscas de un ambiente relajado y precios razonables, Playas es la opción.
</p>

<p class="container">{description}</p>
