/* global g */

function glBindTexture (t, unit) {
  g.activeTexture(g.TEXTURE0 + unit);
  g.bindTexture(g.TEXTURE_2D, t);
  return unit;
}
