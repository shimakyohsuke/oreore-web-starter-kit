# OREORE Web Starter Kit

[![Build Status](https://travis-ci.org/shimakyohsuke/oreore-web-starter-kit.svg?branch=master)](https://travis-ci.org/shimakyohsuke/oreore-web-starter-kit)

gulp, Pug, Stylus, webpack

## Usage

```bash
$ git clone git@github.com:shimakyohsuke/oreore-web-starter-kit.git
```

or

[Zip](https://github.com/shimakyohsuke/oreore-web-starter-kit/archive/master.zip)

```bash
$ cd oreore-web-starter-kit
```

```bash
$ npm i
```

---

## Styleguide

Aigis: <https://pxgrid.github.io/aigis/>

```bash
$ npm run aigis
```

---

###### パッケージ更新確認

npm-check-updates というパッケージを global にインストール

```bash
$ npm install -g npm-check-updates
```

```bash
$ npm-check-updates
```

or

```bash
ncu
```

新しいパッケージがあれば、

```bash
$ npm-check-updates -u
```

or

```bash
ncu -u
```

###### node_modules clean


```bash
$ rm -rf node_modules
$ npm cache clean
$ npm cache ls
$ rm -rf ~/.npm
```
