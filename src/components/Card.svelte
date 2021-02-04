<script>
  export let id;
  export let website;
  export let url;
	export let name;
	export let photoURL;
  export let address;
  export let category;
  export let gps;

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
</script>

<style>
  .card {
    padding: 6px 0;
    box-shadow: 2px 2px 6px 6px #c8c8c8;
    width: 100%;
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

  a {
    text-decoration: none;
  }
</style>

<div class="card" data-id={id}>
  <h3><a href={website || url} title={`${category} en Playas de Tijuana: ${name}`} target="_blank" rel="nofollow noreferrer">{name}</a></h3>

  <img src={imgUrl} alt={`${category} en Playas de Tijuana: ${name}`} use:lazyLoad />

  <a href={`https://www.google.com/maps/place/${gps[1]},${gps[0]}`} title={`${category} en Playas de Tijuana: ${name}`} target="_blank" rel="nofollow noreferrer">{address}</a>
</div>
