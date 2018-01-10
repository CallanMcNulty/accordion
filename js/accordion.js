$(document).ready(function() {
  let extensions = $(".accordion-segment-extension");
  for(let i=0; i<extensions.length; i++) {
    let extension = $(extensions[i]);
    let closeButton = $(`<button class="close-extension-button">⨉</button>`);
    closeButton.click(function() {
      extension.animate({ "flex-grow": 0 }, 250, () => extension.hide());
    });
    extension.append(closeButton[0]);
  }
  $(".accordion-segment-base").click(function() {
    let extension = $(event.currentTarget).next();
    extension.show();
    extension.animate({ "flex-grow": $(".accordion-segment-base").length+1 });
  });
});
