<script>
	export let places
  export let categories
  export let slug

	import Grid from '../../components/Grid.svelte'
</script>

<script context="module">
	import { getDataFor } from '../../support/data'

	export async function preload({ params }) {
    const { slug } = params
		const {
			places,
			categories,
		} = await getDataFor.call(this, slug)

		return {
			places,
      categories,
      slug
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
	<title>{categories[slug].fullTitle}</title>
</svelte:head>

<div class="container">
  <h1>{categories[slug].fullTitle}</h1>

  <Grid places={places} categories={categories} />
</div>
