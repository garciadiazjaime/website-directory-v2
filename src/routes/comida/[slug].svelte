<script context="module">
	import { categories } from '../../utils/categories'

	export async function preload({ params }) {
		const res = await this.fetch(`process.env.API_URL/places/${params.slug}`);
		const places = await res.json();

		const { title } = categories.find(item => item.slug === params.slug)

		return { places, title };
	}
</script>

<script>
	export let places
	export let title
</script>

<style>
</style>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>

<div>
	<ul>
	{#each places as place}
		<li><a href={`https://www.google.com/maps/search/?api=1&query=${place.gps.coordinates[1]},${place.gps.coordinates[0]}`} target="_blank" rel="nofollow noreferrer">{place.name}</a></li>
	{/each}
	</ul>
</div>
