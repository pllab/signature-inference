# Signature Inference Analysis for JavaScript Browser Addons

## Installation

In order to install and run the analysis, you will need:

1. [sbt version 0.12.1](http://www.scala-sbt.org/0.12.1/docs/home.html).
2. Scala version 2.10.1.
 
## Building

To build the project:

1. Do a clean
```console
$ sbt clean
```

2. Do a build
```console
$ sbt compile
```     

## Running

To run the Signature Inference Analysis:
```console
$ sbt "run-main notjs.abstracted.interpreter.notJS filename.js --genSig"
```
A variety of tests and our addon benchmark suite are available in the folder `src/test/resources/sif/`.

