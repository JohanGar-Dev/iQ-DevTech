/*
  iQFeeDex — capa de profundidad (3D, iconografía y movimiento).
  Mejora progresiva: todo lo que se inyecta aquí es decorativo (aria-hidden)
  y no altera el texto ni la estructura del HTML original.
*/

const ICONS = {
  code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  terminal: '<polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/>',
  git: '<line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
  cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
  compass: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
  rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
  message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  chat: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="m9 16 2 2 4-4"/>',
  check: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
  bolt: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z"/>',
  trend: '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
  cube: '<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  cpu: '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/>',
  phoneApp: '<rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/>',
  chart: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
  braces: '<path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/>',
  eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  arrow: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  whatsapp: '<path d="M20.1 11.8a8.1 8.1 0 0 1-12 7l-4 .9 1.1-3.8a8.1 8.1 0 1 1 14.9-4.1Z"/><path d="M9.1 8.1c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.5.6c-.2.2-.2.4 0 .7.5.8 1.2 1.4 2.1 1.9.3.1.5.1.7-.1l.7-.8c.2-.2.4-.3.7-.2l1.5.7c.3.1.4.3.4.5 0 .5-.3 1-.6 1.3-.5.5-1.2.6-1.9.4-1-.3-2.4-.9-3.8-2.2-1.1-1.1-1.8-2.4-2.1-3.2-.3-.8 0-1.5.5-2Z"/>',
};

const icon = (name, className = "") =>
  `<svg class="ico ${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ICONS[name] ?? ""}</svg>`;

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

/* Sustituye visualmente un glifo decorativo por un icono SVG sin tocar el texto. */
const swapGlyph = (element, name) => {
  if (!element || element.classList.contains("has-icon")) return;
  element.classList.add("has-icon");
  element.insertAdjacentHTML("afterbegin", icon(name));
};

const prependIcon = (element, name, className = "ico--inline") => {
  if (!element || element.querySelector(":scope > .ico")) return;
  element.insertAdjacentHTML("afterbegin", icon(name, className));
};

const cubeFaces = (names) =>
  ["front", "back", "right", "left", "top", "bottom"]
    .map((side, index) => `<span class="cube3d__face cube3d__face--${side}">${icon(names[index % names.length])}</span>`)
    .join("");

/* ---------- Globo de nodos 3D (canvas 2D con proyección en perspectiva) ---------- */

const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
const globes = [];

const buildGlobeGeometry = (count) => {
  const points = [];
  for (let index = 0; index < count; index += 1) {
    const y = 1 - ((index + 0.5) / count) * 2;
    const ring = Math.sqrt(1 - y * y);
    const phi = index * GOLDEN_ANGLE;
    points.push([Math.cos(phi) * ring, y, Math.sin(phi) * ring]);
  }

  const edges = new Map();
  points.forEach((point, index) => {
    const nearest = points
      .map((other, otherIndex) => ({
        otherIndex,
        distance: (point[0] - other[0]) ** 2 + (point[1] - other[1]) ** 2 + (point[2] - other[2]) ** 2,
      }))
      .filter(({ otherIndex }) => otherIndex !== index)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 3);
    nearest.forEach(({ otherIndex }) => {
      const key = index < otherIndex ? `${index}-${otherIndex}` : `${otherIndex}-${index}`;
      edges.set(key, index < otherIndex ? [index, otherIndex] : [otherIndex, index]);
    });
  });

  return { points, edges: Array.from(edges.values()) };
};

const geometryCache = new Map();
const getGeometry = (count) => {
  if (!geometryCache.has(count)) geometryCache.set(count, buildGlobeGeometry(count));
  return geometryCache.get(count);
};

/* Resplandor precalculado: evita crear un gradiente nuevo por paquete y por fotograma. */
const glowSprites = new Map();
const getGlowSprite = (rgb) => {
  if (!glowSprites.has(rgb)) {
    const sprite = document.createElement("canvas");
    sprite.width = 36;
    sprite.height = 36;
    const spriteContext = sprite.getContext("2d");
    const gradient = spriteContext.createRadialGradient(18, 18, 0, 18, 18, 18);
    gradient.addColorStop(0, `rgba(${rgb},1)`);
    gradient.addColorStop(1, `rgba(${rgb},0)`);
    spriteContext.fillStyle = gradient;
    spriteContext.fillRect(0, 0, 36, 36);
    glowSprites.set(rgb, sprite);
  }
  return glowSprites.get(rgb);
};

const createGlobe = (canvas, options = {}) => {
  const settings = {
    count: 150,
    speed: 0.22,
    tilt: 0.42,
    line: "56,111,224",
    node: "27,77,177",
    green: "43,182,115",
    yellow: "255,200,61",
    lineAlpha: 0.38,
    reactive: 1,
    ...options,
  };
  const context = canvas.getContext("2d");
  if (!context) return null;

  const geometry = getGeometry(settings.count);
  const packets = Array.from({ length: 7 }, (_, index) => ({
    edge: Math.floor(Math.random() * geometry.edges.length),
    progress: Math.random(),
    speed: 0.25 + Math.random() * 0.35,
    accent: index % 3 === 0 ? settings.yellow : settings.green,
  }));
  const projected = geometry.points.map(() => [0, 0, 0]);
  const nodeKind = geometry.points.map((_, index) => (index % 29 === 0 ? 2 : index % 11 === 0 ? 1 : 0));
  const nodeGroups = Array.from({ length: 9 }, () => []);

  const globe = {
    canvas,
    visible: false,
    size: 0,
    dpr: 1,
    dprCap: 1.5,
    needsResize: true,
    start: Math.random() * 6,
    resize() {
      this.needsResize = false;
      const bounds = canvas.getBoundingClientRect();
      const size = Math.max(1, Math.round(Math.min(bounds.width, bounds.height)));
      const dpr = Math.min(window.devicePixelRatio || 1, this.dprCap);
      if (size === this.size && dpr === this.dpr) return;
      this.size = size;
      this.dpr = dpr;
      canvas.width = Math.round(bounds.width * dpr);
      canvas.height = Math.round(bounds.height * dpr);
      this.width = bounds.width;
      this.height = bounds.height;
    },
    draw(time, pointer, step) {
      if (this.needsResize) this.resize();
      const { width, height, dpr } = this;
      if (!width || !height) return;

      const radius = Math.min(width, height) * 0.4;
      const centerX = width / 2;
      const centerY = height / 2;
      const spin = this.start + time * settings.speed + pointer.sx * 0.7 * settings.reactive;
      const lean = settings.tilt + pointer.sy * 0.32 * settings.reactive;
      const cosY = Math.cos(spin);
      const sinY = Math.sin(spin);
      const cosX = Math.cos(lean);
      const sinX = Math.sin(lean);

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.clearRect(0, 0, width, height);

      geometry.points.forEach(([x, y, z], index) => {
        const x1 = x * cosY + z * sinY;
        const z1 = -x * sinY + z * cosY;
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;
        const scale = 3.2 / (3.2 - z2);
        const target = projected[index];
        target[0] = centerX + x1 * radius * scale;
        target[1] = centerY - y2 * radius * scale;
        target[2] = z2;
      });

      const buckets = [[], [], []];
      geometry.edges.forEach(([from, to]) => {
        const depth = (projected[from][2] + projected[to][2]) / 2;
        buckets[depth > 0.33 ? 2 : depth > -0.33 ? 1 : 0].push(from, to);
      });
      context.lineWidth = 1;
      buckets.forEach((bucket, level) => {
        context.strokeStyle = `rgba(${settings.line},${(settings.lineAlpha * [0.28, 0.6, 1][level]).toFixed(3)})`;
        context.beginPath();
        for (let index = 0; index < bucket.length; index += 2) {
          const a = projected[bucket[index]];
          const b = projected[bucket[index + 1]];
          context.moveTo(a[0], a[1]);
          context.lineTo(b[0], b[1]);
        }
        context.stroke();
      });

      const bandBase = [0.75, 1, 1.3];
      const bandAlpha = [0.3, 0.62, 1];
      for (let group = 0; group < 9; group += 1) nodeGroups[group].length = 0;
      for (let index = 0; index < projected.length; index += 1) {
        const point = projected[index];
        const band = point[2] > 0.33 ? 2 : point[2] > -0.33 ? 1 : 0;
        nodeGroups[nodeKind[index] * 3 + band].push(point[0], point[1]);
      }
      for (let group = 0; group < 9; group += 1) {
        const list = nodeGroups[group];
        if (!list.length) continue;
        const kind = Math.floor(group / 3);
        const band = group % 3;
        context.fillStyle = `rgba(${[settings.node, settings.green, settings.yellow][kind]},${bandAlpha[band]})`;
        context.beginPath();
        const radius2 = [1.7, 2.8, 3.4][kind] * bandBase[band];
        for (let index = 0; index < list.length; index += 2) {
          context.moveTo(list[index] + radius2, list[index + 1]);
          context.arc(list[index], list[index + 1], radius2, 0, Math.PI * 2);
        }
        context.fill();
      }

      packets.forEach((packet) => {
        packet.progress += step * packet.speed;
        if (packet.progress >= 1) {
          packet.progress = 0;
          packet.edge = Math.floor(Math.random() * geometry.edges.length);
        }
        const [from, to] = geometry.edges[packet.edge];
        const a = projected[from];
        const b = projected[to];
        const near = ((a[2] + b[2]) / 2 + 1) / 2;
        const x = a[0] + (b[0] - a[0]) * packet.progress;
        const y = a[1] + (b[1] - a[1]) * packet.progress;
        context.globalAlpha = 0.55 + near * 0.45;
        context.drawImage(getGlowSprite(packet.accent), x - 9, y - 9, 18, 18);
      });
      context.globalAlpha = 1;
    },
  };

  if ("ResizeObserver" in window) new ResizeObserver(() => { globe.needsResize = true; }).observe(canvas);
  window.addEventListener("resize", () => { globe.needsResize = true; }, { passive: true });
  globes.push(globe);
  return globe;
};

/* ---------- Estado compartido de puntero y bucle de animación ---------- */

const pointer = { x: 0, y: 0, sx: 0, sy: 0 };
const heroState = { element: null, visible: false, px: 0, py: 0, targets: [] };
let loopRunning = false;
let lastTime = 0;
let motionAllowed = true;
let cursorRing;
let cursorDot;
const cursor = { x: -100, y: -100, rx: -100, ry: -100, wx: NaN, wy: NaN, wrx: NaN, wry: NaN };

/*
  Parallax: se escribe el transform directamente en cada capa. Antes se cambiaba una variable CSS
  en el contenedor, lo que obligaba al navegador a recalcular estilos de todo el árbol en cada movimiento.
*/
const collectParallax = (root) => {
  const targets = [];
  $$(".stage__item", root).forEach((element) => {
    const depth = Number.parseFloat(element.style.getPropertyValue("--d")) || 20;
    targets.push({ element, base: "", fx: depth, fy: depth * 0.75 });
  });
  const globe = $(".stage__globe", root);
  if (globe) targets.push({ element: globe, base: "translate3d(-50%, -50%, 0) ", fx: -12, fy: -9 });
  const system = $(".hero-art__system", root);
  if (system) targets.push({ element: system, base: "", fx: -8, fy: -6 });
  $$(".art-label", root).forEach((element) => targets.push({ element, base: "", fx: 20, fy: 14 }));
  targets.forEach(({ element }) => { element.style.willChange = "transform"; });
  return targets;
};

const applyParallax = (x, y) => {
  heroState.targets.forEach(({ element, base, fx, fy }) => {
    element.style.transform = `${base}translate3d(${(x * fx).toFixed(1)}px, ${(y * fy).toFixed(1)}px, 0)`;
  });
};

const frame = (now) => {
  const time = now / 1000;
  const step = Math.min(0.05, time - lastTime || 0.016);
  lastTime = time;

  const dx = pointer.x - pointer.sx;
  const dy = pointer.y - pointer.sy;
  pointer.sx = Math.abs(dx) < 0.0015 ? pointer.x : pointer.sx + dx * 0.07;
  pointer.sy = Math.abs(dy) < 0.0015 ? pointer.y : pointer.sy + dy * 0.07;

  if (heroState.visible && heroState.targets.length
    && (Math.abs(pointer.sx - heroState.px) > 0.002 || Math.abs(pointer.sy - heroState.py) > 0.002)) {
    heroState.px = pointer.sx;
    heroState.py = pointer.sy;
    applyParallax(pointer.sx, pointer.sy);
  }

  globes.forEach((globe) => {
    if (globe.visible) globe.draw(time, pointer, step);
  });

  if (cursorRing) {
    cursor.rx += (cursor.x - cursor.rx) * 0.2;
    cursor.ry += (cursor.y - cursor.ry) * 0.2;
    if (Math.abs(cursor.rx - cursor.wrx) > 0.1 || Math.abs(cursor.ry - cursor.wry) > 0.1) {
      cursor.wrx = cursor.rx;
      cursor.wry = cursor.ry;
      cursorRing.style.transform = `translate3d(${cursor.rx.toFixed(1)}px, ${cursor.ry.toFixed(1)}px, 0)`;
    }
    if (cursor.x !== cursor.wx || cursor.y !== cursor.wy) {
      cursor.wx = cursor.x;
      cursor.wy = cursor.y;
      cursorDot.style.transform = `translate3d(${cursor.x.toFixed(1)}px, ${cursor.y.toFixed(1)}px, 0)`;
    }
  }

  if (document.hidden) {
    loopRunning = false;
    return;
  }
  window.requestAnimationFrame(frame);
};

const startLoop = () => {
  if (loopRunning || !motionAllowed) return;
  loopRunning = true;
  window.requestAnimationFrame(frame);
};

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) startLoop();
});

/* ---------- Inclinación 3D con foco de luz en tarjetas ---------- */

const enableTilt = (element, { max = 7, target = element } = {}) => {
  if (!element || element.dataset.tilt) return;
  element.dataset.tilt = "true";
  target.classList.add("depth-card");

  element.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") return;
    const bounds = element.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    target.classList.add("is-tilting");
    target.style.setProperty("--ry", `${((x - 0.5) * 2 * max).toFixed(2)}deg`);
    target.style.setProperty("--rx", `${((0.5 - y) * 2 * max).toFixed(2)}deg`);
    target.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
    target.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
  });

  element.addEventListener("pointerleave", () => {
    target.classList.remove("is-tilting");
    target.style.setProperty("--rx", "0deg");
    target.style.setProperty("--ry", "0deg");
  });
};

/* ---------- Observadores ---------- */

const watchGlobe = (globe, host) => {
  if (!globe) return;
  const drawStatic = () => globe.draw(1.2, { sx: 0, sy: 0 }, 0);
  if (!motionAllowed) {
    window.addEventListener("resize", drawStatic);
  }
  if (!("IntersectionObserver" in window)) {
    globe.visible = true;
    if (motionAllowed) startLoop();
    else drawStatic();
    return;
  }
  new IntersectionObserver(([entry]) => {
    globe.visible = entry.isIntersecting;
    if (!globe.visible) return;
    if (motionAllowed) startLoop();
    else drawStatic();
  }, { rootMargin: "80px" }).observe(host);
};

/* ---------- Capas globales ---------- */

const buildGlobalLayers = ({ finePointer }) => {
  document.body.insertAdjacentHTML("afterbegin", `
    <div class="depth-ambient" aria-hidden="true">
      <span class="depth-ambient__orb depth-ambient__orb--blue"></span>
      <span class="depth-ambient__orb depth-ambient__orb--green"></span>
      <span class="depth-ambient__orb depth-ambient__orb--yellow"></span>
      <div class="depth-ambient__floor"><i></i></div>
    </div>
    <div class="depth-grain" aria-hidden="true"></div>
    <div class="depth-progress" aria-hidden="true"><span></span></div>`);

  const bar = $(".depth-progress span");
  let queued = false;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    bar.style.transform = `scaleX(${progress.toFixed(4)})`;
    queued = false;
  };
  window.addEventListener("scroll", () => {
    if (queued) return;
    queued = true;
    window.requestAnimationFrame(update);
  }, { passive: true });
  update();

  if (finePointer && motionAllowed) {
    document.body.insertAdjacentHTML("beforeend", `
      <div class="depth-cursor" aria-hidden="true"></div>
      <div class="depth-cursor-dot" aria-hidden="true"></div>`);
    cursorRing = $(".depth-cursor");
    cursorDot = $(".depth-cursor-dot");
    document.addEventListener("pointermove", (event) => {
      cursor.x = event.clientX;
      cursor.y = event.clientY;
      if (!cursorRing.classList.contains("is-active")) {
        cursor.rx = cursor.x;
        cursor.ry = cursor.y;
        cursorRing.classList.add("is-active");
        cursorDot.classList.add("is-active");
      }
      const hot = event.target instanceof Element && event.target.closest("a, button, .depth-card");
      cursorRing.classList.toggle("is-hot", Boolean(hot));
    }, { passive: true });
    document.documentElement.addEventListener("pointerleave", () => {
      cursorRing.classList.remove("is-active");
      cursorDot.classList.remove("is-active");
    });
  }
};

/* ---------- Portada ---------- */

const buildHero = () => {
  const art = $(".hero-art");
  if (!art) return;

  const lines = (rows) =>
    rows.map((segments, index) =>
      `<p class="code-line" style="--i:${index}">${segments.map(([width, tone]) => `<b class="tone-${tone}" style="width:${width}px"></b>`).join("")}</p>`).join("");

  art.insertAdjacentHTML("afterbegin", `
    <div class="stage" aria-hidden="true">
      <div class="stage__floor"><i></i></div>
      <canvas class="stage__globe"></canvas>
      <div class="stage__item stage__item--cube" style="--d:30"><div class="cube3d cube3d--lg">${cubeFaces(["code", "message", "calendar", "cloud", "shield", "bolt"])}</div></div>
      <div class="stage__item stage__item--minicube" style="--d:44"><div class="cube3d cube3d--sm">${cubeFaces(["bolt", "git", "database", "terminal", "check", "cpu"])}</div></div>
      <div class="stage__item stage__item--code" style="--d:22">
        <div class="deck deck--code">
          <div class="deck__bar"><i></i><i></i><i></i><span class="deck__tab"></span></div>
          <div class="deck__body">${lines([
            [[18, "k"], [52, "d"]],
            [[34, "b"], [20, "g"], [38, "d"]],
            [[10, "d"], [44, "y"], [24, "d"]],
            [[26, "g"], [58, "d"]],
            [[18, "k"], [30, "b"], [28, "d"]],
            [[44, "d"], [16, "y"]],
          ])}<span class="deck__caret"></span></div>
        </div>
      </div>
      <div class="stage__item stage__item--chat" style="--d:38">
        <div class="deck deck--chat">
          <div class="deck__head"><span class="deck__avatar">${icon("whatsapp")}</span><span class="deck__title"></span><span class="deck__live"></span></div>
          <div class="deck__thread">
            <span class="bubble bubble--in" style="--i:0"><b style="width:74%"></b><b style="width:48%"></b></span>
            <span class="bubble bubble--out" style="--i:1"><b style="width:62%"></b></span>
            <span class="bubble bubble--card" style="--i:2">${icon("calendar")}<b style="width:52%"></b><em></em></span>
          </div>
        </div>
      </div>
      <div class="stage__item stage__item--chip stage__item--git" style="--d:52"><span class="tile tile--blue">${icon("git")}</span></div>
      <div class="stage__item stage__item--chip stage__item--db" style="--d:60"><span class="tile tile--green">${icon("database")}</span></div>
      <div class="stage__item stage__item--chip stage__item--term" style="--d:46"><span class="tile tile--ink">${icon("terminal")}</span></div>
      <div class="stage__item stage__item--chip stage__item--cloud" style="--d:56"><span class="tile tile--yellow">${icon("cloud")}</span></div>
    </div>`);

  const satellites = [["blue", "code"], ["green", "calendar"], ["yellow", "bolt"]];
  satellites.forEach(([tone, name]) => {
    const satellite = $(`.orbit__satellite--${tone}`, art);
    if (satellite) satellite.insertAdjacentHTML("afterbegin", icon(name));
  });

  swapGlyph($(".art-label__icon:not(.art-label__icon--green)", art), "eye");
  swapGlyph($(".art-label__icon--green", art), "code");

  heroState.element = art;
  heroState.targets = collectParallax(art);
  const globe = createGlobe($(".stage__globe", art), { count: 160, speed: 0.2 });
  watchGlobe(globe, art);

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => { heroState.visible = entry.isIntersecting; }, { rootMargin: "120px" }).observe(art);
  } else {
    heroState.visible = true;
  }
};

const buildSignalRibbon = () => {
  const strip = $(".signal-strip");
  if (!strip) return;

  const spans = $$(".signal-strip__inner > span", strip);
  ["users", "compass", "layers"].forEach((name, index) => prependIcon(spans[index], name));

  const tones = ["blue", "green", "yellow", "ink"];
  const names = ["code", "terminal", "git", "cloud", "database", "cpu", "shield", "bolt", "globe", "phoneApp", "chart", "braces", "message", "calendar"];
  const row = names.map((name, index) => `<span class="tile tile--${tones[index % 4]} tile--sm">${icon(name)}</span>`).join("");
  strip.insertAdjacentHTML("beforeend", `<div class="tech-ribbon" aria-hidden="true"><div class="tech-ribbon__track">${row}${row}</div></div>`);
};

/* ---------- Secciones de la portada ---------- */

const buildSections = () => {
  const eyebrowIcons = [
    ["#approach-title", "compass"],
    ["#services-title", "layers"],
    ["#product-showcase-title", "rocket"],
    ["#process-title", "refresh"],
    ["#modes-title", "chat"],
    ["#trust-title", "shield"],
    ["#support-title", "message"],
    ["#seresta-contact-title", "calendar"],
  ];
  eyebrowIcons.forEach(([heading, name]) => {
    const eyebrow = $(heading)?.parentElement?.querySelector(".eyebrow") ?? $(heading)?.closest("section")?.querySelector(".eyebrow");
    if (eyebrow) prependIcon(eyebrow, name, "ico--eyebrow");
  });

  /* Enfoque */
  const approachIcons = ["users", "target", "trend"];
  $$(".approach-card").forEach((card, index) => {
    swapGlyph($(".approach-card__mark", card), approachIcons[index]);
    enableTilt(card, { max: 9 });
  });

  /* Servicios */
  const services = $(".services");
  if (services) {
    services.insertAdjacentHTML("afterbegin", `
      <div class="services__depth" aria-hidden="true">
        <div class="stage__floor stage__floor--dark"><i></i></div>
        <div class="wire wire--lg"><div class="cube3d cube3d--wire">${cubeFaces(["code"])}</div></div>
        <div class="wire wire--sm"><div class="cube3d cube3d--wire">${cubeFaces(["bolt"])}</div></div>
      </div>`);
  }
  ["code", "compass", "rocket"].forEach((name, index) => {
    const item = $$(".service-item")[index];
    if (!item) return;
    item.insertAdjacentHTML("afterbegin", `<span class="service-item__tile" aria-hidden="true">${icon(name)}</span>`);
  });

  /* Producto */
  const preview = $(".product-preview");
  if (preview) {
    preview.insertAdjacentHTML("afterbegin", `<span class="depth-clip" aria-hidden="true"></span>`);
    preview.insertAdjacentHTML("beforeend", `
      <span class="pp-float pp-float--chat" aria-hidden="true"><span class="tile tile--green tile--sm">${icon("whatsapp")}</span><span class="pp-float__lines"><b></b><b></b></span></span>
      <span class="pp-float pp-float--ok" aria-hidden="true"><span class="tile tile--yellow tile--sm">${icon("calendar")}</span></span>
      <span class="pp-float pp-float--bell" aria-hidden="true"><span class="tile tile--blue tile--sm">${icon("bell")}</span></span>`);
    ["inbox", "calendar", "bell"].forEach((name, index) => prependIcon($$(".product-preview__chips span", preview)[index], name, "ico--chip"));
    enableTilt(preview, { max: 8 });
  }

  /* Proceso */
  ["chat", "target", "wrench", "trend"].forEach((name, index) => {
    const step = $$(".process-step")[index];
    if (step) step.insertAdjacentHTML("afterbegin", `<span class="process-step__tile" aria-hidden="true">${icon(name)}</span>`);
  });

  /* Contacto */
  const orb = $(".contact__orb");
  if (orb) {
    orb.insertAdjacentHTML("afterbegin", `<canvas class="contact__globe"></canvas>`);
    const globe = createGlobe($(".contact__globe", orb), {
      count: 130, speed: 0.15, line: "255,255,255", node: "255,255,255", green: "140,226,182", yellow: "255,200,61", lineAlpha: 0.32, tilt: 0.3,
    });
    watchGlobe(globe, orb);
  }
  const contact = $(".contact");
  if (contact) {
    contact.insertAdjacentHTML("afterbegin", `
      <div class="contact__depth" aria-hidden="true">
        <span class="tile tile--glass tile--float contact__tile contact__tile--mail">${icon("mail")}</span>
        <span class="tile tile--glass tile--float contact__tile contact__tile--phone">${icon("phone")}</span>
        <span class="tile tile--glass tile--float contact__tile contact__tile--chat">${icon("whatsapp")}</span>
      </div>`);
  }
};

/* ---------- SERESTA y páginas legales ---------- */

const buildSeresta = () => {
  const visual = $(".seresta-visual");
  if (visual) {
    visual.insertAdjacentHTML("afterbegin", `
      <div class="stage stage--seresta" aria-hidden="true">
        <div class="stage__floor"><i></i></div>
        <canvas class="stage__globe stage__globe--seresta"></canvas>
        <span class="stage__item stage__item--s1" style="--d:30"><span class="pp-float pp-float--static"><span class="tile tile--green tile--sm">${icon("whatsapp")}</span><span class="pp-float__lines"><b></b><b></b></span></span></span>
        <span class="stage__item stage__item--s2" style="--d:44"><span class="tile tile--yellow">${icon("calendar")}</span></span>
        <span class="stage__item stage__item--s3" style="--d:36"><span class="tile tile--blue">${icon("bell")}</span></span>
        <span class="stage__item stage__item--s4" style="--d:26"><span class="tile tile--ink tile--sm">${icon("shield")}</span></span>
      </div>`);
    const globe = createGlobe($(".stage__globe--seresta", visual), { count: 120, speed: 0.14, tilt: 0.5 });
    watchGlobe(globe, visual);
    if (!heroState.element) {
      heroState.element = visual;
      heroState.targets = collectParallax(visual);
    }
    if ("IntersectionObserver" in window && heroState.element === visual) {
      new IntersectionObserver(([entry]) => { heroState.visible = entry.isIntersecting; }, { rootMargin: "120px" }).observe(visual);
    }
    const consoleCard = $(".seresta-console", visual);
    if (consoleCard) enableTilt(visual, { max: 6, target: consoleCard });

    ["chat", "calendar", "bell"].forEach((name, index) => {
      const step = $$(".seresta-console__step", visual)[index];
      if (step) step.insertAdjacentHTML("beforeend", icon(name, "ico--step"));
    });
  }

  ["cube", "clock", "shield"].forEach((name, index) => prependIcon($$(".seresta-facts__inner > span")[index], name));

  ["whatsapp", "calendar"].forEach((name, index) => {
    const mode = $$(".seresta-mode")[index];
    if (!mode) return;
    $(".seresta-mode__top", mode)?.insertAdjacentHTML("afterbegin", `<span class="tile tile--${index ? "blue" : "green"} tile--sm">${icon(name)}</span>`);
    enableTilt(mode, { max: 5 });
  });

  ["lock", "clock", "shield"].forEach((name, index) => {
    const mark = $$(".seresta-trust__checklist > div > span")[index];
    if (mark) mark.insertAdjacentHTML("afterbegin", icon(name, "ico--check"));
  });

  const trust = $(".seresta-trust");
  if (trust) trust.insertAdjacentHTML("afterbegin", `<div class="seresta-trust__depth" aria-hidden="true"><div class="stage__floor"><i></i></div></div>`);
};

const buildLegal = () => {
  const hero = $(".legal-hero");
  if (!hero) return;
  hero.insertAdjacentHTML("afterbegin", `
    <div class="legal-hero__depth" aria-hidden="true">
      <div class="stage__floor"><i></i></div>
      <div class="stage__item stage__item--legal" style="--d:0"><div class="cube3d cube3d--lg">${cubeFaces(["shield", "lock", "check"])}</div></div>
      <span class="tile tile--green tile--float legal-hero__tile">${icon("shield")}</span>
    </div>`);
};

const buildFooter = () => {
  const links = $$(".site-footer__column a, .site-footer__column > span:not(.site-footer__label)");
  links.forEach((link) => {
    const href = link.getAttribute("href") ?? "";
    if (href.startsWith("mailto:")) prependIcon(link, "mail");
    else if (href.startsWith("tel:")) prependIcon(link, "phone");
    else if (!href) prependIcon(link, "pin");
  });
};

/* Pausa las animaciones CSS de las zonas fuera de pantalla para no gastar GPU/CPU en lo que no se ve. */
const pauseOffscreen = () => {
  if (!("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.target.classList.toggle("is-offscreen", !entry.isIntersecting));
  }, { rootMargin: "60px" });
  [".hero-art", ".tech-ribbon", ".services", ".product-preview", ".process", ".contact", ".seresta-visual", ".seresta-trust", ".legal-hero"]
    .forEach((selector) => $$(selector).forEach((element) => observer.observe(element)));
};

/* ---------- Entrada pública ---------- */

export const initDepth = ({ finePointer, reducedMotion }) => {
  motionAllowed = !reducedMotion;
  document.documentElement.classList.add("depth-ready");
  if (finePointer && motionAllowed) document.documentElement.classList.add("depth-fine");

  buildGlobalLayers({ finePointer });
  buildHero();
  buildSignalRibbon();
  buildSections();
  buildSeresta();
  buildLegal();
  buildFooter();
  if (motionAllowed) pauseOffscreen();

  if (motionAllowed) {
    if (finePointer) {
      window.addEventListener("pointermove", (event) => {
        pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
      }, { passive: true });
    }
    startLoop();
  }
};
