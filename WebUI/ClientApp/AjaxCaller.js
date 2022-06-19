var AjaxCaller = /** @class */ (function () {
    function AjaxCaller() {
    }
    Object.defineProperty(AjaxCaller.prototype, "_url", {
        get: function () {
            if (this.Url == null)
                return Url.Action(this.ActionName, this.ControllerName);
            else
                return this.Url;
        },
        enumerable: true,
        configurable: true
    });
    AjaxCaller.prototype.CallAsync = function (OnSuccess) {
        Ajax.CallAsync({
            url: this._url,
            data: this.Data,
            success: function (d) {
                var result = d.result;
                if (OnSuccess != null)
                    OnSuccess(result);
            }
        });
    };
    AjaxCaller.prototype.Call = function () {
        var result = Ajax.Call({
            url: this._url,
            data: this.Data
        });
        return result;
    };
    AjaxCaller.prototype.Execute = function (actionName, entity, callBack) {
        Ajax.CallAsync({
            url: Url.Action(actionName, this.ControllerName),
            data: entity,
            success: function (d) {
                var result = d.result;
                if (result.ResponseState == true) {
                    SharedWork.SwitchModes(ScreenModes.Query);
                }
                else {
                    setTimeout(function () { MessageBox.Show(result.ResponseMessage, actionName); }, 300);
                }
                if (callBack != null)
                    callBack(result);
            }
        });
    };
    AjaxCaller.prototype.Insert = function (entity, callBack) {
        this.Execute("Insert", entity, callBack);
    };
    AjaxCaller.prototype.Update = function (entity, callBack) {
        this.Execute("Update", entity, callBack);
    };
    AjaxCaller.prototype.Delete = function (entity, callBack) {
        this.Execute("Delete", entity, callBack);
    };
    AjaxCaller.prototype.GetByID = function (id) {
        var result = Ajax.Call({
            url: Url.Action("GetByID", this.ControllerName),
            data: { id: id }
        });
        return result;
    };
    return AjaxCaller;
}());
//# sourceMappingURL=AjaxCaller.js.map