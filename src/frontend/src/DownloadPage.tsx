import { useRef, useState } from "react";

// VERSAO LIMPA PARA ELEMENTOR
// Sem <!DOCTYPE>, <html>, <head>, nem <body>
// Cole este conteudo direto no widget HTML do Elementor
const HTML_ELEMENTOR = `<style>
.ec-wrap{background:#000;min-height:100vh;font-family:system-ui,-apple-system,sans-serif;-webkit-font-smoothing:antialiased;color:#fff}
.ec-wrap *,
.ec-wrap *::before,
.ec-wrap *::after{box-sizing:border-box}
.ec-wrap h1,.ec-wrap h2,.ec-wrap h3,.ec-wrap h4,.ec-wrap h5,.ec-wrap h6{margin:0}
.ec-wrap p{margin:0}
.ec-wrap button{font-family:inherit}
.ec-btn{display:inline-flex;align-items:center;justify-content:center;background:#C1121F;color:#fff;font-weight:800;font-size:1.15rem;letter-spacing:.06em;text-transform:uppercase;padding:1.1rem 2.5rem;min-height:56px;border-radius:6px;border:none;cursor:pointer;width:100%;max-width:480px;text-align:center;text-decoration:none;transition:background .18s}
.ec-btn:hover{background:#a50e19}.ec-btn:active{background:#8e0c15}
.faq-item{border-bottom:1px solid #2a2a2a}
.faq-toggle{width:100%;display:flex;justify-content:space-between;align-items:center;padding:1.25rem 0;background:none;border:none;cursor:pointer;text-align:left;gap:1rem;color:#fff}
.faq-question{font-weight:700;font-size:.97rem;line-height:1.5;color:#fff}
.faq-icon{flex-shrink:0;transition:transform .25s;color:#888;font-size:1.1rem;line-height:1}
.faq-icon.ec-open{transform:rotate(180deg);color:#C1121F}
.faq-answer{color:#888;padding-bottom:1.25rem;line-height:1.8;font-size:.93rem;display:none}
.faq-answer.ec-open{display:block}
</style>

<div class="ec-wrap">

<section id="hero" style="display:flex;flex-direction:column;align-items:center;padding:3.5rem 1.5rem 0;background:#000;text-align:center">
  <div style="max-width:760px;width:100%">
    <h1 style="font-size:clamp(2rem,5.5vw,3.8rem);font-weight:900;color:#fff;line-height:1.08;margin-bottom:1.75rem;letter-spacing:-.04em">
      No la est&#225;s perdiendo <span style="color:#C1121F">por falta de amor.</span><br>
      <span style="color:#d4d4d4">La est&#225;s perdiendo por c&#243;mo</span> <em style="color:#fff;border-bottom:3px solid #C1121F;padding-bottom:2px">reaccionas bajo presi&#243;n.</em>
    </h1>
    <p style="font-size:1.25rem;color:#888;line-height:1.65;max-width:540px;margin:0 auto 2rem">El problema no es lo que sientes. <strong style="color:#b0b0b0">Es lo que haces cuando lo sientes.</strong></p>
    <ul style="list-style:none;padding:0 0 48px;margin:0 auto;text-align:left;display:inline-block">
      <li style="display:flex;gap:.75rem;margin-bottom:.75rem;color:#d0d0d0;font-size:1rem"><span style="color:#C1121F;margin-top:4px">&#8594;</span>Env&#237;as mensajes impulsivos y luego te arrepientes</li>
      <li style="display:flex;gap:.75rem;margin-bottom:.75rem;color:#d0d0d0;font-size:1rem"><span style="color:#C1121F;margin-top:4px">&#8594;</span>Explicas demasiado cuando sientes tensi&#243;n</li>
      <li style="display:flex;gap:.75rem;margin-bottom:.75rem;color:#d0d0d0;font-size:1rem"><span style="color:#C1121F;margin-top:4px">&#8594;</span>Sientes ansiedad cuando ella tarda en responder</li>
      <li style="display:flex;gap:.75rem;margin-bottom:.75rem;color:#d0d0d0;font-size:1rem"><span style="color:#C1121F;margin-top:4px">&#8594;</span>Revisas el chat constantemente</li>
    </ul>
  </div>
</section>

<section id="video" style="background:#000;padding:0 1.5rem;text-align:center">
  <div style="max-width:700px;margin:0 auto">
    <div style="margin-bottom:48px;display:flex;flex-direction:column;align-items:center">
      <p style="font-size:clamp(1.75rem,5.5vw,2.2rem);font-weight:800;color:#fff;line-height:1.2;max-width:300px">Mira esto hasta el final.</p>
      <div style="height:28px"></div>
      <p style="font-size:clamp(1rem,3vw,1.15rem);color:rgba(255,255,255,.55);line-height:1.6;max-width:320px">Vas a entender por qu&#233; sigues perdiendo postura&#8230;</p>
      <p style="font-size:clamp(1rem,3vw,1.15rem);color:rgba(255,255,255,.55);line-height:1.6;max-width:320px;margin-top:6px">y qu&#233; hacer exactamente en el momento en que ocurre.</p>
    </div>
    <div style="border-radius:12px;border:1px solid #2a2a2a;overflow:hidden">
      <vturb-smartplayer id="vid-69cb28db953ef32c144df9b8" style="display:block;margin:0 auto;width:100%"></vturb-smartplayer>
      <script type="text/javascript">(function(){var s=document.createElement("script");s.src="https://scripts.converteai.net/c8a20b51-83e1-4757-946e-5e61e0c6f8ed/players/69cb28db953ef32c144df9b8/v4/player.js";s.async=true;(document.head||document.body).appendChild(s);}());</script>
    </div>
  </div>
</section>

<section id="error" style="background:#000;padding:clamp(48px,6vw,72px) 1.5rem">
  <div style="max-width:680px;margin:0 auto">
    <h2 style="font-size:clamp(1.6rem,4vw,2.3rem);font-weight:800;color:#fff;margin-bottom:2.5rem;text-align:center">El error que cambia <span style="color:#C1121F">completamente la din&#225;mica</span></h2>
    <div style="display:flex;flex-direction:column;gap:1.5rem">
      <p style="color:#c8c8c8;line-height:1.8;font-size:1.05rem;padding-left:1.25rem;border-left:3px solid #2a2a2a">Cuando sientes presi&#243;n emocional, tu cerebro entra en modo supervivencia. No piensa. Reacciona.</p>
      <p style="color:#c8c8c8;line-height:1.8;font-size:1.05rem;padding-left:1.25rem;border-left:3px solid #2a2a2a">Esa reacci&#243;n &#8212; el mensaje impulsivo, la explicaci&#243;n de m&#225;s, el silencio lleno de ansiedad &#8212; destruye tu postura en segundos.</p>
      <p style="color:#c8c8c8;line-height:1.8;font-size:1.05rem;padding-left:1.25rem;border-left:3px solid #2a2a2a">Y la postura lo cambia todo. No las palabras. No las intenciones. La postura.</p>
      <p style="color:#fff;line-height:1.8;font-size:1.05rem;padding-left:1.25rem;border-left:3px solid #C1121F">El verdadero problema no es lo que sientes. Es que no tienes un sistema para regularte antes de actuar.</p>
    </div>
    <div style="margin-top:clamp(32px,5vw,48px);display:flex;justify-content:center">
      <button class="ec-btn" onclick="ecScrollToPrecio()">ENTENDER EL PROTOCOLO</button>
    </div>
  </div>
</section>

<section id="solucion" style="background:#000;padding:clamp(48px,6vw,72px) 1.5rem">
  <div style="max-width:820px;margin:0 auto">
    <h2 style="font-size:clamp(1.6rem,4vw,2.3rem);font-weight:800;color:#fff;text-align:center;max-width:620px;margin:0 auto 3rem">Un sistema dise&#241;ado para el momento exacto <span style="color:#C1121F">antes de que te sabotees</span></h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.25rem;margin-bottom:3rem">
      <div style="background:#0a0a0a;border:1px solid #2a2a2a;border-radius:10px;padding:1.75rem"><div style="font-size:3.5rem;font-weight:900;color:#C1121F;line-height:1;margin-bottom:.75rem;opacity:.9">1</div><h3 style="font-weight:800;color:#fff;font-size:1.1rem;margin-bottom:.5rem">Interrupci&#243;n</h3><p style="color:#888;font-size:.92rem;line-height:1.7">Corta el impulso en el momento exacto antes de reaccionar.</p></div>
      <div style="background:#0a0a0a;border:1px solid #2a2a2a;border-radius:10px;padding:1.75rem"><div style="font-size:3.5rem;font-weight:900;color:#C1121F;line-height:1;margin-bottom:.75rem;opacity:.9">2</div><h3 style="font-weight:800;color:#fff;font-size:1.1rem;margin-bottom:.5rem">Estabilizaci&#243;n</h3><p style="color:#888;font-size:.92rem;line-height:1.7">Recupera el control interno en segundos y baja la intensidad emocional.</p></div>
      <div style="background:#0a0a0a;border:1px solid #2a2a2a;border-radius:10px;padding:1.75rem"><div style="font-size:3.5rem;font-weight:900;color:#C1121F;line-height:1;margin-bottom:.75rem;opacity:.9">3</div><h3 style="font-weight:800;color:#fff;font-size:1.1rem;margin-bottom:.5rem">Silencio estrat&#233;gico</h3><p style="color:#888;font-size:.92rem;line-height:1.7">No reacciones. Mant&#233;n el control y deja que la tensi&#243;n juegue a tu favor.</p></div>
      <div style="background:#0a0a0a;border:1px solid #2a2a2a;border-radius:10px;padding:1.75rem"><div style="font-size:3.5rem;font-weight:900;color:#C1121F;line-height:1;margin-bottom:.75rem;opacity:.9">4</div><h3 style="font-weight:800;color:#fff;font-size:1.1rem;margin-bottom:.5rem">Respuesta estructurada</h3><p style="color:#888;font-size:.92rem;line-height:1.7">Cuando act&#250;es, ser&#225; desde el control&#8230; no desde la necesidad.</p></div>
    </div>
    <blockquote style="text-align:center;padding:2rem;background:#111;border:1px solid #2a2a2a;border-radius:10px">
      <p style="font-size:clamp(1.2rem,3vw,1.6rem);font-weight:800;color:#fff;line-height:1.3">&#8220;Primero cortas el impulso. <span style="color:#C1121F">Despu&#233;s decides.</span> No al rev&#233;s.&#8221;</p>
    </blockquote>
    <div style="margin-top:clamp(32px,5vw,48px);display:flex;justify-content:center">
      <button class="ec-btn" onclick="ecScrollToPrecio()">QUIERO APLICAR ESTO</button>
    </div>
  </div>
</section>

<section id="protocolo" style="background:#111;padding:clamp(48px,6vw,72px) 1.5rem">
  <div style="max-width:660px;margin:0 auto;text-align:center">
    <h2 style="font-size:clamp(1.6rem,4vw,2.3rem);font-weight:800;color:#fff;margin-bottom:.75rem">Tres minutos antes de <span style="color:#C1121F">arruinarlo todo</span></h2>
    <p style="color:#888;margin-bottom:2.5rem;font-size:.95rem">El protocolo que usas en el momento exacto en que pierdes el control</p>
    <div style="border:1px solid #2a2a2a;border-radius:12px;background:#000;overflow:hidden">
      <div style="padding:1.75rem 2rem;border-bottom:1px solid rgba(255,255,255,.06);text-align:left;display:flex;gap:1.5rem;align-items:flex-start"><div style="flex-shrink:0;background:#C1121F;border-radius:6px;padding:.35rem .65rem;font-size:.7rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#fff;white-space:nowrap;margin-top:3px">Min. 1</div><div><h3 style="font-weight:800;color:#fff;font-size:1rem;margin-bottom:.3rem">Reconocimiento</h3><p style="color:#888;font-size:.9rem;line-height:1.7">Detecta el impulso en el instante en que aparece. N&#243;mbralo&#8230; pero no act&#250;es.</p></div></div>
      <div style="padding:1.75rem 2rem;border-bottom:1px solid rgba(255,255,255,.06);text-align:left;display:flex;gap:1.5rem;align-items:flex-start"><div style="flex-shrink:0;background:#C1121F;border-radius:6px;padding:.35rem .65rem;font-size:.7rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#fff;white-space:nowrap;margin-top:3px">Min. 2</div><div><h3 style="font-weight:800;color:#fff;font-size:1rem;margin-bottom:.3rem">Regulaci&#243;n</h3><p style="color:#888;font-size:.9rem;line-height:1.7">Aplica la t&#233;cnica que corta la reacci&#243;n autom&#225;tica y baja la intensidad emocional.</p></div></div>
      <div style="padding:1.75rem 2rem;text-align:left;display:flex;gap:1.5rem;align-items:flex-start"><div style="flex-shrink:0;background:#C1121F;border-radius:6px;padding:.35rem .65rem;font-size:.7rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#fff;white-space:nowrap;margin-top:3px">Min. 3</div><div><h3 style="font-weight:800;color:#fff;font-size:1rem;margin-bottom:.3rem">Decisi&#243;n</h3><p style="color:#888;font-size:.9rem;line-height:1.7">Con la mente estable, eliges c&#243;mo actuar&#8230; o decides no actuar.</p></div></div>
    </div>
  </div>
</section>

<section id="incluye" style="background:#000;padding:clamp(48px,6vw,72px) 1.5rem;text-align:center">
  <div style="max-width:580px;margin:0 auto">
    <h2 style="font-size:clamp(1.6rem,4vw,2.3rem);font-weight:800;color:#fff;margin-bottom:2.5rem">Todo lo que obtienes hoy <span style="color:#C1121F">(acceso inmediato)</span></h2>
    <p style="color:#c8c8c8;font-size:.9rem;font-weight:600;text-align:left;margin-bottom:.75rem">Acceso completo al sistema:</p>
    <div style="display:flex;flex-direction:column;gap:.75rem;margin-bottom:2.5rem">
      <div style="display:flex;align-items:flex-start;gap:1rem;background:#0a0a0a;border:1px solid #2a2a2a;border-radius:8px;padding:1rem 1.25rem;text-align:left"><span style="color:#22c55e;font-size:1.1rem;margin-top:1px">&#10003;</span><span style="font-weight:700;color:#fff;font-size:.95rem">Protocolo exacto para cortar la reacci&#243;n en segundos</span></div>
      <div style="display:flex;align-items:flex-start;gap:1rem;background:#0a0a0a;border:1px solid #2a2a2a;border-radius:8px;padding:1rem 1.25rem;text-align:left"><span style="color:#22c55e;font-size:1.1rem;margin-top:1px">&#10003;</span><span style="font-weight:700;color:#fff;font-size:.95rem">Audios guiados para estabilizarte en el momento exacto</span></div>
      <div style="display:flex;align-items:flex-start;gap:1rem;background:#0a0a0a;border:1px solid #2a2a2a;border-radius:8px;padding:1rem 1.25rem;text-align:left"><span style="color:#22c55e;font-size:1.1rem;margin-top:1px">&#10003;</span><span style="font-weight:700;color:#fff;font-size:.95rem">M&#233;todo claro para recuperar el control sin reaccionar impulsivamente</span></div>
      <div style="display:flex;align-items:flex-start;gap:1rem;background:#0a0a0a;border:1px solid #2a2a2a;border-radius:8px;padding:1rem 1.25rem;text-align:left"><span style="color:#22c55e;font-size:1.1rem;margin-top:1px">&#10003;</span><span style="font-weight:700;color:#fff;font-size:.95rem">Instrucciones aplicables en cualquier situaci&#243;n emocional</span></div>
    </div>
    <div style="display:flex;justify-content:center">
      <button class="ec-btn" onclick="ecScrollToPrecio()">QUIERO ACCEDER AHORA</button>
    </div>
  </div>
</section>

<section id="precio" style="background:#000;padding:clamp(48px,6vw,72px) 1.5rem;text-align:center;border-top:3px solid #C1121F">
  <div style="max-width:480px;margin:0 auto">
    <p style="font-size:.8rem;color:rgba(255,255,255,.55);margin-bottom:20px;line-height:1.5">Disponible hoy. Puede no estar disponible despu&#233;s.</p>
    <h2 style="font-size:clamp(1.25rem,3vw,1.75rem);font-weight:900;color:#fff;margin-bottom:28px;letter-spacing:-.02em;line-height:1.2">Accede hoy al sistema completo por solo 17 USD (pago &#250;nico)</h2>
    <div style="margin-bottom:32px"><span style="font-size:clamp(4rem,10vw,6rem);font-weight:900;color:#fff;letter-spacing:-.04em;line-height:1;display:block">$17</span></div>
    <p style="font-size:.95rem;color:rgba(255,255,255,.75);font-weight:500;line-height:1.5;margin-bottom:24px">Esto es lo que haces en el momento exacto en que pierdes el control.</p>
    <div style="width:100%;max-width:480px;margin-bottom:16px">
      <a href="https://pay.hotmart.com/S104758048Y?checkoutMode=10" class="ec-btn" style="display:inline-flex">ACCEDER AHORA</a>
    </div>
    <p style="font-size:.8rem;color:rgba(255,255,255,.65);line-height:1.6">Acceso inmediato &#8226; Pago &#250;nico &#8226; Garant&#237;a 7 d&#237;as<br>&#128274; Pago seguro &#8226; Protecci&#243;n SSL</p>
  </div>
</section>

<section id="garantia" style="background:#111;padding:3rem 1.5rem;text-align:center">
  <div style="max-width:480px;margin:0 auto">
    <h2 style="font-size:clamp(1.5rem,4vw,2rem);font-weight:800;color:#fff;margin-bottom:1.25rem">Garant&#237;a de 7 d&#237;as</h2>
    <div style="background:#111;border:1px solid #2a2a2a;border-radius:12px;padding:1.75rem;color:#888;line-height:1.9;font-size:.97rem">
      <p>Tienes <strong style="color:#fff">7 d&#237;as.</strong><br>Aplica el protocolo.<br>Si no sientes mayor claridad y control, puedes pedir reembolso.<br><strong style="color:#fff">Sin complicaciones.</strong></p>
    </div>
  </div>
</section>

<section id="faq" style="background:#000;padding:3rem 1.5rem">
  <div style="max-width:660px;margin:0 auto">
    <h2 style="font-size:clamp(1.5rem,4vw,2.1rem);font-weight:800;color:#fff;margin-bottom:2.5rem;text-align:center">Preguntas frecuentes</h2>
    <div>
      <div class="faq-item"><button class="faq-toggle" onclick="ecToggleFaq(this)"><span class="faq-question">&#191;Esto es reconquista?</span><span class="faq-icon">&#9662;</span></button><div class="faq-answer">No. No vas a perseguir a nadie ni usar t&#233;cnicas para recuperar a alguien. Esto es sobre regular tu estado emocional y mantener tu postura.</div></div>
      <div class="faq-item"><button class="faq-toggle" onclick="ecToggleFaq(this)"><span class="faq-question">&#191;Esto es manipulaci&#243;n?</span><span class="faq-icon">&#9662;</span></button><div class="faq-answer">No. Manipulaci&#243;n es intentar controlar a otros. Esto es aprender a controlarte a ti mismo.</div></div>
      <div class="faq-item"><button class="faq-toggle" onclick="ecToggleFaq(this)"><span class="faq-question">&#191;Y si ya comet&#237; errores?</span><span class="faq-icon">&#9662;</span></button><div class="faq-answer">La mayor&#237;a de los hombres que usan este sistema ya los cometieron. El protocolo no borra el pasado, pero te da las herramientas para no seguir acumulando errores.</div></div>
      <div class="faq-item"><button class="faq-toggle" onclick="ecToggleFaq(this)"><span class="faq-question">&#191;Y si ella ya est&#225; distante?</span><span class="faq-icon">&#9662;</span></button><div class="faq-answer">Entonces m&#225;s raz&#243;n para trabajar tu postura. La distancia se profundiza con reacciones impulsivas. Se reduce con calma consistente.</div></div>
      <div class="faq-item"><button class="faq-toggle" onclick="ecToggleFaq(this)"><span class="faq-question">&#191;Cu&#225;nto tiempo tarda en funcionar?</span><span class="faq-icon">&#9662;</span></button><div class="faq-answer">El primer resultado lo puedes ver en la primera situaci&#243;n de presi&#243;n que enfrentes.</div></div>
      <div class="faq-item"><button class="faq-toggle" onclick="ecToggleFaq(this)"><span class="faq-question">&#191;Necesito experiencia previa?</span><span class="faq-icon">&#9662;</span></button><div class="faq-answer">No. El sistema est&#225; dise&#241;ado para ser aplicado directamente, sin conocimientos previos.</div></div>
      <div class="faq-item"><button class="faq-toggle" onclick="ecToggleFaq(this)"><span class="faq-question">&#191;Y si no me funciona?</span><span class="faq-icon">&#9662;</span></button><div class="faq-answer">Tienes 7 d&#237;as de garant&#237;a. Si aplicas el protocolo y no sientes m&#225;s claridad y control, te devolvemos el dinero.</div></div>
    </div>
    <div style="margin-top:3rem;display:flex;justify-content:center">
      <button class="ec-btn" onclick="ecScrollToPrecio()">ACCEDER AHORA</button>
    </div>
  </div>
</section>

<section style="background:#000;padding:3.5rem 1.5rem;text-align:center">
  <div style="max-width:700px;margin:0 auto">
    <h2 style="font-size:clamp(2rem,5.5vw,3.4rem);font-weight:900;color:#fff;line-height:1.15;letter-spacing:-.04em">Cada reacci&#243;n impulsiva <span style="color:#C1121F">debilita tu postura.</span><br>Cada respuesta controlada <span style="text-decoration:underline;text-decoration-color:#C1121F;text-decoration-thickness:3px;text-underline-offset:6px">la fortalece.</span></h2>
  </div>
</section>

<footer style="background:#0a0a0a;border-top:1px solid #1e1e1e;padding:2rem 1.5rem 1.5rem">
  <p style="color:#777;font-size:.78rem;text-align:center;line-height:1.6;max-width:540px;margin:0 auto 1.5rem">Este contenido es educativo. No reemplaza terapia ni asesor&#237;a profesional.</p>
  <p style="color:#444;font-size:.75rem;text-align:center;margin-top:1.5rem;border-top:1px solid #1e1e1e;padding-top:1.5rem">&#169; 2026 protocoloinquebrantable. Todos los derechos reservados.</p>
</footer>

</div>

<script>
function ecScrollToPrecio(){var el=document.getElementById('precio');if(el)el.scrollIntoView({behavior:'smooth'})}
function ecToggleFaq(btn){var a=btn.nextElementSibling,ic=btn.querySelector('.faq-icon'),open=a.classList.contains('ec-open');document.querySelectorAll('.faq-answer').forEach(function(x){x.classList.remove('ec-open')});document.querySelectorAll('.faq-icon').forEach(function(x){x.classList.remove('ec-open')});if(!open){a.classList.add('ec-open');ic.classList.add('ec-open')}}
</script>`;

export default function DownloadPage() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.focus();
    ta.select();
    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  }

  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        padding: "2.5rem 1.5rem",
        color: "#fff",
        fontFamily: "system-ui,-apple-system,sans-serif",
      }}
    >
      <div style={{ maxWidth: "820px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "clamp(1.4rem,4vw,2rem)",
            fontWeight: 800,
            color: "#fff",
            marginBottom: "0.5rem",
            lineHeight: 1.2,
          }}
        >
          C&#243;digo para Elementor — cole direto no widget HTML
        </h1>

        <p
          style={{
            color: "#888",
            fontSize: "0.95rem",
            lineHeight: 1.7,
            marginBottom: "0.75rem",
          }}
        >
          Este c&#243;digo{" "}
          <strong style={{ color: "#ccc" }}>n&#227;o tem</strong>{" "}
          <code
            style={{
              background: "#1a1a1a",
              border: "1px solid #333",
              borderRadius: "4px",
              padding: "0.1rem 0.4rem",
              color: "#e0e0e0",
            }}
          >
            &lt;html&gt;
          </code>
          ,{" "}
          <code
            style={{
              background: "#1a1a1a",
              border: "1px solid #333",
              borderRadius: "4px",
              padding: "0.1rem 0.4rem",
              color: "#e0e0e0",
            }}
          >
            &lt;head&gt;
          </code>{" "}
          nem{" "}
          <code
            style={{
              background: "#1a1a1a",
              border: "1px solid #333",
              borderRadius: "4px",
              padding: "0.1rem 0.4rem",
              color: "#e0e0e0",
            }}
          >
            &lt;body&gt;
          </code>
          . &#201; s&#243; o conte&#250;do da p&#225;gina.
        </p>

        <div
          style={{
            background: "#0a0a0a",
            border: "1px solid #C1121F",
            borderRadius: "8px",
            padding: "1rem 1.25rem",
            marginBottom: "1.25rem",
          }}
        >
          <p
            style={{
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.9rem",
              marginBottom: "0.4rem",
            }}
          >
            Como usar:
          </p>
          <ol
            style={{
              color: "#aaa",
              fontSize: "0.88rem",
              lineHeight: 1.8,
              paddingLeft: "1.25rem",
              margin: 0,
            }}
          >
            <li>
              Clique em{" "}
              <strong style={{ color: "#fff" }}>COPIAR C&#211;DIGO</strong>{" "}
              abaixo
            </li>
            <li>
              No Elementor, arraste um widget{" "}
              <strong style={{ color: "#fff" }}>HTML</strong> para a p&#225;gina
            </li>
            <li>Cole o c&#243;digo no campo do widget e salve</li>
            <li>
              <strong style={{ color: "#fff" }}>
                Script do v&#237;deo (Vturb):
              </strong>{" "}
              Se o v&#237;deo n&#227;o aparecer, adicione o script do Vturb{" "}
              tamb&#233;m via <strong style={{ color: "#fff" }}>WPCode</strong>{" "}
              no header — o Elementor pode bloquear scripts inline
            </li>
            <li>
              Os scripts de tracking (UTMify, pixel) adicione separado via
              WPCode no header do WordPress
            </li>
          </ol>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            background: copied ? "#16a34a" : "#C1121F",
            color: "#fff",
            fontWeight: 800,
            fontSize: "1rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            padding: "0.9rem 2rem",
            minHeight: "52px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            marginBottom: "1rem",
            transition: "background 0.2s",
          }}
        >
          {copied ? "&#10003; COPIADO!" : "COPIAR C\u00D3DIGO"}
        </button>

        <textarea
          ref={textareaRef}
          readOnly
          value={HTML_ELEMENTOR}
          style={{
            width: "100%",
            height: "420px",
            background: "#0d0d0d",
            border: "1px solid #2a2a2a",
            borderRadius: "8px",
            color: "#c8c8c8",
            fontFamily: "monospace",
            fontSize: "0.75rem",
            lineHeight: 1.5,
            padding: "1rem",
            resize: "vertical",
            display: "block",
            boxSizing: "border-box",
            outline: "none",
          }}
        />

        <p
          style={{
            color: "#555",
            fontSize: "0.8rem",
            marginTop: "0.75rem",
            lineHeight: 1.6,
          }}
        >
          Tamb&#233;m pode usar{" "}
          <strong style={{ color: "#666" }}>Ctrl+A</strong> dentro do campo e
          depois <strong style={{ color: "#666" }}>Ctrl+C</strong>.
        </p>

        {/* Vturb Script Block */}
        <div
          style={{
            marginTop: "2.5rem",
            background: "#0a0a0a",
            border: "1px solid #444",
            borderRadius: "8px",
            padding: "1.25rem",
          }}
        >
          <p
            style={{
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.95rem",
              marginBottom: "0.5rem",
            }}
          >
            &#128249; Script do v&#237;deo Vturb — adicione via WPCode se o
            v&#237;deo n&#227;o aparecer
          </p>
          <p
            style={{
              color: "#888",
              fontSize: "0.85rem",
              lineHeight: 1.7,
              marginBottom: "0.75rem",
            }}
          >
            Se o v&#237;deo n&#227;o carregar no Elementor, cole este script no
            WPCode (ou qualquer plugin de inject&#227;o de scripts) no{" "}
            <strong style={{ color: "#ccc" }}>&lt;head&gt;</strong> ou{" "}
            <strong style={{ color: "#ccc" }}>Body start</strong> do WordPress:
          </p>
          <textarea
            readOnly
            value={`<script type="text/javascript">(function(){var s=document.createElement("script");s.src="https://scripts.converteai.net/c8a20b51-83e1-4757-946e-5e61e0c6f8ed/players/69cb28db953ef32c144df9b8/v4/player.js";s.async=true;(document.head||document.body).appendChild(s);}());</script>`}
            style={{
              width: "100%",
              height: "100px",
              background: "#0d0d0d",
              border: "1px solid #2a2a2a",
              borderRadius: "6px",
              color: "#c8c8c8",
              fontFamily: "monospace",
              fontSize: "0.75rem",
              lineHeight: 1.5,
              padding: "0.75rem",
              resize: "none",
              display: "block",
              boxSizing: "border-box",
              outline: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
}
