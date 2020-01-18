$(document).ready(function () {

      $.ajax({

          url: "/user",
          contentType: "application/json; charset=utf-8",
          data: "{ 'pMenuID': '" + getParameterByName('MenuID') + "'}",
          dataType: "json",
          type: "POST",
          success: function (result) {
              result = result.d;
              var ta = document.getElementById('dataTable');
              ta.innerHTML = result;

          }
      });
  });