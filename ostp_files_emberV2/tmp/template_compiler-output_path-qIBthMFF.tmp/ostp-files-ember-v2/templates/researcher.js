export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "wrong-type",
          "multiple-nodes"
        ]
      },
      "revision": "Ember@2.6.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 4,
          "column": 0
        }
      },
      "moduleName": "ostp-files-ember-v2/templates/researcher.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(3);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
      morphs[2] = dom.createMorphAt(fragment,4,4,contextualElement);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["content","outlet",["loc",[null,[1,0],[1,10]]]],
      ["content","researcher-status-header",["loc",[null,[2,0],[2,28]]]],
      ["inline","researcher-form",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[3,24],[3,29]]]]],[],[]],"data",["subexpr","@mut",[["get","model",["loc",[null,[3,35],[3,40]]]]],[],[]]],["loc",[null,[3,0],[3,42]]]]
    ],
    locals: [],
    templates: []
  };
}()));