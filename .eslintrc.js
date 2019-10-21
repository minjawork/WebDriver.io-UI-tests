module.exports = {
    "extends": "standard",
    "plugins": [
        "mocha",
        "standard",
        "promise"
    ],
    "rules": {
      "mocha/no-identical-title": 2,
      "mocha/no-exclusive-tests": "error",
      "no-var" : "error",
      "no-unused-vars" : "error",
      "prefer-const": "error",
      "no-array-constructor": "error",
      "quotes" : ["error", "single"],
      "prefer-template": "error",
      "func-style" : ["error","expression", { "allowArrowFunctions": true }],
      "no-loop-func" : "error",
      "no-duplicate-imports" : "error",
      "import/prefer-default-export" : "error",
      "import/first" : "error",
      "eqeqeq" : "error",
      "nonblock-statement-body-position": ["error", "below"],
      "no-else-return": "error",
      "space-before-blocks": "error",
      "spaced-comment": "error",
      "space-in-parens": ["error", "never"],
      "key-spacing": ["error", { "afterColon": true }],
      "template-curly-spacing" : "error",
      "arrow-spacing" : ["error", { "before": true, "after": true }],
      "array-bracket-spacing": ["error", "never"],
      "block-spacing": "error",
      "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
      "indent": ["error", 2],
      "padded-blocks": ["error", "never"],
      "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1 }],
      "semi": [2, "always"],
      "no-extra-semi": 2,
      "camelcase": ["error", {properties: "always"}],
      "new-cap": "error"
     },
    globals: {
      browser: false,
      expect: false,
      $: false,
      $$: false
    },
    "env": {
      "es6": true,
      "mocha": true,
      "node": true
    }
};
