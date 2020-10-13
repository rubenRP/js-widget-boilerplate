const Widget = {};

/**
 *
 *
 * @param {*} { container = "" }
 * @param {*} [model={}]
 */
Widget.generate = ({ container = "" }) => {
  const widgetInner = document.createElement("div");
  let widgetContainer = document.getElementById(container);

  widgetInner.setAttribute("class", "module-inner");
  widgetInner.innerHTML = '<h1>Widget created</h1>';

  if (!widgetContainer) {
    [widgetContainer] = document.getElementsByTagName("body");
  }

  widgetContainer.appendChild(widgetInner);

};

export default Widget;
