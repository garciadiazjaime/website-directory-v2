<script>
  export let id;
  export let website;
  export let url;
	export let name;
	export let photoURL;
  export let address;

  let imgUrl = ''

  let observer = null

  if (process.browser) {
    observer = new IntersectionObserver(onIntersect, {rootMargin: '200px'});
  }

  function onIntersect(entries) {
    if (!imgUrl && entries[0].isIntersecting) {
      imgUrl = photoURL
    }
  }


  function lazyLoad(node) {
    observer && observer.observe(node);
    return {
      destroy() {
        observer && observer.unobserve(node)
      }
    }
  }

  function clickHandler() {
    window.open(website || url);
  }
</script>

<style>
  .card {
    padding: 6px 0;
    box-shadow: 2px 2px 6px 6px #c8c8c8;
    width: 100%;
  }

  .card:hover {
    cursor: pointer;
  }

  h3 {
    margin: 0;
    padding: 0 6px 12px;
  }

  img {
    height: 180px;
    min-height: 180px;
    width: 100%;
    object-fit: cover;
  }
</style>

<div class="card" on:click={clickHandler} data-id={id}>
  <h3>{name}</h3>

  <img src={imgUrl} alt={`Restaurante en Playas de Tijuana: ${name}`} use:lazyLoad />

  <p>{address || ''}</p>
</div>
