import { green, redPastel, yellow } from 'utils/colors'

export const getColor = (currentStep, totalSteps, defaultColor) => {
  const currentTotalRatio = currentStep / totalSteps

  return (
    currentTotalRatio === 0
      ? defaultColor
      : currentTotalRatio > 0 && currentTotalRatio < 2 / 3
      ? redPastel
      : currentTotalRatio >= 2 / 3 && currentTotalRatio < 3 / 3
        ? yellow
        : green
  )
}
