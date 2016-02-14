/* global g */

function glCreateShader (vert, frag) {
  var handle, type = g.VERTEX_SHADER, src = vert;
  handle = g.createShader(type);
  g.shaderSource(handle, src);
  g.compileShader(handle);
  var vertex = handle;

  type = g.FRAGMENT_SHADER;
  src = frag;
  handle = g.createShader(type);
  g.shaderSource(handle, src);
  g.compileShader(handle);
  var fragment = handle;

  var program = g.createProgram();
  g.attachShader(program, vertex);
  g.attachShader(program, fragment);
  g.linkProgram(program);

  g.useProgram(program);
  var p = g.getAttribLocation(program, "p");
  g.enableVertexAttribArray(p);
  g.vertexAttribPointer(p, 2, g.FLOAT, false, 0, 0);
  return [program];
}
