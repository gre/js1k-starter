/* global g
glCreateTexture
*/

function glCreateFBO (w, h) {
  var handle = g.createFramebuffer();
  g.bindFramebuffer(g.FRAMEBUFFER, handle);
  var color = glCreateTexture();
  g.texImage2D(g.TEXTURE_2D, 0, g.RGBA, w, h, 0, g.RGBA, g.UNSIGNED_BYTE, null);
  g.framebufferTexture2D(g.FRAMEBUFFER, g.COLOR_ATTACHMENT0, g.TEXTURE_2D, color, 0);
  return [handle, color];
}
