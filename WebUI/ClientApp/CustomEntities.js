var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Custom_AlertLog = /** @class */ (function (_super) {
    __extends(Custom_AlertLog, _super);
    function Custom_AlertLog() {
        var _this = _super.call(this) || this;
        _this.AlertSubTypeID = "";
        _this.AlertTypeID = "";
        _this.CompCode = "";
        _this.MsgBody = "";
        _this.SystemCode = "";
        return _this;
        //this.MemberIDs;
    }
    return Custom_AlertLog;
}(SecurityClass));
var MasterDetailsUserRoles = /** @class */ (function (_super) {
    __extends(MasterDetailsUserRoles, _super);
    function MasterDetailsUserRoles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MasterDetailsUserRoles;
}(SecurityClass));
//# sourceMappingURL=CustomEntities.js.map