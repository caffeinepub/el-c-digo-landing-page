import { SITE_HTML } from "./siteHtml";

export default function DownloadPage() {
  return (
    <div
      data-ocid="descarga.page"
      style={{
        background: "#000000",
        minHeight: "100vh",
        padding: "2rem 1.5rem",
        fontFamily: "system-ui, -apple-system, sans-serif",
        color: "#ffffff",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        {/* Header */}
        <h1
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-0.03em",
            marginBottom: "0.25rem",
          }}
        >
          El C&oacute;digo &mdash; HTML Export
        </h1>
        <p
          style={{
            color: "#888888",
            fontSize: "0.9rem",
            marginBottom: "1.5rem",
            lineHeight: 1.5,
          }}
        >
          Clique dentro da caixa, pressione{" "}
          <kbd
            style={{
              background: "#222",
              padding: "1px 5px",
              borderRadius: "3px",
            }}
          >
            Ctrl+A
          </kbd>{" "}
          depois{" "}
          <kbd
            style={{
              background: "#222",
              padding: "1px 5px",
              borderRadius: "3px",
            }}
          >
            Ctrl+C
          </kbd>{" "}
          para copiar. Cole no widget HTML do Elementor.
        </p>

        {/* Instructions */}
        <div
          style={{
            background: "#0d0d0d",
            border: "1px solid #222",
            borderRadius: "8px",
            padding: "1rem 1.25rem",
            marginBottom: "1rem",
          }}
        >
          <p
            style={{
              color: "#aaa",
              fontSize: "0.82rem",
              margin: 0,
              lineHeight: 1.9,
            }}
          >
            <strong style={{ color: "#C1121F" }}>
              Trocar v&iacute;deo Vturb:
            </strong>{" "}
            fa&ccedil;a Ctrl+F no c&oacute;digo e busque por{" "}
            <code
              style={{
                background: "#1a1a1a",
                padding: "1px 4px",
                borderRadius: "3px",
                color: "#f87171",
              }}
            >
              TROCAR V&Iacute;DEO
            </code>
            <br />
            <strong style={{ color: "#C1121F" }}>Trocar link Hotmart:</strong>{" "}
            busque por{" "}
            <code
              style={{
                background: "#1a1a1a",
                padding: "1px 4px",
                borderRadius: "3px",
                color: "#f87171",
              }}
            >
              LINK DO CHECKOUT
            </code>
          </p>
        </div>

        {/* The HTML code visible on screen */}
        <textarea
          data-ocid="descarga.code_textarea"
          readOnly
          aria-label="C&oacute;digo HTML do site para copiar"
          value={SITE_HTML}
          onClick={(e) => (e.target as HTMLTextAreaElement).select()}
          onKeyDown={(e) => {
            if (e.key === "a" && (e.ctrlKey || e.metaKey)) {
              (e.target as HTMLTextAreaElement).select();
            }
          }}
          style={{
            width: "100%",
            height: "70vh",
            minHeight: "400px",
            background: "#0a0a0a",
            color: "#c8c8c8",
            border: "1px solid #333",
            borderRadius: "8px",
            padding: "1rem",
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: "0.78rem",
            lineHeight: 1.5,
            resize: "vertical",
            boxSizing: "border-box",
            outline: "none",
            cursor: "text",
          }}
        />

        <p
          style={{
            fontSize: "0.75rem",
            color: "#444444",
            marginTop: "1rem",
            lineHeight: 1.6,
          }}
        >
          Clique dentro da caixa e pressione Ctrl+A &rarr; Ctrl+C para copiar o
          c&oacute;digo completo.
        </p>
      </div>
    </div>
  );
}
