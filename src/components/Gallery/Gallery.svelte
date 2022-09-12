<script>
  import { gallerySet, _relUrl, srcFileName, supportFormatWebp } from './GalleryData.js'
  import { onMount } from 'svelte'
  import GalleryOverlay from './GalleryOverlay.svelte'
  import GalleryControls from './GalleryControls.svelte'

  let isChrome
  let hasWebP
  let preferredExtension
  let activeOverlay = false
  let indexname = ''
  let overlayopen = false
  let overlayindex = 0
  let overlaycount = gallerySet.length

  onMount(() => {
    isChrome = /Chrome/.test(window.navigator.userAgent) && /Google Inc/.test(window.navigator.vendor)
    hasWebP = supportFormatWebp()
    preferredExtension = hasWebP && isChrome ? '.webp' : '.jpg'
  })

  const openOverlay = index => {
    overlayopen = true
    overlayindex = index
  }
</script>

<!-- preferredExtension (.jpg or .webp) is determined by userAgent and can therefore only be accessed post-mount -->
{#if preferredExtension}
  {#each gallerySet as g, idx}
    <div class="gallery__item" style={`background-image:url(${_relUrl(srcFileName(g.images[0], 600, preferredExtension), g.subdirectory)});`} data-index={g.index} on:click={() => openOverlay(idx)}>
      <div class="pf-unit-content" data-after={g.title[0]} />
    </div>
  {/each}
  {#if overlayopen}
    <GalleryOverlay prefext={preferredExtension} {...gallerySet[overlayindex]} />
    <GalleryControls {overlaycount} bind:overlayindex bind:overlayopen />
  {/if}
{/if}
