// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
"use strict";

var Assets = require("Assets");
var Js_boolean = require("bs-platform/lib/js/js_boolean.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Base = require("./styled/Base");
var Icon = require("./styled/Icon");
var Js_null_undefined = require("bs-platform/lib/js/js_null_undefined.js");
var Touchable = require("./styled/Touchable");

function make(disabled, left, right, onPress, children) {
  return ReasonReact.wrapJsForReason(
    Touchable.default,
    {
      disabled: Js_boolean.to_js_boolean(disabled),
      left: Js_boolean.to_js_boolean(left),
      right: Js_boolean.to_js_boolean(right),
      onPress: onPress,
    },
    children
  );
}

var Touchable$1 = /* module */ [/* make */ make];

function make$1(disabled, children) {
  return ReasonReact.wrapJsForReason(
    Base.default,
    {
      disabled: Js_boolean.to_js_boolean(disabled),
    },
    children
  );
}

var Base$1 = /* module */ [/* make */ make$1];

function make$2(source, resizeMode, disabled, children) {
  return ReasonReact.wrapJsForReason(
    Icon.default,
    {
      disabled: Js_boolean.to_js_boolean(disabled),
      source: Js_null_undefined.from_opt(source),
      resizeMode: Js_null_undefined.from_opt(resizeMode),
    },
    children
  );
}

var Icon$1 = /* module */ [/* make */ make$2];

var Styled = /* module */ [
  /* Touchable */ Touchable$1,
  /* Base */ Base$1,
  /* Icon */ Icon$1,
];

var component = ReasonReact.statelessComponent("IntensityButton");

function make$3(onPress, action, disabled, _) {
  var newrecord = component.slice();
  newrecord[/* render */ 9] = function() {
    var match = +(action === "decrement");
    return ReasonReact.element(
      /* None */ 0,
      /* None */ 0,
      make(
        disabled,
        +(action === "decrement"),
        +(action === "increment"),
        onPress,
        /* array */ [
          ReasonReact.element(
            /* None */ 0,
            /* None */ 0,
            make$1(
              disabled,
              /* array */ [
                ReasonReact.element(
                  /* None */ 0,
                  /* None */ 0,
                  make$2(
                    /* Some */ [
                      match !== 0
                        ? Assets.Icons.arrowLeft
                        : Assets.Icons.arrowRight,
                    ],
                    /* Some */ ["contain"],
                    disabled,
                    /* array */ []
                  )
                ),
              ]
            )
          ),
        ]
      )
    );
  };
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, function(jsProps) {
  return make$3(
    jsProps.onPress,
    jsProps.action,
    jsProps.disabled,
    /* array */ []
  );
});

exports.Styled = Styled;
exports.component = component;
exports.make = make$3;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* component Not a pure module */
