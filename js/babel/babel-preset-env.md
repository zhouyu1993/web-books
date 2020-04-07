``` bash
npm install babel-preset-env --save-dev

# or

yarn add babel-preset-env --dev
```

``` json
{
  "presets": [
    [
      "env", {
        "modules": false,
        "targets": {
          "browsers": [
            "> 1%",
            "last 3 versions",
            "ios >= 8",
            "android >= 4",
            "ie > 8"
          ]
        }
      }
    ]
  ]
}
```
