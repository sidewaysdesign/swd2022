<script>
  export let imagedata
  export let heading
  export let expertise
</script>

<div class="expertise--trigger" />
<div class="expertise--icon">{@html imagedata}</div>
<h3 class="expertise--heading">{heading}</h3>
<div class="expertise--payload">
  <div class="expertise--payload-contents">
    <div>
      <ul>
        {#each expertise as exp}
          <li>{exp}</li>
        {/each}
      </ul>
    </div>
  </div>
</div>
