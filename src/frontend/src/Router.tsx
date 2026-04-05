import App from "./App";
import Descarga2Page from "./Descarga2Page";
import DownloadPage from "./DownloadPage";

export default function Router() {
  const path = window.location.pathname;

  if (path === "/descarga") {
    return <DownloadPage />;
  }

  if (path === "/descarga2") {
    return <Descarga2Page />;
  }

  return <App />;
}
