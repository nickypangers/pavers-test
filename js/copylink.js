function copyToClipboard() {
  var url = $("#share-url").val();
  navigator.clipboard.writeText(url);

  document.getElementById("link-tooltip").innerHTML = "Copied";
}

function resetTooltip() {
  document.getElementById("link-tooltip").innerHTML = "Copy to Clipboard";
}

function goToLink() {
  window.open(
    "https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.pavers.co.uk%2Fproducts%2Fwide-fit-leather-lace-up-trainers-simin31003b-317-969",
    "_blank"
  );
}
