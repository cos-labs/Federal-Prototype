export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "triple-curlies"
      },
      "revision": "Ember@2.6.0",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 3,
          "column": 6
        }
      },
      "moduleName": "ostp-files-ember/templates/navbar.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("nav");
      dom.setAttribute(el1,"class","navbar navbar-inverse navbar-fixed-top");
      dom.setAttribute(el1,"id","navbarScope");
      dom.setAttribute(el1,"role","navigation");
      var el2 = dom.createTextNode("\n      ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("a");
      dom.setAttribute(el2,"class","navbar-brand hidden-sm hidden-xs");
      dom.setAttribute(el2,"href","/");
      var el3 = dom.createElement("img");
      dom.setAttribute(el3,"src","https://osf.io/static/img/cos-white2.png");
      dom.setAttribute(el3,"class","osf-navbar-logo");
      dom.setAttribute(el3,"width","27");
      dom.setAttribute(el3,"alt","COS logo");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" Open Science Framework");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes() { return []; },
    statements: [

    ],
    locals: [],
    templates: []
  };
}()));