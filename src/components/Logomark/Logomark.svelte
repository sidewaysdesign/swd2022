<script>
  import { onMount } from 'svelte'
  let yPos
  let logo = null
  let logoHeight = 0
  let sticky = false

  $: sticky = yPos > logoHeight
  $: logoHeight = logo?.getBoundingClientRect().height

  const updateHeight = () => (logoHeight = logo.getBoundingClientRect().height)

  onMount(() => (logoHeight = logo.getBoundingClientRect().height))
</script>

<svelte:window on:resize={updateHeight} bind:scrollY={yPos} />

<div id="logomark" bind:this={logo} class={sticky ? 'sticky' : ''}><span class="swd-word--1">Sideways</span><span class="swd-logo" /><span class="swd-word--2">Design</span></div>
