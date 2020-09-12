export const animationProps = (mode) => ({
  initial: 'business',
  animate: mode ,
  transition:{
    layoutX: { duration: 0.3 },
    layoutY: { delay: 0.2, duration: 0.3 },
  },
  layout: true,
})