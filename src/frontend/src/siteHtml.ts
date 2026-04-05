// ============================================================
// SITE HTML EXPORT FOR WORDPRESS/ELEMENTOR
// This file contains the full HTML of the landing page.
// Split closing script tags as '</' + 'script>' to avoid parser issues.
// ============================================================

const buildSiteHtml = (): string => {
  const L: string[] = [];
  const p = (s: string) => L.push(s);

  p("<!DOCTYPE html>");
  p('<html lang="es">');
  p("<head>");
  p('<meta charset="UTF-8">');
  p('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
  p("<title>El C\u00f3digo \u2014 Landing Page</title>");
  p("<!--");
  p(
    "=============================================================================",
  );
  p("  SCRIPTS DE PERFORMANCE DA VTURB (adicione aqui se quiser)");
  p("  Cole os scripts abaixo no <head> para acelerar o player:");
  p("");
  p(
    "  <script>!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);<" +
      "/script>",
  );
  p(
    '  <link rel="preload" href="https://scripts.converteai.net/SEU-ACCOUNT/players/SEU-PLAYER-ID/v4/player.js" as="script">',
  );
  p(
    '  <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js" as="script">',
  );
  p('  <link rel="dns-prefetch" href="https://cdn.converteai.net">');
  p('  <link rel="dns-prefetch" href="https://scripts.converteai.net">');
  p('  <link rel="dns-prefetch" href="https://images.converteai.net">');
  p('  <link rel="dns-prefetch" href="https://api.vturb.com.br">');
  p(
    "=============================================================================",
  );
  p("-->");
  p("<style>");
  p("*,*::before,*::after{box-sizing:border-box}");
  p(
    "html,body{margin:0;padding:0;background:#000;color:#fff;font-family:system-ui,-apple-system,sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}",
  );
  p(".ec-wrap{background:#000;min-height:100vh;color:#fff;overflow-x:hidden}");
  p(".ec-wrap h1,.ec-wrap h2,.ec-wrap h3,.ec-wrap h4{margin:0}");
  p(".ec-wrap p{margin:0}");
  p(
    ".ec-btn{display:inline-flex;align-items:center;justify-content:center;background:#C1121F;color:#fff;font-weight:800;font-size:1.15rem;letter-spacing:.06em;text-transform:uppercase;padding:1.1rem 2.5rem;min-height:56px;border-radius:6px;border:none;cursor:pointer;width:100%;max-width:480px;text-align:center;text-decoration:none;transition:background .18s}",
  );
  p(".ec-btn:hover{background:#a50e19}.ec-btn:active{background:#8e0c15}");
  p(".faq-item{border-bottom:1px solid #2a2a2a}");
  p(
    ".faq-toggle{width:100%;display:flex;justify-content:space-between;align-items:center;padding:1.25rem 0;background:none;border:none;cursor:pointer;text-align:left;gap:1rem;color:#fff}",
  );
  p(
    ".faq-question{font-weight:700;font-size:.97rem;line-height:1.5;color:#fff}",
  );
  p(
    ".faq-icon{flex-shrink:0;transition:transform .25s;color:#888;font-size:1.1rem;line-height:1}",
  );
  p(".faq-icon.ec-open{transform:rotate(180deg);color:#C1121F}");
  p(
    ".faq-answer{color:#888;padding-bottom:1.25rem;line-height:1.8;font-size:.93rem;display:none}",
  );
  p(".faq-answer.ec-open{display:block}");
  p("</style>");
  p("</head>");
  p("<body>");
  p('<div class="ec-wrap">');
  p("");

  // HERO
  p("<!-- HERO -->");
  p(
    '<section id="hero" style="display:flex;flex-direction:column;align-items:center;padding:3.5rem 1.5rem 0;background:#000;text-align:center">',
  );
  p('  <div style="max-width:760px;width:100%">');
  p(
    '    <h1 style="font-size:clamp(2rem,5.5vw,3.8rem);font-weight:900;color:#fff;line-height:1.08;margin-bottom:1.75rem;letter-spacing:-.04em">',
  );
  p(
    '      No la est\u00e1s perdiendo <span style="color:#C1121F">por falta de amor.</span><br>',
  );
  p(
    '      <span style="color:#d4d4d4">La est\u00e1s perdiendo por c\u00f3mo</span> <em style="color:#fff;border-bottom:3px solid #C1121F;padding-bottom:2px">reaccionas bajo presi\u00f3n.</em>',
  );
  p("    </h1>");
  p(
    '    <p style="font-size:1.25rem;color:#888;line-height:1.65;max-width:540px;margin:0 auto 2rem">El problema no es lo que sientes. <strong style="color:#b0b0b0">Es lo que haces cuando lo sientes.</strong></p>',
  );
  p(
    '    <ul style="list-style:none;padding:0 0 48px;margin:0 auto;text-align:left;display:inline-block">',
  );
  p(
    '      <li style="display:flex;gap:.75rem;margin-bottom:.75rem;color:#d0d0d0;font-size:1rem"><span style="color:#C1121F;margin-top:4px">&#8594;</span>Env\u00edas mensajes impulsivos y luego te arrepientes</li>',
  );
  p(
    '      <li style="display:flex;gap:.75rem;margin-bottom:.75rem;color:#d0d0d0;font-size:1rem"><span style="color:#C1121F;margin-top:4px">&#8594;</span>Explicas demasiado cuando sientes tensi\u00f3n</li>',
  );
  p(
    '      <li style="display:flex;gap:.75rem;margin-bottom:.75rem;color:#d0d0d0;font-size:1rem"><span style="color:#C1121F;margin-top:4px">&#8594;</span>Sientes ansiedad cuando ella tarda en responder</li>',
  );
  p(
    '      <li style="display:flex;gap:.75rem;margin-bottom:.75rem;color:#d0d0d0;font-size:1rem"><span style="color:#C1121F;margin-top:4px">&#8594;</span>Revisas el chat constantemente</li>',
  );
  p("    </ul>");
  p("  </div>");
  p("</section>");
  p("");

  // VIDEO
  p("<!-- V\u00cdDEO \u2014 COLE O C\u00d3DIGO DA VTURB AQUI");
  p("     Para trocar o v\u00eddeo: substitua o conte\u00fado do <div> abaixo");
  p("     com o c\u00f3digo completo da Vturb (tag + script).");
  p("     Exemplo:");
  p(
    '       <vturb-smartplayer id="vid-SEU-ID" style="display:block;margin:0 auto;width:100%"></vturb-smartplayer>',
  );
  p(
    '       <script type="text/javascript">var s=document.createElement("script");s.src="https://scripts.converteai.net/ACCOUNT/players/PLAYER-ID/v4/player.js";s.async=true;document.head.appendChild(s);<' +
      "/script>",
  );
  p("-->");
  p(
    '<section id="video" style="background:#000;padding:0 1.5rem;text-align:center">',
  );
  p('  <div style="max-width:700px;margin:0 auto">');
  p(
    '    <div style="margin-bottom:48px;display:flex;flex-direction:column;align-items:center">',
  );
  p(
    '      <p style="font-size:clamp(1.75rem,5.5vw,2.2rem);font-weight:800;color:#fff;line-height:1.2;max-width:300px">Mira esto hasta el final.</p>',
  );
  p('      <div style="height:28px"></div>');
  p(
    '      <p style="font-size:clamp(1rem,3vw,1.15rem);color:rgba(255,255,255,.55);line-height:1.6;max-width:320px">Vas a entender por qu\u00e9 sigues perdiendo postura&#8230;</p>',
  );
  p(
    '      <p style="font-size:clamp(1rem,3vw,1.15rem);color:rgba(255,255,255,.55);line-height:1.6;max-width:320px;margin-top:6px">y qu\u00e9 hacer exactamente en el momento en que ocurre.</p>',
  );
  p("    </div>");
  p(
    '    <div style="border-radius:12px;border:1px solid #2a2a2a;overflow:hidden;min-height:200px">',
  );
  p("      <!-- COLE O C\u00d3DIGO DA VTURB AQUI -->");
  p("    </div>");
  p("  </div>");
  p("</section>");
  p("");

  // EL ERROR
  p("<!-- EL ERROR -->");
  p(
    '<section id="error" style="background:#000;padding:clamp(48px,6vw,72px) 1.5rem">',
  );
  p('  <div style="max-width:680px;margin:0 auto">');
  p(
    '    <h2 style="font-size:clamp(1.6rem,4vw,2.3rem);font-weight:800;color:#fff;margin-bottom:2.5rem;text-align:center">El error que cambia <span style="color:#C1121F">completamente la din\u00e1mica</span></h2>',
  );
  p('    <div style="display:flex;flex-direction:column;gap:1.5rem">');
  p(
    '      <p style="color:#c8c8c8;line-height:1.8;font-size:1.05rem;padding-left:1.25rem;border-left:3px solid #2a2a2a">Cuando sientes presi\u00f3n emocional, tu cerebro entra en modo supervivencia. No piensa. Reacciona.</p>',
  );
  p(
    '      <p style="color:#c8c8c8;line-height:1.8;font-size:1.05rem;padding-left:1.25rem;border-left:3px solid #2a2a2a">Esa reacci\u00f3n \u2014 el mensaje impulsivo, la explicaci\u00f3n de m\u00e1s, el silencio lleno de ansiedad \u2014 destruye tu postura en segundos.</p>',
  );
  p(
    '      <p style="color:#c8c8c8;line-height:1.8;font-size:1.05rem;padding-left:1.25rem;border-left:3px solid #2a2a2a">Y la postura lo cambia todo. No las palabras. No las intenciones. La postura.</p>',
  );
  p(
    '      <p style="color:#fff;line-height:1.8;font-size:1.05rem;padding-left:1.25rem;border-left:3px solid #C1121F">El verdadero problema no es lo que sientes. Es que no tienes un sistema para regularte antes de actuar.</p>',
  );
  p("    </div>");
  p(
    '    <div style="margin-top:clamp(32px,5vw,48px);display:flex;justify-content:center">',
  );
  p(
    '      <button class="ec-btn" onclick="ecScrollToPrecio()">ENTENDER EL PROTOCOLO</button>',
  );
  p("    </div>");
  p("  </div>");
  p("</section>");
  p("");

  // 4 STEPS
  p("<!-- SISTEMA 4 PASOS -->");
  p(
    '<section id="solucion" style="background:#000;padding:clamp(48px,6vw,72px) 1.5rem">',
  );
  p('  <div style="max-width:820px;margin:0 auto">');
  p(
    '    <h2 style="font-size:clamp(1.6rem,4vw,2.3rem);font-weight:800;color:#fff;text-align:center;max-width:620px;margin:0 auto 3rem">Un sistema dise\u00f1ado para el momento exacto <span style="color:#C1121F">antes de que te sabotees</span></h2>',
  );
  p(
    '    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.25rem;margin-bottom:3rem">',
  );
  p(
    '      <div style="background:#0a0a0a;border:1px solid #2a2a2a;border-radius:10px;padding:1.75rem"><div style="font-size:3.5rem;font-weight:900;color:#C1121F;line-height:1;margin-bottom:.75rem;opacity:.9">1</div><h3 style="font-weight:800;color:#fff;font-size:1.1rem;margin-bottom:.5rem">Interrupci\u00f3n</h3><p style="color:#888;font-size:.92rem;line-height:1.7">Corta el impulso en el momento exacto antes de reaccionar.</p></div>',
  );
  p(
    '      <div style="background:#0a0a0a;border:1px solid #2a2a2a;border-radius:10px;padding:1.75rem"><div style="font-size:3.5rem;font-weight:900;color:#C1121F;line-height:1;margin-bottom:.75rem;opacity:.9">2</div><h3 style="font-weight:800;color:#fff;font-size:1.1rem;margin-bottom:.5rem">Estabilizaci\u00f3n</h3><p style="color:#888;font-size:.92rem;line-height:1.7">Recupera el control interno en segundos y baja la intensidad emocional.</p></div>',
  );
  p(
    '      <div style="background:#0a0a0a;border:1px solid #2a2a2a;border-radius:10px;padding:1.75rem"><div style="font-size:3.5rem;font-weight:900;color:#C1121F;line-height:1;margin-bottom:.75rem;opacity:.9">3</div><h3 style="font-weight:800;color:#fff;font-size:1.1rem;margin-bottom:.5rem">Silencio estrat\u00e9gico</h3><p style="color:#888;font-size:.92rem;line-height:1.7">No reacciones. Mant\u00e9n el control y deja que la tensi\u00f3n juegue a tu favor.</p></div>',
  );
  p(
    '      <div style="background:#0a0a0a;border:1px solid #2a2a2a;border-radius:10px;padding:1.75rem"><div style="font-size:3.5rem;font-weight:900;color:#C1121F;line-height:1;margin-bottom:.75rem;opacity:.9">4</div><h3 style="font-weight:800;color:#fff;font-size:1.1rem;margin-bottom:.5rem">Respuesta estructurada</h3><p style="color:#888;font-size:.92rem;line-height:1.7">Cuando act\u00faes, ser\u00e1 desde el control\u2026 no desde la necesidad.</p></div>',
  );
  p("    </div>");
  p(
    '    <blockquote style="text-align:center;padding:2rem;background:#111;border:1px solid #2a2a2a;border-radius:10px">',
  );
  p(
    '      <p style="font-size:clamp(1.2rem,3vw,1.6rem);font-weight:800;color:#fff;line-height:1.3">&#8220;Primero cortas el impulso. <span style="color:#C1121F">Despu\u00e9s decides.</span> No al rev\u00e9s.&#8221;</p>',
  );
  p("    </blockquote>");
  p(
    '    <div style="margin-top:clamp(32px,5vw,48px);display:flex;justify-content:center">',
  );
  p(
    '      <button class="ec-btn" onclick="ecScrollToPrecio()">QUIERO APLICAR ESTO</button>',
  );
  p("    </div>");
  p("  </div>");
  p("</section>");
  p("");

  // PROTOCOL
  p("<!-- PROTOCOLO 3 MINUTOS -->");
  p(
    '<section id="protocolo" style="background:#111;padding:clamp(48px,6vw,72px) 1.5rem">',
  );
  p('  <div style="max-width:660px;margin:0 auto;text-align:center">');
  p(
    '    <h2 style="font-size:clamp(1.6rem,4vw,2.3rem);font-weight:800;color:#fff;margin-bottom:.75rem">Tres minutos antes de <span style="color:#C1121F">arruinarlo todo</span></h2>',
  );
  p(
    '    <p style="color:#888;margin-bottom:2.5rem;font-size:.95rem">El protocolo que usas en el momento exacto en que pierdes el control</p>',
  );
  p(
    '    <div style="border:1px solid #2a2a2a;border-radius:12px;background:#000;overflow:hidden">',
  );
  p(
    '      <div style="padding:1.75rem 2rem;border-bottom:1px solid rgba(255,255,255,.06);text-align:left;display:flex;gap:1.5rem;align-items:flex-start"><div style="flex-shrink:0;background:#C1121F;border-radius:6px;padding:.35rem .65rem;font-size:.7rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#fff;white-space:nowrap;margin-top:3px">Min. 1</div><div><h3 style="font-weight:800;color:#fff;font-size:1rem;margin-bottom:.3rem">Reconocimiento</h3><p style="color:#888;font-size:.9rem;line-height:1.7">Detecta el impulso en el instante en que aparece. N\u00f3mbralo\u2026 pero no act\u00faes.</p></div></div>',
  );
  p(
    '      <div style="padding:1.75rem 2rem;border-bottom:1px solid rgba(255,255,255,.06);text-align:left;display:flex;gap:1.5rem;align-items:flex-start"><div style="flex-shrink:0;background:#C1121F;border-radius:6px;padding:.35rem .65rem;font-size:.7rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#fff;white-space:nowrap;margin-top:3px">Min. 2</div><div><h3 style="font-weight:800;color:#fff;font-size:1rem;margin-bottom:.3rem">Regulaci\u00f3n</h3><p style="color:#888;font-size:.9rem;line-height:1.7">Aplica la t\u00e9cnica que corta la reacci\u00f3n autom\u00e1tica y baja la intensidad emocional.</p></div></div>',
  );
  p(
    '      <div style="padding:1.75rem 2rem;text-align:left;display:flex;gap:1.5rem;align-items:flex-start"><div style="flex-shrink:0;background:#C1121F;border-radius:6px;padding:.35rem .65rem;font-size:.7rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#fff;white-space:nowrap;margin-top:3px">Min. 3</div><div><h3 style="font-weight:800;color:#fff;font-size:1rem;margin-bottom:.3rem">Decisi\u00f3n</h3><p style="color:#888;font-size:.9rem;line-height:1.7">Con la mente estable, eliges c\u00f3mo actuar\u2026 o decides no actuar.</p></div></div>',
  );
  p("    </div>");
  p("  </div>");
  p("</section>");
  p("");

  // INCLUDES
  p("<!-- TODO LO QUE OBTIENES -->");
  p(
    '<section id="incluye" style="background:#000;padding:clamp(48px,6vw,72px) 1.5rem;text-align:center">',
  );
  p('  <div style="max-width:580px;margin:0 auto">');
  p(
    '    <h2 style="font-size:clamp(1.6rem,4vw,2.3rem);font-weight:800;color:#fff;margin-bottom:2.5rem">Todo lo que obtienes hoy <span style="color:#C1121F">(acceso inmediato)</span></h2>',
  );
  p(
    '    <p style="color:#c8c8c8;font-size:.9rem;font-weight:600;text-align:left;margin-bottom:.75rem">Acceso completo al sistema:</p>',
  );
  p(
    '    <div style="display:flex;flex-direction:column;gap:.75rem;margin-bottom:2.5rem">',
  );
  p(
    '      <div style="display:flex;align-items:flex-start;gap:1rem;background:#0a0a0a;border:1px solid #2a2a2a;border-radius:8px;padding:1rem 1.25rem;text-align:left"><span style="color:#22c55e;font-size:1.1rem;margin-top:1px">&#10003;</span><span style="font-weight:700;color:#fff;font-size:.95rem">Protocolo exacto para cortar la reacci\u00f3n en segundos</span></div>',
  );
  p(
    '      <div style="display:flex;align-items:flex-start;gap:1rem;background:#0a0a0a;border:1px solid #2a2a2a;border-radius:8px;padding:1rem 1.25rem;text-align:left"><span style="color:#22c55e;font-size:1.1rem;margin-top:1px">&#10003;</span><span style="font-weight:700;color:#fff;font-size:.95rem">Audios guiados para estabilizarte en el momento exacto</span></div>',
  );
  p(
    '      <div style="display:flex;align-items:flex-start;gap:1rem;background:#0a0a0a;border:1px solid #2a2a2a;border-radius:8px;padding:1rem 1.25rem;text-align:left"><span style="color:#22c55e;font-size:1.1rem;margin-top:1px">&#10003;</span><span style="font-weight:700;color:#fff;font-size:.95rem">M\u00e9todo claro para recuperar el control sin reaccionar impulsivamente</span></div>',
  );
  p(
    '      <div style="display:flex;align-items:flex-start;gap:1rem;background:#0a0a0a;border:1px solid #2a2a2a;border-radius:8px;padding:1rem 1.25rem;text-align:left"><span style="color:#22c55e;font-size:1.1rem;margin-top:1px">&#10003;</span><span style="font-weight:700;color:#fff;font-size:.95rem">Instrucciones aplicables en cualquier situaci\u00f3n emocional</span></div>',
  );
  p("    </div>");
  p('    <div style="display:flex;justify-content:center">');
  p(
    '      <button class="ec-btn" onclick="ecScrollToPrecio()">QUIERO ACCEDER AHORA</button>',
  );
  p("    </div>");
  p("  </div>");
  p("</section>");
  p("");

  // FOR WHO
  p("<!-- ESTE SISTEMA ES PARA TI - 2 CARDS -->");
  p(
    '<section id="para-quien" style="background:#111;padding:clamp(48px,6vw,72px) 1.5rem">',
  );
  p('  <div style="max-width:860px;margin:0 auto">');
  p(
    '    <h2 style="font-size:clamp(1.4rem,3.5vw,2rem);font-weight:800;color:#fff;margin-bottom:2.5rem;text-align:center">&#191;Este sistema es para ti?</h2>',
  );
  p(
    '    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem">',
  );
  p(
    '      <div style="border:1px solid #2a2a2a;background:#0a0a0a;border-radius:12px;padding:2rem">',
  );
  p(
    '        <h3 style="font-weight:800;font-size:.8rem;letter-spacing:.1em;text-transform:uppercase;color:#22c55e;margin-bottom:1.5rem">&#10003; Para qui\u00e9n es</h3>',
  );
  p(
    '        <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.85rem">',
  );
  p(
    '          <li style="display:flex;gap:.75rem;align-items:flex-start;color:#c8c8c8;font-size:.93rem;line-height:1.6"><span style="color:#22c55e;flex-shrink:0;margin-top:3px">&#10003;</span>Para hombres que reaccionan de forma impulsiva bajo presi\u00f3n emocional</li>',
  );
  p(
    '          <li style="display:flex;gap:.75rem;align-items:flex-start;color:#c8c8c8;font-size:.93rem;line-height:1.6"><span style="color:#22c55e;flex-shrink:0;margin-top:3px">&#10003;</span>Para quienes quieren recuperar su postura sin jugar juegos</li>',
  );
  p(
    '          <li style="display:flex;gap:.75rem;align-items:flex-start;color:#c8c8c8;font-size:.93rem;line-height:1.6"><span style="color:#22c55e;flex-shrink:0;margin-top:3px">&#10003;</span>Para los que ya cometieron errores y quieren reencuadrarse</li>',
  );
  p(
    '          <li style="display:flex;gap:.75rem;align-items:flex-start;color:#c8c8c8;font-size:.93rem;line-height:1.6"><span style="color:#22c55e;flex-shrink:0;margin-top:3px">&#10003;</span>Para quien quiere responder desde la calma, no desde el miedo</li>',
  );
  p("        </ul>");
  p("      </div>");
  p(
    '      <div style="border:1px solid #2a2a2a;background:#0a0a0a;border-radius:12px;padding:2rem">',
  );
  p(
    '        <h3 style="font-weight:800;font-size:.8rem;letter-spacing:.1em;text-transform:uppercase;color:#C1121F;margin-bottom:1.5rem">&#10007; Para qui\u00e9n no es</h3>',
  );
  p(
    '        <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.85rem">',
  );
  p(
    '          <li style="display:flex;gap:.75rem;align-items:flex-start;color:#c8c8c8;font-size:.93rem;line-height:1.6"><span style="color:#C1121F;flex-shrink:0;margin-top:3px">&#10007;</span>No es para quienes buscan manipular o hacer juegos mentales</li>',
  );
  p(
    '          <li style="display:flex;gap:.75rem;align-items:flex-start;color:#c8c8c8;font-size:.93rem;line-height:1.6"><span style="color:#C1121F;flex-shrink:0;margin-top:3px">&#10007;</span>No es reconquista ni t\u00e9cnicas de seducci\u00f3n</li>',
  );
  p(
    '          <li style="display:flex;gap:.75rem;align-items:flex-start;color:#c8c8c8;font-size:.93rem;line-height:1.6"><span style="color:#C1121F;flex-shrink:0;margin-top:3px">&#10007;</span>No es para quien no est\u00e1 dispuesto a hacer el trabajo interno</li>',
  );
  p(
    '          <li style="display:flex;gap:.75rem;align-items:flex-start;color:#c8c8c8;font-size:.93rem;line-height:1.6"><span style="color:#C1121F;flex-shrink:0;margin-top:3px">&#10007;</span>No es terapia ni coaching de relaciones</li>',
  );
  p("        </ul>");
  p("      </div>");
  p("    </div>");
  p("  </div>");
  p("</section>");
  p("");

  // PRICE
  p("<!-- PRECIO \u2014 LINK DO CHECKOUT HOTMART");
  p("     Para trocar o link de compra: edite a URL no href abaixo.");
  p("     Link atual: https://pay.hotmart.com/S104758048Y?checkoutMode=10");
  p("-->");
  p(
    '<section id="precio" style="background:#000;padding:clamp(48px,6vw,72px) 1.5rem;text-align:center;border-top:3px solid #C1121F">',
  );
  p('  <div style="max-width:480px;margin:0 auto">');
  p(
    '    <p style="font-size:.8rem;color:rgba(255,255,255,.55);margin-bottom:20px;line-height:1.5">Disponible hoy. Puede no estar disponible despu\u00e9s.</p>',
  );
  p(
    '    <h2 style="font-size:clamp(1.25rem,3vw,1.75rem);font-weight:900;color:#fff;margin-bottom:28px;letter-spacing:-.02em;line-height:1.2">Accede hoy al sistema completo por solo 17 USD (pago \u00fanico)</h2>',
  );
  p(
    '    <div style="margin-bottom:32px"><span style="font-size:clamp(4rem,10vw,6rem);font-weight:900;color:#fff;letter-spacing:-.04em;line-height:1;display:block">$17</span></div>',
  );
  p(
    '    <p style="font-size:.95rem;color:rgba(255,255,255,.75);font-weight:500;line-height:1.5;margin-bottom:24px">Esto es lo que haces en el momento exacto en que pierdes el control.</p>',
  );
  p('    <div style="width:100%;max-width:480px;margin-bottom:16px">');
  p(
    '      <a href="https://pay.hotmart.com/S104758048Y?checkoutMode=10" class="ec-btn" style="display:inline-flex">ACCEDER AHORA</a>',
  );
  p("    </div>");
  p(
    '    <p style="font-size:.8rem;color:rgba(255,255,255,.65);line-height:1.6">Acceso inmediato &#8226; Pago \u00fanico &#8226; Garant\u00eda 7 d\u00edas<br>&#128274; Pago seguro &#8226; Protecci\u00f3n SSL</p>',
  );
  p("  </div>");
  p("</section>");
  p("");

  // GUARANTEE
  p("<!-- GARANTIA -->");
  p(
    '<section id="garantia" style="background:#111;padding:3rem 1.5rem;text-align:center">',
  );
  p('  <div style="max-width:480px;margin:0 auto">');
  p(
    '    <h2 style="font-size:clamp(1.5rem,4vw,2rem);font-weight:800;color:#fff;margin-bottom:1.25rem">Garant\u00eda de 7 d\u00edas</h2>',
  );
  p(
    '    <div style="background:#111;border:1px solid #2a2a2a;border-radius:12px;padding:1.75rem;color:#888;line-height:1.9;font-size:.97rem">',
  );
  p(
    '      <p>Tienes <strong style="color:#fff">7 d\u00edas.</strong><br>Aplica el protocolo.<br>Si no sientes mayor claridad y control, puedes pedir reembolso.<br><strong style="color:#fff">Sin complicaciones.</strong></p>',
  );
  p("    </div>");
  p("  </div>");
  p("</section>");
  p("");

  // FAQ
  p("<!-- FAQ -->");
  p('<section id="faq" style="background:#000;padding:3rem 1.5rem">');
  p('  <div style="max-width:660px;margin:0 auto">');
  p(
    '    <h2 style="font-size:clamp(1.5rem,4vw,2.1rem);font-weight:800;color:#fff;margin-bottom:2.5rem;text-align:center">Preguntas frecuentes</h2>',
  );
  p("    <div>");
  p(
    '      <div class="faq-item"><button class="faq-toggle" onclick="ecToggleFaq(this)"><span class="faq-question">&#191;Esto es reconquista?</span><span class="faq-icon">&#9662;</span></button><div class="faq-answer">No. No vas a perseguir a nadie ni usar t\u00e9cnicas para recuperar a alguien.</div></div>',
  );
  p(
    '      <div class="faq-item"><button class="faq-toggle" onclick="ecToggleFaq(this)"><span class="faq-question">&#191;Esto es manipulaci\u00f3n?</span><span class="faq-icon">&#9662;</span></button><div class="faq-answer">No. Manipulaci\u00f3n es intentar controlar a otros. Esto es aprender a controlarte a ti mismo.</div></div>',
  );
  p(
    '      <div class="faq-item"><button class="faq-toggle" onclick="ecToggleFaq(this)"><span class="faq-question">&#191;Y si ya comet\u00ed errores?</span><span class="faq-icon">&#9662;</span></button><div class="faq-answer">La mayor\u00eda de los hombres que usan este sistema ya los cometieron. El protocolo te da las herramientas para no seguir acumulando errores.</div></div>',
  );
  p(
    '      <div class="faq-item"><button class="faq-toggle" onclick="ecToggleFaq(this)"><span class="faq-question">&#191;Y si ella ya est\u00e1 distante?</span><span class="faq-icon">&#9662;</span></button><div class="faq-answer">Entonces m\u00e1s raz\u00f3n para trabajar tu postura. La distancia se profundiza con reacciones impulsivas.</div></div>',
  );
  p(
    '      <div class="faq-item"><button class="faq-toggle" onclick="ecToggleFaq(this)"><span class="faq-question">&#191;Cu\u00e1nto tiempo tarda en funcionar?</span><span class="faq-icon">&#9662;</span></button><div class="faq-answer">El primer resultado lo puedes ver en la primera situaci\u00f3n de presi\u00f3n que enfrentes.</div></div>',
  );
  p(
    '      <div class="faq-item"><button class="faq-toggle" onclick="ecToggleFaq(this)"><span class="faq-question">&#191;Y si no me funciona?</span><span class="faq-icon">&#9662;</span></button><div class="faq-answer">Tienes 7 d\u00edas de garant\u00eda. Si aplicas el protocolo y no sientes m\u00e1s claridad y control, te devolvemos el dinero.</div></div>',
  );
  p("    </div>");
  p('    <div style="margin-top:3rem;display:flex;justify-content:center">');
  p(
    '      <button class="ec-btn" onclick="ecScrollToPrecio()">ACCEDER AHORA</button>',
  );
  p("    </div>");
  p("  </div>");
  p("</section>");
  p("");

  // FINAL CTA
  p("<!-- CTA FINAL -->");
  p(
    '<section style="background:#000;padding:3.5rem 1.5rem;text-align:center">',
  );
  p('  <div style="max-width:700px;margin:0 auto">');
  p(
    '    <h2 style="font-size:clamp(2rem,5.5vw,3.4rem);font-weight:900;color:#fff;line-height:1.15;letter-spacing:-.04em">Cada reacci\u00f3n impulsiva <span style="color:#C1121F">debilita tu postura.</span><br>Cada respuesta controlada <span style="text-decoration:underline;text-decoration-color:#C1121F;text-decoration-thickness:3px;text-underline-offset:6px">la fortalece.</span></h2>',
  );
  p("  </div>");
  p("</section>");
  p("");

  // FOOTER
  p("<!-- FOOTER \u2014 edite o copyright abaixo -->");
  p(
    '<footer style="background:#0a0a0a;border-top:1px solid #1e1e1e;padding:2rem 1.5rem 1.5rem">',
  );
  p(
    '  <p style="color:#777;font-size:.78rem;text-align:center;line-height:1.6;max-width:540px;margin:0 auto 1.5rem">Este contenido es educativo. No reemplaza terapia ni asesor\u00eda profesional.</p>',
  );
  p(
    '  <p style="color:#444;font-size:.75rem;text-align:center;margin-top:1.5rem;border-top:1px solid #1e1e1e;padding-top:1.5rem">&#169; 2026 protocoloinquebrantable. Todos los derechos reservados.</p>',
  );
  p("</footer>");
  p("");

  // JS — split closing tag to avoid parser issue
  p("<" + "script>");
  p(
    "function ecScrollToPrecio(){var el=document.getElementById('precio');if(el)el.scrollIntoView({behavior:'smooth'})}",
  );
  p(
    "function ecToggleFaq(btn){var a=btn.nextElementSibling,ic=btn.querySelector('.faq-icon'),open=a.classList.contains('ec-open');document.querySelectorAll('.faq-answer').forEach(function(x){x.classList.remove('ec-open')});document.querySelectorAll('.faq-icon').forEach(function(x){x.classList.remove('ec-open')});if(!open){a.classList.add('ec-open');ic.classList.add('ec-open')}}",
  );
  p("<" + "/script>");
  p("");
  p("</div>");
  p("</body>");
  p("</html>");

  return L.join("\n");
};

export const SITE_HTML: string = buildSiteHtml();
