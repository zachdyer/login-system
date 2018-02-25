var app = app || {
    signin: function () {

    },
    signup: function () {

    },
  
    signout: function () {

    },
    init: function() {
      console.log("init");
      $("#menu-toggle").click(function(e) {
        console.log("toggle");
          e.preventDefault();
          $("#wrapper").toggleClass("toggled");
      });
    }
  };
  
  app.init();