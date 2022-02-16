<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		background-color: #f8f8f8;
		margin: 0 auto;
		box-sizing: border-box;
		height: auto;
	}
	footer {
		padding: 0 12px;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<footer>
	Proyecto en Colaboración con: 
	<ul>
		<li><a href="https://www.garitacenter.com/">Reporte de Garitas</a></li>
		<li><a href="https://www.feedmetj.com/">Restaurantes en Tijuana</a></li>
		<li><a href="https://www.noticiasmexico.org/">Las Últimas noticias de México</a></li>
		<li><a href="https://www.comprarcasatijuana.com/">Comprar Casa en Tijuana</a></li>
		<li><a href="https://www.larutadelvinoensenada.com/">La Ruta del Vino Ensenada</a></li>
		<li><a href="https://www.mintitmedia.com/">Desarrollo Web en Tijuana</a></li>
	</ul>
</footer>
