// @ts-nocheck
// Canvas cursor effect — adapted from Cursify, customized for gold theme
import { useEffect } from "react";

const useCanvasCursor = () => {
  function Oscillator(e) {
    this.init(e || {});
  }

  Oscillator.prototype = {
    init: function (e) {
      this.phase = e.phase || 0;
      this.offset = e.offset || 0;
      this.frequency = e.frequency || 0.001;
      this.amplitude = e.amplitude || 1;
    },
    update: function () {
      this.phase += this.frequency;
      return this.offset + Math.sin(this.phase) * this.amplitude;
    },
  };

  function Line(e) {
    this.init(e || {});
  }

  Line.prototype = {
    init: function (e) {
      this.spring = e.spring + 0.1 * Math.random() - 0.02;
      this.friction = CONFIG.friction + 0.01 * Math.random() - 0.002;
      this.nodes = [];
      for (var t, n = 0; n < CONFIG.size; n++) {
        t = new Node();
        t.x = pos.x;
        t.y = pos.y;
        this.nodes.push(t);
      }
    },
    update: function () {
      var e = this.spring,
        t = this.nodes[0];
      t.vx += (pos.x - t.x) * e;
      t.vy += (pos.y - t.y) * e;
      for (var n, i = 0, a = this.nodes.length; i < a; i++)
        (t = this.nodes[i]),
          0 < i &&
            ((n = this.nodes[i - 1]),
            (t.vx += (n.x - t.x) * e),
            (t.vy += (n.y - t.y) * e),
            (t.vx += n.vx * CONFIG.dampening),
            (t.vy += n.vy * CONFIG.dampening)),
          (t.vx *= this.friction),
          (t.vy *= this.friction),
          (t.x += t.vx),
          (t.y += t.vy),
          (e *= CONFIG.tension);
    },
    draw: function () {
      var e,
        t,
        n = this.nodes[0].x,
        i = this.nodes[0].y;
      ctx.beginPath();
      ctx.moveTo(n, i);
      for (var a = 1, o = this.nodes.length - 2; a < o; a++) {
        e = this.nodes[a];
        t = this.nodes[a + 1];
        n = 0.5 * (e.x + t.x);
        i = 0.5 * (e.y + t.y);
        ctx.quadraticCurveTo(e.x, e.y, n, i);
      }
      e = this.nodes[a];
      t = this.nodes[a + 1];
      ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
      ctx.stroke();
      ctx.closePath();
    },
  };

  // Track all bound handlers for cleanup
  var activeHandler = null;
  var activeTouchStart = null;

  function onMousemove(e) {
    function handler(e) {
      e.touches
        ? ((pos.x = e.touches[0].pageX), (pos.y = e.touches[0].pageY))
        : ((pos.x = e.clientX), (pos.y = e.clientY));
      e.preventDefault();
    }
    function touchStart(e) {
      if (e.touches.length === 1) {
        pos.x = e.touches[0].pageX;
        pos.y = e.touches[0].pageY;
      }
    }
    document.removeEventListener("mousemove", onMousemove);
    document.removeEventListener("touchstart", onMousemove);
    document.addEventListener("mousemove", handler);
    document.addEventListener("touchmove", handler);
    document.addEventListener("touchstart", touchStart);
    activeHandler = handler;
    activeTouchStart = touchStart;
    handler(e);

    lines = [];
    for (var i = 0; i < CONFIG.trails; i++) {
      lines.push(new Line({ spring: 0.4 + (i / CONFIG.trails) * 0.025 }));
    }
    render();
  }

  function render() {
    if (ctx.running) {
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.globalCompositeOperation = "lighter";

      // Gold color with subtle warm shift
      var hue = oscillator.update();
      ctx.strokeStyle = "hsla(" + Math.round(hue) + ",55%,55%,0.18)";
      ctx.lineWidth = 1;

      for (var i = 0; i < CONFIG.trails; i++) {
        lines[i].update();
        lines[i].draw();
      }
      ctx.frame++;
      window.requestAnimationFrame(render);
    }
  }

  function resizeCanvas() {
    ctx.canvas.width = window.innerWidth - 20;
    ctx.canvas.height = window.innerHeight;
  }

  var ctx,
    oscillator,
    pos = {},
    lines = [],
    CONFIG = {
      friction: 0.5,
      trails: 4,
      size: 8,
      dampening: 0.25,
      tension: 0.98,
    };

  function Node() {
    this.x = 0;
    this.y = 0;
    this.vy = 0;
    this.vx = 0;
  }

  var focusHandler, blurHandler;

  const renderCanvas = function () {
    const canvas = document.getElementById("canvas");
    if (!canvas) return;
    ctx = canvas.getContext("2d");
    ctx.running = true;
    ctx.frame = 1;

    // Oscillate around gold hue (42°) with small range
    oscillator = new Oscillator({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 8,
      frequency: 0.002,
      offset: 42,
    });

    document.addEventListener("mousemove", onMousemove);
    document.addEventListener("touchstart", onMousemove);
    document.body.addEventListener("orientationchange", resizeCanvas);
    window.addEventListener("resize", resizeCanvas);

    focusHandler = () => {
      if (!ctx.running) {
        ctx.running = true;
        render();
      }
    };
    blurHandler = () => {
      ctx.running = false;
    };

    window.addEventListener("focus", focusHandler);
    window.addEventListener("blur", blurHandler);
    resizeCanvas();
  };

  useEffect(() => {
    // Only render on desktop
    if (window.matchMedia("(pointer: fine)").matches) {
      renderCanvas();
    }

    return () => {
      if (ctx) ctx.running = false;
      document.removeEventListener("mousemove", onMousemove);
      document.removeEventListener("touchstart", onMousemove);
      if (activeHandler) {
        document.removeEventListener("mousemove", activeHandler);
        document.removeEventListener("touchmove", activeHandler);
      }
      if (activeTouchStart) {
        document.removeEventListener("touchstart", activeTouchStart);
      }
      document.body.removeEventListener("orientationchange", resizeCanvas);
      window.removeEventListener("resize", resizeCanvas);
      if (focusHandler) window.removeEventListener("focus", focusHandler);
      if (blurHandler) window.removeEventListener("blur", blurHandler);
    };
  }, []);
};

export default useCanvasCursor;
