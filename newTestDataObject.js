{
    "type": "act-rules",
    "metadata": {
      "passed": 12,
      "warning": 1,
      "failed": 1,
      "inapplicable": 25
    },
    "assertions": {
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
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:title"
          ],
          "passed": 1,
          "warning": 0,
          "failed": 0,
          "outcome": "passed",
          "description": "The `title` element exists and it's not empty (\"\")."
        },
        "results": [
          {
            "verdict": "passed",
            "description": "The `title` element exists and it's not empty (\"\").",
            "resultCode": "RC3",
            "htmlCode": "<title>Faculdade de Ciências da Universidade de Lisboa</title>",
            "pointer": "html > head > title:nth-of-type(1)"
          }
        ]
      },
      "QW-ACT-R37": {
        "name": "Text has minimum contrast",
        "code": "QW-ACT-R37",
        "mapping": "afw4f7",
        "description": "This rule checks that the highest possible contrast of every text character with its background meets the minimal contrast requirement.",
        "metadata": {
          "target": {
            "element": [
              "*"
            ]
          },
          "success-criteria": [
            {
              "name": "1.4.3",
              "level": "A",
              "principle": "Perceivable",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
            },
            {
              "name": "1.4.6",
              "level": "AA",
              "principle": "Perceivable",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html"
            }
          ],
          "related": [
            "G18, G145",
            "F83"
          ],
          "url": "https://github.com/act-rules/act-rules.github.io/blob/develop/_rules/text-contrast-afw4f7.md",
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": [
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<title>Faculdade de Ciências da Universidade de Lisboa</title>",
            "pointer": "html > head > title:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<link rel=\"alternate\" title=\"Faculdade de Ciências da Universidade de Lisboa RSS\" href=\"https://ciencias.ulisboa.pt/pt/rss.xml\">",
            "pointer": "html > head > link:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<link rel=\"shortcut icon\" href=\"https://ciencias.ulisboa.pt/sites/all/themes/cienciasgbnt/favicon.ico\">",
            "pointer": "html > head > link:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<link rel=\"canonical\" href=\"https://ciencias.ulisboa.pt/pt\">",
            "pointer": "html > head > link:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<link rel=\"shortlink\" href=\"https://ciencias.ulisboa.pt/pt\">",
            "pointer": "html > head > link:nth-of-type(4)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<link rel=\"apple-touch-icon\" sizes=\"144x144\" href=\"https://ciencias.ulisboa.pt/sites/all/themes/cienciasgbnt/apple-touch-icon-144x144.png\">",
            "pointer": "html > head > link:nth-of-type(5)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<link rel=\"apple-touch-icon\" sizes=\"114x114\" href=\"https://ciencias.ulisboa.pt/sites/all/themes/cienciasgbnt/apple-touch-icon-114x114.png\">",
            "pointer": "html > head > link:nth-of-type(6)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<link rel=\"apple-touch-icon\" sizes=\"72x72\" href=\"https://ciencias.ulisboa.pt/sites/all/themes/cienciasgbnt/apple-touch-icon-72x72.png\">",
            "pointer": "html > head > link:nth-of-type(7)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<link rel=\"apple-touch-icon\" href=\"https://ciencias.ulisboa.pt/sites/all/themes/cienciasgbnt/apple-touch-icon.png\">",
            "pointer": "html > head > link:nth-of-type(8)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<link rel=\"apple-touch-startup-image\" href=\"https://ciencias.ulisboa.pt/sites/all/themes/cienciasgbnt/apple-startup.png\">",
            "pointer": "html > head > link:nth-of-type(9)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"#main-content\" class=\"element-invisible element-focusable\">Passar para o conteúdo principal</a>",
            "pointer": "html > body > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<link href=\"/servicos/common/css/font-awesome/css/font-awesome.min.css\" rel=\"stylesheet\" type=\"text/css\">",
            "pointer": "html > body > link:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"page\"></div>",
            "pointer": "html > body > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"leftbar\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"topbar-wrapper\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"topbar\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"block-block-8 \"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<h1 style=\"display:none\"></h1>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > h1:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"search\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<form action=\"/pesquisa-fcul?\" method=\"get\"></form>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > form:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<label for=\"termo\"></label>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > form:nth-of-type(1) > label:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<input type=\"text\" name=\"termo\" id=\"termo\">",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > form:nth-of-type(1) > input:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<input type=\"submit\" id=\"btn-pesquisa\" value=\"ok\">",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > form:nth-of-type(1) > input:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"block-locale-language \"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<ul class=\"language-switcher-locale-url\"></ul>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > ul:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"pt-pt first active\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt\" class=\"language-link active\" xml:lang=\"pt-pt\" lang=\"pt-pt\">Português</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"en last\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/en\" class=\"language-link\" xml:lang=\"en\" lang=\"en\">English</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"block-block-6 \"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"login\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<ul></ul>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > ul:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/user\">Login</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"logo-wrapper\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"#\" class=\"hamburger hamb-nav\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<span class=\"fa fa-bars\"></span>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > a:nth-of-type(1) > span:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"logo\" style=\"display: block;\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"block-views-logo-view-block \"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"logo-grande\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt\" title=\"home\" rel=\"home\" class=\"active\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<img src=\"https://ciencias.ulisboa.pt/sites/default/files/Ciencias_Logo_Azul-02.png\" width=\"268\" height=\"404\" alt=\"\">",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1) > img:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"logo-pequeno\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt\" title=\"home\" rel=\"home\" class=\"active\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<img src=\"https://ciencias.ulisboa.pt/sites/default/files/Ciencias_Logo_Azul-01.png\" width=\"435\" height=\"228\" alt=\"\">",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > a:nth-of-type(1) > img:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<nav class=\"block-menu-block-1 \" role=\"navigation\"></nav>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<ul class=\"nav\"></ul>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"first menu-mlid-339 collapsed\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/a-faculdade\" title=\"A Faculdade de Ciências da ULisboa\">A Faculdade</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<ul class=\"submenu\" style=\"display: none;\"></ul>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"first leaf has-children menu-mlid-519\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/sobre\" title=\"Sobre Ciências ULisboa\">Sobre</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-523\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/%C3%B3rg%C3%A3os-de-governo\" title=\"Órgãos de Governo Ciências ULisboa\">Órgãos de Governo</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-3696\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/provedor\" title=\"Provedor Ciências ULisboa\">Provedor</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-524\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/unidades-de-servi%C3%A7o\" title=\"Unidades de Serviço Ciências ULisboa\">Unidades de Serviço</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-892\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/informa%C3%A7%C3%A3o-oficial-0\" title=\"Informação Oficial Ciências ULisboa\">Informação Oficial</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-3687\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/merito\" title=\"Reconhecimento do Mérito em Ciências ULisboa\">Mérito</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-3702\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/rede-alumni\" title=\"Rede Alumni Ciências ULisboa\">Rede Alumni</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-3745\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/formacao-0\" title=\"Formação Ciências ULisboa\">Formação</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-894\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/legisla%C3%A7%C3%A3o-e-regulamentos\" title=\"Legislação e Regulamentos Ciências ULisboa\">Legislação e Regulamentos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-1119\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/identidade-visual-e-normas-gr%C3%A1ficas\" title=\"Identidade Visual e Normas Gráficas Ciências ULisboa\">Identidade Visual e Normas Gráficas</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"last leaf menu-mlid-3470\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/prote%C3%A7%C3%A3o-de-dados\" title=\"Regulamento Geral de Proteção de Dados\">Proteção de Dados</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"menu-mlid-3125 collapsed\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/sa%C3%BAde\" title=\"Informações sobre a COVID-19\">Saúde: COVID-19</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<ul class=\"submenu\" style=\"display: none;\"></ul>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"first leaf has-children menu-mlid-4072\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/comunicados-a-comunidade-covid-19\" title=\"Comunicados da Direção de Ciências e da Reitoria da ULisboa relativos à COVID-19\">Comunicados à Comunidade</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-4058\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/plano-de-contingencia-em-ciencias-covid-19\" title=\"Plano de Contingência em Ciências ULisboa (COVID-19)\">Plano de Contingência</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-4135\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/centro-de-testes-de-ciencias\" title=\"Centro de Testes de Ciências ULisboa\">Centro de Testes de Ciências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-4076\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(4)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/euficoemcasa\" title=\"#EuFicoEmCasa Ciências ULisboa\">#EuFicoEmCasa</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-4087\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(5)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/covid-19-financiamento\" title=\"Financiamento relacionado com a COVID-19\">Financiamento COVID-19</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-4086\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(6)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/projetos-covid-19\" title=\"Projetos relacionados com a COVID-19\">Projetos COVID-19</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-4123\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(7)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/responsabilidade-social\" title=\"Responsabilidade Social em resposta à COVID-19\">Responsabilidade Social</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-4070\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(8)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/legislacao-orientacoes-covid-19\" title=\"Legislação/Orientações sobre a COVID-19\">Legislação/Orientações</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"last leaf menu-mlid-4451\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(9)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/horarios-de-atendimento-covid\" title=\"Horários de Atendimento: retoma gradual de atividades presenciais em Ciências ULisboa\">Horários de Atendimento</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"menu-mlid-3088 collapsed\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/qualidade\" title=\"Qualidade Ciências ULisboa\">Qualidade</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<ul class=\"submenu\" style=\"display: none;\"></ul>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > ul:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"first leaf menu-mlid-3951\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > ul:nth-of-type(1) > li:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/qciencias\" title=\"Sistema Integrado de Garantia da Qualidade da Faculdade de Ciências da Universidade de Lisboa\">QCiências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-3960\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > ul:nth-of-type(1) > li:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/inqueritos\" title=\"Inquéritos Ciências ULisboa\">Inquéritos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-2231\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > ul:nth-of-type(1) > li:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/estatisticas\" title=\"Estatísticas Ciências ULisboa\">Estatísticas</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-3964\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > ul:nth-of-type(1) > li:nth-of-type(4)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/acreditacoes-e-rankings\" title=\"Avaliação externa: Acreditações e Rankings\">Acreditações e Rankings</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-3953\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > ul:nth-of-type(1) > li:nth-of-type(5)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/reconhecimento-e-certificacao\" title=\"Reconhecimento e Certificação Institucional e de Cursos\">Reconhecimento e Certificação</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"last leaf menu-mlid-3952\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > ul:nth-of-type(1) > li:nth-of-type(6)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"https://ciencias.ulisboa.pt/pt/caixa-de-sugestoes\" title=\"Elogios, Sugestões e Reclamações Ciências ULisboa\">Elogios, Sugestões e Reclamações</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"menu-mlid-340 collapsed\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/viver\" title=\"Viver em Ciências ULisboa\">Viver</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<ul class=\"submenu\" style=\"display: none;\"></ul>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"first leaf menu-mlid-3947\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/o-campus\" title=\"O Campus de Ciências ULisboa\">O  Campus</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-349\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/unidade/biblioteca\" title=\"Biblioteca Ciências ULisboa\">Biblioteca</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-591\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/dsi\" title=\"Direção de Serviços Informáticos\">Informática</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-593\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(4)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/gabinete-de-apoio-psicopedag%C3%B3gico\" title=\"Gabinete de Apoio Psicopedagógico\">Apoio Psicopedagógico</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-594\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(5)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/g3s\" title=\"Segurança, Saúde e Sustentabilidade Ciências ULisboa\">Segurança, Saúde e Sustentabilidade</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-592\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(6)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"http://aefcl.ciencias.ulisboa.pt/\" title=\"Associação dos Estudantes Ciências ULisboa\">Associação dos Estudantes</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-595\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(7)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/atfcul\" title=\"Associação de Trabalhadores Ciências ULisboa\">Associação de Trabalhadores</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-2230\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(8)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/galeria-ciencias-e-outros-espacos\" title=\"Galeria Ciências e outros Espaços de Exposição em Ciências ULisboa\">Galeria Ciências e outros Espaços de Exposição</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-1139\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(9)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/desporto-e-lazer\" title=\"Desporto, Saúde e Bem-Estar\">Desporto e Lazer</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-1140\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(10)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/cantinas-e-bares\" title=\"Cantinas e Bares Ciências ULisboa\">Cantinas e Bares</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(10) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-3144\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(11)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/loja-de-ci%C3%AAncias\" title=\"Loja de Ciências ULisboa\">Loja de Ciências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(11) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-3950\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(12)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/protocolos-e-acordos\" title=\"Protocolos e Acordos Ciências ULisboa\">Protocolos e Acordos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(12) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"last leaf menu-mlid-3007\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(13)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/catalogo-de-servicos\" title=\"Catálogo de Serviços Ciências ULisboa\">Catálogo de Serviços</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(13) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"menu-mlid-372 collapsed\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/departamentos\" title=\"Departamentos de Ciências ULisboa\">Departamentos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<ul class=\"submenu\" style=\"display: none;\"></ul>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"first leaf has-children menu-mlid-560\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/biologia-animal\" title=\"Departamento de Biologia Animal\">Biologia Animal</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-561\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/dbv\" title=\"Departamento de Biologia Vegetal\">Biologia Vegetal</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-576\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/degge\" title=\"Departamento de Engenharia Geográfica, Geofísica e Energia\">Engenharia Geográfica, Geofísica e Energia</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-580\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(4)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/deio\" title=\"Departamento de Estatística e Investigação Operacional\">Estatística e Investigação Operacional</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-581\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(5)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/df\" title=\"Departamento de Física\">Física</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-582\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(6)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/dg\" title=\"Departamento de Geologia\">Geologia</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-586\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(7)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/dhfc\" title=\"Departamento de História e Filosofia das Ciências\">História e Filosofia das Ciências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-583\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(8)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/di\" title=\"Departamento de Informática\">Informática</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-584\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(9)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/dm\" title=\"Departamento de Matemática\">Matemática</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"last leaf has-children menu-mlid-585\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(10)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/dqb\" title=\"Departamento de Química e Bioquímica\">Química e Bioquímica</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(10) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"menu-mlid-342 collapsed\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/ensino\" title=\"Ensino de Ciências ULisboa\">Ensino</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<ul class=\"submenu\" style=\"display: none;\"></ul>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"first leaf menu-mlid-3133\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/oferta-formativa\" title=\"Oferta Formativa Ciências ULisboa\">Oferta Formativa</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-352\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/candidaturas\" title=\"Candidaturas aos Cursos de Ciências ULisboa\">Candidaturas</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-1896\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/estudante-internacional\" title=\"Candidaturas Estudante Internacional\">Estudante Internacional</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-2359\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(4)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/publica%C3%A7%C3%B5es\" title=\"Publicações Ciências ULisboa\">Publicações</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-3330\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(5)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/compet%C3%AAncias-transversais\" title=\"Competencias Transversais Ciências ULisboa\">Competências Transversais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-3740\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(6)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/reconhecimento-de-graus-e-diplomas\" title=\"Reconhecimento de Graus e Diplomas Ciências ULisboa\">Reconhecimento de Graus e Diplomas</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-609\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(7)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/inscricoes\" title=\"Inscrições no ano letivo 2019/2020 Ciências ULisboa\">Inscrições 2019/2020</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-588\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(8)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/informa%C3%A7%C3%A3o-para-estudantes\" title=\"Informação para Estudantes Ciências ULisboa\">Informação para Estudantes</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"last leaf menu-mlid-4065\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(9)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/ferramentas-de-apoio-a-distancia\" title=\"Ferramentas de Apoio ao Ensino à Distância Ciências ULisboa\">Ferramentas de Apoio ao Ensino à Distância</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"menu-mlid-1897 collapsed\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/sociedade\" title=\"Interação com a Sociedade\">Sociedade</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<ul class=\"submenu\" style=\"display: none;\"></ul>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"first leaf has-children menu-mlid-694\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/p%C3%BAblico-escolar-geral\" title=\"Informação para Público Escolar | Geral\">Público Escolar | Geral</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-1927\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/noticias\" title=\"Notícias | Ciências ULisboa\">Notícias</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-1925\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/eventos\" title=\"Eventos | Ciências ULisboa\">Eventos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-739\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(4)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/multim%C3%A9dia\" title=\"Multimédia | Ciências ULisboa\">Multimédia</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-932\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(5)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/ciencias-nos-media\" title=\"Página de acesso ao press kit, comunicados de imprensa e recortes de imprensa\">Ciências nos Média</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-842\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(6)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/newsletterdeciencias\" title=\"Newsletter | Ciências ULisboa\">Newsletter de Ciências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-3924\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(7)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/comunicadores-de-ciencia-em-ciencias\" title=\"Comunicadores de Ciência | Ciências ULisboa\">Comunicadores de Ciência em Ciências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"last leaf menu-mlid-4069\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(8)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/o-que-faco-aqui\" title=\"O que faço aqui? | Ciências ULisboa\">O que faço aqui?</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"menu-mlid-355 collapsed\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/a-investiga%C3%A7%C3%A3o-na-faculdade-de-ci%C3%AAncias-um-sistema-em-rede\" title=\"Investigação de Ciências ULisboa\">Investigação</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<ul class=\"submenu\" style=\"display: none;\"></ul>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"first leaf has-children menu-mlid-779\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/unidades-de-id\" title=\"Unidades de I&amp;D Ciências ULisboa\">Unidades de I&amp;D</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-777\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/infraestruturas-de-id\" title=\"Infraestruturas de I&amp;D Ciências ULisboa\">Infraestruturas de I&amp;D</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-1019\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"https://ciencias.ulisboa.pt/servicos/fcul/Main/?servico=fundus\" title=\"Projetos Ciências ULisboa\">Projetos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-1301\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(4)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/protocolos-2\" title=\"Protocolos Ciências ULisboa\">Protocolos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-567\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(5)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/concursos\" title=\"Concursos Ciências ULisboa\">Concursos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-3753\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(6)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"https://biblios.ciencias.ulisboa.pt/?lang=por\" title=\"Biblios - Sistema de Gestão de Referências Bibliográficas de Ciências\">Publicações</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-3523\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(7)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/researchers\" title=\"Incoming Researchers Ciências ULisboa\">Incoming Researchers</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-793\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(8)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/gest%C3%A3o-de-projetos-0\" title=\"Gestão de Projetos Ciências ULisboa\">Gestão de Projetos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-3836\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(9)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/col%C3%A9gios-e-redes-ulisboa\" title=\"Colégios e Redes existentes na ULisboa\">Colégios e Redes ULisboa</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-3137\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(10)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/phd-support-programme\" title=\"PhD Support Programme Ciências ULisboa\">PhD Support Programme</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(10) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-1037\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(11)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/programas-doutorais\" title=\"Programas Doutorais Ciências ULisboa\">Programas Doutorais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(11) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-784\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(12)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/funda%C3%A7%C3%A3o-da-fcul\" title=\"Fundação\">Fundação da FCUL</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(12) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-3318\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(13)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"http://www.fciencias-id.pt/\" title=\"FCiências.ID Ciências ULisboa\" target=\"_blank\" rel=\"noopener noreferrer\">FCiências.ID</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(13) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-785\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(14)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/financiamento-0\" title=\"Programas de Financiamento\">Financiamento</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(14) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-786\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(15)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/colabora%C3%A7%C3%B5es-internacionais\" title=\"Redes Internacionais\">Colaborações Internacionais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(15) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"last leaf has-children menu-mlid-1303\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(16)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/documentos-3\" title=\"Documentos de Apoio\">Documentos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(16) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"menu-mlid-343 collapsed\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/inova%C3%A7%C3%A3o-e-empreendedorismo\" title=\"Inovação em Ciências ULisboa\">Inovação</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<ul class=\"submenu\" style=\"display: none;\"></ul>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"first leaf menu-mlid-531\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"http://teclabs.pt/\" title=\"Tec Labs - Centro de Inovação de Ciências ULisboa\" target=\"_blank\" rel=\"noopener noreferrer\">Tec Labs - Centro de Inovação</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-536\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/tt-pi-ci%C3%AAncias\" title=\"Transferências de Tecnologia e Propriedade Intelectual\">TT &amp; PI @ Ciências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-3098\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/rede-de-ci%C3%AAncias-empresas\" title=\"Rede de Ciências ULisboa-Empresas\">Rede de Ciências-Empresas</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-535\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(4)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/startups-e-spinoffs\" title=\"Startups e Spinoffs Ciências ULisboa\">Startups e Spinoffs</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-533\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(5)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/empreendedorismo\" title=\"Empreendedorismo Ciências ULisboa\">Empreendedorismo</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-1012\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(6)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/kic-eit-health\" title=\"KIC EIT Health Programme\">KIC EIT Health</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-950\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(7)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/mare-startup\" title=\"Programa MARE Startup\">MARE Startup</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-532\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(8)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/financiamento-%C3%A0-inova%C3%A7%C3%A3o\" title=\"Programas de Financiamento para a Inovação\">Financiamento</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"last leaf menu-mlid-534\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(9)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/innoversia\" title=\"Innoversia - Inovação aberta\">Innoversia</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"menu-mlid-345 collapsed\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/gabinete-de-empregabilidade\" title=\"Informações sobre Emprego\">Emprego</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > a:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<ul class=\"submenu\" style=\"display: none;\"></ul>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"first leaf menu-mlid-4137\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/portal-de-emprego\" title=\"Portal de Emprego Ciências ULisboa\">Portal de Emprego</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-1699\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/emprego/concursos\" title=\"Concursos Ciências ULisboa\">Menu de Concursos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-568\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/est%C3%A1gios-0\" title=\"Programas de Estágios\">Estágios</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-3473\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(4)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/programa-de-est%C3%A1gios-de-ver%C3%A3o-fcul\" title=\"Programa de Estágios de Verão Ciências ULisboa\">Programa de Estágios de Verão FCUL</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-569\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(5)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/oportunidades\" title=\"Oportunidades Nacionais e Internacionais\">Oportunidades</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-3847\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(6)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/eu-careers\" title=\"Candidaturas EU Careers\">EU Careers</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-1114\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(7)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/voluntariado\" title=\"Voluntariado Ciências ULisboa\">Voluntariado</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-3412\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(8)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/jobshop-ciencias\" title=\"Jobshop Ciências ULisboa\">Jobshop Ciências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-572\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(9)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/eventos-0\" title=\"Eventos e Sessões\">Eventos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-573\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(10)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/compet%C3%AAncias-transversais-0\" title=\"Competências Transversais Ciências ULisboa\">Competências Transversais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(10) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-574\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(11)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/parcerias\" title=\"Parcerias de colaboração Ciências ULisboa\">Parcerias</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(11) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-575\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(12)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/empregabilidade\" title=\"Empregabilidade Ciências ULisboa\">Empregabilidade</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(12) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-577\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(13)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/documentos-1\" title=\"Documentos de Apoio para Alunos e Diplomados\">Documentos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(13) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"last leaf menu-mlid-578\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(14)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/liga%C3%A7%C3%B5es-%C3%BAteis\" title=\"Ligações Úteis - Emprego\">Ligações Úteis</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(14) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"menu-mlid-346 collapsed\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/internacional\" title=\"Internacional Ciências ULisboa\">Internacional</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > a:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<ul class=\"submenu\" style=\"display: none;\"></ul>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > ul:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"first leaf has-children menu-mlid-1387\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > ul:nth-of-type(1) > li:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/ci%C3%AAncias-incoming\" title=\"Incoming\">Ciências Incoming</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-1388\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > ul:nth-of-type(1) > li:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/estudar-no-estrangeiro\" title=\"Realizar período de estudos no estrangeiro\">Estudar no Estrangeiro</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-1392\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > ul:nth-of-type(1) > li:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/estagiar-no-estrangeiro\" title=\"Oportunidades para Estagiar no Estrangeiro\">Estagiar no Estrangeiro</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-3877\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > ul:nth-of-type(1) > li:nth-of-type(4)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/international-credit-mobility\" title=\"Informações sobre a International Credit Mobility\">International Credit Mobility</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"last leaf has-children menu-mlid-1292\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > ul:nth-of-type(1) > li:nth-of-type(5)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/coopera%C3%A7%C3%A3o-internacional\" title=\"Cooperação Internacional Ciências ULisboa\">Cooperação Internacional</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"menu-mlid-486 collapsed\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(12)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/ci%C3%AAncias\" title=\"+ Ciências ULisboa\">+ Ciências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(12) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(12) > a:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<ul class=\"submenu\" style=\"display: none;\"></ul>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(12) > ul:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"first leaf menu-mlid-3311\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(12) > ul:nth-of-type(1) > li:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/ci%C3%AAncias-solid%C3%A1ria\" title=\"Associação Ciências Solidária\">Ciências Solidária</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(12) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-1359\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(12) > ul:nth-of-type(1) > li:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/ci%C3%AAncias-com-%C3%A9tica\" title=\"Ciências com Ética - Informações\">Ciências com Ética</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(12) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-966\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(12) > ul:nth-of-type(1) > li:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/ci%C3%AAncia-in%C3%BAtil\" title=\"Ciência Inútil? Pensar e agir fora da caixa\">Ciência Inútil?</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(12) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"last leaf menu-mlid-963\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(12) > ul:nth-of-type(1) > li:nth-of-type(4)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/liga%C3%A7%C3%B5es-%C3%BAteis-0\" title=\"Ligações Úteis sobre Ciência\">Ligações Úteis</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(12) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"menu-mlid-3880 collapsed\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/laboratorio-vivo-para-a-sustentabilidade\" title=\"Laboratório Vivo para a Sustentabilidade\">Sustentabilidade</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > a:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<ul class=\"submenu\" style=\"display: none;\"></ul>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > ul:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"first leaf has-children menu-mlid-3881\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > ul:nth-of-type(1) > li:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/sustentabilidade-no-campus\" title=\"Sustentabilidade no campus Ciências ULisboa\">Sustentabilidade no campus</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-3887\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > ul:nth-of-type(1) > li:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/observacao-monitorizacao\" title=\"Observação &amp; monitorização Ciências ULisboa\">Observação &amp; monitorização</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-3891\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > ul:nth-of-type(1) > li:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/inovacao-demonstracao\" title=\"Inovação &amp; demonstração Ciências ULisboa\">Inovação &amp; demonstração</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-3897\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > ul:nth-of-type(1) > li:nth-of-type(4)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/formacao-1\" title=\"Formação na área da Sustentabilidade\">Formação</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf menu-mlid-3938\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > ul:nth-of-type(1) > li:nth-of-type(5)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/lisboa-capital-verde-europeia-2020-ciencias-ulisboa\" title=\"Lisboa Capital Verde Europeia 2020 | Atividades Ciências ULisboa\">Lisboa Capital Verde Europeia 2020 | Ciências ULisboa</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"leaf has-children menu-mlid-3935\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > ul:nth-of-type(1) > li:nth-of-type(6)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/noticias-e-eventos\" title=\"Notícias e Eventos na área da Sustentabilidade\">Notícias e Eventos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"last leaf menu-mlid-3902\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > ul:nth-of-type(1) > li:nth-of-type(7)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/ligacoes-uteis-sustentabilidade\" title=\"Ligações úteis na área da Sustentabilidade\">Ligações úteis</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"last leaf menu-mlid-347\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(14)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/contactos\" title=\"Contactos Ciências ULisboa\">Contactos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(14) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div id=\"central\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<header></header>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"header-region\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<nav class=\"block-menu-menu-quicklinks \" role=\"navigation\"></nav>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"header-quicklinks\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<ul class=\"quicklinks group\"></ul>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"first\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"https://ciencias.ulisboa.pt/pt/oferta-formativa\" title=\"Lista de cursos de Ciências ULisboa\">Cursos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/candidaturas\" title=\"Candidaturas aos cursos de Ciências ULisboa\">Candidaturas</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/informa%C3%A7%C3%A3o-para-estudantes/\" title=\"Informação para Estudantes de Ciências ULisboa\">Informação para Estudantes</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"clear\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/estudante-internacional/\" title=\"Candidaturas de Estudantes Internacionais\">Estudante Internacional</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/p%C3%BAblico-escolar-geral/\" title=\"Informações para Público Escolar | Geral\">Público Escolar | Geral</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"https://ciencias.ulisboa.pt/pt/ciencias-nos-media\" title=\"Ciências ULisboa nos Média\">Ciências nos Média</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"clear\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/concursos/\" title=\"Concursos - Ciências ULisboa\">Concursos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"https://ciencias.ulisboa.pt/doc\" title=\"Concursos Docentes - Candidaturas Ciências ULisboa\">Concursos Docentes - Candidaturas</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"https://biblios.ciencias.ulisboa.pt/?lang=por\" title=\"Biblios - Sistema de Gestão de Referências Bibliográficas de Ciências\">Publicações</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"https://ciencias.ulisboa.pt/pt/ferramentas-de-apoio-a-distancia\" title=\"Ferramentas de Apoio ao Ensino à Distância Ciências ULisboa\">Ferramentas de Apoio ao Ensino à Distância</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"https://ciencias.ulisboa.pt/pt/provas-academicas\" title=\"Provas Académicas Ciências ULisboa\">Provas Académicas</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"last\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(12)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"https://ciencias.ulisboa.pt/pt/contratacao-monitores\" title=\"Contratação de Monitores Ciências ULisboa\">Contratação de Monitores</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(12) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div role=\"main\" id=\"main-content\" class=\"group\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"ciencias-front-content\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"home-destaques home-box\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"home-box-inner group\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"block-views-clone-of-front-destaque-block \"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<h2 class=\"title\"></h2>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > h2:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<ul class=\"destaque-gallery flickity-enabled is-draggable\" tabindex=\"0\"></ul>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"flickity-viewport\" style=\"height: 392.529px;\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"flickity-slider\" style=\"left: 0px; transform: translateX(-500%);\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"destaques-item is-selected\" style=\"position: absolute; left: 500%;\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"views-field views-field-field-nimagem\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"field-content\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/mestrados-e-p%C3%B3s-gradua%C3%A7%C3%B5es\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<img src=\"https://ciencias.ulisboa.pt/sites/default/files/styles/destaque/public/destaque-mestrados-2020.png?itok=9PlY85TS\" width=\"735\" height=\"290\" alt=\"\">",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1) > img:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"info\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<h3></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/mestrados-e-p%C3%B3s-gradua%C3%A7%C3%B5es\">Mestrados e Pós-Graduações</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<p></p>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"destaques-item\" style=\"position: absolute; left: 100%;\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"views-field views-field-field-nimagem\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"field-content\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/evento/24-06-2020/sessao-final-de-projeto-empresarial\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<img src=\"https://ciencias.ulisboa.pt/sites/default/files/styles/destaque/public/destaque-sessao-final-projeto-empresarial-2020.png?itok=zjW_jr7w\" width=\"735\" height=\"290\" alt=\"\">",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1) > img:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"info\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<h3></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/evento/24-06-2020/sessao-final-de-projeto-empresarial\">Sessão final de Projeto Empresarial</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<p></p>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/evento/24-06-2020/sessao-final-de-projeto-empresarial\" class=\"views-more-link\">Ler mais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"destaques-item\" style=\"position: absolute; left: 200%;\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"views-field views-field-field-nimagem\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"field-content\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/dges-atribuicao-bolsas-estudo-merito-1819-1718\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<img src=\"https://ciencias.ulisboa.pt/sites/default/files/styles/destaque/public/destaque-merito-academico_0.png?itok=kDVvUhGR\" width=\"735\" height=\"290\" alt=\"\">",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1) > img:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"info\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(2) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<h3></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/dges-atribuicao-bolsas-estudo-merito-1819-1718\">DGES - Atribuição de Bolsas de Estudo por Mérito a Estudantes do Ensino Superior</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<p></p>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/dges-atribuicao-bolsas-estudo-merito-1819-1718\" class=\"views-more-link\">Ler mais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"destaques-item\" style=\"position: absolute; left: 300%;\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(4)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"views-field views-field-field-nimagem\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"field-content\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/sa%C3%BAde\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<img src=\"https://ciencias.ulisboa.pt/sites/default/files/styles/destaque/public/destaque-covid-19-2020.png?itok=LjpsJ2HQ\" width=\"735\" height=\"290\" alt=\"\">",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1) > img:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"info\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<h3></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/sa%C3%BAde\">Saúde - COVID-19</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<p></p>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/sa%C3%BAde\" class=\"views-more-link\">Ler mais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"destaques-item\" style=\"position: absolute; left: 400%;\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(5)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"views-field views-field-field-nimagem\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"field-content\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/centro-de-testes-de-ciencias\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<img src=\"https://ciencias.ulisboa.pt/sites/default/files/styles/destaque/public/destaque-centro-testes-ciencias-2020.png?itok=oxyGwRat\" width=\"735\" height=\"290\" alt=\"\">",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1) > img:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"info\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(2) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<h3></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/centro-de-testes-de-ciencias\">Centro de Testes de Ciências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<p></p>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/centro-de-testes-de-ciencias\" class=\"views-more-link\">Ler mais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<ol class=\"flickity-page-dots\"></ol>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > ol:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"dot is-selected\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > ol:nth-of-type(1) > li:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"dot\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > ol:nth-of-type(1) > li:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"dot\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > ol:nth-of-type(1) > li:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"dot\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > ol:nth-of-type(1) > li:nth-of-type(4)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"dot\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > ol:nth-of-type(1) > li:nth-of-type(5)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"home-noticias home-box\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"home-box-inner group\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"block-views-front-noticias-block \"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"view-header\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<h2></h2>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > h2:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a class=\"ver-todos\" href=\"/noticias\">Ver Todos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<ul></ul>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"news-item\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"views-field views-field-title\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<h3 class=\"field-content\"></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(1) > h3:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/noticia/16-06-2020/estradas-amea%C3%A7am-milh%C3%B5es-de-aves-e-mam%C3%ADferos-na-europa\">Estradas ameaçam milhões de aves e mamíferos na Europa</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"views-field views-field-body\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<span class=\"field-content\"></span>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(2) > span:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/noticia/16-06-2020/estradas-amea%C3%A7am-milh%C3%B5es-de-aves-e-mam%C3%ADferos-na-europa\" class=\"views-more-link\">Ler mais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(2) > span:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"news-item\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"views-field views-field-title\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<h3 class=\"field-content\"></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/noticia/14-06-2020/a-interessante-hist%C3%B3ria-do-ub%C3%ADquo-n%C3%BAmero-pi\">A interessante história do ubíquo número Pi</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"views-field views-field-body\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<span class=\"field-content\"></span>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(2) > span:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/noticia/14-06-2020/a-interessante-hist%C3%B3ria-do-ub%C3%ADquo-n%C3%BAmero-pi\" class=\"views-more-link\">Ler mais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(2) > span:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"news-item\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"views-field views-field-title\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<h3 class=\"field-content\"></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(1) > h3:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/noticia/12-06-2020/pandemia-e-matem%C3%A1tica\">Pandemia e Matemática</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"views-field views-field-body\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<span class=\"field-content\"></span>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(2) > span:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/noticia/12-06-2020/pandemia-e-matem%C3%A1tica\" class=\"views-more-link\">Ler mais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(2) > span:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"news-item\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"views-field views-field-title\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<h3 class=\"field-content\"></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(1) > h3:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/noticia/09-06-2020/ci%C3%AAncias-ulisboa-prepara-pr%C3%B3ximo-ano-letivo\">Ciências ULisboa prepara próximo ano letivo</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"views-field views-field-body\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<span class=\"field-content\"></span>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(2) > span:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/noticia/09-06-2020/ci%C3%AAncias-ulisboa-prepara-pr%C3%B3ximo-ano-letivo\" class=\"views-more-link\">Ler mais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(2) > span:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"news-item\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"views-field views-field-title\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<h3 class=\"field-content\"></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(1) > h3:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/noticia/05-06-2020/portugal-participa-no-desenvolvimento-de-instrumento-para-o-maior-telesc%C3%B3pio-do\">Portugal participa no desenvolvimento de instrumento para o maior telescópio do mundo</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"views-field views-field-body\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<span class=\"field-content\"></span>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(2) > span:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/noticia/05-06-2020/portugal-participa-no-desenvolvimento-de-instrumento-para-o-maior-telesc%C3%B3pio-do\" class=\"views-more-link\">Ler mais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(2) > span:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"home-eventos home-box\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"home-box-inner\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"block-views-front-eventos-block \"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"view-header\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<h2></h2>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > h2:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a class=\"ver-todos\" href=\"/eventos\">Ver Todos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<ul></ul>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"events-item clearfix\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"date\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<span class=\"month\"></span>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(1) > span:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<time datetime=\"2020-06-24T00:00:00+01:00\"></time>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(1) > span:nth-of-type(1) > time:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<span class=\"day\"></span>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(1) > span:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<time datetime=\"2020-06-24T00:00:00+01:00\"></time>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(1) > span:nth-of-type(2) > time:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<h3 class=\"field-content\"></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > h3:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/evento/24-06-2020/sessao-final-de-projeto-empresarial\">Sessão final de Projeto Empresarial</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"events-item clearfix\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"date\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<span class=\"month\"></span>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(1) > span:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<time datetime=\"2020-06-24T00:00:00+01:00\"></time>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(1) > span:nth-of-type(1) > time:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<span class=\"day\"></span>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(1) > span:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<time datetime=\"2020-06-24T00:00:00+01:00\"></time>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(1) > span:nth-of-type(2) > time:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<h3 class=\"field-content\"></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > h3:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/evento/24-06-2020/software-engineering-standards-and-philosophy-of-science-models-high-risk-decision\">Software engineering standards and philosophy of science: Models, high-risk decision making, and epistemic warrants</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"events-item clearfix\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"date\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<span class=\"month\"></span>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(1) > span:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<time datetime=\"2020-06-24T00:00:00+01:00\"></time>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(1) > span:nth-of-type(1) > time:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<span class=\"day\"></span>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(1) > span:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<time datetime=\"2020-06-24T00:00:00+01:00\"></time>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(1) > span:nth-of-type(2) > time:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<h3 class=\"field-content\"></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > h3:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/evento/24-06-2020/como-dar-feedback-em-pequenos-videos\">Como dar Feedback em pequenos vídeos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"events-item clearfix\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"date\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<span class=\"month\"></span>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(1) > span:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<time datetime=\"2020-06-25T00:00:00+01:00\"></time>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(1) > span:nth-of-type(1) > time:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<span class=\"day\"></span>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(1) > span:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<time datetime=\"2020-06-25T00:00:00+01:00\"></time>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(1) > span:nth-of-type(2) > time:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<h3 class=\"field-content\"></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > h3:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/evento/25-06-2020/icur2020-2-conferencia-internacional-sobre-riscos-urbanos\">ICUR2020 - 2.ª Conferência Internacional sobre Riscos Urbanos (Evento Adiado)</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"events-item clearfix\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"date\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<span class=\"month\"></span>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(1) > span:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<time datetime=\"2020-06-25T00:00:00+01:00\"></time>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(1) > span:nth-of-type(1) > time:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<span class=\"day\"></span>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(1) > span:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<time datetime=\"2020-06-25T00:00:00+01:00\"></time>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(1) > span:nth-of-type(2) > time:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<h3 class=\"field-content\"></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > h3:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/evento/25-06-2020/counting-minimal-surfaces-in-negatively-curved-3-manifolds\">Counting minimal surfaces in negatively curved 3-manifolds</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"social-share\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<footer class=\"group\"></footer>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"footer_firstcolumn\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"block-block-1 \"></div>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<h3></h3>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > h3:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<p></p>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<br>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1) > br:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<br>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1) > br:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<br>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1) > br:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<br>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1) > br:nth-of-type(4)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<br>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1) > br:nth-of-type(5)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<br>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1) > br:nth-of-type(6)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<br>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1) > br:nth-of-type(7)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<br>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1) > br:nth-of-type(8)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"mailto:info@ciencias.ulisboa.pt\">info@ciencias.ulisboa.pt</a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<noscript></noscript>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > noscript:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"footer_secondcolumn\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<nav class=\"block-menu-block-5 \" role=\"navigation\"></nav>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(2) > nav:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"menu-block-wrapper menu-block-5 menu-name-menu-footer-menu parent-mlid-0 menu-level-1 menu-grid\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(2) > nav:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<ul></ul>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(2) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"first\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(2) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/caixa-de-sugest%C3%B5es\" title=\"Elogios, Sugestões e Reclamações Ciências ULisboa\">Elogios, Sugestões e Reclamações</a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(2) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li></li>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(2) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"https://webmail.ciencias.ulisboa.pt\" title=\"Webmail - Ciências ULisboa\">Webmail</a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(2) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li></li>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(2) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"http://moodle.ciencias.ulisboa.pt/\" title=\"Moodle - Ciências ULisboa\">Moodle</a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(2) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li></li>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(2) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/copyright-e-termos-legais\" title=\"Copyright e Termos Legais - Ciências ULisboa\">Copyright e Termos Legais</a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(2) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li></li>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(2) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/ficha-t%C3%A9cnica\" title=\"Ficha Técnica - Ciências ULisboa\">Ficha Técnica</a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(2) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"last\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(2) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/sitemap\" title=\"Mapa do Site - Ciências ULisboa\">Mapa do Site</a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(2) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"footer_thirdcolumn\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<nav class=\"block-menu-block-6 \" role=\"navigation\"></nav>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(3) > nav:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<ul></ul>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(3) > nav:nth-of-type(1) > ul:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"first\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(3) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"http://www.fciencias-id.pt/\" title=\"FCiências.ID - Ciências ULisboa\" target=\"_blank\" rel=\"noopener noreferrer\">FCiências.ID</a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(3) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li></li>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(3) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"http://www.teclabs.pt/\" title=\"Tec Labs - Centro de Inovação\" target=\"_blank\" rel=\"noopener noreferrer\">Tec Labs</a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(3) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li></li>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(3) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"http://www.ulisboa.pt\" title=\"Universidade de Lisboa\">ULisboa</a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(3) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li></li>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(3) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/pt/sistema-logos\" title=\"Sistema Logos - Ciências ULisboa\">Sistema Logos</a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(3) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li class=\"last\"></li>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(3) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"http://fenix.ciencias.ulisboa.pt\" title=\"Sistema Fenix - Ciências ULisboa\">Sistema Fenix</a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(3) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"footer_fourthcolumn\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"block-block-9 \"></div>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<ul class=\"footer-social group\"></ul>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > ul:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li></li>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"https://twitter.com/fc_ul\" target=\"_blank\" title=\"Twitter Ciências ULisboa\" class=\"footer-social-twitter\" rel=\"noopener noreferrer\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<span class=\"fa fa-twitter\"></span>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1) > span:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li></li>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"https://www.facebook.com/fac.ciencias.ul\" target=\"_blank\" title=\"Facebook Ciências ULisboa\" class=\"footer-social-facebook\" rel=\"noopener noreferrer\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<span class=\"fa fa-facebook\"></span>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1) > span:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li></li>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"https://www.youtube.com/user/FaculdadeCiencias\" target=\"_blank\" title=\"Youtube Ciências ULisboa\" class=\"footer-social-youtube\" rel=\"noopener noreferrer\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<span class=\"fa fa-youtube-play\"></span>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1) > span:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li></li>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"https://www.instagram.com/ciencias_ulisboa_oficial\" target=\"_blank\" title=\"Instagram Ciências ULisboa\" class=\"footer-social-instagram\" rel=\"noopener noreferrer\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<span class=\"fa fa-instagram\"></span>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1) > span:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li></li>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"https://pt.linkedin.com/school/cienciasulisboa\" target=\"_blank\" title=\"Linkedin Ciências ULisboa\" class=\"footer-social-youtube\" rel=\"noopener noreferrer\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<span class=\"fa fa-linkedin\"></span>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1) > span:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<li></li>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"/rss/noticias\" target=\"_blank\" title=\"RSS\" class=\"footer-social-rss\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<span class=\"fa fa-rss\"></span>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1) > span:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"block-block-10 \"></div>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div id=\"container_news_opcoes\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div class=\"ciencias\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<p></p>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<em></em>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1) > em:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<br>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1) > br:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<em></em>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1) > em:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<strong></strong>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > strong:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<em></em>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > strong:nth-of-type(1) > em:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<label for=\"email\" id=\"label_email\"></label>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > strong:nth-of-type(1) > em:nth-of-type(1) > label:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<span></span>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > span:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<input type=\"text\" name=\"email\" id=\"email\" title=\"email\">",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > span:nth-of-type(1) > input:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<button onclick=\"adicionarEmail()\" class=\"btnCI btnCI-inverse\"></button>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > span:nth-of-type(1) > button:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<br>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > br:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<div id=\"buttons_confirm\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<br>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > br:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<br>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > br:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<br>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > br:nth-of-type(3)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<p></p>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<a href=\"https://ciencias.ulisboa.pt/pt/node/9888/\" class=\"listagens\">Listas de Divulgação Ciências</a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Element is not visible.",
            "resultCode": "RC1",
            "htmlCode": "<span class=\"copyright\"></span>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > span:nth-of-type(1)"
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
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "passed": 1,
          "warning": 0,
          "failed": 0,
          "outcome": "passed",
          "description": "The `lang` attribute exists and has a value."
        },
        "results": [
          {
            "verdict": "passed",
            "description": "The `lang` attribute exists and has a value.",
            "resultCode": "RC1",
            "htmlCode": "<html class=\"no-js js\" lang=\"pt-pt\" dir=\"ltr\"><head></head><body></body></html>",
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
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": []
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
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "passed": 1,
          "warning": 0,
          "failed": 0,
          "outcome": "passed",
          "description": "The `lang` attribute has a valid value."
        },
        "results": [
          {
            "verdict": "passed",
            "description": "The `lang` attribute has a valid value.",
            "resultCode": "RC1",
            "htmlCode": "<html class=\"no-js js\" lang=\"pt-pt\" dir=\"ltr\"><head></head><body></body></html>",
            "pointer": "html"
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
              "input[type='image']"
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
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "passed": 0,
          "warning": 0,
          "failed": 0,
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
              "type='image'"
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
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "passed": 0,
          "warning": 0,
          "failed": 0,
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
              "role='button'"
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
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:title"
          ],
          "passed": 2,
          "warning": 0,
          "failed": 0,
          "outcome": "passed",
          "description": "The test target has a valid accessible name."
        },
        "results": [
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "ok",
            "htmlCode": "<input type=\"submit\" id=\"btn-pesquisa\" value=\"ok\">",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > form:nth-of-type(1) > input:nth-of-type(2)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "OK",
            "htmlCode": "<button onclick=\"adicionarEmail()\" class=\"btnCI btnCI-inverse\"></button>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > span:nth-of-type(1) > button:nth-of-type(1)"
          }
        ]
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
              "role='link'"
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
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:title"
          ],
          "passed": 198,
          "warning": 0,
          "failed": 19,
          "outcome": "failed",
          "description": "The test target doesn't have an accessible name, or it's empty (\"\")."
        },
        "results": [
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Passar para o conteúdo principal",
            "htmlCode": "<a href=\"#main-content\" class=\"element-invisible element-focusable\">Passar para o conteúdo principal</a>",
            "pointer": "html > body > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Português",
            "htmlCode": "<a href=\"/pt\" class=\"language-link active\" xml:lang=\"pt-pt\" lang=\"pt-pt\">Português</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "English",
            "htmlCode": "<a href=\"/en\" class=\"language-link\" xml:lang=\"en\" lang=\"en\">English</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Login",
            "htmlCode": "<a href=\"/pt/user\">Login</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "failed",
            "description": "The test target doesn't have an accessible name, or it's empty (\"\").",
            "resultCode": "RC2",
            "accessibleName": "",
            "htmlCode": "<a href=\"#\" class=\"hamburger hamb-nav\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "home",
            "htmlCode": "<a href=\"/pt\" title=\"home\" rel=\"home\" class=\"active\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "home",
            "htmlCode": "<a href=\"/pt\" title=\"home\" rel=\"home\" class=\"active\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "A Faculdade",
            "htmlCode": "<a href=\"/pt/a-faculdade\" title=\"A Faculdade de Ciências da ULisboa\">A Faculdade</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "failed",
            "description": "The test target doesn't have an accessible name, or it's empty (\"\").",
            "resultCode": "RC2",
            "accessibleName": "",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(2)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Sobre",
            "htmlCode": "<a href=\"/pt/sobre\" title=\"Sobre Ciências ULisboa\">Sobre</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Órgãos de Governo",
            "htmlCode": "<a href=\"/pt/%C3%B3rg%C3%A3os-de-governo\" title=\"Órgãos de Governo Ciências ULisboa\">Órgãos de Governo</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Provedor",
            "htmlCode": "<a href=\"/pt/provedor\" title=\"Provedor Ciências ULisboa\">Provedor</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Unidades de Serviço",
            "htmlCode": "<a href=\"/pt/unidades-de-servi%C3%A7o\" title=\"Unidades de Serviço Ciências ULisboa\">Unidades de Serviço</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Informação Oficial",
            "htmlCode": "<a href=\"/pt/informa%C3%A7%C3%A3o-oficial-0\" title=\"Informação Oficial Ciências ULisboa\">Informação Oficial</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Mérito",
            "htmlCode": "<a href=\"/pt/merito\" title=\"Reconhecimento do Mérito em Ciências ULisboa\">Mérito</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Rede Alumni",
            "htmlCode": "<a href=\"/pt/rede-alumni\" title=\"Rede Alumni Ciências ULisboa\">Rede Alumni</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Formação",
            "htmlCode": "<a href=\"/pt/formacao-0\" title=\"Formação Ciências ULisboa\">Formação</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Legislação e Regulamentos",
            "htmlCode": "<a href=\"/pt/legisla%C3%A7%C3%A3o-e-regulamentos\" title=\"Legislação e Regulamentos Ciências ULisboa\">Legislação e Regulamentos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Identidade Visual e Normas Gráficas",
            "htmlCode": "<a href=\"/pt/identidade-visual-e-normas-gr%C3%A1ficas\" title=\"Identidade Visual e Normas Gráficas Ciências ULisboa\">Identidade Visual e Normas Gráficas</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Proteção de Dados",
            "htmlCode": "<a href=\"/pt/prote%C3%A7%C3%A3o-de-dados\" title=\"Regulamento Geral de Proteção de Dados\">Proteção de Dados</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Saúde: COVID-19",
            "htmlCode": "<a href=\"/pt/sa%C3%BAde\" title=\"Informações sobre a COVID-19\">Saúde: COVID-19</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "failed",
            "description": "The test target doesn't have an accessible name, or it's empty (\"\").",
            "resultCode": "RC2",
            "accessibleName": "",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(2)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Comunicados à Comunidade",
            "htmlCode": "<a href=\"/pt/comunicados-a-comunidade-covid-19\" title=\"Comunicados da Direção de Ciências e da Reitoria da ULisboa relativos à COVID-19\">Comunicados à Comunidade</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Plano de Contingência",
            "htmlCode": "<a href=\"/pt/plano-de-contingencia-em-ciencias-covid-19\" title=\"Plano de Contingência em Ciências ULisboa (COVID-19)\">Plano de Contingência</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Centro de Testes de Ciências",
            "htmlCode": "<a href=\"/pt/centro-de-testes-de-ciencias\" title=\"Centro de Testes de Ciências ULisboa\">Centro de Testes de Ciências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "#EuFicoEmCasa",
            "htmlCode": "<a href=\"/pt/euficoemcasa\" title=\"#EuFicoEmCasa Ciências ULisboa\">#EuFicoEmCasa</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Financiamento COVID-19",
            "htmlCode": "<a href=\"/pt/covid-19-financiamento\" title=\"Financiamento relacionado com a COVID-19\">Financiamento COVID-19</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Projetos COVID-19",
            "htmlCode": "<a href=\"/pt/projetos-covid-19\" title=\"Projetos relacionados com a COVID-19\">Projetos COVID-19</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Responsabilidade Social",
            "htmlCode": "<a href=\"/pt/responsabilidade-social\" title=\"Responsabilidade Social em resposta à COVID-19\">Responsabilidade Social</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Legislação/Orientações",
            "htmlCode": "<a href=\"/pt/legislacao-orientacoes-covid-19\" title=\"Legislação/Orientações sobre a COVID-19\">Legislação/Orientações</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Horários de Atendimento",
            "htmlCode": "<a href=\"/pt/horarios-de-atendimento-covid\" title=\"Horários de Atendimento: retoma gradual de atividades presenciais em Ciências ULisboa\">Horários de Atendimento</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Qualidade",
            "htmlCode": "<a href=\"/pt/qualidade\" title=\"Qualidade Ciências ULisboa\">Qualidade</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "failed",
            "description": "The test target doesn't have an accessible name, or it's empty (\"\").",
            "resultCode": "RC2",
            "accessibleName": "",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(2)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "QCiências",
            "htmlCode": "<a href=\"/pt/qciencias\" title=\"Sistema Integrado de Garantia da Qualidade da Faculdade de Ciências da Universidade de Lisboa\">QCiências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Inquéritos",
            "htmlCode": "<a href=\"/pt/inqueritos\" title=\"Inquéritos Ciências ULisboa\">Inquéritos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Estatísticas",
            "htmlCode": "<a href=\"/pt/estatisticas\" title=\"Estatísticas Ciências ULisboa\">Estatísticas</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Acreditações e Rankings",
            "htmlCode": "<a href=\"/pt/acreditacoes-e-rankings\" title=\"Avaliação externa: Acreditações e Rankings\">Acreditações e Rankings</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Reconhecimento e Certificação",
            "htmlCode": "<a href=\"/pt/reconhecimento-e-certificacao\" title=\"Reconhecimento e Certificação Institucional e de Cursos\">Reconhecimento e Certificação</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Elogios, Sugestões e Reclamações",
            "htmlCode": "<a href=\"https://ciencias.ulisboa.pt/pt/caixa-de-sugestoes\" title=\"Elogios, Sugestões e Reclamações Ciências ULisboa\">Elogios, Sugestões e Reclamações</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Viver",
            "htmlCode": "<a href=\"/pt/viver\" title=\"Viver em Ciências ULisboa\">Viver</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "failed",
            "description": "The test target doesn't have an accessible name, or it's empty (\"\").",
            "resultCode": "RC2",
            "accessibleName": "",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(2)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "O  Campus",
            "htmlCode": "<a href=\"/pt/o-campus\" title=\"O Campus de Ciências ULisboa\">O  Campus</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Biblioteca",
            "htmlCode": "<a href=\"/pt/unidade/biblioteca\" title=\"Biblioteca Ciências ULisboa\">Biblioteca</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Informática",
            "htmlCode": "<a href=\"/pt/dsi\" title=\"Direção de Serviços Informáticos\">Informática</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Apoio Psicopedagógico",
            "htmlCode": "<a href=\"/pt/gabinete-de-apoio-psicopedag%C3%B3gico\" title=\"Gabinete de Apoio Psicopedagógico\">Apoio Psicopedagógico</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Segurança, Saúde e Sustentabilidade",
            "htmlCode": "<a href=\"/pt/g3s\" title=\"Segurança, Saúde e Sustentabilidade Ciências ULisboa\">Segurança, Saúde e Sustentabilidade</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Associação dos Estudantes",
            "htmlCode": "<a href=\"http://aefcl.ciencias.ulisboa.pt/\" title=\"Associação dos Estudantes Ciências ULisboa\">Associação dos Estudantes</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Associação de Trabalhadores",
            "htmlCode": "<a href=\"/pt/atfcul\" title=\"Associação de Trabalhadores Ciências ULisboa\">Associação de Trabalhadores</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Galeria Ciências e outros Espaços de Exposição",
            "htmlCode": "<a href=\"/pt/galeria-ciencias-e-outros-espacos\" title=\"Galeria Ciências e outros Espaços de Exposição em Ciências ULisboa\">Galeria Ciências e outros Espaços de Exposição</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Desporto e Lazer",
            "htmlCode": "<a href=\"/pt/desporto-e-lazer\" title=\"Desporto, Saúde e Bem-Estar\">Desporto e Lazer</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Cantinas e Bares",
            "htmlCode": "<a href=\"/pt/cantinas-e-bares\" title=\"Cantinas e Bares Ciências ULisboa\">Cantinas e Bares</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(10) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Loja de Ciências",
            "htmlCode": "<a href=\"/pt/loja-de-ci%C3%AAncias\" title=\"Loja de Ciências ULisboa\">Loja de Ciências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(11) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Protocolos e Acordos",
            "htmlCode": "<a href=\"/pt/protocolos-e-acordos\" title=\"Protocolos e Acordos Ciências ULisboa\">Protocolos e Acordos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(12) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Catálogo de Serviços",
            "htmlCode": "<a href=\"/pt/catalogo-de-servicos\" title=\"Catálogo de Serviços Ciências ULisboa\">Catálogo de Serviços</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(13) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Departamentos",
            "htmlCode": "<a href=\"/pt/departamentos\" title=\"Departamentos de Ciências ULisboa\">Departamentos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "failed",
            "description": "The test target doesn't have an accessible name, or it's empty (\"\").",
            "resultCode": "RC2",
            "accessibleName": "",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(2)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Biologia Animal",
            "htmlCode": "<a href=\"/pt/biologia-animal\" title=\"Departamento de Biologia Animal\">Biologia Animal</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Biologia Vegetal",
            "htmlCode": "<a href=\"/pt/dbv\" title=\"Departamento de Biologia Vegetal\">Biologia Vegetal</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Engenharia Geográfica, Geofísica e Energia",
            "htmlCode": "<a href=\"/pt/degge\" title=\"Departamento de Engenharia Geográfica, Geofísica e Energia\">Engenharia Geográfica, Geofísica e Energia</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Estatística e Investigação Operacional",
            "htmlCode": "<a href=\"/pt/deio\" title=\"Departamento de Estatística e Investigação Operacional\">Estatística e Investigação Operacional</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Física",
            "htmlCode": "<a href=\"/pt/df\" title=\"Departamento de Física\">Física</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Geologia",
            "htmlCode": "<a href=\"/pt/dg\" title=\"Departamento de Geologia\">Geologia</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "História e Filosofia das Ciências",
            "htmlCode": "<a href=\"/pt/dhfc\" title=\"Departamento de História e Filosofia das Ciências\">História e Filosofia das Ciências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Informática",
            "htmlCode": "<a href=\"/pt/di\" title=\"Departamento de Informática\">Informática</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Matemática",
            "htmlCode": "<a href=\"/pt/dm\" title=\"Departamento de Matemática\">Matemática</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Química e Bioquímica",
            "htmlCode": "<a href=\"/pt/dqb\" title=\"Departamento de Química e Bioquímica\">Química e Bioquímica</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(10) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Ensino",
            "htmlCode": "<a href=\"/pt/ensino\" title=\"Ensino de Ciências ULisboa\">Ensino</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "failed",
            "description": "The test target doesn't have an accessible name, or it's empty (\"\").",
            "resultCode": "RC2",
            "accessibleName": "",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(2)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Oferta Formativa",
            "htmlCode": "<a href=\"/pt/oferta-formativa\" title=\"Oferta Formativa Ciências ULisboa\">Oferta Formativa</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Candidaturas",
            "htmlCode": "<a href=\"/pt/candidaturas\" title=\"Candidaturas aos Cursos de Ciências ULisboa\">Candidaturas</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Estudante Internacional",
            "htmlCode": "<a href=\"/pt/estudante-internacional\" title=\"Candidaturas Estudante Internacional\">Estudante Internacional</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Publicações",
            "htmlCode": "<a href=\"/pt/publica%C3%A7%C3%B5es\" title=\"Publicações Ciências ULisboa\">Publicações</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Competências Transversais",
            "htmlCode": "<a href=\"/pt/compet%C3%AAncias-transversais\" title=\"Competencias Transversais Ciências ULisboa\">Competências Transversais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Reconhecimento de Graus e Diplomas",
            "htmlCode": "<a href=\"/pt/reconhecimento-de-graus-e-diplomas\" title=\"Reconhecimento de Graus e Diplomas Ciências ULisboa\">Reconhecimento de Graus e Diplomas</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Inscrições 2019/2020",
            "htmlCode": "<a href=\"/pt/inscricoes\" title=\"Inscrições no ano letivo 2019/2020 Ciências ULisboa\">Inscrições 2019/2020</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Informação para Estudantes",
            "htmlCode": "<a href=\"/pt/informa%C3%A7%C3%A3o-para-estudantes\" title=\"Informação para Estudantes Ciências ULisboa\">Informação para Estudantes</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Ferramentas de Apoio ao Ensino à Distância",
            "htmlCode": "<a href=\"/pt/ferramentas-de-apoio-a-distancia\" title=\"Ferramentas de Apoio ao Ensino à Distância Ciências ULisboa\">Ferramentas de Apoio ao Ensino à Distância</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Sociedade",
            "htmlCode": "<a href=\"/pt/sociedade\" title=\"Interação com a Sociedade\">Sociedade</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "failed",
            "description": "The test target doesn't have an accessible name, or it's empty (\"\").",
            "resultCode": "RC2",
            "accessibleName": "",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(2)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Público Escolar | Geral",
            "htmlCode": "<a href=\"/pt/p%C3%BAblico-escolar-geral\" title=\"Informação para Público Escolar | Geral\">Público Escolar | Geral</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Notícias",
            "htmlCode": "<a href=\"/pt/noticias\" title=\"Notícias | Ciências ULisboa\">Notícias</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Eventos",
            "htmlCode": "<a href=\"/pt/eventos\" title=\"Eventos | Ciências ULisboa\">Eventos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Multimédia",
            "htmlCode": "<a href=\"/pt/multim%C3%A9dia\" title=\"Multimédia | Ciências ULisboa\">Multimédia</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Ciências nos Média",
            "htmlCode": "<a href=\"/pt/ciencias-nos-media\" title=\"Página de acesso ao press kit, comunicados de imprensa e recortes de imprensa\">Ciências nos Média</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Newsletter de Ciências",
            "htmlCode": "<a href=\"/pt/newsletterdeciencias\" title=\"Newsletter | Ciências ULisboa\">Newsletter de Ciências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Comunicadores de Ciência em Ciências",
            "htmlCode": "<a href=\"/pt/comunicadores-de-ciencia-em-ciencias\" title=\"Comunicadores de Ciência | Ciências ULisboa\">Comunicadores de Ciência em Ciências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "O que faço aqui?",
            "htmlCode": "<a href=\"/pt/o-que-faco-aqui\" title=\"O que faço aqui? | Ciências ULisboa\">O que faço aqui?</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Investigação",
            "htmlCode": "<a href=\"/pt/a-investiga%C3%A7%C3%A3o-na-faculdade-de-ci%C3%AAncias-um-sistema-em-rede\" title=\"Investigação de Ciências ULisboa\">Investigação</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "failed",
            "description": "The test target doesn't have an accessible name, or it's empty (\"\").",
            "resultCode": "RC2",
            "accessibleName": "",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(2)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Unidades de I&D",
            "htmlCode": "<a href=\"/pt/unidades-de-id\" title=\"Unidades de I&amp;D Ciências ULisboa\">Unidades de I&amp;D</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Infraestruturas de I&D",
            "htmlCode": "<a href=\"/pt/infraestruturas-de-id\" title=\"Infraestruturas de I&amp;D Ciências ULisboa\">Infraestruturas de I&amp;D</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Projetos",
            "htmlCode": "<a href=\"https://ciencias.ulisboa.pt/servicos/fcul/Main/?servico=fundus\" title=\"Projetos Ciências ULisboa\">Projetos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Protocolos",
            "htmlCode": "<a href=\"/pt/protocolos-2\" title=\"Protocolos Ciências ULisboa\">Protocolos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Concursos",
            "htmlCode": "<a href=\"/pt/concursos\" title=\"Concursos Ciências ULisboa\">Concursos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Publicações",
            "htmlCode": "<a href=\"https://biblios.ciencias.ulisboa.pt/?lang=por\" title=\"Biblios - Sistema de Gestão de Referências Bibliográficas de Ciências\">Publicações</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Incoming Researchers",
            "htmlCode": "<a href=\"/pt/researchers\" title=\"Incoming Researchers Ciências ULisboa\">Incoming Researchers</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Gestão de Projetos",
            "htmlCode": "<a href=\"/pt/gest%C3%A3o-de-projetos-0\" title=\"Gestão de Projetos Ciências ULisboa\">Gestão de Projetos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Colégios e Redes ULisboa",
            "htmlCode": "<a href=\"/pt/col%C3%A9gios-e-redes-ulisboa\" title=\"Colégios e Redes existentes na ULisboa\">Colégios e Redes ULisboa</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "PhD Support Programme",
            "htmlCode": "<a href=\"/pt/phd-support-programme\" title=\"PhD Support Programme Ciências ULisboa\">PhD Support Programme</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(10) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Programas Doutorais",
            "htmlCode": "<a href=\"/pt/programas-doutorais\" title=\"Programas Doutorais Ciências ULisboa\">Programas Doutorais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(11) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Fundação da FCUL",
            "htmlCode": "<a href=\"/pt/funda%C3%A7%C3%A3o-da-fcul\" title=\"Fundação\">Fundação da FCUL</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(12) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "FCiências.ID",
            "htmlCode": "<a href=\"http://www.fciencias-id.pt/\" title=\"FCiências.ID Ciências ULisboa\" target=\"_blank\" rel=\"noopener noreferrer\">FCiências.ID</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(13) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Financiamento",
            "htmlCode": "<a href=\"/pt/financiamento-0\" title=\"Programas de Financiamento\">Financiamento</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(14) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Colaborações Internacionais",
            "htmlCode": "<a href=\"/pt/colabora%C3%A7%C3%B5es-internacionais\" title=\"Redes Internacionais\">Colaborações Internacionais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(15) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Documentos",
            "htmlCode": "<a href=\"/pt/documentos-3\" title=\"Documentos de Apoio\">Documentos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(16) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Inovação",
            "htmlCode": "<a href=\"/pt/inova%C3%A7%C3%A3o-e-empreendedorismo\" title=\"Inovação em Ciências ULisboa\">Inovação</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "failed",
            "description": "The test target doesn't have an accessible name, or it's empty (\"\").",
            "resultCode": "RC2",
            "accessibleName": "",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(2)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Tec Labs - Centro de Inovação",
            "htmlCode": "<a href=\"http://teclabs.pt/\" title=\"Tec Labs - Centro de Inovação de Ciências ULisboa\" target=\"_blank\" rel=\"noopener noreferrer\">Tec Labs - Centro de Inovação</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "TT & PI @ Ciências",
            "htmlCode": "<a href=\"/pt/tt-pi-ci%C3%AAncias\" title=\"Transferências de Tecnologia e Propriedade Intelectual\">TT &amp; PI @ Ciências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Rede de Ciências-Empresas",
            "htmlCode": "<a href=\"/pt/rede-de-ci%C3%AAncias-empresas\" title=\"Rede de Ciências ULisboa-Empresas\">Rede de Ciências-Empresas</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Startups e Spinoffs",
            "htmlCode": "<a href=\"/pt/startups-e-spinoffs\" title=\"Startups e Spinoffs Ciências ULisboa\">Startups e Spinoffs</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Empreendedorismo",
            "htmlCode": "<a href=\"/pt/empreendedorismo\" title=\"Empreendedorismo Ciências ULisboa\">Empreendedorismo</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "KIC EIT Health",
            "htmlCode": "<a href=\"/pt/kic-eit-health\" title=\"KIC EIT Health Programme\">KIC EIT Health</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "MARE Startup",
            "htmlCode": "<a href=\"/pt/mare-startup\" title=\"Programa MARE Startup\">MARE Startup</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Financiamento",
            "htmlCode": "<a href=\"/pt/financiamento-%C3%A0-inova%C3%A7%C3%A3o\" title=\"Programas de Financiamento para a Inovação\">Financiamento</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Innoversia",
            "htmlCode": "<a href=\"/pt/innoversia\" title=\"Innoversia - Inovação aberta\">Innoversia</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Emprego",
            "htmlCode": "<a href=\"/pt/gabinete-de-empregabilidade\" title=\"Informações sobre Emprego\">Emprego</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > a:nth-of-type(1)"
          },
          {
            "verdict": "failed",
            "description": "The test target doesn't have an accessible name, or it's empty (\"\").",
            "resultCode": "RC2",
            "accessibleName": "",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > a:nth-of-type(2)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Portal de Emprego",
            "htmlCode": "<a href=\"/pt/portal-de-emprego\" title=\"Portal de Emprego Ciências ULisboa\">Portal de Emprego</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Menu de Concursos",
            "htmlCode": "<a href=\"/pt/emprego/concursos\" title=\"Concursos Ciências ULisboa\">Menu de Concursos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Estágios",
            "htmlCode": "<a href=\"/pt/est%C3%A1gios-0\" title=\"Programas de Estágios\">Estágios</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Programa de Estágios de Verão FCUL",
            "htmlCode": "<a href=\"/pt/programa-de-est%C3%A1gios-de-ver%C3%A3o-fcul\" title=\"Programa de Estágios de Verão Ciências ULisboa\">Programa de Estágios de Verão FCUL</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Oportunidades",
            "htmlCode": "<a href=\"/pt/oportunidades\" title=\"Oportunidades Nacionais e Internacionais\">Oportunidades</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "EU Careers",
            "htmlCode": "<a href=\"/pt/eu-careers\" title=\"Candidaturas EU Careers\">EU Careers</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Voluntariado",
            "htmlCode": "<a href=\"/pt/voluntariado\" title=\"Voluntariado Ciências ULisboa\">Voluntariado</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Jobshop Ciências",
            "htmlCode": "<a href=\"/pt/jobshop-ciencias\" title=\"Jobshop Ciências ULisboa\">Jobshop Ciências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Eventos",
            "htmlCode": "<a href=\"/pt/eventos-0\" title=\"Eventos e Sessões\">Eventos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Competências Transversais",
            "htmlCode": "<a href=\"/pt/compet%C3%AAncias-transversais-0\" title=\"Competências Transversais Ciências ULisboa\">Competências Transversais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(10) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Parcerias",
            "htmlCode": "<a href=\"/pt/parcerias\" title=\"Parcerias de colaboração Ciências ULisboa\">Parcerias</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(11) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Empregabilidade",
            "htmlCode": "<a href=\"/pt/empregabilidade\" title=\"Empregabilidade Ciências ULisboa\">Empregabilidade</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(12) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Documentos",
            "htmlCode": "<a href=\"/pt/documentos-1\" title=\"Documentos de Apoio para Alunos e Diplomados\">Documentos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(13) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Ligações Úteis",
            "htmlCode": "<a href=\"/pt/liga%C3%A7%C3%B5es-%C3%BAteis\" title=\"Ligações Úteis - Emprego\">Ligações Úteis</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(14) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Internacional",
            "htmlCode": "<a href=\"/pt/internacional\" title=\"Internacional Ciências ULisboa\">Internacional</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > a:nth-of-type(1)"
          },
          {
            "verdict": "failed",
            "description": "The test target doesn't have an accessible name, or it's empty (\"\").",
            "resultCode": "RC2",
            "accessibleName": "",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > a:nth-of-type(2)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Ciências Incoming",
            "htmlCode": "<a href=\"/pt/ci%C3%AAncias-incoming\" title=\"Incoming\">Ciências Incoming</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Estudar no Estrangeiro",
            "htmlCode": "<a href=\"/pt/estudar-no-estrangeiro\" title=\"Realizar período de estudos no estrangeiro\">Estudar no Estrangeiro</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Estagiar no Estrangeiro",
            "htmlCode": "<a href=\"/pt/estagiar-no-estrangeiro\" title=\"Oportunidades para Estagiar no Estrangeiro\">Estagiar no Estrangeiro</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "International Credit Mobility",
            "htmlCode": "<a href=\"/pt/international-credit-mobility\" title=\"Informações sobre a International Credit Mobility\">International Credit Mobility</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Cooperação Internacional",
            "htmlCode": "<a href=\"/pt/coopera%C3%A7%C3%A3o-internacional\" title=\"Cooperação Internacional Ciências ULisboa\">Cooperação Internacional</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "+ Ciências",
            "htmlCode": "<a href=\"/pt/ci%C3%AAncias\" title=\"+ Ciências ULisboa\">+ Ciências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(12) > a:nth-of-type(1)"
          },
          {
            "verdict": "failed",
            "description": "The test target doesn't have an accessible name, or it's empty (\"\").",
            "resultCode": "RC2",
            "accessibleName": "",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(12) > a:nth-of-type(2)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Ciências Solidária",
            "htmlCode": "<a href=\"/pt/ci%C3%AAncias-solid%C3%A1ria\" title=\"Associação Ciências Solidária\">Ciências Solidária</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(12) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Ciências com Ética",
            "htmlCode": "<a href=\"/pt/ci%C3%AAncias-com-%C3%A9tica\" title=\"Ciências com Ética - Informações\">Ciências com Ética</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(12) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Ciência Inútil?",
            "htmlCode": "<a href=\"/pt/ci%C3%AAncia-in%C3%BAtil\" title=\"Ciência Inútil? Pensar e agir fora da caixa\">Ciência Inútil?</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(12) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Ligações Úteis",
            "htmlCode": "<a href=\"/pt/liga%C3%A7%C3%B5es-%C3%BAteis-0\" title=\"Ligações Úteis sobre Ciência\">Ligações Úteis</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(12) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Sustentabilidade",
            "htmlCode": "<a href=\"/pt/laboratorio-vivo-para-a-sustentabilidade\" title=\"Laboratório Vivo para a Sustentabilidade\">Sustentabilidade</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > a:nth-of-type(1)"
          },
          {
            "verdict": "failed",
            "description": "The test target doesn't have an accessible name, or it's empty (\"\").",
            "resultCode": "RC2",
            "accessibleName": "",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > a:nth-of-type(2)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Sustentabilidade no campus",
            "htmlCode": "<a href=\"/pt/sustentabilidade-no-campus\" title=\"Sustentabilidade no campus Ciências ULisboa\">Sustentabilidade no campus</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Observação & monitorização",
            "htmlCode": "<a href=\"/pt/observacao-monitorizacao\" title=\"Observação &amp; monitorização Ciências ULisboa\">Observação &amp; monitorização</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Inovação & demonstração",
            "htmlCode": "<a href=\"/pt/inovacao-demonstracao\" title=\"Inovação &amp; demonstração Ciências ULisboa\">Inovação &amp; demonstração</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Formação",
            "htmlCode": "<a href=\"/pt/formacao-1\" title=\"Formação na área da Sustentabilidade\">Formação</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Lisboa Capital Verde Europeia 2020 | Ciências ULisboa",
            "htmlCode": "<a href=\"/pt/lisboa-capital-verde-europeia-2020-ciencias-ulisboa\" title=\"Lisboa Capital Verde Europeia 2020 | Atividades Ciências ULisboa\">Lisboa Capital Verde Europeia 2020 | Ciências ULisboa</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Notícias e Eventos",
            "htmlCode": "<a href=\"/pt/noticias-e-eventos\" title=\"Notícias e Eventos na área da Sustentabilidade\">Notícias e Eventos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Ligações úteis",
            "htmlCode": "<a href=\"/pt/ligacoes-uteis-sustentabilidade\" title=\"Ligações úteis na área da Sustentabilidade\">Ligações úteis</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Contactos",
            "htmlCode": "<a href=\"/pt/contactos\" title=\"Contactos Ciências ULisboa\">Contactos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(14) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Cursos",
            "htmlCode": "<a href=\"https://ciencias.ulisboa.pt/pt/oferta-formativa\" title=\"Lista de cursos de Ciências ULisboa\">Cursos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Candidaturas",
            "htmlCode": "<a href=\"/pt/candidaturas\" title=\"Candidaturas aos cursos de Ciências ULisboa\">Candidaturas</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Informação para Estudantes",
            "htmlCode": "<a href=\"/pt/informa%C3%A7%C3%A3o-para-estudantes/\" title=\"Informação para Estudantes de Ciências ULisboa\">Informação para Estudantes</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Estudante Internacional",
            "htmlCode": "<a href=\"/pt/estudante-internacional/\" title=\"Candidaturas de Estudantes Internacionais\">Estudante Internacional</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Público Escolar | Geral",
            "htmlCode": "<a href=\"/pt/p%C3%BAblico-escolar-geral/\" title=\"Informações para Público Escolar | Geral\">Público Escolar | Geral</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Ciências nos Média",
            "htmlCode": "<a href=\"https://ciencias.ulisboa.pt/pt/ciencias-nos-media\" title=\"Ciências ULisboa nos Média\">Ciências nos Média</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Concursos",
            "htmlCode": "<a href=\"/pt/concursos/\" title=\"Concursos - Ciências ULisboa\">Concursos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Concursos Docentes - Candidaturas",
            "htmlCode": "<a href=\"https://ciencias.ulisboa.pt/doc\" title=\"Concursos Docentes - Candidaturas Ciências ULisboa\">Concursos Docentes - Candidaturas</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Publicações",
            "htmlCode": "<a href=\"https://biblios.ciencias.ulisboa.pt/?lang=por\" title=\"Biblios - Sistema de Gestão de Referências Bibliográficas de Ciências\">Publicações</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Ferramentas de Apoio ao Ensino à Distância",
            "htmlCode": "<a href=\"https://ciencias.ulisboa.pt/pt/ferramentas-de-apoio-a-distancia\" title=\"Ferramentas de Apoio ao Ensino à Distância Ciências ULisboa\">Ferramentas de Apoio ao Ensino à Distância</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Provas Académicas",
            "htmlCode": "<a href=\"https://ciencias.ulisboa.pt/pt/provas-academicas\" title=\"Provas Académicas Ciências ULisboa\">Provas Académicas</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Contratação de Monitores",
            "htmlCode": "<a href=\"https://ciencias.ulisboa.pt/pt/contratacao-monitores\" title=\"Contratação de Monitores Ciências ULisboa\">Contratação de Monitores</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(12) > a:nth-of-type(1)"
          },
          {
            "verdict": "failed",
            "description": "The test target doesn't have an accessible name, or it's empty (\"\").",
            "resultCode": "RC2",
            "accessibleName": "",
            "htmlCode": "<a href=\"/pt/mestrados-e-p%C3%B3s-gradua%C3%A7%C3%B5es\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Mestrados e Pós-Graduações",
            "htmlCode": "<a href=\"/pt/mestrados-e-p%C3%B3s-gradua%C3%A7%C3%B5es\">Mestrados e Pós-Graduações</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "failed",
            "description": "The test target doesn't have an accessible name, or it's empty (\"\").",
            "resultCode": "RC2",
            "accessibleName": "",
            "htmlCode": "<a href=\"/pt/evento/24-06-2020/sessao-final-de-projeto-empresarial\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Sessão final de Projeto Empresarial",
            "htmlCode": "<a href=\"/pt/evento/24-06-2020/sessao-final-de-projeto-empresarial\">Sessão final de Projeto Empresarial</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Ler mais",
            "htmlCode": "<a href=\"/pt/evento/24-06-2020/sessao-final-de-projeto-empresarial\" class=\"views-more-link\">Ler mais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "failed",
            "description": "The test target doesn't have an accessible name, or it's empty (\"\").",
            "resultCode": "RC2",
            "accessibleName": "",
            "htmlCode": "<a href=\"/pt/dges-atribuicao-bolsas-estudo-merito-1819-1718\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "DGES - Atribuição de Bolsas de Estudo por Mérito a Estudantes do Ensino Superior",
            "htmlCode": "<a href=\"/pt/dges-atribuicao-bolsas-estudo-merito-1819-1718\">DGES - Atribuição de Bolsas de Estudo por Mérito a Estudantes do Ensino Superior</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Ler mais",
            "htmlCode": "<a href=\"/pt/dges-atribuicao-bolsas-estudo-merito-1819-1718\" class=\"views-more-link\">Ler mais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "failed",
            "description": "The test target doesn't have an accessible name, or it's empty (\"\").",
            "resultCode": "RC2",
            "accessibleName": "",
            "htmlCode": "<a href=\"/pt/sa%C3%BAde\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Saúde - COVID-19",
            "htmlCode": "<a href=\"/pt/sa%C3%BAde\">Saúde - COVID-19</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Ler mais",
            "htmlCode": "<a href=\"/pt/sa%C3%BAde\" class=\"views-more-link\">Ler mais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "failed",
            "description": "The test target doesn't have an accessible name, or it's empty (\"\").",
            "resultCode": "RC2",
            "accessibleName": "",
            "htmlCode": "<a href=\"/pt/centro-de-testes-de-ciencias\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Centro de Testes de Ciências",
            "htmlCode": "<a href=\"/pt/centro-de-testes-de-ciencias\">Centro de Testes de Ciências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Ler mais",
            "htmlCode": "<a href=\"/pt/centro-de-testes-de-ciencias\" class=\"views-more-link\">Ler mais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Ver Todos",
            "htmlCode": "<a class=\"ver-todos\" href=\"/noticias\">Ver Todos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Estradas ameaçam milhões de aves e mamíferos na Europa",
            "htmlCode": "<a href=\"/pt/noticia/16-06-2020/estradas-amea%C3%A7am-milh%C3%B5es-de-aves-e-mam%C3%ADferos-na-europa\">Estradas ameaçam milhões de aves e mamíferos na Europa</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Ler mais",
            "htmlCode": "<a href=\"/pt/noticia/16-06-2020/estradas-amea%C3%A7am-milh%C3%B5es-de-aves-e-mam%C3%ADferos-na-europa\" class=\"views-more-link\">Ler mais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(2) > span:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "A interessante história do ubíquo número Pi",
            "htmlCode": "<a href=\"/pt/noticia/14-06-2020/a-interessante-hist%C3%B3ria-do-ub%C3%ADquo-n%C3%BAmero-pi\">A interessante história do ubíquo número Pi</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Ler mais",
            "htmlCode": "<a href=\"/pt/noticia/14-06-2020/a-interessante-hist%C3%B3ria-do-ub%C3%ADquo-n%C3%BAmero-pi\" class=\"views-more-link\">Ler mais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(2) > span:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Pandemia e Matemática",
            "htmlCode": "<a href=\"/pt/noticia/12-06-2020/pandemia-e-matem%C3%A1tica\">Pandemia e Matemática</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Ler mais",
            "htmlCode": "<a href=\"/pt/noticia/12-06-2020/pandemia-e-matem%C3%A1tica\" class=\"views-more-link\">Ler mais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(2) > span:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Ciências ULisboa prepara próximo ano letivo",
            "htmlCode": "<a href=\"/pt/noticia/09-06-2020/ci%C3%AAncias-ulisboa-prepara-pr%C3%B3ximo-ano-letivo\">Ciências ULisboa prepara próximo ano letivo</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Ler mais",
            "htmlCode": "<a href=\"/pt/noticia/09-06-2020/ci%C3%AAncias-ulisboa-prepara-pr%C3%B3ximo-ano-letivo\" class=\"views-more-link\">Ler mais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(2) > span:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Portugal participa no desenvolvimento de instrumento para o maior telescópio do mundo",
            "htmlCode": "<a href=\"/pt/noticia/05-06-2020/portugal-participa-no-desenvolvimento-de-instrumento-para-o-maior-telesc%C3%B3pio-do\">Portugal participa no desenvolvimento de instrumento para o maior telescópio do mundo</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Ler mais",
            "htmlCode": "<a href=\"/pt/noticia/05-06-2020/portugal-participa-no-desenvolvimento-de-instrumento-para-o-maior-telesc%C3%B3pio-do\" class=\"views-more-link\">Ler mais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(2) > span:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Ver Todos",
            "htmlCode": "<a class=\"ver-todos\" href=\"/eventos\">Ver Todos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Sessão final de Projeto Empresarial",
            "htmlCode": "<a href=\"/pt/evento/24-06-2020/sessao-final-de-projeto-empresarial\">Sessão final de Projeto Empresarial</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Software engineering standards and philosophy of science: Models, high-risk decision making, and epistemic warrants",
            "htmlCode": "<a href=\"/pt/evento/24-06-2020/software-engineering-standards-and-philosophy-of-science-models-high-risk-decision\">Software engineering standards and philosophy of science: Models, high-risk decision making, and epistemic warrants</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Como dar Feedback em pequenos vídeos",
            "htmlCode": "<a href=\"/pt/evento/24-06-2020/como-dar-feedback-em-pequenos-videos\">Como dar Feedback em pequenos vídeos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "ICUR2020 - 2.ª Conferência Internacional sobre Riscos Urbanos (Evento Adiado)",
            "htmlCode": "<a href=\"/pt/evento/25-06-2020/icur2020-2-conferencia-internacional-sobre-riscos-urbanos\">ICUR2020 - 2.ª Conferência Internacional sobre Riscos Urbanos (Evento Adiado)</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Counting minimal surfaces in negatively curved 3-manifolds",
            "htmlCode": "<a href=\"/pt/evento/25-06-2020/counting-minimal-surfaces-in-negatively-curved-3-manifolds\">Counting minimal surfaces in negatively curved 3-manifolds</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "info@ciencias.ulisboa.pt",
            "htmlCode": "<a href=\"mailto:info@ciencias.ulisboa.pt\">info@ciencias.ulisboa.pt</a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Elogios, Sugestões e Reclamações",
            "htmlCode": "<a href=\"/pt/caixa-de-sugest%C3%B5es\" title=\"Elogios, Sugestões e Reclamações Ciências ULisboa\">Elogios, Sugestões e Reclamações</a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(2) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Webmail",
            "htmlCode": "<a href=\"https://webmail.ciencias.ulisboa.pt\" title=\"Webmail - Ciências ULisboa\">Webmail</a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(2) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Moodle",
            "htmlCode": "<a href=\"http://moodle.ciencias.ulisboa.pt/\" title=\"Moodle - Ciências ULisboa\">Moodle</a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(2) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Copyright e Termos Legais",
            "htmlCode": "<a href=\"/pt/copyright-e-termos-legais\" title=\"Copyright e Termos Legais - Ciências ULisboa\">Copyright e Termos Legais</a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(2) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Ficha Técnica",
            "htmlCode": "<a href=\"/pt/ficha-t%C3%A9cnica\" title=\"Ficha Técnica - Ciências ULisboa\">Ficha Técnica</a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(2) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Mapa do Site",
            "htmlCode": "<a href=\"/pt/sitemap\" title=\"Mapa do Site - Ciências ULisboa\">Mapa do Site</a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(2) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "FCiências.ID",
            "htmlCode": "<a href=\"http://www.fciencias-id.pt/\" title=\"FCiências.ID - Ciências ULisboa\" target=\"_blank\" rel=\"noopener noreferrer\">FCiências.ID</a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(3) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Tec Labs",
            "htmlCode": "<a href=\"http://www.teclabs.pt/\" title=\"Tec Labs - Centro de Inovação\" target=\"_blank\" rel=\"noopener noreferrer\">Tec Labs</a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(3) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "ULisboa",
            "htmlCode": "<a href=\"http://www.ulisboa.pt\" title=\"Universidade de Lisboa\">ULisboa</a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(3) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Sistema Logos",
            "htmlCode": "<a href=\"/pt/sistema-logos\" title=\"Sistema Logos - Ciências ULisboa\">Sistema Logos</a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(3) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Sistema Fenix",
            "htmlCode": "<a href=\"http://fenix.ciencias.ulisboa.pt\" title=\"Sistema Fenix - Ciências ULisboa\">Sistema Fenix</a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(3) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Twitter Ciências ULisboa",
            "htmlCode": "<a href=\"https://twitter.com/fc_ul\" target=\"_blank\" title=\"Twitter Ciências ULisboa\" class=\"footer-social-twitter\" rel=\"noopener noreferrer\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Facebook Ciências ULisboa",
            "htmlCode": "<a href=\"https://www.facebook.com/fac.ciencias.ul\" target=\"_blank\" title=\"Facebook Ciências ULisboa\" class=\"footer-social-facebook\" rel=\"noopener noreferrer\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Youtube Ciências ULisboa",
            "htmlCode": "<a href=\"https://www.youtube.com/user/FaculdadeCiencias\" target=\"_blank\" title=\"Youtube Ciências ULisboa\" class=\"footer-social-youtube\" rel=\"noopener noreferrer\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Instagram Ciências ULisboa",
            "htmlCode": "<a href=\"https://www.instagram.com/ciencias_ulisboa_oficial\" target=\"_blank\" title=\"Instagram Ciências ULisboa\" class=\"footer-social-instagram\" rel=\"noopener noreferrer\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Linkedin Ciências ULisboa",
            "htmlCode": "<a href=\"https://pt.linkedin.com/school/cienciasulisboa\" target=\"_blank\" title=\"Linkedin Ciências ULisboa\" class=\"footer-social-youtube\" rel=\"noopener noreferrer\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "RSS",
            "htmlCode": "<a href=\"/rss/noticias\" target=\"_blank\" title=\"RSS\" class=\"footer-social-rss\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Listas de Divulgação Ciências",
            "htmlCode": "<a href=\"https://ciencias.ulisboa.pt/pt/node/9888/\" class=\"listagens\">Listas de Divulgação Ciências</a>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1) > a:nth-of-type(1)"
          }
        ]
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
              "aria-hidden='true'"
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
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "passed": 0,
          "warning": 0,
          "failed": 0,
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
            "attributes": "name='viewport'"
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
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:title"
          ],
          "passed": 1,
          "warning": 0,
          "failed": 0,
          "outcome": "passed",
          "description": "The `meta` element with a `name=\"viewport\"` attribute doesn't define the `maximum-scale` and `user-scalable` values."
        },
        "results": [
          {
            "verdict": "passed",
            "description": "The `meta` element with a `name=\"viewport\"` attribute doesn't define the `maximum-scale` and `user-scalable` values.",
            "resultCode": "RC1",
            "htmlCode": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
            "pointer": "html > head > meta:nth-of-type(6)"
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
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "passed": 8,
          "warning": 0,
          "failed": 0,
          "outcome": "passed",
          "description": "The test target has a unique `id` attribute."
        },
        "results": [
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<input type=\"text\" name=\"termo\" id=\"termo\">",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > form:nth-of-type(1) > input:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<input type=\"submit\" id=\"btn-pesquisa\" value=\"ok\">",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > form:nth-of-type(1) > input:nth-of-type(2)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<div id=\"central\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<div role=\"main\" id=\"main-content\" class=\"group\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<div id=\"container_news_opcoes\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<label for=\"email\" id=\"label_email\"></label>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > strong:nth-of-type(1) > em:nth-of-type(1) > label:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<input type=\"text\" name=\"email\" id=\"email\" title=\"email\">",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > span:nth-of-type(1) > input:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a unique `id` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<div id=\"buttons_confirm\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)"
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
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "passed": 0,
          "warning": 0,
          "failed": 0,
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
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "passed": 2,
          "warning": 0,
          "failed": 0,
          "outcome": "passed",
          "description": "The test target has a valid `lang` attribute."
        },
        "results": [
          {
            "verdict": "passed",
            "description": "The test target has a valid `lang` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<a href=\"/pt\" class=\"language-link active\" xml:lang=\"pt-pt\" lang=\"pt-pt\">Português</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid `lang` attribute.",
            "resultCode": "RC2",
            "htmlCode": "<a href=\"/en\" class=\"language-link\" xml:lang=\"en\" lang=\"en\">English</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          }
        ]
      },
      "QW-ACT-R9": {
        "name": "Links with identical accessible names have equivalent purpose",
        "code": "QW-ACT-R9",
        "mapping": "b20e66",
        "description": "This rule checks that links with identical accessible names resolve to the same resource or equivalent resources.",
        "metadata": {
          "target": {
            "element": "a, [role='link']"
          },
          "success-criteria": [
            {
              "name": "2.4.9",
              "level": "AAA",
              "principle": "Operable",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only.html"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/b20e66",
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "passed": 5,
          "warning": 17,
          "failed": 0,
          "outcome": "warning",
          "description": "The `links` with the same accessible name have different content. Verify is the content is equivalent.",
          "": null
        },
        "results": [
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"#main-content\" class=\"element-invisible element-focusable\">Passar para o conteúdo principal</a>",
            "pointer": "html > body > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt\" class=\"language-link active\" xml:lang=\"pt-pt\" lang=\"pt-pt\">Português</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/en\" class=\"language-link\" xml:lang=\"en\" lang=\"en\">English</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/user\">Login</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The `links` with the same accessible name have equal content.",
            "resultCode": "RC2",
            "htmlCode": "<a href=\"#\" class=\"hamburger hamb-nav\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a href=\"/pt\" title=\"home\" rel=\"home\" class=\"active\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt\" title=\"home\" rel=\"home\" class=\"active\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/a-faculdade\" title=\"A Faculdade de Ciências da ULisboa\">A Faculdade</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/sobre\" title=\"Sobre Ciências ULisboa\">Sobre</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/%C3%B3rg%C3%A3os-de-governo\" title=\"Órgãos de Governo Ciências ULisboa\">Órgãos de Governo</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/provedor\" title=\"Provedor Ciências ULisboa\">Provedor</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/unidades-de-servi%C3%A7o\" title=\"Unidades de Serviço Ciências ULisboa\">Unidades de Serviço</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/informa%C3%A7%C3%A3o-oficial-0\" title=\"Informação Oficial Ciências ULisboa\">Informação Oficial</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "warning",
            "description": "The `links` with the same accessible name have different content. Verify is the content is equivalent.",
            "resultCode": "RC3",
            "htmlCode": "<a href=\"/pt/merito\" title=\"Reconhecimento do Mérito em Ciências ULisboa\">Mérito</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/rede-alumni\" title=\"Rede Alumni Ciências ULisboa\">Rede Alumni</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/formacao-0\" title=\"Formação Ciências ULisboa\">Formação</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/legisla%C3%A7%C3%A3o-e-regulamentos\" title=\"Legislação e Regulamentos Ciências ULisboa\">Legislação e Regulamentos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/identidade-visual-e-normas-gr%C3%A1ficas\" title=\"Identidade Visual e Normas Gráficas Ciências ULisboa\">Identidade Visual e Normas Gráficas</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/prote%C3%A7%C3%A3o-de-dados\" title=\"Regulamento Geral de Proteção de Dados\">Proteção de Dados</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/sa%C3%BAde\" title=\"Informações sobre a COVID-19\">Saúde: COVID-19</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The `links` with the same accessible name have equal content.",
            "resultCode": "RC2",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/comunicados-a-comunidade-covid-19\" title=\"Comunicados da Direção de Ciências e da Reitoria da ULisboa relativos à COVID-19\">Comunicados à Comunidade</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/plano-de-contingencia-em-ciencias-covid-19\" title=\"Plano de Contingência em Ciências ULisboa (COVID-19)\">Plano de Contingência</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/centro-de-testes-de-ciencias\" title=\"Centro de Testes de Ciências ULisboa\">Centro de Testes de Ciências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/euficoemcasa\" title=\"#EuFicoEmCasa Ciências ULisboa\">#EuFicoEmCasa</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/covid-19-financiamento\" title=\"Financiamento relacionado com a COVID-19\">Financiamento COVID-19</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/projetos-covid-19\" title=\"Projetos relacionados com a COVID-19\">Projetos COVID-19</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/responsabilidade-social\" title=\"Responsabilidade Social em resposta à COVID-19\">Responsabilidade Social</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/legislacao-orientacoes-covid-19\" title=\"Legislação/Orientações sobre a COVID-19\">Legislação/Orientações</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/horarios-de-atendimento-covid\" title=\"Horários de Atendimento: retoma gradual de atividades presenciais em Ciências ULisboa\">Horários de Atendimento</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/qualidade\" title=\"Qualidade Ciências ULisboa\">Qualidade</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/qciencias\" title=\"Sistema Integrado de Garantia da Qualidade da Faculdade de Ciências da Universidade de Lisboa\">QCiências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "warning",
            "description": "The `links` with the same accessible name have different content. Verify is the content is equivalent.",
            "resultCode": "RC3",
            "htmlCode": "<a href=\"/pt/inqueritos\" title=\"Inquéritos Ciências ULisboa\">Inquéritos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/estatisticas\" title=\"Estatísticas Ciências ULisboa\">Estatísticas</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/acreditacoes-e-rankings\" title=\"Avaliação externa: Acreditações e Rankings\">Acreditações e Rankings</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/reconhecimento-e-certificacao\" title=\"Reconhecimento e Certificação Institucional e de Cursos\">Reconhecimento e Certificação</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "warning",
            "description": "The `links` with the same accessible name have different content. Verify is the content is equivalent.",
            "resultCode": "RC3",
            "htmlCode": "<a href=\"https://ciencias.ulisboa.pt/pt/caixa-de-sugestoes\" title=\"Elogios, Sugestões e Reclamações Ciências ULisboa\">Elogios, Sugestões e Reclamações</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/viver\" title=\"Viver em Ciências ULisboa\">Viver</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/o-campus\" title=\"O Campus de Ciências ULisboa\">O  Campus</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/unidade/biblioteca\" title=\"Biblioteca Ciências ULisboa\">Biblioteca</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/dsi\" title=\"Direção de Serviços Informáticos\">Informática</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/gabinete-de-apoio-psicopedag%C3%B3gico\" title=\"Gabinete de Apoio Psicopedagógico\">Apoio Psicopedagógico</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/g3s\" title=\"Segurança, Saúde e Sustentabilidade Ciências ULisboa\">Segurança, Saúde e Sustentabilidade</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"http://aefcl.ciencias.ulisboa.pt/\" title=\"Associação dos Estudantes Ciências ULisboa\">Associação dos Estudantes</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/atfcul\" title=\"Associação de Trabalhadores Ciências ULisboa\">Associação de Trabalhadores</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/galeria-ciencias-e-outros-espacos\" title=\"Galeria Ciências e outros Espaços de Exposição em Ciências ULisboa\">Galeria Ciências e outros Espaços de Exposição</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/desporto-e-lazer\" title=\"Desporto, Saúde e Bem-Estar\">Desporto e Lazer</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/cantinas-e-bares\" title=\"Cantinas e Bares Ciências ULisboa\">Cantinas e Bares</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(10) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/loja-de-ci%C3%AAncias\" title=\"Loja de Ciências ULisboa\">Loja de Ciências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(11) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/protocolos-e-acordos\" title=\"Protocolos e Acordos Ciências ULisboa\">Protocolos e Acordos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(12) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/catalogo-de-servicos\" title=\"Catálogo de Serviços Ciências ULisboa\">Catálogo de Serviços</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > ul:nth-of-type(1) > li:nth-of-type(13) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/departamentos\" title=\"Departamentos de Ciências ULisboa\">Departamentos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/biologia-animal\" title=\"Departamento de Biologia Animal\">Biologia Animal</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a href=\"/pt/dbv\" title=\"Departamento de Biologia Vegetal\">Biologia Vegetal</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/degge\" title=\"Departamento de Engenharia Geográfica, Geofísica e Energia\">Engenharia Geográfica, Geofísica e Energia</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/deio\" title=\"Departamento de Estatística e Investigação Operacional\">Estatística e Investigação Operacional</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/df\" title=\"Departamento de Física\">Física</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/dg\" title=\"Departamento de Geologia\">Geologia</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The `links` with the same accessible name have equal content.",
            "resultCode": "RC2",
            "htmlCode": "<a href=\"/pt/dhfc\" title=\"Departamento de História e Filosofia das Ciências\">História e Filosofia das Ciências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "warning",
            "description": "The `links` with the same accessible name have different content. Verify is the content is equivalent.",
            "resultCode": "RC3",
            "htmlCode": "<a href=\"/pt/di\" title=\"Departamento de Informática\">Informática</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "warning",
            "description": "The `links` with the same accessible name have different content. Verify is the content is equivalent.",
            "resultCode": "RC3",
            "htmlCode": "<a href=\"/pt/dm\" title=\"Departamento de Matemática\">Matemática</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "warning",
            "description": "The `links` with the same accessible name have different content. Verify is the content is equivalent.",
            "resultCode": "RC3",
            "htmlCode": "<a href=\"/pt/dqb\" title=\"Departamento de Química e Bioquímica\">Química e Bioquímica</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > ul:nth-of-type(1) > li:nth-of-type(10) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/ensino\" title=\"Ensino de Ciências ULisboa\">Ensino</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(2)"
          },
          {
            "verdict": "warning",
            "description": "The `links` with the same accessible name have different content. Verify is the content is equivalent.",
            "resultCode": "RC3",
            "htmlCode": "<a href=\"/pt/oferta-formativa\" title=\"Oferta Formativa Ciências ULisboa\">Oferta Formativa</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "warning",
            "description": "The `links` with the same accessible name have different content. Verify is the content is equivalent.",
            "resultCode": "RC3",
            "htmlCode": "<a href=\"/pt/candidaturas\" title=\"Candidaturas aos Cursos de Ciências ULisboa\">Candidaturas</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/estudante-internacional\" title=\"Candidaturas Estudante Internacional\">Estudante Internacional</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "warning",
            "description": "The `links` with the same accessible name have different content. Verify is the content is equivalent.",
            "resultCode": "RC3",
            "htmlCode": "<a href=\"/pt/publica%C3%A7%C3%B5es\" title=\"Publicações Ciências ULisboa\">Publicações</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/compet%C3%AAncias-transversais\" title=\"Competencias Transversais Ciências ULisboa\">Competências Transversais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "warning",
            "description": "The `links` with the same accessible name have different content. Verify is the content is equivalent.",
            "resultCode": "RC3",
            "htmlCode": "<a href=\"/pt/reconhecimento-de-graus-e-diplomas\" title=\"Reconhecimento de Graus e Diplomas Ciências ULisboa\">Reconhecimento de Graus e Diplomas</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/inscricoes\" title=\"Inscrições no ano letivo 2019/2020 Ciências ULisboa\">Inscrições 2019/2020</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "warning",
            "description": "The `links` with the same accessible name have different content. Verify is the content is equivalent.",
            "resultCode": "RC3",
            "htmlCode": "<a href=\"/pt/informa%C3%A7%C3%A3o-para-estudantes\" title=\"Informação para Estudantes Ciências ULisboa\">Informação para Estudantes</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/ferramentas-de-apoio-a-distancia\" title=\"Ferramentas de Apoio ao Ensino à Distância Ciências ULisboa\">Ferramentas de Apoio ao Ensino à Distância</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/sociedade\" title=\"Interação com a Sociedade\">Sociedade</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/p%C3%BAblico-escolar-geral\" title=\"Informação para Público Escolar | Geral\">Público Escolar | Geral</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/noticias\" title=\"Notícias | Ciências ULisboa\">Notícias</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/eventos\" title=\"Eventos | Ciências ULisboa\">Eventos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/multim%C3%A9dia\" title=\"Multimédia | Ciências ULisboa\">Multimédia</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/ciencias-nos-media\" title=\"Página de acesso ao press kit, comunicados de imprensa e recortes de imprensa\">Ciências nos Média</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "warning",
            "description": "The `links` with the same accessible name have different content. Verify is the content is equivalent.",
            "resultCode": "RC3",
            "htmlCode": "<a href=\"/pt/newsletterdeciencias\" title=\"Newsletter | Ciências ULisboa\">Newsletter de Ciências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a href=\"/pt/comunicadores-de-ciencia-em-ciencias\" title=\"Comunicadores de Ciência | Ciências ULisboa\">Comunicadores de Ciência em Ciências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/o-que-faco-aqui\" title=\"O que faço aqui? | Ciências ULisboa\">O que faço aqui?</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/a-investiga%C3%A7%C3%A3o-na-faculdade-de-ci%C3%AAncias-um-sistema-em-rede\" title=\"Investigação de Ciências ULisboa\">Investigação</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/unidades-de-id\" title=\"Unidades de I&amp;D Ciências ULisboa\">Unidades de I&amp;D</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/infraestruturas-de-id\" title=\"Infraestruturas de I&amp;D Ciências ULisboa\">Infraestruturas de I&amp;D</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"https://ciencias.ulisboa.pt/servicos/fcul/Main/?servico=fundus\" title=\"Projetos Ciências ULisboa\">Projetos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The `links` with the same accessible name have equal content.",
            "resultCode": "RC2",
            "htmlCode": "<a href=\"/pt/protocolos-2\" title=\"Protocolos Ciências ULisboa\">Protocolos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "warning",
            "description": "The `links` with the same accessible name have different content. Verify is the content is equivalent.",
            "resultCode": "RC3",
            "htmlCode": "<a href=\"/pt/concursos\" title=\"Concursos Ciências ULisboa\">Concursos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"https://biblios.ciencias.ulisboa.pt/?lang=por\" title=\"Biblios - Sistema de Gestão de Referências Bibliográficas de Ciências\">Publicações</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "warning",
            "description": "The `links` with the same accessible name have different content. Verify is the content is equivalent.",
            "resultCode": "RC3",
            "htmlCode": "<a href=\"/pt/researchers\" title=\"Incoming Researchers Ciências ULisboa\">Incoming Researchers</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/gest%C3%A3o-de-projetos-0\" title=\"Gestão de Projetos Ciências ULisboa\">Gestão de Projetos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/col%C3%A9gios-e-redes-ulisboa\" title=\"Colégios e Redes existentes na ULisboa\">Colégios e Redes ULisboa</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/phd-support-programme\" title=\"PhD Support Programme Ciências ULisboa\">PhD Support Programme</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(10) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/programas-doutorais\" title=\"Programas Doutorais Ciências ULisboa\">Programas Doutorais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(11) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/funda%C3%A7%C3%A3o-da-fcul\" title=\"Fundação\">Fundação da FCUL</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(12) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"http://www.fciencias-id.pt/\" title=\"FCiências.ID Ciências ULisboa\" target=\"_blank\" rel=\"noopener noreferrer\">FCiências.ID</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(13) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/financiamento-0\" title=\"Programas de Financiamento\">Financiamento</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(14) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/colabora%C3%A7%C3%B5es-internacionais\" title=\"Redes Internacionais\">Colaborações Internacionais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(15) > a:nth-of-type(1)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a href=\"/pt/documentos-3\" title=\"Documentos de Apoio\">Documentos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > ul:nth-of-type(1) > li:nth-of-type(16) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/inova%C3%A7%C3%A3o-e-empreendedorismo\" title=\"Inovação em Ciências ULisboa\">Inovação</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"http://teclabs.pt/\" title=\"Tec Labs - Centro de Inovação de Ciências ULisboa\" target=\"_blank\" rel=\"noopener noreferrer\">Tec Labs - Centro de Inovação</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/tt-pi-ci%C3%AAncias\" title=\"Transferências de Tecnologia e Propriedade Intelectual\">TT &amp; PI @ Ciências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/rede-de-ci%C3%AAncias-empresas\" title=\"Rede de Ciências ULisboa-Empresas\">Rede de Ciências-Empresas</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/startups-e-spinoffs\" title=\"Startups e Spinoffs Ciências ULisboa\">Startups e Spinoffs</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/empreendedorismo\" title=\"Empreendedorismo Ciências ULisboa\">Empreendedorismo</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/kic-eit-health\" title=\"KIC EIT Health Programme\">KIC EIT Health</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/mare-startup\" title=\"Programa MARE Startup\">MARE Startup</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/financiamento-%C3%A0-inova%C3%A7%C3%A3o\" title=\"Programas de Financiamento para a Inovação\">Financiamento</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a href=\"/pt/innoversia\" title=\"Innoversia - Inovação aberta\">Innoversia</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a href=\"/pt/gabinete-de-empregabilidade\" title=\"Informações sobre Emprego\">Emprego</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > a:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/portal-de-emprego\" title=\"Portal de Emprego Ciências ULisboa\">Portal de Emprego</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a href=\"/pt/emprego/concursos\" title=\"Concursos Ciências ULisboa\">Menu de Concursos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "warning",
            "description": "The `links` with the same accessible name have different content. Verify is the content is equivalent.",
            "resultCode": "RC3",
            "htmlCode": "<a href=\"/pt/est%C3%A1gios-0\" title=\"Programas de Estágios\">Estágios</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/programa-de-est%C3%A1gios-de-ver%C3%A3o-fcul\" title=\"Programa de Estágios de Verão Ciências ULisboa\">Programa de Estágios de Verão FCUL</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/oportunidades\" title=\"Oportunidades Nacionais e Internacionais\">Oportunidades</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/eu-careers\" title=\"Candidaturas EU Careers\">EU Careers</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/voluntariado\" title=\"Voluntariado Ciências ULisboa\">Voluntariado</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/jobshop-ciencias\" title=\"Jobshop Ciências ULisboa\">Jobshop Ciências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/eventos-0\" title=\"Eventos e Sessões\">Eventos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/compet%C3%AAncias-transversais-0\" title=\"Competências Transversais Ciências ULisboa\">Competências Transversais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(10) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/parcerias\" title=\"Parcerias de colaboração Ciências ULisboa\">Parcerias</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(11) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/empregabilidade\" title=\"Empregabilidade Ciências ULisboa\">Empregabilidade</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(12) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/documentos-1\" title=\"Documentos de Apoio para Alunos e Diplomados\">Documentos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(13) > a:nth-of-type(1)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a href=\"/pt/liga%C3%A7%C3%B5es-%C3%BAteis\" title=\"Ligações Úteis - Emprego\">Ligações Úteis</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > ul:nth-of-type(1) > li:nth-of-type(14) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/internacional\" title=\"Internacional Ciências ULisboa\">Internacional</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > a:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/ci%C3%AAncias-incoming\" title=\"Incoming\">Ciências Incoming</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/estudar-no-estrangeiro\" title=\"Realizar período de estudos no estrangeiro\">Estudar no Estrangeiro</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a href=\"/pt/estagiar-no-estrangeiro\" title=\"Oportunidades para Estagiar no Estrangeiro\">Estagiar no Estrangeiro</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/international-credit-mobility\" title=\"Informações sobre a International Credit Mobility\">International Credit Mobility</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/coopera%C3%A7%C3%A3o-internacional\" title=\"Cooperação Internacional Ciências ULisboa\">Cooperação Internacional</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/ci%C3%AAncias\" title=\"+ Ciências ULisboa\">+ Ciências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(12) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(12) > a:nth-of-type(2)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/ci%C3%AAncias-solid%C3%A1ria\" title=\"Associação Ciências Solidária\">Ciências Solidária</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(12) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a href=\"/pt/ci%C3%AAncias-com-%C3%A9tica\" title=\"Ciências com Ética - Informações\">Ciências com Ética</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(12) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a href=\"/pt/ci%C3%AAncia-in%C3%BAtil\" title=\"Ciência Inútil? Pensar e agir fora da caixa\">Ciência Inútil?</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(12) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a href=\"/pt/liga%C3%A7%C3%B5es-%C3%BAteis-0\" title=\"Ligações Úteis sobre Ciência\">Ligações Úteis</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(12) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a href=\"/pt/laboratorio-vivo-para-a-sustentabilidade\" title=\"Laboratório Vivo para a Sustentabilidade\">Sustentabilidade</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > a:nth-of-type(1)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a class=\"setinha\" href=\"#\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > a:nth-of-type(2)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a href=\"/pt/sustentabilidade-no-campus\" title=\"Sustentabilidade no campus Ciências ULisboa\">Sustentabilidade no campus</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/observacao-monitorizacao\" title=\"Observação &amp; monitorização Ciências ULisboa\">Observação &amp; monitorização</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a href=\"/pt/inovacao-demonstracao\" title=\"Inovação &amp; demonstração Ciências ULisboa\">Inovação &amp; demonstração</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a href=\"/pt/formacao-1\" title=\"Formação na área da Sustentabilidade\">Formação</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/lisboa-capital-verde-europeia-2020-ciencias-ulisboa\" title=\"Lisboa Capital Verde Europeia 2020 | Atividades Ciências ULisboa\">Lisboa Capital Verde Europeia 2020 | Ciências ULisboa</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/noticias-e-eventos\" title=\"Notícias e Eventos na área da Sustentabilidade\">Notícias e Eventos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/ligacoes-uteis-sustentabilidade\" title=\"Ligações úteis na área da Sustentabilidade\">Ligações úteis</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(13) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The `links` with the same accessible name have equal content.",
            "resultCode": "RC2",
            "htmlCode": "<a href=\"/pt/contactos\" title=\"Contactos Ciências ULisboa\">Contactos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(14) > a:nth-of-type(1)"
          },
          {
            "verdict": "warning",
            "description": "The `links` with the same accessible name have different content. Verify is the content is equivalent.",
            "resultCode": "RC3",
            "htmlCode": "<a href=\"https://ciencias.ulisboa.pt/pt/oferta-formativa\" title=\"Lista de cursos de Ciências ULisboa\">Cursos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/candidaturas\" title=\"Candidaturas aos cursos de Ciências ULisboa\">Candidaturas</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > a:nth-of-type(1)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a href=\"/pt/informa%C3%A7%C3%A3o-para-estudantes/\" title=\"Informação para Estudantes de Ciências ULisboa\">Informação para Estudantes</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/estudante-internacional/\" title=\"Candidaturas de Estudantes Internacionais\">Estudante Internacional</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a href=\"/pt/p%C3%BAblico-escolar-geral/\" title=\"Informações para Público Escolar | Geral\">Público Escolar | Geral</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > a:nth-of-type(1)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a href=\"https://ciencias.ulisboa.pt/pt/ciencias-nos-media\" title=\"Ciências ULisboa nos Média\">Ciências nos Média</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(6) > a:nth-of-type(1)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a href=\"/pt/concursos/\" title=\"Concursos - Ciências ULisboa\">Concursos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(7) > a:nth-of-type(1)"
          },
          {
            "verdict": "warning",
            "description": "The `links` with the same accessible name have different content. Verify is the content is equivalent.",
            "resultCode": "RC3",
            "htmlCode": "<a href=\"https://ciencias.ulisboa.pt/doc\" title=\"Concursos Docentes - Candidaturas Ciências ULisboa\">Concursos Docentes - Candidaturas</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"https://biblios.ciencias.ulisboa.pt/?lang=por\" title=\"Biblios - Sistema de Gestão de Referências Bibliográficas de Ciências\">Publicações</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a href=\"https://ciencias.ulisboa.pt/pt/ferramentas-de-apoio-a-distancia\" title=\"Ferramentas de Apoio ao Ensino à Distância Ciências ULisboa\">Ferramentas de Apoio ao Ensino à Distância</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(10) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"https://ciencias.ulisboa.pt/pt/provas-academicas\" title=\"Provas Académicas Ciências ULisboa\">Provas Académicas</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(11) > a:nth-of-type(1)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a href=\"https://ciencias.ulisboa.pt/pt/contratacao-monitores\" title=\"Contratação de Monitores Ciências ULisboa\">Contratação de Monitores</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(12) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/mestrados-e-p%C3%B3s-gradua%C3%A7%C3%B5es\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a href=\"/pt/mestrados-e-p%C3%B3s-gradua%C3%A7%C3%B5es\">Mestrados e Pós-Graduações</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/evento/24-06-2020/sessao-final-de-projeto-empresarial\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a href=\"/pt/evento/24-06-2020/sessao-final-de-projeto-empresarial\">Sessão final de Projeto Empresarial</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/evento/24-06-2020/sessao-final-de-projeto-empresarial\" class=\"views-more-link\">Ler mais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a href=\"/pt/dges-atribuicao-bolsas-estudo-merito-1819-1718\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a href=\"/pt/dges-atribuicao-bolsas-estudo-merito-1819-1718\">DGES - Atribuição de Bolsas de Estudo por Mérito a Estudantes do Ensino Superior</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a href=\"/pt/dges-atribuicao-bolsas-estudo-merito-1819-1718\" class=\"views-more-link\">Ler mais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/sa%C3%BAde\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/sa%C3%BAde\">Saúde - COVID-19</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/sa%C3%BAde\" class=\"views-more-link\">Ler mais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/centro-de-testes-de-ciencias\"></a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/centro-de-testes-de-ciencias\">Centro de Testes de Ciências</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a href=\"/pt/centro-de-testes-de-ciencias\" class=\"views-more-link\">Ler mais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a class=\"ver-todos\" href=\"/noticias\">Ver Todos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/noticia/16-06-2020/estradas-amea%C3%A7am-milh%C3%B5es-de-aves-e-mam%C3%ADferos-na-europa\">Estradas ameaçam milhões de aves e mamíferos na Europa</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/noticia/16-06-2020/estradas-amea%C3%A7am-milh%C3%B5es-de-aves-e-mam%C3%ADferos-na-europa\" class=\"views-more-link\">Ler mais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(2) > span:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/noticia/14-06-2020/a-interessante-hist%C3%B3ria-do-ub%C3%ADquo-n%C3%BAmero-pi\">A interessante história do ubíquo número Pi</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/noticia/14-06-2020/a-interessante-hist%C3%B3ria-do-ub%C3%ADquo-n%C3%BAmero-pi\" class=\"views-more-link\">Ler mais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(2) > span:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "",
            "description": "",
            "resultCode": "",
            "htmlCode": "<a href=\"/pt/noticia/12-06-2020/pandemia-e-matem%C3%A1tica\">Pandemia e Matemática</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/noticia/12-06-2020/pandemia-e-matem%C3%A1tica\" class=\"views-more-link\">Ler mais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(2) > span:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/noticia/09-06-2020/ci%C3%AAncias-ulisboa-prepara-pr%C3%B3ximo-ano-letivo\">Ciências ULisboa prepara próximo ano letivo</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/noticia/09-06-2020/ci%C3%AAncias-ulisboa-prepara-pr%C3%B3ximo-ano-letivo\" class=\"views-more-link\">Ler mais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(2) > span:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/noticia/05-06-2020/portugal-participa-no-desenvolvimento-de-instrumento-para-o-maior-telesc%C3%B3pio-do\">Portugal participa no desenvolvimento de instrumento para o maior telescópio do mundo</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/noticia/05-06-2020/portugal-participa-no-desenvolvimento-de-instrumento-para-o-maior-telesc%C3%B3pio-do\" class=\"views-more-link\">Ler mais</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(2) > span:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a class=\"ver-todos\" href=\"/eventos\">Ver Todos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/evento/24-06-2020/sessao-final-de-projeto-empresarial\">Sessão final de Projeto Empresarial</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/evento/24-06-2020/software-engineering-standards-and-philosophy-of-science-models-high-risk-decision\">Software engineering standards and philosophy of science: Models, high-risk decision making, and epistemic warrants</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/evento/24-06-2020/como-dar-feedback-em-pequenos-videos\">Como dar Feedback em pequenos vídeos</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/evento/25-06-2020/icur2020-2-conferencia-internacional-sobre-riscos-urbanos\">ICUR2020 - 2.ª Conferência Internacional sobre Riscos Urbanos (Evento Adiado)</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > h3:nth-of-type(1) > a:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "Doesn't exist any other `link` with the same accessible name.",
            "resultCode": "RC4",
            "htmlCode": "<a href=\"/pt/evento/25-06-2020/counting-minimal-surfaces-in-negatively-curved-3-manifolds\">Counting minimal surfaces in negatively curved 3-manifolds</a>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > h3:nth-of-type(1) > a:nth-of-type(1)"
          }
        ]
      },
      "QW-ACT-R10": {
        "name": "`iframe` elements with identical accessible names have equivalent purpose",
        "code": "QW-ACT-R10",
        "mapping": "4b1c6c",
        "description": "This rule checks that iframe elements with identical accessible names embed the same resource or equivalent resources.",
        "metadata": {
          "target": {
            "element": "iframe",
            "attributes": [
              "src"
            ]
          },
          "success-criteria": [
            {
              "name": "4.1.2",
              "level": "A",
              "principle": "Robust",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/4b1c6c",
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": []
      },
      "QW-ACT-R25": {
        "name": "ARIA state or property is permitted",
        "code": "QW-ACT-R25",
        "mapping": "5c01ea",
        "description": "This rule checks that WAI-ARIA states or properties are allowed for the element they are specified on.",
        "metadata": {
          "target": {
            "element": "*",
            "attributes": "aria-*"
          },
          "success-criteria": [
            {
              "name": "4.1.1",
              "level": "A",
              "principle": "Robust",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/parsing.html"
            },
            {
              "name": "4.1.2",
              "level": "AA",
              "principle": "Robust",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/5c01ea",
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": []
      },
      "QW-ACT-R27": {
        "name": "aria-* attribute is defined in WAI-ARIA",
        "code": "QW-ACT-R27",
        "mapping": "5f99a7",
        "description": "This rule checks that each aria- attribute specified is defined in ARIA 1.1.",
        "metadata": {
          "target": {
            "element": "*",
            "attributes": "aria-*"
          },
          "success-criteria": [
            {
              "name": "4.1.2",
              "level": "A",
              "principle": "Robust ",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/5f99a7",
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": []
      },
      "QW-ACT-R28": {
        "name": "Element with role attribute has required states and properties",
        "code": "QW-ACT-R28",
        "mapping": "4e8ab6",
        "description": "This rule checks that elements that have an explicit role also specify all required states and properties.",
        "metadata": {
          "target": {
            "element": "*",
            "attributes": "role"
          },
          "success-criteria": [
            {
              "name": "4.1.2",
              "level": "A",
              "principle": "Robust ",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/4e8ab6",
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "passed": 1,
          "warning": 0,
          "failed": 0,
          "outcome": "passed",
          "description": "The test target `role` doesn't have required state or property"
        },
        "results": [
          {
            "verdict": "inapplicable",
            "description": "The test target explicit role equals the implicit role.",
            "resultCode": "RC2",
            "htmlCode": "<nav class=\"block-menu-block-1 \" role=\"navigation\"></nav>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "The test target explicit role equals the implicit role.",
            "resultCode": "RC2",
            "htmlCode": "<nav class=\"block-menu-menu-quicklinks \" role=\"navigation\"></nav>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target `role` doesn't have required state or property",
            "resultCode": "RC5",
            "htmlCode": "<div role=\"main\" id=\"main-content\" class=\"group\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "The test target explicit role equals the implicit role.",
            "resultCode": "RC2",
            "htmlCode": "<nav class=\"block-menu-block-5 \" role=\"navigation\"></nav>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(2) > nav:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "The test target explicit role equals the implicit role.",
            "resultCode": "RC2",
            "htmlCode": "<nav class=\"block-menu-block-6 \" role=\"navigation\"></nav>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(3) > nav:nth-of-type(1)"
          }
        ]
      },
      "QW-ACT-R34": {
        "name": "ARIA state or property has valid value",
        "code": "QW-ACT-R34",
        "mapping": "6a7281",
        "description": "This rule checks that each ARIA state or property has a valid value.",
        "metadata": {
          "target": {
            "element": "*",
            "attributes": "aria-*"
          },
          "success-criteria": [
            {
              "name": "4.1.2",
              "level": "AA",
              "principle": "Robust",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/6a7281",
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": []
      },
      "QW-ACT-R38": {
        "name": "ARIA required owned elements",
        "code": "QW-ACT-R38",
        "mapping": "bc4a75",
        "description": "This rule checks that an element with an explicit semantic role has at least one of its required owned elements.",
        "metadata": {
          "target": {
            "element": "*",
            "attributes": "role"
          },
          "success-criteria": [
            {
              "name": "1.3.1",
              "level": "A",
              "principle": "Perceivable ",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
            }
          ],
          "related": [],
          "url": "https://github.com/act-rules/act-rules.github.io/blob/develop/_rules/aria-required-owned-element-bc4a75.md",
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:title"
          ],
          "passed": 0,
          "warning": 0,
          "failed": 0,
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
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "passed": 2,
          "warning": 0,
          "failed": 0,
          "outcome": "passed",
          "description": "The test target has an accessible name."
        },
        "results": [
          {
            "verdict": "passed",
            "description": "The test target has an accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Pesquisa",
            "htmlCode": "<input type=\"text\" name=\"termo\" id=\"termo\">",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > form:nth-of-type(1) > input:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has an accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Email",
            "htmlCode": "<input type=\"text\" name=\"email\" id=\"email\" title=\"email\">",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > span:nth-of-type(1) > input:nth-of-type(1)"
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
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "passed": 5,
          "warning": 0,
          "failed": 0,
          "outcome": "passed",
          "description": "The test target has a valid `role` attribute."
        },
        "results": [
          {
            "verdict": "passed",
            "description": "The test target has a valid `role` attribute.",
            "resultCode": "RC1",
            "htmlCode": "<nav class=\"block-menu-block-1 \" role=\"navigation\"></nav>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid `role` attribute.",
            "resultCode": "RC1",
            "htmlCode": "<nav class=\"block-menu-menu-quicklinks \" role=\"navigation\"></nav>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid `role` attribute.",
            "resultCode": "RC1",
            "htmlCode": "<div role=\"main\" id=\"main-content\" class=\"group\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid `role` attribute.",
            "resultCode": "RC1",
            "htmlCode": "<nav class=\"block-menu-block-5 \" role=\"navigation\"></nav>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(2) > nav:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a valid `role` attribute.",
            "resultCode": "RC1",
            "htmlCode": "<nav class=\"block-menu-block-6 \" role=\"navigation\"></nav>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(3) > nav:nth-of-type(1)"
          }
        ]
      },
      "QW-ACT-R33": {
        "name": "ARIA required context role",
        "code": "QW-ACT-R33",
        "mapping": "ff89c9",
        "description": "This rule checks that an element with an explicit semantic role exists inside its required context.",
        "metadata": {
          "target": {
            "element": "*",
            "attributes": "role"
          },
          "success-criteria": [
            {
              "name": "1.3.1",
              "level": "A",
              "principle": "Perceivable ",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/ff89c9",
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:title"
          ],
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": [
          {
            "verdict": "inapplicable",
            "description": "The test target is not in the accessibility tree or doesn't have an explicit `role` with the required context `role`",
            "resultCode": "RC5",
            "htmlCode": "<nav class=\"block-menu-block-1 \" role=\"navigation\"></nav>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "The test target is not in the accessibility tree or doesn't have an explicit `role` with the required context `role`",
            "resultCode": "RC5",
            "htmlCode": "<nav class=\"block-menu-menu-quicklinks \" role=\"navigation\"></nav>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > header:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "The test target is not in the accessibility tree or doesn't have an explicit `role` with the required context `role`",
            "resultCode": "RC5",
            "htmlCode": "<div role=\"main\" id=\"main-content\" class=\"group\"></div>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "The test target is not in the accessibility tree or doesn't have an explicit `role` with the required context `role`",
            "resultCode": "RC5",
            "htmlCode": "<nav class=\"block-menu-block-5 \" role=\"navigation\"></nav>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(2) > nav:nth-of-type(1)"
          },
          {
            "verdict": "inapplicable",
            "description": "The test target is not in the accessibility tree or doesn't have an explicit `role` with the required context `role`",
            "resultCode": "RC5",
            "htmlCode": "<nav class=\"block-menu-block-6 \" role=\"navigation\"></nav>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(3) > nav:nth-of-type(1)"
          }
        ]
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
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:title"
          ],
          "passed": 7,
          "warning": 0,
          "failed": 0,
          "outcome": "passed",
          "description": "The test target is decorative."
        },
        "results": [
          {
            "verdict": "passed",
            "description": "The test target is decorative.",
            "resultCode": "RC1",
            "htmlCode": "<img src=\"https://ciencias.ulisboa.pt/sites/default/files/Ciencias_Logo_Azul-02.png\" width=\"268\" height=\"404\" alt=\"\">",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1) > img:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target is decorative.",
            "resultCode": "RC1",
            "htmlCode": "<img src=\"https://ciencias.ulisboa.pt/sites/default/files/Ciencias_Logo_Azul-01.png\" width=\"435\" height=\"228\" alt=\"\">",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > a:nth-of-type(1) > img:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target is decorative.",
            "resultCode": "RC1",
            "htmlCode": "<img src=\"https://ciencias.ulisboa.pt/sites/default/files/styles/destaque/public/destaque-mestrados-2020.png?itok=9PlY85TS\" width=\"735\" height=\"290\" alt=\"\">",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1) > img:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target is decorative.",
            "resultCode": "RC1",
            "htmlCode": "<img src=\"https://ciencias.ulisboa.pt/sites/default/files/styles/destaque/public/destaque-sessao-final-projeto-empresarial-2020.png?itok=zjW_jr7w\" width=\"735\" height=\"290\" alt=\"\">",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1) > img:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target is decorative.",
            "resultCode": "RC1",
            "htmlCode": "<img src=\"https://ciencias.ulisboa.pt/sites/default/files/styles/destaque/public/destaque-merito-academico_0.png?itok=kDVvUhGR\" width=\"735\" height=\"290\" alt=\"\">",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1) > img:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target is decorative.",
            "resultCode": "RC1",
            "htmlCode": "<img src=\"https://ciencias.ulisboa.pt/sites/default/files/styles/destaque/public/destaque-covid-19-2020.png?itok=LjpsJ2HQ\" width=\"735\" height=\"290\" alt=\"\">",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1) > img:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target is decorative.",
            "resultCode": "RC1",
            "htmlCode": "<img src=\"https://ciencias.ulisboa.pt/sites/default/files/styles/destaque/public/destaque-centro-testes-ciencias-2020.png?itok=oxyGwRat\" width=\"735\" height=\"290\" alt=\"\">",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1) > img:nth-of-type(1)"
          }
        ]
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
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:title"
          ],
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": []
      },
      "QW-ACT-R29": {
        "name": "Audio element content has text alternative",
        "code": "QW-ACT-R29",
        "mapping": "e7aa44",
        "description": "This rule checks if audio only elements have a text alternative available.",
        "metadata": {
          "target": {
            "element": "*",
            "attributes": "role"
          },
          "success-criteria": [
            {
              "name": "1.2.1",
              "level": "A",
              "principle": "Perceivable ",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/e7aa44",
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "passed": 0,
          "warning": 0,
          "failed": 0,
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
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:title"
          ],
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": []
      },
      "QW-ACT-R23": {
        "name": "video element visual content has accessible alternative",
        "code": "QW-ACT-R23",
        "mapping": "c5a4ea",
        "description": "This rule checks that video elements with audio have an alternative for the video content as audio or as text.",
        "metadata": {
          "target": {
            "element": "video"
          },
          "success-criteria": [
            {
              "name": "1.2.3",
              "level": "A",
              "principle": "Perceivable ",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded.html"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/c5a4ea",
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": []
      },
      "QW-ACT-R26": {
        "name": "video element auditory content has accessible alternative",
        "code": "QW-ACT-R26",
        "mapping": "eac66b",
        "description": "This rule checks that video elements have an alternative for information conveyed through audio.",
        "metadata": {
          "target": {
            "element": "video"
          },
          "success-criteria": [
            {
              "name": "1.2.2",
              "level": "A",
              "principle": "Perceivable ",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/eac66b",
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": []
      },
      "QW-ACT-R31": {
        "name": "Video element visual-only content has accessible alternative",
        "code": "QW-ACT-R31",
        "mapping": "c3232f",
        "description": "This rule checks that video elements without audio have an alternative available.",
        "metadata": {
          "target": {
            "element": "video"
          },
          "success-criteria": [
            {
              "name": "1.2.1",
              "level": "A",
              "principle": "Perceivable",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/c3232f",
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:title"
          ],
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": []
      },
      "QW-ACT-R32": {
        "name": "video element visual content has strict accessible alternative",
        "code": "QW-ACT-R32",
        "mapping": "1ec09b",
        "description": "This rule checks that video elements with audio have audio description.",
        "metadata": {
          "target": {
            "element": "video"
          },
          "success-criteria": [
            {
              "name": "1.2.5",
              "level": "AA",
              "principle": "Perceivable ",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded.html"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/1ec09b",
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": []
      },
      "QW-ACT-R15": {
        "name": "audio or video has no audio that plays automatically",
        "code": "QW-ACT-R15",
        "mapping": "80f0bf",
        "description": "This rule checks that auto-play audio does not last for more than 3 seconds, or the audio has a control mechanism to stop or mute it.",
        "metadata": {
          "target": {
            "element": [
              "audio",
              "video"
            ]
          },
          "success-criteria": [
            {
              "name": "1.4.2",
              "level": "A",
              "principle": "Perceivable",
              "url": "https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/80f0bf",
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": []
      },
      "QW-ACT-R24": {
        "name": "autocomplete attribute has valid value",
        "code": "QW-ACT-R24",
        "mapping": "73f2c2",
        "description": "This rule checks that the HTML autocomplete attribute has a correct value.",
        "metadata": {
          "target": {
            "element": "input[autocomplete], select[autocomplete], textarea[autocomplete]"
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
          "url": "https://act-rules.github.io/rules/73f2c2",
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": []
      },
      "QW-ACT-R35": {
        "name": "Heading has accessible name",
        "code": "QW-ACT-R35",
        "mapping": "ffd0e9",
        "description": "This rule applies to any HTML element with the semantic role of heading that is included in the accessibility tree.",
        "metadata": {
          "target": {
            "element": [
              "h1-h6",
              "*[role='heading']"
            ]
          },
          "success-criteria": [
            {
              "name": "1.3.1",
              "level": "A",
              "principle": "Perceivable",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
            },
            {
              "name": "4.1.2",
              "level": "AA",
              "principle": "Operable",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/ffd0e9",
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "passed": 20,
          "warning": 0,
          "failed": 0,
          "outcome": "passed",
          "description": "The test target has a non-empty accessible name."
        },
        "results": [
          {
            "verdict": "passed",
            "description": "The test target has a non-empty accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Ciências ULisboa",
            "htmlCode": "<h1 style=\"display:none\"></h1>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > h1:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a non-empty accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Em Destaque",
            "htmlCode": "<h2 class=\"title\"></h2>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > h2:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a non-empty accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Mestrados e Pós-Graduações",
            "htmlCode": "<h3></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a non-empty accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Sessão final de Projeto Empresarial",
            "htmlCode": "<h3></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a non-empty accessible name.",
            "resultCode": "RC1",
            "accessibleName": "DGES - Atribuição de Bolsas de Estudo por Mérito a Estudantes do Ensino Superior",
            "htmlCode": "<h3></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a non-empty accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Saúde - COVID-19",
            "htmlCode": "<h3></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a non-empty accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Centro de Testes de Ciências",
            "htmlCode": "<h3></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a non-empty accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Notícias",
            "htmlCode": "<h2></h2>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > h2:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a non-empty accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Estradas ameaçam milhões de aves e mamíferos na Europa",
            "htmlCode": "<h3 class=\"field-content\"></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > div:nth-of-type(1) > h3:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a non-empty accessible name.",
            "resultCode": "RC1",
            "accessibleName": "A interessante história do ubíquo número Pi",
            "htmlCode": "<h3 class=\"field-content\"></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > div:nth-of-type(1) > h3:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a non-empty accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Pandemia e Matemática",
            "htmlCode": "<h3 class=\"field-content\"></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > div:nth-of-type(1) > h3:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a non-empty accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Ciências ULisboa prepara próximo ano letivo",
            "htmlCode": "<h3 class=\"field-content\"></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > div:nth-of-type(1) > h3:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a non-empty accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Portugal participa no desenvolvimento de instrumento para o maior telescópio do mundo",
            "htmlCode": "<h3 class=\"field-content\"></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > div:nth-of-type(1) > h3:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a non-empty accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Eventos",
            "htmlCode": "<h2></h2>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > h2:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a non-empty accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Sessão final de Projeto Empresarial",
            "htmlCode": "<h3 class=\"field-content\"></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > h3:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a non-empty accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Software engineering standards and philosophy of science: Models, high-risk decision making, and epistemic warrants",
            "htmlCode": "<h3 class=\"field-content\"></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(2) > h3:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a non-empty accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Como dar Feedback em pequenos vídeos",
            "htmlCode": "<h3 class=\"field-content\"></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > h3:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a non-empty accessible name.",
            "resultCode": "RC1",
            "accessibleName": "ICUR2020 - 2.ª Conferência Internacional sobre Riscos Urbanos (Evento Adiado)",
            "htmlCode": "<h3 class=\"field-content\"></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > h3:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a non-empty accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Counting minimal surfaces in negatively curved 3-manifolds",
            "htmlCode": "<h3 class=\"field-content\"></h3>",
            "pointer": "html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(5) > h3:nth-of-type(1)"
          },
          {
            "verdict": "passed",
            "description": "The test target has a non-empty accessible name.",
            "resultCode": "RC1",
            "accessibleName": "Ciências ULisboa",
            "htmlCode": "<h3></h3>",
            "pointer": "html > body > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > h3:nth-of-type(1)"
          }
        ]
      },
      "QW-ACT-R36": {
        "name": "Headers attribute specified on a cell refers to cells in the same table element",
        "code": "QW-ACT-R36",
        "mapping": "a25f45",
        "description": "This rule checks that the headers attribute on a cell refer to other cells in the same table element with a semantic role of columnheader or rowheader.",
        "metadata": {
          "target": {
            "element": "table"
          },
          "success-criteria": [
            {
              "name": "1.3.1",
              "level": "A",
              "principle": "Perceivable",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/a25f45",
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": []
      },
      "QW-ACT-R39": {
        "name": "All table header cells have assigned data cells",
        "code": "QW-ACT-R39",
        "mapping": "d0f69e",
        "description": "This rule checks that each table header has assigned data cells in a table element.",
        "metadata": {
          "target": {
            "element": [
              "th",
              "*[role='columnheader']",
              "*[role='rowheader']"
            ]
          },
          "success-criteria": [
            {
              "name": "1.3.1",
              "level": "A",
              "principle": "Perceivable",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
            }
          ],
          "related": [],
          "url": "https://act-rules.github.io/rules/d0f69e",
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": []
      },
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
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "a11yReq": [
            "WCAG21:language"
          ],
          "passed": 0,
          "warning": 0,
          "failed": 0,
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
      "QW-ACT-R4": {
        "name": "Meta-refresh no delay",
        "code": "QW-ACT-R4",
        "mapping": "bc659a",
        "description": "This rule checks that the meta element is not used for delayed redirecting or refreshing.",
        "metadata": {
          "target": {
            "element": "meta"
          },
          "success-criteria": [
            {
              "name": "2.1.1",
              "level": "A",
              "principle": "Operable",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/keyboard"
            },
            {
              "name": "2.2.4",
              "level": "AAA",
              "principle": "Operable",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/interruptions"
            },
            {
              "name": "3.2.5",
              "level": "AAA",
              "principle": "Understandable",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/change-on-request"
            }
          ],
          "related": [
            "H76",
            "F40",
            "F41"
          ],
          "url": "https://act-rules.github.io/rules/bc659a",
          "type": [
            "ACTRule",
            "TestCase"
          ],
          "passed": 0,
          "warning": 0,
          "failed": 0,
          "outcome": "inapplicable",
          "description": "No test targets found."
        },
        "results": []
      }
    }
  }
