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
  animate(1800)
])
])

export const soso = animation([
  style({
  width: '{{inputwidth }}px'
        }),
  animate('{{time}}'),
  style({
  width: '{{next}}px'
  }),

])


export let colorfadeinout = trigger('colorfadeinout',[

  // transition('void <=> *',[
  // style({opacity:0}),
  // animate(2200)]),

  transition('* => *',[
  animate(3500),
  style({"color":"#00ACEE"}),
  animate(2200,style({"color":"#B5B5B5"}))])])


export let fillfadeinout = trigger('fillfadeinout',[

  // transition('void <=> *',[
  // style({opacity:0}),
  // animate(2200)]),

  transition('* => *',[
  animate(3500),
  style({"fill":"#00ACEE"}),
  animate(2200,style({"fill":"#B5B5B5"}))])])


export let redtoblue = trigger('redtoblue',[

  state('OFF',style({"backgroundColor":"#00ACEE"})),
  state('ON',style({"backgroundColor":"#FF0007"})),

   transition('ON => OFF',[
     animate(2000)
   ]),
   transition('OFF => ON',[
     animate(2000)
   ]),

  ])

export let bluetored = trigger('bluetored',[
  transition(('*=>*'),[
    style({"background-color":"#00ACEE"}),
    animate(2200,style({"background-color":"#FF0007"}))
  ])
])


export let openclose = trigger('openclose', [
      // ...
      state('open', style({

        backgroundColor: '#FF0007'
      })),
      state('closed', style({

        backgroundColor: '#00ACEE'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ])
