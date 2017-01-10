#dacang-weipai
> Dacang weipai.


##build command:
  - scripts:
  ```json
  {
      "clean": "rimraf dist",
      "build": "npm run clean && cd src && webpack -p --config webpack.config.product.js",
      "dev": "npm run clean && cd src && webpack-dev-server --inline --progress --colors --port 8090 --config webpack.config.development.js"
  }
  ```

  - bash command:
  ```bash
  npm run clean
  npm run dev
  npm run build
  ```
