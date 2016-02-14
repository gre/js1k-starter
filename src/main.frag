precision highp float;
varying vec2 uv;
uniform float b;
void main () {
  gl_FragColor = vec4(uv.x, uv.y, b, 1.0);
}
