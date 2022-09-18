<script>
  import Keystroke from 'svelte-keystroke'

  export let overlayopen
  export let overlayindex
  export let overlaycount

  const navIndex = val => {
    const updated = (overlayindex + val) % overlaycount
    overlayindex = updated >= 0 ? updated : overlaycount - 1
  }
  const closeOverlay = () => (overlayopen = false)
</script>

<Keystroke on:Escape={() => closeOverlay()} />

<div id="gallery__fixedcontrols">
  <div class="gallery__controls active">
    <div class="gallery__controls--close" on:click={() => closeOverlay()} />
    <div class="gallery__controls--group">
      <div class="gallery__controls--prev" on:click={() => navIndex(-1)} />
      <div class="gallery__controls--next" on:click={() => navIndex(1)} />
    </div>
  </div>
</div>
