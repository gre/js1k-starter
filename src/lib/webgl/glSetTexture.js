/* global g */

function glSetTexture (t, value) {
  g.bindTexture(g.TEXTURE_2D, t);
  g.texImage2D(g.TEXTURE_2D, 0, g.RGBA, g.RGBA, g.UNSIGNED_BYTE, value);
}
