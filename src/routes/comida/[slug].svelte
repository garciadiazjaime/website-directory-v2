<script context="module">
	import { categories } from '../../utils/categories'

	export async function preload({ params }) {
		const res = await this.fetch(`process.env.API_URL/gmaps-place/${params.slug}`);
		const places = await res.json();

		const { title } = categories.find(item => item.slug === params.slug)

		return { places, title: `${title} en Playas de Tijuana` };
	}
</script>

<script>
	import LazyImage from '../../components/LazyImage.svelte';

	export let places
	export let title
</script>

<style>
	h1 {
		text-align: center;
	}

	.place {
		border: 1px solid #DDD;
		margin: 24px auto;
		width: 400px;
		font-size: 1.2em;
	}

	.content {
		padding: 0 20px;
	}

	p {
		margin: 6px 0;
		word-wrap: break-word;
	}

	a {
		text-decoration: none;
	}
</style>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>

<div>

	{#each places as place}
		<div class="place">
			<LazyImage dataSrc={place.photoURL} alt={place.name} />

			<div class="content">
				<h2>{place.name}</h2>

				{#if place.phone}
				<p>
					<a href="tel:{place.phone}" ref="nofollow noreferrer">{place.phone}</a>
				</p>
				{/if}
				{#if place.website}
				<p>
					<a href={place.website} ref="nofollow noreferrer" target="_blank">{place.website}</a>
				</p>
				{/if}
				{#if place.address}
				<p>
					<a href="https://www.google.com/maps/search/?api=1&query={place.gps.coordinates[1]},{place.gps.coordinates[0]}" ref="nofollow noreferrer" target="_blank">{place.address}</a>
				</p>
				{/if}
			</div>
		</div>
	{/each}
</div>
