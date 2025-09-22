/*<![CDATA[*/
(function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: '8744af-a2.myshopify.com',
        storefrontAccessToken: '17996c13a2b28c4450fd977492be37ed',
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: '9706075980125',
          node: document.getElementById('product-component-1724081835143'),
          moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
          options: {
    "product": {
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "calc(25% - 20px)",
            "margin-left": "20px",
            "margin-bottom": "50px"
          }
        },
        "button": {
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px",
          "border-radius": "40px",
          "padding-left": "100px",
          "padding-right": "100px"
        },
        "quantityInput": {
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px"
        }
      },
      "buttonDestination": "modal",
      "contents": {
        "img": false,
        "title": false,
        "price": false,
        "options": false
      },
      "text": {
        "button": "Pirkti"
      }
    },
    "productSet": {
      "styles": {
        "products": {
          "@media (min-width: 601px)": {
            "margin-left": "-20px"
          }
        }
      }
    },
    "modalProduct": {
      "contents": {
        "img": false,
        "imgWithCarousel": true,
        "button": false,
        "buttonWithQuantity": true
      },
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0px",
            "margin-bottom": "0px"
          }
        },
        "button": {
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px",
          "border-radius": "40px",
          "padding-left": "100px",
          "padding-right": "100px"
        },
        "quantityInput": {
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px"
        }
      },
      "text": {
        "button": "Pirkti"
      }
    },
    "option": {},
    "cart": {
      "styles": {
        "button": {
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px",
          "border-radius": "40px"
        }
      },
      "text": {
        "total": "Subtotal",
        "button": "Checkout"
      }
    },
    "toggle": {
      "styles": {
        "count": {
          "font-size": "13px"
        }
      }
    }
  },
        });
      });
    }
  })();
  /*]]>*/