'use strict'

// Para ver el depurador:
// js.src = "//connect.facebook.net/en_US/sdk/debug.js"
// Versión 2.10 - Sep 30 2017

export default function sdkFacebook () {

  let idApp = '155968441658661'

  $(document).ready(function () {

    window.fbAsyncInit = function() {
      FB.init({
        appId            : idApp,
        autoLogAppEvents : true,
        xfbml            : false,
        cookie           : true,
        version          : 'v2.10'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = `//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.10&appId=${idApp}`;
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

  })
}
