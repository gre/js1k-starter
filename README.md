js1k starter template
=====================

- Your source files in `src/` (can use multiple files)
- **Live reload server**
- **UglifyJS***
- build with **jscrush**
- build with **regpack**
- **ESLint** ready – can save you from many headaches (with a proper editor integration).
- support `*.frag` and `*.vert` shader files
  - **shader minification with `glslmin`**
- support for `*.dev.js` and `*.prod.js` split based on the release mode so you can easily debug things (like shader compilation error only shown in dev mode).
- current source code contains a WebGL example with webgl function helper. Feel free to fork and remove them ;)

<img width="280" alt="screen shot 2016-02-14 at 12 55 57" src="https://cloud.githubusercontent.com/assets/211411/13033536/607199d8-d31a-11e5-8afd-21de56b46bd4.png">


## Usage

### Clone it
```
git clone git@github.com:gre/js1k-starter MYPROJ
cd MYPROJ
npm i
```

### Run the livereload server

```
npm start
```

### bundle with jscrush

```
npm run build-jscrush
```

> (can be used in combination of the livereload server)

It will log:

```
1930 build/build.js
1197 build/build.min.js
 827 build/bundle.js
```

### bundle with regpack

```
npm run build-regpack

# or

REGPACK="--crushGainFactor 1 --crushLengthFactor 0 --crushCopiesFactor 0" npm run regpack
```

It will log:

```
1930 build/build.js
1197 build/build.min.js
 805 build/bundle.js
```

### Configure the concatenation

and configure how to concat in `scripts/concat.sh`
