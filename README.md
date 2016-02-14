js1k starter template
=====================

## Features

- Your source files in `src/` (can use multiple files)
- **Live reload server**
- **UglifyJS***
- build with **jscrush**
- build with **regpack**
- **ESLint** ready – can save you from many headaches (with a proper editor integration).
- support `*.frag` and `*.vert` shader files
  - **shader minification with `glslmin`**
- support for `*.dev.js` and `*.prod.js` split based on the release mode so you can easily debug things (like shader compilation error only shown in dev mode).

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
npm run jscrush
```

> (can be used in combination of the livereload server)

It will log:

```
1930 build/build.js
1330 build/build.min.js
 872 build/bundle.js
```

### bundle with regpack

```
npm run regpack

# or

REGPACK="--crushGainFactor 1 --crushLengthFactor 0 --crushCopiesFactor 0" npm run regpack
```

It will log:

```
1930 build/build.js
1330 build/build.min.js
 851 build/bundle.js
```

### Configure the concatenation

and configure how to concat in `scripts/concat.sh`
