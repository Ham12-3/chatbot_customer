import Script from "next/script";
import React from "react";

const IntercomWidget = () => {
  // Extract the app ID once so we can use it consistently
  const appId = process.env.NEXT_PUBLIC_APP_ID || "";

  return (
    <Script
      id="intercom-script"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
     window.intercomSettings = {
    api_base: "https://api-iam.intercom.io",
    app_id: "${appId}",
    
  };
  (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${appId}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
    `,
      }}
    />
  );
};

export default IntercomWidget;
