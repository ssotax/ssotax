function setInitialSortByColumnNo(number) {
  var tableTh = document.getElementsByTagName("th")[number];

  if(tableTh != undefined) {
    sorttable.innerSortFunction.apply(tableTh, []);
    console.log("sorted");
  }
}
