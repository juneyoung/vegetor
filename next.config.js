module.exports = (phase, { defaultConfig }) => {

  // console.log(phase)
  // console.log(defaultConfig)

  return {
    exportPathMap: async (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) => {
      console.log(defaultPathMap)

      return {

      }
    }
  }
}
