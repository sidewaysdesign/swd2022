<script>
  import { crossfade, fade } from 'svelte/transition'
  import { onMount } from 'svelte'
  import { quintOut } from 'svelte/easing'
  // import TabGallery from './TabGallery.svelte'
  import { initHeightTransition, heightTransition, resizeHeight } from './HeightTransitions'
  import Expertise from '../Expertise/Expertise.svelte'
  import Gallery from '../Gallery/Gallery.svelte'

  let tabPos = 0
  let switched = null
  let tabGalleryHeight
  let tabExpertiseHeight
  let tabSet
  let activeClass = 'active'

  $: switched = !!tabPos

  onMount(() => {
    // initHeightTransition(tabSet, activeClass)
  })
  const transitionStart = tabNum => {
    tabPos = tabNum
    heightTransition({
      container: tabSet,
      requestedIndex: tabNum,
      activeClass: activeClass,
      fadeInClass: 'fadein',
      fadeOutClass: 'fadeout'
    })
  }
  const transitionEnd = num => {
    tabSet.style.maxHeight = 'auto'
  }
  const updateTabContainerHeight = () => {}
</script>

<div class="tabs--toggle">
  <ul>
    <li on:click={() => transitionStart(0)} data-tab="tabs--gallery" class={tabPos ? '' : 'active'}>Gallery</li>
    <li on:click={() => transitionStart(1)} data-tab="tabs--skills" class={tabPos ? 'active' : ''}>Expertise</li>
  </ul>
</div>
<!-- <svelte:window on:resize={() => resizeHeight(tabSet, activeClass)} /> -->

<div bind:this={tabSet} class="tabs--shell">
  <div class="tabs--crossfade" class:active={!tabPos}><Gallery /></div>
  <div class="tabs--crossfade tabs--skills section-expertise" class:active={tabPos}>
    <Expertise />
  </div>
</div>
