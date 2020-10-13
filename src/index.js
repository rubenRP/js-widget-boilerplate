import Widget from "./components/widget";

// eslint-disable-next-line no-unused-vars
import styles from "./styles/main.scss"

// eslint-disable-next-line func-names
(function(window) {
  console.log('Widget initialized!')
  // eslint-disable-next-line no-underscore-dangle
  const _init = params => {
    Widget.generate(params, model);
  };
  // eslint-disable-next-line no-param-reassign
  window.Widget = {
    init: _init
  };
})(window);
