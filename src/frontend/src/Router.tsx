import App from "./App";
import DownloadPage from "./DownloadPage";

export default function Router() {
  const path = window.location.pathname;

  if (path === "/descarga") {
    return <DownloadPage />;
  }

  return <App />;
}
