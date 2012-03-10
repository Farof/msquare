"use strict";

(function (exports) {

  window.addEventListener('DOMContentLoaded', function () {

    /*var
      content = document.querySelector('#content'),

      getMouseMove = function (node, options) {
        var
          rect = node.getBoundingClientRect(),
          deg = options.deg || 15;
        return function (e) {
          var
            x = Math.round((((e.clientX - rect.left) / rect.width * 100) - 50) / 50 * deg),
            y = Math.round((((e.clientY - rect.top) / rect.height * 100) - 50) / 50 * deg);
          node.setAttribute('style', '-moz-transform: rotateX(' + -y + 'deg) rotateY(' + x + 'deg);');
        }
      },
    
      getMouseLeave = function (node) {
        return function () {
          console.log('leave');
          node.setAttribute('style', '-moz-transform: rotateX(0deg) rotateY(0deg);');
        }
      },

      make3DHover = function (nodes, options) {
        nodes = (typeof nodes.length === 'number') ? nodes : [nodes];
        options = options || {};
        Array.prototype.forEach.call(nodes, function (node) {
          console.log('node: ', node);
          node.style.mozPerspective = (options.perspective || 800) + 'px';
          node.style.mozPerspectiveOrigin = 'center center';
          node.addEventListener('mouseleave', getMouseLeave(node), false);
          node.addEventListener('mousemove', getMouseMove(node, options), false);
        });
      };*/

      Snake.init(document.getElementById('snake'), {
        width: 30,
        height: 15,
        snakeWidth: 10,
        speed: 100
      });

  }, false);

}(this));
