import { useState } from "react";
import { SITE_HTML } from "./siteHtml";

export default function DownloadPage() {
  const [copied, setCopied] = useState(false);

  function handleDownload() {
    const blob = new Blob([SITE_HTML], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "el-codigo-landing.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function handleCopy() {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(SITE_HTML).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    } else {
      // Fallback for browsers without clipboard API
      const ta = document.createElement("textarea");
      ta.value = SITE_HTML;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      ta.style.top = "0";
      ta.style.left = "0";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch (_e) {
        // silent fallback failure
      }
      document.body.removeChild(ta);
    }
  }

  return (
    <div
      data-ocid="descarga.page"
      style={{
        background: "#000000",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1.5rem",
        fontFamily: "system-ui, -apple-system, sans-serif",
        color: "#ffffff",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <div
        style={{
          maxWidth: "520px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Header */}
        <h1
          style={{
            fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            marginBottom: "0.5rem",
          }}
        >
          El C&oacute;digo
        </h1>
        <p
          style={{
            color: "#666666",
            fontSize: "0.9rem",
            marginBottom: "2.5rem",
            lineHeight: 1.5,
          }}
        >
          Descarga o copia el HTML completo para WordPress / Elementor
        </p>

        {/* PRIMARY: Download button */}
        <button
          type="button"
          data-ocid="descarga.primary_button"
          onClick={handleDownload}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.6rem",
            width: "100%",
            background: "#C1121F",
            color: "#ffffff",
            fontWeight: 800,
            fontSize: "1.1rem",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            padding: "1.1rem 2rem",
            minHeight: "60px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginBottom: "0.75rem",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "#a50e19";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "#C1121F";
          }}
        >
          <span style={{ fontSize: "1.3rem" }}>&#11015;</span>
          BAIXAR ARQUIVO HTML
        </button>

        {/* SECONDARY: Copy button */}
        <button
          type="button"
          data-ocid="descarga.secondary_button"
          onClick={handleCopy}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            width: "100%",
            background: "transparent",
            color: copied ? "#22c55e" : "#aaaaaa",
            fontWeight: 700,
            fontSize: "0.9rem",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            padding: "0.85rem 2rem",
            minHeight: "48px",
            border: `1px solid ${copied ? "#22c55e" : "#333333"}`,
            borderRadius: "8px",
            cursor: "pointer",
            marginBottom: "2rem",
            transition: "border-color 0.15s, color 0.15s",
          }}
        >
          {copied ? "\u2713 COPIADO!" : "COPIAR C\u00d3DIGO"}
        </button>

        {/* Info box */}
        <div
          style={{
            background: "#0a0a0a",
            border: "1px solid #1e1e1e",
            borderRadius: "8px",
            padding: "1.25rem 1.5rem",
            textAlign: "left",
            marginBottom: "1.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              color: "#666666",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "0.75rem",
            }}
          >
            O arquivo inclui:
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            {[
              "HTML completo do site (sem scripts externos)",
              "Espa\u00e7o reservado com instru\u00e7\u00f5es para o player Vturb",
              "Coment\u00e1rio marcando onde trocar o link do Hotmart",
              "FAQ com acorde\u00e3o em JavaScript puro",
              "Layout responsivo, fundo preto, sem depend\u00eancias",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  gap: "0.6rem",
                  alignItems: "flex-start",
                  color: "#888888",
                  fontSize: "0.85rem",
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: "#22c55e", flexShrink: 0 }}>
                  &#10003;
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p
          style={{
            fontSize: "0.75rem",
            color: "#444444",
            lineHeight: 1.6,
          }}
        >
          Cole o HTML no widget Elementor (sem
          &lt;html&gt;/&lt;head&gt;/&lt;body&gt;).
          <br />
          Adicione scripts do Vturb e UTMify manualmente no WordPress.
        </p>
      </div>
    </div>
  );
}
