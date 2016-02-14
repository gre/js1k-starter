/* global g a b
  glCreateFBO glCreateShader glCreateTexture glUniformLocation
  MAIN_VERT MAIN_FRAG
*/

var buffer = g.createBuffer();
g.bindBuffer(g.ARRAY_BUFFER, buffer);
g.bufferData(g.ARRAY_BUFFER, new Float32Array([
  -1.0, -1.0,
  1.0, -1.0,
  -1.0,  1.0,
  -1.0,  1.0,
  1.0, -1.0,
  1.0,  1.0
]), g.STATIC_DRAW);

var mainShader = glCreateShader(MAIN_VERT, MAIN_FRAG);

function render (t) {
  requestAnimationFrame(render);
  g.uniform1f(glUniformLocation(mainShader, "b"), 0.5 + 0.5 * Math.cos(t / 1000));
  g.drawArrays(g.TRIANGLES, 0, 6);
}

requestAnimationFrame(render);
