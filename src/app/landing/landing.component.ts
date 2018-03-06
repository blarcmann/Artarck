import { Component, OnInit } from '@angular/core';
import { ParticlesModule } from 'angular-particle';
import { MaterialModule } from '../modules/material.module';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
    constructor() { }

    myStyle: object = {};
    myParams: object = {};
    width = 100;
    height = 100;
    showFiller = false;

  ngOnInit() {
    this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': 0,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };

    this.myParams = {
            particles: {
                    number: {
                        value: 80,
                    },
                    color: {
                        value: '#fff'
                    },
                    shape: {
                        type: 'circle',
                    },
                line_linked: {
                    enable: true,
                    distance: 175,
                    color: '#ff0000',
                    opacity: 0.4,
                    width: 0.4
                },
                move: {
                    speed: 10
                }
            },
        };

    }
}
