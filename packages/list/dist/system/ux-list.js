System.register(["aurelia-templating", "aurelia-dependency-injection", "@aurelia-ux/core", "./ux-list-theme"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_templating_1, aurelia_dependency_injection_1, core_1, ux_list_theme_1, theme, UxList;
    return {
        setters: [
            function (aurelia_templating_1_1) {
                aurelia_templating_1 = aurelia_templating_1_1;
            },
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ux_list_theme_1_1) {
                ux_list_theme_1 = ux_list_theme_1_1;
            }
        ],
        execute: function () {
            theme = new ux_list_theme_1.UxListTheme();
            UxList = /** @class */ (function () {
                function UxList(element, styleEngine) {
                    this.element = element;
                    this.styleEngine = styleEngine;
                    styleEngine.ensureDefaultTheme(theme);
                }
                UxList.prototype.bind = function () {
                    if (this.theme != null) {
                        this.themeChanged(this.theme);
                    }
                };
                UxList.prototype.themeChanged = function (newValue) {
                    if (newValue != null && newValue.themeKey == null) {
                        newValue.themeKey = 'list';
                    }
                    this.styleEngine.applyTheme(newValue, this.element);
                };
                __decorate([
                    aurelia_templating_1.bindable
                ], UxList.prototype, "theme", void 0);
                UxList = __decorate([
                    aurelia_dependency_injection_1.inject(Element, core_1.StyleEngine),
                    aurelia_templating_1.customElement('ux-list')
                ], UxList);
                return UxList;
            }());
            exports_1("UxList", UxList);
        }
    };
});
