<script>
  import { onMount, onDestroy } from 'svelte'
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

  onMount(() => {
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
    const oldStyleBlock = document.getElementById(styleBlockId)
    if (oldStyleBlock) oldStyleBlock.remove()
    styleBlock = document.createElement('div')
    styleBlock.id = styleBlockId
    const styleBlockContent = backgroundImageStyleBlock()
    styleBlock.innerHTML = styleBlockContent
    document.body.append(styleBlock)
  })
  onDestroy(() => {
    if (styleBlock) styleBlock.remove()
  })
</script>

<div id="gallery__stagecontainer" class="active" style="display: block;">
  <div class="gallery__stage" data-index="lgcot_site" data-prev="tabia_site" data-next="frenchstreet">
    <div class="gallery__stageimage" />
    <div class="gallery__stagecontent">
      <div class="gallery__stagetext">
        <div class="gallery__overlay">
          <!-- prefext (.jpg or .webp) is determined by userAgent and can therefore only be accessed post-mount -->
          <div class="gallery__text">
            <h3>{title.length <= 1 ? title[0] : title[1]}</h3>
            {#if links}
              {@html ifExistsAddLink(links)}
            {/if}
            <p>{description}</p>
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
