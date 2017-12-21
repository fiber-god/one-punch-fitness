// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
"use strict";

var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Timer = require("./components/Timer/Timer.bs.js");
var Assets = require("Assets");
var Colors = require("../../config/Colors.bs.js");
var Stores = require("../../state/Stores.bs.js");
var Routines = require("../../config/Routines.bs.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var NPMBindings = require("../../config/NPMBindings.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var ActionButton = require("./components/ActionButton/ActionButton.bs.js");
var SessionControl = require("./components/SessionControl/SessionControl.bs.js");
var Style$BsReactNative = require("bs-react-native/src/style.js");
var ScrollView$BsReactNative = require("bs-react-native/src/components/scrollView.js");
var Image = require("./components/styled/Image");
var SetReps = require("./components/styled/SetReps");
var SetType = require("./components/styled/SetType");
var Progress = require("./components/styled/Progress");
var Container = require("./components/styled/Container");
var Background = require("./components/styled/Background");
var Group = require("./components/SessionControl/styled/Group");

function make(children) {
  return ReasonReact.wrapJsForReason(Background.default, {}, children);
}

var Background$1 = /* module */ [/* make */ make];

function make$1(children) {
  return ReasonReact.wrapJsForReason(Container.default, {}, children);
}

var Container$1 = /* module */ [/* make */ make$1];

function make$2(children) {
  return ReasonReact.wrapJsForReason(Progress.default, {}, children);
}

var Progress$1 = /* module */ [/* make */ make$2];

function make$3(children) {
  return ReasonReact.wrapJsForReason(SetType.default, {}, children);
}

var SetType$1 = /* module */ [/* make */ make$3];

function make$4(children) {
  return ReasonReact.wrapJsForReason(SetReps.default, {}, children);
}

var SetReps$1 = /* module */ [/* make */ make$4];

function make$5(children) {
  return ReasonReact.wrapJsForReason(Group.default, {}, children);
}

var SessionControlGroup = /* module */ [/* make */ make$5];

function make$6(source, resizeMode, children) {
  return ReasonReact.wrapJsForReason(
    Image.default,
    {
      source: source,
      resizeMode: resizeMode,
    },
    children
  );
}

var Image$1 = /* module */ [/* make */ make$6];

var Styled = /* module */ [
  /* Background */ Background$1,
  /* Container */ Container$1,
  /* Progress */ Progress$1,
  /* SetType */ SetType$1,
  /* SetReps */ SetReps$1,
  /* SessionControlGroup */ SessionControlGroup,
  /* Image */ Image$1,
];

var transitionLayout = /* int array */ [
  /* Image */ 0,
  /* Progress */ 1,
  /* SetInfo */ 2,
];

var sessionLayout = /* int array */ [
  /* SetInfo */ 2,
  /* Timer */ 4,
  /* Progress */ 1,
  /* SessionControls */ 3,
];

var workoutOrder = /* int array */ [
  /* PushUps */ 0,
  /* SitUps */ 1,
  /* Squats */ 2,
  /* Running */ 3,
];

function startTimer(self) {
  return setInterval(
    Curry._1(self[/* reduce */ 1], function() {
      return /* Tick */ 0;
    }),
    1000
  );
}

var component = ReasonReact.reducerComponent("WorkoutScreen");

function make$7(navigation, _) {
  var newrecord = component.slice();
  newrecord[/* didMount */ 4] = function() {
    console.log(
      "zero-based-level " +
        Pervasives.string_of_int(navigation.state.params.level)
    );
    return /* NoUpdate */ 0;
  };
  newrecord[/* willUnmount */ 6] = function(self) {
    var match = self[/* state */ 2][/* timer */ 0][/* handle */ 1];
    if (match) {
      clearInterval(match[0]);
      return /* () */ 0;
    } else {
      return /* () */ 0;
    }
  };
  newrecord[/* render */ 9] = function(self) {
    console.log(Stores.workout.bool);
    var match = self[/* state */ 2][/* inSession */ 1];
    var layout = match !== 0 ? sessionLayout : transitionLayout;
    var match$1 = self[/* state */ 2][/* inSession */ 1];
    return ReasonReact.element(
      /* None */ 0,
      /* None */ 0,
      make(
        /* array */ [
          ReasonReact.element(
            /* None */ 0,
            /* None */ 0,
            ScrollView$BsReactNative.make(
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* Some */ [
                Style$BsReactNative.style(
                  /* :: */ [Style$BsReactNative.flexGrow(1), /* [] */ 0]
                ),
              ],
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* Some */ [/* false */ 0],
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* Some */ [/* false */ 0],
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0
            )(
              /* array */ [
                ReasonReact.element(
                  /* None */ 0,
                  /* None */ 0,
                  make$1(
                    /* array */ [
                      $$Array.mapi(function(i, it) {
                        switch (it) {
                          case 0:
                            var match =
                              self[/* state */ 2][/* currentExercise */ 2];
                            var tmp;
                            switch (match) {
                              case 0:
                                tmp = Assets.Illustrations.pushups;
                                break;
                              case 1:
                                tmp = Assets.Illustrations.situps;
                                break;
                              case 2:
                                tmp = Assets.Illustrations.squats;
                                break;
                              case 3:
                                tmp = Assets.Illustrations.run;
                                break;
                            }
                            return ReasonReact.element(
                              /* Some */ [Pervasives.string_of_int(i)],
                              /* None */ 0,
                              make$6(tmp, "cover", /* array */ [])
                            );
                          case 1:
                            return ReasonReact.element(
                              /* Some */ [Pervasives.string_of_int(i)],
                              /* None */ 0,
                              make$2(
                                /* array */ [
                                  "set 1 of " +
                                    (Pervasives.string_of_int(
                                      Caml_array.caml_array_get(
                                        Routines.variations,
                                        navigation.state.params.level
                                      )[/* sitUps */ 1][/* sets */ 0]
                                    ) +
                                      ""),
                                ]
                              )
                            );
                          case 2:
                            var match$1 =
                              self[/* state */ 2][/* currentExercise */ 2];
                            var tmp$1;
                            switch (match$1) {
                              case 0:
                                tmp$1 = "push-ups";
                                break;
                              case 1:
                                tmp$1 = "sit-ups";
                                break;
                              case 2:
                                tmp$1 = "squats";
                                break;
                              case 3:
                                tmp$1 = "run";
                                break;
                            }
                            return ReasonReact.element(
                              /* Some */ [Pervasives.string_of_int(i)],
                              /* None */ 0,
                              make$3(
                                /* array */ [
                                  ReasonReact.element(
                                    /* None */ 0,
                                    /* None */ 0,
                                    make$4(
                                      /* array */ [
                                        Pervasives.string_of_int(
                                          Caml_array.caml_array_get(
                                            Routines.variations,
                                            navigation.state.params.level
                                          )[/* sitUps */ 1][/* reps */ 1]
                                        ),
                                      ]
                                    )
                                  ),
                                  " " + tmp$1,
                                ]
                              )
                            );
                          case 3:
                            var match$2 =
                              self[/* state */ 2][/* timer */ 0][/* status */ 2];
                            var match$3 =
                              self[/* state */ 2][/* timer */ 0][/* status */ 2];
                            return ReasonReact.element(
                              /* Some */ [Pervasives.string_of_int(i)],
                              /* None */ 0,
                              make$5(
                                /* array */ [
                                  ReasonReact.element(
                                    /* None */ 0,
                                    /* None */ 0,
                                    SessionControl.make(
                                      match$2 !== -276545362
                                        ? match$2 >= 373703110
                                          ? Curry._1(
                                              self[/* reduce */ 1],
                                              function() {
                                                return /* PauseTimer */ 2;
                                              }
                                            )
                                          : Curry._1(
                                              self[/* reduce */ 1],
                                              function() {
                                                return /* StartTimer */ Block.__(
                                                  0,
                                                  [
                                                    /* Some */ [
                                                      startTimer(self),
                                                    ],
                                                  ]
                                                );
                                              }
                                            )
                                        : Curry._1(
                                            self[/* reduce */ 1],
                                            function() {
                                              return /* ResumeTimer */ 3;
                                            }
                                          ),
                                      match$3 !== -276545362
                                        ? match$3 >= 373703110
                                          ? "PAUSE"
                                          : "START"
                                        : "RESUME",
                                      Colors.blueLeftUsTooSoon,
                                      /* array */ []
                                    )
                                  ),
                                  ReasonReact.element(
                                    /* None */ 0,
                                    /* None */ 0,
                                    SessionControl.make(
                                      Curry._1(
                                        self[/* reduce */ 1],
                                        function() {
                                          var match =
                                            self[/* state */ 2][/* timer */ 0][/* handle */ 1];
                                          if (match) {
                                            clearInterval(match[0]);
                                          }
                                          return /* StopTimer */ Block.__(1, [
                                            /* None */ 0,
                                          ]);
                                        }
                                      ),
                                      "STOP",
                                      Colors.bRED,
                                      /* array */ []
                                    )
                                  ),
                                ]
                              )
                            );
                          case 4:
                            return ReasonReact.element(
                              /* Some */ [Pervasives.string_of_int(i)],
                              /* None */ 0,
                              Timer.make(
                                self[/* state */ 2][/* timer */ 0][/* timeUsed */ 0],
                                /* array */ []
                              )
                            );
                        }
                      }, layout),
                      ReasonReact.element(
                        /* None */ 0,
                        /* None */ 0,
                        ActionButton.make(
                          Curry._1(self[/* reduce */ 1], function() {
                            if (self[/* state */ 2][/* inSession */ 1]) {
                              var match =
                                self[/* state */ 2][/* timer */ 0][/* handle */ 1];
                              if (match) {
                                clearInterval(match[0]);
                              } else {
                                Curry._2(
                                  self[/* reduce */ 1],
                                  function() {
                                    return /* StopTimer */ Block.__(1, [
                                      /* None */ 0,
                                    ]);
                                  },
                                  /* () */ 0
                                );
                              }
                            } else {
                              Curry._2(
                                self[/* reduce */ 1],
                                function() {
                                  return /* StartTimer */ Block.__(0, [
                                    /* Some */ [startTimer(self)],
                                  ]);
                                },
                                /* () */ 0
                              );
                            }
                            return /* ToggleSession */ 1;
                          }),
                          match$1 !== 0 ? "COMPLETE" : "GO",
                          /* array */ []
                        )
                      ),
                    ]
                  )
                ),
              ]
            )
          ),
        ]
      )
    );
  };
  newrecord[/* initialState */ 10] = function() {
    return /* record */ [
      /* timer : record */ [
        /* timeUsed */ 0,
        /* handle : None */ 0,
        /* status : active */ 373703110,
      ],
      /* inSession : false */ 0,
      /* currentExercise : PushUps */ 0,
    ];
  };
  newrecord[/* reducer */ 12] = function(action, state) {
    if (typeof action === "number") {
      switch (action) {
        case 0:
          if (
            state[/* timer */ 0][/* status */ 2] !== /* paused */ -276545362
          ) {
            Stores.workout.toggleBool();
            var init = state[/* timer */ 0];
            return /* Update */ Block.__(0, [
              /* record */ [
                /* timer : record */ [
                  /* timeUsed */ (state[/* timer */ 0][/* timeUsed */ 0] + 1) |
                    0,
                  /* handle */ init[/* handle */ 1],
                  /* status */ init[/* status */ 2],
                ],
                /* inSession */ state[/* inSession */ 1],
                /* currentExercise */ state[/* currentExercise */ 2],
              ],
            ]);
          } else {
            return /* NoUpdate */ 0;
          }
          break;
        case 1:
          return /* Update */ Block.__(0, [
            /* record */ [
              /* timer */ state[/* timer */ 0],
              /* inSession */ 1 - state[/* inSession */ 1],
              /* currentExercise */ state[/* currentExercise */ 2],
            ],
          ]);
        case 2:
          var init$1 = state[/* timer */ 0];
          return /* Update */ Block.__(0, [
            /* record */ [
              /* timer : record */ [
                /* timeUsed */ init$1[/* timeUsed */ 0],
                /* handle */ init$1[/* handle */ 1],
                /* status : paused */ -276545362,
              ],
              /* inSession */ state[/* inSession */ 1],
              /* currentExercise */ state[/* currentExercise */ 2],
            ],
          ]);
        case 3:
          var init$2 = state[/* timer */ 0];
          return /* Update */ Block.__(0, [
            /* record */ [
              /* timer : record */ [
                /* timeUsed */ init$2[/* timeUsed */ 0],
                /* handle */ init$2[/* handle */ 1],
                /* status : active */ 373703110,
              ],
              /* inSession */ state[/* inSession */ 1],
              /* currentExercise */ state[/* currentExercise */ 2],
            ],
          ]);
      }
    } else if (action.tag) {
      var init$3 = state[/* timer */ 0];
      return /* Update */ Block.__(0, [
        /* record */ [
          /* timer : record */ [
            /* timeUsed */ init$3[/* timeUsed */ 0],
            /* handle */ action[0],
            /* status : stopped */ -1016999411,
          ],
          /* inSession */ state[/* inSession */ 1],
          /* currentExercise */ state[/* currentExercise */ 2],
        ],
      ]);
    } else {
      return /* Update */ Block.__(0, [
        /* record */ [
          /* timer : record */ [
            /* timeUsed */ 0,
            /* handle */ action[0],
            /* status : active */ 373703110,
          ],
          /* inSession */ state[/* inSession */ 1],
          /* currentExercise */ state[/* currentExercise */ 2],
        ],
      ]);
    }
  };
  return newrecord;
}

var $$default = Curry._1(
  NPMBindings.MobX[/* React */ 0][/* observer */ 1],
  ReasonReact.wrapReasonForJs(component, function(jsProps) {
    return make$7(jsProps.navigation, /* array */ []);
  })
);

exports.Styled = Styled;
exports.transitionLayout = transitionLayout;
exports.sessionLayout = sessionLayout;
exports.workoutOrder = workoutOrder;
exports.startTimer = startTimer;
exports.component = component;
exports.make = make$7;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* component Not a pure module */
