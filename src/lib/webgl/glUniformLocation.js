/* global g */

function glUniformLocation(shader, name) {
  return shader[name] || (shader[name] = g.getUniformLocation(shader[0], name));
}
