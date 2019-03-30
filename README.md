# test-travelpayouts
Test Frontend work for Travelpayouts


# Deploying this React App to MacOS

1. An adequate version of [`Node.js`](https://nodejs.org/) is installed. Here's the adequate version I use:

    ```sh
    $ node -v
    v11.10.0
    ```

2. An adequate version of [`yarn`](https://yarnpkg.com/lang/en/) is installed. Here's the adequate version I use:

    ```sh
    $ yarn -v
    1.15.2
    ```

## Procedure

1. **Clone this repository from GitHub**

    * Create an empty directory on your desktop
    * run:
      ```sh
      $ git clone https://github.com/o-mega/test-travelpayouts.git
      $ yarn install
      ```

2. **Run app in development mode**

    ```sh
    $ yarn run dev
    ```

    * This will run a webpack's DevServer at http://0.0.0.0:3100/
    * The link will open in your local browser
    * The project contains a react-hot-loader and eslint with prettier for better coding

3. **Run a production build**

    ```
    $ yarn run build
    ```

    * This will generate a production minimized build with *.css and *.js compiled versions

# Notes

* I made this app as a sample test work for Travelpayouts.
* Additionally, I optimized this app for mobile devices.
* I also added a simple class for language localizations to the app. For this case, I made 2 language versions and added language switches to the header menu bar.
