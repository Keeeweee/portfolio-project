import {Component, OnInit, OnDestroy} from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent implements OnInit {

  private p5Drawer: p5;

  streams = [];
  private symbolSize = 24;
  private fadeInterval = 1.6;


  constructor() {
    window.onresize = this.onWindowResize;
  }

  ngOnInit() {
    this.createCanvas();
  }

  ngOnDestroy(): void {
    this.destroyCanvas();
  }

  private onWindowResize = () => {
    this.p5Drawer.resizeCanvas(this.p5Drawer.windowWidth, this.p5Drawer.windowHeight);
  };

  private createCanvas() {
    this.p5Drawer = new p5(this.sketch);
  }

  private destroyCanvas() {
    console.log('destroying canvas');
    this.p5Drawer.noCanvas();
  }

  private sketch(p: any) {
    let streams = [];
    let fadeInterval = 1.6;
    let symbolSize = 24;
    p.setup = () => {

      p.createCanvas(window.innerWidth, window.innerHeight - 100).parent('matrix-background');
      // p.angleMode(p.DEGREES);
      // p.rectMode(p.CENTER);

      p.background(0);

      let x = 0;
      for (let i = 0; i <= p.width / symbolSize; i++) {
        let stream = new Stream();
        stream.generateSymbols(x, p.random(-2000, 0));
        streams.push(stream);
        x += symbolSize
      }

      p.textFont('Consolas');
      p.textSize(symbolSize);
    };

    p.draw = () => {
      p.background(0, 150);
      streams.forEach(stream => stream.render());
    };

    function Symbol(x, y, speed, first, opacity) {
      this.x = x;
      this.y = y;
      this.value;

      this.speed = speed;
      this.first = first;
      this.opacity = opacity;

      this.switchInterval = p.round(p.random(2, 25));

      this.setToRandomSymbol = function () {
        let charType = p.round(p.random(0, 10));
        if (p.frameCount % this.switchInterval === 0) {
          if (charType <= 1) {
            this.value = ' ';
          } else if (charType === 2) {
            this.value = p.round(p.random(0, 9));
          } else if (charType === 3) {
            let charList = '!"·$%&/()=+-*:;,._|@#';
            this.value = charList.charAt(p.round(p.random(0, charList.length)));
          } else {
            // set it to Katakana
            this.value = String.fromCharCode(
              0x30A0 + p.round(p.random(0, 96))
            );
          }
        }
      };

      this.rain = function () {
        this.y = (this.y >= p.height) ? 0 : this.y += this.speed;
      }
    }

    function Stream() {
      this.symbols = [];
      this.totalSymbols = p.round(p.random(5, 35));
      this.speed = p.random(0.01, 15);

      this.generateSymbols = function (x, y) {
        let opacity = 255;
        let first = p.round(p.random(0, 4)) === 1;
        for (let i = 0; i <= this.totalSymbols; i++) {
          let symbol = new Symbol(
            x,
            y,
            this.speed,
            first,
            opacity
          );
          symbol.setToRandomSymbol();
          this.symbols.push(symbol);
          opacity -= (255 / this.totalSymbols) / fadeInterval;
          y -= symbolSize;
          first = false;
        }
      };

      this.render = function () {
        this.symbols.forEach(function (symbol) {
          if (symbol.first) {
            p.fill(140, 255, 170, symbol.opacity);
          } else {
            p.fill(0, 255, 70, symbol.opacity);
          }
          p.text(symbol.value, symbol.x, symbol.y);
          symbol.rain();
          symbol.setToRandomSymbol();
        });
      }
    }
  }
}
