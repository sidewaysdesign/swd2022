<script>
  let wcidfySet = [
    {
      imagesource: 'images/wcidfy_digital.svg',
      heading: 'Digital',
      bodytext: 'Websites, HTML email, interactive & visual assets, app interfaces.',
      imagedata: '<?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" width="110" height="110" viewBox="0 20 220 198" xmlns:v="https://vecta.io/nano"><path class="iconstroke" d="M180.9,159.8h7.4c4,0,7.3-3.3,7.3-7.3V43.4H24.4v109.1c0,4,3.3,7.3,7.3,7.3h13.8"/><path class="iconstroke" d="M195.6,43.4V32.9c0-4-3.3-7.3-7.3-7.3H31.7c-4,0-7.3,3.3-7.3,7.3v10.4"/><circle class="iconstroke" cx="36.2" cy="34.5" r="3.2"/><circle class="iconstroke" cx="46.6" cy="34.5" r="3.2"/><circle class="iconstroke" cx="57" cy="34.5" r="3.2"/><circle class="iconstroke" cx="104.9" cy="186.5" r="2.8"/><path class="iconstroke" d="M165.5 116.9H135c-3.5 0-6.3 2.8-6.3 6.3V200c0 3.5 2.8 6.3 6.3 6.3h30.5c3.5 0 6.3-2.8 6.3-6.3v-76.8c.1-3.5-2.8-6.3-6.3-6.3zm-15.2-9V63.2c0-3.2-2.6-5.8-5.8-5.8H60.3c-3.2 0-5.8 2.6-5.8 5.8v124.2c0 3.2 2.6 5.8 5.8 5.8h59.4"/><path class="iconstroke" d="M54.5 68.7h95.8m-30.6 111.6H54.5m74.2-56.8h43.2m0 75.9h-43.2"/></svg>'
    },
    {
      imagesource: 'images/wcidfy_print.svg',
      heading: 'Print',
      bodytext: 'Design and production of&nbsp;brochures, long documents, DM, packaging &amp;&nbsp;more. Quick,&nbsp;precise and robust working&nbsp;files.',
      imagedata: '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="110px" height="110px" viewbox="0 20 220 198" xml:space="preserve"><g id="icon_print"><g><polyline class="iconstroke" points="218.2,67.6 190.6,67.6 190.6,40" /><rect x="-14.1" y="56" transform="matrix(0 -1 1 0 -54 166)" class="iconstroke" width="140" height="108" /><rect x="14.9" y="104" class="iconstroke" width="36.6" height="62.9" /><rect x="60.3" y="53.8" class="iconstroke" width="36.6" height="113.1" /><polyline class="iconstroke" points="180.8,53.1 168.5,53.1 168.5,166.9 205.1,166.9 205.1,77.4" /><rect x="123.1" y="53.8" class="iconstroke" width="36.6" height="113.1" /><polyline class="iconstroke" points="110,40 190.6,40 218.2,67.6 218.2,181 110,181" /><line class="iconstroke" x1="45" y1="81.1" x2="21.4" y2="81.1" /><polyline class="iconstroke" points="50.5,93.6 33.2,53.9 16,93.6" /></g></g></svg>'
    },
    {
      imagesource: 'images/wcidfy_wordpress.svg',
      heading: 'WordPress',
      bodytext: 'Lots of love for the platform powering over 40% of the Web. Make, remake or enhance the centre of your online presence.',
      imagedata: '<svg xmlns="http://www.w3.org/2000/svg" width="110" height="110" viewBox="0 20 220 198" xmlns:v="https://vecta.io/nano"><path class="iconstroke" d="M160.1 117.5c1-14.9-2.8-23.7-6.6-29-3.9-5.5-9.5-9.9-9.4-17.3 0-1.3.1-5.8 3.4-8.6 2.7-2.3 6-2.3 6.9-2.2 3.3.1 5.7 1.7 6.5 2.2 7.7 5.3 9.4 21.5 6.4 33.1-.8 3-2.5 8.1-3.6 11.6-1.4 4.3-2.7 7.8-3.6 10.2l-1.1 3.1c.6-1.7-15.9 44-17.8 48.9h-6.7M70.4 72l28.2 79.1"/><path class="iconstroke" d="M99.6 72l34.8 97.5h6.9M119.1 72l28.6 80"/><path class="iconstroke" d="M132.6 72H91.4m-7.5 0H42.8"/><path class="iconstroke" d="M50.8 72l34.8 97.5h6.1l21.8-58.6"/><circle class="iconstroke" cx="110" cy="110" r="97.7"/></svg>'
    },
    {
      imagesource: 'images/wcidfy_coding.svg',
      heading: 'Coding',
      bodytext: 'Full frontal fluency: HTML<span class="numlift">5</span>, CSS<span class="numlift">3</span>, PHP, JavaScript, React, <em>et&nbsp;al.</em> to&nbsp;take projects to the next&nbsp;level.',
      imagedata: '<svg xmlns="http://www.w3.org/2000/svg" width="110" height="110" viewBox="0 20 220 198" xmlns:v="https://vecta.io/nano"><path class="iconstroke" d="M89.312 154.54l29.564-93.118 12.867 4.085-29.564 93.118zM69.4 79.2l-55.1 22.4a8.78 8.78 0 0 0-5.5 8.2c0 3.6 2.2 6.8 5.5 8.2l55.1 22.4 5.1-12.5L30 109.8l44.5-18.1-5.1-12.5zm136.4 22.4l-55.1-22.4-5.1 12.5 44.5 18.1-44.5 18.1 5.1 12.5 55.1-22.4a8.78 8.78 0 0 0 5.5-8.2c0-3.6-2.2-6.8-5.5-8.2z"/></svg>'
    },
    {
      imagesource: 'images/wcidfy_ux.svg',
      heading: 'User Experience',
      bodytext: 'Intuitive and captivating user experiences that deliver beyond the&nbsp;ordinary.',
      imagedata: '<svg xmlns="http://www.w3.org/2000/svg" width="110" height="110" viewBox="0 20 220 198" xmlns:v="https://vecta.io/nano"><path class="iconstroke" d="M87.613 154.542l29.564-93.118 12.867 4.085-29.564 93.118zM195 71.3l-11.7-6.8-16.2 27.8-16.3-27.8-11.6 6.8 20.1 34.4-23.4 40.5 11.6 6.8 19.7-33.9L187 153l11.7-6.8-23.7-40.5zM68.3 124.7c0 12.3-5.6 18.5-16.7 18.5s-16.7-6.2-16.7-18.5V67.9H21.3v56.8c0 19.7 11.6 32 30.2 32s30.2-12.2 30.2-32V67.9H68.3v56.8z"/></svg>'
    }
    // {
    //   imagesource: 'images/wcidfy_3d.svg',
    //   heading: '3D',
    //   bodytext: 'Photoreal <span class="numlift">3</span>D renders, product previsualization and <span class="numlift">3</span>D&nbsp;printing expertise.',
    //   imagedata: '<svg xmlns="http://www.w3.org/2000/svg" width="110" height="110" viewBox="0 20 220 198" xmlns:v="https://vecta.io/nano"><path class="iconstroke" d="M110 178.4l-58.8-21.5V88"/><path class="iconstroke" d="M110 178.4l58.8-21.5V88"/><path class="iconstroke" d="M168.8 88L110 66.5 51.2 88M110 57.5V16.7"/><path class="iconstroke" d="M177.5 160.1l38.3 14M131.2 37L110 15.7 88.8 37"/><path class="iconstroke" d="M188.6 186.7l27.2-12.6-12.6-27.2M42.5 160.1l-38.3 14"/><path class="iconstroke" d="M31.4 186.7L4.2 174.1l12.6-27.2M51.2 88l58.8 21.5"/><path class="iconstroke" d="M110 109.5v68.9"/><path class="iconstroke" d="M168.8 88L110 109.5"/></svg>'
    // }
  ]
</script>

<div class="container-fluid whatcanido-bkg">
  <div class="container">
    <div class="row">
      {#each wcidfySet as a, index}
        <div class="wcidfy__unit" key={'wcidfy' + index}>
          <!-- <div dangerouslySetInnerHTML={{ __html: a.imagedata }} /> -->
          {@html a.imagedata}
          <div class="wcidfy__group">
            <h3>{a.heading}</h3>
            <p class="body-copy white center-xs center-md-none slate">{@html a.bodytext}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
