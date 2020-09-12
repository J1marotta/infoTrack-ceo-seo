export const animationProps = (mode) => ({
  initial: 'business',
  animate: mode,
  transition: {
    layoutX: { duration: 1 },
    layoutY: { delay: 0.1, duration: 0.5 },
  },
  layout: true,
})
