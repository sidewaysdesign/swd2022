<script>
  import { onMount } from 'svelte'
  let testimArr = []
  const testimonials = [
    {
      text: ['Nimble, flexible, and creative: from quoting to feedback rounds to publishing, Richard unwaveringly brings his best and most helpful traits and skills to my projects.', 'He’ll help you turn your vision into a reality and then make it that much better, with beautiful interactive website elements and cohesive, balanced, and modern visual design. Every time we work together, I can tell he is invested in the final product and is willing to put in the time and effort to make it something he is proud of.'],
      attribution: 'Anna Welch'
    },
    {
      text: ['I have been working with Sideways Design for over a decade now. Richard has become an extension of my team in pretty much every job I’ve had. He is reliable, customer-centric and takes great pride in the work he does. Sideways Design is a trusted partner we can always rely on.'],
      attribution: 'Gustavo Arruda'
    },
    {
      text: [`Richard is a thinking designer, quick to grasp of the strategy behind the campaign. He seems to have a sixth sense of incorporating graphical elements that enhance the relevance to the target audience and objective.`, `Richard is quick to bring his knowledge to the table when a campaign subject is a familiar industry or sector. This is greatly appreciated especially if it challenges the established strategy. Richard also appreciates feedback and is quick to adjust his designs from input received.`, `The outcome is effective and results-oriented, representing the collective effort of the team and client; work that we are all proud of.`],
      attribution: 'Michel Fortin'
    }
  ]
  onMount(() => animateTestimonials())
  const animateTestimonials = () => {
    const animHold = 12000
    const animTime = 600
    const animInterval = 750
    const animPause = 700
    const cycleTotal = animHold + animTime + animInterval + animPause
    let unitIndex = 0
    const runAnim = () => {
      testimArr.forEach(u => {
        u.classList?.remove('visible')
        u.classList?.remove('sharpen')
      })
      const t = testimArr[unitIndex]?.classList
      t.add('visible')
      t.add('sharpen')
      const removeAnim = setTimeout(() => {
        t.remove('sharpen')
        t.remove('visible')
        clearTimeout(removeAnim)
      }, animTime + animHold)
      unitIndex = unitIndex + 1 < testimArr.length ? unitIndex + 1 : 0
    }
    runAnim()
    setInterval(() => {
      runAnim()
    }, cycleTotal)
  }
  var getSiblings = function (elem) {
    return Array.prototype.filter.call(elem.parentNode.children, function (sibling) {
      return sibling !== elem
    })
  }
</script>

<div class="testimonials--container">
  {#each testimonials as t, index}
    <div bind:this={testimArr[index]} class="testimonials--unit">
      <div>
        {#each t.text as p}
          {#each p.split(' ') as w}
            <span class="span-as-paragraph">{w}</span>
          {/each}
        {/each}
        <p class="accreditation">{t.attribution}</p>
      </div>
    </div>
  {/each}
</div>
