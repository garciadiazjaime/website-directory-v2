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

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>

<div>

	{#each places as place}
		<div>
			<LazyImage dataSrc={place.photoURL} alt={place.name} />

			<div>
				<a href={`https://www.google.com/maps/search/?api=1&query=${place.gps.coordinates[1]},${place.gps.coordinates[0]}`} target="_blank" rel="nofollow noreferrer">{place.name}</a>
			</div>
		</div>
	{/each}
</div>
