<script>
  import { onMount } from 'svelte'

  export let dataSrc
  export let alt

  let src = ''
  let observer
  let inBrowser = false
  const defaultImage = 'https://static.thenounproject.com/png/707388-200.png'

  onMount(() => {
    inBrowser = true
    observer = new IntersectionObserver(onIntersect, {rootMargin: '200px'});
  })

  function onIntersect(entries) {
    if (!src && entries[0].isIntersecting) {
      src = dataSrc || defaultImage;
    }
  }

  function lazyLoad(node) {
    if (!inBrowser) {
      return
    }

    observer && observer.observe(node);

    return {
      destroy() {
        observer && observer.unobserve(node)
      }
    }
  }
</script>

<style>
  .container {
    width: 400px;
    min-height: 200px;
  }

	img {
		width: 100%;
		height: auto;
	}
</style>

<div class="container">
  {#if inBrowser}
  <img {src} alt={alt} use:lazyLoad/>
  {/if}
</div>
