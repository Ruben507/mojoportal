﻿Type.registerNamespace("Sys.Extended.UI.HtmlEditor.ToolbarButtons");Sys.Extended.UI.HtmlEditor.ToolbarButtons.ForeColor=function(n){Sys.Extended.UI.HtmlEditor.ToolbarButtons.ForeColor.initializeBase(this,[n])};Sys.Extended.UI.HtmlEditor.ToolbarButtons.ForeColor.prototype={callMethod:function(){if(!Sys.Extended.UI.HtmlEditor.ToolbarButtons.ForeColor.callBaseMethod(this,"callMethod"))return!1},setColor:function(n){Sys.Extended.UI.HtmlEditor.ToolbarButtons.ForeColor.callBaseMethod(this,"setColor",[n]);this._designPanel._execCommand("forecolor",!1,n)}};Sys.Extended.UI.HtmlEditor.ToolbarButtons.ForeColor.registerClass("Sys.Extended.UI.HtmlEditor.ToolbarButtons.ForeColor",Sys.Extended.UI.HtmlEditor.ToolbarButtons.ColorButton);