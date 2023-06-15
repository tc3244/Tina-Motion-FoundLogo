// Hello Professor Meiller, I'm sorry, but for some reason I could not make anything move following the method you've taught in class...
// So I asked a friend for help setting up the project and they also showed me js codes that weren't taught in class...
// I know we are also graded on using the methods you've taught us, I can accept a poor grade, but if possible please at least let me pass this class... Thank you.


document.addEventListener("DOMContentLoaded", function (event) {
  window.onload = function () {
    window.requestAnimationFrame(function () {


      function intro() {


        let pie_chart_sector_one = piePath(".chart-piece-1",
          { cx: 400, cy: 300, radius: 200, startAngle: 45, endAngle: 90 });

        var action = gsap.timeline({})
        action
          .set("#mItemReflect", { scaleY: 0 })
          .set("#leye,#reye", { autoAlpha: 0 })
          .set("#leye", { scaleY: .7, x: 45, y: 45 })
          .set("#reye", { scaleY: .7, x: -45, y: 45 })
          .to(pie_chart_sector_one, {
            startAngle: -270,
            endAngle: -160,
            radius: 200,
            duration: .55,
            ease: "none",
          })
          .set("#rr", { autoAlpha: 1 })
          .to("#rr", {
            duration: .2,
            ease: "power4.easeIn",
            attr: { points: "491.3,60.2 600.1,60.2 600.1,301.9 546.5,301.9 491.3,301.9" }
          })



          .addLabel("piechart", .9)
          .to(pie_chart_sector_one, {
            startAngle: -270,
            endAngle: -90,
            radius: 200,
            duration: .1,
            ease: "none",
          }, "piechart")
          .set("#rl", { autoAlpha: 1 })
          .to("#rl", {
            duration: .15,
            ease: "none",
            attr: { points: "199.9,60.2 308.7,60.2 308.7,301.7 222,301.7 199.9,301.7" }
          }, "piechart+=.13")
          .to("#rr", {
            duration: .1,
            ease: "none",
            attr: { points: "491.3,152 600.1,152 600.1,301.9 546.5,301.9 491.3,301.9" }
          }, "piechart-=.1")
          .to("#rl", {
            duration: .2,
            ease: Back.easeOut.config(3),
            attr: { points: "199.9,110.4 308.7,110.4 308.7,301.7 222,301.7 199.9,301.7" }
          }, "piechart+=.40")
          .to("#rr", {
            duration: .2,
            ease: Back.easeOut.config(3),
            attr: { points: "491.3,110.4 600.1,110.4 600.1,301.9 546.5,301.9 491.3,301.9" }
          }, "piechart+=.40")
          .to("#maskItem", {
            duration: .4,
            y: 267,//279
          }, "piechart+=.95")

          .to("#innerOne", {
            duration: .4,
            y: -23,
            attr: { d: "M400,208.7c6.3,0,12.5,0.6,18.4,1.9c41.6,8.5,72.9,45.3,72.9,89.4c0,50.4-6.7,1.9-57.1,1.9 s-125.5,48.5-125.5-1.9S349.6,208.7,400,208.7z" },
          }, "piechart+=1.15")
          .to("#maskItem", {
            duration: .4,
            ease: Back.easeOut.config(7.1),
            attr: { d: "M154.8,34.2c0,0,60.8,0.2,124.3,0.2s118.3,0.7,192.3,0.8C568,35.2,652.8,34,652.8,34          s128.8,471.7-259,471.6C48.4,505.4,154.8,34.2,154.8,34.2z" },
          }, "piechart+=1.3")
          .to("#mItem", {
            duration: .4,
            autoAlpha: 1,
            scaleY: 0
          }, "piechart+=2")
          .to("#mItemReflect", {
            duration: .4,
            scaleY: -1,
            fill: "#D91C5B",
          }, "piechart+=2.4")
          .to("#mItemReflect", {
            duration: .4,
            scaleY: 0,
            fill: "#B7194C",
          }, "piechart+=2.9")
          .to("#mItem", {
            duration: .4,
            autoAlpha: 1,
            ease: Power0.easeIn
          }, "piechart+=3.3")
          .to("#mItem", {
            duration: .4,
            scaleY: 1,
            ease: Power3.easeOut
          }, "piechart+=3.3")
          .to("#leye,#reye", { duration: .4, autoAlpha: 1, scaleY: 1, x: 0, y: 0 }, "piechart+=2.9")
          .to("#mItem", {
            duration: .4,
            autoAlpha: 0
          }, "piechart+=4.2")
          .to("#reye", { duration: .05, scaleY: .3, transformOrigin: "center" },
            "piechart+=4.2")
          .to("#reye", { duration: .2, scaleY: 1, transformOrigin: "center" }, ">")


        return action;

      }

      function piePath(path, { cx = 0, cy = 0, radius = 100, startAngle = 0, endAngle = 360 }) {
        path = gsap.utils.toArray(path)[0];
        let DEG2RAD = Math.PI / 180,
          round = value => Math.round(value * 10000) / 10000,
          self = {
            cx(value) {
              return arguments.length ? self.render((cx = value)) : cx;
            },
            cy(value) {
              return arguments.length ? self.render((cy = value)) : cy;
            },
            radius(value) {
              return arguments.length ? self.render((radius = value)) : radius;
            },
            startAngle(value) {
              return arguments.length ? self.render((startAngle = value)) : startAngle;
            },
            endAngle(value) {
              return arguments.length ? self.render((endAngle = value)) : endAngle;
            },
            path: path,
            render() {
              let close = endAngle - startAngle >= 360,
                sa = (startAngle - 90) * DEG2RAD,
                ea = (close ? startAngle + 269 : endAngle - 90) * DEG2RAD,
                sx = round(cx + radius * Math.cos(sa)),
                sy = round(cy + radius * Math.sin(sa)),
                d = ["M", sx, sy, "A", radius, radius, 0, endAngle - startAngle <= 180 ? 0 : 1, 1, round(cx + radius * Math.cos(ea)), round(cy + radius * Math.sin(ea))];
              close || d.push("L", cx, cy, sx, sy);
              path.setAttribute("d", d.join(" ") + " Z");
              return self;
            }
          };
        return self.render();
      }

      var masterTl = gsap.timeline();
      masterTl
        .add(intro())
        .timeScale(1.1);

    });

  };

});
