import { trigger, state, style, transition, animate } from '@angular/animations';


export let fade = trigger('fade',[

  state('void',style({opacity:0})),

  // transition('void <=> *',[
  // style({opacity:0}),
  // animate(2200)]),

  transition(':enter,:leave',[
  style({opacity:0}),
  animate(2200)])])
