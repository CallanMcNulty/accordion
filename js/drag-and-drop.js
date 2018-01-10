$(document).ready(function() {
  window.dragged = null;
  // $(".draggable").mousedown(function() {
  //   window.dragged = event.currentTarget;
  // });
  // $(window).mouseup(function() {
  //   let releasedOver = $(event.target);
  //   console.log(releasedOver);
  //   if(releasedOver.hasClass("droppable")) {
  //     releasedOver.append(window.dragged);
  //     window.dragged = null;
  //   }
  // });
  $(".draggable-image").on("dragstart", function() {
    window.dragged = event.currentTarget;
  });
  $(".droppable").on("dragover", false).on("drop", function() {
      event.currentTarget.append(window.dragged);
      window.dragged = null;
      return false;
    });
});
