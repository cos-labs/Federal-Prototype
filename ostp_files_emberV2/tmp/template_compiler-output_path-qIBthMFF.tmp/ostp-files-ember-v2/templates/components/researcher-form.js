export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 6
            },
            "end": {
              "line": 10,
              "column": 6
            }
          },
          "moduleName": "ostp-files-ember-v2/templates/components/researcher-form.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'value');
          morphs[1] = dom.createAttrMorph(element0, 'selected');
          morphs[2] = dom.createMorphAt(element0,0,0);
          return morphs;
        },
        statements: [
          ["attribute","value",["get","departmentChoice",["loc",[null,[9,24],[9,40]]]]],
          ["attribute","selected",["subexpr","eq",[["get","department",["loc",[null,[9,57],[9,67]]]],["get","departmentChoice",["loc",[null,[9,68],[9,84]]]]],[],["loc",[null,[9,52],[9,86]]]]],
          ["content","departmentChoice",["loc",[null,[9,87],[9,107]]]]
        ],
        locals: ["departmentChoice"],
        templates: []
      };
    }());
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 6,
            "column": 4
          },
          "end": {
            "line": 12,
            "column": 4
          }
        },
        "moduleName": "ostp-files-ember-v2/templates/components/researcher-form.hbs"
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("select");
        dom.setAttribute(el1,"class","departmentSelect select");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [1]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element1, 'onchange');
        morphs[1] = dom.createMorphAt(element1,1,1);
        return morphs;
      },
      statements: [
        ["attribute","onchange",["subexpr","action",["selectDepartment",["get","g",["loc",[null,[7,81],[7,82]]]]],[],["loc",[null,[7,53],[7,84]]]]],
        ["block","each",[["get","departments",["loc",[null,[8,14],[8,25]]]]],[],0,null,["loc",[null,[8,6],[10,15]]]]
      ],
      locals: ["g"],
      templates: [child0]
    };
  }());
  var child1 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 20,
              "column": 8
            },
            "end": {
              "line": 23,
              "column": 8
            }
          },
          "moduleName": "ostp-files-ember-v2/templates/components/researcher-form.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("           ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          dom.setAttribute(el1,"class","inline-block");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
          morphs[1] = dom.createMorphAt(fragment,3,3,contextualElement);
          return morphs;
        },
        statements: [
          ["content","g.grantDepartmentName",["loc",[null,[21,36],[21,61]]]],
          ["inline","input",[],["type","text","name","department","class","grantNumber","placeholder","Grand Number","value",["subexpr","@mut",[["get","model.grantNumber",["loc",[null,[22,101],[22,118]]]]],[],[]]],["loc",[null,[22,10],[22,121]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 19,
            "column": 8
          },
          "end": {
            "line": 24,
            "column": 8
          }
        },
        "moduleName": "ostp-files-ember-v2/templates/components/researcher-form.hbs"
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","g.grantDepartmentName",["loc",[null,[20,14],[20,35]]]]],[],0,null,["loc",[null,[20,8],[23,15]]]]
      ],
      locals: ["g"],
      templates: [child0]
    };
  }());
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
          "line": 34,
          "column": 0
        }
      },
      "moduleName": "ostp-files-ember-v2/templates/components/researcher-form.hbs"
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
      var el2 = dom.createTextNode("\n\n\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","dropdownHolder");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      dom.setAttribute(el2,"class","btn btn-success  addfunding");
      var el3 = dom.createTextNode("Add more Funding Options");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","grantNumberHolder");
      var el3 = dom.createTextNode("\n      ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","text-center grantNumber");
      var el4 = dom.createTextNode("\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n   ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      dom.setAttribute(el2,"class","btn btn-primary btn-lg btn-block meataData");
      var el3 = dom.createTextNode(" Next ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element2 = dom.childAt(fragment, [2]);
      var element3 = dom.childAt(element2, [3]);
      var element4 = dom.childAt(element2, [11]);
      var morphs = new Array(7);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      morphs[1] = dom.createMorphAt(dom.childAt(element2, [1]),1,1);
      morphs[2] = dom.createElementMorph(element3);
      morphs[3] = dom.createMorphAt(dom.childAt(element2, [5, 1]),1,1);
      morphs[4] = dom.createMorphAt(element2,7,7);
      morphs[5] = dom.createMorphAt(element2,9,9);
      morphs[6] = dom.createElementMorph(element4);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["content","yield",["loc",[null,[1,0],[1,9]]]],
      ["block","each",[["get","model",["loc",[null,[6,12],[6,17]]]]],[],0,null,["loc",[null,[6,4],[12,13]]]],
      ["element","action",["addDropDown"],[],["loc",[null,[15,46],[15,71]]]],
      ["block","each",[["get","model",["loc",[null,[19,16],[19,21]]]]],[],1,null,["loc",[null,[19,8],[24,17]]]],
      ["content","file-chooser",["loc",[null,[28,2],[28,18]]]],
      ["content","file-renderer",["loc",[null,[29,2],[29,19]]]],
      ["element","action",["validateForm",["get","model",["loc",[null,[31,87],[31,92]]]]],[],["loc",[null,[31,63],[31,94]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));