<script>
	export let places
	export let categories

  import Card from './Card.svelte'
</script>

<style>
	.grid-container {
		display: grid;
		grid-column-gap: 20px;
		grid-row-gap: 12px;
		grid-template-columns: repeat( auto-fit, minmax(100%, 1fr) );
		margin: 10px;
		padding: 15px;
	}

	h2 {
		margin: 0;
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

	.container {
		color: #313d69;
		font-size: 20px;
		padding: 15px 15px 0;
		margin: 0 10px;
	}
</style>

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
					address={place.address}
					category={item.slug}
					gps={place.gps.coordinates}
				/>
			{/each}
		</div>
	{/each}
</div>
