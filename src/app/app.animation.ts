import { trigger, animate, transition, style, group, query } from '@angular/animations';

export const slideInAnimation = trigger('slideInAnimation', [
  // Transition between any two states. In our case, any route activation.
  transition('* <=> *', [
    // Events to apply
    // Defined style and animation function to apply
    // Config object with optional set to true to handle when element not yet added to the DOM
    query(':enter, :leave', style({ position: 'fixed', width: '100%', zIndex: 2 }), { optional: true }),
    // group block executes in parallel
    group([
      // This query uses :enter to select any newly inserted elements, which when routing is the component template we are routing to.
      // The second argument is an animation sequence. Here, we use the ease transition for a specified number of seconds,
      // transforming the elements by translating them on the X axis, basically sliding it horizontally.
      // The third element sets optional to true, which prevents the animation from generating an error if there is no newly inserted element.
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-out', style({ transform: 'translateX(0%)' })) // sliding horizontally
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true })
    ])
  ])
]);
