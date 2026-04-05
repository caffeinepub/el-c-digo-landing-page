// ============================================================
// SITE HTML EXPORT — ELEMENTOR BODY-ONLY
// Sem <html>, <head>, <body>. Cole direto no widget HTML do Elementor.
// ============================================================

export const SITE_HTML = `
<!-- ============================================================
     EL CÓDIGO — LANDING PAGE  |  Versão para Elementor
     Cole este bloco inteiro no widget "HTML" do Elementor.
     NÃO inclui <html>, <head> nem <body> — não são necessários.

     PONTOS PARA EDITAR MANUALMENTE:
       1. VÍDEO VTURB   → busque: TROCAR VÍDEO
       2. LINK HOTMART  → busque: LINK DO CHECKOUT
       3. RODAPÉ        → busque: EDITAR RODAPÉ
     ============================================================ -->

<style>
/* === RESET E BASE === */
.ec-wrap*,.ec-wrap *::before,.ec-wrap *::after{box-sizing:border-box;margin:0;padding:0}
.ec-wrap{background:#000;color:#fff;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden;width:100%}
.ec-wrap h1,.ec-wrap h2,.ec-wrap h3,.ec-wrap h4{margin:0;padding:0}
.ec-wrap p{margin:0;padding:0}
.ec-wrap ul{list-style:none;margin:0;padding:0}

/* === BOTÃO CTA === */
.ec-btn{
  display:inline-flex;align-items:center;justify-content:center;
  background:#C1121F;color:#fff;
  font-weight:800;font-size:clamp(1rem,3.5vw,1.15rem);
  letter-spacing:.06em;text-transform:uppercase;
  padding:1rem 2rem;min-height:54px;
  border-radius:6px;border:none;cursor:pointer;
  width:100%;max-width:480px;
  text-align:center;text-decoration:none;
  transition:background .18s;
  -webkit-tap-highlight-color:transparent;
}
.ec-btn:hover{background:#a50e19}
.ec-btn:active{background:#8e0c15}

/* === FAQ ACORDEÃO === */
.ec-faq-item{border-bottom:1px solid #1e1e1e}
.ec-faq-toggle{
  width:100%;display:flex;justify-content:space-between;align-items:center;
  padding:1.25rem 0;background:none;border:none;
  cursor:pointer;text-align:left;gap:1rem;color:#fff;
  -webkit-tap-highlight-color:transparent;
}
.ec-faq-q{font-weight:700;font-size:.95rem;line-height:1.5;color:#fff}
.ec-faq-ic{flex-shrink:0;transition:transform .25s;color:#666;font-size:1.1rem;line-height:1}
.ec-faq-ic.open{transform:rotate(180deg);color:#C1121F}
.ec-faq-a{color:#888;padding-bottom:1.25rem;line-height:1.8;font-size:.9rem;display:none}
.ec-faq-a.open{display:block}

/* === CARDS GRID — 1 coluna no mobile === */
@media(max-width:640px){
  .ec-grid2{grid-template-columns:1fr!important}
  .ec-grid4{grid-template-columns:1fr!important}
}
</style>

<div class="ec-wrap">

<!-- ============================================================
     SEÇÃO 1 — HERO (Título principal)
     ============================================================ -->
<section style="display:flex;flex-direction:column;align-items:center;padding:clamp(2.5rem,6vw,4rem) 1.25rem clamp(1.5rem,4vw,2.5rem);background:#000;text-align:center">
  <div style="max-width:740px;width:100%">
    <h1 style="font-size:clamp(1.85rem,5.5vw,3.6rem);font-weight:900;color:#fff;line-height:1.1;margin-bottom:1.5rem;letter-spacing:-.04em">
      No la estás perdiendo <span style="color:#C1121F">por falta de amor.</span><br>
      <span style="color:#d4d4d4">La estás perdiendo por cómo</span> <em style="color:#fff;border-bottom:3px solid #C1121F;padding-bottom:2px">reaccionas bajo presión.</em>
    </h1>
    <p style="font-size:clamp(.95rem,3vw,1.2rem);color:#888;line-height:1.65;max-width:520px;margin:0 auto 1.75rem">
      El problema no es lo que sientes. <strong style="color:#b0b0b0">Es lo que haces cuando lo sientes.</strong>
    </p>
    <ul style="padding:0 0 2.5rem;margin:0 auto;text-align:left;display:inline-block">
      <li style="display:flex;gap:.75rem;margin-bottom:.65rem;color:#d0d0d0;font-size:clamp(.9rem,2.5vw,.97rem)"><span style="color:#C1121F;margin-top:4px">&#8594;</span>Envías mensajes impulsivos y luego te arrepientes</li>
      <li style="display:flex;gap:.75rem;margin-bottom:.65rem;color:#d0d0d0;font-size:clamp(.9rem,2.5vw,.97rem)"><span style="color:#C1121F;margin-top:4px">&#8594;</span>Explicas demasiado cuando sientes tensión</li>
      <li style="display:flex;gap:.75rem;margin-bottom:.65rem;color:#d0d0d0;font-size:clamp(.9rem,2.5vw,.97rem)"><span style="color:#C1121F;margin-top:4px">&#8594;</span>Sientes ansiedad cuando ella tarda en responder</li>
      <li style="display:flex;gap:.75rem;margin-bottom:.65rem;color:#d0d0d0;font-size:clamp(.9rem,2.5vw,.97rem)"><span style="color:#C1121F;margin-top:4px">&#8594;</span>Revisas el chat constantemente</li>
    </ul>
  </div>
</section>

<!-- ============================================================
     SEÇÃO 2 — VÍDEO VTURB

     *** TROCAR VÍDEO — PASSO 1 DE 2 ***
     Substitua o comentário abaixo pelo código completo do player Vturb.
     Exemplo:
       <vturb-smartplayer id="vid-SEU-ID" style="display:block;margin:0 auto;width:100%"></vturb-smartplayer>

     Depois, adicione o <script> do Vturb NO FIM DESTE BLOCO (Passo 2).
     ============================================================ -->
<section id="video" style="background:#000;padding:0 1.25rem clamp(2rem,5vw,3rem);text-align:center">
  <div style="max-width:700px;margin:0 auto">
    <div style="margin-bottom:2rem">
      <p style="font-size:clamp(1.5rem,5vw,2rem);font-weight:800;color:#fff;line-height:1.2;margin-bottom:.75rem">Mira esto hasta el final.</p>
      <p style="font-size:clamp(.9rem,2.5vw,1.05rem);color:rgba(255,255,255,.5);line-height:1.6">Vas a entender por qué sigues perdiendo postura… y qué hacer exactamente en el momento en que ocurre.</p>
    </div>
    <div style="border-radius:12px;border:1px solid #1e1e1e;overflow:hidden;background:#0a0a0a">

      <!-- TROCAR VÍDEO — COLE O CÓDIGO DA VTURB AQUI (tag + script) -->

    </div>
  </div>
</section>

<!-- ============================================================
     SEÇÃO 3 — O ERRO QUE MUDA TUDO
     ============================================================ -->
<section style="background:#000;padding:clamp(2.5rem,6vw,4.5rem) 1.25rem">
  <div style="max-width:660px;margin:0 auto">
    <h2 style="font-size:clamp(1.4rem,4vw,2.2rem);font-weight:800;color:#fff;margin-bottom:2rem;text-align:center">
      El error que cambia <span style="color:#C1121F">completamente la dinámica</span>
    </h2>
    <div style="display:flex;flex-direction:column;gap:1.35rem">
      <p style="color:#c8c8c8;line-height:1.8;font-size:clamp(.9rem,2.5vw,1.02rem);padding-left:1.25rem;border-left:3px solid #2a2a2a">Cuando sientes presión emocional, tu cerebro entra en modo supervivencia. No piensa. Reacciona.</p>
      <p style="color:#c8c8c8;line-height:1.8;font-size:clamp(.9rem,2.5vw,1.02rem);padding-left:1.25rem;border-left:3px solid #2a2a2a">Esa reacción — el mensaje impulsivo, la explicación de más, el silencio lleno de ansiedad — destruye tu postura en segundos.</p>
      <p style="color:#c8c8c8;line-height:1.8;font-size:clamp(.9rem,2.5vw,1.02rem);padding-left:1.25rem;border-left:3px solid #2a2a2a">Y la postura lo cambia todo. No las palabras. No las intenciones. La postura.</p>
      <p style="color:#fff;line-height:1.8;font-size:clamp(.9rem,2.5vw,1.02rem);padding-left:1.25rem;border-left:3px solid #C1121F">El verdadero problema no es lo que sientes. Es que no tienes un sistema para regularte antes de actuar.</p>
    </div>
    <div style="margin-top:2.5rem;display:flex;justify-content:center">
      <button class="ec-btn" onclick="ecScrollToPrecio()">ENTENDER EL PROTOCOLO</button>
    </div>
  </div>
</section>

<!-- ============================================================
     SEÇÃO 4 — SISTEMA DE 4 PASSOS
     ============================================================ -->
<section style="background:#000;padding:clamp(2.5rem,6vw,4.5rem) 1.25rem">
  <div style="max-width:820px;margin:0 auto">
    <h2 style="font-size:clamp(1.4rem,4vw,2.2rem);font-weight:800;color:#fff;text-align:center;max-width:600px;margin:0 auto 2.5rem">
      Un sistema diseñado para el momento exacto <span style="color:#C1121F">antes de que te sabotees</span>
    </h2>
    <div class="ec-grid4" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.15rem;margin-bottom:2.5rem">
      <div style="background:#0a0a0a;border:1px solid #1e1e1e;border-radius:10px;padding:1.5rem">
        <div style="font-size:3rem;font-weight:900;color:#C1121F;line-height:1;margin-bottom:.6rem;opacity:.9">1</div>
        <h3 style="font-weight:800;color:#fff;font-size:1.05rem;margin-bottom:.4rem">Interrupción</h3>
        <p style="color:#888;font-size:.88rem;line-height:1.7">Corta el impulso en el momento exacto antes de reaccionar.</p>
      </div>
      <div style="background:#0a0a0a;border:1px solid #1e1e1e;border-radius:10px;padding:1.5rem">
        <div style="font-size:3rem;font-weight:900;color:#C1121F;line-height:1;margin-bottom:.6rem;opacity:.9">2</div>
        <h3 style="font-weight:800;color:#fff;font-size:1.05rem;margin-bottom:.4rem">Estabilización</h3>
        <p style="color:#888;font-size:.88rem;line-height:1.7">Recupera el control interno en segundos y baja la intensidad emocional.</p>
      </div>
      <div style="background:#0a0a0a;border:1px solid #1e1e1e;border-radius:10px;padding:1.5rem">
        <div style="font-size:3rem;font-weight:900;color:#C1121F;line-height:1;margin-bottom:.6rem;opacity:.9">3</div>
        <h3 style="font-weight:800;color:#fff;font-size:1.05rem;margin-bottom:.4rem">Silencio estratégico</h3>
        <p style="color:#888;font-size:.88rem;line-height:1.7">No reacciones. Mantén el control y deja que la tensión juegue a tu favor.</p>
      </div>
      <div style="background:#0a0a0a;border:1px solid #1e1e1e;border-radius:10px;padding:1.5rem">
        <div style="font-size:3rem;font-weight:900;color:#C1121F;line-height:1;margin-bottom:.6rem;opacity:.9">4</div>
        <h3 style="font-weight:800;color:#fff;font-size:1.05rem;margin-bottom:.4rem">Respuesta estructurada</h3>
        <p style="color:#888;font-size:.88rem;line-height:1.7">Cuando actúes, será desde el control… no desde la necesidad.</p>
      </div>
    </div>
    <blockquote style="text-align:center;padding:1.75rem;background:#0a0a0a;border:1px solid #1e1e1e;border-radius:10px">
      <p style="font-size:clamp(1.1rem,3vw,1.5rem);font-weight:800;color:#fff;line-height:1.3">&ldquo;Primero cortas el impulso. <span style="color:#C1121F">Después decides.</span> No al revés.&rdquo;</p>
    </blockquote>
    <div style="margin-top:2.5rem;display:flex;justify-content:center">
      <button class="ec-btn" onclick="ecScrollToPrecio()">QUIERO APLICAR ESTO</button>
    </div>
  </div>
</section>

<!-- ============================================================
     SEÇÃO 5 — PROTOCOLO 3 MINUTOS
     ============================================================ -->
<section style="background:#0a0a0a;padding:clamp(2.5rem,6vw,4.5rem) 1.25rem">
  <div style="max-width:640px;margin:0 auto;text-align:center">
    <h2 style="font-size:clamp(1.4rem,4vw,2.2rem);font-weight:800;color:#fff;margin-bottom:.65rem">
      Tres minutos antes de <span style="color:#C1121F">arruinarlo todo</span>
    </h2>
    <p style="color:#666;margin-bottom:2rem;font-size:.9rem">El protocolo que usas en el momento exacto en que pierdes el control</p>
    <div style="border:1px solid #1e1e1e;border-radius:12px;background:#000;overflow:hidden">
      <div style="padding:1.5rem 1.75rem;border-bottom:1px solid rgba(255,255,255,.05);text-align:left;display:flex;gap:1.25rem;align-items:flex-start">
        <div style="flex-shrink:0;background:#C1121F;border-radius:5px;padding:.3rem .6rem;font-size:.68rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#fff;white-space:nowrap;margin-top:3px">Min. 1</div>
        <div><h3 style="font-weight:800;color:#fff;font-size:.97rem;margin-bottom:.25rem">Reconocimiento</h3><p style="color:#888;font-size:.87rem;line-height:1.7">Detecta el impulso en el instante en que aparece. Nómbralo… pero no actúes.</p></div>
      </div>
      <div style="padding:1.5rem 1.75rem;border-bottom:1px solid rgba(255,255,255,.05);text-align:left;display:flex;gap:1.25rem;align-items:flex-start">
        <div style="flex-shrink:0;background:#C1121F;border-radius:5px;padding:.3rem .6rem;font-size:.68rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#fff;white-space:nowrap;margin-top:3px">Min. 2</div>
        <div><h3 style="font-weight:800;color:#fff;font-size:.97rem;margin-bottom:.25rem">Regulación</h3><p style="color:#888;font-size:.87rem;line-height:1.7">Aplica la técnica que corta la reacción automática y baja la intensidad emocional.</p></div>
      </div>
      <div style="padding:1.5rem 1.75rem;text-align:left;display:flex;gap:1.25rem;align-items:flex-start">
        <div style="flex-shrink:0;background:#C1121F;border-radius:5px;padding:.3rem .6rem;font-size:.68rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#fff;white-space:nowrap;margin-top:3px">Min. 3</div>
        <div><h3 style="font-weight:800;color:#fff;font-size:.97rem;margin-bottom:.25rem">Decisión</h3><p style="color:#888;font-size:.87rem;line-height:1.7">Con la mente estable, eliges cómo actuar… o decides no actuar.</p></div>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================
     SEÇÃO 6 — TUDO QUE VOCÊ RECEBE
     ============================================================ -->
<section style="background:#000;padding:clamp(2.5rem,6vw,4.5rem) 1.25rem;text-align:center">
  <div style="max-width:560px;margin:0 auto">
    <h2 style="font-size:clamp(1.4rem,4vw,2.2rem);font-weight:800;color:#fff;margin-bottom:2rem">
      Todo lo que obtienes hoy <span style="color:#C1121F">(acceso inmediato)</span>
    </h2>
    <p style="color:#c8c8c8;font-size:.85rem;font-weight:600;text-align:left;margin-bottom:.65rem">Acceso completo al sistema:</p>
    <div style="display:flex;flex-direction:column;gap:.65rem;margin-bottom:2rem">
      <div style="display:flex;align-items:flex-start;gap:.9rem;background:#0a0a0a;border:1px solid #1e1e1e;border-radius:8px;padding:.9rem 1.15rem;text-align:left"><span style="color:#22c55e;font-size:1rem;margin-top:1px">&#10003;</span><span style="font-weight:700;color:#fff;font-size:.92rem">Protocolo exacto para cortar la reacción en segundos</span></div>
      <div style="display:flex;align-items:flex-start;gap:.9rem;background:#0a0a0a;border:1px solid #1e1e1e;border-radius:8px;padding:.9rem 1.15rem;text-align:left"><span style="color:#22c55e;font-size:1rem;margin-top:1px">&#10003;</span><span style="font-weight:700;color:#fff;font-size:.92rem">Audios guiados para estabilizarte en el momento exacto</span></div>
      <div style="display:flex;align-items:flex-start;gap:.9rem;background:#0a0a0a;border:1px solid #1e1e1e;border-radius:8px;padding:.9rem 1.15rem;text-align:left"><span style="color:#22c55e;font-size:1rem;margin-top:1px">&#10003;</span><span style="font-weight:700;color:#fff;font-size:.92rem">Método claro para recuperar el control sin reaccionar impulsivamente</span></div>
      <div style="display:flex;align-items:flex-start;gap:.9rem;background:#0a0a0a;border:1px solid #1e1e1e;border-radius:8px;padding:.9rem 1.15rem;text-align:left"><span style="color:#22c55e;font-size:1rem;margin-top:1px">&#10003;</span><span style="font-weight:700;color:#fff;font-size:.92rem">Instrucciones aplicables en cualquier situación emocional</span></div>
    </div>
    <div style="display:flex;justify-content:center">
      <button class="ec-btn" onclick="ecScrollToPrecio()">QUIERO ACCEDER AHORA</button>
    </div>
  </div>
</section>

<!-- ============================================================
     SEÇÃO 7 — ESTE SISTEMA É PARA VOCÊ? (2 cards)
     ============================================================ -->
<section style="background:#0a0a0a;padding:clamp(2.5rem,6vw,4.5rem) 1.25rem">
  <div style="max-width:840px;margin:0 auto">
    <h2 style="font-size:clamp(1.3rem,3.5vw,1.9rem);font-weight:800;color:#fff;margin-bottom:2rem;text-align:center">¿Este sistema es para ti?</h2>
    <div class="ec-grid2" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:1.35rem">
      <div style="border:1px solid #1e1e1e;background:#000;border-radius:12px;padding:1.75rem">
        <h3 style="font-weight:800;font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;color:#22c55e;margin-bottom:1.35rem">&#10003; Para quién es</h3>
        <ul style="display:flex;flex-direction:column;gap:.8rem">
          <li style="display:flex;gap:.7rem;align-items:flex-start;color:#c8c8c8;font-size:.9rem;line-height:1.6"><span style="color:#22c55e;flex-shrink:0;margin-top:3px">&#10003;</span>Para hombres que reaccionan de forma impulsiva bajo presión emocional</li>
          <li style="display:flex;gap:.7rem;align-items:flex-start;color:#c8c8c8;font-size:.9rem;line-height:1.6"><span style="color:#22c55e;flex-shrink:0;margin-top:3px">&#10003;</span>Para quienes quieren recuperar su postura sin jugar juegos</li>
          <li style="display:flex;gap:.7rem;align-items:flex-start;color:#c8c8c8;font-size:.9rem;line-height:1.6"><span style="color:#22c55e;flex-shrink:0;margin-top:3px">&#10003;</span>Para los que ya cometieron errores y quieren reencuadrarse</li>
          <li style="display:flex;gap:.7rem;align-items:flex-start;color:#c8c8c8;font-size:.9rem;line-height:1.6"><span style="color:#22c55e;flex-shrink:0;margin-top:3px">&#10003;</span>Para quien quiere responder desde la calma, no desde el miedo</li>
        </ul>
      </div>
      <div style="border:1px solid #1e1e1e;background:#000;border-radius:12px;padding:1.75rem">
        <h3 style="font-weight:800;font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;color:#C1121F;margin-bottom:1.35rem">&#10007; Para quién no es</h3>
        <ul style="display:flex;flex-direction:column;gap:.8rem">
          <li style="display:flex;gap:.7rem;align-items:flex-start;color:#c8c8c8;font-size:.9rem;line-height:1.6"><span style="color:#C1121F;flex-shrink:0;margin-top:3px">&#10007;</span>No es para quienes buscan manipular o hacer juegos mentales</li>
          <li style="display:flex;gap:.7rem;align-items:flex-start;color:#c8c8c8;font-size:.9rem;line-height:1.6"><span style="color:#C1121F;flex-shrink:0;margin-top:3px">&#10007;</span>No es reconquista ni técnicas de seducción</li>
          <li style="display:flex;gap:.7rem;align-items:flex-start;color:#c8c8c8;font-size:.9rem;line-height:1.6"><span style="color:#C1121F;flex-shrink:0;margin-top:3px">&#10007;</span>No es para quien no está dispuesto a hacer el trabajo interno</li>
          <li style="display:flex;gap:.7rem;align-items:flex-start;color:#c8c8c8;font-size:.9rem;line-height:1.6"><span style="color:#C1121F;flex-shrink:0;margin-top:3px">&#10007;</span>No es terapia ni coaching de relaciones</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================
     SEÇÃO 8 — PREÇO / CHECKOUT

     *** LINK DO CHECKOUT — EDITE AQUI ***
     Troque a URL abaixo pelo seu link da Hotmart:
       href="https://pay.hotmart.com/S104758048Y?checkoutMode=10"
     ============================================================ -->
<section id="precio" style="background:#000;padding:clamp(2.5rem,6vw,4.5rem) 1.25rem;text-align:center;border-top:3px solid #C1121F">
  <div style="max-width:460px;margin:0 auto">
    <p style="font-size:.78rem;color:rgba(255,255,255,.45);margin-bottom:1.25rem;line-height:1.5">Disponible hoy. Puede no estar disponible después.</p>
    <h2 style="font-size:clamp(1.15rem,3vw,1.65rem);font-weight:900;color:#fff;margin-bottom:1.5rem;letter-spacing:-.02em;line-height:1.25">
      Accede hoy al sistema completo por solo 17 USD (pago único)
    </h2>
    <div style="margin-bottom:1.75rem">
      <span style="font-size:clamp(3.5rem,10vw,5.5rem);font-weight:900;color:#fff;letter-spacing:-.04em;line-height:1;display:block">$17</span>
    </div>
    <p style="font-size:.92rem;color:rgba(255,255,255,.7);font-weight:500;line-height:1.5;margin-bottom:1.35rem">Esto es lo que haces en el momento exacto en que pierdes el control.</p>
    <div style="width:100%;max-width:460px;margin-bottom:.85rem">
      <!-- LINK DO CHECKOUT — troque a URL abaixo pelo seu link da Hotmart -->
      <a href="https://pay.hotmart.com/S104758048Y?checkoutMode=10" class="ec-btn" style="display:inline-flex">ACCEDER AHORA</a>
    </div>
    <p style="font-size:.77rem;color:rgba(255,255,255,.55);line-height:1.6">Acceso inmediato &bull; Pago único &bull; Garantía 7 días<br>&#128274; Pago seguro &bull; Protección SSL</p>
  </div>
</section>

<!-- ============================================================
     SEÇÃO 9 — GARANTIA
     ============================================================ -->
<section style="background:#0a0a0a;padding:clamp(2rem,5vw,3.5rem) 1.25rem;text-align:center">
  <div style="max-width:460px;margin:0 auto">
    <h2 style="font-size:clamp(1.3rem,3.5vw,1.85rem);font-weight:800;color:#fff;margin-bottom:1.15rem">Garantía de 7 días</h2>
    <div style="background:#000;border:1px solid #1e1e1e;border-radius:12px;padding:1.5rem;color:#888;line-height:1.9;font-size:.93rem">
      <p>Tienes <strong style="color:#fff">7 días.</strong><br>Aplica el protocolo.<br>Si no sientes mayor claridad y control, puedes pedir reembolso.<br><strong style="color:#fff">Sin complicaciones.</strong></p>
    </div>
  </div>
</section>

<!-- ============================================================
     SEÇÃO 10 — FAQ (acordeão)
     ============================================================ -->
<section style="background:#000;padding:clamp(2rem,5vw,3.5rem) 1.25rem">
  <div style="max-width:640px;margin:0 auto">
    <h2 style="font-size:clamp(1.3rem,3.5vw,2rem);font-weight:800;color:#fff;margin-bottom:2rem;text-align:center">Preguntas frecuentes</h2>
    <div>
      <div class="ec-faq-item"><button class="ec-faq-toggle" onclick="ecFaq(this)"><span class="ec-faq-q">¿Esto es reconquista?</span><span class="ec-faq-ic">&#9662;</span></button><div class="ec-faq-a">No. No vas a perseguir a nadie ni usar técnicas para recuperar a alguien.</div></div>
      <div class="ec-faq-item"><button class="ec-faq-toggle" onclick="ecFaq(this)"><span class="ec-faq-q">¿Esto es manipulación?</span><span class="ec-faq-ic">&#9662;</span></button><div class="ec-faq-a">No. Manipulación es intentar controlar a otros. Esto es aprender a controlarte a ti mismo.</div></div>
      <div class="ec-faq-item"><button class="ec-faq-toggle" onclick="ecFaq(this)"><span class="ec-faq-q">¿Y si ya cometí errores?</span><span class="ec-faq-ic">&#9662;</span></button><div class="ec-faq-a">La mayoría de los hombres que usan este sistema ya los cometieron. El protocolo te da las herramientas para no seguir acumulando errores.</div></div>
      <div class="ec-faq-item"><button class="ec-faq-toggle" onclick="ecFaq(this)"><span class="ec-faq-q">¿Y si ella ya está distante?</span><span class="ec-faq-ic">&#9662;</span></button><div class="ec-faq-a">Entonces más razón para trabajar tu postura. La distancia se profundiza con reacciones impulsivas.</div></div>
      <div class="ec-faq-item"><button class="ec-faq-toggle" onclick="ecFaq(this)"><span class="ec-faq-q">¿Cuánto tiempo tarda en funcionar?</span><span class="ec-faq-ic">&#9662;</span></button><div class="ec-faq-a">El primer resultado lo puedes ver en la primera situación de presión que enfrentes.</div></div>
      <div class="ec-faq-item"><button class="ec-faq-toggle" onclick="ecFaq(this)"><span class="ec-faq-q">¿Y si no me funciona?</span><span class="ec-faq-ic">&#9662;</span></button><div class="ec-faq-a">Tienes 7 días de garantía. Si aplicas el protocolo y no sientes más claridad y control, te devolvemos el dinero.</div></div>
    </div>
    <div style="margin-top:2.5rem;display:flex;justify-content:center">
      <button class="ec-btn" onclick="ecScrollToPrecio()">ACCEDER AHORA</button>
    </div>
  </div>
</section>

<!-- ============================================================
     SEÇÃO 11 — CTA FINAL
     ============================================================ -->
<section style="background:#000;padding:clamp(2.5rem,6vw,4rem) 1.25rem;text-align:center">
  <div style="max-width:680px;margin:0 auto">
    <h2 style="font-size:clamp(1.75rem,5vw,3.2rem);font-weight:900;color:#fff;line-height:1.15;letter-spacing:-.04em">
      Cada reacción impulsiva <span style="color:#C1121F">debilita tu postura.</span><br>
      Cada respuesta controlada <span style="text-decoration:underline;text-decoration-color:#C1121F;text-decoration-thickness:3px;text-underline-offset:6px">la fortalece.</span>
    </h2>
  </div>
</section>

<!-- ============================================================
     RODAPÉ

     *** EDITAR RODAPÉ — EDITE O COPYRIGHT ABAIXO ***
     ============================================================ -->
<footer style="background:#050505;border-top:1px solid #111;padding:1.75rem 1.25rem 1.25rem">
  <p style="color:#555;font-size:.75rem;text-align:center;line-height:1.6;max-width:520px;margin:0 auto .75rem">Este contenido es educativo. No reemplaza terapia ni asesoría profesional.</p>
  <!-- EDITAR RODAPÉ — troque o ano e o nome abaixo -->
  <p style="color:#333;font-size:.72rem;text-align:center;border-top:1px solid #111;padding-top:1rem">© 2026 protocoloinquebrantable. Todos los derechos reservados.</p>
</footer>

<!-- ============================================================
     SCRIPTS (scroll suave + FAQ)
     Não remova — necessário para os botões e o acordeão funcionarem.

     *** TROCAR VÍDEO — PASSO 2 DE 2 ***
     Adicione o <script> do Vturb ABAIXO deste bloco de comentário.
     Exemplo:
       <script type="text/javascript">
         var s=document.createElement("script");
         s.src="https://scripts.converteai.net/ACCOUNT/players/PLAYER-ID/v4/player.js";
         s.async=true;
         document.head.appendChild(s);
       <\/script>
     ============================================================ -->
<script>
function ecScrollToPrecio(){var el=document.getElementById('precio');if(el){el.scrollIntoView({behavior:'smooth',block:'start'})}}
function ecFaq(btn){var a=btn.nextElementSibling,ic=btn.querySelector('.ec-faq-ic'),op=a.classList.contains('open');document.querySelectorAll('.ec-faq-a').forEach(function(x){x.classList.remove('open')});document.querySelectorAll('.ec-faq-ic').forEach(function(x){x.classList.remove('open')});if(!op){a.classList.add('open');ic.classList.add('open')}}
<\/script>

</div>
`;
