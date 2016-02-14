function add {
  if [ -f "$1.js" ]; then
    cat $1.js
  elif [ "$NODE_ENV" == "production" ]; then
    cat $1.prod.js
  else
    cat $1.dev.js
  fi;
}

### FEEL FREE TO CUSTOMIZE ###

add src/lib/webgl/glCreateShader
add src/lib/webgl/glUniformLocation

cd build;
for glsl in *.frag *.vert; do
  name=`echo $glsl | tr '.' '_' | tr '[:lower:]' '[:upper:]'`
  cat $glsl | ../scripts/wrapjs.sh $name
  echo
done
cd ..;

add src/index
