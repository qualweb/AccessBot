export default {
    "type": "act-rules",
    "metadata": {
      "passed": 1,
      "warning": 0,
      "failed": 1,
      "inapplicable": 17
    },
    "rules": {
      "QW-ACT-R7": {
        "name": "Orientation of the page is not restricted using CSS transform property",
        "code": "QW-ACT-R7",
        "mapping": "b33eff",
        "description": "This rule checks that page content is not restricted to either landscape or portrait orientation using CSS transform property.",
        "metadata": {
          "target": {
            "element": "*",
            "attributes": "transform"
          },
          "success-criteria": [
            {
              "name": "1.3.4",
              "level": "AA",
              "principle": "Perceivable",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/orientation"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/b33eff",
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": [
          {
            "verdict": "inapplicable",
            "description": "A page where there are no CSS styles.",
            "resultCode": "RC1"
          }
        ]
      },
      "QW-ACT-R8": {
        "name": "Image filename is accessible name for image",
        "code": "QW-ACT-R8",
        "mapping": "9eb3f6",
        "description": "This rule checks that image elements that use their source filename as their accessible name do so without loss of information to the user.",
        "metadata": {
          "target": {
            "element": [
              "img",
              "input[type=\"image\"]"
            ],
            "attributes": [
              "src"
            ]
          },
          "success-criteria": [
            {
              "name": "1.1.1",
              "level": "A",
              "principle": "Perceivable",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/9eb3f6",
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": []
      },
      "QW-ACT-R6": {
        "name": "Image button has accessible name",
        "code": "QW-ACT-R6",
        "mapping": "59796f",
        "description": "This rule checks that each image button element has an accessible name.",
        "metadata": {
          "target": {
            "element": "input",
            "attributes": [
              "type=\"image\""
            ]
          },
          "success-criteria": [
            {
              "name": "1.1.1",
              "level": "A",
              "principle": "Perceivable",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"
            },
            {
              "name": "4.1.2",
              "level": "A",
              "principle": "Robust",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/59796f",
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": []
      },
      "QW-ACT-R11": {
        "name": "Button has accessible name",
        "code": "QW-ACT-R11",
        "mapping": "97a4e1",
        "description": "This rule checks that each button element has an accessible name.",
        "metadata": {
          "target": {
            "element": [
              "button",
              "input",
              "summary"
            ],
            "attributes": [
              "role=\"button\""
            ]
          },
          "success-criteria": [
            {
              "name": "4.1.2",
              "level": "A",
              "principle": "Robust",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/97a4e1",
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:title"
          ],
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": []
      },
      "QW-ACT-R12": {
        "name": "Link has accessible name",
        "code": "QW-ACT-R12",
        "mapping": "c487ae",
        "description": "This rule checks that each link has an accessible name.",
        "metadata": {
          "target": {
            "element": [
              "a[href]",
              "area[href]"
            ],
            "attributes": [
              "role=\"link\""
            ]
          },
          "success-criteria": [
            {
              "name": "2.4.4",
              "level": "A",
              "principle": "Operable",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context"
            },
            {
              "name": "2.4.9",
              "level": "AAA",
              "principle": "Operable",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only"
            },
            {
              "name": "4.1.2",
              "level": "A",
              "principle": "Robust",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/c487ae",
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:title"
          ],
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": []
      },
      "QW-ACT-R13": {
        "name": "Element with `aria-hidden` has no focusable content",
        "code": "QW-ACT-R13",
        "mapping": "6cfa84",
        "description": "This rule checks that elements with an aria-hidden attribute do not contain focusable elements.",
        "metadata": {
          "target": {
            "element": "*",
            "attributes": [
              "aria-hidden=\"true\""
            ]
          },
          "success-criteria": [
            {
              "name": "1.3.1",
              "level": "A",
              "principle": "Perceivable",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"
            },
            {
              "name": "4.1.2",
              "level": "A",
              "principle": "Robust",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/6cfa84",
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": []
      },
      "QW-ACT-R14": {
        "name": "meta viewport does not prevent zoom",
        "code": "QW-ACT-R14",
        "mapping": "b4f0c3",
        "description": "This rule checks that the meta element retains the user agent ability to zoom.",
        "metadata": {
          "target": {
            "element": "meta",
            "attributes": "name=\"viewport\""
          },
          "success-criteria": [
            {
              "name": "1.4.4",
              "level": "AA",
              "principle": "Perceivable",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/resize-text"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/b4f0c3",
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:title"
          ],
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": []
      },
      "QW-ACT-R22": {
        "name": "Element within body has valid lang attribute",
        "code": "QW-ACT-R22",
        "mapping": "de46e4",
        "description": "This rule checks that the lang attribute of an element in the page body has a valid primary language subtag.",
        "metadata": {
          "target": {
            "element": "body *",
            "attribute": [
              "lang"
            ]
          },
          "success-criteria": [
            {
              "name": "3.1.2",
              "level": "AA",
              "principle": "Understandable",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/de46e4",
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": []
      },
      "QW-ACT-R16": {
        "name": "Form control has accessible name",
        "code": "QW-ACT-R16",
        "mapping": "e086e5",
        "description": "Form control has accessible name",
        "metadata": {
          "target": {
            "element": [
              "input",
              "select",
              "textarea",
              "*[role]"
            ]
          },
          "success-criteria": [
            {
              "name": "3.3.2",
              "level": "A",
              "principle": "Understandable",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions"
            },
            {
              "name": "4.1.2",
              "level": "A",
              "principle": "Robust",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/e086e5",
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": [
          {
            "verdict": "inapplicable",
            "description": "There are no input, select, textarea or elements with role attribute in this web page.",
            "resultCode": "RC1"
          }
        ]
      },
      "QW-ACT-R20": {
        "name": "role attribute has valid value",
        "code": "QW-ACT-R20",
        "mapping": "674b10",
        "description": "This rule checks that each role attribute has a valid value.",
        "metadata": {
          "target": {
            "element": "*",
            "attributes": [
              "role"
            ]
          },
          "success-criteria": [
            {
              "name": "4.1.2",
              "level": "A",
              "principle": "Robust",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/674b10",
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": []
      },
      "QW-ACT-R17": {
        "name": "Image has accessible name",
        "code": "QW-ACT-R17",
        "mapping": "23a2a8",
        "description": "This rule checks that each image that is not marked as decorative, has an accessible name.",
        "metadata": {
          "target": {
            "element": "img"
          },
          "success-criteria": [],
          "related": [],
          "url": "https://act-rules.github.io/rules/23a2a8",
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:title"
          ],
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": []
      },
      "QW-ACT-R19": {
        "name": "iframe element has accessible name",
        "code": "QW-ACT-R19",
        "mapping": "cae760",
        "description": "This rule checks that each iframe element has an accessible name.",
        "metadata": {
          "target": {
            "element": "iframe"
          },
          "success-criteria": [
            {
              "name": "4.1.2",
              "level": "A",
              "principle": "Robust",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
            },
            {
              "name": "2.4.1",
              "level": "A",
              "principle": "Operable",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/cae760",
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:title"
          ],
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": []
      },
      "QW-ACT-R30": {
        "name": "Visible label is part of accessible name",
        "code": "QW-ACT-R30",
        "mapping": "2ee8b8",
        "description": "This rule checks that interactive elements labeled through their content have their visible label as part of their accessible name.",
        "metadata": {
          "target": {
            "element": "*"
          },
          "success-criteria": [
            {
              "name": "2.5.3",
              "level": "A",
              "principle": "Operable",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/2ee8b8",
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:title"
          ],
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": []
      },
      "QW-ACT-R1": {
        "name": "HTML Page has a title",
        "code": "QW-ACT-R1",
        "mapping": "2779a5",
        "description": "This rule checks that the HTML page has a title.",
        "metadata": {
          "target": {
            "element": "title"
          },
          "success-criteria": [
            {
              "name": "2.4.2",
              "level": "A",
              "principle": "Operable",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/page-titled"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/2779a5",
          "passed": 1,
          "warning": 0,
          "failed": 0,
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:title"
          ],
          "outcome": "passed",
          "description": "The `title` element exists and it's not empty (\"\")."
        },
        "results": [
          {
            "verdict": "passed",
            "description": "The `title` element exists and it's not empty (\"\").",
            "resultCode": "RC3",
            "htmlCode": "<title>Extensions</title>",
            "pointer": "html > head > title:nth-of-type(1)"
          }
        ]
      },
      "QW-ACT-R18": {
        "name": "`id` attribute value is unique",
        "code": "QW-ACT-R18",
        "mapping": "3ea0c8",
        "description": "This rule checks that all id attribute values on a single page are unique.",
        "metadata": {
          "target": {
            "element": "*"
          },
          "success-criteria": [
            {
              "name": "4.1.1",
              "level": "A",
              "principle": "Robust",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/parsing.html"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/3ea0c8",
          "passed": 114,
          "warning": 0,
          "failed": 2,
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "outcome": "failed",
          "description": "Several elements have the same `id` attribute (domain)."
        },
        "results": [
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"iron-icon\" assetpath=\"chrome://resources/polymer/v1_0/iron-icon/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"cr-drawer\" assetpath=\"chrome://resources/cr_elements/cr_drawer/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(2)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"cr-lazy-render\" assetpath=\"chrome://resources/cr_elements/cr_lazy_render/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(3)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"iron-a11y-announcer\" assetpath=\"chrome://resources/polymer/v1_0/iron-a11y-announcer/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(4)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"paper-ripple\" assetpath=\"chrome://resources/polymer/v1_0/paper-ripple/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(5)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"cr-hidden-style\" assetpath=\"chrome://resources/cr_elements/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(6)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"cr-button\" assetpath=\"chrome://resources/cr_elements/cr_button/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(7)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"cr-toast\" assetpath=\"chrome://resources/cr_elements/cr_toast/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(8)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"cr-toast-manager\" assetpath=\"chrome://resources/cr_elements/cr_toast/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(9)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"cr-icon-button\" assetpath=\"chrome://resources/cr_elements/cr_icon_button/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(10)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"cr-icons\" assetpath=\"chrome://resources/cr_elements/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(11)"
          },
          {
            "verdict": "failed",
            "description": "Several elements have the same `id` attribute (domain).",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"domain\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(1) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"kite\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(1) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(2)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"menu\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(1) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(3)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"account-child-invert\" viewBox=\"0 0 48 48\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"add\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(2)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"arrow-back\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(3)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"arrow-drop-up\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(4)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"arrow-drop-down\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(5)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"arrow-forward\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(6)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"arrow-right\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(7)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"cancel\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(8)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"check\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(9)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"chevron-left\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(10)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"chevron-right\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(11)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"clear\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(12)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"close\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(13)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"computer\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(14)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"delete\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(15)"
          },
          {
            "verdict": "failed",
            "description": "Several elements have the same `id` attribute (domain).",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"domain\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(16)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"error\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(17)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"error-outline\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(18)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"expand-less\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(19)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"expand-more\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(20)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"extension\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(21)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"file-download\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(22)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"fullscreen\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(23)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"group\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(24)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"help-outline\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(25)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"info\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(26)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"info-outline\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(27)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"insert-drive-file\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(28)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"location-on\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(29)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"mic\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(30)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"more-vert\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(31)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"open-in-new\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(32)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"person\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(33)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"print\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(34)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"search\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(35)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"security\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(36)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"settings_icon\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(37)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"star\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(38)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"supervisor-account\" viewBox=\"0 0 48 48\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(39)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"sync\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(40)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"videocam\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(41)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"warning\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(42)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"cr-shared-style\" assetpath=\"chrome://resources/cr_elements/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(12)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"paper-spinner-styles\" assetpath=\"chrome://resources/polymer/v1_0/paper-spinner/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(13)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"paper-spinner-lite\" assetpath=\"chrome://resources/polymer/v1_0/paper-spinner/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(14)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"cr-toolbar-search-field\" assetpath=\"chrome://resources/cr_elements/cr_toolbar/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(15)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"cr-toolbar\" assetpath=\"chrome://resources/cr_elements/cr_toolbar/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(16)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"cr-view-manager\" assetpath=\"chrome://resources/cr_elements/cr_view_manager/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(17)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"cr-tabs\" assetpath=\"chrome://resources/cr_elements/cr_tabs/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(18)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"iron-pages\" assetpath=\"chrome://resources/polymer/v1_0/iron-pages/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(19)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"cr-action-menu\" assetpath=\"chrome://resources/cr_elements/cr_action_menu/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(20)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"cr-input-style\" assetpath=\"chrome://resources/cr_elements/cr_input/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(21)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"cr-input\" assetpath=\"chrome://resources/cr_elements/cr_input/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(22)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"cr-search-field\" assetpath=\"chrome://resources/cr_elements/cr_search_field/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(23)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"cr-expand-button\" assetpath=\"chrome://resources/cr_elements/cr_expand_button/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(24)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"shared-style\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(25)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"activity-log-history-item\" assetpath=\"activity_log/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(26)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"activity-log-history\" assetpath=\"activity_log/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(27)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"iron-list\" assetpath=\"chrome://resources/polymer/v1_0/iron-list/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(28)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"activity-log-stream-item\" assetpath=\"activity_log/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(29)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"activity-log-stream\" assetpath=\"activity_log/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(30)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"extensions-activity-log\" assetpath=\"activity_log/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(31)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"cr-link-row\" assetpath=\"chrome://resources/cr_elements/cr_link_row/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(32)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"cr-toggle\" assetpath=\"chrome://resources/cr_elements/cr_toggle/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(33)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"paper-tooltip\" assetpath=\"chrome://resources/polymer/v1_0/paper-tooltip/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(34)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"cr-tooltip-icon\" assetpath=\"chrome://resources/cr_elements/policy/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(35)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"action-link\" assetpath=\"chrome://resources/cr_elements/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(36)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"iron-flex\" assetpath=\"chrome://resources/polymer/v1_0/iron-flex-layout/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(37)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"iron-flex-reverse\" assetpath=\"chrome://resources/polymer/v1_0/iron-flex-layout/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(38)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"iron-flex-alignment\" assetpath=\"chrome://resources/polymer/v1_0/iron-flex-layout/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(39)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"iron-flex-factors\" assetpath=\"chrome://resources/polymer/v1_0/iron-flex-layout/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(40)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"iron-positioning\" assetpath=\"chrome://resources/polymer/v1_0/iron-flex-layout/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(41)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"extensions-toggle-row\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(42)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"extensions-host-permissions-toggle-list\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(43)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"cr-radio-group\" assetpath=\"chrome://resources/cr_elements/cr_radio_group/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(44)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"cr-radio-button-style\" assetpath=\"chrome://resources/cr_elements/cr_radio_button/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(45)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"cr-radio-button\" assetpath=\"chrome://resources/cr_elements/cr_radio_button/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(46)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"md-select\" assetpath=\"chrome://resources/cr_elements/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(47)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"cr-dialog\" assetpath=\"chrome://resources/cr_elements/cr_dialog/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(48)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"extensions-runtime-hosts-dialog\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(49)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"extensions-runtime-host-permissions\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(50)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"extensions-detail-view\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(51)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"unpacked\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(3) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"input\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(3) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(2)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<g id=\"business\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(3) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(3)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"extensions-item\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(52)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"extensions-drop-overlay\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(53)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"iron-collapse\" assetpath=\"chrome://resources/polymer/v1_0/iron-collapse/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(54)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"extensions-code-section\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(55)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"extensions-error-page\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(56)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"extensions-install-warnings-dialog\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(57)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"managed-footnote\" assetpath=\"chrome://resources/cr_components/managed_footnote/\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(58)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"extensions-item-list\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(59)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"extensions-shortcut-input\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(60)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"extensions-keyboard-shortcuts\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(61)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"extensions-load-error\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(62)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"extensions-options-dialog\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(63)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"extensions-sidebar\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(64)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"extensions-pack-dialog-alert\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(65)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"extensions-pack-dialog\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(66)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"extensions-toolbar\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(67)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<dom-module id=\"extensions-manager\" css-build=\"shadow\"></dom-module>",
            "pointer": "html > body > div:nth-of-type(1) > dom-module:nth-of-type(68)"
          }
        ]
      },
      "QW-ACT-R2": {
        "name": "HTML has lang attribute",
        "code": "QW-ACT-R2",
        "mapping": "b5c3f8",
        "description": "This rule checks that the html element has a non-empty lang or xml:lang attribute.",
        "metadata": {
          "target": {
            "element": "html",
            "attributes": "lang"
          },
          "success-criteria": [
            {
              "name": "3.1.1",
              "level": "A",
              "principle": "Understandable",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/language-of-page"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/b5c3f8",
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": [
          {
            "verdict": "Failed",
            "description": "The root element is not an `html` element.",
            "resultCode": "RC1",
            "htmlCode": "<html dir=\"ltr\" lang=\"en\" class=\"in-dev-mode\"><head></head><body></body></html>",
            "pointer": "html"
          }
        ]
      },
      "QW-ACT-R3": {
        "name": "HTML lang and xml:lang match",
        "code": "QW-ACT-R3",
        "mapping": "5b7ae0",
        "description": "The rule checks that for the html element, there is no mismatch between the primary language in non-empty lang and xml:lang attributes, if both are used.",
        "metadata": {
          "target": {
            "element": "html",
            "attributes": [
              "lang",
              "xml:lang"
            ]
          },
          "success-criteria": [
            {
              "name": "3.1.1",
              "level": "A",
              "principle": "Understandable",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/language-of-page"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/5b7ae0",
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": [
          {
            "verdict": "inapplicable",
            "description": "The root element is not an `html` element.",
            "resultCode": "RC1",
            "htmlCode": "<html dir=\"ltr\" lang=\"en\" class=\"in-dev-mode\"><head></head><body></body></html>",
            "pointer": "html"
          }
        ]
      },
      "QW-ACT-R5": {
        "name": "Validity of HTML Lang attribute",
        "code": "QW-ACT-R5",
        "mapping": "bf051a",
        "description": "This rule checks the lang or xml:lang attribute has a valid language subtag.",
        "metadata": {
          "target": {
            "element": "html",
            "attributes": [
              "lang"
            ]
          },
          "success-criteria": [
            {
              "name": "3.1.1",
              "level": "A",
              "principle": "Understandable",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/language-of-page"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/bf051a",
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": [
          {
            "verdict": "inapplicable",
            "description": "The root element is not an `html` element.",
            "resultCode": "RC1",
            "htmlCode": "<html dir=\"ltr\" lang=\"en\" class=\"in-dev-mode\"><head></head><body></body></html>",
            "pointer": "html"
          }
        ]
      },
      "QW-ACT-R21": {
        "name": "svg element with explicit role has accessible name",
        "code": "QW-ACT-R21",
        "mapping": "7d6734",
        "description": "This rule checks that each SVG image element that is explicitly included in the accessibility tree has an accessible name.",
        "metadata": {
          "target": {
            "element": "*"
          },
          "success-criteria": [
            {
              "name": "1.1.1",
              "level": "A",
              "principle": "Perceivable",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/7d6734",
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": [
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<defs></defs>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(1) > svg:nth-of-type(1) > defs:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<defs></defs>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<defs></defs>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(3) > svg:nth-of-type(1) > defs:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"domain\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(1) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"account-child-invert\" viewBox=\"0 0 48 48\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"unpacked\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(3) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M2,3 L2,17 L11.8267655,17 L13.7904799,17 L18,17 L18,7 L12,7 L12,3 L2,3 Z M8,13 L10,13 L10,15 L8,15 L8,13 Z M4,13 L6,13 L6,15 L4,15 L4,13 Z M8,9 L10,9 L10,11 L8,11 L8,9 Z M4,9 L6,9 L6,11 L4,11 L4,9 Z M12,9 L16,9 L16,15 L12,15 L12,9 Z M12,11 L14,11 L14,13 L12,13 L12,11 Z M8,5 L10,5 L10,7 L8,7 L8,5 Z M4,5 L6,5 L6,7 L4,7 L4,5 Z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(1) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(1) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M24 4c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(1) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path class=\"cls-1\" fill=\"none\" d=\"M0,0H24V24H0V0Z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(3) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(1) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"kite\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(1) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path fill=\"none\" d=\"M0 0h48v48H0V0z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(1) > path:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<circle cx=\"9\" cy=\"12\" r=\"1\"></circle>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(3) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(1) > circle:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M 10.32 2 L 4.63 8 l 4.92 7.5 l -0.4 0.6 c -0.04 0.07 -0.09 0.12 -0.14 0.18 c -0.24 0.25 -0.56 0.39 -0.9 0.39 c -0.34 0 -0.65 -0.13 -0.9 -0.39 a 1.35 1.35 0 0 1 -0.37 -0.94 a 2.72 2.72 0 0 0 -0.74 -1.88 a 2.44 2.44 0 0 0 -1.78 -0.78 H 4 v 1.38 h 0.33 c 0.34 0 0.65 0.14 0.9 0.39 c 0.24 0.26 0.37 0.59 0.37 0.95 c 0 0.71 0.26 1.38 0.74 1.88 c 0.48 0.5 1.11 0.78 1.78 0.78 c 0.67 0 1.31 -0.28 1.78 -0.78 c 0.11 -0.11 0.2 -0.23 0.28 -0.35 l 1.27 -1.94 L 16 8 L 10.32 2 z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(1) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(2) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<circle fill=\"none\" cx=\"24\" cy=\"26\" r=\"4\"></circle>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(1) > circle:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M20,5H4A2,2,0,0,0,2,7V17a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V7A2,2,0,0,0,20,5ZM9,17a5,5,0,1,1,5-5A5,5,0,0,1,9,17Zm11,1a1,1,0,1,1,1-1A1,1,0,0,1,20,18ZM20,8a1,1,0,1,1,1-1A1,1,0,0,1,20,8Z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(3) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(1) > path:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"menu\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(1) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"input\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(3) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M24 18c-6.16 0-13 3.12-13 7.23v11.54c0 2.32 2.19 4.33 5.2 5.63 2.32 1 5.12 1.59 7.8 1.59.66 0 1.33-.06 2-.14v-5.2c-.67.08-1.34.14-2 .14-2.63 0-5.39-.57-7.68-1.55.67-2.12 4.34-3.65 7.68-3.65.86 0 1.75.11 2.6.29 2.79.62 5.2 2.15 5.2 4.04v4.47c3.01-1.31 5.2-3.31 5.2-5.63V25.23C37 21.12 30.16 18 24 18zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(1) > path:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M2 4h16v2H2zM2 9h16v2H2zM2 14h16v2H2z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(1) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(3) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"add\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(3) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(2) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<svg></svg>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(1) > svg:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"business\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(3) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(2) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"arrow-back\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(3) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(3) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<svg></svg>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(3) > svg:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(3) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"arrow-drop-up\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(4)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M7 14l5-5 5 5z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(4) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"arrow-drop-down\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(5)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M7 10l5 5 5-5z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(5) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"arrow-forward\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(6)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(6) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"arrow-right\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(7)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M10 7l5 5-5 5z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(7) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"cancel\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(8)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(8) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"check\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(9)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(9) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"chevron-left\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(10)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(10) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"chevron-right\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(11)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(11) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"clear\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(12)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(12) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"close\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(13)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(13) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"computer\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(14)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(14) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"delete\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(15)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(15) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"domain\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(16)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(16) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"error\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(17)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(17) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"error-outline\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(18)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(18) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"expand-less\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(19)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(19) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"expand-more\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(20)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(20) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"extension\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(21)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(21) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"file-download\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(22)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(22) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"fullscreen\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(23)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(23) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"group\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(24)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(24) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"help-outline\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(25)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(25) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"info\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(26)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(26) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"info-outline\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(27)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(27) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"insert-drive-file\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(28)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(28) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"location-on\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(29)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(29) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"mic\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(30)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(30) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"more-vert\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(31)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(31) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"open-in-new\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(32)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(32) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"person\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(33)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(33) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"print\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(34)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(34) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"search\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(35)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(35) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"security\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(36)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(36) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"settings_icon\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(37)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(37) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"star\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(38)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(38) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"supervisor-account\" viewBox=\"0 0 48 48\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(39)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M0 0h48v48H0z\" fill=\"none\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(39) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M33 24c2.76 0 4.98-2.24 4.98-5s-2.22-5-4.98-5c-2.76 0-5 2.24-5 5s2.24 5 5 5zm-15-2c3.31 0 5.98-2.69 5.98-6s-2.67-6-5.98-6c-3.31 0-6 2.69-6 6s2.69 6 6 6zm15 6c-3.67 0-11 1.84-11 5.5V38h22v-4.5c0-3.66-7.33-5.5-11-5.5zm-15-2c-4.67 0-14 2.34-14 7v5h14v-4.5c0-1.7.67-4.67 4.74-6.94C21 26.19 19.31 26 18 26z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(39) > path:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"sync\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(40)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(40) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"videocam\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(41)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(41) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<g id=\"warning\"></g>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(42)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<path d=\"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z\"></path>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1) > defs:nth-of-type(1) > g:nth-of-type(42) > path:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "No test target with this specific roles is included in the accessibility tree.",
            "resultCode": "RC1",
            "htmlCode": "<svg></svg>",
            "pointer": "html > body > div:nth-of-type(1) > iron-iconset-svg:nth-of-type(2) > svg:nth-of-type(1)"
          }
        ]
      }
    }
  }
  