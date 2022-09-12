<script>
  import Keystroke from 'svelte-keystroke'

  export let overlayindex
  export let overlayopen
  export let overlaycount

  const navIndex = val => {
    overlayindex = (overlayindex + val) % overlaycount
  }
  const closeOverlay = () => {
    overlayopen = false
  }
</script>

<Keystroke on:Escape={() => closeOverlay()} />

<div id="gallery__fixedcontrols">
  <div class="gallery__controls active">
    <div class="gallery__controls--close" on:click={() => closeOverlay()} />
    <div class="gallery__controls--group">
      <div class="gallery__controls--prev" on:click={() => navIndex(1)} />
      <div class="gallery__controls--next" on:click={() => navIndex(-1)} />
    </div>
  </div>
</div>
