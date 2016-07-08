export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 11,
            "column": 16
          },
          "end": {
            "line": 17,
            "column": 16
          }
        },
        "moduleName": "modules/ember-osf/components/osf-navbar/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("span");
        dom.setAttribute(el1,"class","visible-xs");
        dom.setAttribute(el1,"data-bind","click : toggleSearch, css: searchCSS");
        var el2 = dom.createTextNode("\n                        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"class","osf-xs-search pull-right");
        dom.setAttribute(el2,"style","padding-top: 12px");
        var el3 = dom.createTextNode("\n                            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3,"rel","tooltip");
        dom.setAttribute(el3,"data-placement","bottom");
        dom.setAttribute(el3,"title","Search OSF");
        dom.setAttribute(el3,"class","fa fa-search fa-lg fa-inverse");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                        ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element12 = dom.childAt(fragment, [1, 1]);
        var morphs = new Array(1);
        morphs[0] = dom.createElementMorph(element12);
        return morphs;
      },
      statements: [
        ["element","action",["toggleSearch"],[],["loc",[null,[13,60],[13,85]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  var child1 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 23,
            "column": 20
          },
          "end": {
            "line": 26,
            "column": 20
          }
        },
        "moduleName": "modules/ember-osf/components/osf-navbar/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("li");
        dom.setAttribute(el1,"id","osfNavDashboard");
        var el2 = dom.createElement("a");
        var el3 = dom.createTextNode("Dashboard");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n                        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("li");
        dom.setAttribute(el1,"id","osfNavMyProjects");
        var el2 = dom.createElement("a");
        var el3 = dom.createTextNode("My Projects");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element10 = dom.childAt(fragment, [1, 0]);
        var element11 = dom.childAt(fragment, [3, 0]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element10, 'href');
        morphs[1] = dom.createAttrMorph(element11, 'href');
        return morphs;
      },
      statements: [
        ["attribute","href",["get","host",["loc",[null,[24,59],[24,63]]]]],
        ["attribute","href",["concat",[["get","host",["loc",[null,[25,61],[25,65]]]],"myprojects/"]]]
      ],
      locals: [],
      templates: []
    };
  }());
  var child2 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 35,
            "column": 20
          },
          "end": {
            "line": 39,
            "column": 20
          }
        },
        "moduleName": "modules/ember-osf/components/osf-navbar/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("li");
        dom.setAttribute(el1,"class","dropdown");
        var el2 = dom.createTextNode("\n                            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"href","${domain}support/");
        var el3 = dom.createTextNode("Support");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                        ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
  var child3 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 41,
            "column": 20
          },
          "end": {
            "line": 47,
            "column": 20
          }
        },
        "moduleName": "modules/ember-osf/components/osf-navbar/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("li");
        dom.setAttribute(el1,"class","hidden-xs");
        dom.setAttribute(el1,"css:","");
        dom.setAttribute(el1,"searchCSS","");
        var el2 = dom.createTextNode("\n                            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"class","");
        var el3 = dom.createTextNode("\n                                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3,"rel","tooltip");
        dom.setAttribute(el3,"data-placement","bottom");
        dom.setAttribute(el3,"title","Search OSF");
        dom.setAttribute(el3,"class","fa fa-search fa-lg");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                            ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                        ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element9 = dom.childAt(fragment, [1, 1]);
        var morphs = new Array(1);
        morphs[0] = dom.createAttrMorph(element9, 'onclick');
        return morphs;
      },
      statements: [
        ["attribute","onclick",["subexpr","action",["toggleSearch"],[],["loc",[null,[43,39],[43,64]]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  var child4 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 48,
            "column": 20
          },
          "end": {
            "line": 74,
            "column": 20
          }
        },
        "moduleName": "modules/ember-osf/components/osf-navbar/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("li");
        dom.setAttribute(el1,"class","dropdown");
        var el2 = dom.createTextNode("\n                            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"href","#");
        dom.setAttribute(el2,"class","dropdown-toggle nav-user-dropdown");
        dom.setAttribute(el2,"data-toggle","dropdown");
        dom.setAttribute(el2,"role","button");
        dom.setAttribute(el2,"aria-expanded","false");
        var el3 = dom.createTextNode("\n                                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3,"class","osf-gravatar");
        var el4 = dom.createTextNode("\n                                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"alt","User gravatar");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                                ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3,"class","caret");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                            ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        dom.setAttribute(el2,"class","dropdown-menu");
        dom.setAttribute(el2,"role","menu");
        var el3 = dom.createTextNode("\n                                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("\n                                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","fa fa-user fa-lg p-r-xs");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" My Profile");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                                ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("\n                                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","fa fa-life-ring fa-lg p-r-xs");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" Support");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                                ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n                                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("\n                                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","fa fa-cog fa-lg p-r-xs");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" Settings");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                                ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("\n                                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","fa fa-sign-out fa-lg p-r-xs");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" Log out");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                                ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n                            ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                        ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [1]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element2, [1, 1]);
        var element4 = dom.childAt(element1, [3]);
        var element5 = dom.childAt(element4, [1, 1]);
        var element6 = dom.childAt(element4, [3, 1]);
        var element7 = dom.childAt(element4, [5, 1]);
        var element8 = dom.childAt(element4, [7, 1]);
        var morphs = new Array(6);
        morphs[0] = dom.createAttrMorph(element3, 'src');
        morphs[1] = dom.createMorphAt(element2,3,3);
        morphs[2] = dom.createAttrMorph(element5, 'href');
        morphs[3] = dom.createAttrMorph(element6, 'href');
        morphs[4] = dom.createAttrMorph(element7, 'href');
        morphs[5] = dom.createAttrMorph(element8, 'onclick');
        return morphs;
      },
      statements: [
        ["attribute","src",["get","gravatarUrl",["loc",[null,[53,47],[53,58]]]]],
        ["content","user.fullName",["loc",[null,[54,40],[54,57]]]],
        ["attribute","href",["concat",[["get","host",["loc",[null,[59,47],[59,51]]]],"profile/"]]],
        ["attribute","href",["concat",[["get","host",["loc",[null,[62,47],[62,51]]]],"support/"]]],
        ["attribute","href",["concat",[["get","host",["loc",[null,[66,47],[66,51]]]],"settings/"]]],
        ["attribute","onclick",["subexpr","action",["logout"],[],["loc",[null,[69,47],[69,66]]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  var child5 = (function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.1",
            "loc": {
              "source": null,
              "start": {
                "line": 75,
                "column": 24
              },
              "end": {
                "line": 83,
                "column": 24
              }
            },
            "moduleName": "modules/ember-osf/components/osf-navbar/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1,"class","dropdown sign-in");
            dom.setAttribute(el1,"data-bind","with: $root.signIn");
            var el2 = dom.createTextNode("\n                                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","btn-group");
            var el3 = dom.createTextNode("\n                                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("a");
            dom.setAttribute(el3,"href","${domain}login/?campaign=institution&redirect_url=${redirect_url}");
            dom.setAttribute(el3,"class","btn btn-info btn-top-login");
            var el4 = dom.createTextNode("\n                                        Sign in ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("span");
            dom.setAttribute(el4,"class","hidden-xs");
            var el5 = dom.createElement("i");
            dom.setAttribute(el5,"class","fa fa-arrow-right");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                                    ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                                ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() { return []; },
          statements: [

          ],
          locals: [],
          templates: []
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
                  "line": 84,
                  "column": 28
                },
                "end": {
                  "line": 92,
                  "column": 28
                }
              },
              "moduleName": "modules/ember-osf/components/osf-navbar/template.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              dom.setAttribute(el1,"class","dropdown sign-in");
              var el2 = dom.createTextNode("\n                                    ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2,"class","col-sm-12");
              var el3 = dom.createTextNode("\n                                        ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("button");
              dom.setAttribute(el3,"class","btn btn-success btn-top-signup m-r-xs");
              var el4 = dom.createTextNode("\n                                            Login\n                                        ");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n                                    ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n                                ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [1, 1, 1]);
              var morphs = new Array(1);
              morphs[0] = dom.createAttrMorph(element0, 'onclick');
              return morphs;
            },
            statements: [
              ["attribute","onclick",["subexpr","action",["login"],["target",["get","popup",["loc",[null,[87,126],[87,131]]]]],["loc",[null,[87,102],[87,133]]]]]
            ],
            locals: ["popup"],
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
                "line": 83,
                "column": 24
              },
              "end": {
                "line": 114,
                "column": 24
              }
            },
            "moduleName": "modules/ember-osf/components/osf-navbar/template.hbs"
          },
          isEmpty: false,
          arity: 0,
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
            ["block","oauth-popup",[],["authUrl",["subexpr","@mut",[["get","authUrl",["loc",[null,[84,51],[84,58]]]]],[],[]],"loginSuccess",["subexpr","action",["loginSuccess"],[],["loc",[null,[84,72],[84,95]]]],"loginFail",["subexpr","action",["loginFail"],[],["loc",[null,[84,106],[84,126]]]]],0,null,["loc",[null,[84,28],[92,44]]]]
          ],
          locals: [],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 74,
              "column": 20
            },
            "end": {
              "line": 115,
              "column": 20
            }
          },
          "moduleName": "modules/ember-osf/components/osf-navbar/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["block","if",[["get","institution",["loc",[null,[75,30],[75,41]]]]],[],0,1,["loc",[null,[75,24],[114,31]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 74,
            "column": 20
          },
          "end": {
            "line": 115,
            "column": 20
          }
        },
        "moduleName": "modules/ember-osf/components/osf-navbar/template.hbs"
      },
      isEmpty: false,
      arity: 0,
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
        ["block","if",[["get","allowLogin",["loc",[null,[74,30],[74,40]]]]],[],0,null,["loc",[null,[74,20],[115,20]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
  var child6 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 121,
              "column": 8
            },
            "end": {
              "line": 122,
              "column": 8
            }
          },
          "moduleName": "modules/ember-osf/components/osf-navbar/template.hbs"
        },
        isEmpty: true,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

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
            "line": 120,
            "column": 4
          },
          "end": {
            "line": 123,
            "column": 4
          }
        },
        "moduleName": "modules/ember-osf/components/osf-navbar/template.hbs"
      },
      isEmpty: false,
      arity: 0,
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
        ["block","search-dropdown",[],["action","toggleSearch"],0,null,["loc",[null,[121,8],[122,28]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
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
          "line": 125,
          "column": 0
        }
      },
      "moduleName": "modules/ember-osf/components/osf-navbar/template.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","osf-nav-wrapper");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("nav");
      dom.setAttribute(el2,"class","navbar navbar-inverse navbar-fixed-top");
      dom.setAttribute(el2,"id","navbarScope");
      dom.setAttribute(el2,"role","navigation");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","container");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","navbar-header");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("button");
      dom.setAttribute(el5,"type","button");
      dom.setAttribute(el5,"class","navbar-toggle collapsed");
      dom.setAttribute(el5,"data-toggle","collapse");
      dom.setAttribute(el5,"data-target","#navbar");
      dom.setAttribute(el5,"aria-expanded","false");
      dom.setAttribute(el5,"aria-controls","navbar");
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("span");
      dom.setAttribute(el6,"class","sr-only");
      var el7 = dom.createTextNode("Toggle navigation");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("span");
      dom.setAttribute(el6,"class","icon-bar");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("span");
      dom.setAttribute(el6,"class","icon-bar");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("span");
      dom.setAttribute(el6,"class","icon-bar");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("a");
      dom.setAttribute(el5,"class","navbar-brand hidden-sm hidden-xs");
      dom.setAttribute(el5,"href","/");
      var el6 = dom.createElement("span");
      dom.setAttribute(el6,"class","osf-navbar-logo");
      dom.setAttribute(el6,"width","27");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" Open Science Framework");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("a");
      dom.setAttribute(el5,"class","navbar-brand visible-sm visible-xs");
      dom.setAttribute(el5,"href","/");
      var el6 = dom.createElement("span");
      dom.setAttribute(el6,"class","osf-navbar-logo");
      dom.setAttribute(el6,"width","27");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" OSF");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"id","navbar");
      dom.setAttribute(el4,"class","navbar-collapse collapse navbar-right");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("ul");
      dom.setAttribute(el5,"class","nav navbar-nav");
      var el6 = dom.createTextNode("\n");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("li");
      dom.setAttribute(el6,"class","dropdown");
      var el7 = dom.createTextNode("\n                        ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("a");
      dom.setAttribute(el7,"href","#");
      dom.setAttribute(el7,"class","dropdown-toggle");
      dom.setAttribute(el7,"data-toggle","dropdown");
      dom.setAttribute(el7,"role","button");
      dom.setAttribute(el7,"aria-expanded","false");
      var el8 = dom.createTextNode("Browse ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("span");
      dom.setAttribute(el8,"class","caret");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n                        ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("ul");
      dom.setAttribute(el7,"class","dropdown-menu");
      dom.setAttribute(el7,"role","menu");
      var el8 = dom.createTextNode("\n                            ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("li");
      var el9 = dom.createElement("a");
      var el10 = dom.createTextNode("New Projects");
      dom.appendChild(el9, el10);
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n                            ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("li");
      var el9 = dom.createElement("a");
      var el10 = dom.createTextNode("Registry");
      dom.appendChild(el9, el10);
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n                            ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("li");
      var el9 = dom.createElement("a");
      var el10 = dom.createTextNode("Meetings");
      dom.appendChild(el9, el10);
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n                        ");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n                    ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("                ");
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
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element13 = dom.childAt(fragment, [0]);
      var element14 = dom.childAt(element13, [1, 1]);
      var element15 = dom.childAt(element14, [3, 1]);
      var element16 = dom.childAt(element15, [3, 3]);
      var element17 = dom.childAt(element16, [1, 0]);
      var element18 = dom.childAt(element16, [3, 0]);
      var element19 = dom.childAt(element16, [5, 0]);
      var morphs = new Array(9);
      morphs[0] = dom.createMorphAt(dom.childAt(element14, [1]),3,3);
      morphs[1] = dom.createMorphAt(element15,1,1);
      morphs[2] = dom.createAttrMorph(element17, 'href');
      morphs[3] = dom.createAttrMorph(element18, 'href');
      morphs[4] = dom.createAttrMorph(element19, 'href');
      morphs[5] = dom.createMorphAt(element15,5,5);
      morphs[6] = dom.createMorphAt(element15,7,7);
      morphs[7] = dom.createMorphAt(element15,8,8);
      morphs[8] = dom.createMorphAt(element13,3,3);
      return morphs;
    },
    statements: [
      ["block","unless",[["get","onSearchPage",["loc",[null,[11,27],[11,39]]]]],[],0,null,["loc",[null,[11,16],[17,27]]]],
      ["block","if",[["get","session.isAuthenticated",["loc",[null,[23,26],[23,49]]]]],[],1,null,["loc",[null,[23,20],[26,27]]]],
      ["attribute","href",["concat",[["get","host",["loc",[null,[30,43],[30,47]]]],"explore/activity/"]]],
      ["attribute","href",["concat",[["get","host",["loc",[null,[31,43],[31,47]]]],"search/?q=*&filter=registration"]]],
      ["attribute","href",["concat",[["get","host",["loc",[null,[32,43],[32,47]]]],"meetings/"]]],
      ["block","unless",[["get","session.isAuthenticated",["loc",[null,[35,31],[35,54]]]]],[],2,null,["loc",[null,[35,20],[39,31]]]],
      ["block","unless",[["get","onSearchPage",["loc",[null,[41,31],[41,43]]]]],[],3,null,["loc",[null,[41,20],[47,31]]]],
      ["block","if",[["get","session.isAuthenticated",["loc",[null,[48,27],[48,50]]]]],[],4,5,["loc",[null,[48,20],[115,27]]]],
      ["block","if",[["get","showSearch",["loc",[null,[120,10],[120,20]]]]],[],6,null,["loc",[null,[120,4],[123,11]]]]
    ],
    locals: [],
    templates: [child0, child1, child2, child3, child4, child5, child6]
  };
}()));