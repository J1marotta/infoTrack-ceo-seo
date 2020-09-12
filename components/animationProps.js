const animationProps = (mode) => (x = 0.5) => (y = 0.75) => ({
  initial: 'business',
  animate: mode,
  transition: {
    layoutX: { duration: x },
    layoutY: { delay: 0.1, duration: y },
  },
  layout: true,
})

export default animationProps
