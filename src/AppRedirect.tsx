import { useEffect } from "react";

function AppRedirect() {
  useEffect(() => {
    const isAndroid = /Android/i.test(navigator.userAgent);

    const redirectTimer = window.setTimeout(() => {
      if (isAndroid) {
        // Ask Android to open the installed Google Play Store app.
        window.location.replace(
          "intent://details?id=com.ranitalk#Intent;scheme=market;package=com.android.vending;end",
        );
      } else {
        window.location.href =
          "https://play.google.com/store/apps/details?id=com.ranitalk";
      }
    }, 500);

    return () => window.clearTimeout(redirectTimer);
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "80px 20px" }}>
      <h2>Opening App...</h2>
      <p>Opening Google Play Store...</p>
      <a
        href="market://details?id=com.ranitalk"
        style={{ color: "#078c65", fontWeight: 600 }}
      >
        Open in Play Store app
      </a>
    </div>
  );
}

export default AppRedirect;
