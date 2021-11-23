function myfunction() {
  var myVar = setTimeout(showPage, 3500);
}
function showPage() {
    document.getElementById("loader").style.visibility = "hidden";
    document.getElementById("myDiv").style.visibility = "unset";
  }