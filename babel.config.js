module.exports = {
  "presets": [
    ["next/babel", {
      "preset-env": {},
      "transform-runtime": {},
      "class-properties": {}
    }]
  ],
  "plugins": [
    [
      "styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
    ]
  ]
}