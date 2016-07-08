export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "triple-curlies"
      },
      "revision": "Ember@2.6.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 3,
          "column": 0
        }
      },
      "moduleName": "modules/ember-osf/components/file-renderer/template.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("iframe");
      dom.setAttribute(el1,"scrolling","no");
      dom.setAttribute(el1,"marginheight","0");
      dom.setAttribute(el1,"frameborder","0");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var morphs = new Array(3);
      morphs[0] = dom.createAttrMorph(element0, 'src');
      morphs[1] = dom.createAttrMorph(element0, 'width');
      morphs[2] = dom.createAttrMorph(element0, 'height');
      return morphs;
    },
    statements: [
      ["attribute","src",["get","mfrUrl",["loc",[null,[1,14],[1,20]]]]],
      ["attribute","width",["get","width",["loc",[null,[1,31],[1,36]]]]],
      ["attribute","height",["get","height",["loc",[null,[1,48],[1,54]]]]]
    ],
    locals: [],
    templates: []
  };
}()));