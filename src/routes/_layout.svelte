<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<Nav {segment} />

<main>
  <slot />
</main>

<footer>
  <div>
    Síguenos en:
    <ul>
      <li>
        <a
          href="https://www.instagram.com/playamitijuana/"
          title="Restaurantes en Playas de Tijuana">Instagram</a
        >
      </li>
    </ul>
  </div>
  Proyecto en Colaboración con:
  <ul>
    <li><a href="https://www.garitacenter.com/">Reporte de Garitas</a></li>
    <li><a href="https://www.feedmetj.com/">Restaurantes en Tijuana</a></li>
    <li>
      <a href="https://coupons.garitacenter.com/">
        Papa Johns Coupons Promo Codes
      </a>
    </li>
    <li>
      <a href="https://www.larutadelvinoensenada.com/"
        >La Ruta del Vino Ensenada</a
      >
    </li>
    <li>
      <a href="https://www.mintitmedia.com/">Desarrollo Web en Tijuana</a>
    </li>
  </ul>
</footer>

<style>
  main,
  footer {
    position: relative;
    margin: 0 auto;
    box-sizing: border-box;
    height: auto;
    max-width: 960px;
    margin: 0 auto;
  }
</style>
