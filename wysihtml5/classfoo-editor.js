var ToolBarRules = {
    /**
     * CSS Class white-list
     * Following CSS classes won't be removed when parsed by the wysihtml5 HTML parser
     */
    "classes": {
        "prettyprint linenums":1,
        "thumbnail":1,
        "ExecResult":1,
        "nav":1,
        "nav-tabs":1,
        "tab-content":1,
        "tab-pane":1,
        "active":1,
        "badge":1,
        // table
        "table":1,
        "table-hover":1,
        "table-bordered":1,
        "table-condensed":1,
        "table-striped":1,
        // text
        "text-muted":1,
        "text-primary":1,
        "text-success":1,
        "text-info":1,
        "text-warning":1,
        "text-danger":1,
        // background
        "bg-primary":1,
        "bg-success":1,
        "bg-info":1,
        "bg-warning":1,
        "bg-danger":1,
        // label
        "label":1,
        "label-default":1,
        "label-primary":1,
        "label-success":1,
        "label-info":1,
        "label-warning":1,
        "label-danger":1,
        // alert
        "alert":1,
        "alert-success":1,
        "alert-info":1,
        "alert-warning":1,
        "alert-danger":1,
        // list
        "list-inline":1,
        // dl
        "dl-horizontal":1,
    },
    /**
     * Tag list
     *
     * The following options are available:
     *
     *    - add_class:        converts and deletes the given HTML4 attribute (align, clear, ...) via the given method to a css class
     *                        The following methods are implemented in wysihtml5.dom.parse:
     *                          - align_text:  converts align attribute values (right/left/center/justify) to their corresponding css class "wysiwyg-text-align-*")
     *                            <p align="center">foo</p> ... becomes ... <p> class="wysiwyg-text-align-center">foo</p>
     *                          - clear_br:    converts clear attribute values left/right/all/both to their corresponding css class "wysiwyg-clear-*"
     *                            <br clear="all"> ... becomes ... <br class="wysiwyg-clear-both">
     *                          - align_img:    converts align attribute values (right/left) on <img> to their corresponding css class "wysiwyg-float-*"
     *                          
     *    - remove:             removes the element and its content
     *
     *    - rename_tag:         renames the element to the given tag
     *
     *    - set_class:          adds the given class to the element (note: make sure that the class is in the "classes" white list above)
     *
     *    - set_attributes:     sets/overrides the given attributes
     *
     *    - check_attributes:   checks the given HTML attribute via the given method
     *                            - url:            allows only valid urls (starting with http:// or https://)
     *                            - src:            allows something like "/foobar.jpg", "http://google.com", ...
     *                            - href:           allows something like "mailto:bert@foo.com", "http://google.com", "/foobar.jpg"
     *                            - alt:            strips unwanted characters. if the attribute is not set, then it gets set (to ensure valid and compatible HTML)
     *                            - numbers:  ensures that the attribute only contains numeric characters
     */
    "tags": {
        "tr": {
        },
        "strike": {
        },
        "form": {
            "rename_tag": "p"
        },
        "rt": {
            "rename_tag": "span"
        },
        "code": {},
        "acronym": {
            "rename_tag": "span"
        },
        "br": {
            //"add_class": {
            //   "clear": "clear_br"
            //}
        },
        "details": {
            "rename_tag": "p"
        },
        "h4": {
        },
        "em": {},
        "title": {
            "remove": 1
        },
        "multicol": {
            "rename_tag": "p"
        },
        "figure": {
            "rename_tag": "p"
        },
        "xmp": {
            "rename_tag": "span"
        },
        "small": {
        },
        "area": {
            "remove": 1
        },
        "time": {
            "rename_tag": "span"
        },
        "dir": {
            "rename_tag": "ul"
        },
        "bdi": {
            "rename_tag": "span"
        },
        "command": {
            "remove": 1
        },
        "ul": {},
        "progress": {
            "rename_tag": "span"
        },
        "dfn": {
            "rename_tag": "span"
        },
        "iframe": {
            "remove": 1
        },
        "figcaption": {
            "rename_tag": "p"
        },
        "a": {
            "check_attributes": {
                "href": "url" // if you compiled master manually then change this from 'url' to 'href'
            },
        },
        "img": {
            "check_attributes": {
                "width": "numbers",
                "alt": "alt",
                "src": "url", // if you compiled master manually then change this from 'url' to 'src'
                "height": "numbers"
            },
        },
        "rb": {
            "rename_tag": "span"
        },
        "footer": {
            "rename_tag": "p"
        },
        "noframes": {
            "remove": 1
        },
        "abbr": {
            "rename_tag": "span"
        },
        "u": {},
        "bgsound": {
            "remove": 1
        },
        "sup": {
            "rename_tag": "span"
        },
        "address": {
            "rename_tag": "p"
        },
        "basefont": {
            "remove": 1
        },
        "nav": {
            "rename_tag": "p"
        },
        "h1": {
        },
        "head": {
            "remove": 1
        },
        "tbody": {
        },
        "dd": {
        },
        "s": {
        },
        "li": {},
        "td": {
            "check_attributes": {
                "rowspan": "numbers",
                "colspan": "numbers"
            }
        },
        "object": {
            "remove": 1
        },
        "div": {
            "rename_tag":"p"
        },
        "option": {
            "rename_tag": "span"
        },
        "select": {
            "rename_tag": "span"
        },
        "i": {},
        "track": {
            "remove": 1
        },
        "wbr": {
            "remove": 1
        },
        "fieldset": {
            "rename_tag": "p"
        },
        "big": {
        },
        "button": {
            "rename_tag": "span"
        },
        "noscript": {
            "remove": 1
        },
        "svg": {
            "remove": 1
        },
        "input": {
            "remove": 1
        },
        "table": {},
        "keygen": {
            "remove": 1
        },
        "h5": {
        },
        "meta": {
            "remove": 1
        },
        "map": {
            "rename_tag": "p"
        },
        "isindex": {
            "remove": 1
        },
        "mark": {
        },
        "caption": {
        },
        "tfoot": {
        },
        "base": {
            "remove": 1
        },
        "video": {
            "remove": 1
        },
        "strong": {},
        "canvas": {
            "remove": 1
        },
        "output": {
            "rename_tag": "span"
        },
        "marquee": {
            "rename_tag": "span"
        },
        "b": {},
        "q": {
            "check_attributes": {
                "cite": "url"
            }
        },
        "applet": {
            "remove": 1
        },
        "span": {},
        "rp": {
            "rename_tag": "span"
        },
        "spacer": {
            "remove": 1
        },
        "source": {
            "remove": 1
        },
        "aside": {
            "rename_tag": "p"
        },
        "frame": {
            "remove": 1
        },
        "section": {
            "rename_tag": "p"
        },
        "body": {
            "rename_tag": "p"
        },
        "ol": {},
        "nobr": {
            "rename_tag": "span"
        },
        "html": {
            "rename_tag": "p"
        },
        "summary": {
            "rename_tag": "span"
        },
        "var": {
        },
        "del": {
        },
        "blockquote": {
            "check_attributes": {
                "cite": "url"
            }
        },
        "style": {
            "remove": 1
        },
        "device": {
            "remove": 1
        },
        "meter": {
            "rename_tag": "span"
        },
        "h3": {
        },
        "textarea": {
            "rename_tag": "span"
        },
        "embed": {
            "remove": 1
        },
        "hgroup": {
            "rename_tag": "p"
        },
        "font": {
            "rename_tag": "span",
            "add_class": {
                "size": "size_font"
            }
        },
        "tt": {
            "rename_tag": "span"
        },
        "noembed": {
            "remove": 1
        },
        "thead": {
        },
        "blink": {
            "rename_tag": "span"
        },
        "plaintext": {
            "rename_tag": "span"
        },
        "xml": {
            "remove": 1
        },
        "h6": {
        },
        "param": {
            "remove": 1
        },
        "th": {
            "check_attributes": {
                "rowspan": "numbers",
                "colspan": "numbers"
            },
        },
        "legend": {
            "rename_tag": "span"
        },
        "hr": {},
        "label": {
            "rename_tag": "span"
        },
        "dl": {
        },
        "kbd": {
        },
        "listing": {
            "rename_tag": "p"
        },
        "dt": {
        },
        "nextid": {
            "remove": 1
        },
        "pre": {
            "set_class": "prettyprint linenums"
        },
        "center": {
            "rename_tag": "p",
            "set_class": "wysiwyg-text-align-center"
        },
        "audio": {
            "remove": 1
        },
        "datalist": {
            "rename_tag": "span"
        },
        "samp": {
        },
        "col": {
            "remove": 1
        },
        "article": {
            "rename_tag": "p"
        },
        "cite": {},
        "link": {
            "remove": 1
        },
        "script": {
            "remove": 1
        },
        "bdo": {
            "rename_tag": "span"
        },
        "menu": {
            "rename_tag": "ul"
        },
        "colgroup": {
            "remove": 1
        },
        "ruby": {
            "rename_tag": "span"
        },
        "h2": {
        },
        "ins": {
        },
        "p": {
        },
        "sub": {
            "rename_tag": "span"
        },
        "comment": {
            "remove": 1
        },
        "frameset": {
            "remove": 1
        },
        "optgroup": {
            "rename_tag": "span"
        },
        "header": {
            "rename_tag": "p"
        }
    }
};

