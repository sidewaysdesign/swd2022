<script>
  export let mobile
  export let desktop
  export let selector
  export let breakpoint = '768px'
  const backgroundImageStyleBlock = () => {
    return `${selector} {
        background-image: url(${mobile})
      }
      @media (min-width: ${breakpoint}) {
        ${selector} {
          background-image: url(${desktop})
        }
      }
      `
  }
</script>

<div id="heyyou" />
