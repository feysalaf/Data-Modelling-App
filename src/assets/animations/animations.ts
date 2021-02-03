import {  animation, trigger, animateChild, group,
  transition, animate, style, query,state } from '@angular/animations';


export let fade = trigger('fade',[

  state('void',style({opacity:0})),

  // transition('void <=> *',[
  // style({opacity:0}),
  // animate(2200)]),

  transition(':enter,:leave',[
  style({opacity:0}),
  animate(2200)])])

export let stretchout = trigger('stretchout',[

  state('void',style({"transform":"scaleX(0.2)"})),
  state('*',style({"transform":"scaleX(1)"})),
  // transition('void <=> *',[
  // style({opacity:0}),
  // animate(2200)]),

  transition('void => *',[
  style({ }),
  animate(1800)])])

export const soso = animation([
  style({
  backgroundColor: '{{inputwidth }}'
        }),
  animate('{{time}}')
])
