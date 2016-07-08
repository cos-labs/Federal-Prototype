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
          "line": 6,
          "column": 6
        }
      },
      "moduleName": "ostp-files-ember-v2/templates/components/meta-data.hbs"
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
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","form-table");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      dom.setAttribute(el2,"class","btn btn-primary btn-lg btn-block meataData");
      var el3 = dom.createTextNode(" Submit Document ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [2]);
      var element1 = dom.childAt(element0, [3]);
      var morphs = new Array(3);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      morphs[1] = dom.createMorphAt(element0,1,1);
      morphs[2] = dom.createElementMorph(element1);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["content","yield",["loc",[null,[1,0],[1,9]]]],
      ["inline","dynamic-form",[],["schema",["subexpr","@mut",[["get","schema",["loc",[null,[3,24],[3,30]]]]],[],[]]],["loc",[null,[3,2],[3,32]]]],
      ["element","action",["validateForm",["get","model",["loc",[null,[4,86],[4,91]]]]],[],["loc",[null,[4,62],[4,93]]]]
    ],
    locals: [],
    templates: []
  };
}()));