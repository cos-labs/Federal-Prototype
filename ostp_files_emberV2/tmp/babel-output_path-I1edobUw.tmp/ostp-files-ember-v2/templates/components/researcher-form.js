define("ostp-files-ember-v2/templates/components/researcher-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 6
            },
            "end": {
              "line": 9,
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
          morphs[0] = dom.createAttrMorph(element0, 'selected');
          morphs[1] = dom.createAttrMorph(element0, 'value');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "selected", ["subexpr", "eq", [["get", "department", ["loc", [null, [8, 30], [8, 40]]]], ["get", "departmentChoice", ["loc", [null, [8, 41], [8, 57]]]]], [], ["loc", [null, [8, 25], [8, 59]]]]], ["attribute", "value", ["get", "departmentChoice", ["loc", [null, [8, 68], [8, 84]]]]], ["content", "departmentChoice.name", ["loc", [null, [8, 87], [8, 112]]]]],
        locals: ["departmentChoice"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 22,
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
        dom.setAttribute(el1, "class", "form-table");
        var el2 = dom.createTextNode("\n\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "dropdownHolder");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("select");
        dom.setAttribute(el3, "class", "departmentSelect select");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "btn btn-success addFunding");
        var el3 = dom.createTextNode("Submit Grant Information");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
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
        dom.setAttribute(el2, "class", "btn btn-primary btn-lg btn-block metaData");
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
        var element1 = dom.childAt(fragment, [2]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element2, [1]);
        var element4 = dom.childAt(element1, [3]);
        var element5 = dom.childAt(element1, [9]);
        var morphs = new Array(8);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createAttrMorph(element3, 'onchange');
        morphs[2] = dom.createMorphAt(element3, 1, 1);
        morphs[3] = dom.createMorphAt(element2, 3, 3);
        morphs[4] = dom.createElementMorph(element4);
        morphs[5] = dom.createMorphAt(element1, 5, 5);
        morphs[6] = dom.createMorphAt(element1, 7, 7);
        morphs[7] = dom.createElementMorph(element5);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]], ["attribute", "onchange", ["subexpr", "action", ["selectDepartment"], ["value", "target.value"], ["loc", [null, [6, 53], [6, 103]]]]], ["block", "each", [["get", "model.departments", ["loc", [null, [7, 14], [7, 31]]]]], [], 0, null, ["loc", [null, [7, 6], [9, 15]]]], ["inline", "input", [], ["type", "text", "name", "department", "class", "grantNumber", "placeholder", "Grant Number", "key-press", "updateGrantNumber"], ["loc", [null, [11, 4], [11, 132]]]], ["element", "action", ["submit"], [], ["loc", [null, [14, 45], [14, 64]]]], ["content", "file-chooser", ["loc", [null, [16, 2], [16, 18]]]], ["content", "file-renderer", ["loc", [null, [17, 2], [17, 19]]]], ["element", "action", ["validateForm", ["get", "model", ["loc", [null, [19, 86], [19, 91]]]]], [], ["loc", [null, [19, 62], [19, 93]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});