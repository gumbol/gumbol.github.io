
    var d = new Date(document.lastModified);
    var months = ["January", "February", "March", "April",
      "May", "June", "July", "August", "September", "October",
      "November", "December"];
    var dUpdate = document.getElementById("date-update");
    dUpdate.innerHTML =
      "<i> Last update: " + (months[d.getMonth()]) + " "
      + d.getDate() + ", " + d.getFullYear() + "<i>";
