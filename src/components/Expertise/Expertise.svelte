<script>
  import cardSet from './ExpertiseData.js'
  import ExpertiseUnit from './ExpertiseUnit.svelte'
  import { onMount } from 'svelte'
  import AccordionPayloadMinHeight from './AccordionPayloadMinHeight.js'
  let activeindex = null
  // alert(6)
  onMount(() => {
    const obj = {
      id: '.expertise--container',
      trigger: '.expertise--trigger',
      heading: '.expertise--heading',
      measured: '.expertise--payload-contents ul',
      target: '.expertise--payload-contents > div'
    }
    setTimeout(() => {
      const accordionPayloadMinHeight = new AccordionPayloadMinHeight(obj)
    })
  })
</script>

<div class="expertise--container">
  {#each cardSet as card, idx}
    <div class="expertise--unit" class:active={activeindex === idx} on:click={() => (activeindex = activeindex !== idx ? (activeindex = idx) : null)}>
      <ExpertiseUnit expertise={card.expertise} heading={card.heading} imagedata={card.imagedata} />
    </div>
  {/each}
</div>
