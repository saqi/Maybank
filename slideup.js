$( window ).on('load', function () {
  // find elements
  $featurePic = $("#grid li");
  $picMessage = $("#grid .picMessage");

  // handle hover
  $featurePic.mouseenter(
    function(){
      $(this).find($picMessage).animate({'top': '-180px' }, 'medium');
    });

  $featurePic.mouseleave(
    function(){
      $(this).find($picMessage).animate({'top': '-50px' }, 'medium');
    });
});
