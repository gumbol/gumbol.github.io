
let lastModified = new Date(document.lastModified);
let months = ["January", "February", "March", "April",
  "May", "June", "July", "August", "September", "October",
  "November", "December"];
let dateUpdate = document.getElementById("date-updater");
dateUpdate.innerHTML =
  "<i> Last update: " + (months[lastModified.getMonth()]) + " "
  + lastModified.getDate() + ", " + lastModified.getFullYear() + "<i>";
