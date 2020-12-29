<script>
	import { categories } from '../utils/categories'
</script>

<style>
	
</style>

<svelte:head>
	<title>Comida en Playas de Tijuana</title>
</svelte:head>

<h1>Comida en Playas de Tijuana</h1>

<ul>
	{#each categories as category}
	<li><a href="/comida/{category.slug}">{category.title}</a></li>
	{/each}
</ul>

<div>
	<a href="https://www.feedmetj.com/" title="Comida Tijuana">¿Que comer en Tijuana?</a>
</div>


