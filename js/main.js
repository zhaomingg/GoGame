var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Header = (function (_super) {
    __extends(Header, _super);
    function Header(title) {
        var _this = _super.call(this) || this;
        _this.backProcess = null;
        _this.headerTitle = null;
        _this.titleText = '';
        _this.titleText = title;
        return _this;
    }
    Header.prototype.createChildren = function () {
        var _this = this;
        _super.prototype.createChildren.call(this);
        if (this.parent) {
            this.width = this.parent.width;
        }
        this.height = 60;
        var headerBg = new egret.Shape();
        headerBg.graphics.beginFill(0x000000);
        headerBg.graphics.drawRect(0, 0, this.width, this.height);
        headerBg.graphics.endFill();
        this.addChild(headerBg);
        this.headerTitle = new eui.Label();
        this.headerTitle.text = this.titleText;
        this.headerTitle.textColor = 0xffffff;
        this.headerTitle.textAlign = 'middle';
        this.headerTitle.verticalAlign = 'middle';
        // this.headerTitle.width = 200;
        // this.headerTitle.height = this.height;
        this.headerTitle.verticalCenter = 0;
        this.headerTitle.horizontalCenter = 0;
        this.headerTitle.size = 22;
        this.headerTitle.bold = true;
        this.addChild(this.headerTitle);
        // 设置返回按钮
        var backIcon = new eui.Image();
        backIcon.source = 'resource/assets/icon/a-left.png';
        backIcon.width = 30;
        backIcon.height = 30;
        backIcon.verticalCenter = 0;
        backIcon.left = 10;
        this.addChild(backIcon);
        // backIcon.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
        //    if(this.backCb) {
        //        this.backCb();
        //    }
        // }, this);
        var backLable = new eui.Label();
        backLable.width = 80;
        backLable.height = this.height;
        backLable.x = 0;
        backLable.y = 0;
        backLable.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this.backCb) {
                _this.backCb();
            }
        }, this);
        this.addChild(backLable);
    };
    Header.prototype.setTitle = function (title) {
        this.headerTitle.text = title;
        this.addChild(this.headerTitle);
    };
    return Header;
}(eui.Group));
__reflect(Header.prototype, "Header");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 2:
                        result = _a.sent();
                        this.startAnimation(result);
                        return [4 /*yield*/, platform.login()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 4:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createGameScene = function () {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        this.viewStack = new eui.ViewStack();
        this.viewStack.width = stageW;
        this.viewStack.height = stageH;
        var mainPage = new IndexPage();
        mainPage.width = stageW;
        mainPage.height = stageH;
        this.viewStack.addChild(mainPage);
        mainPage.toFreeMode = function () {
            this.viewStack.selectedChild = chessEditPage;
        }.bind(this);
        mainPage.toLifeMode = function () {
            this.viewStack.selectedChild = chessLifePage;
        }.bind(this);
        var chessEditPage = new ChessEditPage(function () {
            this.viewStack.selectedChild = mainPage;
        }.bind(this));
        chessEditPage.width = stageW;
        chessEditPage.height = stageH;
        this.viewStack.addChild(chessEditPage);
        var chessLifePage = new ChessLifePage(function () {
            this.viewStack.selectedChild = mainPage;
        }.bind(this));
        chessLifePage.width = stageW;
        chessLifePage.height = stageH;
        this.viewStack.addChild(chessLifePage);
        // let lifeEditPage = new LifeEditPage(function () {
        //     this.viewStack.selectedChild = mainPage;
        // }.bind(this));
        // lifeEditPage.width = stageW;
        // lifeEditPage.height = stageH;
        // this.viewStack.addChild(lifeEditPage);
        // 显示页面容器
        this.viewStack.selectedChild = mainPage;
        this.addChild(this.viewStack);
        // let sky = this.createBitmapByName("bg_jpg");
        // this.addChild(sky);
        // let stageW = this.stage.stageWidth;
        // let stageH = this.stage.stageHeight;
        // sky.width = stageW;
        // sky.height = stageH;
        // let topMask = new egret.Shape();
        // topMask.graphics.beginFill(0x000000, 0.5);
        // topMask.graphics.drawRect(0, 0, stageW, 172);
        // topMask.graphics.endFill();
        // topMask.y = 33;
        // this.addChild(topMask);
        // let icon: egret.Bitmap = this.createBitmapByName("egret_icon_png");
        // this.addChild(icon);
        // icon.x = 26;
        // icon.y = 33;
        // let line = new egret.Shape();
        // line.graphics.lineStyle(2, 0xffffff);
        // line.graphics.moveTo(0, 0);
        // line.graphics.lineTo(0, 117);
        // line.graphics.endFill();
        // line.x = 172;
        // line.y = 61;
        // this.addChild(line);
        // let colorLabel = new egret.TextField();
        // colorLabel.textColor = 0xffffff;
        // colorLabel.width = stageW - 172;
        // colorLabel.textAlign = "center";
        // colorLabel.text = "Hello Egret";
        // colorLabel.size = 24;
        // colorLabel.x = 172;
        // colorLabel.y = 80;
        // this.addChild(colorLabel);
        // let textfield = new egret.TextField();
        // this.addChild(textfield);
        // textfield.alpha = 0;
        // textfield.width = stageW - 172;
        // textfield.textAlign = egret.HorizontalAlign.CENTER;
        // textfield.size = 24;
        // textfield.textColor = 0xffffff;
        // textfield.x = 172;
        // textfield.y = 135;
        // this.textfield = textfield;
        // let button = new eui.Button();
        // button.label = "Click!";
        // button.horizontalCenter = 0;
        // button.verticalCenter = 0;
        // this.addChild(button);
        // button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    Main.prototype.startAnimation = function (result) {
        // let parser = new egret.HtmlTextParser();
        // let textflowArr = result.map(text => parser.parse(text));
        // let textfield = this.textfield;
        // let count = -1;
        // let change = () => {
        //     count++;
        //     if (count >= textflowArr.length) {
        //         count = 0;
        //     }
        //     let textFlow = textflowArr[count];
        //     // 切换描述内容
        //     // Switch to described content
        //     textfield.textFlow = textFlow;
        //     let tw = egret.Tween.get(textfield);
        //     tw.to({ "alpha": 1 }, 200);
        //     tw.wait(2000);
        //     tw.to({ "alpha": 0 }, 200);
        //     tw.call(change, this);
        // };
        // change();
    };
    /**
     * 点击按钮
     * Click the button
     */
    Main.prototype.onButtonClick = function (e) {
        var panel = new eui.Panel();
        panel.title = "Title";
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;
        this.addChild(panel);
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        var _this = this;
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else if (typeof generateEUI2 !== 'undefined') {
            RES.getResByUrl("resource/gameEui.json", function (data, url) {
                window["JSONParseClass"]["setData"](data);
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateEUI2);
                }, _this);
            }, this, RES.ResourceItem.TYPE_JSON);
        }
        else if (typeof generateJSON !== 'undefined') {
            if (url.indexOf(".exml") > -1) {
                var dataPath = url.split("/");
                dataPath.pop();
                var dirPath = dataPath.join("/") + "_EUI.json";
                if (!generateJSON.paths[url]) {
                    RES.getResByUrl(dirPath, function (data) {
                        window["JSONParseClass"]["setData"](data);
                        egret.callLater(function () {
                            onSuccess.call(thisObject, generateJSON.paths[url]);
                        }, _this);
                    }, this, RES.ResourceItem.TYPE_JSON);
                }
                else {
                    egret.callLater(function () {
                        onSuccess.call(thisObject, generateJSON.paths[url]);
                    }, this);
                }
            }
            else {
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateJSON);
                }, this);
            }
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
// TypeScript file
var DirectionButtons = (function (_super) {
    __extends(DirectionButtons, _super);
    function DirectionButtons(chessBoard) {
        var _this = _super.call(this) || this;
        _this.BUTTON_WIDTH = 90;
        _this.BUTTON_ICON_WIDTH = 35;
        _this.chessBoard = null;
        _this.chessBoard = chessBoard;
        return _this;
    }
    DirectionButtons.prototype.createChildren = function () {
        var _this = this;
        _super.prototype.createChildren.call(this);
        // 本地配置
        this.width = 300;
        this.height = 300;
        // 设置网格状布局
        var tLayout = new eui.TileLayout();
        tLayout.horizontalGap = 0;
        tLayout.verticalGap = 0;
        tLayout.columnAlign = eui.ColumnAlign.JUSTIFY_USING_WIDTH;
        tLayout.rowAlign = eui.RowAlign.JUSTIFY_USING_HEIGHT;
        tLayout.paddingTop = 10;
        tLayout.paddingRight = 10;
        tLayout.paddingLeft = 10;
        tLayout.paddingBottom = 10;
        tLayout.requestedColumnCount = 3;
        this.layout = tLayout;
        //设置填充项
        var fillTextA = new eui.Label();
        this.addChild(fillTextA);
        //向上的尖头
        var upButton = new eui.Button();
        upButton.skinName = 'resource/eui_skins/CircleButtonSkin.exml';
        upButton.width = this.BUTTON_WIDTH;
        upButton.height = this.BUTTON_WIDTH;
        upButton.iconDisplay.source = 'resource/assets/icon/a-up.png';
        upButton.iconDisplay.width = this.BUTTON_ICON_WIDTH;
        upButton.iconDisplay.height = this.BUTTON_ICON_WIDTH;
        upButton.iconDisplay.verticalCenter = -5;
        this.addChild(upButton);
        upButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.chessBoard.prePointMoveUp();
        }, this.chessBoard);
        //设置填充项
        var fillTextB = new eui.Label();
        this.addChild(fillTextB);
        //向左的尖头
        var leftButton = new eui.Button();
        leftButton.skinName = 'resource/eui_skins/CircleButtonSkin.exml';
        leftButton.width = this.BUTTON_WIDTH;
        leftButton.height = this.BUTTON_WIDTH;
        leftButton.iconDisplay.source = 'resource/assets/icon/a-left.png';
        leftButton.iconDisplay.width = this.BUTTON_ICON_WIDTH;
        leftButton.iconDisplay.height = this.BUTTON_ICON_WIDTH;
        leftButton.iconDisplay.horizontalCenter = -5;
        this.addChild(leftButton);
        leftButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.chessBoard.prePointMoveLeft();
        }, this.chessBoard);
        //确认键
        var confirmButton = new eui.Button();
        confirmButton.skinName = 'resource/eui_skins/CircleButtonWhiteSkin.exml';
        confirmButton.width = this.BUTTON_WIDTH;
        confirmButton.height = this.BUTTON_WIDTH;
        confirmButton.iconDisplay.source = 'resource/assets/icon/white_circle.png';
        confirmButton.iconDisplay.width = this.BUTTON_ICON_WIDTH;
        confirmButton.iconDisplay.height = this.BUTTON_ICON_WIDTH;
        this.addChild(confirmButton);
        confirmButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.chessBoard.chessDownConfirm();
        }, this.chessBoard);
        //向右的尖头
        var rightButton = new eui.Button();
        rightButton.skinName = 'resource/eui_skins/CircleButtonSkin.exml';
        rightButton.width = this.BUTTON_WIDTH;
        rightButton.height = this.BUTTON_WIDTH;
        rightButton.iconDisplay.source = 'resource/assets/icon/a-right.png';
        rightButton.iconDisplay.width = this.BUTTON_ICON_WIDTH;
        rightButton.iconDisplay.height = this.BUTTON_ICON_WIDTH;
        rightButton.iconDisplay.horizontalCenter = 5;
        this.addChild(rightButton);
        rightButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.chessBoard.prePointMoveRight();
        }, this.chessBoard);
        //设置填充项
        var fillTextC = new eui.Label();
        this.addChild(fillTextC);
        //向下的尖头
        var downButton = new eui.Button();
        downButton.skinName = 'resource/eui_skins/CircleButtonSkin.exml';
        downButton.width = this.BUTTON_WIDTH;
        downButton.height = this.BUTTON_WIDTH;
        downButton.iconDisplay.source = 'resource/assets/icon/a-down.png';
        downButton.iconDisplay.width = this.BUTTON_ICON_WIDTH;
        downButton.iconDisplay.height = this.BUTTON_ICON_WIDTH;
        downButton.iconDisplay.verticalCenter = 5;
        this.addChild(downButton);
        downButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.chessBoard.prePointMoveDown();
        }, this.chessBoard);
        //设置填充项
        var fillTextD = new eui.Label();
        this.addChild(fillTextD);
    };
    return DirectionButtons;
}(eui.Group));
__reflect(DirectionButtons.prototype, "DirectionButtons");
var ChessBoard = (function (_super) {
    __extends(ChessBoard, _super);
    function ChessBoard(width) {
        var _this = _super.call(this) || this;
        _this.showXYShape = false;
        _this.showIndexText = false; //是否显示棋子序号
        _this.isCountMode = false; // 进入点目模式
        _this.chessMode = -1; // 走子模式，-1为黑白轮流，0为黑棋，1为白棋
        _this.blackFirst = true; // 黑棋先走，反之白棋先走
        _this.chessRecord = []; // 一盘棋的走棋记录
        _this.deadPointsRecord = []; // 死子记录
        _this.chessRecordSnap = []; // 每走一步后的快照
        _this.protectPoint = null; // 打劫的保护点
        _this.chessDownCb = null; //落子确认前的回调函数
        _this.afterChessDownCb = null; // 落子确认并结束后的回调函数
        _this.drawGrid(width);
        return _this;
    }
    // 重置棋盘
    ChessBoard.prototype.reset = function () {
        this.chessRecord = [];
        this.deadPointsRecord = [];
        this.chessRecordSnap = [];
        this.protectPoint = null;
        this.chessPotins.forEach(function (item) {
            item.forEach(function (subItem) {
                subItem.clearShape();
                if (subItem.isDead) {
                    subItem.clearDeadShape();
                }
            });
        });
        this.chessMode = -1;
        this.clearCurrentPoint();
        this.isCountMode = false;
        this.clearPrePoint();
    };
    // 恢复到棋盘之前的某一步骤的状态
    ChessBoard.prototype.reloadByStep = function (step) {
        if (step >= this.chessRecord.length) {
            return;
        }
        this.chessRecord = this.chessRecord.slice(0, step);
        this.chessRecordSnap = this.chessRecordSnap.slice(0, step);
        if (this.chessRecordSnap.length > 0) {
            this.reloadBoardBySnap(this.chessRecordSnap[step - 1]);
            this.clearPrePoint();
            this.clearCurrentPoint();
        }
        else {
            this.reset();
        }
    };
    // 切换坐标文字
    ChessBoard.prototype.toggleXYshape = function () {
        if (this.showXYShape) {
            this.clearXYShape();
        }
        else {
            this.addXYShape();
        }
    };
    // 切换棋子序号文字显示
    ChessBoard.prototype.toggleIndexText = function () {
        this.showIndexText = !this.showIndexText;
        this.refreshAllPoints();
    };
    // 获取死子的数目
    ChessBoard.prototype.getDeadPointsNumber = function () {
        var deadCount = {
            black: 0,
            white: 0
        };
        // 注意有可能会停一招
        this.chessRecord.forEach(function (item, index) {
            if (item && item.length > 2) {
                if (index % 2 === 1) {
                    deadCount.white += item[2].length;
                }
                else {
                    deadCount.black += item[2].length;
                }
            }
        });
        return deadCount;
    };
    // 棋盘的预先加载，加载棋盘上已经有的棋子，以及下一步谁先下
    ChessBoard.prototype.preLoad = function (recordSnap, blackFirst) {
        if (recordSnap === void 0) { recordSnap = []; }
        if (blackFirst === void 0) { blackFirst = true; }
        this.reloadBoardBySnap(recordSnap);
        this.blackFirst = blackFirst;
    };
    // 停一招
    ChessBoard.prototype.passOneStep = function () {
        this.chessRecord.push(null); // 一盘棋的走棋记录
        this.protectPoint = null; // 打劫的保护点
        this.updateRecordSnap();
    };
    // 进入点目模式
    ChessBoard.prototype.enterCountMode = function () {
        this.isCountMode = true;
        // todo 注意和显示棋子序号的区别
    };
    // 离开点目模式
    ChessBoard.prototype.leaveCountMode = function () {
        this.isCountMode = false;
        this.refreshAllPoints();
    };
    // 获取当前记录长度
    ChessBoard.prototype.getRecordLength = function () {
        return this.chessRecord.length;
    };
    // 获取当前记录
    ChessBoard.prototype.getChessRecord = function () {
        return this.chessRecord;
    };
    // 点目
    ChessBoard.prototype.count = function () {
        var cloneChessPoints = [].concat(this.chessPotins);
        cloneChessPoints.forEach(function (item, index) {
            item.forEach(function (subItem) {
                if (subItem.isDead) {
                    subItem.status = -1;
                }
            });
        });
        var result = ChessService.count(cloneChessPoints);
        var panel = new eui.Panel();
        panel.title = "黑:" + result.black + ",白:" + result.white;
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;
        this.parent.addChild(panel);
    };
    // 打印当前记录和快照
    ChessBoard.prototype.printRecord = function () {
        console.log(JSON.stringify(this.chessRecordSnap[this.chessRecordSnap.length - 1]));
        console.log(JSON.stringify(this.chessRecord));
        console.log((this.chessRecord));
    };
    // 计算死活下一手
    ChessBoard.prototype.nextForLive = function () {
        var blankList = [];
        var boardSnap = this.chessRecordSnap[this.chessRecordSnap.length - 1];
        if (this.chessRecordSnap.length > 0) {
            blankList = ChessService.getBlankInBlock(boardSnap);
        }
        ChessService.getChessValue(blankList, boardSnap, 1);
    };
    // 将每一步棋下完后的快照压入栈中
    ChessBoard.prototype.updateRecordSnap = function () {
        var tempChessPoints = [];
        this.chessPotins.forEach(function (item, index) {
            tempChessPoints.push([]);
            item.forEach(function (tempPoint, subIndex) {
                tempChessPoints[index].push(tempPoint.status);
            });
        });
        this.chessRecordSnap.push(tempChessPoints);
    };
    // 根据当前条件，重新绘制所有棋子
    ChessBoard.prototype.refreshAllPoints = function () {
        var _this = this;
        this.chessPotins.forEach(function (item, index) {
            item.forEach(function (tempPoint) {
                if (tempPoint.isDead) {
                    tempPoint.clearDeadShape();
                }
                if (tempPoint.status === 0) {
                    tempPoint.drawBlack(_this.showIndexText);
                }
                if (tempPoint.status === 1) {
                    tempPoint.drawWhite(_this.showIndexText);
                }
            });
        });
        if (this.chessRecord.length > 0) {
            var currentPoint = this.chessRecord[this.chessRecord.length - 1];
            this.drawCurrentPoint(currentPoint[0], currentPoint[1]);
        }
    };
    // 根据快照记录恢复棋盘
    ChessBoard.prototype.reloadBoardBySnap = function (snap) {
        this.chessPotins.forEach(function (item, index) {
            item.forEach(function (subItem, subIndex) {
                subItem.clearShape();
                switch (snap[index][subIndex]) {
                    case 0:
                        subItem.drawBlack();
                        break;
                    case 1:
                        subItem.drawWhite();
                        break;
                    default:
                        break;
                }
            });
        });
    };
    // 构造函数调用的初始化棋盘
    ChessBoard.prototype.drawGrid = function (width) {
        var chessboardWidth = width - 50;
        // 棋盘主框
        var chessboard = new egret.Shape();
        // chessboard.graphics.lineStyle( 2, 0xff0000 );
        chessboard.graphics.beginFill(0xffb61e);
        chessboard.graphics.drawRect(0, 0, chessboardWidth, chessboardWidth);
        chessboard.graphics.endFill();
        chessboard.y = 0;
        chessboard.x = 25;
        var boardDivid = chessboardWidth / 19;
        this.boardDivid = boardDivid;
        var chessOffset = boardDivid / 2;
        this.chessOffset = chessOffset;
        // 棋盘的线
        var lineX = chessOffset;
        for (var i = 0; i < 19; i++) {
            chessboard.graphics.lineStyle(2, 0x000000);
            chessboard.graphics.moveTo(lineX, chessOffset);
            chessboard.graphics.lineTo(lineX, chessboardWidth - chessOffset);
            chessboard.graphics.endFill();
            lineX += boardDivid;
        }
        var lineY = chessOffset;
        for (var i = 0; i < 19; i++) {
            chessboard.graphics.lineStyle(2, 0x000000);
            chessboard.graphics.moveTo(chessOffset, lineY);
            chessboard.graphics.lineTo(chessboardWidth - chessOffset, lineY);
            chessboard.graphics.endFill();
            lineY += boardDivid;
        }
        // 设置棋盘的361个点
        var chessPotins = new Array();
        for (var i = 0; i < 19; i++) {
            chessPotins[i] = new Array();
            for (var j = 0; j < 19; j++) {
                var x = 25 + chessOffset + boardDivid * i;
                var y = chessOffset + boardDivid * j;
                chessPotins[i][j] = new ChessPoint(this, x, y, chessOffset);
            }
        }
        this.chessPotins = chessPotins;
        // 棋盘的星位
        var boardStar = [
            [boardDivid * 3 + chessOffset, boardDivid * 3 + chessOffset],
            [boardDivid * 3 + chessOffset, boardDivid * 9 + chessOffset],
            [boardDivid * 3 + chessOffset, boardDivid * 15 + chessOffset],
            [boardDivid * 9 + chessOffset, boardDivid * 3 + chessOffset],
            [boardDivid * 9 + chessOffset, boardDivid * 9 + chessOffset],
            [boardDivid * 9 + chessOffset, boardDivid * 15 + chessOffset],
            [boardDivid * 15 + chessOffset, boardDivid * 3 + chessOffset],
            [boardDivid * 15 + chessOffset, boardDivid * 9 + chessOffset],
            [boardDivid * 15 + chessOffset, boardDivid * 15 + chessOffset],
        ];
        boardStar.forEach(function (item) {
            chessboard.graphics.beginFill(0x000000, 1);
            chessboard.graphics.drawCircle(item[0], item[1], 6);
            chessboard.graphics.endFill();
        });
        // 棋盘绘制完成，绑定点击事件
        this.addChild(chessboard);
        chessboard.touchEnabled = true;
        chessboard.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBoardClick, this);
        // 添加x轴坐标容器
        this.xShape = new egret.Sprite();
        // 添加y轴坐标容器
        this.yShape = new egret.Sprite();
        this.yShape.y = chessboardWidth;
        this.drawXYShape();
        // 初始化当前棋子的图标
        this.currentPoint = new egret.Shape();
        // 初始化预落棋子的图标
        this.prePoint = new egret.Shape();
    };
    // 绘制当前坐标的预落棋子
    ChessBoard.prototype.drawPrePoint = function (x, y) {
        var r = this.boardDivid / 4;
        var centerX = this.chessPotins[x][y].x;
        var centerY = this.chessPotins[x][y].y;
        var offsetX = (this.boardDivid / 4) * Math.sqrt(3) / 2;
        var offsetY = (this.boardDivid / 4) * 0.5;
        this.prePoint.graphics.clear();
        var isBlack = true;
        switch (this.chessMode) {
            case 0:
                isBlack = true;
                break;
            case 1:
                isBlack = false;
                break;
            case -1:
            default:
                if (this.chessRecord.length % 2 === 1) {
                    isBlack = this.blackFirst ? false : true;
                }
                else {
                    isBlack = this.blackFirst ? true : false;
                }
        }
        if (!isBlack) {
            this.prePoint.graphics.lineStyle(2, 0x000000);
            this.prePoint.graphics.beginFill(0xffffff, 1);
            this.prePoint.graphics.drawCircle(this.chessPotins[x][y].x, this.chessPotins[x][y].y, this.boardDivid / 2);
            this.prePoint.graphics.endFill();
            this.prePoint.graphics.beginFill(0xffffff, 1);
            this.prePoint.graphics.moveTo(centerX, centerY - r);
            this.prePoint.graphics.lineTo(centerX + offsetX, centerY + offsetY);
            this.prePoint.graphics.lineTo(centerX - offsetX, centerY + offsetY);
            this.prePoint.graphics.lineTo(centerX, centerY - r);
            this.prePoint.graphics.endFill();
        }
        else {
            this.prePoint.graphics.beginFill(0x000000, 1);
            this.prePoint.graphics.drawCircle(this.chessPotins[x][y].x, this.chessPotins[x][y].y, this.boardDivid / 2);
            this.prePoint.graphics.endFill();
            this.prePoint.graphics.beginFill(0x000000, 1);
            this.prePoint.graphics.lineStyle(2, 0xffffff);
            this.prePoint.graphics.moveTo(centerX, centerY - r);
            this.prePoint.graphics.lineTo(centerX + offsetX, centerY + offsetY);
            this.prePoint.graphics.lineTo(centerX - offsetX, centerY + offsetY);
            this.prePoint.graphics.lineTo(centerX, centerY - r);
            this.prePoint.graphics.endFill();
        }
        this.addChild(this.prePoint);
        // todo 设置当前坐标系
        this.prePointLocation = [x, y];
    };
    // 清除预落棋子
    ChessBoard.prototype.clearPrePoint = function () {
        if (this.prePoint.parent) {
            this.removeChild(this.prePoint);
        }
        this.prePointLocation = null;
        // todo 有不少地方需要判断清除预落棋子，注意
    };
    // 绘制坐标文字
    ChessBoard.prototype.drawXYShape = function () {
        var _this = this;
        for (var i = 0; i < 19; i++) {
            var label = new egret.TextField();
            label.text = (i + 1).toString();
            label.textColor = 0x000000;
            label.size = 16;
            label.x = 5;
            label.y = i * this.boardDivid;
            label.width = 20;
            label.height = this.boardDivid;
            label.verticalAlign = egret.VerticalAlign.MIDDLE;
            this.xShape.addChild(label);
        }
        this.addChild(this.xShape);
        var axiosY = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', "M", 'N', 'O', "P", 'Q',
            'R', 'S'];
        axiosY.forEach(function (item, index) {
            var label = new egret.TextField();
            label.text = item;
            label.textColor = 0x000000;
            label.size = 16;
            label.x = 25 + index * _this.boardDivid;
            label.y = 0;
            label.width = _this.boardDivid;
            label.height = _this.boardDivid;
            label.verticalAlign = egret.VerticalAlign.MIDDLE;
            label.textAlign = egret.HorizontalAlign.CENTER;
            _this.yShape.addChild(label);
        });
        this.addChild(this.yShape);
        this.showXYShape = true;
    };
    // 显示坐标
    ChessBoard.prototype.addXYShape = function () {
        this.addChild(this.xShape);
        this.addChild(this.yShape);
        this.showXYShape = true;
    };
    // 隐藏坐标
    ChessBoard.prototype.clearXYShape = function () {
        this.removeChild(this.xShape);
        this.removeChild(this.yShape);
        this.showXYShape = false;
    };
    // 绘制当前点
    ChessBoard.prototype.drawCurrentPoint = function (x, y) {
        var xValue = this.chessPotins[x][y].x;
        var yValue = this.chessPotins[x][y].y;
        var r = (this.boardDivid / 4) * 1.5;
        this.currentPoint.graphics.clear();
        this.currentPoint.graphics.beginFill(0xe9967a);
        this.currentPoint.graphics.moveTo(xValue, yValue);
        this.currentPoint.graphics.lineTo(xValue + r, yValue);
        this.currentPoint.graphics.drawArc(xValue, yValue, r, 0, (Math.PI) / 2, false);
        this.currentPoint.graphics.lineTo(xValue, yValue);
        this.currentPoint.graphics.endFill();
        this.addChild(this.currentPoint);
    };
    // 清除当前点
    ChessBoard.prototype.clearCurrentPoint = function () {
        this.currentPoint.graphics.clear();
        this.addChild(this.currentPoint);
    };
    // 将一片棋子的点删除,即是吃子
    ChessBoard.prototype.removePoints = function (points) {
        var _this = this;
        points.forEach(function (item, index) {
            _this.chessPotins[item[0]][item[1]].clearShape();
        });
    };
    // 落子的渲染
    ChessBoard.prototype.confirmPoint = function (x, y, deadPoints) {
        if (deadPoints === void 0) { deadPoints = null; }
        // 先清除预落子
        this.clearPrePoint();
        var tempPoint = this.chessPotins[x][y];
        if (deadPoints) {
            // todo 这里增加死子没有什么意义，死子的统计后续再增加吧
            this.chessRecord.push([x, y]);
        }
        else {
            this.chessRecord.push([x, y]);
        }
        // 根据走子模式确认走哪一种颜色的棋子
        switch (this.chessMode) {
            case 1:
                tempPoint.drawWhite(this.showIndexText);
                break;
            case 0:
                tempPoint.drawBlack(this.showIndexText);
                break;
            case -1:
            default:
                tempPoint.index = this.chessRecord.length;
                if (this.chessRecord.length % 2 == 1) {
                    if (this.blackFirst) {
                        tempPoint.drawBlack(this.showIndexText);
                    }
                    else {
                        tempPoint.drawWhite(this.showIndexText);
                    }
                }
                else {
                    if (this.blackFirst) {
                        tempPoint.drawWhite(this.showIndexText);
                    }
                    else {
                        tempPoint.drawBlack(this.showIndexText);
                    }
                }
                break;
        }
        this.drawCurrentPoint(x, y);
        this.updateRecordSnap();
        // 播放落子声音
        this.playSound();
    };
    ChessBoard.prototype.playSound = function () {
        try {
            if (wx) {
                var audioCtx = wx.createInnerAudioContext();
                audioCtx.src = 'resource/assets/audio/pa.mp3';
                audioCtx.onPlay(function () {
                });
                audioCtx.onError(function (err) {
                    console.log(err);
                });
                audioCtx.play();
            }
        }
        catch (err) {
        }
    };
    // 点目模式时的点击处理
    ChessBoard.prototype.onCountModeClick = function (xIndex, yIndex) {
        var _this = this;
        // 判断该坐标位置是否存在棋子
        var pointStatus = this.chessPotins[xIndex][yIndex].status;
        if (pointStatus == -1) {
            return;
        }
        var selfList = ChessService.getLowerBlock(xIndex, yIndex, this.chessPotins, pointStatus);
        selfList.forEach(function (item) {
            var tempPoint = _this.chessPotins[item[0]][item[1]];
            if (tempPoint.isDead) {
                tempPoint.clearDeadShape();
            }
            else {
                tempPoint.drawDeadShape();
            }
        });
    };
    // 棋盘点击事件
    ChessBoard.prototype.onBoardClick = function (e) {
        // 获取当前点击坐标
        var targetPoint = this.globalToLocal(e.stageX, e.stageY);
        var xIndex = Math.floor((targetPoint.x - 25) / this.boardDivid);
        var yIndex = Math.floor(targetPoint.y / this.boardDivid);
        // 如果是点目模式，进入点目模式处理
        if (this.isCountMode) {
            this.onCountModeClick(xIndex, yIndex);
            return;
        }
        // 判断该坐标位置是否存在棋子
        if (this.chessPotins[xIndex][yIndex].status != -1) {
            return;
        }
        // 获取预落子, 预落子存在，则当作确认
        if (this.prePointLocation && this.prePointLocation[0] === xIndex && this.prePointLocation[1] === yIndex) {
            this.chessDownConfirm();
            return;
        }
        this.drawPrePoint(xIndex, yIndex);
    };
    // 预落子移动到左边
    ChessBoard.prototype.prePointMoveLeft = function () {
        if (!this.prePointLocation) {
            return;
        }
        var nextLoction = ChessService.getLeftBlankPoint(this.prePointLocation[0], this.prePointLocation[1], this.chessPotins);
        this.drawPrePoint(nextLoction[0], nextLoction[1]);
    };
    // 预落子移动到右边
    ChessBoard.prototype.prePointMoveRight = function () {
        if (!this.prePointLocation) {
            return;
        }
        var nextLoction = ChessService.getRightBlankPoint(this.prePointLocation[0], this.prePointLocation[1], this.chessPotins);
        this.drawPrePoint(nextLoction[0], nextLoction[1]);
    };
    // 预落子移动到上边
    ChessBoard.prototype.prePointMoveUp = function () {
        if (!this.prePointLocation) {
            return;
        }
        var nextLoction = ChessService.getUpperBlankPoint(this.prePointLocation[0], this.prePointLocation[1], this.chessPotins);
        this.drawPrePoint(nextLoction[0], nextLoction[1]);
    };
    // 预落子移动到下边
    ChessBoard.prototype.prePointMoveDown = function () {
        if (!this.prePointLocation) {
            return;
        }
        var nextLoction = ChessService.getLowerBlankPoint(this.prePointLocation[0], this.prePointLocation[1], this.chessPotins);
        this.drawPrePoint(nextLoction[0], nextLoction[1]);
    };
    // 棋子落下确认
    ChessBoard.prototype.chessDownConfirm = function () {
        if (!this.prePointLocation) {
            return;
        }
        var xIndex = this.prePointLocation[0];
        var yIndex = this.prePointLocation[1];
        // 如果回调函数成功，则不走棋---死活模式用
        var chessDownCbFlag = false;
        if (this.chessDownCb) {
            chessDownCbFlag = this.chessDownCb(xIndex, yIndex);
        }
        if (chessDownCbFlag) {
            return;
        }
        this.chessDownProcess(xIndex, yIndex);
        if (this.afterChessDownCb) {
            this.afterChessDownCb();
        }
    };
    // 指定位置落下棋子
    ChessBoard.prototype.chessDownProcess = function (x, y) {
        var _this = this;
        var xIndex = x;
        var yIndex = y;
        // 打劫禁入点判断
        if (this.protectPoint && this.protectPoint[0] == xIndex && this.protectPoint[1] == yIndex) {
            var panel = new eui.Panel();
            panel.title = "打劫禁入点";
            panel.horizontalCenter = 0;
            panel.verticalCenter = 0;
            this.parent.addChild(panel);
            return;
        }
        else {
            this.protectPoint = null;
        }
        // 获取当前落子类型
        var currentStatus;
        switch (this.chessMode) {
            case 1:
                currentStatus = 1;
                break;
            case 0:
                currentStatus = 0;
                break;
            case -1:
            default:
                if (this.blackFirst) {
                    currentStatus = (this.chessRecord.length % 2 == 1) ? 1 : 0;
                }
                else {
                    currentStatus = (this.chessRecord.length % 2 == 1) ? 0 : 1;
                }
                break;
        }
        // 获取当前落子周围的对方棋子是否有气
        var blockList = ChessService.getInterfacingBlock(xIndex, yIndex, this.chessPotins, currentStatus);
        var canRemoveList = blockList.filter(function (item) {
            var tempList = ChessService.getPointsLibertyList(item, _this.chessPotins);
            // 只有一气，且是当前要落下的点
            return tempList.length === 1 && tempList[0][0] === xIndex && tempList[0][1] === yIndex;
        });
        // 获取包含本次落点的棋块
        var selfList = ChessService.getContinuousPoints(xIndex, yIndex, this.chessPotins, currentStatus);
        var selfLiberty = ChessService.getPointsLiberty(selfList, this.chessPotins);
        if (canRemoveList.length > 0) {
            // 记录打劫的保护点
            if (canRemoveList.length == 1 && canRemoveList[0].length == 1
                && selfList.length == 1 && selfLiberty === 0) {
                var tempPoint = canRemoveList[0][0];
                this.protectPoint = [tempPoint[0], tempPoint[1]];
            }
            var allDeadPoints_1 = [];
            canRemoveList.forEach(function (item) {
                _this.removePoints(item);
                allDeadPoints_1 = allDeadPoints_1.concat(item);
            });
            //  下棋
            this.confirmPoint(xIndex, yIndex, allDeadPoints_1);
        }
        else {
            if (selfLiberty > 0) {
                //  下棋
                this.confirmPoint(xIndex, yIndex);
            }
            else {
                // 提示
                var panel = new eui.Panel();
                panel.title = "禁入点";
                panel.horizontalCenter = 0;
                panel.verticalCenter = 0;
                this.parent.addChild(panel);
            }
        }
    };
    return ChessBoard;
}(egret.Sprite));
__reflect(ChessBoard.prototype, "ChessBoard");
var ChessPoint = (function () {
    function ChessPoint(parent, x, y, circle) {
        this.status = -1; //暂定黑色为0， 白色为1
        this.isDead = false; //是否是死子，点目时候专用
        this.x = x;
        this.y = y;
        this.parent = parent;
        this.circle = circle;
        this.pointShape = new egret.Shape();
        this.deadShape = new egret.Shape();
        this.parent.addChild(this.pointShape);
    }
    ChessPoint.prototype.drawDeadShape = function () {
        var tempColor = this.status === 0 ? 0xffffff : 0x000000;
        this.deadShape.graphics.beginFill(tempColor, 1);
        this.deadShape.graphics.drawRect(this.x - this.circle / 2, this.y - this.circle / 2, this.circle, this.circle);
        this.deadShape.graphics.endFill();
        this.parent.addChild(this.deadShape);
        this.isDead = true;
    };
    ChessPoint.prototype.clearDeadShape = function () {
        this.deadShape.graphics.clear();
        this.parent.removeChild(this.deadShape);
        this.isDead = false;
    };
    ChessPoint.prototype.clearShape = function () {
        this.clearPoint();
        this.status = -1;
        this.index = null;
    };
    // 只重置形状
    ChessPoint.prototype.clearPoint = function () {
        this.pointShape.graphics.clear();
        this.parent.addChild(this.pointShape);
        if (this.lable && this.lable.parent) {
            this.parent.removeChild(this.lable);
        }
    };
    ChessPoint.prototype.drawBlack = function (showIndex) {
        if (showIndex === void 0) { showIndex = false; }
        this.clearPoint();
        this.pointShape.graphics.beginFill(0x000000, 1);
        // let matr:egret.Matrix=new egret.Matrix();
        // this.pointShape.graphics.beginGradientFill(egret.GradientType.RADIAL,[0xffffff,0x000000],[1,1],[0,225],matr);
        this.pointShape.graphics.drawCircle(this.x, this.y, this.circle);
        this.pointShape.graphics.endFill();
        this.parent.addChild(this.pointShape);
        if (this.index !== null && showIndex) {
            var label = new egret.TextField();
            label.text = (this.index).toString();
            label.x = this.x - this.circle;
            label.y = this.y - this.circle;
            label.height = this.circle * 2;
            label.width = this.circle * 2;
            label.size = 12;
            label.verticalAlign = egret.VerticalAlign.MIDDLE;
            label.textAlign = egret.HorizontalAlign.CENTER;
            label.textColor = 0xffffff;
            this.lable = label;
            this.parent.addChild(this.lable);
        }
        this.status = 0;
    };
    ChessPoint.prototype.drawWhite = function (showIndex) {
        if (showIndex === void 0) { showIndex = false; }
        this.clearPoint();
        this.pointShape.graphics.lineStyle(2, 0x000000);
        this.pointShape.graphics.beginFill(0xffffff, 1);
        this.pointShape.graphics.drawCircle(this.x, this.y, this.circle);
        this.pointShape.graphics.endFill();
        this.parent.addChild(this.pointShape);
        if (this.index !== null && showIndex) {
            var label = new egret.TextField();
            label.text = (this.index).toString();
            label.x = this.x - this.circle;
            label.y = this.y - this.circle;
            label.height = this.circle * 2;
            label.width = this.circle * 2;
            label.textColor = 0x000000;
            label.size = 12;
            label.verticalAlign = egret.VerticalAlign.MIDDLE;
            label.textAlign = egret.HorizontalAlign.CENTER;
            this.lable = label;
            this.parent.addChild(this.lable);
        }
        this.status = 1;
    };
    return ChessPoint;
}());
__reflect(ChessPoint.prototype, "ChessPoint");
var ChessService = (function () {
    function ChessService() {
    }
    // 获取相邻的点
    ChessService.getInterfacingPoint = function (x, y, width) {
        if (x >= width || y >= width) {
            return [];
        }
        var pointList = [];
        if (x < width - 1) {
            pointList.push([x + 1, y]);
        }
        if (x > 0) {
            pointList.push([x - 1, y]);
        }
        if (y < width - 1) {
            pointList.push([x, y + 1]);
        }
        if (y > 0) {
            pointList.push([x, y - 1]);
        }
        return pointList;
    };
    // 获取某一点的连续相邻的所有点
    ChessService.getContinuousPoints = function (x, y, pointList, pointValue) {
        // todo pointList是个二维数组，暂时先不判断大小了
        var pointResultList = [[x, y]];
        var pointUncheckedList = [[x, y]];
        while (pointUncheckedList.length > 0) {
            var tempPoint = pointUncheckedList.pop();
            var tempInterfacingPoionts = this.getInterfacingPoint(tempPoint[0], tempPoint[1], pointList.length);
            tempInterfacingPoionts = tempInterfacingPoionts.filter(function (item) {
                // 需要过滤是和自己一样类型的棋子
                return pointList[item[0]][item[1]].status === pointValue;
            });
            // 二维数组中，数组是对象，不能用indexOf去判断
            tempInterfacingPoionts.forEach(function (item) {
                var tempList = pointResultList.filter(function (subItem) {
                    return item[0] == subItem[0] && item[1] == subItem[1];
                });
                if (tempList.length < 1) {
                    pointResultList.push(item);
                    pointUncheckedList.push(item);
                }
            });
        }
        return pointResultList;
    };
    // 获取一块棋的总气数
    ChessService.getPointsLiberty = function (pointList, chessPoint) {
        return this.getPointsLibertyList(pointList, chessPoint).length;
    };
    // 获取一块棋的气的点坐标
    ChessService.getPointsLibertyList = function (pointList, chessPoint) {
        var _this = this;
        var interfacingPoints = [];
        pointList.forEach(function (item) {
            var tempInterfacingPoionts = _this.getInterfacingPoint(item[0], item[1], chessPoint.length);
            tempInterfacingPoionts = tempInterfacingPoionts.filter(function (subItem) {
                // 需要过滤是空的气
                return chessPoint[subItem[0]][subItem[1]].status === -1;
            });
            // 二维数组中，数组是对象，不能用indexOf去判断
            tempInterfacingPoionts.forEach(function (minItem) {
                if (!_this.hasPoint(minItem, interfacingPoints)) {
                    interfacingPoints.push(minItem);
                }
            });
        });
        return interfacingPoints;
    };
    // 获取该点周围的其它棋块
    ChessService.getInterfacingBlock = function (x, y, pointList, pointValue) {
        var _this = this;
        var interfacingPoints = this.getInterfacingPoint(x, y, pointList.length);
        var blockList = [];
        interfacingPoints = interfacingPoints.filter(function (item) {
            var tempPoint = pointList[item[0]][item[1]];
            return tempPoint.status != -1 && tempPoint.status != pointValue;
        });
        interfacingPoints.forEach(function (item) {
            var hasPointFlag = blockList.some(function (subItem) {
                return _this.hasPoint(item, subItem);
            });
            if (hasPointFlag) {
                return;
            }
            var tempStatus = pointList[item[0]][item[1]].status;
            blockList.push(_this.getContinuousPoints(item[0], item[1], pointList, tempStatus));
        });
        return blockList;
    };
    // 获取一块相邻的所有棋子以及通过空闲点可以到达的所有棋子，点目用
    ChessService.getLowerBlock = function (x, y, pointList, status) {
        if (status < 0) {
            return [];
        }
        var pointResultList = [[x, y]];
        var pointUncheckedList = [[x, y]];
        while (pointUncheckedList.length > 0) {
            var tempPoint = pointUncheckedList.pop();
            var tempInterfacingPoionts = this.getInterfacingPoint(tempPoint[0], tempPoint[1], pointList.length);
            tempInterfacingPoionts = tempInterfacingPoionts.filter(function (item) {
                // 需要过滤是和自己一样类型的棋子和空闲点
                var tempStatus = pointList[item[0]][item[1]].status;
                return tempStatus === status || tempStatus === -1;
            });
            // 二维数组中，数组是对象，不能用indexOf去判断
            tempInterfacingPoionts.forEach(function (item) {
                var tempList = pointResultList.filter(function (subItem) {
                    return item[0] == subItem[0] && item[1] == subItem[1];
                });
                if (tempList.length < 1) {
                    pointResultList.push(item);
                    pointUncheckedList.push(item);
                }
            });
        }
        pointResultList = pointResultList.filter(function (item) {
            return pointList[item[0]][item[1]].status === status;
        });
        return pointResultList;
    };
    // 点目 
    ChessService.count = function (chessPoint) {
        var _this = this;
        //先找出所有空闲的点
        var blankPoints = [];
        chessPoint.forEach(function (item, index) {
            item.forEach(function (subItem, subIndex) {
                if (subItem.status === -1) {
                    blankPoints.push([index, subIndex]);
                }
            });
        });
        // 获取空闲的棋块
        var blockList = [];
        blankPoints.forEach(function (item) {
            var hasPointFlag = blockList.some(function (subItem) {
                return _this.hasPoint(item, subItem);
            });
            if (hasPointFlag) {
                return;
            }
            var tempStatus = chessPoint[item[0]][item[1]].status;
            blockList.push(_this.getContinuousPoints(item[0], item[1], chessPoint, tempStatus));
        });
        // 如果棋块的周围只有黑棋或者只有白棋，修改状态
        blockList.forEach(function (pointList) {
            var interfacingPoints = [];
            pointList.forEach(function (item) {
                var tempInterfacingPoionts = _this.getInterfacingPoint(item[0], item[1], chessPoint.length);
                tempInterfacingPoionts = tempInterfacingPoionts.filter(function (subItem) {
                    // 需要过滤是空的气
                    return chessPoint[subItem[0]][subItem[1]].status != -1;
                });
                // 二维数组中，数组是对象，不能用indexOf去判断
                tempInterfacingPoionts.forEach(function (minItem) {
                    if (!_this.hasPoint(minItem, interfacingPoints)) {
                        interfacingPoints.push(minItem);
                    }
                });
            });
            var blackFlag = interfacingPoints.some(function (item) {
                return chessPoint[item[0]][item[1]].status === 0;
            });
            var whiteFlag = interfacingPoints.some(function (item) {
                return chessPoint[item[0]][item[1]].status === 1;
            });
            if (blackFlag && !whiteFlag) {
                pointList.forEach(function (item) {
                    chessPoint[item[0]][item[1]].status = 0;
                });
            }
            if (!blackFlag && whiteFlag) {
                pointList.forEach(function (item) {
                    chessPoint[item[0]][item[1]].status = 1;
                });
            }
        });
        // 最后统计数目
        var blackCount = 0;
        var whiteCount = 0;
        chessPoint.forEach(function (item, index) {
            item.forEach(function (subItem, subIndex) {
                if (subItem.status === 0) {
                    blackCount += 1;
                }
                if (subItem.status === 1) {
                    whiteCount += 1;
                }
            });
        });
        console.log(blackCount);
        console.log(whiteCount);
        return {
            black: blackCount,
            white: whiteCount
        };
    };
    // 获取右边的空闲棋子
    ChessService.getRightBlankPoint = function (x, y, chessPoint) {
        var blamkXList = [];
        var currentLoction;
        chessPoint.forEach(function (item, index) {
            item.forEach(function (subItem, subIndex) {
                if (subIndex === y && subItem.status == -1) {
                    blamkXList.push(index);
                    if (index === x) {
                        currentLoction = blamkXList.length - 1;
                    }
                }
            });
        });
        if (blamkXList.length == 1) {
            return [x, y];
        }
        if (blamkXList.length - 1 > currentLoction) {
            return [blamkXList[currentLoction + 1], y];
        }
        if (blamkXList.length - 1 === currentLoction && blamkXList.length > 1) {
            return [blamkXList[0], y];
        }
    };
    // 获取左边的空闲棋子
    ChessService.getLeftBlankPoint = function (x, y, chessPoint) {
        var blamkXList = [];
        var currentLoction;
        chessPoint.forEach(function (item, index) {
            item.forEach(function (subItem, subIndex) {
                if (subIndex === y && subItem.status == -1) {
                    blamkXList.push(index);
                    if (index === x) {
                        currentLoction = blamkXList.length - 1;
                    }
                }
            });
        });
        if (blamkXList.length == 1) {
            return [x, y];
        }
        if (currentLoction > 0) {
            return [blamkXList[currentLoction - 1], y];
        }
        if (currentLoction === 0 && blamkXList.length > 1) {
            return [blamkXList[blamkXList.length - 1], y];
        }
    };
    // 获取上边的空闲棋子
    ChessService.getUpperBlankPoint = function (x, y, chessPoint) {
        var blamkYList = [];
        var currentLoction;
        chessPoint.forEach(function (item, index) {
            item.forEach(function (subItem, subIndex) {
                if (index === x && subItem.status == -1) {
                    blamkYList.push(subIndex);
                    if (subIndex === y) {
                        currentLoction = blamkYList.length - 1;
                    }
                }
            });
        });
        if (blamkYList.length == 1) {
            return [x, y];
        }
        if (currentLoction > 0) {
            return [x, blamkYList[currentLoction - 1]];
        }
        if (currentLoction === 0 && blamkYList.length > 1) {
            return [x, blamkYList[blamkYList.length - 1]];
        }
    };
    // 获取下边的空闲棋子
    ChessService.getLowerBlankPoint = function (x, y, chessPoint) {
        var blamkYList = [];
        var currentLoction;
        chessPoint.forEach(function (item, index) {
            item.forEach(function (subItem, subIndex) {
                if (index === x && subItem.status == -1) {
                    blamkYList.push(subIndex);
                    if (subIndex === y) {
                        currentLoction = blamkYList.length - 1;
                    }
                }
            });
        });
        if (blamkYList.length == 1) {
            return [x, y];
        }
        if (blamkYList.length - 1 > currentLoction) {
            return [x, blamkYList[currentLoction + 1]];
        }
        if (blamkYList.length - 1 === currentLoction && blamkYList.length > 1) {
            return [x, blamkYList[0]];
        }
    };
    // 获取某一种棋的边界内的所有空点---解死活题用
    ChessService.getBlankInBlock = function (chessList) {
        var blankList = [];
        var tempChessList = chessList.slice(0);
        //  todo 后续如果有需要可以加一层滤波，过滤掉噪音点
        var offset = 3;
        var minX = null;
        var maxX = null;
        var minY = null;
        var maxY = null;
        tempChessList.forEach(function (item, index) {
            item.forEach(function (subItem, subIndex) {
                if (subItem != -1) {
                    if (!minX || index < minX) {
                        minX = index;
                    }
                    if (!maxX || index > maxX) {
                        maxX = index;
                    }
                    if (!minY || subIndex < minY) {
                        minY = subIndex;
                    }
                    if (!maxY || subIndex > maxY) {
                        maxY = subIndex;
                    }
                }
            });
        });
        var newMinX = minX < offset ? 0 : minX;
        var newMaxX = maxX > (18 - offset) ? 18 : maxX;
        var newMinY = minY < offset ? 0 : minY;
        var newMaxY = maxY > (18 - offset) ? 18 : maxY;
        if (minX < offset) {
            for (var i = 0; i < offset; i++) {
                if (newMinY > 0) {
                    chessList[i][newMinY] = 1;
                }
                if (newMaxY < 18) {
                    chessList[i][newMaxY] = 1;
                }
            }
        }
        if (maxX > (18 - offset)) {
            for (var i = 19 - offset; i < 19; i++) {
                if (newMinY > 0) {
                    chessList[i][newMinY] = 1;
                }
                if (newMaxY < 18) {
                    chessList[i][newMaxY] = 1;
                }
            }
        }
        if (minY < offset) {
            for (var i = 0; i < offset; i++) {
                if (newMaxX > 0) {
                    chessList[newMaxX][i] = 1;
                }
                if (newMaxX < 18) {
                    chessList[newMaxX][i] = 1;
                }
            }
        }
        if (maxY > (18 - offset)) {
            for (var i = 19 - offset; i < 19; i++) {
                if (newMinX > 0) {
                    chessList[newMinX][i] = 1;
                }
                if (newMaxX < 18) {
                    chessList[newMaxX][i] = 1;
                }
            }
        }
        tempChessList.forEach(function (item, index) {
            if (index < newMinX || index > newMaxX) {
                return;
            }
            var tempMin = null;
            var tempMax = null;
            item.forEach(function (subItem, subIndex) {
                if (subItem != -1) {
                    if (!tempMin || subIndex < tempMin) {
                        tempMin = subIndex;
                    }
                    if (!tempMin || subIndex > tempMax) {
                        tempMax = subIndex;
                    }
                }
            });
            if (newMinY === 0) {
                tempMin = 0;
            }
            if (newMaxY === 18) {
                tempMax = 18;
            }
            item.forEach(function (subItem, subIndex) {
                if (subIndex >= tempMin && subIndex <= tempMax && subItem === -1) {
                    blankList.push([index, subIndex]);
                }
            });
        });
        return blankList;
    };
    // 获取一串棋子的价值
    ChessService.getChessValue = function (blankList, chessList, chessMode) {
        var _this = this;
        var valueList = [];
        var eyePoll = {};
        blankList.forEach(function (item, index) {
            var singleEyeInfo = _this.getOneChessValue(item, chessList, chessMode);
            var tempIndex = item[0].toString() + '-' + item[1].toString();
            eyePoll[tempIndex] = singleEyeInfo;
        });
        for (var index in eyePoll) {
            var item = eyePoll[index];
            var isEye = false;
            var nextLack = 0;
            var biasLack = 0;
            if (item.eyeInfo.isTrueEye) {
                nextLack = item.eyeInfo.nextLack;
                biasLack = item.eyeInfo.biasLack;
            }
            item.realNextList.forEach(function (nextItem) {
                var tempIndex = nextItem[0].toString() + '-' + nextItem[1].toString();
                if (eyePoll[tempIndex]) {
                    var tempPoint = eyePoll[tempIndex].eyeInfo;
                }
            });
            item.realBiasList.forEach(function (nextItem) {
                var tempIndex = nextItem[0].toString() + '-' + nextItem[1].toString();
                if (eyePoll[tempIndex]) {
                    var tempPoint = eyePoll[tempIndex].eyeInfo;
                }
            });
        }
    };
    // 获取某一棋子的眼型信息
    ChessService.getOneChessValue = function (blankChess, chessList, chessMode) {
        var eyeType = 0;
        var x = blankChess[0];
        var y = blankChess[1];
        var nextCount = 0;
        var nextSelf = 0;
        var nextBlank = 0;
        var biasCount = 0;
        var biasSelf = 0;
        var biasBlank = 0;
        var nextList = [[x - 1, y], [x + 1, y], [x, y + 1], [x, y - 1]];
        var biasList = [[x - 1, y - 1], [x + 1, y + 1], [x - 1, y + 1], [x + 1, y - 1]];
        var realNextList = [];
        var realBiasList = [];
        nextList.forEach(function (item, index) {
            if (item[0] < 0 || item[0] > 18 || item[1] < 0 || item[1] > 18) {
                return;
            }
            realNextList.push(item);
            var status = chessList[item[0]][item[1]];
            if (status === chessMode) {
                nextSelf += 1;
                nextCount += 1;
            }
            if (status === -1) {
                nextBlank += 1;
                nextCount += 1;
            }
            eyeType += 1;
        });
        biasList.forEach(function (item, index) {
            if (item[0] < 0 || item[0] > 18 || item[1] < 0 || item[1] > 18) {
                return;
            }
            realBiasList.push(item);
            var status = chessList[item[0]][item[1]];
            if (status === chessMode) {
                biasSelf += 1;
                biasCount += 1;
            }
            if (status === -1) {
                biasBlank += 1;
                biasCount += 1;
            }
        });
        var result = {
            loc: [x, y],
            eyeType: eyeType,
            nextCount: nextCount,
            nextSelf: nextSelf,
            nextBlank: nextBlank,
            biasCount: biasCount,
            biasSelf: biasSelf,
            biasBlank: biasBlank,
            realNextList: realNextList,
            realBiasList: realBiasList,
            eyeInfo: null
        };
        result.eyeInfo = this.getEyeInfo(result);
        return result;
    };
    // 简单判断眼型信息
    ChessService.getEyeInfo = function (eyeInfo) {
        // todo 假眼也有可能活棋，以后增加判断
        var result = {
            isEye: false,
            isTrueEye: false,
            nextLack: 0,
            biasLack: 0
        };
        if (eyeInfo.eyeType == 4) {
            if (eyeInfo.nextCount < 4) {
                return result;
            }
            if (eyeInfo.biasCount < 3) {
                result.isEye = true;
                return result;
            }
            result.isEye = true;
            result.isTrueEye = true;
            result.nextLack = eyeInfo.nextBlank;
            result.biasLack = eyeInfo.biasBlank;
            return result;
        }
        if (eyeInfo.eyeType == 3) {
            if (eyeInfo.nextCount < 3) {
                return result;
            }
            if (eyeInfo.biasCount < 2) {
                result.isEye = true;
                return result;
            }
            result.isEye = true;
            result.isTrueEye = true;
            result.nextLack = eyeInfo.nextBlank;
            result.biasLack = eyeInfo.biasBlank;
            return result;
        }
        if (eyeInfo.eyeType == 2) {
            if (eyeInfo.nextCount < 2) {
                return result;
            }
            if (eyeInfo.biasCount < 1) {
                result.isEye = true;
                return result;
            }
            result.isEye = true;
            result.isTrueEye = true;
            result.nextLack = eyeInfo.nextBlank;
            result.biasLack = eyeInfo.biasBlank;
            return result;
        }
    };
    // 判断某个点是否在这块棋内
    ChessService.hasPoint = function (point, pointList) {
        return pointList.some(function (subItem) {
            return point[0] == subItem[0] && point[1] == subItem[1];
        });
    };
    return ChessService;
}());
__reflect(ChessService.prototype, "ChessService");
var LifeQuestionsList = (function (_super) {
    __extends(LifeQuestionsList, _super);
    function LifeQuestionsList() {
        var _this = _super.call(this) || this;
        _this.BUTTON_WIDTH = 100;
        return _this;
    }
    LifeQuestionsList.prototype.createChildren = function () {
        var _this = this;
        _super.prototype.createChildren.call(this);
        // 整体的背景
        var bgShape = new egret.Shape();
        bgShape.graphics.lineStyle(2, 0x000000);
        bgShape.graphics.beginFill(0xcccccc);
        bgShape.graphics.drawRect(0, 0, this.width, this.height);
        bgShape.graphics.endFill();
        bgShape.y = 0;
        bgShape.x = 0;
        this.addChild(bgShape);
        // 头部的group
        var headerGroup = new eui.Group();
        headerGroup.x = 0;
        headerGroup.y = 0;
        headerGroup.width = this.width;
        headerGroup.height = 70;
        this.addChild(headerGroup);
        var headerBottom = new egret.Shape();
        headerBottom.graphics.lineStyle(1, 0x000000);
        headerBottom.graphics.moveTo(0, 70);
        headerBottom.graphics.lineTo(this.width, 70);
        headerBottom.graphics.endFill();
        headerGroup.addChild(headerBottom);
        // 增加标题按钮
        var title = new eui.Label();
        title.text = '题目选择';
        title.textColor = 0x333333;
        title.verticalCenter = 0;
        title.left = 20;
        title.size = 24;
        title.bold = true;
        headerGroup.addChild(title);
        // 关闭按钮
        var closeButton = new eui.Image();
        closeButton.source = 'resource/assets/icon/close.png';
        closeButton.width = 40;
        closeButton.height = 40;
        closeButton.verticalCenter = 0;
        closeButton.right = 30;
        closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
        headerGroup.addChild(closeButton);
        // body部分的滚动
        // 设置网格状布局
        var tLayout = new eui.TileLayout();
        tLayout.horizontalGap = 10;
        tLayout.verticalGap = 10;
        tLayout.columnAlign = eui.ColumnAlign.LEFT;
        tLayout.rowAlign = eui.RowAlign.TOP;
        tLayout.paddingTop = 30;
        tLayout.paddingRight = 30;
        tLayout.paddingLeft = 30;
        tLayout.paddingBottom = 30;
        // tLayout.requestedColumnCount = 4;  /// 设置两列显示
        //创建一个容器
        var group = new eui.Group();
        group.layout = tLayout;
        var _loop_1 = function (i) {
            var upButton = new eui.Button();
            upButton.skinName = 'resource/eui_skins/CircleButtonSkin.exml';
            upButton.width = this_1.BUTTON_WIDTH;
            upButton.minWidth = this_1.BUTTON_WIDTH;
            upButton.maxWidth = this_1.BUTTON_WIDTH;
            upButton.height = this_1.BUTTON_WIDTH;
            upButton.minHeight = this_1.BUTTON_WIDTH;
            upButton.maxHeight = this_1.BUTTON_WIDTH;
            upButton.label = (i + 1).toString();
            group.addChild(upButton);
            upButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                if (_this.onItemSelect) {
                    _this.onItemSelect(i);
                }
                if (_this.parent) {
                    _this.parent.removeChild(_this);
                }
            }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < lifeDeathStage.length; i++) {
            _loop_1(i);
        }
        //创建一个Scroller
        var myScroller = new eui.Scroller();
        //注意位置和尺寸的设置是在Scroller上面，而不是容器上面
        myScroller.width = this.width;
        myScroller.height = this.height - 70;
        myScroller.x = 0;
        myScroller.y = 70;
        // myScroller.verticalScrollBar.autoVisibility = false;
        // myScroller.horizontalScrollBar.autoVisibility = false;
        //设置viewport
        myScroller.viewport = group;
        this.addChild(myScroller);
    };
    LifeQuestionsList.prototype.close = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    return LifeQuestionsList;
}(eui.Group));
__reflect(LifeQuestionsList.prototype, "LifeQuestionsList");
var ChessEditPage = (function (_super) {
    __extends(ChessEditPage, _super);
    function ChessEditPage(headerCb) {
        var _this = _super.call(this) || this;
        _this.BUTTON_WIDTH = 100;
        _this.headerCb = headerCb;
        return _this;
    }
    ChessEditPage.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        var stageW = this.width;
        var stageH = this.height;
        var chessboardWidth = stageW - 50;
        // 设置背景
        var background = new egret.Shape();
        background.graphics.beginFill(0xffffff);
        background.graphics.drawRect(0, 0, stageW, stageH);
        background.graphics.endFill();
        this.addChild(background);
        // 设置标题
        this.header = new Header('自由对弈');
        this.addChild(this.header);
        this.header.backCb = this.headerCb;
        // 设置棋盘
        var chessBorad = new ChessBoard(stageW);
        chessBorad.y = 70;
        this.addChild(chessBorad);
        this.chessBoard = chessBorad;
        // 设置方向按钮组
        var directionButtons = new DirectionButtons(chessBorad);
        directionButtons.right = 10;
        directionButtons.y = chessBorad.height + 60 + 5 + 60 + 40;
        this.addChild(directionButtons);
        // 设置按钮组
        this.setButtons();
        // 设置其它按钮组
        // this.setOtherButtons();
        // 设置打印相关按钮
        // this.setPrintButtons();
        // 显示死活题列表
        this.lifeQuestionsList = new LifeQuestionsList();
        this.lifeQuestionsList.width = this.width * 0.8;
        this.lifeQuestionsList.height = this.height * 0.6;
        this.lifeQuestionsList.verticalCenter = 0;
        this.lifeQuestionsList.horizontalCenter = 0;
    };
    // 设置按钮组
    ChessEditPage.prototype.setButtons = function () {
        var _this = this;
        // 重置
        var resetButton = new eui.Button();
        resetButton.skinName = 'resource/eui_skins/CircleButtonSkin.exml';
        resetButton.width = this.BUTTON_WIDTH;
        resetButton.height = this.BUTTON_WIDTH;
        resetButton.label = '重置';
        resetButton.x = 20;
        resetButton.y = this.chessBoard.height + 60 + 5;
        this.addChild(resetButton);
        resetButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.chessBoard.reset();
        }, this.chessBoard);
        // 悔棋
        var backButton = new eui.Button();
        backButton.skinName = 'resource/eui_skins/CircleButtonSkin.exml';
        backButton.width = this.BUTTON_WIDTH;
        backButton.height = this.BUTTON_WIDTH;
        backButton.label = '悔棋';
        backButton.x = 20 + 100;
        backButton.y = this.chessBoard.height + 60 + 5;
        this.addChild(backButton);
        backButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this.chessBoard.getRecordLength() > 0) {
                _this.chessBoard.reloadByStep(_this.chessBoard.getRecordLength() - 1);
            }
        }, this.chessBoard);
        // 坐标
        var xyButton = new eui.Button();
        xyButton.skinName = 'resource/eui_skins/CircleButtonSkin.exml';
        xyButton.width = this.BUTTON_WIDTH;
        xyButton.height = this.BUTTON_WIDTH;
        xyButton.label = '坐标';
        xyButton.x = 20 + 100 * 2;
        xyButton.y = this.chessBoard.height + 60 + 5;
        this.addChild(xyButton);
        xyButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.chessBoard.toggleXYshape();
        }, this.chessBoard);
        // 序号
        var indexButton = new eui.Button();
        indexButton.skinName = 'resource/eui_skins/CircleButtonSkin.exml';
        indexButton.width = this.BUTTON_WIDTH;
        indexButton.height = this.BUTTON_WIDTH;
        indexButton.label = '序号';
        indexButton.x = 20 + 100 * 3;
        indexButton.y = this.chessBoard.height + 60 + 5;
        this.addChild(indexButton);
        indexButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.chessBoard.toggleIndexText();
        }, this.chessBoard);
        // 点目
        var enterCountButton = new eui.Button();
        enterCountButton.skinName = 'resource/eui_skins/CircleButtonSkin.exml';
        enterCountButton.width = this.BUTTON_WIDTH;
        enterCountButton.height = this.BUTTON_WIDTH;
        enterCountButton.label = '点目';
        enterCountButton.x = 20 + 100 * 4;
        enterCountButton.y = this.chessBoard.height + 60 + 5;
        this.addChild(enterCountButton);
        enterCountButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this.chessBoard.isCountMode) {
                enterCountButton.label = '点目';
                _this.addChild(enterCountButton);
                _this.chessBoard.leaveCountMode();
                _this.countButton.enabled = false;
            }
            else {
                enterCountButton.label = '恢复';
                _this.addChild(enterCountButton);
                _this.chessBoard.enterCountMode();
                _this.countButton.enabled = true;
            }
        }, this.chessBoard);
        // 结算
        var countButton = new eui.Button();
        countButton.skinName = 'resource/eui_skins/CircleButtonSkin.exml';
        countButton.width = this.BUTTON_WIDTH;
        countButton.height = this.BUTTON_WIDTH;
        countButton.label = '结算';
        countButton.x = 20 + 100 * 5;
        countButton.y = this.chessBoard.height + 60 + 5;
        countButton.enabled = false;
        this.addChild(countButton);
        countButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.chessBoard.count();
        }, this.chessBoard);
        this.countButton = countButton;
    };
    // 设置其它按钮组
    ChessEditPage.prototype.setOtherButtons = function () {
        var _this = this;
        // 黑棋模式
        var onlyBlackButton = new eui.Button();
        onlyBlackButton.skinName = 'resource/eui_skins/CircleButtonWhiteSkin.exml';
        onlyBlackButton.width = this.BUTTON_WIDTH;
        onlyBlackButton.height = this.BUTTON_WIDTH;
        onlyBlackButton.label = '只下黑';
        onlyBlackButton.x = 20;
        onlyBlackButton.y = this.chessBoard.height + 65 + 5 + 100;
        this.addChild(onlyBlackButton);
        onlyBlackButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.chessBoard.chessMode = 0;
        }, this.chessBoard);
        // 白棋模式
        var onlyWhiteButton = new eui.Button();
        onlyWhiteButton.skinName = 'resource/eui_skins/CircleButtonWhiteSkin.exml';
        onlyWhiteButton.width = this.BUTTON_WIDTH;
        onlyWhiteButton.height = this.BUTTON_WIDTH;
        onlyWhiteButton.label = '只下白';
        onlyWhiteButton.x = 20 + 100;
        onlyWhiteButton.y = this.chessBoard.height + 65 + 5 + 100;
        this.addChild(onlyWhiteButton);
        onlyWhiteButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.chessBoard.chessMode = 1;
        }, this.chessBoard);
        // 轮流模式
        var normalChessButton = new eui.Button();
        normalChessButton.skinName = 'resource/eui_skins/CircleButtonWhiteSkin.exml';
        normalChessButton.width = this.BUTTON_WIDTH;
        normalChessButton.height = this.BUTTON_WIDTH;
        normalChessButton.label = '轮流';
        normalChessButton.x = 20 + 100 * 2;
        normalChessButton.y = this.chessBoard.height + 65 + 5 + 100;
        this.addChild(normalChessButton);
        normalChessButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.chessBoard.chessMode = 2;
        }, this.chessBoard);
    };
    // 设置打印相关的按钮
    ChessEditPage.prototype.setPrintButtons = function () {
        var _this = this;
        // 预先加载
        var preLoadButton = new eui.Button();
        preLoadButton.skinName = 'resource/eui_skins/CircleButtonSkin.exml';
        preLoadButton.width = this.BUTTON_WIDTH;
        preLoadButton.height = this.BUTTON_WIDTH;
        preLoadButton.label = '加载';
        preLoadButton.x = 20;
        preLoadButton.y = this.chessBoard.height + 65 + 5 + 100 * 3;
        this.addChild(preLoadButton);
        preLoadButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.lifeQuestionsList.onItemSelect = _this.onStageSelect.bind(_this);
            _this.addChild(_this.lifeQuestionsList);
        }, this.chessBoard);
        // 打印
        var printButton = new eui.Button();
        printButton.skinName = 'resource/eui_skins/CircleButtonSkin.exml';
        printButton.width = this.BUTTON_WIDTH;
        printButton.height = this.BUTTON_WIDTH;
        printButton.label = '打印';
        printButton.x = 20 + 100;
        printButton.y = this.chessBoard.height + 65 + 5 + 100 * 3;
        this.addChild(printButton);
        printButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.chessBoard.printRecord();
        }, this.chessBoard);
    };
    // 关卡选择列表被选择时的回调函数
    ChessEditPage.prototype.onStageSelect = function (item) {
        var snap = lifeDeathStage[item].config;
        var blackFirst = false;
        this.chessBoard.preLoad(snap, blackFirst);
    };
    return ChessEditPage;
}(eui.Group));
__reflect(ChessEditPage.prototype, "ChessEditPage");
var ChessLifePage = (function (_super) {
    __extends(ChessLifePage, _super);
    function ChessLifePage(headerCb) {
        var _this = _super.call(this) || this;
        _this.BUTTON_WIDTH = 100;
        _this.localStageIndex = 0;
        _this.currentIndex = 0; //当前关卡的步数
        _this.endFalg = false;
        _this.headerCb = headerCb;
        return _this;
    }
    ChessLifePage.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        var stageW = this.width;
        var stageH = this.height;
        var chessboardWidth = stageW - 50;
        // 设置背景
        var background = new egret.Shape();
        background.graphics.beginFill(0xffffff);
        background.graphics.drawRect(0, 0, stageW, stageH);
        background.graphics.endFill();
        this.addChild(background);
        // 设置标题
        this.header = new Header('');
        this.addChild(this.header);
        this.header.backCb = this.headerCb;
        // 设置棋盘
        var chessBorad = new ChessBoard(stageW);
        chessBorad.y = 70;
        this.addChild(chessBorad);
        // 将棋盘保存在变量中，并且设置死活题专用的回调函数
        this.chessBoard = chessBorad;
        chessBorad.chessDownCb = this.chessConfirmCb.bind(this);
        chessBorad.afterChessDownCb = this.afterChessConfirmCb.bind(this);
        // 信息栏
        this.messageBox = new eui.Label();
        this.messageBox.text = '';
        this.messageBox.height = 60;
        this.messageBox.width = this.width - 40;
        this.messageBox.backgroundColor = 0x333333;
        this.messageBox.background = true;
        this.messageBox.left = 20;
        this.messageBox.right = 20;
        this.messageBox.y = this.chessBoard.height + 60 + 5;
        this.messageBox.textColor = 0xffffff;
        this.messageBox.textAlign = egret.HorizontalAlign.CENTER;
        this.messageBox.verticalAlign = 'middle';
        this.addChild(this.messageBox);
        // 方向的按钮
        var directionButtons = new DirectionButtons(chessBorad);
        directionButtons.right = 10;
        directionButtons.y = this.chessBoard.height + 60 + 5 + 60 + 40;
        this.addChild(directionButtons);
        // 增加按钮群
        this.addButtons();
        // 显示死活题列表
        this.lifeQuestionsList = new LifeQuestionsList();
        this.lifeQuestionsList.width = this.width * 0.8;
        this.lifeQuestionsList.height = this.height * 0.6;
        this.lifeQuestionsList.verticalCenter = 0;
        this.lifeQuestionsList.horizontalCenter = 0;
    };
    ChessLifePage.prototype.addButtons = function () {
        var _this = this;
        // 重置
        var upButton = new eui.Button();
        upButton.skinName = 'resource/eui_skins/CircleButtonSkin.exml';
        upButton.width = this.BUTTON_WIDTH;
        upButton.height = this.BUTTON_WIDTH;
        upButton.label = '重置';
        upButton.x = 20;
        upButton.y = this.chessBoard.height + 60 + 5 + 60 + 40;
        this.addChild(upButton);
        upButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.setStage();
        }, this.chessBoard);
        // 悔棋
        var backButton = new eui.Button();
        backButton.skinName = 'resource/eui_skins/CircleButtonSkin.exml';
        backButton.width = this.BUTTON_WIDTH;
        backButton.height = this.BUTTON_WIDTH;
        backButton.label = '悔棋';
        backButton.x = 130;
        backButton.y = this.chessBoard.height + 60 + 5 + 60 + 40;
        this.addChild(backButton);
        backButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            var chessBoardLegth = _this.chessBoard.getRecordLength();
            if (chessBoardLegth >= 2) {
                if (chessBoardLegth % 2 === 1) {
                    _this.chessBoard.reloadByStep(_this.chessBoard.getRecordLength() - 1);
                    _this.currentIndex -= 1;
                }
                else {
                    _this.chessBoard.reloadByStep(_this.chessBoard.getRecordLength() - 2);
                    _this.currentIndex -= 2;
                }
            }
            if (_this.currentIndex === 0) {
                _this.setStage();
            }
        }, this.chessBoard);
        // 选题
        var selectButton = new eui.Button();
        selectButton.skinName = 'resource/eui_skins/CircleButtonWhiteSkin.exml';
        selectButton.width = this.BUTTON_WIDTH - 10;
        selectButton.height = this.BUTTON_WIDTH - 10;
        selectButton.label = '选题';
        selectButton.x = 20;
        selectButton.y = this.chessBoard.height + 60 + 5 + 60 + 40 + 200;
        this.addChild(selectButton);
        selectButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.lifeQuestionsList.onItemSelect = _this.onStageSelect.bind(_this);
            _this.addChild(_this.lifeQuestionsList);
        }, this.chessBoard);
        // 下一题
        var nextButton = new eui.Button();
        nextButton.skinName = 'resource/eui_skins/CircleButtonWhiteSkin.exml';
        nextButton.width = this.BUTTON_WIDTH - 10;
        nextButton.height = this.BUTTON_WIDTH - 10;
        nextButton.label = '下一题';
        nextButton.x = 130;
        nextButton.y = this.chessBoard.height + 60 + 5 + 60 + 40 + 200;
        this.addChild(nextButton);
        nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this.localStageIndex < lifeDeathStage.length - 1) {
                _this.localStageIndex++;
                _this.setStage();
            }
        }, this.chessBoard);
        this.nextButton = nextButton;
        if (lifeDeathStage.length > 0) {
            this.setStage();
        }
    };
    // 重置当前关卡
    ChessLifePage.prototype.reset = function () {
        this.chessBoard.reset();
        this.filterRecords = [];
        this.currentIndex = 0;
        this.endFalg = false;
        this.setTitle();
        this.setMessageBox();
        if (this.localStageIndex === lifeDeathStage.length - 1) {
            this.nextButton.enabled = false;
        }
        else {
            this.nextButton.enabled = true;
        }
        this.loadStage();
    };
    // 设置关卡
    ChessLifePage.prototype.setStage = function () {
        if (this.localStageIndex < 0 || this.localStageIndex >= lifeDeathStage.length) {
            // todo
            return;
        }
        this.localStage = lifeDeathStage[this.localStageIndex];
        this.reset();
    };
    // 加载关卡
    ChessLifePage.prototype.loadStage = function () {
        if (!this.localStage) {
            return;
        }
        this.filterRecords = this.localStage.records;
        this.chessBoard.preLoad(this.localStage.config);
        switch (this.localStage.mode) {
            case LifeStageMode.WhiteAttack:
                this.chessBoard.blackFirst = false;
                break;
            case LifeStageMode.WhiteDefence:
                this.chessBoard.blackFirst = false;
                break;
            case LifeStageMode.BlackAttack:
                this.chessBoard.blackFirst = true;
                break;
            case LifeStageMode.BlackDefence:
                this.chessBoard.blackFirst = true;
                break;
            default:
                this.chessBoard.blackFirst = true;
                break;
        }
    };
    // 落子时的回调函数，判断当前子是否符合变化
    ChessLifePage.prototype.chessConfirmCb = function (x, y) {
        var _this = this;
        if (this.endFalg) {
            return true;
        }
        this.setMessageBox();
        if (!this.filterRecords || this.filterRecords.length < 1) {
            // todo 没有死活记录的异常处理
            this.setMessageBox('当前题目异常，未配置答案!');
            return true;
        }
        var tempRecords = this.filterRecords.filter(function (item, index) {
            var flag = false;
            var chessStr = JSON.stringify(_this.chessBoard.getChessRecord().concat([[x, y]]));
            if (chessStr) {
                chessStr = chessStr.substring(0, chessStr.length - 1);
            }
            var itemStr = JSON.stringify(item.path);
            console.log(chessStr);
            console.log(itemStr);
            if (itemStr.indexOf(chessStr) === 0) {
                flag = true;
            }
            // if(item.path && item.path.length > this.currentIndex) {
            //     let localChess = item.path[this.currentIndex];
            //     if(localChess[0] == x && localChess[1] == y) {
            //         flag = true;
            //     }
            // }
            return flag;
        });
        if (tempRecords && tempRecords.length > 0) {
            this.currentIndex++;
            return false;
        }
        else {
            this.setMessageBox('当前解法不正确!');
            return true;
        }
    };
    // 落子后的回调函数,用来自动模拟对端落子
    ChessLifePage.prototype.afterChessConfirmCb = function () {
        var _this = this;
        var tempRecords = this.filterRecords.filter(function (item, index) {
            var flag = false;
            var chessStr = JSON.stringify(_this.chessBoard.getChessRecord());
            if (chessStr) {
                chessStr = chessStr.substring(0, chessStr.length - 1);
            }
            var itemStr = JSON.stringify(item.path);
            if (itemStr.indexOf(chessStr) === 0) {
                flag = true;
            }
            return flag;
        });
        if (tempRecords && tempRecords.length > 0) {
            // 如果有多个选项，则选择一个随机的
            var tempIndex = this.randomNum(0, tempRecords.length - 1);
            var tempRecord = tempRecords[tempIndex];
            if (tempRecord.path.length > this.currentIndex) {
                var localChess = tempRecord.path[this.currentIndex];
                this.chessBoard.chessDownProcess(localChess[0], localChess[1]);
                this.currentIndex++;
                // 如果走完这步就结束了，需要判一下
                if (tempRecord.path.length === this.currentIndex) {
                    if (tempRecord.result == StageResult.WIN) {
                        this.setMessageBox('成功!');
                    }
                    else {
                        this.setMessageBox('失败!');
                    }
                    this.endFalg = true;
                }
            }
            else {
                if (tempRecord.result == StageResult.WIN) {
                    this.setMessageBox('成功!');
                }
                else {
                    this.setMessageBox('失败!');
                }
                this.endFalg = true;
            }
        }
    };
    // 关卡选择列表被选择时的回调函数
    ChessLifePage.prototype.onStageSelect = function (item) {
        this.localStageIndex = item;
        this.setStage();
    };
    // 设置标题栏
    ChessLifePage.prototype.setTitle = function () {
        var indexString = '第' + (this.localStageIndex + 1).toString() + '题';
        var modeString = '';
        switch (this.localStage.mode) {
            case LifeStageMode.WhiteAttack:
                modeString = '白先黑死';
                break;
            case LifeStageMode.WhiteDefence:
                modeString = '白先活';
                break;
            case LifeStageMode.BlackAttack:
                modeString = '黑先白死';
                break;
            case LifeStageMode.BlackDefence:
                modeString = '黑先活';
                break;
            default:
                break;
        }
        this.header = new Header(indexString + ' ' + modeString);
        this.header.backCb = this.headerCb;
        this.addChild(this.header);
    };
    // 设置标题栏
    ChessLifePage.prototype.setMessageBox = function (content) {
        if (content === void 0) { content = ''; }
        this.messageBox.text = content;
        this.addChild(this.messageBox);
    };
    // 取随机数
    ChessLifePage.prototype.randomNum = function (minNum, maxNum) {
        var oneNumber = (Math.random() * minNum + 1).toString();
        var twoNumber = (Math.random() * (maxNum - minNum + 1) + minNum).toString();
        switch (arguments.length) {
            case 1:
                return parseInt(oneNumber, 10);
            case 2:
                return parseInt(twoNumber, 10);
            default:
                return 0;
        }
    };
    return ChessLifePage;
}(eui.Group));
__reflect(ChessLifePage.prototype, "ChessLifePage");
// TypeScript file 
// TypeScript file
var LifeEditPage = (function (_super) {
    __extends(LifeEditPage, _super);
    function LifeEditPage(headerCb) {
        var _this = _super.call(this) || this;
        _this.BUTTON_WIDTH = 100;
        _this.currentRecord = [];
        _this.headerCb = headerCb;
        return _this;
    }
    LifeEditPage.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        var stageW = this.width;
        var stageH = this.height;
        var chessboardWidth = stageW - 50;
        // 设置背景
        var background = new egret.Shape();
        background.graphics.beginFill(0xffffff);
        background.graphics.drawRect(0, 0, stageW, stageH);
        background.graphics.endFill();
        this.addChild(background);
        // 设置标题
        this.header = new Header('自由对弈');
        this.addChild(this.header);
        this.header.backCb = this.headerCb;
        // 设置棋盘
        var chessBorad = new ChessBoard(stageW);
        chessBorad.y = 70;
        this.addChild(chessBorad);
        this.chessBoard = chessBorad;
        // 设置方向按钮组
        var directionButtons = new DirectionButtons(chessBorad);
        directionButtons.right = 10;
        directionButtons.y = chessBorad.height + 60 + 5 + 60 + 40;
        this.addChild(directionButtons);
        // 设置按钮组
        this.setButtons();
        // 设置其它按钮组
        this.setOtherButtons();
        // 设置打印相关按钮
        this.setPrintButtons();
        // 显示死活题列表
        this.lifeQuestionsList = new LifeQuestionsList();
        this.lifeQuestionsList.width = this.width * 0.8;
        this.lifeQuestionsList.height = this.height * 0.6;
        this.lifeQuestionsList.verticalCenter = 0;
        this.lifeQuestionsList.horizontalCenter = 0;
    };
    // 设置按钮组
    LifeEditPage.prototype.setButtons = function () {
        var _this = this;
        // 重置
        var resetButton = new eui.Button();
        resetButton.skinName = 'resource/eui_skins/CircleButtonSkin.exml';
        resetButton.width = this.BUTTON_WIDTH;
        resetButton.height = this.BUTTON_WIDTH;
        resetButton.label = '重置';
        resetButton.x = 20;
        resetButton.y = this.chessBoard.height + 60 + 5;
        this.addChild(resetButton);
        resetButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.currentStage = null;
            _this.currentRecord = [];
            _this.chessBoard.reset();
        }, this.chessBoard);
        // 悔棋
        var backButton = new eui.Button();
        backButton.skinName = 'resource/eui_skins/CircleButtonSkin.exml';
        backButton.width = this.BUTTON_WIDTH;
        backButton.height = this.BUTTON_WIDTH;
        backButton.label = '悔棋';
        backButton.x = 20 + 100;
        backButton.y = this.chessBoard.height + 60 + 5;
        this.addChild(backButton);
        backButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this.chessBoard.getRecordLength() > 0) {
                _this.chessBoard.reloadByStep(_this.chessBoard.getRecordLength() - 1);
            }
        }, this.chessBoard);
        // 坐标
        var xyButton = new eui.Button();
        xyButton.skinName = 'resource/eui_skins/CircleButtonSkin.exml';
        xyButton.width = this.BUTTON_WIDTH;
        xyButton.height = this.BUTTON_WIDTH;
        xyButton.label = '坐标';
        xyButton.x = 20 + 100 * 2;
        xyButton.y = this.chessBoard.height + 60 + 5;
        this.addChild(xyButton);
        xyButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.chessBoard.toggleXYshape();
        }, this.chessBoard);
        // 序号
        var indexButton = new eui.Button();
        indexButton.skinName = 'resource/eui_skins/CircleButtonSkin.exml';
        indexButton.width = this.BUTTON_WIDTH;
        indexButton.height = this.BUTTON_WIDTH;
        indexButton.label = '序号';
        indexButton.x = 20 + 100 * 3;
        indexButton.y = this.chessBoard.height + 60 + 5;
        this.addChild(indexButton);
        indexButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.chessBoard.toggleIndexText();
        }, this.chessBoard);
        // 点目
        var enterCountButton = new eui.Button();
        enterCountButton.skinName = 'resource/eui_skins/CircleButtonSkin.exml';
        enterCountButton.width = this.BUTTON_WIDTH;
        enterCountButton.height = this.BUTTON_WIDTH;
        enterCountButton.label = '点目';
        enterCountButton.x = 20 + 100 * 4;
        enterCountButton.y = this.chessBoard.height + 60 + 5;
        this.addChild(enterCountButton);
        enterCountButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this.chessBoard.isCountMode) {
                enterCountButton.label = '点目';
                _this.addChild(enterCountButton);
                _this.chessBoard.leaveCountMode();
                _this.countButton.enabled = false;
            }
            else {
                enterCountButton.label = '恢复';
                _this.addChild(enterCountButton);
                _this.chessBoard.enterCountMode();
                _this.countButton.enabled = true;
            }
        }, this.chessBoard);
        // 结算
        var countButton = new eui.Button();
        countButton.skinName = 'resource/eui_skins/CircleButtonSkin.exml';
        countButton.width = this.BUTTON_WIDTH;
        countButton.height = this.BUTTON_WIDTH;
        countButton.label = '结算';
        countButton.x = 20 + 100 * 5;
        countButton.y = this.chessBoard.height + 60 + 5;
        countButton.enabled = false;
        this.addChild(countButton);
        countButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.chessBoard.count();
        }, this.chessBoard);
        this.countButton = countButton;
    };
    // 设置其它按钮组
    LifeEditPage.prototype.setOtherButtons = function () {
        var _this = this;
        // 黑棋模式
        var onlyBlackButton = new eui.Button();
        onlyBlackButton.skinName = 'resource/eui_skins/CircleButtonWhiteSkin.exml';
        onlyBlackButton.width = this.BUTTON_WIDTH;
        onlyBlackButton.height = this.BUTTON_WIDTH;
        onlyBlackButton.label = '只下黑';
        onlyBlackButton.x = 20;
        onlyBlackButton.y = this.chessBoard.height + 65 + 5 + 100;
        this.addChild(onlyBlackButton);
        onlyBlackButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.chessBoard.chessMode = 0;
        }, this.chessBoard);
        // 白棋模式
        var onlyWhiteButton = new eui.Button();
        onlyWhiteButton.skinName = 'resource/eui_skins/CircleButtonWhiteSkin.exml';
        onlyWhiteButton.width = this.BUTTON_WIDTH;
        onlyWhiteButton.height = this.BUTTON_WIDTH;
        onlyWhiteButton.label = '只下白';
        onlyWhiteButton.x = 20 + 100;
        onlyWhiteButton.y = this.chessBoard.height + 65 + 5 + 100;
        this.addChild(onlyWhiteButton);
        onlyWhiteButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.chessBoard.chessMode = 1;
        }, this.chessBoard);
        // 轮流模式
        var normalChessButton = new eui.Button();
        normalChessButton.skinName = 'resource/eui_skins/CircleButtonWhiteSkin.exml';
        normalChessButton.width = this.BUTTON_WIDTH;
        normalChessButton.height = this.BUTTON_WIDTH;
        normalChessButton.label = '轮流';
        normalChessButton.x = 20 + 100 * 2;
        normalChessButton.y = this.chessBoard.height + 65 + 5 + 100;
        this.addChild(normalChessButton);
        normalChessButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.chessBoard.chessMode = 2;
        }, this.chessBoard);
    };
    // 设置打印相关的按钮
    LifeEditPage.prototype.setPrintButtons = function () {
        var _this = this;
        // 预先加载
        var preLoadButton = new eui.Button();
        preLoadButton.skinName = 'resource/eui_skins/CircleButtonSkin.exml';
        preLoadButton.width = this.BUTTON_WIDTH;
        preLoadButton.height = this.BUTTON_WIDTH;
        preLoadButton.label = '加载';
        preLoadButton.x = 20;
        preLoadButton.y = this.chessBoard.height + 65 + 5 + 100 * 3;
        this.addChild(preLoadButton);
        preLoadButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.lifeQuestionsList.onItemSelect = _this.onStageSelect.bind(_this);
            _this.addChild(_this.lifeQuestionsList);
        }, this.chessBoard);
        // 打印
        var printButton = new eui.Button();
        printButton.skinName = 'resource/eui_skins/CircleButtonSkin.exml';
        printButton.width = this.BUTTON_WIDTH;
        printButton.height = this.BUTTON_WIDTH;
        printButton.label = '打印';
        printButton.x = 20 + 100;
        printButton.y = this.chessBoard.height + 65 + 5 + 100 * 3;
        this.addChild(printButton);
        printButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.chessBoard.printRecord();
            var tempStr = {
                index: 1,
                name: '',
                mode: LifeStageMode.WhiteAttack,
                config: _this.currentStage,
                records: _this.currentRecord
            };
            console.log(JSON.stringify(tempStr));
        }, this.chessBoard);
        // reload, 重置关卡
        var reLoadButton = new eui.Button();
        reLoadButton.skinName = 'resource/eui_skins/CircleButtonSkin.exml';
        reLoadButton.width = this.BUTTON_WIDTH;
        reLoadButton.height = this.BUTTON_WIDTH;
        reLoadButton.label = 'reLoad';
        reLoadButton.x = 20 + 100 * 2;
        reLoadButton.y = this.chessBoard.height + 65 + 5 + 100 * 3;
        this.addChild(reLoadButton);
        reLoadButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.chessBoard.reset();
            var blackFirst = false;
            _this.chessBoard.preLoad(_this.currentStage, blackFirst);
        }, this.chessBoard);
        // 保存成功解法
        var saveSuccessButton = new eui.Button();
        saveSuccessButton.skinName = 'resource/eui_skins/CircleButtonSkin.exml';
        saveSuccessButton.width = this.BUTTON_WIDTH;
        saveSuccessButton.height = this.BUTTON_WIDTH;
        saveSuccessButton.label = '成功';
        saveSuccessButton.x = 20;
        saveSuccessButton.y = this.chessBoard.height + 65 + 5 + 100 * 2;
        this.addChild(saveSuccessButton);
        saveSuccessButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.currentRecord.push({
                path: _this.chessBoard.getChessRecord(),
                result: StageResult.WIN
            });
        }, this.chessBoard);
        // 保存失败解法
        var saveFailButton = new eui.Button();
        saveFailButton.skinName = 'resource/eui_skins/CircleButtonSkin.exml';
        saveFailButton.width = this.BUTTON_WIDTH;
        saveFailButton.height = this.BUTTON_WIDTH;
        saveFailButton.label = '失败';
        saveFailButton.x = 20 + 100;
        saveFailButton.y = this.chessBoard.height + 65 + 5 + 100 * 2;
        this.addChild(saveFailButton);
        saveFailButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.currentRecord.push({
                path: _this.chessBoard.getChessRecord(),
                result: StageResult.LOSE
            });
        }, this.chessBoard);
        // 保存关卡
        var saveStageButton = new eui.Button();
        saveStageButton.skinName = 'resource/eui_skins/CircleButtonSkin.exml';
        saveStageButton.width = this.BUTTON_WIDTH;
        saveStageButton.height = this.BUTTON_WIDTH;
        saveStageButton.label = '关卡';
        saveStageButton.x = 20 + 100 * 2;
        saveStageButton.y = this.chessBoard.height + 65 + 5 + 100 * 2;
        this.addChild(saveStageButton);
        saveStageButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            var tempSnap = _this.chessBoard.chessRecordSnap;
            _this.currentStage = tempSnap[tempSnap.length - 1];
        }, this.chessBoard);
    };
    // 关卡选择列表被选择时的回调函数
    LifeEditPage.prototype.onStageSelect = function (item) {
        this.currentRecord = [];
        this.currentStage = lifeDeathStage[item].config;
        var blackFirst = false;
        this.chessBoard.preLoad(this.currentStage, blackFirst);
    };
    return LifeEditPage;
}(eui.Group));
__reflect(LifeEditPage.prototype, "LifeEditPage");
var IndexPage = (function (_super) {
    __extends(IndexPage, _super);
    function IndexPage() {
        var _this = _super.call(this) || this;
        _this.BUTTON_WIDTH = 200;
        return _this;
    }
    IndexPage.prototype.createChildren = function () {
        var _this = this;
        _super.prototype.createChildren.call(this);
        var stageW = this.width;
        var stageH = this.height;
        // 设置背景
        var background = new egret.Shape();
        background.graphics.beginFill(0xffffff);
        background.graphics.drawRect(0, 0, stageW, stageH);
        background.graphics.endFill();
        this.addChild(background);
        var img = new egret.Bitmap();
        img.texture = RES.getRes("back_jpeg");
        img.width = this.width;
        img.height = this.height;
        img.alpha = 0.7;
        this.addChild(img);
        // 标题
        var title = new eui.Label();
        title.text = '天鱼围棋小乐园';
        title.size = 52;
        title.bold = true;
        //title.width = this.width;
        title.textAlign = 'middle';
        title.textColor = 0x000000;
        title.y = 240;
        title.horizontalCenter = 0;
        this.addChild(title);
        // 自由
        var selectButton = new eui.Button();
        selectButton.skinName = 'resource/eui_skins/CircleButtonSkin.exml';
        selectButton.width = this.BUTTON_WIDTH;
        selectButton.height = this.BUTTON_WIDTH;
        selectButton.label = '自由模式';
        // selectButton.x = 20;
        selectButton.horizontalCenter = -120;
        selectButton.y = 520;
        this.addChild(selectButton);
        selectButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this.toFreeMode) {
                _this.toFreeMode();
            }
        }, this);
        // 死活
        var nextButton = new eui.Button();
        nextButton.skinName = 'resource/eui_skins/CircleButtonWhiteSkin.exml';
        nextButton.width = this.BUTTON_WIDTH - 10;
        nextButton.height = this.BUTTON_WIDTH - 10;
        nextButton.label = '死活练习';
        // nextButton.x = 20;
        nextButton.horizontalCenter = 120;
        nextButton.y = 520;
        this.addChild(nextButton);
        nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this.toLifeMode) {
                _this.toLifeMode();
            }
        }, this);
    };
    return IndexPage;
}(eui.Group));
__reflect(IndexPage.prototype, "IndexPage");
// TypeScript file
var LifeStageMode;
(function (LifeStageMode) {
    LifeStageMode[LifeStageMode["BlackAttack"] = 0] = "BlackAttack";
    LifeStageMode[LifeStageMode["BlackDefence"] = 1] = "BlackDefence";
    LifeStageMode[LifeStageMode["WhiteAttack"] = 2] = "WhiteAttack";
    LifeStageMode[LifeStageMode["WhiteDefence"] = 3] = "WhiteDefence";
})(LifeStageMode || (LifeStageMode = {}));
var StageResult;
(function (StageResult) {
    StageResult[StageResult["WIN"] = 0] = "WIN";
    StageResult[StageResult["LOSE"] = 1] = "LOSE";
})(StageResult || (StageResult = {}));
var lifeDeathStage = [
    /********记录开始 *********/
    {
        index: 1,
        name: '',
        mode: LifeStageMode.WhiteAttack,
        config: [[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, 1, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1]],
        records: [
            {
                path: [[14, 18], [15, 18], [17, 18]],
                result: StageResult.WIN
            },
            {
                path: [[17, 18], [14, 18], [16, 18]],
                result: StageResult.WIN
            }
        ]
    },
    /********记录开始 *********/
    {
        index: 2,
        name: '',
        mode: LifeStageMode.WhiteAttack,
        config: [[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]],
        records: [
            {
                path: [[18, 17], [12, 17], [11, 17], [12, 18], [14, 18], [17, 18], [15, 18]],
                result: StageResult.WIN
            },
            {
                path: [[18, 17], [12, 17], [11, 17], [12, 18], [17, 18], [16, 18], [14, 18]],
                result: StageResult.WIN
            },
            {
                path: [[12, 17], [18, 17], [13, 18], [14, 18]],
                result: StageResult.LOSE
            }
        ]
    },
    /********记录开始 *********/
    {
        index: 3,
        name: '',
        mode: LifeStageMode.WhiteAttack,
        config: [[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, 1, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1]],
        records: [
            {
                path: [[17, 18], [16, 18], [14, 18], [13, 18], [13, 17]],
                result: StageResult.WIN
            },
            {
                path: [[14, 18], [15, 18], [17, 18], [13, 17], [13, 18], [12, 18], [13, 18], [14, 18], [13, 18]],
                result: StageResult.WIN
            },
            {
                path: [[13, 17], [14, 18]],
                result: StageResult.LOSE
            }
        ]
    },
    /********记录开始 *********/
    {
        index: 4,
        name: '',
        mode: LifeStageMode.WhiteAttack,
        config: [[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, 1, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1]],
        records: [
            {
                path: [[17, 18], [13, 17], [13, 18], [14, 18], [16, 18]],
                result: StageResult.WIN
            },
            {
                path: [[17, 18], [16, 18], [14, 18], [13, 17], [13, 18]],
                result: StageResult.WIN
            },
            {
                path: [[14, 18], [13, 17], [13, 18], [12, 18], [12, 17], [15, 18]],
                result: StageResult.LOSE
            }
        ]
    },
    /********记录开始 *********/
    {
        index: 5,
        name: '',
        mode: LifeStageMode.WhiteAttack,
        config: [[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, 0], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, 1, 1, 1, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, 0, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]],
        records: [
            {
                path: [[17, 18], [18, 15], [18, 17]],
                result: StageResult.WIN
            },
            {
                path: [[17, 18], [18, 18], [18, 17], [18, 16]],
                result: StageResult.WIN
            },
            {
                path: [[18, 15], [17, 18]],
                result: StageResult.LOSE
            }
        ]
    },
    /********记录开始 *********/
    {
        index: 6,
        name: '',
        mode: LifeStageMode.WhiteAttack,
        config: [[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, 1, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, -1]],
        records: [
            {
                path: [[17, 18], [17, 17], [18, 18], [14, 18], [16, 18]],
                result: StageResult.WIN
            },
            {
                path: [[17, 18], [18, 18], [17, 17]],
                result: StageResult.WIN
            },
            {
                path: [[14, 18], [17, 18]],
                result: StageResult.LOSE
            },
            {
                path: [[17, 18], [17, 17], [14, 18], [18, 18], [18, 17], [16, 18]],
                result: StageResult.LOSE
            }
        ]
    },
    /********记录开始 *********/
    {
        index: 7,
        name: '',
        mode: LifeStageMode.WhiteAttack,
        config: [[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, 0], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, 1, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1, -1]],
        records: [
            {
                path: [[17, 18], [18, 16], [16, 18], [18, 18], [18, 17]],
                result: StageResult.WIN
            },
            {
                path: [[17, 18], [16, 18], [18, 17]],
                result: StageResult.WIN
            },
            {
                path: [[18, 17], [18, 16], [17, 18], [18, 18]],
                result: StageResult.LOSE
            },
            {
                path: [[18, 16], [18, 17]],
                result: StageResult.LOSE
            }
        ]
    },
    /********记录开始 *********/
    {
        index: 8,
        name: '',
        mode: LifeStageMode.WhiteAttack,
        config: [[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, 0], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1, -1]],
        records: [
            {
                path: [[17, 17], [18, 17], [17, 18], [16, 18], [16, 16], [18, 18], [17, 17], [17, 18], [18, 16]],
                result: StageResult.WIN
            },
            {
                path: [[17, 17], [18, 17], [17, 18], [16, 16], [16, 18]],
                result: StageResult.WIN
            },
            {
                path: [[17, 17], [18, 17], [17, 18], [16, 18], [18, 16], [16, 16]],
                result: StageResult.LOSE
            },
            {
                path: [[17, 18], [16, 18], [17, 17], [16, 16]],
                result: StageResult.LOSE
            },
            {
                path: [[18, 17], [18, 16], [17, 17], [16, 16], [16, 18], [17, 18]],
                result: StageResult.LOSE
            }
        ]
    },
    /********记录开始 *********/
    {
        index: 9,
        name: '',
        mode: LifeStageMode.WhiteAttack,
        config: [[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, 1, 1, -1, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]],
        records: [
            {
                path: [[17, 18], [14, 18], [16, 18], [17, 15], [17, 14], [18, 15], [17, 17], [18, 17], [16, 16]],
                result: StageResult.WIN
            },
            {
                path: [[17, 18], [14, 18], [16, 18], [17, 15], [17, 14], [18, 15], [17, 17], [16, 16], [18, 17]],
                result: StageResult.WIN
            },
            {
                path: [[17, 18], [17, 15], [17, 14], [18, 15], [18, 17], [14, 18], [17, 17], [16, 16], [16, 18]],
                result: StageResult.WIN
            },
            {
                path: [[17, 18], [17, 15], [17, 14], [18, 15], [18, 17], [17, 17], [14, 18]],
                result: StageResult.WIN
            },
            {
                path: [[17, 18], [17, 17], [17, 15], [14, 18], [16, 18], [18, 16], [18, 18]],
                result: StageResult.WIN
            },
            {
                path: [[13, 17], [14, 18]],
                result: StageResult.LOSE
            },
            {
                path: [[17, 15], [14, 18]],
                result: StageResult.LOSE
            }
        ]
    },
    /********记录开始 *********/
    {
        index: 10,
        name: '',
        mode: LifeStageMode.WhiteAttack,
        config: [[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1, 1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, 1, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, 0, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]],
        records: [
            {
                path: [[17, 18], [17, 17], [14, 17], [18, 15], [18, 17]],
                result: StageResult.WIN
            },
            {
                path: [[17, 18], [17, 17], [18, 15], [14, 17], [13, 17], [14, 18], [16, 18], [18, 16], [18, 18]],
                result: StageResult.WIN
            },
            {
                path: [[17, 18], [14, 17], [13, 17], [14, 18], [17, 17], [18, 17], [13, 18]],
                result: StageResult.WIN
            },
            {
                path: [[18, 17], [17, 18], [14, 17], [15, 18]],
                result: StageResult.LOSE
            },
            {
                path: [[14, 17], [17, 18], [18, 17], [15, 18]],
                result: StageResult.LOSE
            },
            {
                path: [[18, 15], [17, 18]],
                result: StageResult.LOSE
            }
        ]
    }
];

;window.Main = Main;