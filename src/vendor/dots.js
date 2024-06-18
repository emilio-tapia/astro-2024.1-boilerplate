// import "./EasePack.js";
import "./rAF.js";
import { TweenLite } from "gsap/gsap-core.js";
import { Circ } from "gsap/gsap-core";
import { prefersReducedMotion } from "../utils/accessibilty.ts";
// import "./TweenLite.js"

class Circle {
  constructor(ctx, pos, rad, color) {
    const _this = this;
    _this.pos = pos || null;
    _this.radius = rad || null;
    _this.color = color || null;
    _this.ctx = ctx || null;
  }
  draw() {
    const _this = this;
    // if (!_this.active) return;
    _this.ctx.beginPath();
    _this.ctx.arc(
      _this.pos.x,
      _this.pos.y,
      _this.radius,
      0,
      2 * Math.PI,
      false,
    );
    _this.ctx.fillStyle = "rgba(156,217,249," + _this.active + ")";
    _this.ctx.fill();
  }
}

(function () {
  let width,
    height,
    largeHeader,
    canvas,
    ctx,
    points,
    target,
    animateHeader = true;

  // Check for reduced motion before calling foo
  if (!prefersReducedMotion()) {
    // Main
    initHeader();
    initAnimation();
    addListeners();
  }

  function initHeader() {
    width = window.innerWidth;
    height = window.innerHeight;
    target = { x: width / 2, y: height / 2 };

    largeHeader = document.getElementById("large-header");
    largeHeader.style.height = height + "px";

    canvas = document.getElementById("demo-canvas");
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext("2d");

    // create points
    points = [];
    for (let x = 0; x < width; x = x + width / 20) {
      for (let y = 0; y < height; y = y + height / 20) {
        let px = x + (Math.random() * width) / 20;
        let py = y + (Math.random() * height) / 20;
        let p = { x: px, originX: px, y: py, originY: py };
        points.push(p);
      }
    }

    // for each point find the 5 closest points
    // ITERATE ALL THE POINTS
    for (let i = 0; i < points.length; i++) {
      let closest = [];
      let p1 = points[i];
      // FOR EVERY BASE POINT, ITERATE ALL THE POINTS
      for (let j = 0; j < points.length; j++) {
        let p2 = points[j];
        // CHECK IF BASE POINT NOT EQUAL INDEX POINT
        if (!(p1 == p2)) {
          let placed = false; // PLACED NEAR POINT INSIDE ARRAY
          // ITERATE 5 TIMES FOR FILL THE CLOSEST ARRAY WITH FIRST 5 ITEMS
          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (closest[k] == undefined) {
                closest[k] = p2;
                placed = true;
              }
            }
          }

          // ITERATE 5 TIMES TO UPDATE THE CLOSEST ARRAY WITH CLOSEST VALUES
          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
        }
      }
      p1.closest = closest;
    }

    // assign a circle to each point
    for (let i in points) {
      let c = new Circle(
        ctx,
        points[i],
        2 + Math.random() * 2,
        "rgba(255,255,255,0.3)",
      );
      points[i].circle = c;
    }
  }

  // animation
  function initAnimation() {
    animate();
    for (let i in points) {
      shiftPoint(points[i]);
    }
  }

  function animate() {
    if (animateHeader) {
      ctx.clearRect(0, 0, width, height);
      for (let i in points) {
        // detect points in range

        // CREATE ANIMATION WITHOUT MOUSE EVENT
        if (
          Math.abs(
            getDistance(
              { x: width / 2 - width / 25, y: height / 2 },
              points[i],
            ),
          ) > 120000
        ) {
          points[i].active = 0;
          points[i].circle.active = 0.025;
        } else if (
          Math.abs(
            getDistance(
              { x: width / 2 - width / 25, y: height / 2 },
              points[i],
            ),
          ) > 11000
        ) {
          points[i].active = 0.025;
          points[i].circle.active = 0.05;
        } else if (
          Math.abs(
            getDistance(
              { x: width / 2 - width / 25, y: height / 2 },
              points[i],
            ),
          ) > 10000
        ) {
          points[i].active = 0.05;
          points[i].circle.active = 0.05;
        } else {
          points[i].active = 0;
          points[i].circle.active = 0;
        }

        // ANIMATION WITH MOUSE EVENT
        if (Math.abs(getDistance(target, points[i])) < 4000) {
          points[i].active = 0.2;
          points[i].circle.active = 0.4;
        } else if (Math.abs(getDistance(target, points[i])) < 10000) {
          points[i].active = 0.1;
          points[i].circle.active = 0.3;
        } else if (Math.abs(getDistance(target, points[i])) < 20000) {
          points[i].active = 0.02;
          points[i].circle.active = 0.05;
        } else if (
          Math.abs(getDistance(target, points[i])) <
          Math.abs(getDistance({ x: width / 2, y: height / 2 }, points[i])) / 2
        ) {
          points[i].active = 0.05;
          points[i].circle.active = 0.1;
        }

        // DELIMIT BOUNDARIES
        if (
          Math.abs(
            getDistance(
              { x: width / 2 - width / 25, y: height / 2 },
              points[i],
            ),
          ) > 150000
        ) {
          points[i].active = 0;
          points[i].circle.active = 0;
        }

        if (
          Math.abs(
            getDistance(points[i], {
              x: width / 2 - width / 25,
              y: height / 2,
            }),
          ) < 40000
        ) {
          points[i].active = 0;
          points[i].circle.active = 0.05;
        }

        drawLines(points[i]);
        points[i].circle.draw();
      }
    }
    requestAnimationFrame(animate);
  }

  //   RECURSIVE FUNCTION TO MOVE ACTUAL POSITION BASE IN ORIGIN + RANDOM
  function shiftPoint(point) {
    TweenLite.to(point, 1 + 1 * Math.random(), {
      x: point.originX - 50 + Math.random() * 100,
      y: point.originY - 50 + Math.random() * 100,
      ease: Circ.easeInOut,
      onComplete: function () {
        shiftPoint(point);
      },
    });
  }

  // LINE CONNECTION BETWEEN POINT
  function drawLines(p) {
    if (!p.active) return;
    for (let i in p.closest) {
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.closest[i].x, p.closest[i].y);
      ctx.strokeStyle = "rgba(156,217,249," + p.active + ")";
      ctx.stroke();
    }
  }

  // Event handling
  function addListeners() {
    if (!("ontouchstart" in window)) {
      window.addEventListener("mousemove", mouseMove);
    }
    window.addEventListener("scroll", scrollCheck);
    window.addEventListener("resize", resize);
  }

  function mouseMove(e) {
    let posx = 0;
    let posy = 0;
    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx =
        e.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft;
      posy =
        e.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop;
    }
    target.x = posx;
    target.y = posy;
  }

  function scrollCheck() {
    if (document.body.scrollTop > height) animateHeader = false;
    else animateHeader = true;
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    largeHeader.style.height = height + "px";
    canvas.width = width;
    canvas.height = height;
  }
})();

// Util
function getDistance(p1, p2) {
  return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
}
