define("ember-osf/components/login-form/template", ["exports"], function (exports) {
  "use strict";

  exports["default"] = Ember.HTMLBars.template((function () {
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
            "line": 52,
            "column": 0
          }
        },
        "moduleName": "modules/ember-osf/components/login-form/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("article");
        dom.setAttribute(el1, "class", "login-form");
        dom.setAttribute(el1, "role", "region");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-5 col-sm-offset-1 toggle-box toggle-box-left p-h-lg");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("form");
        dom.setAttribute(el3, "class", "form-horizontal");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        dom.setAttribute(el4, "class", "m-b-lg");
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "form-group");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        dom.setAttribute(el5, "class", "col-sm-3 control-label");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "col-sm-9");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("input");
        dom.setAttribute(el6, "type", "email");
        dom.setAttribute(el6, "class", "form-control");
        dom.setAttribute(el6, "name", "username");
        dom.setAttribute(el6, "autofocus", "");
        dom.setAttribute(el6, "required", "");
        dom.setAttribute(el6, "aria-required", "true");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "form-group");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        dom.setAttribute(el5, "class", "col-sm-3 control-label");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "col-sm-9");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("input");
        dom.setAttribute(el6, "type", "password");
        dom.setAttribute(el6, "class", "form-control");
        dom.setAttribute(el6, "name", "password");
        dom.setAttribute(el6, "required", "");
        dom.setAttribute(el6, "aria-required", "true");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "form-group");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "col-sm-offset-3 col-sm-9");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "checkbox");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("label");
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("input");
        dom.setAttribute(el8, "type", "checkbox");
        dom.setAttribute(el8, "name", "rememberMe");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                        ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "form-group");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "col-sm-offset-3 col-sm-9");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("button");
        dom.setAttribute(el6, "type", "submit");
        dom.setAttribute(el6, "class", "btn btn-success pull-right");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1, 1]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element1, [3]);
        var element4 = dom.childAt(element3, [1]);
        var element5 = dom.childAt(element3, [3, 1]);
        var element6 = dom.childAt(element1, [5]);
        var element7 = dom.childAt(element6, [1]);
        var element8 = dom.childAt(element6, [3, 1]);
        var element9 = dom.childAt(element1, [7, 1, 1, 1]);
        var element10 = dom.childAt(element9, [1]);
        var morphs = new Array(17);
        morphs[0] = dom.createAttrMorph(element0, 'aria-labelledby');
        morphs[1] = dom.createAttrMorph(element1, 'id');
        morphs[2] = dom.createAttrMorph(element2, 'id');
        morphs[3] = dom.createMorphAt(element2, 1, 1);
        morphs[4] = dom.createAttrMorph(element4, 'for');
        morphs[5] = dom.createMorphAt(element4, 0, 0);
        morphs[6] = dom.createAttrMorph(element5, 'id');
        morphs[7] = dom.createAttrMorph(element5, 'placeholder');
        morphs[8] = dom.createAttrMorph(element7, 'for');
        morphs[9] = dom.createMorphAt(element7, 0, 0);
        morphs[10] = dom.createAttrMorph(element8, 'id');
        morphs[11] = dom.createAttrMorph(element8, 'placeholder');
        morphs[12] = dom.createAttrMorph(element9, 'for');
        morphs[13] = dom.createAttrMorph(element10, 'id');
        morphs[14] = dom.createMorphAt(element9, 3, 3);
        morphs[15] = dom.createMorphAt(dom.childAt(element1, [9, 1, 1]), 0, 0);
        morphs[16] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["attribute", "aria-labelledby", ["subexpr", "elem-id", [["get", "this", ["loc", [null, [1, 68], [1, 72]]]], "login-heading-title"], [], ["loc", [null, [1, 58], [1, 96]]]]], ["attribute", "id", ["subexpr", "elem-id", [["get", "this", ["loc", [null, [3, 27], [3, 31]]]], "login-form"], [], ["loc", [null, [3, 17], [3, 46]]]]], ["attribute", "id", ["subexpr", "elem-id", [["get", "this", ["loc", [null, [4, 44], [4, 48]]]], "login-heading-title"], [], ["loc", [null, [4, 34], [4, 72]]]]], ["inline", "t", ["eosf.loginForm.headingTitle"], [], ["loc", [null, [4, 74], [4, 109]]]], ["attribute", "for", ["subexpr", "elem-id", [["get", "this", ["loc", [null, [6, 37], [6, 41]]]], "login-input-email"], [], ["loc", [null, [6, 27], [6, 63]]]]], ["inline", "t", ["eosf.loginForm.labelInputEmail"], [], ["loc", [null, [6, 95], [6, 133]]]], ["attribute", "id", ["subexpr", "elem-id", [["get", "this", ["loc", [null, [12, 33], [12, 37]]]], "login-input-email"], [], ["loc", [null, [12, 23], [12, 59]]]]], ["attribute", "placeholder", ["subexpr", "t", ["eosf.loginForm.labelInputEmail"], [], ["loc", [null, [13, 32], [13, 70]]]]], ["attribute", "for", ["subexpr", "elem-id", [["get", "this", ["loc", [null, [21, 37], [21, 41]]]], "login-input-password"], [], ["loc", [null, [21, 27], [21, 66]]]]], ["inline", "t", ["eosf.loginForm.labelInputPassword"], [], ["loc", [null, [21, 98], [21, 139]]]], ["attribute", "id", ["subexpr", "elem-id", [["get", "this", ["loc", [null, [26, 33], [26, 37]]]], "login-input-password"], [], ["loc", [null, [26, 23], [26, 62]]]]], ["attribute", "placeholder", ["subexpr", "t", ["eosf.loginForm.labelInputPassword"], [], ["loc", [null, [27, 32], [27, 73]]]]], ["attribute", "for", ["subexpr", "elem-id", [["get", "this", ["loc", [null, [37, 45], [37, 49]]]], "login-input-remember"], [], ["loc", [null, [37, 35], [37, 74]]]]], ["attribute", "id", ["subexpr", "elem-id", [["get", "this", ["loc", [null, [38, 64], [38, 68]]]], "login-input-remember"], [], ["loc", [null, [38, 54], [38, 93]]]]], ["inline", "t", ["eosf.loginForm.labelInputRemember"], [], ["loc", [null, [38, 113], [38, 154]]]], ["inline", "t", ["eosf.loginForm.buttonSubmit"], [], ["loc", [null, [45, 77], [45, 112]]]], ["content", "yield", ["loc", [null, [50, 4], [50, 13]]]]],
      locals: [],
      templates: []
    };
  })());
});