<script>
  import { onMount, onDestroy, beforeUpdate } from 'svelte'
  import { fade } from 'svelte/transition'
  import { gallerySet, _relUrl, srcFileName, supportFormatWebp, ifExistsAddAttrVal, ifExistsAddLink, ifExistsAddMobileImage, ifExistsAddImgTag } from './GalleryData.js'
  export let images
  export let index
  export let subdirectory = null
  export let title
  export let links = null
  export let tags
  export let description
  export let prefext
  let styleBlock
  let styleBlockId = 'background-images-styles'

  const backgroundImageStyleBlock = () => {
    const tabletImage = `${_relUrl(images[2], subdirectory)}${prefext}`
    const monitorImage = `${_relUrl(images[1], subdirectory)}${prefext}`
    const result = `<style type="text/css">
        #gallery__stagecontainer .gallery__stageimage {background-image: url(${tabletImage});}
        @media (min-width: 48em) {
          #gallery__stagecontainer .gallery__stageimage {background-image: url(${monitorImage});}
        }
      </style>`.replace('*{}', '')
    return result
  }

  beforeUpdate(() => {
    const oldStyleBlock = document.getElementById(styleBlockId)
    if (!oldStyleBlock) return
    styleBlock = oldStyleBlock
    styleBlock.innerHTML = backgroundImageStyleBlock()
  })

  onMount(() => {
    const styleBlockContent = backgroundImageStyleBlock()
    styleBlock = document.createElement('div')
    styleBlock.id = styleBlockId
    styleBlock.innerHTML = styleBlockContent
    document.body.append(styleBlock)
    document.body.classList.add('overlay')
  })

  onDestroy(() => {
    if (styleBlock) styleBlock.remove()
    document.body.classList.remove('overlay')
  })
</script>

<div in:fade={{ delay: 500 }} id="gallery__stagecontainer" class="active" style="display: block;">
  <div class="gallery__stage" data-index="lgcot_site" data-prev="tabia_site" data-next="frenchstreet">
    <div class="gallery__stageimage">
      {@html ifExistsAddImgTag(images[2], subdirectory)}
    </div>
    <div class="gallery__stagecontent">
      <div class="gallery__stagetext">
        <div class="gallery__overlay">
          <!-- prefext (.jpg or .webp) is determined by userAgent and can therefore only be accessed post-mount -->
          <div class="gallery__text">
            <h3>{@html title.length <= 1 ? title[0] : title[1]}</h3>
            {#if links}
              {@html ifExistsAddLink(links)}
            {/if}
            <p>{@html description}</p>
            {@html ifExistsAddImgTag(images[3], subdirectory)}
            {@html ifExistsAddImgTag(images[4], subdirectory)}
          </div>
          <div class="gallery__tags">
            {#each tags as tag}
              <div>{tag}</div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
