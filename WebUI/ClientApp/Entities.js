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
var SecurityClass = /** @class */ (function () {
    function SecurityClass() {
    }
    return SecurityClass;
}());
var FavModules = /** @class */ (function () {
    function FavModules() {
    }
    return FavModules;
}());
var SystemParameters = /** @class */ (function () {
    function SystemParameters() {
    }
    return SystemParameters;
}());
var APISessionRecord = /** @class */ (function () {
    function APISessionRecord() {
    }
    APISessionRecord.prototype.SetAPISession = function (key, value) {
        $.ajax({
            url: Url.Action("SetSessionRecordValue", "Session"),
            data: { propertyName: key, value: value },
            async: false
        });
    };
    APISessionRecord.prototype.GetAPISession = function (key) {
        var value = $.ajax({
            url: Url.Action("GetSessionRecordValue", "Session"),
            data: { propertyName: key },
            async: false
        }).responseJSON.result;
        return value;
    };
    Object.defineProperty(APISessionRecord.prototype, "SystemCode", {
        get: function () {
            return this.GetAPISession("SystemCode");
        },
        set: function (value) {
            this.SetAPISession("SystemCode", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APISessionRecord.prototype, "SubSystemCode", {
        get: function () {
            return this.GetAPISession("SubSystemCode");
        },
        set: function (value) {
            this.SetAPISession("SubSystemCode", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APISessionRecord.prototype, "Modulecode", {
        get: function () {
            return this.GetAPISession("Modulecode");
        },
        set: function (value) {
            this.SetAPISession("Modulecode", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APISessionRecord.prototype, "UserCode", {
        get: function () {
            return this.GetAPISession("UserCode");
        },
        set: function (value) {
            this.SetAPISession("UserCode", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APISessionRecord.prototype, "Token", {
        get: function () {
            return this.GetAPISession("Token");
        },
        set: function (value) {
            this.SetAPISession("Token", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APISessionRecord.prototype, "CompCode", {
        get: function () {
            return this.GetAPISession("CompCode");
        },
        set: function (value) {
            this.SetAPISession("CompCode", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APISessionRecord.prototype, "BranchCode", {
        get: function () {
            return this.GetAPISession("BranchCode");
        },
        set: function (value) {
            this.SetAPISession("BranchCode", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APISessionRecord.prototype, "CurrentYear", {
        get: function () {
            return this.GetAPISession("CurrentYear");
        },
        set: function (value) {
            this.SetAPISession("CurrentYear", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APISessionRecord.prototype, "ScreenLanguage", {
        get: function () {
            return this.GetAPISession("ScreenLanguage");
        },
        set: function (value) {
            this.SetAPISession("ScreenLanguage", value);
        },
        enumerable: true,
        configurable: true
    });
    return APISessionRecord;
}());
var EntityContext = /** @class */ (function () {
    function EntityContext() {
    }
    return EntityContext;
}());
var ResponseResult = /** @class */ (function () {
    function ResponseResult() {
    }
    return ResponseResult;
}());
var BaseResponse = /** @class */ (function () {
    function BaseResponse() {
    }
    return BaseResponse;
}());
var ReportParameters = /** @class */ (function () {
    function ReportParameters() {
    }
    return ReportParameters;
}());
var G_BRANCH = /** @class */ (function (_super) {
    __extends(G_BRANCH, _super);
    function G_BRANCH() {
        var _this = _super.call(this) || this;
        _this.COMP_CODE = 0;
        _this.BRA_CODE = 0;
        _this.BRA_DESC = "";
        _this.BRA_TYPE = 0;
        _this.BRA_DESCL = "";
        _this.BRA_SHORTA = "";
        _this.BRA_SHORTL = "";
        _this.REGION_CODE = "";
        _this.City = "";
        _this.Address = "";
        _this.Tel = "";
        _this.Fax = "";
        _this.Email = "";
        _this.WebSite = "";
        _this.BranchManager = "";
        _this.HRResponsible = "";
        _this.FinanceResponsible = "";
        _this.SalesManager = "";
        _this.CUSTOM1 = "";
        _this.CUSTOM2 = "";
        _this.CUSTOM3 = "";
        _this.CUSTOM4 = "";
        _this.CUSTOM5 = "";
        _this.CUSTOMFLAG1 = false;
        _this.CUSTOMFLAG2 = false;
        _this.CUSTOMNUM1 = 0;
        _this.CUSTOMNUM2 = 0;
        _this.CUSTOMDATE = "";
        _this.BRA_DESCE = "";
        _this.GroupVatNo = "";
        _this.VndIDTypeCode = 0;
        _this.IDNo;
        _this.Address_Street = "";
        _this.Address_Str_Additional = "";
        _this.Address_BuildingNo = "";
        _this.Address_Build_Additional = "";
        _this.Address_City = "";
        _this.Address_Postal = "";
        _this.Address_Province = "";
        _this.Address_District = "";
        _this.NationalityID = 0;
        _this.Currencyid = 0;
        _this.RetailInvoiceAllowed = 0;
        _this.RetailInvoiceTransCode = 0;
        _this.RetailInvoicePayment = 0;
        _this.WholeInvoiceTransCode = 0;
        _this.WholeInvoiceAllowed = 0;
        _this.WholeInvoicePayment = 0;
        _this.AutoupdateSalesPrice = false;
        _this.SalePriceAddPerc = 0;
        _this.SalePriceMinAddPerc = 0;
        return _this;
    }
    return G_BRANCH;
}(SecurityClass));
var G_LnkVarBranch = /** @class */ (function (_super) {
    __extends(G_LnkVarBranch, _super);
    function G_LnkVarBranch() {
        var _this = _super.call(this) || this;
        _this.CompCode = 0;
        _this.BraCode = 0;
        _this.Lnktype = "";
        _this.Ser = 0;
        _this.LnkCode = "";
        _this.GLAccountCode = "";
        _this.CC_Code = "";
        return _this;
    }
    return G_LnkVarBranch;
}(SecurityClass));
var GQ_GetLnkVarBranch = /** @class */ (function (_super) {
    __extends(GQ_GetLnkVarBranch, _super);
    function GQ_GetLnkVarBranch() {
        var _this = _super.call(this) || this;
        _this.CompCode = 0;
        _this.BraCode = 0;
        _this.Lnktype = "";
        _this.Ser = 0;
        _this.LnkCode = "";
        _this.GLAccountCode = "";
        _this.Acc_DescA = "";
        _this.Acc_DescE = "";
        _this.CC_Code = "";
        _this.GSt_DescA = "";
        _this.GSt_DescE = "";
        _this.GLAcc_DescA = "";
        _this.GLAcc_DescE = "";
        return _this;
    }
    return GQ_GetLnkVarBranch;
}(SecurityClass));
var IGetunitprice = /** @class */ (function () {
    function IGetunitprice() {
        this.unitprice = 0;
        this.unitpricewithvat = 0;
    }
    return IGetunitprice;
}());
var IQ_GetOperationSalesmanItem = /** @class */ (function (_super) {
    __extends(IQ_GetOperationSalesmanItem, _super);
    function IQ_GetOperationSalesmanItem() {
        var _this = _super.call(this) || this;
        _this.OperationSalesmanItemID = 0;
        _this.OperationSalesmanID = 0;
        _this.OperationItemID = 0;
        _this.OperationID = 0;
        _this.ItemID = 0;
        _this.ReceivedQty = 0;
        _this.SoldQty = 0;
        _this.ScrapQty = 0;
        _this.OnhandQty = 0;
        _this.ItemCode = "";
        _this.IT_DescA = "";
        _this.IT_DescE = "";
        _this.FamilyCode = "";
        _this.FamDescA = "";
        _this.Fam_DescE = "";
        _this.SalesmanId = 0;
        _this.Min_SalesPrice = 0;
        _this.Est_SalesPrice = 0;
        _this.Est_CostPrice = 0;
        _this.VatNatID = 0;
        _this.VatPrc = 0;
        return _this;
    }
    return IQ_GetOperationSalesmanItem;
}(SecurityClass));
var IQ_GetOperationSalesman = /** @class */ (function (_super) {
    __extends(IQ_GetOperationSalesman, _super);
    function IQ_GetOperationSalesman() {
        var _this = _super.call(this) || this;
        _this.OperationSalesmanID = 0;
        _this.OperationID = 0;
        _this.SalesmanId = 0;
        _this.Close_TotalSalesCash = 0;
        _this.Close_TotalSalesCashVAT = 0;
        _this.Close_TotalSalesCredit = 0;
        _this.Close_TotalSalesCreditVAT = 0;
        _this.Close_CashOnhand = 0;
        _this.Close_CashOnBank = 0;
        _this.Close_TotalSales = 0;
        _this.SalesmanCode = "";
        _this.NameA = "";
        _this.NameE = "";
        _this.TrNo = 0;
        _this.RefNO = "";
        _this.TruckNo = "";
        _this.TrDate = "";
        _this.Status = 0;
        return _this;
    }
    return IQ_GetOperationSalesman;
}(SecurityClass));
var I_TR_OperationSalesman = /** @class */ (function (_super) {
    __extends(I_TR_OperationSalesman, _super);
    function I_TR_OperationSalesman() {
        var _this = _super.call(this) || this;
        _this.OperationSalesmanID = 0;
        _this.OperationID = 0;
        _this.SalesmanId = 0;
        _this.Close_TotalSalesCash = 0;
        _this.Close_TotalSalesCashVAT = 0;
        _this.Close_TotalSalesCredit = 0;
        _this.Close_TotalSalesCreditVAT = 0;
        _this.Close_CashOnhand = 0;
        _this.Close_CashOnBank = 0;
        _this.Close_TotalSales = 0;
        return _this;
    }
    return I_TR_OperationSalesman;
}(SecurityClass));
var I_TR_OperationSalesmanItem = /** @class */ (function (_super) {
    __extends(I_TR_OperationSalesmanItem, _super);
    function I_TR_OperationSalesmanItem() {
        var _this = _super.call(this) || this;
        _this.OperationSalesmanItemID = 0;
        _this.OperationSalesmanID = 0;
        _this.OperationItemID = 0;
        _this.OperationID = 0;
        _this.ItemID = 0;
        _this.ReceivedQty = 0;
        _this.SoldQty = 0;
        _this.ScrapQty = 0;
        _this.OnhandQty = 0;
        _this.StatusFlag = "";
        return _this;
    }
    return I_TR_OperationSalesmanItem;
}(SecurityClass));
var I_TR_OperationTFDetail = /** @class */ (function (_super) {
    __extends(I_TR_OperationTFDetail, _super);
    function I_TR_OperationTFDetail() {
        var _this = _super.call(this) || this;
        _this.OperationTFDetailID = 0;
        _this.OperationTFID = 0;
        _this.OperationItemID = 0;
        _this.ItemID = 0;
        _this.SendQty = 0;
        _this.RecQty = 0;
        _this.StatusFlag = "";
        return _this;
    }
    return I_TR_OperationTFDetail;
}(SecurityClass));
var I_VW_GetCompStatus = /** @class */ (function (_super) {
    __extends(I_VW_GetCompStatus, _super);
    function I_VW_GetCompStatus() {
        var _this = _super.call(this) || this;
        _this.CompCode = 0;
        _this.AddAble = false;
        _this.Editable = false;
        _this.CompStatus = 0;
        _this.LoginMsg;
        _this.LastDate = "";
        _this.FirstDate = "";
        _this.INV_STATUS = 0;
        _this.ACC_STATUS = 0;
        _this.ProfitAcc_Code = "";
        _this.OpenAccVoucheNo = 0;
        _this.OpenInvAdjNo = 0;
        return _this;
    }
    return I_VW_GetCompStatus;
}(SecurityClass));
var G_COMPANY = /** @class */ (function (_super) {
    __extends(G_COMPANY, _super);
    function G_COMPANY() {
        var _this = _super.call(this) || this;
        _this.COMP_CODE = 0;
        _this.NameA = "";
        _this.NameE = "";
        _this.Systems = "";
        _this.MOI_ID;
        _this.CRT_NO;
        _this.City = "";
        _this.Address = "";
        _this.Tel = "";
        _this.Fax = "";
        _this.Email = "";
        _this.WebSite = "";
        _this.GMName = "";
        _this.HRResponsible = "";
        _this.FinanceResponsible = "";
        _this.SalesManager = "";
        _this.CUSTOM1 = "";
        _this.CUSTOM2 = "";
        _this.CUSTOM3 = "";
        _this.CUSTOM4 = "";
        _this.CUSTOM5 = "";
        _this.CUSTOMFLAG1 = false;
        _this.CUSTOMFLAG2 = false;
        _this.CUSTOMNUM1 = 0;
        _this.CUSTOMNUM2 = 0;
        _this.CUSTOMDATE = "";
        _this.NameActive = "";
        _this.IsActive = false;
        _this.IsReadOnly = false;
        _this.LogoIcon = "";
        _this.BkImage1 = "";
        _this.BkImage2 = "";
        _this.GroupVatNo = "";
        _this.VATNO = "";
        _this.VndIDTypeCode = 0;
        _this.IDNo;
        _this.Address_Street = "";
        _this.Address_Str_Additional = "";
        _this.Address_BuildingNo = "";
        _this.Address_Build_Additional = "";
        _this.Address_City = "";
        _this.Address_Postal = "";
        _this.Address_Province = "";
        _this.Address_District = "";
        _this.NationalityID = 0;
        _this.Currencyid = 0;
        return _this;
    }
    return G_COMPANY;
}(SecurityClass));
var G_MODULES = /** @class */ (function (_super) {
    __extends(G_MODULES, _super);
    function G_MODULES() {
        var _this = _super.call(this) || this;
        _this.SYSTEM_CODE = "";
        _this.SUB_SYSTEM_CODE = "";
        _this.MODULE_CODE = "";
        _this.MENU_NO = "";
        _this.MENU_NAME = "";
        _this.MODULE_DESCE = "";
        _this.MODULE_DESCA = "";
        _this.CREATE = false;
        _this.EDIT = false;
        _this.DELETE = false;
        _this.PRINT = false;
        _this.VIEW = false;
        _this.CUSTOM1 = false;
        _this.CUSTOM2 = false;
        _this.CUSTOM3 = false;
        _this.CUSTOM1_DESC = "";
        _this.CUSTOM2_DESC = "";
        _this.CUSTOM3_DESC = "";
        _this.CUSTOM4 = false;
        _this.CUSTOM5 = false;
        _this.CUSTOM6 = false;
        _this.CUSTOM4_DESC = "";
        _this.CUSTOM5_DESC = "";
        _this.CUSTOM6_DESC = "";
        _this.CUSTOM7 = false;
        _this.CUSTOM8 = false;
        _this.CUSTOM9 = false;
        _this.CUSTOM7_DESC = "";
        _this.CUSTOM8_DESC = "";
        _this.CUSTOM9_DESC = "";
        _this.AVAILABLE = false;
        _this.MODULE_TYPE;
        _this.Images_Enabled = false;
        _this.SYSTEM_CODE_Desc = "";
        _this.SUB_SYSTEM_CODE_Desc = "";
        return _this;
    }
    return G_MODULES;
}(SecurityClass));
var G_Nationality = /** @class */ (function (_super) {
    __extends(G_Nationality, _super);
    function G_Nationality() {
        var _this = _super.call(this) || this;
        _this.NationalityID = 0;
        _this.NationalityCode = "";
        _this.DescA = "";
        _this.DescL = "";
        _this.Remarks = "";
        _this.StatusFlag = "";
        return _this;
    }
    return G_Nationality;
}(SecurityClass));
var A_RecPay_D_CashBox = /** @class */ (function (_super) {
    __extends(A_RecPay_D_CashBox, _super);
    function A_RecPay_D_CashBox() {
        var _this = _super.call(this) || this;
        _this.CashBoxID = 0;
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.CashBox_DescA = "";
        _this.CashBox_DescE = "";
        _this.IsActive = false;
        _this.AccountCode = "";
        _this.CardAccountCode = "";
        _this.User_Code = "";
        _this.StatusFlag = "";
        _this.OpenBalance = 0;
        _this.OpenBalanceDate = "";
        _this.IsRecPayAccount = false;
        return _this;
    }
    return A_RecPay_D_CashBox;
}(SecurityClass));
var AVAT_D_SrvCategory = /** @class */ (function (_super) {
    __extends(AVAT_D_SrvCategory, _super);
    function AVAT_D_SrvCategory() {
        var _this = _super.call(this) || this;
        _this.SrvCategoryID = 0;
        _this.COMP_CODE = 0;
        _this.CAT_CODE = "";
        _this.DescA = "";
        _this.DescE = "";
        _this.SALES_ACC_CODE = "";
        _this.RETURN_ACC_CODE = "";
        _this.DISC_ACC_CODE = "";
        _this.ACTUAL_DATE = "";
        _this.Nature = 0;
        _this.IsPurchase = false;
        _this.Remarks = "";
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.VatNatID = 0;
        _this.ItemFormatFix = "";
        _this.ItemFormatSerial = "";
        return _this;
    }
    return AVAT_D_SrvCategory;
}(SecurityClass));
var AQVAT_GetSrvCategory = /** @class */ (function (_super) {
    __extends(AQVAT_GetSrvCategory, _super);
    function AQVAT_GetSrvCategory() {
        var _this = _super.call(this) || this;
        _this.DescA = "";
        _this.ItemFormatFix = "";
        _this.ItemFormatSerial = "";
        _this.IsPurchase = false;
        _this.Remarks = "";
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.VatNatID = 0;
        _this.SrvCategoryID = 0;
        _this.COMP_CODE = 0;
        _this.CAT_CODE = "";
        _this.DescE = "";
        _this.SALES_ACC_CODE = "";
        _this.RETURN_ACC_CODE = "";
        _this.DISC_ACC_CODE = "";
        _this.ACTUAL_DATE = "";
        _this.Nature = 0;
        _this.VatNatureCode = "";
        _this.VatNatureDescA = "";
        _this.VatNatureDescE = "";
        _this.VatPrc = 0;
        _this.sls_Acc_DescA = "";
        _this.sls_Acc_DescE = "";
        _this.Ret_Acc_DescA = "";
        _this.Ret_Acc_DescE = "";
        _this.Dis_Acc_DescA = "";
        _this.Dis_Acc_DescE = "";
        return _this;
    }
    return AQVAT_GetSrvCategory;
}(SecurityClass));
var GQ_GetStore = /** @class */ (function (_super) {
    __extends(GQ_GetStore, _super);
    function GQ_GetStore() {
        var _this = _super.call(this) || this;
        _this.StoreId = 0;
        _this.BranchId = 0;
        _this.COMP_CODE = 0;
        _this.BRA_CODE = 0;
        _this.STORE_CODE = 0;
        _this.DescA = "";
        _this.DescL = "";
        _this.IsActive = false;
        _this.NameIsActive = '';
        _this.StockAccCode = "";
        _this.Tel1 = "";
        _this.Tel2 = "";
        _this.Fax = "";
        _this.Address = "";
        _this.STORE_TYPE = 0;
        _this.TYPE_CODE = 0;
        _this.Remarks = "";
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.BRA_DESC = "";
        _this.BRA_DESCL = "";
        _this.ACC_DESCA = "";
        _this.ACC_DESCL = "";
        _this.StatusFlag = "";
        return _this;
    }
    return GQ_GetStore;
}(SecurityClass));
var IQ_GetSalesMan = /** @class */ (function (_super) {
    __extends(IQ_GetSalesMan, _super);
    function IQ_GetSalesMan() {
        var _this = _super.call(this) || this;
        _this.SalesmanId = 0;
        _this.CompCode = 0;
        _this.BraCode = 0;
        _this.SalesmanCode = "";
        _this.NameA = "";
        _this.NameE = "";
        _this.ShortNameA = "";
        _this.ShortNameE = "";
        _this.ADDRESS = "";
        _this.IDNo = "";
        _this.MOBILE = "";
        _this.EMAIL = "";
        _this.Isactive = false;
        _this.REMARKS = "";
        _this.CREATED_BY = "";
        _this.CREATED_AT = "";
        _this.UPDATED_AT = "";
        _this.UPDATED_BY = "";
        _this.GLAccCode = "";
        _this.IsSalesEnable = false;
        _this.IsPurchaseEnable = false;
        _this.ISOperationEnable = false;
        _this.PurchaseLimit = 0;
        _this.SalesCreditLimit = 0;
        _this.NationalityID = 0;
        _this.NationalityCode = "";
        _this.Nat_DescA = "";
        _this.Nat_DescE = "";
        _this.CC_Code = "";
        _this.CC_DESCA = "";
        _this.CC_DESCE = "";
        _this.text_IsSalesEnable = "";
        _this.text_IsPurchaseEnable = "";
        _this.text_ISOperationEnable = "";
        return _this;
    }
    return IQ_GetSalesMan;
}(SecurityClass));
var I_Sls_D_Salesman = /** @class */ (function (_super) {
    __extends(I_Sls_D_Salesman, _super);
    function I_Sls_D_Salesman() {
        var _this = _super.call(this) || this;
        _this.SalesmanId = 0;
        _this.CompCode = 0;
        _this.BraCode = 0;
        _this.SalesmanCode = "";
        _this.NameA = "";
        _this.NameE = "";
        _this.ShortNameA = "";
        _this.ShortNameE = "";
        _this.ADDRESS = "";
        _this.IDNo = "";
        _this.MOBILE = "";
        _this.EMAIL = "";
        _this.Isactive = false;
        _this.REMARKS = "";
        _this.CREATED_BY = "";
        _this.CREATED_AT = "";
        _this.UPDATED_AT = "";
        _this.UPDATED_BY = "";
        _this.GLAccCode = "";
        _this.IsSalesEnable = false;
        _this.IsPurchaseEnable = false;
        _this.ISOperationEnable = false;
        _this.PurchaseLimit = 0;
        _this.SalesCreditLimit = 0;
        _this.NationalityID = 0;
        _this.CC_Code = "";
        return _this;
    }
    return I_Sls_D_Salesman;
}(SecurityClass));
var A_D_VAT_TYPE = /** @class */ (function (_super) {
    __extends(A_D_VAT_TYPE, _super);
    function A_D_VAT_TYPE() {
        var _this = _super.call(this) || this;
        _this.COMP_CODE = 0;
        _this.TYPE = 0;
        _this.CODE = 0;
        _this.DESCRIPTION = "";
        _this.VatType = 0;
        _this.VatPerc = 0;
        _this.LineOrder = 0;
        return _this;
    }
    return A_D_VAT_TYPE;
}(SecurityClass));
var I_D_Category = /** @class */ (function (_super) {
    __extends(I_D_Category, _super);
    function I_D_Category() {
        var _this = _super.call(this) || this;
        _this.CatID = 0;
        _this.CompCode = 0;
        _this.CatCode = "";
        _this.DescA = "";
        _this.DescL = "";
        _this.ParentCatId = 0;
        _this.CatLevel = 0;
        _this.IsDetail = false;
        _this.UnitGrpID = 0;
        _this.IsAutoGenerateItem = false;
        _this.ItemFormatFix = "";
        _this.ItemFormatSerial = "";
        _this.ItemTypeID = 0;
        _this.CostMethodID = 0;
        _this.StockMethodID = 0;
        _this.IssueFromCenteralStore = false;
        _this.CenteralStoreCode = 0;
        _this.IsAdditionalSpecs = false;
        _this.AdditionalspcsDescA = "";
        _this.AdditionalspcsDescL = "";
        _this.ISSales = false;
        _this.IsStock = false;
        _this.IsProduct = false;
        _this.IsIssuetoCC = false;
        _this.IsIssueToProd = false;
        _this.IsPurchase = false;
        _this.Remarks = "";
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.VatNatID = 0;
        _this.CashSales_ACC_CODE = "";
        _this.CashSalesRet_ACC_CODE = "";
        _this.CashSalesDisc_ACC_CODE = "";
        _this.CreditSales_ACC_CODE = "";
        _this.CreditSalesRet_ACC_CODE = "";
        _this.CreditSalesDisc_ACC_CODE = "";
        _this.Pur_ACC_CODE = "";
        _this.PurRet_ACC_CODE = "";
        _this.PurDisc_ACC_CODE = "";
        _this.StatusFlag = "";
        _this.ISSalesdesc = "";
        _this.IsStockdesc = "";
        _this.IsProductdesc = "";
        _this.IsIssuetoCCdesc = "";
        _this.IsIssueToProddesc = "";
        _this.IsPurchasedesc = "";
        return _this;
    }
    return I_D_Category;
}(SecurityClass));
var A_RecPay_D_Category = /** @class */ (function (_super) {
    __extends(A_RecPay_D_Category, _super);
    function A_RecPay_D_Category() {
        var _this = _super.call(this) || this;
        _this.CatID = 0;
        _this.AccountType = 0;
        _this.CatCode = "";
        _this.Cat_DescA = "";
        _this.Cat_DescE = "";
        _this.REMARKS = "";
        _this.AccountCode = "";
        _this.CompCode = 0;
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.StatusFlag = "";
        return _this;
    }
    return A_RecPay_D_Category;
}(SecurityClass));
var A_RecPay_D_Group = /** @class */ (function (_super) {
    __extends(A_RecPay_D_Group, _super);
    function A_RecPay_D_Group() {
        var _this = _super.call(this) || this;
        _this.GroupID = 0;
        _this.AccountType = 0;
        _this.CompCode = 0;
        _this.GroupCode = "";
        _this.Group_DescA = "";
        _this.Group_DescE = "";
        _this.Remarks = "";
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.StatusFlag = "";
        return _this;
    }
    return A_RecPay_D_Group;
}(SecurityClass));
var I_Item = /** @class */ (function (_super) {
    __extends(I_Item, _super);
    function I_Item() {
        var _this = _super.call(this) || this;
        _this.ItemID = 0;
        _this.ItemCode = "";
        _this.CompCode = 0;
        _this.DescA = "";
        _this.DescL = "";
        _this.TechDescA = "";
        _this.TechDescL = "";
        _this.UnitGrpID = 0;
        _this.UomID = 0;
        _this.ItemFamilyID = 0;
        _this.RefItemCode = "";
        _this.OldItemCode = "";
        _this.VndItemCode = "";
        _this.BarCode1 = "";
        _this.BarCode2 = "";
        _this.FirstEntryDate = "";
        _this.Remarks = "";
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.LastBarCodeSeq = 0;
        _this.BarCodePrefix = "";
        _this.FirstYear = 0;
        _this.CatID = 0;
        _this.OnhandQty = 0;
        _this.FirstYear = 0;
        _this.StatusFlag = "";
        _this.IsActive = false;
        return _this;
    }
    return I_Item;
}(SecurityClass));
var G_LnkTransVoucher = /** @class */ (function (_super) {
    __extends(G_LnkTransVoucher, _super);
    function G_LnkTransVoucher() {
        var _this = _super.call(this) || this;
        _this.COMP_CODE = 0;
        _this.SYSTEM_CODE = "";
        _this.SUB_SYSTEM_CODE = "";
        _this.TR_CODE = "";
        _this.SERIAL = 0;
        _this.VarCode = "";
        _this.ISDebit = false;
        _this.AccType = 0;
        _this.AccFixedCode = "";
        _this.AccVarCode = "";
        _this.AccBraCode = "";
        _this.CCType = 0;
        _this.CCFixedCode = "";
        _this.CCVarCode = "";
        _this.CCBraCode = "";
        _this.IsCollective = false;
        _this.LineRemarkA = '';
        _this.LineRemarkE = '';
        _this.StatusFlag = '';
        _this.serial_num = '';
        return _this;
    }
    return G_LnkTransVoucher;
}(SecurityClass));
var I_ItemYear = /** @class */ (function () {
    function I_ItemYear() {
        this.ItemYearID = 0;
        this.ItemID = 0;
        this.FinYear = 0;
        this.MinUnitPrice = 0;
        this.UnitPrice = 0;
        this.StarGlobalCost = 0;
        this.GlobalCost = 0;
        this.UnitWholePrice = 0;
        this.MinUnitWholePrice = 0;
        this.IsLocalSalePrice = false;
        this.StatusFlag = "";
    }
    return I_ItemYear;
}());
var I_D_UOM = /** @class */ (function (_super) {
    __extends(I_D_UOM, _super);
    function I_D_UOM() {
        var _this = _super.call(this) || this;
        _this.UomID = 0;
        _this.UomCode = "";
        _this.DescA = "";
        _this.DescE = "";
        _this.CompCode = 0;
        _this.Remarks = "";
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.StatusFlag = "";
        return _this;
    }
    return I_D_UOM;
}(SecurityClass));
var Tax_Type = /** @class */ (function () {
    function Tax_Type() {
        this.Nature = 0;
        this.Prc = 0;
        this.VatType = 0;
    }
    return Tax_Type;
}());
var I_ItemFamily = /** @class */ (function (_super) {
    __extends(I_ItemFamily, _super);
    function I_ItemFamily() {
        var _this = _super.call(this) || this;
        _this.ItemFamilyID = 0;
        _this.FamilyCode = "";
        _this.CompCode = 0;
        _this.DescA = "";
        _this.DescL = "";
        _this.TechDescA = "";
        _this.TechDescL = "";
        _this.CatID = 0;
        _this.ItemTypeID = 0;
        _this.RefItemCode = "";
        _this.BarCode1 = "";
        _this.FirstEntryDate = "";
        _this.UnitPrice = 0;
        _this.StarGlobalCost = 0;
        _this.GlobalCost = 0;
        _this.Remarks = "";
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.LastBarCodeSeq = 0;
        _this.BarCodePrefix = "";
        _this.StatusFlag = "";
        return _this;
    }
    return I_ItemFamily;
}(SecurityClass));
var G_STORE = /** @class */ (function (_super) {
    __extends(G_STORE, _super);
    function G_STORE() {
        var _this = _super.call(this) || this;
        _this.StoreId = 0;
        _this.BranchId = 0;
        _this.COMP_CODE = 0;
        _this.BRA_CODE = 0;
        _this.STORE_CODE = 0;
        _this.DescA = "";
        _this.DescL = "";
        _this.IsActive = false;
        _this.StockAccCode = "";
        _this.Tel1 = "";
        _this.Tel2 = "";
        _this.Fax = "";
        _this.Address = "";
        _this.STORE_TYPE = 0;
        _this.TYPE_CODE = 0;
        _this.Remarks = "";
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        return _this;
    }
    return G_STORE;
}(SecurityClass));
var IQ_GetItemStoreInfo_New = /** @class */ (function () {
    function IQ_GetItemStoreInfo_New() {
        this.ItemID = 0;
        this.Itm_DescA = "";
        this.Itm_DescE = "";
        this.ItemFamilyID = 0;
        this.StoreId = 0;
        this.UnitPrice = 0;
        this.MinUnitPrice = 0;
        this.OnhandQty = 0;
        this.UomID = 0;
    }
    return IQ_GetItemStoreInfo_New;
}());
var IQ_GetItemStoreInfo = /** @class */ (function () {
    function IQ_GetItemStoreInfo() {
        this.ItemID = 0;
        this.ItemCode = "";
        this.Itm_DescA = "";
        this.Itm_DescE = "";
        this.UomID = 0;
        this.ItemFamilyID = 0;
        this.CompCode = 0;
        this.RefItemCode = "";
        this.FirstEntryDate = "";
        this.Remarks = "";
        this.CreatedAt = "";
        this.CreatedBy = "";
        this.UpdatedAt = "";
        this.UpdatedBy = "";
        this.LastBarCodeSeq = 0;
        this.BarCodePrefix = "";
        this.StoreCode = 0;
        this.BraCode = 0;
        this.LOCATION = "";
        this.OnhandQty = 0;
        this.MinQty = 0;
        this.MaxQty = 0;
        this.StartQty = 0;
        this.Uom_DescA = "";
        this.Uom_DescE = "";
        this.FamilyCode = "";
        this.Family_DescA = "";
        this.Family_DescE = "";
        this.StoreId = 0;
        this.CatID = 0;
        this.FinYear = 0;
        this.MinUnitPrice = 0;
        this.UnitPrice = 0;
        this.StarGlobalCost = 0;
        this.GlobalCost = 0;
        this.UnitWholePrice = 0;
        this.MinUnitWholePrice = 0;
        this.ItemYearID = 0;
        this.ItemStoreID = 0;
        this.VatPrc = 0;
        this.VatNatID = 0;
        this.Expr1 = 0;
        this.IsActive = false;
        this.ISSales = false;
        this.IsStock = false;
        this.IsProduct = false;
        this.IsPurchase = false;
        this.StartLocalCost = 0;
        this.LocalCost = 0;
        this.Cat_Desc = "";
    }
    return IQ_GetItemStoreInfo;
}());
var IQ_GetItemFamily = /** @class */ (function () {
    function IQ_GetItemFamily() {
        this.ItemFamilyID = 0;
        this.FamilyCode = "";
        this.CompCode = 0;
        this.DescA = "";
        this.DescL = "";
        this.TechDescA = "";
        this.TechDescL = "";
        this.CatID = 0;
        this.ISSales = false;
        this.IsStock = false;
        this.IsProduct = false;
        this.IsPurchase = false;
    }
    return IQ_GetItemFamily;
}());
var I_ItemStore = /** @class */ (function () {
    function I_ItemStore() {
        this.ItemStoreID = 0;
        this.ItemID = 0;
        this.FinYear = 0;
        this.StoreCode = 0;
        this.BraCode = 0;
        this.CompCode = 0;
        this.LOCATION = "";
        this.LOCATION2 = "";
        this.OnhandQty = 0;
        this.BookQty = 0;
        this.OnRoadQty = 0;
        this.OnOrderQty = 0;
        this.ReOrderQty = 0;
        this.MinQty = 0;
        this.MaxQty = 0;
        this.StartQty = 0;
        this.StartLocalCost = 0;
        this.LocalCost = 0;
        this.CreatedAt = "";
        this.CreatedBy = "";
        this.UpdatedAt = "";
        this.UpdatedBy = "";
        this.StoreId = 0;
        this.MinUnitPrice = 0;
        this.UnitPrice = 0;
        this.UnitWholePrice = 0;
        this.MinUnitWholePrice = 0;
    }
    return I_ItemStore;
}());
var G_SearchForm = /** @class */ (function (_super) {
    __extends(G_SearchForm, _super);
    function G_SearchForm() {
        var _this = _super.call(this) || this;
        _this.SearchFormCode = "";
        _this.ReturnDataPropertyName = "";
        _this.Description = "";
        _this.SerachFormTitle = "";
        _this.IsFullScreen = false;
        _this.Left = 0;
        _this.Top = 0;
        _this.Height = 0;
        _this.Width = 0;
        _this.PageSize = 0;
        _this.DataSourceName = "";
        _this.SearchInterval = 0;
        _this.SerachFormTitleA = "";
        return _this;
    }
    return G_SearchForm;
}(SecurityClass));
var G_SearchFormModule = /** @class */ (function (_super) {
    __extends(G_SearchFormModule, _super);
    function G_SearchFormModule() {
        var _this = _super.call(this) || this;
        _this.SystemCode = "";
        _this.SubSystemCode = "";
        _this.ModuleCode = "";
        _this.ControlCode = "";
        _this.SearchFormCode = "";
        return _this;
    }
    return G_SearchFormModule;
}(SecurityClass));
var G_SearchFormSetting = /** @class */ (function (_super) {
    __extends(G_SearchFormSetting, _super);
    function G_SearchFormSetting() {
        var _this = _super.call(this) || this;
        _this.SearchFormSettingID = 0;
        _this.SearchFormCode = "";
        _this.FieldSequence = 0;
        _this.DataMember = "";
        _this.AlternateDataMember = "";
        _this.FieldTitle = "";
        _this.IsReadOnly = false;
        _this.Datatype = 0;
        _this.FieldWidth = 0;
        _this.UseSelectionOperator = false;
        _this.Language = 0;
        _this.FieldTitleA = "";
        return _this;
    }
    return G_SearchFormSetting;
}(SecurityClass));
var G_STANDARD = /** @class */ (function (_super) {
    __extends(G_STANDARD, _super);
    function G_STANDARD() {
        var _this = _super.call(this) || this;
        _this.BACKUP_PATH = "";
        _this.BACKUP_DB = "";
        _this.BACKUP_COPIES = 0;
        return _this;
    }
    return G_STANDARD;
}(SecurityClass));
var G_SUB_SYSTEMS = /** @class */ (function (_super) {
    __extends(G_SUB_SYSTEMS, _super);
    function G_SUB_SYSTEMS() {
        var _this = _super.call(this) || this;
        _this.SYSTEM_CODE = "";
        _this.SUB_SYSTEM_CODE = "";
        _this.SUB_SYSTEM_DESCA = "";
        _this.SUB_SYSTEM_DESCE = "";
        _this.ICON_PATH = "";
        _this.APPNAME = "";
        _this.APPVERSION = "";
        return _this;
    }
    return G_SUB_SYSTEMS;
}(SecurityClass));
var G_SYSTEM = /** @class */ (function (_super) {
    __extends(G_SYSTEM, _super);
    function G_SYSTEM() {
        var _this = _super.call(this) || this;
        _this.SYSTEM_CODE = "";
        _this.SYSTEM_DESCE = "";
        _this.SYSTEM_DESCA = "";
        _this.DB_NAME = "";
        _this.ICON_PATH = "";
        _this.INIT_ORDER = 0;
        _this.VER_PATH = "";
        return _this;
    }
    return G_SYSTEM;
}(SecurityClass));
var G_USER_BRANCH = /** @class */ (function (_super) {
    __extends(G_USER_BRANCH, _super);
    function G_USER_BRANCH() {
        var _this = _super.call(this) || this;
        _this.USER_CODE = "";
        _this.COMP_CODE = 0;
        _this.BRA_CODE = 0;
        _this.EXECUTE = false;
        _this.CREATE = false;
        _this.EDIT = false;
        _this.DELETE = false;
        _this.PRINT = false;
        _this.VIEW = false;
        _this.StatusFlag = "";
        return _this;
    }
    return G_USER_BRANCH;
}(SecurityClass));
var G_USER_COMPANY = /** @class */ (function (_super) {
    __extends(G_USER_COMPANY, _super);
    function G_USER_COMPANY() {
        var _this = _super.call(this) || this;
        _this.USER_CODE = "";
        _this.COMP_CODE = 0;
        _this.EXECUTE = false;
        _this.CREATE = false;
        _this.EDIT = false;
        _this.DELETE = false;
        _this.PRINT = false;
        _this.VIEW = false;
        return _this;
    }
    return G_USER_COMPANY;
}(SecurityClass));
var G_USER_LOG = /** @class */ (function (_super) {
    __extends(G_USER_LOG, _super);
    function G_USER_LOG() {
        var _this = _super.call(this) || this;
        _this.USER_CODE = "";
        _this.SYSTEM_CODE;
        _this.SYSTEM_YEAR = 0;
        _this.MODULE_CODE = "";
        _this.COMP_CODE = 0;
        _this.LOG_DATE = "";
        return _this;
    }
    return G_USER_LOG;
}(SecurityClass));
var G_USER_MODULE = /** @class */ (function (_super) {
    __extends(G_USER_MODULE, _super);
    function G_USER_MODULE() {
        var _this = _super.call(this) || this;
        _this.USER_CODE = "";
        _this.SYSTEM_CODE = "";
        _this.SUB_SYSTEM_CODE = "";
        _this.MODULE_CODE = "";
        _this.EXECUTE = false;
        _this.CREATE = false;
        _this.EDIT = false;
        _this.DELETE = false;
        _this.PRINT = false;
        _this.VIEW = false;
        _this.CUSTOM1 = false;
        _this.CUSTOM2 = false;
        _this.CUSTOM3 = false;
        _this.CUSTOM4 = false;
        _this.CUSTOM5 = false;
        _this.CUSTOM6 = false;
        _this.CUSTOM7 = false;
        _this.CUSTOM8 = false;
        _this.CUSTOM9 = false;
        _this.ViewImages = false;
        _this.EditImages = false;
        return _this;
    }
    return G_USER_MODULE;
}(SecurityClass));
var G_USER_SUB_SYSTEM = /** @class */ (function (_super) {
    __extends(G_USER_SUB_SYSTEM, _super);
    function G_USER_SUB_SYSTEM() {
        var _this = _super.call(this) || this;
        _this.USER_CODE = "";
        _this.SYSTEM_CODE = "";
        _this.SUB_SYSTEM_CODE = "";
        _this.EXECUTE = false;
        _this.FILTER_STRING = "";
        return _this;
    }
    return G_USER_SUB_SYSTEM;
}(SecurityClass));
var G_USER_SYSTEM = /** @class */ (function (_super) {
    __extends(G_USER_SYSTEM, _super);
    function G_USER_SYSTEM() {
        var _this = _super.call(this) || this;
        _this.USER_CODE = "";
        _this.SYSTEM_CODE = "";
        _this.EXECUTE = false;
        _this.FILTER_STRING = "";
        return _this;
    }
    return G_USER_SYSTEM;
}(SecurityClass));
var I_Control = /** @class */ (function () {
    function I_Control() {
        this.CompCode = 0;
        this.DefSlsVatType = 0;
        this.DefPurVatType = 0;
        this.IsVat = false;
        this.MobileLength = 0;
        this.IDLength = 0;
        this.SendSMS = false;
        this.SendPublicSMS = false;
        this.NotePeriodinSec = 0;
        this.DashBoardPeriodinSec = 0;
        this.MaxYearlyMSGs = 0;
        this.UsedMSGs = 0;
        this.UserTimeZoneUTCDiff = 0;
        this.ServerTimeZoneUTCDiff = 0;
        this.SaudiNationID = 0;
        this.WebCustomerWebsite = false;
        this.MembeshiptStartDate = "";
        this.MembeshipEndDate = "";
        this.MembershipAllanceDays = 0;
        this.MembershipreadOnlyDays = 0;
        this.IsFreePurchaseReturn = false;
        this.IsFreeSalesReturn = false;
        this.ExceedMinPricePassword = "";
        this.CurNameA = "";
        this.CurNameE = "";
        this.CurSmallNameA = "";
        this.CurSmallNameE = "";
        this.GL_VoucherCCType = 0;
        this.GL_VoucherCCDT_Type = 0;
        this.Gl_JournalOpenType = 0;
        this.GL_JournalMonthlyNo = false;
        this.GL_JournalMonthlyNoWidth = 0;
        this.GL_JournalSaveUnbalanced = false;
        this.IsLocalBranchCustomer = false;
        this.SysTimeOut = 0;
        this.NationalityID = 0;
        this.Currencyid = 0;
        this.InvoiceTypeCode = 0;
        this.InvoiceTransCode = 0;
        this.InvoiceWithoutCust = false;
        this.IvoiceDateEditable = false;
        this.InvoiceLineDiscount = false;
        this.InvoiceLineAllowance = false;
        this.InvoiceTotalAllowance = false;
        this.InvoiceTotalCharge = false;
        this.OperationPriceWithVAT = false;
        this.SalesPriceWithVAT = false;
        this.DocPDFFolder = "";
        this.ISCustVendorInGL = false;
        this.AutoupdateSalesPrice = false;
        this.SalePriceAddPerc = 0;
        this.SalePriceMinAddPerc = 0;
        this.IsLocalSalePrice = false;
        this.IsLocalCost = false;
        this.IsRetailCashInvoiceDefAuth = false;
        this.IsRetailCreditInvoiceDefAuth = false;
        this.IsProcessCashInvoiceDefAuth = false;
        this.IsProcessCreditInvoiceDefAuth = false;
        this.IsAccPeriodClose = false;
        this.IsInvPeriodClose = false;
        this.IsFasPeriodClose = false;
        this.RetailInvoicePaymentDef = 0;
        this.OperationInvoicePaymentDef = 0;
    }
    return I_Control;
}());
var G_VatNature = /** @class */ (function (_super) {
    __extends(G_VatNature, _super);
    function G_VatNature() {
        var _this = _super.call(this) || this;
        _this.VatNatID = 0;
        _this.VatNatureCode = "";
        _this.VatNatureDescA = "";
        _this.VatNatureDescE = "";
        _this.VatPrc = 0;
        return _this;
    }
    return G_VatNature;
}(SecurityClass));
var I_G_ItemType = /** @class */ (function (_super) {
    __extends(I_G_ItemType, _super);
    function I_G_ItemType() {
        var _this = _super.call(this) || this;
        _this.CompCode = 0;
        _this.ItemTypeID = 0;
        _this.DescA = "";
        _this.DescL = "";
        _this.ISSales = false;
        _this.IsStock = false;
        _this.IsProduct = false;
        _this.IsIssuetoCC = false;
        _this.IsIssueToProd = false;
        _this.IsPurchase = false;
        _this.IsAvailable = false;
        return _this;
    }
    return I_G_ItemType;
}(SecurityClass));
var A_TmpVoucherProcess = /** @class */ (function (_super) {
    __extends(A_TmpVoucherProcess, _super);
    function A_TmpVoucherProcess() {
        var _this = _super.call(this) || this;
        _this.id = 0;
        _this.CurrentUserCode = "";
        _this.Selected = false;
        _this.COMP_CODE = 0;
        _this.VOUCHER_CODE = 0;
        _this.VOUCHER_DATE = "";
        _this.VOUCHER_DESC = "";
        _this.VOUCHER_STATUS = 0;
        _this.TYPE_CODE = 0;
        _this.REF_CODE = "";
        _this.CREATED_BY = "";
        _this.CREATED_AT = "";
        _this.UPDATED_BY = "";
        _this.UPDATED_AT = "";
        _this.POSTED_BY = "";
        _this.POSTED_AT = "";
        _this.SOURCE_TYPE = 0;
        _this.VOUCHER_DATEH = "";
        _this.AUTHORISED_BY = "";
        _this.AUTHORISED_AT = "";
        _this.TYPE_DESCA = "";
        _this.TYPE_DESCE = "";
        _this.St_DescE = "";
        _this.St_DescA = "";
        _this.Src_DescE = "";
        _this.Src_DescA = "";
        _this.OpCode = 0;
        return _this;
    }
    return A_TmpVoucherProcess;
}(SecurityClass));
var G_AlertLog = /** @class */ (function (_super) {
    __extends(G_AlertLog, _super);
    function G_AlertLog() {
        var _this = _super.call(this) || this;
        _this.AlertID = 0;
        _this.AlertTypeID = 0;
        _this.AlertSubTypeID = 0;
        _this.MemberID = 0;
        _this.MsgType = 0;
        _this.MsgDate = "";
        _this.MsgHeader = "";
        _this.MsgBody = "";
        _this.IsSent = false;
        _this.SendDate = "";
        _this.MobileNo = "";
        _this.Email = "";
        _this.SystemCode = "";
        _this.CompCode = 0;
        _this.TrID = 0;
        _this.AlertType = "";
        return _this;
    }
    return G_AlertLog;
}(SecurityClass));
var G_AlertControl = /** @class */ (function (_super) {
    __extends(G_AlertControl, _super);
    function G_AlertControl() {
        var _this = _super.call(this) || this;
        _this.Compcode = 0;
        _this.SystemCode = "";
        _this.EMAIL_SSL = false;
        _this.EMAIL_Authentication = false;
        _this.EMAIL_SenderName = "";
        _this.EMAIL_Sender = "";
        _this.EMAIL_SenderPassword = "";
        _this.EMAIL_SendorPort = 0;
        _this.EMAIL_SenderSMTP = "";
        _this.SMS_UserName = "";
        _this.SMS_SenderName = "";
        _this.SMS_Password = "";
        _this.MobileNoPreFex = "";
        _this.EmailMaxDaily = 0;
        _this.DefPurVatType = 0;
        _this.SMS_Provider = "";
        return _this;
    }
    return G_AlertControl;
}(SecurityClass));
var G_ModuleHelp = /** @class */ (function (_super) {
    __extends(G_ModuleHelp, _super);
    function G_ModuleHelp() {
        var _this = _super.call(this) || this;
        _this.SYSTEM_CODE = "";
        _this.SUB_SYSTEM_CODE = "";
        _this.MODULE_CODE = "";
        _this.HelpBody_Ar = "";
        _this.HelpBody_En = "";
        return _this;
    }
    return G_ModuleHelp;
}(SecurityClass));
var GQ_GetUserModule = /** @class */ (function (_super) {
    __extends(GQ_GetUserModule, _super);
    function GQ_GetUserModule() {
        var _this = _super.call(this) || this;
        _this.USER_CODE = "";
        _this.SYSTEM_CODE = "";
        _this.SUB_SYSTEM_CODE = "";
        _this.MODULE_CODE = "";
        _this.EXECUTE = false;
        _this.CREATE = false;
        _this.EDIT = false;
        _this.DELETE = false;
        _this.PRINT = false;
        _this.VIEW = false;
        _this.CUSTOM1 = false;
        _this.CUSTOM2 = false;
        _this.CUSTOM3 = false;
        _this.CUSTOM4 = false;
        _this.CUSTOM5 = false;
        _this.CUSTOM6 = false;
        _this.CUSTOM7 = false;
        _this.CUSTOM8 = false;
        _this.CUSTOM9 = false;
        _this.ViewImages = false;
        _this.EditImages = false;
        _this.MENU_NO = "";
        _this.MODULE_DESCE = "";
        _this.MODULE_DESCA = "";
        _this.M_CREATE = false;
        _this.M_EDIT = false;
        _this.M_DELETE = false;
        _this.M_VIEW = false;
        _this.M_PRINT = false;
        _this.M_CUSTOM1 = false;
        _this.M_CUSTOM2 = false;
        _this.M_CUSTOM3 = false;
        _this.M_CUSTOM4 = false;
        _this.M_CUSTOM5 = false;
        _this.M_CUSTOM6 = false;
        _this.M_CUSTOM7 = false;
        _this.M_CUSTOM8 = false;
        _this.M_CUSTOM9 = false;
        _this.CUSTOM1_DESC = "";
        _this.CUSTOM2_DESC = "";
        _this.CUSTOM3_DESC = "";
        _this.CUSTOM4_DESC = "";
        _this.CUSTOM5_DESC = "";
        _this.CUSTOM6_DESC = "";
        _this.CUSTOM7_DESC = "";
        _this.CUSTOM8_DESC = "";
        _this.CUSTOM9_DESC = "";
        _this.AVAILABLE = false;
        _this.M_images_enabled = false;
        return _this;
    }
    return GQ_GetUserModule;
}(SecurityClass));
var G_Noteifications = /** @class */ (function (_super) {
    __extends(G_Noteifications, _super);
    function G_Noteifications() {
        var _this = _super.call(this) || this;
        _this.SYSTEM_CODE = "";
        _this.SUB_SYSTEM_CODE = "";
        _this.MODULE_CODE = "";
        _this.MODULE_DESCE = "";
        _this.MODULE_DESCA = "";
        _this.Remarks = "";
        _this.ISActive = false;
        _this.ActiveIcon = "";
        _this.InActiveIcon = "";
        _this.PageName = "";
        _this.DisplayOrder = 0;
        return _this;
    }
    return G_Noteifications;
}(SecurityClass));
var G_NotificationCompany = /** @class */ (function (_super) {
    __extends(G_NotificationCompany, _super);
    function G_NotificationCompany() {
        var _this = _super.call(this) || this;
        _this.SYSTEM_CODE = "";
        _this.SUB_SYSTEM_CODE = "";
        _this.MODULE_CODE = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.ISActive = false;
        _this.NoteCount = 0;
        return _this;
    }
    return G_NotificationCompany;
}(SecurityClass));
var NoteificationsModel = /** @class */ (function (_super) {
    __extends(NoteificationsModel, _super);
    function NoteificationsModel() {
        var _this = _super.call(this) || this;
        _this.MODULE_CODE = "";
        _this.MODULE_DESCE = "";
        _this.MODULE_DESCA = "";
        _this.NoteCount = 0;
        return _this;
    }
    return NoteificationsModel;
}(SecurityClass));
var A_RecPay_D_AjustmentType = /** @class */ (function (_super) {
    __extends(A_RecPay_D_AjustmentType, _super);
    function A_RecPay_D_AjustmentType() {
        var _this = _super.call(this) || this;
        _this.AdustmentTypeID = 0;
        _this.AdjCode = 0;
        _this.Adj_DescA = "";
        _this.Adj_DescE = "";
        _this.VatType = 0;
        _this.AccountCode = "";
        _this.IsDebit = false;
        _this.IsCustomer = false;
        _this.CompCode = 0;
        _this.StatusFlag = "";
        return _this;
    }
    return A_RecPay_D_AjustmentType;
}(SecurityClass));
var A_ACCOUNT = /** @class */ (function (_super) {
    __extends(A_ACCOUNT, _super);
    function A_ACCOUNT() {
        var _this = _super.call(this) || this;
        _this.COMP_CODE = 0;
        _this.ACC_CODE = "";
        _this.OPGLExpenseAcc = "";
        _this.ACC_DESCA = "";
        _this.ACC_DESCL = "";
        _this.ACC_GROUP = 0;
        _this.ACC_TYPE = 0;
        _this.ACC_LEVEL = 0;
        _this.ACC_ACTIVE = false;
        _this.PARENT_ACC = "";
        _this.DETAIL = false;
        _this.CREATED_BY = "";
        _this.CREATED_AT = "";
        _this.UPDATED_BY = "";
        _this.LAST_UPDATE = "";
        _this.CCDT_TYPE = "";
        _this.CUR_CODE = "";
        _this.StatusFlag = "";
        return _this;
    }
    return A_ACCOUNT;
}(SecurityClass));
var G_LnkVar = /** @class */ (function (_super) {
    __extends(G_LnkVar, _super);
    function G_LnkVar() {
        var _this = _super.call(this) || this;
        _this.Lnktype = "";
        _this.Ser = 0;
        _this.LnkCode = "";
        _this.Acc_DescA = "";
        _this.Acc_DescE = "";
        return _this;
    }
    return G_LnkVar;
}(SecurityClass));
var A_ACCOUNT_YEAR = /** @class */ (function (_super) {
    __extends(A_ACCOUNT_YEAR, _super);
    function A_ACCOUNT_YEAR() {
        var _this = _super.call(this) || this;
        _this.COMP_CODE = 0;
        _this.ACC_CODE = "";
        _this.FIN_YEAR = 0;
        _this.OPENING_BALANCE = 0;
        _this.CREDIT = 0;
        _this.DEBIT = 0;
        _this.ACC_LIMIT = 0;
        _this.REMARKS = "";
        _this.StatusFlag = "";
        return _this;
    }
    return A_ACCOUNT_YEAR;
}(SecurityClass));
var AQ_GetAccount = /** @class */ (function (_super) {
    __extends(AQ_GetAccount, _super);
    function AQ_GetAccount() {
        var _this = _super.call(this) || this;
        _this.COMP_CODE = 0;
        _this.ACC_CODE = "";
        _this.ACC_DESCA = "";
        _this.ACC_DESCL = "";
        _this.ACC_GROUP = 0;
        _this.ACC_TYPE = 0;
        _this.ACC_LEVEL = 0;
        _this.ACC_ACTIVE = false;
        _this.PARENT_ACC = "";
        _this.DETAIL = false;
        _this.CREATED_BY = "";
        _this.CREATED_AT = "";
        _this.UPDATED_BY = "";
        _this.LAST_UPDATE = "";
        _this.CCDT_TYPE = "";
        _this.CUR_CODE = "";
        _this.FIN_YEAR = 0;
        _this.OPENING_BALANCE = 0;
        _this.CREDIT = 0;
        _this.DEBIT = 0;
        _this.ACC_LIMIT = 0;
        _this.REMARKS = "";
        return _this;
    }
    return AQ_GetAccount;
}(SecurityClass));
var A_RecPay_D_Accounts = /** @class */ (function (_super) {
    __extends(A_RecPay_D_Accounts, _super);
    function A_RecPay_D_Accounts() {
        var _this = _super.call(this) || this;
        _this.ExpenseID = 0;
        _this.TrType = 0;
        _this.ExpCode = 0;
        _this.ExpDescA = "";
        _this.ExpDescE = "";
        _this.ExpAccountCode = "";
        _this.CompCode = 0;
        _this.IsActive = false;
        _this.StatusFlag = "";
        return _this;
    }
    return A_RecPay_D_Accounts;
}(SecurityClass));
var A_RecPay_Tr_ReceiptNote = /** @class */ (function (_super) {
    __extends(A_RecPay_Tr_ReceiptNote, _super);
    function A_RecPay_Tr_ReceiptNote() {
        var _this = _super.call(this) || this;
        _this.ReceiptID = 0;
        _this.CashBoxID = 0;
        _this.TrType = 0;
        _this.RecPayTypeId = 0;
        _this.TrNo = 0;
        _this.TrDate = "";
        _this.TrDateH = "";
        _this.Status = 0;
        _this.CustomerID = 0;
        _this.VendorID = 0;
        _this.FromCashBoxID = 0;
        _this.ExpenseID = 0;
        _this.Amount = 0;
        _this.CashAmount = 0;
        _this.CardAmount = 0;
        _this.BankAccountCode = "";
        _this.ReceiptDescA = "";
        _this.ReceiptDescE = "";
        _this.IsPosted = false;
        _this.VoucherNo = 0;
        _this.VoucherType = 0;
        _this.Remarks = "";
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.CheckNo = "";
        _this.TransferNo = "";
        _this.BankName = "";
        _this.BankAcc_Code = "";
        _this.IsDeffered = false;
        _this.DueDate = "";
        _this.CashType = 0;
        return _this;
    }
    return A_RecPay_Tr_ReceiptNote;
}(SecurityClass));
var GQ_GetUserBarnchAccess = /** @class */ (function (_super) {
    __extends(GQ_GetUserBarnchAccess, _super);
    function GQ_GetUserBarnchAccess() {
        var _this = _super.call(this) || this;
        _this.USER_CODE = "";
        _this.COMP_CODE = 0;
        _this.BRA_CODE = 0;
        _this.BRA_DESCL = "";
        _this.BRA_DESCE = "";
        _this.BRA_DESC = "";
        _this.EXECUTE = false;
        _this.CREATE = false;
        _this.EDIT = false;
        _this.DELETE = false;
        _this.PRINT = false;
        return _this;
    }
    return GQ_GetUserBarnchAccess;
}(SecurityClass));
var IQ_GetBoxAdjustmentList = /** @class */ (function (_super) {
    __extends(IQ_GetBoxAdjustmentList, _super);
    function IQ_GetBoxAdjustmentList() {
        var _this = _super.call(this) || this;
        _this.AdjustmentID = 0;
        _this.AdustmentTypeID = 0;
        _this.IsDebit = false;
        _this.IsCustomer = false;
        _this.VendorId = 0;
        _this.CustomerId = 0;
        _this.TrNo;
        _this.TrDate = "";
        _this.TrDateH = "";
        _this.Status = 0;
        _this.Amount = 0;
        _this.VatAmount = 0;
        _this.NetAfterVAT = 0;
        _this.AdjustDescA = "";
        _this.AdjustDescE = "";
        _this.IsPosted = false;
        _this.VoucherNo = 0;
        _this.VoucherType = 0;
        _this.Remarks = "";
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.CustomerCODE = "";
        _this.cus_NameA = "";
        _this.Cus_NameE = "";
        _this.VendorCode = "";
        _this.Vnd_NameA = "";
        _this.Vnd_NameE = "";
        _this.AdjCode = 0;
        _this.Adj_DescA = "";
        _this.Adj_DescE = "";
        _this.DESCRIPTION = "";
        _this.VatPerc = 0;
        _this.VatType = 0;
        _this.InvoiceID = 0;
        _this.InvTotalAmount = 0;
        _this.InvVatAmount = 0;
        _this.InvDiscountAmount = 0;
        _this.InvDiscountPrc = 0;
        _this.InvNetAfterVat = 0;
        _this.DocNo = "";
        _this.DocUUID = "";
        _this.Status_New = "";
        _this.IsDebitNew = "";
        _this.TrTime = "";
        _this.CRDBReasoncode = 0;
        _this.CryptographicStamp;
        _this.PrevInvoiceHash;
        return _this;
    }
    return IQ_GetBoxAdjustmentList;
}(SecurityClass));
var A_RecPay_Tr_Adjustment = /** @class */ (function (_super) {
    __extends(A_RecPay_Tr_Adjustment, _super);
    function A_RecPay_Tr_Adjustment() {
        var _this = _super.call(this) || this;
        _this.AdjustmentID = 0;
        _this.AdustmentTypeID = 0;
        _this.IsDebit = false;
        _this.IsCustomer = false;
        _this.VendorId = 0;
        _this.CustomerId = 0;
        _this.TrNo;
        _this.TrDate = "";
        _this.TrDateH = "";
        _this.Status = 0;
        _this.Amount = 0;
        _this.VatType = 0;
        _this.VatAmount = 0;
        _this.NetAfterVAT = 0;
        _this.AdjustDescA = "";
        _this.AdjustDescE = "";
        _this.IsPosted = false;
        _this.VoucherNo = 0;
        _this.VoucherType = 0;
        _this.Remarks = "";
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.InvoiceID = 0;
        _this.InvTotalAmount = 0;
        _this.InvVatAmount = 0;
        _this.InvDiscountAmount = 0;
        _this.InvDiscountPrc = 0;
        _this.InvNetAfterVat = 0;
        _this.DocNo = "";
        _this.DocUUID = "";
        _this.TrTime = "";
        _this.CryptographicStamp;
        _this.CRDBReasoncode = 0;
        _this.PrevInvoiceHash;
        return _this;
    }
    return A_RecPay_Tr_Adjustment;
}(SecurityClass));
var IQ_GetBoxReceiveList = /** @class */ (function (_super) {
    __extends(IQ_GetBoxReceiveList, _super);
    function IQ_GetBoxReceiveList() {
        var _this = _super.call(this) || this;
        _this.ReceiptID = 0;
        _this.CashBoxID = 0;
        _this.TrType = 0;
        _this.RecPayTypeId = 0;
        _this.TrNo = 0;
        _this.TrDate = "";
        _this.TrDateH = "";
        _this.Status = 0;
        _this.CustomerID = 0;
        _this.VendorID = 0;
        _this.FromCashBoxID = 0;
        _this.ExpenseID = 0;
        _this.Amount = 0;
        _this.CashAmount = 0;
        _this.CardAmount = 0;
        _this.BankAccountCode = "";
        _this.ReceiptDescA = "";
        _this.ReceiptDescE = "";
        _this.IsPosted = false;
        _this.VoucherNo = 0;
        _this.VoucherType = 0;
        _this.Remarks = "";
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.CustomerCODE = "";
        _this.cus_NameA = "";
        _this.cus_NameE = "";
        _this.Bank_Acc_DescA = "";
        _this.Bank_ACC_DescE = "";
        _this.CashBox_DescA = "";
        _this.CashBox_DescE = "";
        _this.VendorCode = "";
        _this.Ven_NameA = "";
        _this.Ven_NameE = "";
        _this.ExpCode = 0;
        _this.Exp_DescA = "";
        _this.Exp_DescE = "";
        _this.Bef_ID = 0;
        _this.Bef_Code = 0;
        _this.Bef_DescA = "";
        _this.Bef_DescE = "";
        _this.Type_DescA = "";
        _this.Type_DescE = "";
        _this.CashT_DescA = "";
        _this.CashT_DescE = "";
        _this.CheckNo = "";
        _this.TransferNo = "";
        _this.BankName = "";
        _this.BankAcc_Code = "";
        _this.IsDeffered = false;
        _this.DueDate = "";
        _this.CashType = 0;
        _this.Bnk_acc_DescE = "";
        _this.ACC_DESCL = "";
        _this.Status_New = "";
        return _this;
    }
    return IQ_GetBoxReceiveList;
}(SecurityClass));
var IQ_GetPurchaseOrder = /** @class */ (function (_super) {
    __extends(IQ_GetPurchaseOrder, _super);
    function IQ_GetPurchaseOrder() {
        var _this = _super.call(this) || this;
        _this.PurOrderID = 0;
        _this.TrNo = 0;
        _this.RefNO = "";
        _this.TrDate = "";
        _this.TrDateH = "";
        _this.Status = 0;
        _this.SalesmanId = 0;
        _this.VendorID = 0;
        _this.VATType = 0;
        _this.IsCash = false;
        _this.Remarks = "";
        _this.Total = 0;
        _this.DiscountPrcnt = 0;
        _this.DiscountAmount = 0;
        _this.VatAmount = 0;
        _this.NetDue = 0;
        _this.IsPosted = false;
        _this.VoucherNo = 0;
        _this.VoucherType = 0;
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.CurrencyID = 0;
        _this.Slsm_NameA = "";
        _this.Slsm_NameE = "";
        _this.Vnd_NameA = "";
        _this.vnd_NameE = "";
        _this.VendorCode = "";
        _this.sls_Code = "";
        _this.IsReceived = false;
        _this.StatusDesc = "";
        _this.IsReceivedDesc = "";
        _this.DliveryConditions = "";
        _this.ShipmentConditions = "";
        _this.ValidityPeriod = "";
        return _this;
    }
    return IQ_GetPurchaseOrder;
}(SecurityClass));
var IQ_GetPurchaseOrderDetail = /** @class */ (function (_super) {
    __extends(IQ_GetPurchaseOrderDetail, _super);
    function IQ_GetPurchaseOrderDetail() {
        var _this = _super.call(this) || this;
        _this.PurOrderDetailsID = 0;
        _this.PurOrderID = 0;
        _this.Serial = 0;
        _this.ItemID = 0;
        _this.UnitID = 0;
        _this.POStockQty = 0;
        _this.POQty = 0;
        _this.UnitPrice = 0;
        _this.VatPrc = 0;
        _this.VatAmount = 0;
        _this.NetUnitCost = 0;
        _this.BonusQty = 0;
        _this.StockAvailableQty = 0;
        _this.StockUnitCost = 0;
        _this.TotRecQty = 0;
        _this.ItemCode = "";
        _this.itm_DescA = "";
        _this.itm_DescE = "";
        _this.FamilyCode = "";
        _this.Fm_DescA = "";
        _this.Fm_DescE = "";
        _this.UomCode = "";
        _this.Uom_DescA = "";
        _this.UOM_DescE = "";
        return _this;
    }
    return IQ_GetPurchaseOrderDetail;
}(SecurityClass));
var IQ_GetPurReceiveList = /** @class */ (function (_super) {
    __extends(IQ_GetPurReceiveList, _super);
    function IQ_GetPurReceiveList() {
        var _this = _super.call(this) || this;
        _this.ReceiveID = 0;
        _this.TrNo = 0;
        _this.RefNO = "";
        _this.RefTrID = 0;
        _this.TrDate = "";
        _this.TrDateH = "";
        _this.TrType = 0;
        _this.IsCash = false;
        _this.SalesmanId = 0;
        _this.StoreID = 0;
        _this.VatAmount = 0;
        _this.VATType = 0;
        _this.DiscountAmount = 0;
        _this.Status = 0;
        _this.IsPosted = false;
        _this.VoucherNo = 0;
        _this.VoucherType = 0;
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.Slsm_Code = "";
        _this.Slsm_DescA = "";
        _this.Slsm_DescE = "";
        _this.Vnd_NameA = "";
        _this.Box_DescA = "";
        _this.Box_DescE = "";
        _this.VendorID = 0;
        _this.VendorInvNo = "";
        _this.PoDate = "";
        _this.PoNo = "";
        _this.Remarks = "";
        _this.Total = 0;
        _this.DiscountPrcnt = 0;
        _this.NetDue = 0;
        _this.NetAdditionCost = 0;
        _this.VendorCode = "";
        _this.PurRecType = 0;
        _this.CashBoxID = 0;
        _this.NetAdditionVat = 0;
        _this.Vnd_NameE = "";
        _this.type_DescA = "";
        _this.Type_DescE = "";
        _this.CashPaidAmount = 0;
        _this.RemainAmount = 0;
        _this.PurOrderID = 0;
        _this.PO_TrNo = 0;
        _this.PO_TrDate = "";
        return _this;
    }
    return IQ_GetPurReceiveList;
}(SecurityClass));
var KQ_GetAlertNoteLog = /** @class */ (function (_super) {
    __extends(KQ_GetAlertNoteLog, _super);
    function KQ_GetAlertNoteLog() {
        var _this = _super.call(this) || this;
        _this.NoteType = 0;
        _this.NoteSubType = 0;
        _this.MemberID = 0;
        _this.MsgDate = "";
        _this.MsgText = "";
        _this.IsSent = false;
        _this.AlertID = 0;
        return _this;
    }
    return KQ_GetAlertNoteLog;
}(SecurityClass));
//class KQ_GetNews extends SecurityClass {
//    constructor() {
//        super();
//        this.NewsID = 0;
//        this.NewsTypeCode = 0;
//        this.NewsToCode = 0;
//        this.NewsDate = "";
//        this.NewsExpiry = "";
//        this.NewsText = "";
//        this.CompCode = 0;
//        this.BranchCode = 0;
//        this.NewsType_DescA = "";
//        this.NewsType_DescE = "";
//        this.NewsTo_DescA = "";
//        this.NewsTo_DescE = "";
//        this.SubCode = "";
//        this.Selected = false;
//    }
//    public NewsID: number;
//    public NewsTypeCode: number;
//    public NewsToCode: number;
//    public NewsDate: string;
//    public NewsExpiry: string;
//    public NewsText: string;
//    public CompCode: number;
//    public BranchCode: number;
//    public NewsType_DescA: string;
//    public NewsType_DescE: string;
//    public NewsTo_DescA: string;
//    public NewsTo_DescE: string;
//    public SubCode: string;
//    public Selected: boolean;
//}
var G_News = /** @class */ (function (_super) {
    __extends(G_News, _super);
    function G_News() {
        var _this = _super.call(this) || this;
        _this.NewsID = 0;
        _this.NewsTypeCode = 0;
        _this.NewsToCode = 0;
        _this.NewsDate = "";
        _this.NewsExpiry = "";
        _this.NewsText = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        return _this;
    }
    return G_News;
}(SecurityClass));
var Stk_TR_IssueToCCMasterDetails = /** @class */ (function (_super) {
    __extends(Stk_TR_IssueToCCMasterDetails, _super);
    function Stk_TR_IssueToCCMasterDetails() {
        var _this = _super.call(this) || this;
        _this.I_Stk_TR_IssueToCC = new I_Stk_TR_IssueToCC();
        _this.I_Stk_TR_IssueToCCDetails = new Array();
        return _this;
    }
    return Stk_TR_IssueToCCMasterDetails;
}(SecurityClass));
var SlsInvoiceMasterDetails = /** @class */ (function (_super) {
    __extends(SlsInvoiceMasterDetails, _super);
    function SlsInvoiceMasterDetails() {
        var _this = _super.call(this) || this;
        _this.I_Sls_TR_Invoice = new I_Sls_TR_Invoice();
        _this.I_Sls_TR_InvoiceItems = new Array();
        return _this;
    }
    return SlsInvoiceMasterDetails;
}(SecurityClass));
var PurReceiveMasterDetails = /** @class */ (function (_super) {
    __extends(PurReceiveMasterDetails, _super);
    function PurReceiveMasterDetails() {
        var _this = _super.call(this) || this;
        _this.I_Pur_TR_Receive = new I_Pur_TR_Receive();
        _this.I_Pur_TR_ReceiveItems = new Array();
        _this.I_Pur_Tr_ReceiveCharges = new Array();
        return _this;
    }
    return PurReceiveMasterDetails;
}(SecurityClass));
var Rec_D_CustomerDetail = /** @class */ (function (_super) {
    __extends(Rec_D_CustomerDetail, _super);
    function Rec_D_CustomerDetail() {
        var _this = _super.call(this) || this;
        _this.A_Rec_D_Customer = new A_Rec_D_Customer();
        _this.A_Rec_D_CustomerDoc = new Array();
        return _this;
    }
    return Rec_D_CustomerDetail;
}(SecurityClass));
var I_Item_Year_Details = /** @class */ (function (_super) {
    __extends(I_Item_Year_Details, _super);
    function I_Item_Year_Details() {
        var _this = _super.call(this) || this;
        _this.I_Item = new Array();
        _this.I_ItemYear = new Array();
        return _this;
    }
    return I_Item_Year_Details;
}(SecurityClass));
var IQ_GetPurReceiveMasterDisplay = /** @class */ (function (_super) {
    __extends(IQ_GetPurReceiveMasterDisplay, _super);
    function IQ_GetPurReceiveMasterDisplay() {
        var _this = _super.call(this) || this;
        _this.IQ_GetPurReceiveItem = new Array();
        _this.IQ_GetPurReceiveCharge = new Array();
        return _this;
    }
    return IQ_GetPurReceiveMasterDisplay;
}(SecurityClass));
var A_ACCOUNT_AND_YEAR = /** @class */ (function (_super) {
    __extends(A_ACCOUNT_AND_YEAR, _super);
    function A_ACCOUNT_AND_YEAR() {
        var _this = _super.call(this) || this;
        _this.A_ACCOUNT = new Array();
        _this.A_ACCOUNT_YEAR = new A_ACCOUNT_YEAR();
        return _this;
    }
    return A_ACCOUNT_AND_YEAR;
}(SecurityClass));
var AllGetOperationMasterDisplay = /** @class */ (function (_super) {
    __extends(AllGetOperationMasterDisplay, _super);
    function AllGetOperationMasterDisplay() {
        var _this = _super.call(this) || this;
        _this.IQ_GetOperationItemInfo = new Array();
        _this.IQ_GetOperationCharges = new Array();
        _this.I_TR_OperationDeposit = new Array();
        _this.TR_OperationSalesman = new Array();
        _this.TR_OperationSalesmanItem = new Array();
        return _this;
    }
    return AllGetOperationMasterDisplay;
}(SecurityClass));
var I_Sls_TR_Invoice = /** @class */ (function (_super) {
    __extends(I_Sls_TR_Invoice, _super);
    function I_Sls_TR_Invoice() {
        var _this = _super.call(this) || this;
        _this.InvoiceID = 0;
        _this.TrNo = 0;
        _this.RefNO = "";
        _this.RefTrID = 0;
        _this.TrDate = "";
        _this.TrDateH = "";
        _this.TrType = 0;
        _this.IsCash = false;
        _this.SlsInvType = 0;
        _this.SlsInvSrc = 0;
        _this.CashBoxID = 0;
        _this.CustomerId = 0;
        _this.CustomerName = "";
        _this.CustomerMobileNo = "";
        _this.SalesmanId = 0;
        _this.StoreId = 0;
        _this.OperationId = 0;
        _this.TotalAmount = 0;
        _this.VatAmount = 0;
        _this.VatType = 0;
        _this.DiscountAmount = 0;
        _this.DiscountPrc = 0;
        _this.NetAfterVat = 0;
        _this.CommitionAmount = 0;
        _this.CashAmount = 0;
        _this.CardAmount = 0;
        _this.BankTfAmount = 0;
        _this.BankAccount = "";
        _this.TotalPaidAmount = 0;
        _this.RemainAmount = 0;
        _this.Remark = "";
        _this.Status = 0;
        _this.IsPosted = false;
        _this.VoucherNo = 0;
        _this.VoucherType = 0;
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.DocNo = "";
        _this.DocUUID = "";
        _this.TrTime = "";
        _this.InvoiceTypeCode = 0;
        _this.InvoiceTransCode = 0;
        _this.TaxNotes = "";
        _this.TaxCurrencyID = 0;
        _this.InvoiceCurrenyID = 0;
        _this.ContractNo = "";
        _this.PurchaseorderNo = "";
        _this.GlobalInvoiceCounter = 0;
        _this.PrevInvoiceHash;
        _this.QRCode;
        _this.CryptographicStamp;
        _this.DeliveryDate = "";
        _this.DeliveryEndDate = "";
        _this.PaymentMeansTypeCode = 0;
        _this.CRDBReasoncode = 0;
        _this.PaymentTerms = "";
        _this.PaymentTermsID = 0;
        _this.AllowAmount = 0;
        _this.AllowPrc = 0;
        _this.AllowBase = 0;
        _this.AllowVatNatID = 0;
        _this.AllowVatPrc = 0;
        _this.AllowAfterVat = 0;
        _this.AllowReason = "";
        _this.AllowCode = 0;
        _this.ChargeAmount = 0;
        _this.ChargePrc = 0;
        _this.ChargeBase = 0;
        _this.ChargeVatNatID = 0;
        _this.ChargeVatPrc = 0;
        _this.ChargeAfterVat = 0;
        _this.ChargeReason = "";
        _this.ChargeCode = 0;
        _this.ItemTotal = 0;
        _this.ItemAllowTotal = 0;
        _this.ItemDiscountTotal = 0;
        _this.ItemVatTotal = 0;
        _this.RoundingAmount = 0;
        _this.SalesPersonId = 0;
        return _this;
    }
    return I_Sls_TR_Invoice;
}(SecurityClass));
var I_Sls_TR_InvoiceItems = /** @class */ (function (_super) {
    __extends(I_Sls_TR_InvoiceItems, _super);
    function I_Sls_TR_InvoiceItems() {
        var _this = _super.call(this) || this;
        _this.InvoiceItemID = 0;
        _this.InvoiceID = 0;
        _this.ItemID = 0;
        _this.UomID = 0;
        _this.InvoiceSoldQty = 0;
        _this.SoldQty = 0;
        _this.Unitprice = 0;
        _this.DiscountPrc = 0;
        _this.DiscountAmount = 0;
        _this.NetUnitPrice = 0;
        _this.ItemTotal = 0;
        _this.VatPrc = 0;
        _this.VatAmount = 0;
        _this.NetAfterVat = 0;
        _this.StockSoldQty = 0;
        _this.StockUnitCost = 0;
        _this.VatApplied = 0;
        _this.TotRetQty = 0;
        _this.Serial = 0;
        _this.AllowAmount = 0;
        _this.AllowancePrc = 0;
        _this.AllowanceBase = 0;
        _this.AllowReason = "";
        _this.AllowCode = 0;
        _this.BaseQty = 0;
        _this.BaseQtyUomid = 0;
        _this.BaseQtyPrice = 0;
        _this.BaseQtyDiscount = 0;
        _this.DiscountPrcBase = 0;
        _this.DiscountVatNatID = 0;
        _this.Discountreason = "";
        _this.DiscountCode = 0;
        _this.ItemNetAmount = 0;
        _this.ChargeAmount = 0;
        _this.ChargePrc = 0;
        _this.ChargeBase = 0;
        _this.ChargeVatNatID = 0;
        _this.ChargeVatPrc = 0;
        _this.ChargeAfterVat = 0;
        _this.ChargeReason = "";
        _this.ChargeCode = 0;
        _this.VatNatID = 0;
        _this.UnitpriceWithVat = 0;
        _this.NetUnitPriceWithVat = 0;
        _this.Name_Item = "";
        _this.MinUnitPrice = 0;
        _this.ItemFamilyID = 0;
        _this.Name_ItemFamily = "";
        _this.OnhandQty = 0;
        _this.StatusFlag = "";
        return _this;
    }
    return I_Sls_TR_InvoiceItems;
}(SecurityClass));
var IQ_GetSlsInvoiceStatistic = /** @class */ (function (_super) {
    __extends(IQ_GetSlsInvoiceStatistic, _super);
    function IQ_GetSlsInvoiceStatistic() {
        var _this = _super.call(this) || this;
        _this.InvoiceID = 0;
        _this.TrNo = 0;
        _this.RefNO = "";
        _this.RefTrID = 0;
        _this.TrDate = "";
        _this.TrDateH = "";
        _this.TrType = 0;
        _this.IsCash = false;
        _this.SlsInvType = 0;
        _this.SlsInvSrc = 0;
        _this.CashBoxID = 0;
        _this.CustomerId = 0;
        _this.CustomerName = "";
        _this.CustomerMobileNo = "";
        _this.SalesmanId = 0;
        _this.StoreId = 0;
        _this.OperationId = 0;
        _this.TotalAmount = 0;
        _this.VatAmount = 0;
        _this.VatType = 0;
        _this.DiscountAmount = 0;
        _this.DiscountPrc = 0;
        _this.NetAfterVat = 0;
        _this.CommitionAmount = 0;
        _this.CashAmount = 0;
        _this.CardAmount = 0;
        _this.BankTfAmount = 0;
        _this.BankAccount = "";
        _this.TotalPaidAmount = 0;
        _this.RemainAmount = 0;
        _this.Remark = "";
        _this.Status = 0;
        _this.IsPosted = false;
        _this.VoucherNo = 0;
        _this.VoucherType = 0;
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.Slsm_Code = "";
        _this.Slsm_DescA = "";
        _this.Slsm_DescE = "";
        _this.Cus_Code = "";
        _this.Cus_NameA = "";
        _this.Cus_NameE = "";
        _this.Box_DescA = "";
        _this.Box_DescE = "";
        _this.Line_Count = 0;
        _this.Item_Count = 0;
        _this.Tot_Qty = 0;
        _this.Tot_Amount = 0;
        _this.Tot_VAT = 0;
        _this.Tot_Net = 0;
        _this.tot_RetQty = 0;
        _this.returnTypeDesciption = "";
        _this.statusDesciption = "";
        _this.IsCashDesciption = "";
        _this.operationName = "";
        _this.AllowAmount = 0;
        _this.AllowPrc = 0;
        _this.AllowBase = 0;
        _this.AllowVatNatID = 0;
        _this.AllowVatPrc = 0;
        _this.AllowAfterVat = 0;
        _this.AllowReason = "";
        _this.AllowCode = 0;
        _this.ChargeAmount = 0;
        _this.ChargePrc = 0;
        _this.ChargeBase = 0;
        _this.ChargeVatNatID = 0;
        _this.ChargeVatPrc = 0;
        _this.ChargeAfterVat = 0;
        _this.ChargeReason = "";
        _this.ContractNo = "";
        _this.PurchaseorderNo = "";
        _this.DeliveryDate = "";
        _this.DeliveryEndDate = "";
        _this.TaxNotes = "";
        _this.ChargeCode = 0;
        _this.InvoiceTypeCode = 0;
        _this.InvoiceTransCode = 0;
        _this.SalesPersonId = 0;
        _this.DocNo = "";
        _this.TrTime = "";
        _this.DocUUID = "";
        return _this;
    }
    return IQ_GetSlsInvoiceStatistic;
}(SecurityClass));
var IQ_GetSlsInvoiceItem = /** @class */ (function (_super) {
    __extends(IQ_GetSlsInvoiceItem, _super);
    function IQ_GetSlsInvoiceItem() {
        var _this = _super.call(this) || this;
        _this.InvoiceItemID = 0;
        _this.InvoiceID = 0;
        _this.ItemID = 0;
        _this.UomID = 0;
        _this.SoldQty = 0;
        _this.Unitprice = 0;
        _this.DiscountPrc = 0;
        _this.DiscountAmount = 0;
        _this.NetUnitPrice = 0;
        _this.ItemTotal = 0;
        _this.VatPrc = 0;
        _this.VatAmount = 0;
        _this.NetAfterVat = 0;
        _this.StockSoldQty = 0;
        _this.StockUnitCost = 0;
        _this.VatApplied = 0;
        _this.TotRetQty = 0;
        _this.it_itemCode = "";
        _this.it_DescA = "";
        _this.CompCode = 0;
        _this.It_DescE = "";
        _this.ItFm_Code = "";
        _this.ItFm_DescA = "";
        _this.ItFm_DescE = "";
        _this.Cat_Code = "";
        _this.Cat_DescA = "";
        _this.Cat_DescE = "";
        _this.Uom_Code = "";
        _this.Uom_DescA = "";
        _this.Uom_DescE = "";
        _this.ItemFamilyID = 0;
        _this.InvoiceSoldQty = 0;
        _this.Serial = 0;
        _this.AllowAmount = 0;
        _this.AllowancePrc = 0;
        _this.AllowanceBase = 0;
        _this.AllowReason = "";
        _this.AllowCode = 0;
        _this.BaseQty = 0;
        _this.BaseQtyUomid = 0;
        _this.BaseQtyPrice = 0;
        _this.BaseQtyDiscount = 0;
        _this.DiscountPrcBase = 0;
        _this.DiscountVatNatID = 0;
        _this.Discountreason = "";
        _this.DiscountCode = 0;
        _this.ItemNetAmount = 0;
        _this.ChargeAmount = 0;
        _this.ChargePrc = 0;
        _this.ChargeBase = 0;
        _this.ChargeVatNatID = 0;
        _this.ChargeVatPrc = 0;
        _this.ChargeAfterVat = 0;
        _this.ChargeReason = "";
        _this.ChargeCode = 0;
        _this.VatNatID = 0;
        _this.UnitpriceWithVat = 0;
        _this.NetUnitPriceWithVat = 0;
        return _this;
    }
    return IQ_GetSlsInvoiceItem;
}(SecurityClass));
var IQ_GetSlsInvoiceList = /** @class */ (function (_super) {
    __extends(IQ_GetSlsInvoiceList, _super);
    function IQ_GetSlsInvoiceList() {
        var _this = _super.call(this) || this;
        _this.InvoiceID = 0;
        _this.TrNo = 0;
        _this.RefNO = "";
        _this.RefTrID = 0;
        _this.TrDate = "";
        _this.TrDateH = "";
        _this.TrType = 0;
        _this.IsCash = false;
        _this.SlsInvType = 0;
        _this.SlsInvSrc = 0;
        _this.CashBoxID = 0;
        _this.CustomerId = 0;
        _this.CustomerName = "";
        _this.CustomerMobileNo = "";
        _this.SalesmanId = 0;
        _this.StoreId = 0;
        _this.OperationId = 0;
        _this.TotalAmount = 0;
        _this.VatAmount = 0;
        _this.VatType = 0;
        _this.DiscountAmount = 0;
        _this.DiscountPrc = 0;
        _this.NetAfterVat = 0;
        _this.CommitionAmount = 0;
        _this.CashAmount = 0;
        _this.CardAmount = 0;
        _this.BankTfAmount = 0;
        _this.BankAccount = "";
        _this.TotalPaidAmount = 0;
        _this.RemainAmount = 0;
        _this.Remark = "";
        _this.Status = 0;
        _this.IsPosted = false;
        _this.VoucherNo = 0;
        _this.VoucherType = 0;
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.Slsm_Code = "";
        _this.Slsm_DescA = "";
        _this.Slsm_DescE = "";
        _this.Cus_Code = "";
        _this.Cus_NameA = "";
        _this.Cus_NameE = "";
        _this.Box_DescA = "";
        _this.Box_DescE = "";
        _this.DocNo = "";
        _this.DocUUID = "";
        _this.TrTime = "";
        _this.InvoiceTypeCode = 0;
        _this.InvoiceTransCode = 0;
        _this.TaxNotes = "";
        _this.TaxCurrencyID = 0;
        _this.InvoiceCurrenyID = 0;
        _this.ContractNo = "";
        _this.PurchaseorderNo = "";
        _this.GlobalInvoiceCounter = 0;
        _this.PrevInvoiceHash;
        _this.QRCode;
        _this.CryptographicStamp;
        _this.DeliveryDate = "";
        _this.DeliveryEndDate = "";
        _this.PaymentMeansTypeCode = 0;
        _this.CRDBReasoncode = 0;
        _this.PaymentTerms = "";
        _this.PaymentTermsID = 0;
        _this.AllowAmount = 0;
        _this.AllowPrc = 0;
        _this.AllowBase = 0;
        _this.AllowVatNatID = 0;
        _this.AllowVatPrc = 0;
        _this.AllowAfterVat = 0;
        _this.AllowReason = "";
        _this.AllowCode = 0;
        _this.ChargeAmount = 0;
        _this.ChargePrc = 0;
        _this.ChargeBase = 0;
        _this.ChargeVatNatID = 0;
        _this.ChargeVatPrc = 0;
        _this.ChargeAfterVat = 0;
        _this.ChargeReason = "";
        _this.ChargeCode = 0;
        _this.ItemTotal = 0;
        _this.ItemAllowTotal = 0;
        _this.ItemDiscountTotal = 0;
        _this.ItemVatTotal = 0;
        _this.RoundingAmount = 0;
        return _this;
    }
    return IQ_GetSlsInvoiceList;
}(SecurityClass));
var I_TR_OperationItems = /** @class */ (function (_super) {
    __extends(I_TR_OperationItems, _super);
    function I_TR_OperationItems() {
        var _this = _super.call(this) || this;
        _this.OperationItemID = 0;
        _this.OperationID = 0;
        _this.ItemID = 0;
        _this.ReceivedQty = 0;
        _this.SoldQty = 0;
        _this.ScrapQty = 0;
        _this.Est_CostPrice = 0;
        _this.Est_SalesPrice = 0;
        _this.Min_SalesPrice = 0;
        _this.OnhandQty = 0;
        _this.Remarks = "";
        _this.StatusFlag = "";
        return _this;
    }
    return I_TR_OperationItems;
}(SecurityClass));
var I_TR_OperationDeposit = /** @class */ (function (_super) {
    __extends(I_TR_OperationDeposit, _super);
    function I_TR_OperationDeposit() {
        var _this = _super.call(this) || this;
        _this.OperationDepositID = 0;
        _this.OperationID = 0;
        _this.SalesmanId = 0;
        _this.ItemID = 0;
        _this.Acc_Code = "";
        _this.DepositAmount = 0;
        _this.DepositDate = "";
        _this.Remarks = "";
        _this.DepositType = 0;
        _this.CashBoxID = 0;
        _this.StatusFlag = "";
        return _this;
    }
    return I_TR_OperationDeposit;
}(SecurityClass));
var IQ_GetOperationDepsit = /** @class */ (function (_super) {
    __extends(IQ_GetOperationDepsit, _super);
    function IQ_GetOperationDepsit() {
        var _this = _super.call(this) || this;
        _this.OperationDepositID = 0;
        _this.OperationID = 0;
        _this.ItemID = 0;
        _this.Acc_Code = "";
        _this.DepositAmount = 0;
        _this.DepositDate = "";
        _this.Remarks = "";
        _this.DepositType = 0;
        _this.CashBoxID = 0;
        _this.CashBox_DescA = "";
        _this.CashBox_DescE = "";
        _this.ACC_DESCA = "";
        _this.ACC_DESCL = "";
        _this.SalesmanId = 0;
        _this.SalesmanCode = "";
        _this.Sls_NameA = "";
        _this.sls_NameE = "";
        _this.StatusFlag = "";
        return _this;
    }
    return IQ_GetOperationDepsit;
}(SecurityClass));
var I_TR_OperationCharges = /** @class */ (function (_super) {
    __extends(I_TR_OperationCharges, _super);
    function I_TR_OperationCharges() {
        var _this = _super.call(this) || this;
        _this.OperationExpensesID = 0;
        _this.OperationID = 0;
        _this.Serial = 0;
        _this.ChargeID = 0;
        _this.Amount = 0;
        _this.VatAmount = 0;
        _this.VatType = 0;
        _this.VatPrc = 0;
        _this.NetAtferVat = 0;
        _this.isPaidByVendor = false;
        _this.RefInvoiceNo = "";
        _this.RefInvoiceDate = "";
        _this.VendorID = 0;
        _this.StatusFlag = "";
        _this.CashBoxID = 0;
        return _this;
    }
    return I_TR_OperationCharges;
}(SecurityClass));
var I_TR_Operation = /** @class */ (function (_super) {
    __extends(I_TR_Operation, _super);
    function I_TR_Operation() {
        var _this = _super.call(this) || this;
        _this.OperationID = 0;
        _this.TrNo = 0;
        _this.RefNO = "";
        _this.TrDate = "";
        _this.ClearanceDate = "";
        _this.TrDateH = "";
        _this.TruckNo = "";
        _this.PortName = "";
        _this.PaperPurchaseValue = 0;
        _this.NationalityID = 0;
        _this.VendorID = 0;
        _this.Goods_Desc = "";
        _this.Remark = "";
        _this.Status = 0;
        _this.IsPosted = false;
        _this.VoucherNo = 0;
        _this.VoucherType = 0;
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.OpenAt = "";
        _this.OpenBy = "";
        _this.CloseAt = "";
        _this.CloseBy = "";
        _this.User_Code = "";
        _this.SalesmanId = 0;
        _this.CompanyCommitionPrc = 0;
        _this.Close_CompanyCommitionPrc = 0;
        _this.Close_TrDate = "";
        _this.Close_TotalSalesCash = 0;
        _this.Close_TotalSalesCashVAT = 0;
        _this.Close_TotalSalesCredit = 0;
        _this.Close_TotalSalesCreditVAT = 0;
        _this.Close_CashOnhand = 0;
        _this.Close_CashOnBank = 0;
        _this.Close_BankAccNo = "";
        _this.Close_TotalSales = 0;
        _this.Close_Marketting = 0;
        _this.Close_TotalExpenses = 0;
        _this.Close_Adjustment = 0;
        _this.Close_AdjustmentRemarks = "";
        _this.Close_CompanyCommition = 0;
        _this.Close_purchaseValue = 0;
        _this.Close_SalesManCommition = 0;
        _this.Close_NetProfit = 0;
        _this.Close_Remarks = "";
        _this.IsGenerated = false;
        _this.PolicyNo = "";
        _this.CustomNo = "";
        _this.VatType = 0;
        _this.VatPrc = 0;
        _this.VatAmount = 0;
        _this.Close_AdjTotalSales = 0;
        _this.Close_Coolingandstorage = 0;
        _this.Close_TotalQtyRec = 0;
        _this.Close_TotalQtySold = 0;
        _this.Close_TotalQtyScrap = 0;
        return _this;
    }
    return I_TR_Operation;
}(SecurityClass));
var IQ_GetOperationItemInfo_New = /** @class */ (function () {
    function IQ_GetOperationItemInfo_New() {
        this.ItemID = 0;
        this.Itm_DescA = "";
        this.Itm_DescE = "";
        this.Family_DescA = "";
        this.Family_DescE = "";
        this.ItemFamilyID = 0;
        this.Min_SalesPrice = 0;
        this.OnhandQty = 0;
        this.Est_SalesPrice = 0;
    }
    return IQ_GetOperationItemInfo_New;
}());
var IQ_GetOperationItemInfo = /** @class */ (function (_super) {
    __extends(IQ_GetOperationItemInfo, _super);
    function IQ_GetOperationItemInfo() {
        var _this = _super.call(this) || this;
        _this.ItemCode = "";
        _this.Itm_DescA = "";
        _this.Itm_DescE = "";
        _this.UomID = 0;
        _this.ItemFamilyID = 0;
        _this.CompCode = 0;
        _this.RefItemCode = "";
        _this.FirstEntryDate = "";
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.LastBarCodeSeq = 0;
        _this.BarCodePrefix = "";
        _this.OnhandQty = 0;
        _this.Uom_DescA = "";
        _this.Uom_DescE = "";
        _this.FamilyCode = "";
        _this.Family_DescA = "";
        _this.Family_DescE = "";
        _this.CatID = 0;
        _this.OperationItemID = 0;
        _this.OperationID = 0;
        _this.ItemID = 0;
        _this.ReceivedQty = 0;
        _this.SoldQty = 0;
        _this.ScrapQty = 0;
        _this.Est_CostPrice = 0;
        _this.Est_SalesPrice = 0;
        _this.Min_SalesPrice = 0;
        _this.Expr1 = "";
        _this.TotalSales = 0;
        _this.Close_SoldQty = 0;
        _this.Close_ScrapQty = 0;
        _this.Close_OnhandQty = 0;
        _this.Close_TotalSales = 0;
        return _this;
    }
    return IQ_GetOperationItemInfo;
}(SecurityClass));
var IQ_GetOperationCharges = /** @class */ (function (_super) {
    __extends(IQ_GetOperationCharges, _super);
    function IQ_GetOperationCharges() {
        var _this = _super.call(this) || this;
        _this.ChargeID = 0;
        _this.Amount = 0;
        _this.VatAmount = 0;
        _this.VatType = 0;
        _this.VatPrc = 0;
        _this.NetAtferVat = 0;
        _this.isPaidByVendor = false;
        _this.RefInvoiceNo = "";
        _this.RefInvoiceDate = "";
        _this.VendorID = 0;
        _this.CostAddCode = 0;
        _this.DESCA = "";
        _this.DESCL = "";
        _this.IsAddition = false;
        _this.VendorCode = "";
        _this.Vnd_NameA = "";
        _this.Vnd_NameE = "";
        _this.Serial = 0;
        _this.OperationExpensesID = 0;
        _this.OperationID = 0;
        _this.CashBox_DescA = "";
        _this.CashBox_DescE = "";
        return _this;
    }
    return IQ_GetOperationCharges;
}(SecurityClass));
var IQ_GetOperation = /** @class */ (function (_super) {
    __extends(IQ_GetOperation, _super);
    function IQ_GetOperation() {
        var _this = _super.call(this) || this;
        _this.OperationID = 0;
        _this.TrNo = 0;
        _this.RefNO = "";
        _this.TrDate = "";
        _this.TrDateH = "";
        _this.TruckNo = "";
        _this.PortName = "";
        _this.PaperPurchaseValue = 0;
        _this.NationalityID = 0;
        _this.VendorID = 0;
        _this.Goods_Desc = "";
        _this.Remark = "";
        _this.Status = 0;
        _this.IsPosted = false;
        _this.VoucherNo = 0;
        _this.VoucherType = 0;
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.OpenAt = "";
        _this.OpenBy = "";
        _this.CloseAt = "";
        _this.CloseBy = "";
        _this.User_Code = "";
        _this.SalesmanId = 0;
        _this.CompanyCommitionPrc = 0;
        _this.Close_CompanyCommitionPrc = 0;
        _this.Close_TrDate = "";
        _this.Close_TotalSalesCash = 0;
        _this.Close_TotalSalesCashVAT = 0;
        _this.Close_TotalSalesCredit = 0;
        _this.Close_TotalSalesCreditVAT = 0;
        _this.Close_CashOnhand = 0;
        _this.Close_CashOnBank = 0;
        _this.Close_BankAccNo = "";
        _this.Close_TotalSales = 0;
        _this.Close_TotalExpenses = 0;
        _this.Close_Adjustment = 0;
        _this.Close_AdjustmentRemarks = "";
        _this.Close_CompanyCommition = 0;
        _this.Close_purchaseValue = 0;
        _this.Close_SalesManCommition = 0;
        _this.Close_NetProfit = 0;
        _this.Close_Remarks = "";
        _this.Vnd_Code = "";
        _this.nvd_DescA = "";
        _this.Vnd_DescE = "";
        _this.Status_DescA = "";
        _this.Status_DescE = "";
        _this.Nat_DescA = "";
        _this.Nat_Code = "";
        _this.Nat_DescE = "";
        _this.Sls_NameA = "";
        _this.Sls_Code = "";
        _this.Sls_NameE = "";
        _this.ClearanceDate = "";
        _this.ClearanceDateH = "";
        _this.ClearanceDateH = "";
        _this.IsGenerated = false;
        _this.PolicyNo = "";
        _this.CustomNo = "";
        _this.VatType = 0;
        _this.VatPrc = 0;
        _this.VatAmount = 0;
        _this.Close_AdjTotalSales = 0;
        _this.Close_Coolingandstorage = 0;
        _this.Close_TotalQtyRec = 0;
        _this.Close_TotalQtySold = 0;
        _this.Close_TotalQtyScrap = 0;
        return _this;
    }
    return IQ_GetOperation;
}(SecurityClass));
var IQ_GetPurReceiveStaistic = /** @class */ (function (_super) {
    __extends(IQ_GetPurReceiveStaistic, _super);
    function IQ_GetPurReceiveStaistic() {
        var _this = _super.call(this) || this;
        _this.ReceiveID = 0;
        _this.TrNo = 0;
        _this.RefNO = "";
        _this.RefTrID = 0;
        _this.TrDate = "";
        _this.TrDateH = "";
        _this.IsCash = false;
        _this.TrType = 0;
        _this.SalesmanId = 0;
        _this.StoreID = 0;
        _this.VatAmount = 0;
        _this.VATType = 0;
        _this.DiscountAmount = 0;
        _this.Status = 0;
        _this.IsPosted = false;
        _this.VoucherNo = 0;
        _this.VoucherType = 0;
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.BranchCode = 0;
        _this.CompCode = 0;
        _this.Slsm_Code = "";
        _this.Slsm_DescA = "";
        _this.Slsm_DescE = "";
        _this.Box_DescA = "";
        _this.Box_DescE = "";
        _this.VendorID = 0;
        _this.VendorInvNo = "";
        _this.PoDate = "";
        _this.PoNo = "";
        _this.Remarks = "";
        _this.Total = 0;
        _this.DiscountPrcnt = 0;
        _this.NetDue = 0;
        _this.NetAdditionCost = 0;
        _this.VendorCode = "";
        _this.PurRecType = 0;
        _this.CashBoxID = 0;
        _this.NetAdditionVat = 0;
        _this.Line_Count = 0;
        _this.Item_Count = 0;
        _this.Tot_Qty = 0;
        _this.Tot_Amount = 0;
        _this.Tot_VAT = 0;
        _this.Tot_Net = 0;
        _this.tot_RetQty = 0;
        _this.Tot_Add = 0;
        _this.TotAdd = 0;
        _this.TotAddVat = 0;
        _this.TotAddAfterVat = 0;
        _this.Vnd_NameA = "";
        _this.Vnd_NameE = "";
        _this.type_DescA = "";
        _this.Type_DescE = "";
        _this.Vendor_Name = "";
        _this.StatusDesc = "";
        _this.CashPaidAmount = 0;
        _this.RemainAmount = 0;
        _this.CurrencyID = 0;
        _this.PurOrderID = 0;
        _this.PO_TrNo = 0;
        _this.PO_TrDate = "";
        _this.TotalFC = 0;
        _this.CurrencyRate = 0;
        _this.Tot_AmountFC = 0;
        return _this;
    }
    return IQ_GetPurReceiveStaistic;
}(SecurityClass));
var IQ_GetPurReceiveItem = /** @class */ (function (_super) {
    __extends(IQ_GetPurReceiveItem, _super);
    function IQ_GetPurReceiveItem() {
        var _this = _super.call(this) || this;
        _this.ItemID = 0;
        _this.VatPrc = 0;
        _this.VatAmount = 0;
        _this.StockUnitCost = 0;
        _this.TotRetQty = 0;
        _this.it_itemCode = "";
        _this.it_DescA = "";
        _this.CompCode = 0;
        _this.It_DescE = "";
        _this.ItFm_Code = "";
        _this.ItFm_DescA = "";
        _this.ItFm_DescE = "";
        _this.Cat_Code = "";
        _this.Cat_DescA = "";
        _this.Cat_DescE = "";
        _this.Uom_Code = "";
        _this.Uom_DescA = "";
        _this.Uom_DescE = "";
        _this.ReciveDetailsID = 0;
        _this.ReceiveID = 0;
        _this.Serial = 0;
        _this.UnitID = 0;
        _this.RecStockQty = 0;
        _this.RecQty = 0;
        _this.RecUnitPrice = 0;
        _this.NetUnitCost = 0;
        _this.BonusQty = 0;
        _this.ExpireDate = "";
        _this.BatchCode = "";
        _this.BarCode = "";
        _this.StockAvailableQty = 0;
        _this.NewUnitCost = 0;
        _this.UnitAddCost = 0;
        _this.TotItemCost = 0;
        _this.ItemFamilyID = 0;
        _this.ReceiveRecQty = 0;
        _this.RecUnitPriceFC = 0;
        return _this;
    }
    return IQ_GetPurReceiveItem;
}(SecurityClass));
var IQ_GetPurReceiveCharge = /** @class */ (function (_super) {
    __extends(IQ_GetPurReceiveCharge, _super);
    function IQ_GetPurReceiveCharge() {
        var _this = _super.call(this) || this;
        _this.ReceiveID = 0;
        _this.ReceiveExpensesID = 0;
        _this.ChargeID = 0;
        _this.Amount = 0;
        _this.VatAmount = 0;
        _this.VatType = 0;
        _this.VatPrc = 0;
        _this.NetAtferVat = 0;
        _this.isPaidByVendor = false;
        _this.RefInvoiceNo = "";
        _this.RefInvoiceDate = "";
        _this.VendorID = 0;
        _this.CostAddCode = 0;
        _this.DESCA = "";
        _this.DESCL = "";
        _this.IsAddition = false;
        _this.VendorCode = "";
        _this.Vnd_NameA = "";
        _this.Vnd_NameE = "";
        _this.Serial = 0;
        _this.CashBoxID = 0;
        return _this;
    }
    return IQ_GetPurReceiveCharge;
}(SecurityClass));
var IQ_GetPurChargeInfo = /** @class */ (function (_super) {
    __extends(IQ_GetPurChargeInfo, _super);
    function IQ_GetPurChargeInfo() {
        var _this = _super.call(this) || this;
        _this.VatType = 0;
        _this.ChargeID = 0;
        _this.CompCode = 0;
        _this.CostAddCode = 0;
        _this.DESCA = "";
        _this.DESCL = "";
        _this.IsAddition = false;
        _this.DefaultPerc = 0;
        _this.IsAffectPurchaseCost = false;
        _this.GLExpenseAcc = "";
        _this.Ch_VatType = 0;
        _this.VatPerc = 0;
        return _this;
    }
    return IQ_GetPurChargeInfo;
}(SecurityClass));
var I_Pur_D_Charges = /** @class */ (function (_super) {
    __extends(I_Pur_D_Charges, _super);
    function I_Pur_D_Charges() {
        var _this = _super.call(this) || this;
        _this.ChargeID = 0;
        _this.CompCode = 0;
        _this.CostAddCode = 0;
        _this.DESCA = "";
        _this.DESCL = "";
        _this.IsAddition = false;
        _this.DefaultPerc = 0;
        _this.IsAffectPurchaseCost = false;
        _this.GLExpenseAcc = "";
        _this.VatType = 0;
        _this.StatusFlag = "";
        _this.OPGLExpenseAcc = "";
        return _this;
    }
    return I_Pur_D_Charges;
}(SecurityClass));
var I_Pur_TR_Receive = /** @class */ (function (_super) {
    __extends(I_Pur_TR_Receive, _super);
    function I_Pur_TR_Receive() {
        var _this = _super.call(this) || this;
        _this.ReceiveID = 0;
        _this.TrNo = 0;
        _this.RefNO = "";
        _this.RefTrID = 0;
        _this.TrType = 0;
        _this.PurRecType = 0;
        _this.StoreID = 0;
        _this.TrDate = "";
        _this.TrDateH = "";
        _this.Status = 0;
        _this.SalesmanId = 0;
        _this.VendorID = 0;
        _this.VendorInvNo = "";
        _this.VATType = 0;
        _this.PoDate = "";
        _this.PoNo = "";
        _this.IsCash = false;
        _this.Remarks = "";
        _this.Total = 0;
        _this.DiscountPrcnt = 0;
        _this.DiscountAmount = 0;
        _this.VatAmount = 0;
        _this.NetDue = 0;
        _this.IsPosted = false;
        _this.VoucherNo = 0;
        _this.VoucherType = 0;
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.NetAdditionCost = 0;
        _this.NetAdditionVat = 0;
        _this.CashBoxID = 0;
        _this.CashPaidAmount = 0;
        _this.RemainAmount = 0;
        _this.PurOrderID = 0;
        _this.CurrencyID = 0;
        _this.CurrencyRate = 0;
        _this.TotalFC = 0;
        return _this;
    }
    return I_Pur_TR_Receive;
}(SecurityClass));
var I_Pur_Tr_PurchaseOrder = /** @class */ (function (_super) {
    __extends(I_Pur_Tr_PurchaseOrder, _super);
    function I_Pur_Tr_PurchaseOrder() {
        var _this = _super.call(this) || this;
        _this.PurOrderID = 0;
        _this.TrNo = 0;
        _this.RefNO = "";
        _this.TrDate = "";
        _this.TrDateH = "";
        _this.Status = 0;
        _this.SalesmanId = 0;
        _this.VendorID = 0;
        _this.VATType = 0;
        _this.IsCash = false;
        _this.Remarks = "";
        _this.Total = 0;
        _this.DiscountPrcnt = 0;
        _this.DiscountAmount = 0;
        _this.VatAmount = 0;
        _this.NetDue = 0;
        _this.IsPosted = false;
        _this.VoucherNo = 0;
        _this.VoucherType = 0;
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.CurrencyID = 0;
        _this.IsReceived = false;
        _this.DliveryConditions = "";
        _this.ShipmentConditions = "";
        _this.ValidityPeriod = "";
        return _this;
    }
    return I_Pur_Tr_PurchaseOrder;
}(SecurityClass));
var I_Pur_Tr_PurchaseOrderDetail = /** @class */ (function (_super) {
    __extends(I_Pur_Tr_PurchaseOrderDetail, _super);
    function I_Pur_Tr_PurchaseOrderDetail() {
        var _this = _super.call(this) || this;
        _this.PurOrderDetailsID = 0;
        _this.PurOrderID = 0;
        _this.Serial = 0;
        _this.ItemID = 0;
        _this.UnitID = 0;
        _this.POStockQty = 0;
        _this.POQty = 0;
        _this.UnitPrice = 0;
        _this.VatPrc = 0;
        _this.VatAmount = 0;
        _this.NetUnitCost = 0;
        _this.BonusQty = 0;
        _this.StockAvailableQty = 0;
        _this.StockUnitCost = 0;
        _this.TotRecQty = 0;
        _this.StatusFlag = "";
        return _this;
    }
    return I_Pur_Tr_PurchaseOrderDetail;
}(SecurityClass));
var I_Pur_TR_ReceiveItems = /** @class */ (function (_super) {
    __extends(I_Pur_TR_ReceiveItems, _super);
    function I_Pur_TR_ReceiveItems() {
        var _this = _super.call(this) || this;
        _this.ReciveDetailsID = 0;
        _this.ReceiveID = 0;
        _this.Serial = 0;
        _this.ItemID = 0;
        _this.UnitID = null;
        _this.RecStockQty = 0;
        _this.ReceiveRecQty = 0;
        _this.RecQty = 0;
        _this.RecUnitPrice = 0;
        _this.VatPrc = 0;
        _this.VatAmount = 0;
        _this.NetUnitCost = 0;
        _this.BonusQty = 0;
        _this.ExpireDate = "";
        _this.BatchCode = "";
        _this.BarCode = "";
        _this.StockAvailableQty = 0;
        _this.StockUnitCost = 0;
        _this.NewUnitCost = 0;
        _this.TotRetQty = 0;
        _this.UnitAddCost = 0;
        _this.RecUnitPriceFC = 0;
        _this.StatusFlag = "";
        return _this;
    }
    return I_Pur_TR_ReceiveItems;
}(SecurityClass));
var I_Pur_Tr_ReceiveCharges = /** @class */ (function (_super) {
    __extends(I_Pur_Tr_ReceiveCharges, _super);
    function I_Pur_Tr_ReceiveCharges() {
        var _this = _super.call(this) || this;
        _this.ReceiveExpensesID = 0;
        _this.ReceiveID = 0;
        _this.Serial = 0;
        _this.ChargeID = 0;
        _this.Amount = 0;
        _this.VatAmount = 0;
        _this.VatType = 0;
        _this.VatPrc = 0;
        _this.NetAtferVat = 0;
        _this.isPaidByVendor = false;
        _this.RefInvoiceNo = "";
        _this.RefInvoiceDate = "";
        _this.VendorID = 0;
        _this.StatusFlag = "";
        _this.CashBoxID = 0;
        return _this;
    }
    return I_Pur_Tr_ReceiveCharges;
}(SecurityClass));
var A_Voucher_Types = /** @class */ (function (_super) {
    __extends(A_Voucher_Types, _super);
    function A_Voucher_Types() {
        var _this = _super.call(this) || this;
        _this.COMP_CODE = 0;
        _this.VoucherType = 0;
        _this.TYPE_CODE = 0;
        _this.TYPE_DESCA = "";
        _this.TYPE_DESCE = "";
        _this.Remarks = "";
        return _this;
    }
    return A_Voucher_Types;
}(SecurityClass));
var G_COST_CENTER = /** @class */ (function (_super) {
    __extends(G_COST_CENTER, _super);
    function G_COST_CENTER() {
        var _this = _super.call(this) || this;
        _this.COMP_CODE = 0;
        _this.CC_CODE = "";
        _this.CC_DESCA = "";
        _this.CC_PARENT = "";
        _this.CC_LEVEL = 0;
        _this.CC_LOCATION = "";
        _this.CC_TARGET = 0;
        _this.ACTIVE = false;
        _this.PAYROLL_UPDATE = false;
        _this.LEAF = false;
        _this.CC_DESCE = "";
        _this.StatusFlag = "";
        return _this;
    }
    return G_COST_CENTER;
}(SecurityClass));
var JournalMasterDetails = /** @class */ (function (_super) {
    __extends(JournalMasterDetails, _super);
    function JournalMasterDetails() {
        var _this = _super.call(this) || this;
        _this.A_JOURNAL_HEADER = new A_JOURNAL_HEADER();
        _this.A_JOURNAL_DETAIL = new Array();
        return _this;
    }
    return JournalMasterDetails;
}(SecurityClass));
var AQ_GetJournalHeaderWithDetail = /** @class */ (function (_super) {
    __extends(AQ_GetJournalHeaderWithDetail, _super);
    function AQ_GetJournalHeaderWithDetail() {
        var _this = _super.call(this) || this;
        _this.AQ_GetJournalHeader = new Array();
        _this.AQ_GetJournalDetail = new Array();
        return _this;
    }
    return AQ_GetJournalHeaderWithDetail;
}(SecurityClass));
var A_JOURNAL_DETAIL = /** @class */ (function (_super) {
    __extends(A_JOURNAL_DETAIL, _super);
    function A_JOURNAL_DETAIL() {
        var _this = _super.call(this) || this;
        _this.VoucherDetailID = 0;
        _this.VoucherID = 0;
        _this.COMP_CODE = 0;
        _this.VOUCHER_CODE = 0;
        _this.VOUCHER_SERIAL = 0;
        _this.ACC_CODE = "";
        _this.CC_CODE = "";
        _this.DEBIT = 0;
        _this.CREDIT = 0;
        _this.DESCL = "";
        _this.DESCA = "";
        _this.CCDT_CODE = "";
        _this.INVOICE_NO = 0;
        _this.BOOK_TR_NO = 0;
        _this.SRC_SYSTEM_CODE = "";
        _this.SRC_SUB_SYSTEM_CODE = "";
        _this.SRC_BRA_CODE = 0;
        _this.SRC_TR_CODE = "";
        _this.SRC_TR_NO = 0;
        _this.SRC_TR_TYPE = "";
        _this.DEBIT_FC = 0;
        _this.CREDIT_FC = 0;
        _this.StatusFlag = "";
        return _this;
    }
    return A_JOURNAL_DETAIL;
}(SecurityClass));
var A_JOURNAL_HEADER = /** @class */ (function (_super) {
    __extends(A_JOURNAL_HEADER, _super);
    function A_JOURNAL_HEADER() {
        var _this = _super.call(this) || this;
        _this.VoucherID = 0;
        _this.COMP_CODE = 0;
        _this.VOUCHER_CODE = 0;
        _this.VOUCHER_DATE = "";
        _this.VOUCHER_DESC = "";
        _this.VOUCHER_STATUS = 0;
        _this.TYPE_CODE = 0;
        _this.REF_CODE = "";
        _this.CREATED_BY = "";
        _this.CREATED_AT = "";
        _this.UPDATED_BY = "";
        _this.UPDATED_AT = "";
        _this.POSTED_BY = "";
        _this.POSTED_AT = "";
        _this.BOOK_TR_NO = 0;
        _this.SOURCE_TYPE = "";
        _this.TotalDebit = 0;
        _this.TotalCredit = 0;
        _this.VOUCHER_DATEH = "";
        _this.AUTHORISED_BY = "";
        _this.AUTHORISED_AT = "";
        return _this;
    }
    return A_JOURNAL_HEADER;
}(SecurityClass));
var AQ_GetJournalDetail = /** @class */ (function (_super) {
    __extends(AQ_GetJournalDetail, _super);
    function AQ_GetJournalDetail() {
        var _this = _super.call(this) || this;
        _this.COMP_CODE = 0;
        _this.VOUCHER_CODE = 0;
        _this.VOUCHER_SERIAL = 0;
        _this.ACC_CODE = "";
        _this.CC_CODE = "";
        _this.DEBIT = 0;
        _this.CREDIT = 0;
        _this.DESCL = "";
        _this.DESCA = "";
        _this.CCDT_CODE = "";
        _this.INVOICE_NO = 0;
        _this.BOOK_TR_NO = 0;
        _this.SRC_SYSTEM_CODE = "";
        _this.SRC_SUB_SYSTEM_CODE = "";
        _this.SRC_BRA_CODE = 0;
        _this.SRC_TR_CODE = "";
        _this.SRC_TR_NO = 0;
        _this.SRC_TR_TYPE = "";
        _this.DEBIT_FC = 0;
        _this.CREDIT_FC = 0;
        _this.CC_DESCA = "";
        _this.CC_DESCE = "";
        _this.ACC_DESCA = "";
        _this.ACC_DESCL = "";
        _this.VoucherDetailID = 0;
        _this.VoucherID = 0;
        _this.CCDT_TYPE = "";
        _this.CCDT_DESCA = "";
        _this.CCDT_DESCE = "";
        _this.StatusFlag = "";
        return _this;
    }
    return AQ_GetJournalDetail;
}(SecurityClass));
var AQ_GetJournalHeader = /** @class */ (function (_super) {
    __extends(AQ_GetJournalHeader, _super);
    function AQ_GetJournalHeader() {
        var _this = _super.call(this) || this;
        _this.COMP_CODE = 0;
        _this.VOUCHER_CODE = 0;
        _this.VOUCHER_DATE = "";
        _this.VOUCHER_DESC = "";
        _this.VOUCHER_STATUS = 0;
        _this.TYPE_CODE = 0;
        _this.REF_CODE = "";
        _this.CREATED_BY = "";
        _this.CREATED_AT = "";
        _this.UPDATED_BY = "";
        _this.UPDATED_AT = "";
        _this.POSTED_BY = "";
        _this.POSTED_AT = "";
        _this.SOURCE_TYPE = "";
        _this.VOUCHER_DATEH = "";
        _this.AUTHORISED_BY = "";
        _this.AUTHORISED_AT = "";
        _this.TYPE_DESCA = "";
        _this.TYPE_DESCE = "";
        _this.St_DescE = "";
        _this.St_DescA = "";
        _this.Src_DescE = "";
        _this.Src_DescA = "";
        _this.VoucherID = 0;
        _this.TotalDebit = 0;
        _this.TotalCredit = 0;
        return _this;
    }
    return AQ_GetJournalHeader;
}(SecurityClass));
var A_TR_VchrTemplate = /** @class */ (function (_super) {
    __extends(A_TR_VchrTemplate, _super);
    function A_TR_VchrTemplate() {
        var _this = _super.call(this) || this;
        _this.TemplateID = 0;
        _this.COMP_CODE = 0;
        _this.VOUCHER_CODE = 0;
        _this.VOUCHER_TYPE = 0;
        _this.TEMPLATE_DESC = "";
        _this.VOUCHER_DESC = "";
        _this.TYPE_CODE = 0;
        _this.ACC_CODE = "";
        _this.CREATED_BY = "";
        _this.CREATED_AT = "";
        _this.UPDATED_BY = "";
        _this.UPDATED_AT = "";
        _this.IsSaveValue = false;
        return _this;
    }
    return A_TR_VchrTemplate;
}(SecurityClass));
var A_TR_VchrTemplateDetail = /** @class */ (function (_super) {
    __extends(A_TR_VchrTemplateDetail, _super);
    function A_TR_VchrTemplateDetail() {
        var _this = _super.call(this) || this;
        _this.VoucherDetailID = 0;
        _this.TemplateID = 0;
        _this.COMP_CODE = 0;
        _this.VOUCHER_TYPE = 0;
        _this.VOUCHER_SERIAL = 0;
        _this.ACC_CODE = "";
        _this.CC_CODE = "";
        _this.DEBIT = 0;
        _this.CREDIT = 0;
        _this.DESCL = "";
        _this.DESCA = "";
        _this.DEBIT_FC = 0;
        _this.CREDIT_FC = 0;
        _this.CCDT_CODE = "";
        _this.StatusFlag = "";
        return _this;
    }
    return A_TR_VchrTemplateDetail;
}(SecurityClass));
var VchrTemplatMasterDetail = /** @class */ (function (_super) {
    __extends(VchrTemplatMasterDetail, _super);
    function VchrTemplatMasterDetail() {
        var _this = _super.call(this) || this;
        _this.A_TR_VchrTemplate = new A_TR_VchrTemplate();
        _this.A_TR_VchrTemplateDetail = new Array();
        return _this;
    }
    return VchrTemplatMasterDetail;
}(SecurityClass));
var G_RoleUsers = /** @class */ (function (_super) {
    __extends(G_RoleUsers, _super);
    function G_RoleUsers() {
        var _this = _super.call(this) || this;
        _this.USER_CODE = "";
        _this.RoleId = 0;
        _this.ISActive = false;
        _this.StatusFlag = "";
        return _this;
    }
    return G_RoleUsers;
}(SecurityClass));
var G_USERS = /** @class */ (function (_super) {
    __extends(G_USERS, _super);
    function G_USERS() {
        var _this = _super.call(this) || this;
        _this.LoginUrl = false;
        _this.Email = "";
        _this.FirstLogin = "";
        _this.Remarks = "";
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.CashBoxID = 0;
        _this.SalesManID = 0;
        _this.USER_CODE = "";
        _this.USER_PASSWORD = "";
        _this.USER_ACTIVE = false;
        _this.USER_NAME = "";
        _this.CompCode = 0;
        _this.GRP_CODE = "";
        _this.REGION_CODE = "";
        _this.USER_PASSWORD2 = "";
        _this.CHANGE_PASS_DATE = "";
        _this.City = "";
        _this.Address = "";
        _this.Tel = "";
        _this.Fax = "";
        _this.Mobile = "";
        _this.DepartmentName = "";
        _this.JobTitle = "";
        _this.USER_TYPE = 0;
        _this.ManagedBy = "";
        _this.SYSTEM_CODE = "";
        _this.SUB_SYSTEM_CODE = "";
        _this.Tokenid = "";
        _this.LastLogin = "";
        _this.Flag_Mastr = "";
        _this.StoreID = 0;
        return _this;
    }
    return G_USERS;
}(SecurityClass));
var GQ_GetUsers = /** @class */ (function (_super) {
    __extends(GQ_GetUsers, _super);
    function GQ_GetUsers() {
        var _this = _super.call(this) || this;
        _this.LoginUrl = false;
        _this.USER_CODE = "";
        _this.USER_PASSWORD = "";
        _this.USER_ACTIVE = false;
        _this.USER_NAME = "";
        _this.CompCode = 0;
        _this.CashBoxID = 0;
        _this.SalesManID = 0;
        _this.REGION_CODE = "";
        _this.GRP_CODE = "";
        _this.USER_PASSWORD2 = "";
        _this.CHANGE_PASS_DATE = "";
        _this.City = "";
        _this.Address = "";
        _this.Tel = "";
        _this.Fax = "";
        _this.Mobile = "";
        _this.Email = "";
        _this.DepartmentName = "";
        _this.JobTitle = "";
        _this.USER_TYPE = 0;
        _this.ManagedBy = "";
        _this.Tokenid = "";
        _this.LastLogin = "";
        _this.FirstLogin = "";
        _this.Remarks = "";
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.Type_DescA = "";
        _this.Type_DescE = "";
        _this.CodeType = "";
        _this.IsActiveDesc = "";
        _this.SYSTEM_CODE = "";
        _this.SUB_SYSTEM_CODE = "";
        _this.Flag_Mastr = "";
        _this.StoreID = 0;
        return _this;
    }
    return GQ_GetUsers;
}(SecurityClass));
var GQ_GetUserRole = /** @class */ (function (_super) {
    __extends(GQ_GetUserRole, _super);
    function GQ_GetUserRole() {
        var _this = _super.call(this) || this;
        _this.USER_CODE = "";
        _this.ISActive = false;
        _this.DescA = "";
        _this.DescE = "";
        _this.Remarks = "";
        _this.RoleId = 0;
        _this.IsActiveDesc = "";
        _this.IsAvailable = false;
        _this.IsShowable = false;
        return _this;
    }
    return GQ_GetUserRole;
}(SecurityClass));
var G_Role = /** @class */ (function (_super) {
    __extends(G_Role, _super);
    function G_Role() {
        var _this = _super.call(this) || this;
        _this.RoleId = 0;
        _this.DescA = "";
        _this.DescE = "";
        _this.Remarks = "";
        _this.IsAvailable = false;
        _this.IsShowable = false;
        return _this;
    }
    return G_Role;
}(SecurityClass));
var G_CONTROL = /** @class */ (function (_super) {
    __extends(G_CONTROL, _super);
    function G_CONTROL() {
        var _this = _super.call(this) || this;
        _this.COMP_CODE = 0;
        _this.FIN_YEAR = 0;
        _this.ACC_STATUS = 0;
        _this.INV_STATUS = 0;
        _this.FirstDate = "";
        _this.LastDate = "";
        _this.ProfitAcc_Code = "";
        _this.OpenAccVoucheNo = 0;
        _this.OpenInvAdjNo = 0;
        return _this;
    }
    return G_CONTROL;
}(SecurityClass));
var G_LnkTrans = /** @class */ (function (_super) {
    __extends(G_LnkTrans, _super);
    function G_LnkTrans() {
        var _this = _super.call(this) || this;
        _this.SYSTEM_CODE = "";
        _this.SUB_SYSTEM_CODE = "";
        _this.TR_CODE = "";
        _this.TR_DESCA = "";
        _this.TR_DESCE = "";
        _this.VOUCHER_TYPE = 0;
        _this.VOUCHER_SOURCE_TYPE = 0;
        _this.TABLE_NAME = "";
        _this.TABLE_CONDITION = "";
        _this.FN_COMP_CODE = "";
        _this.FN_BRA_CODE = "";
        _this.FN_TR_ID = "";
        _this.FN_TR_NO = "";
        _this.FN_TR_TYPE = "";
        _this.FN_TR_DATE = "";
        _this.FN_USER = "";
        _this.FN_TR_AMOUNT = "";
        _this.FN_TR_DESCA = "";
        _this.FN_TR_DESCE = "";
        _this.FN_VOUCHER_CODE = "";
        _this.INTEGRATE = false;
        _this.BASE_TABLE_NAME = "";
        _this.FN_POSTED = "";
        _this.Selected = false;
        return _this;
    }
    return G_LnkTrans;
}(SecurityClass));
var G_LnkTransVariable = /** @class */ (function (_super) {
    __extends(G_LnkTransVariable, _super);
    function G_LnkTransVariable() {
        var _this = _super.call(this) || this;
        _this.SYSTEM_CODE = "";
        _this.SUB_SYSTEM_CODE = "";
        _this.TR_CODE = "";
        _this.VarType = "";
        _this.VarCode = "";
        _this.Var_DESCA = "";
        _this.Var_DESCE = "";
        _this.FN_VarExpression = "";
        _this.DataSource = "";
        return _this;
    }
    return G_LnkTransVariable;
}(SecurityClass));
var GQ_GetLnkTransVoucher = /** @class */ (function (_super) {
    __extends(GQ_GetLnkTransVoucher, _super);
    function GQ_GetLnkTransVoucher() {
        var _this = _super.call(this) || this;
        _this.COMP_CODE = 0;
        _this.SYSTEM_CODE = "";
        _this.SUB_SYSTEM_CODE = "";
        _this.TR_CODE = "";
        _this.SERIAL = 0;
        _this.VarCode = "";
        _this.ISDebit = false;
        _this.AccType = 0;
        _this.AccFixedCode = "";
        _this.AccVarCode = "";
        _this.AccBraCode = "";
        _this.CCType = 0;
        _this.CCFixedCode = "";
        _this.CCVarCode = "";
        _this.CCBraCode = "";
        _this.IsCollective = false;
        _this.Val_DesE = "";
        _this.Val_DescE = "";
        _this.VarAcc_DescA = "";
        _this.VarAcc_DescE = "";
        _this.VarCC_DescA = "";
        _this.VarCC_DescE = "";
        _this.FixAcc_DescA = "";
        _this.FixAcc_DescE = "";
        _this.Fixcc_DescA = "";
        _this.FixCC_DescE = "";
        _this.BrAcc_DescA = "";
        _this.BrAcc_DescE = "";
        _this.BrCC_DescA = "";
        _this.BrCC_DescE = "";
        _this.LineRemarkA = "";
        _this.LineRemarkE = "";
        return _this;
    }
    return GQ_GetLnkTransVoucher;
}(SecurityClass));
var G_LnkTrans_Temp = /** @class */ (function (_super) {
    __extends(G_LnkTrans_Temp, _super);
    function G_LnkTrans_Temp() {
        var _this = _super.call(this) || this;
        _this.ROW_ID = "";
        _this.User_Code = "";
        _this.TR_CODE = "";
        _this.COMP_CODE = 0;
        _this.BRA_CODE = 0;
        _this.SYSTEM_CODE = "";
        _this.SUB_SYSTEM_CODE = "";
        _this.VOUCHER_CODE = 0;
        _this.VOUCHER_TYPE = 0;
        _this.VOUCHER_SOURCE_TYPE = "";
        _this.TR_NO = 0;
        _this.TR_TYPE = "";
        _this.TR_DATE = "";
        _this.TR_AMOUNT = 0;
        _this.TR_DESCA = "";
        _this.TR_DESCE = "";
        _this.TR_USER_CODE = "";
        _this.VOUCHER_DESCA = "";
        _this.VOUCHER_DESCE = "";
        _this.IsSelected = false;
        _this.ROW_DATE = "";
        _this.FromDate = "";
        _this.ToDate = "";
        _this.FromTrNo = 0;
        _this.ToTrNo = 0;
        _this.IsGenerated = false;
        _this.GenRemarks = "";
        _this.IsGeneratedDesc = "";
        return _this;
    }
    return G_LnkTrans_Temp;
}(SecurityClass));
var GQ_GetLnkVoucherDetail = /** @class */ (function (_super) {
    __extends(GQ_GetLnkVoucherDetail, _super);
    function GQ_GetLnkVoucherDetail() {
        var _this = _super.call(this) || this;
        _this.Seq = 0;
        _this.User_Code = "";
        _this.SERIAL = 0;
        _this.COMP_CODE = 0;
        _this.BRANCH_CODE = 0;
        _this.ACC_CODE = "";
        _this.DEBIT = 0;
        _this.CREDIT = 0;
        _this.CC_CODE = "";
        _this.LINE_DESCA = "";
        _this.LINE_DESCE = "";
        _this.Tr_Code = "";
        _this.Tr_No = 0;
        _this.ROW_ID = 0;
        _this.ACC_DESCA = "";
        _this.ACC_DESCL = "";
        _this.CC_DESCA = "";
        _this.CC_DESCE = "";
        return _this;
    }
    return GQ_GetLnkVoucherDetail;
}(SecurityClass));
var IQ_GetTransfer = /** @class */ (function (_super) {
    __extends(IQ_GetTransfer, _super);
    function IQ_GetTransfer() {
        var _this = _super.call(this) || this;
        _this.TransfareID = 0;
        _this.Tr_No = 0;
        _this.RefNO = "";
        _this.TrType = 0;
        _this.TFType = 0;
        _this.TrDate = "";
        _this.TrDateH = "";
        _this.SenderBranchCode = 0;
        _this.ReceiverBranchCode = 0;
        _this.SenderStoreID = 0;
        _this.ReceiverStoreID = 0;
        _this.RequestTransferID = 0;
        _this.Remark = "";
        _this.SendTransferID = 0;
        _this.RequestedBy = "";
        _this.SendBy = "";
        _this.ReceivedBy = "";
        _this.VerfiedBy = "";
        _this.Total = 0;
        _this.IsPosted = false;
        _this.VoucherNo = 0;
        _this.VoucherType = 0;
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedBy = "";
        _this.UpdatedAt = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.IsSent = false;
        _this.IsReceived = false;
        _this.IsRequested = false;
        _this.SBr_DescA = "";
        _this.SBr_DescE = "";
        _this.SSt_DescA = "";
        _this.SSt_DescE = "";
        _this.SSt_Store_Code = 0;
        _this.RBr_DescA = "";
        _this.RBr_DescE = "";
        _this.RSt_DescA = "";
        _this.RSt_StoreCode = 0;
        _this.RSt_DescE = "";
        _this.IsSent_Desc = "";
        _this.IsReceived_Desc = "";
        _this.TrType_Desc = "";
        return _this;
    }
    return IQ_GetTransfer;
}(SecurityClass));
var IQ_GetTransferDetail = /** @class */ (function (_super) {
    __extends(IQ_GetTransferDetail, _super);
    function IQ_GetTransferDetail() {
        var _this = _super.call(this) || this;
        _this.TransfareDetailID = 0;
        _this.TransfareID = 0;
        _this.Serial = 0;
        _this.BarCode = "";
        _this.ItemID = 0;
        _this.SourceItemStoreBatchid = 0;
        _this.DestItemStoreBatchid = 0;
        _this.UnitCost = 0;
        _this.UnitID = 0;
        _this.ReqQty = 0;
        _this.SendQty = 0;
        _this.RecQty = 0;
        _this.StockReqQty = 0;
        _this.StockSendQty = 0;
        _this.StockRecQty = 0;
        _this.ItemCode = "";
        _this.Itm_DescA = "";
        _this.Itm_DescE = "";
        _this.FamilyCode = "";
        _this.ITFamly_DescA = "";
        _this.ITFamly_DescE = "";
        _this.SrcOhnandQty = 0;
        _this.RecOnhandQty = 0;
        _this.uom_DescA = "";
        _this.uom_DescE = "";
        _this.UomCode = "";
        return _this;
    }
    return IQ_GetTransferDetail;
}(SecurityClass));
var I_Stk_TR_Transfer = /** @class */ (function (_super) {
    __extends(I_Stk_TR_Transfer, _super);
    function I_Stk_TR_Transfer() {
        var _this = _super.call(this) || this;
        _this.TransfareID = 0;
        _this.Tr_No = 0;
        _this.RefNO = "";
        _this.TrType = 0;
        _this.TFType = 0;
        _this.TrDate = "";
        _this.TrDateH = "";
        _this.SenderBranchCode = 0;
        _this.ReceiverBranchCode = 0;
        _this.SenderStoreID = 0;
        _this.ReceiverStoreID = 0;
        _this.RequestTransferID = 0;
        _this.SendTransferID = 0;
        _this.Remark = "";
        _this.RequestedBy = "";
        _this.SendBy = "";
        _this.ReceivedBy = "";
        _this.VerfiedBy = "";
        _this.Total = 0;
        _this.IsPosted = false;
        _this.VoucherNo = 0;
        _this.VoucherType = 0;
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.IsSent = false;
        _this.IsReceived = false;
        _this.IsRequested = false;
        return _this;
    }
    return I_Stk_TR_Transfer;
}(SecurityClass));
var I_Stk_TR_TransferDetails = /** @class */ (function (_super) {
    __extends(I_Stk_TR_TransferDetails, _super);
    function I_Stk_TR_TransferDetails() {
        var _this = _super.call(this) || this;
        _this.TransfareDetailID = 0;
        _this.TransfareID = 0;
        _this.Serial = 0;
        _this.BarCode = "";
        _this.ItemID = 0;
        _this.SourceItemStoreBatchid = 0;
        _this.DestItemStoreBatchid = 0;
        _this.UnitCost = 0;
        _this.UnitID = 0;
        _this.ReqQty = 0;
        _this.SendQty = 0;
        _this.RecQty = 0;
        _this.StockReqQty = 0;
        _this.StockSendQty = 0;
        _this.StockRecQty = 0;
        _this.StatusFlag = "";
        _this.SrcOhnandQty = 0;
        _this.RecOnhandQty = 0;
        return _this;
    }
    return I_Stk_TR_TransferDetails;
}(SecurityClass));
var DirectTransferMasterDetails = /** @class */ (function (_super) {
    __extends(DirectTransferMasterDetails, _super);
    function DirectTransferMasterDetails() {
        var _this = _super.call(this) || this;
        _this.I_Stk_TR_Transfer = new I_Stk_TR_Transfer();
        _this.I_Stk_TR_TransferDetails = new Array();
        return _this;
    }
    return DirectTransferMasterDetails;
}(SecurityClass));
var IQ_DirectTransferWithDetail = /** @class */ (function (_super) {
    __extends(IQ_DirectTransferWithDetail, _super);
    function IQ_DirectTransferWithDetail() {
        var _this = _super.call(this) || this;
        _this.IQ_GetTransfer = new Array();
        _this.IQ_GetTransferDetail = new Array();
        return _this;
    }
    return IQ_DirectTransferWithDetail;
}(SecurityClass));
var I_Stk_TR_Adjust = /** @class */ (function (_super) {
    __extends(I_Stk_TR_Adjust, _super);
    function I_Stk_TR_Adjust() {
        var _this = _super.call(this) || this;
        _this.AdjustID = 0;
        _this.Tr_No = 0;
        _this.RefNO = "";
        _this.TrType = 0;
        _this.TrDate = "";
        _this.TrDateH = "";
        _this.StoreID = 0;
        _this.Remark = "";
        _this.CountedBy = "";
        _this.VerfiedBy = "";
        _this.TotalCost = 0;
        _this.IsPosted = false;
        _this.VoucherNo = 0;
        _this.VoucherType = 0;
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.Status = 0;
        return _this;
    }
    return I_Stk_TR_Adjust;
}(SecurityClass));
var I_Stk_Tr_AdjustDetails = /** @class */ (function (_super) {
    __extends(I_Stk_Tr_AdjustDetails, _super);
    function I_Stk_Tr_AdjustDetails() {
        var _this = _super.call(this) || this;
        _this.AdjustDetailID = 0;
        _this.AdjustID = 0;
        _this.Serial = 0;
        _this.BarCode = "";
        _this.ItemID = 0;
        _this.ItemStoreBatchid = 0;
        _this.UnitID = 0;
        _this.CountQty = 0;
        _this.OnhandQty = 0;
        _this.UnitCost = 0;
        _this.NewUnitCost = 0;
        _this.StkUnitCost = 0;
        _this.NewStkUnitCost = 0;
        _this.StockCountedQty = 0;
        _this.StockOnhandQty = 0;
        _this.DiffQty = 0;
        _this.StockDiffQty = 0;
        _this.StatusFlag = "";
        return _this;
    }
    return I_Stk_Tr_AdjustDetails;
}(SecurityClass));
var IQ_GetStkAdjust = /** @class */ (function (_super) {
    __extends(IQ_GetStkAdjust, _super);
    function IQ_GetStkAdjust() {
        var _this = _super.call(this) || this;
        _this.AdjustID = 0;
        _this.Tr_No = 0;
        _this.RefNO = "";
        _this.TrType = 0;
        _this.TrDate = "";
        _this.TrDateH = "";
        _this.Remark = "";
        _this.StoreID = 0;
        _this.CountedBy = "";
        _this.TotalCost = 0;
        _this.VerfiedBy = "";
        _this.IsPosted = false;
        _this.VoucherNo = 0;
        _this.VoucherType = 0;
        _this.CreatedAt = "";
        _this.UpdatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedBy = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.St_DEscA = "";
        _this.ST_DescE = "";
        _this.Type_DescA = "";
        _this.type_DescE = "";
        _this.Status = 0;
        _this.Status_Desc = "";
        return _this;
    }
    return IQ_GetStkAdjust;
}(SecurityClass));
var IQ_GetStkAdjustDetail = /** @class */ (function (_super) {
    __extends(IQ_GetStkAdjustDetail, _super);
    function IQ_GetStkAdjustDetail() {
        var _this = _super.call(this) || this;
        _this.AdjustDetailID = 0;
        _this.AdjustID = 0;
        _this.Serial = 0;
        _this.BarCode = "";
        _this.ItemID = 0;
        _this.ItemStoreBatchid = 0;
        _this.UnitID = 0;
        _this.CountQty = 0;
        _this.OnhandQty = 0;
        _this.UnitCost = 0;
        _this.NewUnitCost = 0;
        _this.StkUnitCost = 0;
        _this.NewStkUnitCost = 0;
        _this.StockCountedQty = 0;
        _this.StockOnhandQty = 0;
        _this.DiffQty = 0;
        _this.StockDiffQty = 0;
        _this.ItemCode = "";
        _this.itm_DescA = "";
        _this.itm_DescE = "";
        _this.CompCode = 0;
        _this.Uom_DescA = "";
        _this.UOM_DescE = "";
        _this.UomCode = "";
        return _this;
    }
    return IQ_GetStkAdjustDetail;
}(SecurityClass));
var StockAdjustMasterDetails = /** @class */ (function (_super) {
    __extends(StockAdjustMasterDetails, _super);
    function StockAdjustMasterDetails() {
        var _this = _super.call(this) || this;
        _this.I_Stk_TR_Adjust = new I_Stk_TR_Adjust();
        _this.I_Stk_Tr_AdjustDetails = new Array();
        return _this;
    }
    return StockAdjustMasterDetails;
}(SecurityClass));
var IQ_GetStkAdjustWithDetail = /** @class */ (function (_super) {
    __extends(IQ_GetStkAdjustWithDetail, _super);
    function IQ_GetStkAdjustWithDetail() {
        var _this = _super.call(this) || this;
        _this.IQ_GetStkAdjust = new Array();
        _this.IQ_GetStkAdjustDetail = new Array();
        return _this;
    }
    return IQ_GetStkAdjustWithDetail;
}(SecurityClass));
var IQ_PurchaseOrderWithDetail = /** @class */ (function (_super) {
    __extends(IQ_PurchaseOrderWithDetail, _super);
    function IQ_PurchaseOrderWithDetail() {
        var _this = _super.call(this) || this;
        _this.IQ_GetPurchaseOrder = new Array();
        _this.IQ_GetPurchaseOrderDetail = new Array();
        return _this;
    }
    return IQ_PurchaseOrderWithDetail;
}(SecurityClass));
var PurchaseOrderMasterDetails = /** @class */ (function (_super) {
    __extends(PurchaseOrderMasterDetails, _super);
    function PurchaseOrderMasterDetails() {
        var _this = _super.call(this) || this;
        _this.I_Pur_Tr_PurchaseOrder = new I_Pur_Tr_PurchaseOrder();
        _this.I_Pur_Tr_PurchaseOrderDetail = new Array();
        return _this;
    }
    return PurchaseOrderMasterDetails;
}(SecurityClass));
var I_TR_OperationTF = /** @class */ (function (_super) {
    __extends(I_TR_OperationTF, _super);
    function I_TR_OperationTF() {
        var _this = _super.call(this) || this;
        _this.OperationTFID = 0;
        _this.Tr_No = 0;
        _this.TrType = 0;
        _this.RefNO = "";
        _this.TrDate = "";
        _this.TrDateH = "";
        _this.OperationID = 0;
        _this.FromSalesmanID = 0;
        _this.ToSalesmanID = 0;
        _this.Remark = "";
        _this.RequestedBy = "";
        _this.SendBy = "";
        _this.ReceivedBy = "";
        _this.VerfiedBy = "";
        _this.Total = 0;
        _this.IsPosted = false;
        _this.VoucherNo = 0;
        _this.VoucherType = 0;
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.IsSent = false;
        _this.IsReceived = false;
        _this.IsRequested = false;
        return _this;
    }
    return I_TR_OperationTF;
}(SecurityClass));
var IQ_GetOperationTF = /** @class */ (function (_super) {
    __extends(IQ_GetOperationTF, _super);
    function IQ_GetOperationTF() {
        var _this = _super.call(this) || this;
        _this.OperationTFID = 0;
        _this.Tr_No = 0;
        _this.TrType = 0;
        _this.RefNO = "";
        _this.TrDate = "";
        _this.TrDateH = "";
        _this.OperationID = 0;
        _this.FromSalesmanID = 0;
        _this.ToSalesmanID = 0;
        _this.Remark = "";
        _this.RequestedBy = "";
        _this.SendBy = "";
        _this.ReceivedBy = "";
        _this.VerfiedBy = "";
        _this.IsPosted = false;
        _this.Total = 0;
        _this.VoucherNo = 0;
        _this.VoucherType = 0;
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.IsSent = false;
        _this.IsReceived = false;
        _this.IsRequested = false;
        _this.Op_TRNo = 0;
        _this.Op_RefNo = "";
        _this.Op_TrDate = "";
        _this.Op_TruckNo = "";
        _this.Op_VendorCode = "";
        _this.Vnd_nameA = "";
        _this.Vnd_NameE = "";
        _this.Op_Status = 0;
        _this.FromSls_Code = "";
        _this.FromSls_NameA = "";
        _this.FromSls_NameE = "";
        _this.ToSls_Code = "";
        _this.ToSls_NameA = "";
        _this.Tosls_NameE = "";
        _this.IsSent_Desc = "";
        _this.TrType_Desc = "";
        return _this;
    }
    return IQ_GetOperationTF;
}(SecurityClass));
var IQ_GetOperationTFDetail = /** @class */ (function (_super) {
    __extends(IQ_GetOperationTFDetail, _super);
    function IQ_GetOperationTFDetail() {
        var _this = _super.call(this) || this;
        _this.OperationTFDetailID = 0;
        _this.OperationTFID = 0;
        _this.OperationItemID = 0;
        _this.ItemID = 0;
        _this.SendQty = 0;
        _this.RecQty = 0;
        _this.ItemCode = "";
        _this.IT_DescA = "";
        _this.IT_DescE = "";
        _this.FamilyCode = "";
        _this.FamDescA = "";
        _this.Fam_DescE = "";
        return _this;
    }
    return IQ_GetOperationTFDetail;
}(SecurityClass));
var IQ_GetOPerationTransferWithDetail = /** @class */ (function (_super) {
    __extends(IQ_GetOPerationTransferWithDetail, _super);
    function IQ_GetOPerationTransferWithDetail() {
        var _this = _super.call(this) || this;
        _this.IQ_GetOperationTF = new Array();
        _this.IQ_GetOperationTFDetail = new Array();
        return _this;
    }
    return IQ_GetOPerationTransferWithDetail;
}(SecurityClass));
var OPerationSalesmanTransferWithDetail = /** @class */ (function (_super) {
    __extends(OPerationSalesmanTransferWithDetail, _super);
    function OPerationSalesmanTransferWithDetail() {
        var _this = _super.call(this) || this;
        _this.I_TR_OperationTF = new I_TR_OperationTF();
        _this.I_TR_OperationTFDetail = new Array();
        return _this;
    }
    return OPerationSalesmanTransferWithDetail;
}(SecurityClass));
var AVAT_CONTROL = /** @class */ (function (_super) {
    __extends(AVAT_CONTROL, _super);
    function AVAT_CONTROL() {
        var _this = _super.call(this) || this;
        _this.COMP_CODE = 0;
        _this.VAT_YEAR = 0;
        _this.VAT_SETTING = false;
        _this.VAT_PERIOD = 0;
        _this.VAT_START_DATE = "";
        _this.VAT_END_DATE = "";
        _this.VAT_CR_ACC = "";
        _this.VAT_DB_ACC = "";
        _this.VAT_ACCURUAL_ACC = "";
        _this.VAT_WARNING_DAYS = 0;
        _this.VAT_ALLOWED_DAYS = 0;
        _this.VAT_PREVBAL = 0;
        _this.Sls_DISC_ACC_CODE = "";
        _this.Pur_DISC_ACC_CODE = "";
        return _this;
    }
    return AVAT_CONTROL;
}(SecurityClass));
var A_Rec_D_Customer = /** @class */ (function (_super) {
    __extends(A_Rec_D_Customer, _super);
    function A_Rec_D_Customer() {
        var _this = _super.call(this) || this;
        _this.CustomerId = 0;
        _this.CustomerCODE = "";
        _this.CatID = 0;
        _this.GroupId = 0;
        _this.NAMEA = "";
        _this.NAMEE = "";
        _this.SHORTNAME = "";
        _this.TEL = "";
        _this.FAX = "";
        _this.EMAIL = "";
        _this.CURCODE = "";
        _this.REMARKS = "";
        _this.STATUS = false;
        _this.MOBILE = "";
        _this.Bank = "";
        _this.AccountNo = "";
        _this.ManagerName = "";
        _this.NationalityID = 0;
        _this.BranchCode = 0;
        _this.CompCode = 0;
        _this.CREATED_BY = "";
        _this.CREATED_AT = "";
        _this.UPDATED_AT = "";
        _this.UPDATED_BY = "";
        _this.Employer = "";
        _this.JobName = "";
        _this.WorkTel = "";
        _this.WorkAddress = "";
        _this.VATType = 0;
        _this.AddDedType = 0;
        _this.AddDedNo = "";
        _this.VatNo = "";
        _this.Isactive = false;
        _this.IsAuthorized = false;
        _this.CreditLimit = 0;
        _this.CreditLimitFC = 0;
        _this.CreditPeriod = 0;
        _this.OpenBalanceFC = 0;
        _this.Openbalance = 0;
        _this.Debit = 0;
        _this.DebitFC = 0;
        _this.Credit = 0;
        _this.CreditFC = 0;
        _this.PaymentType = 0;
        _this.FCRate = 0;
        _this.CreditExpiryDate = "";
        _this.RefCode2 = "";
        _this.RefCode1 = "";
        _this.IsCreditCustomer = false;
        _this.DiscountplanID = 0;
        _this.SalesmanId = 0;
        _this.Address_postal = "";
        _this.Address_Province = "";
        _this.GroupVatNo = "";
        _this.Address_Street = "";
        _this.Address_Str_Additional = "";
        _this.Address_BuildingNo = "";
        _this.Address_Build_Additional = "";
        _this.Address_City = "";
        _this.Address_District = "";
        _this.OpenbalanceAt;
        return _this;
    }
    return A_Rec_D_Customer;
}(SecurityClass));
var A_Rec_D_CustomerDoc = /** @class */ (function (_super) {
    __extends(A_Rec_D_CustomerDoc, _super);
    function A_Rec_D_CustomerDoc() {
        var _this = _super.call(this) || this;
        _this.CustomerDocID = 0;
        _this.CustomerId = 0;
        _this.CusIDTypeCode = 0;
        _this.IDNo = "";
        _this.IDIssuePlace = "";
        _this.IDIssueDate = "";
        _this.IDIssueDateH = "";
        _this.IDExpireDate = "";
        _this.IDExpireDateH = "";
        _this.StatusFlag = "";
        return _this;
    }
    return A_Rec_D_CustomerDoc;
}(SecurityClass));
var A_Pay_D_Vendor = /** @class */ (function (_super) {
    __extends(A_Pay_D_Vendor, _super);
    function A_Pay_D_Vendor() {
        var _this = _super.call(this) || this;
        _this.VendorID = 0;
        _this.CompCode = 0;
        _this.VendorCode = "";
        _this.CatID = 0;
        _this.GroupId = 0;
        _this.NAMEA = "";
        _this.NAMEL = "";
        _this.SHORTNAMEA = "";
        _this.SHORTNAMEL = "";
        _this.NationalityID = 0;
        _this.RespPersonName = "";
        _this.RespPersonMobile = "";
        _this.TEL = "";
        _this.WorkTel = "";
        _this.MOBILE = 0;
        _this.EMAIL = "";
        _this.CURCODE = "";
        _this.PurchaserId = 0;
        _this.OnPurchaserAcc = false;
        _this.AccVendorID = 0;
        _this.PaymentType = 0;
        _this.DebitLimit = 0;
        _this.DebitLimitFC = 0;
        _this.DebitPeriod = 0;
        _this.OpenBalanceFC = 0;
        _this.Openbalance = 0;
        _this.OpenbalanceAt;
        _this.Debit = 0;
        _this.DebitFC = 0;
        _this.Credit = 0;
        _this.CreditFC = 0;
        _this.Isactive = false;
        _this.FCRate = 0;
        _this.REMARKS = "";
        _this.STATUS = 0;
        _this.CREATED_BY = "";
        _this.CREATED_AT = "";
        _this.UPDATED_AT = "";
        _this.UPDATED_BY = "";
        _this.VendorType = 0;
        _this.Bank = "";
        _this.BankAccountNo = "";
        _this.TaxFileNo = "";
        _this.TaxIssuePlace = "";
        _this.VATType = 0;
        _this.AddDedType = 0;
        _this.VATNo = "";
        _this.AddDedNo = "";
        _this.IsWebEnabled = false;
        _this.WebUserName = "";
        _this.WebPassword = "";
        _this.IsCreditVendor = false;
        _this.IDNo = "";
        _this.Address_postal = "";
        _this.Address_Province = "";
        _this.GroupVatNo = "";
        _this.Address_Street = "";
        _this.Address_Str_Additional = "";
        _this.Address_BuildingNo = "";
        _this.Address_Build_Additional = "";
        _this.Address_City = "";
        _this.Address_District = "";
        _this.OperationFixed = "";
        _this.OperationSer = "";
        return _this;
    }
    return A_Pay_D_Vendor;
}(SecurityClass));
var A_Pay_D_VendorDoc = /** @class */ (function (_super) {
    __extends(A_Pay_D_VendorDoc, _super);
    function A_Pay_D_VendorDoc() {
        var _this = _super.call(this) || this;
        _this.VendorDocID = 0;
        _this.VendorId = 0;
        _this.VndIDTypeCode = 0;
        _this.IDNo = "";
        _this.IDIssuePlace = "";
        _this.IDIssueDate = "";
        _this.IDIssueDateH = "";
        _this.IDExpireDate = "";
        _this.IDExpireDateH = "";
        _this.StatusFlag = "";
        return _this;
    }
    return A_Pay_D_VendorDoc;
}(SecurityClass));
var G_Codes = /** @class */ (function (_super) {
    __extends(G_Codes, _super);
    function G_Codes() {
        var _this = _super.call(this) || this;
        _this.ID = 0;
        _this.CodeType = "";
        _this.CodeValue = 0;
        _this.DescA = "";
        _this.DescE = "";
        _this.SubCode = "";
        _this.Remarks = "";
        _this.StdCode = "";
        return _this;
    }
    return G_Codes;
}(SecurityClass));
var IQ_GetCustomer = /** @class */ (function (_super) {
    __extends(IQ_GetCustomer, _super);
    function IQ_GetCustomer() {
        var _this = _super.call(this) || this;
        _this.CustomerId = 0;
        _this.CustomerCODE = "";
        _this.CatID = 0;
        _this.GroupId = 0;
        _this.NAMEA = "";
        _this.NAMEE = "";
        _this.SHORTNAME = "";
        _this.TEL = "";
        _this.FAX = "";
        _this.EMAIL = "";
        _this.CURCODE = "";
        _this.REMARKS = "";
        _this.STATUS = false;
        _this.MOBILE = "";
        _this.Bank = "";
        _this.AccountNo = "";
        _this.ManagerName = "";
        _this.NationalityID = 0;
        _this.BranchCode = 0;
        _this.CompCode = 0;
        _this.CREATED_BY = "";
        _this.CREATED_AT = "";
        _this.UPDATED_AT = "";
        _this.UPDATED_BY = "";
        _this.Employer = "";
        _this.JobName = "";
        _this.WorkTel = "";
        _this.WorkAddress = "";
        _this.VATType = 0;
        _this.AddDedType = 0;
        _this.AddDedNo = "";
        _this.VatNo = "";
        _this.Isactive = false;
        _this.IsAuthorized = false;
        _this.CreditLimit = 0;
        _this.CreditLimitFC = 0;
        _this.CreditPeriod = 0;
        _this.OpenBalanceFC = 0;
        _this.Openbalance = 0;
        _this.Debit = 0;
        _this.DebitFC = 0;
        _this.Credit = 0;
        _this.CreditFC = 0;
        _this.PaymentType = 0;
        _this.FCRate = 0;
        _this.CreditExpiryDate = "";
        _this.RefCode2 = "";
        _this.RefCode1 = "";
        _this.IsCreditCustomer = false;
        _this.DiscountplanID = 0;
        _this.SalesmanId = 0;
        _this.SalesmanCode = "";
        _this.Sls_NameA = "";
        _this.Sls_NameE = "";
        _this.CatCode = "";
        _this.Cat_DescA = "";
        _this.Cat_DescE = "";
        _this.GroupCode = "";
        _this.Group_DescA = "";
        _this.Group_DescE = "";
        _this.Balance = 0;
        _this.Address_postal = "";
        _this.Address_Province = "";
        _this.GroupVatNo = "";
        _this.Address_Street = "";
        _this.Address_Str_Additional = "";
        _this.Address_BuildingNo = "";
        _this.Address_Build_Additional = "";
        _this.Address_City = "";
        _this.Address_District = "";
        _this.OpenbalanceAt = "";
        return _this;
    }
    return IQ_GetCustomer;
}(SecurityClass));
var IQ_GetVendor = /** @class */ (function (_super) {
    __extends(IQ_GetVendor, _super);
    function IQ_GetVendor() {
        var _this = _super.call(this) || this;
        _this.VendorID = 0;
        _this.CatID = 0;
        _this.GroupId = 0;
        _this.NAMEA = "";
        _this.TEL = "";
        _this.EMAIL = "";
        _this.CURCODE = "";
        _this.REMARKS = "";
        _this.STATUS = 0;
        _this.MOBILE = 0;
        _this.Bank = "";
        _this.NationalityID = 0;
        _this.IDNo = "";
        _this.CompCode = 0;
        _this.CREATED_BY = "";
        _this.CREATED_AT = "";
        _this.UPDATED_AT = "";
        _this.UPDATED_BY = "";
        _this.WorkTel = "";
        _this.VATType = 0;
        _this.AddDedType = 0;
        _this.AddDedNo = "";
        _this.VATNo = "";
        _this.Isactive = false;
        _this.OpenBalanceFC = 0;
        _this.Openbalance = 0;
        _this.OpenbalanceAt;
        _this.Debit = 0;
        _this.DebitFC = 0;
        _this.Credit = 0;
        _this.CreditFC = 0;
        _this.PaymentType = 0;
        _this.FCRate = 0;
        _this.CatCode = "";
        _this.Cat_DescA = "";
        _this.Cat_DescE = "";
        _this.GroupCode = "";
        _this.Group_DescA = "";
        _this.Group_DescE = "";
        _this.Balance = 0;
        _this.VendorCode = "";
        _this.NAMEL = "";
        _this.SHORTNAMEA = "";
        _this.SHORTNAMEL = "";
        _this.RespPersonName = "";
        _this.RespPersonMobile = "";
        _this.PurchaserId = 0;
        _this.OnPurchaserAcc = false;
        _this.AccVendorID = 0;
        _this.DebitLimit = 0;
        _this.DebitPeriod = 0;
        _this.DebitLimitFC = 0;
        _this.BankAccountNo = "";
        _this.TaxFileNo = "";
        _this.TaxIssuePlace = "";
        _this.IsCreditVendor = false;
        _this.WebPassword = "";
        _this.WebUserName = "";
        _this.IsWebEnabled = false;
        _this.VendorType = 0;
        _this.Type_DescA = "";
        _this.Type_DescE = "";
        _this.Address_postal = "";
        _this.Address_Province = "";
        _this.GroupVatNo = "";
        _this.Address_Street = "";
        _this.Address_BuildingNo = "";
        _this.Address_Str_Additional = "";
        _this.Address_Build_Additional = "";
        _this.Address_City = "";
        _this.Address_District = "";
        return _this;
    }
    return IQ_GetVendor;
}(SecurityClass));
var AQ_GetVendorDoc = /** @class */ (function (_super) {
    __extends(AQ_GetVendorDoc, _super);
    function AQ_GetVendorDoc() {
        var _this = _super.call(this) || this;
        _this.VendorDocID = 0;
        _this.VendorId = 0;
        _this.VndIDTypeCode = 0;
        _this.IDNo = "";
        _this.IDIssuePlace = "";
        _this.IDIssueDate = "";
        _this.IDIssueDateH = "";
        _this.IDExpireDate = "";
        _this.IDExpireDateH = "";
        _this.Doc_DescA = "";
        _this.Doc_DescE = "";
        _this.Doc_StdCode = "";
        return _this;
    }
    return AQ_GetVendorDoc;
}(SecurityClass));
var AQ_GetCustomerDoc = /** @class */ (function (_super) {
    __extends(AQ_GetCustomerDoc, _super);
    function AQ_GetCustomerDoc() {
        var _this = _super.call(this) || this;
        _this.CustomerDocID = 0;
        _this.CustomerId = 0;
        _this.CusIDTypeCode = 0;
        _this.IDNo = "";
        _this.IDIssuePlace = "";
        _this.IDIssueDateH = "";
        _this.IDIssueDate = "";
        _this.IDExpireDate = "";
        _this.IDExpireDateH = "";
        _this.Doc_DescA = "";
        _this.Doc_DescE = "";
        _this.Doc_StdCode = "";
        return _this;
    }
    return AQ_GetCustomerDoc;
}(SecurityClass));
var IQ_GetItemCategory = /** @class */ (function (_super) {
    __extends(IQ_GetItemCategory, _super);
    function IQ_GetItemCategory() {
        var _this = _super.call(this) || this;
        _this.CatID = 0;
        _this.CompCode = 0;
        _this.CatCode = "";
        _this.DescA = "";
        _this.DescL = "";
        _this.CatLevel = 0;
        _this.ParentCatId = 0;
        _this.IsDetail = false;
        _this.UnitGrpID = 0;
        _this.IsAutoGenerateItem = false;
        _this.ItemFormatFix = "";
        _this.ItemFormatSerial = "";
        _this.ItemTypeID = 0;
        _this.CostMethodID = 0;
        _this.StockMethodID = 0;
        _this.IssueFromCenteralStore = false;
        _this.CenteralStoreCode = 0;
        _this.IsAdditionalSpecs = false;
        _this.AdditionalspcsDescA = "";
        _this.AdditionalspcsDescL = "";
        _this.ISSales = false;
        _this.IsStock = false;
        _this.IsProduct = false;
        _this.IsIssuetoCC = false;
        _this.IsIssueToProd = false;
        _this.IsPurchase = false;
        _this.Remarks = "";
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.VatNatID = 0;
        _this.VatNatureCode = "";
        _this.VatNatureDescA = "";
        _this.VatNatureDescE = "";
        _this.VatPrc = 0;
        _this.CashSales_ACC_CODE = "";
        _this.CashSalesRet_ACC_CODE = "";
        _this.CashSalesDisc_ACC_CODE = "";
        _this.CreditSales_ACC_CODE = "";
        _this.CreditSalesRet_ACC_CODE = "";
        _this.CreditSalesDisc_ACC_CODE = "";
        _this.Pur_ACC_CODE = "";
        _this.PurRet_ACC_CODE = "";
        _this.PurDisc_ACC_CODE = "";
        _this.Type_DescA = "";
        _this.Type_DescE = "";
        return _this;
    }
    return IQ_GetItemCategory;
}(SecurityClass));
var IQVendorMasterDetail = /** @class */ (function (_super) {
    __extends(IQVendorMasterDetail, _super);
    function IQVendorMasterDetail() {
        var _this = _super.call(this) || this;
        _this.IQ_GetVendor = new Array();
        _this.AQ_GetVendorDoc = new Array();
        return _this;
    }
    return IQVendorMasterDetail;
}(SecurityClass));
var VendorMasterDetail = /** @class */ (function (_super) {
    __extends(VendorMasterDetail, _super);
    function VendorMasterDetail() {
        var _this = _super.call(this) || this;
        _this.A_Pay_D_Vendor = new A_Pay_D_Vendor();
        _this.A_Pay_D_VendorDoc = new Array();
        return _this;
    }
    return VendorMasterDetail;
}(SecurityClass));
var G_Currency = /** @class */ (function (_super) {
    __extends(G_Currency, _super);
    function G_Currency() {
        var _this = _super.call(this) || this;
        _this.CurrencyID = 0;
        _this.CurrencyCode = "";
        _this.DescA = "";
        _this.DescL = "";
        _this.Remarks = "";
        return _this;
    }
    return G_Currency;
}(SecurityClass));
var AQVAT_GetService = /** @class */ (function (_super) {
    __extends(AQVAT_GetService, _super);
    function AQVAT_GetService() {
        var _this = _super.call(this) || this;
        _this.Itemid = 0;
        _this.ItemCode = "";
        _this.Itm_DescA = "";
        _this.Itm_DescE = "";
        _this.CompCode = 0;
        _this.Remarks = "";
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.Uom_DescA = "";
        _this.Uom_DescE = "";
        _this.VatPrc = 0;
        _this.VatNatID = 0;
        _this.SrvCategoryID = 0;
        _this.UnitPrice = 0;
        _this.UomID = 0;
        _this.UomCode = "";
        _this.CAT_CODE = "";
        _this.Cat_DescA = "";
        _this.cat_DescE = "";
        _this.VatNatureCode = "";
        _this.VatNatureDescA = "";
        _this.VatNatureDescE = "";
        _this.RefItemCode = "";
        _this.OldItemCode = "";
        _this.VndItemCode = "";
        _this.IsPurchase = false;
        return _this;
    }
    return AQVAT_GetService;
}(SecurityClass));
var AVAT_D_Service = /** @class */ (function (_super) {
    __extends(AVAT_D_Service, _super);
    function AVAT_D_Service() {
        var _this = _super.call(this) || this;
        _this.Itemid = 0;
        _this.SrvCategoryID = 0;
        _this.ItemCode = "";
        _this.CompCode = 0;
        _this.DescA = "";
        _this.DescL = "";
        _this.UnitPrice = 0;
        _this.Remarks = "";
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.UomID = 0;
        _this.RefItemCode = "";
        _this.OldItemCode = "";
        _this.VndItemCode = "";
        return _this;
    }
    return AVAT_D_Service;
}(SecurityClass));
var AVAT_TR_SlsInvoice = /** @class */ (function (_super) {
    __extends(AVAT_TR_SlsInvoice, _super);
    function AVAT_TR_SlsInvoice() {
        var _this = _super.call(this) || this;
        _this.InvoiceID = 0;
        _this.TrNo = 0;
        _this.RefNO = "";
        _this.RefTrID = 0;
        _this.TrDate = "";
        _this.TrDateH = "";
        _this.TrType = 0;
        _this.IsCash = false;
        _this.SlsInvType = 0;
        _this.SlsInvSrc = 0;
        _this.CustomerId = 0;
        _this.CustomerName = "";
        _this.CustomerMobileNo = "";
        _this.SalesmanId = 0;
        _this.TotalAmount = 0;
        _this.VatAmount = 0;
        _this.VatType = 0;
        _this.DiscountAmount = 0;
        _this.DiscountPrc = 0;
        _this.NetAfterVat = 0;
        _this.CashAmount = 0;
        _this.CardAmount = 0;
        _this.BankTfAmount = 0;
        _this.BankAccount = "";
        _this.TotalPaidAmount = 0;
        _this.RemainAmount = 0;
        _this.Remark = "";
        _this.Status = 0;
        _this.IsPosted = false;
        _this.VoucherNo = 0;
        _this.VoucherType = 0;
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.DocNo = "";
        _this.DocUUID = "";
        _this.TrTime = "";
        _this.InvoiceTypeCode = 0;
        _this.InvoiceTransCode = 0;
        _this.TaxNotes = "";
        _this.TaxCurrencyID = 0;
        _this.InvoiceCurrenyID = 0;
        _this.ContractNo = "";
        _this.PurchaseorderNo = "";
        _this.GlobalInvoiceCounter = 0;
        _this.PrevInvoiceHash;
        _this.QRCode;
        _this.CryptographicStamp;
        _this.DeliveryDate = "";
        _this.DeliveryEndDate = "";
        _this.PaymentMeansTypeCode = 0;
        _this.CRDBReasoncode = 0;
        _this.PaymentTerms = "";
        _this.PaymentTermsID = 0;
        _this.AllowAmount = 0;
        _this.AllowPrc = 0;
        _this.AllowBase = 0;
        _this.AllowVatNatID = 0;
        _this.AllowVatPrc = 0;
        _this.AllowAfterVat = 0;
        _this.AllowReason = "";
        _this.AllowCode = 0;
        _this.ChargeAmount = 0;
        _this.ChargePrc = 0;
        _this.ChargeBase = 0;
        _this.ChargeVatNatID = 0;
        _this.ChargeVatPrc = 0;
        _this.ChargeAfterVat = 0;
        _this.ChargeReason = "";
        _this.ChargeCode = 0;
        _this.ItemTotal = 0;
        _this.ItemAllowTotal = 0;
        _this.ItemDiscountTotal = 0;
        _this.ItemVatTotal = 0;
        _this.RoundingAmount = 0;
        return _this;
    }
    return AVAT_TR_SlsInvoice;
}(SecurityClass));
var AVAT_TR_SlsInvoiceItem = /** @class */ (function (_super) {
    __extends(AVAT_TR_SlsInvoiceItem, _super);
    function AVAT_TR_SlsInvoiceItem() {
        var _this = _super.call(this) || this;
        _this.InvoiceItemID = 0;
        _this.InvoiceID = 0;
        _this.ItemID = 0;
        _this.UomID = 0;
        _this.InvoiceSoldQty = 0;
        _this.SoldQty = 0;
        _this.Unitprice = 0;
        _this.DiscountPrc = 0;
        _this.DiscountAmount = 0;
        _this.NetUnitPrice = 0;
        _this.ItemTotal = 0;
        _this.VatPrc = 0;
        _this.VatAmount = 0;
        _this.NetAfterVat = 0;
        _this.VatApplied = 0;
        _this.TotRetQty = 0;
        _this.Serial = 0;
        _this.AllowAmount = 0;
        _this.AllowancePrc = 0;
        _this.AllowanceBase = 0;
        _this.AllowReason = "";
        _this.AllowCode = 0;
        _this.BaseQty = 0;
        _this.BaseQtyUomid = 0;
        _this.BaseQtyPrice = 0;
        _this.BaseQtyDiscount = 0;
        _this.DiscountPrcBase = 0;
        _this.DiscountVatNatID = 0;
        _this.Discountreason = "";
        _this.DiscountCode = 0;
        _this.ItemNetAmount = 0;
        _this.ChargeAmount = 0;
        _this.ChargePrc = 0;
        _this.ChargeBase = 0;
        _this.ChargeVatNatID = 0;
        _this.ChargeVatPrc = 0;
        _this.ChargeAfterVat = 0;
        _this.ChargeReason = "";
        _this.ChargeCode = 0;
        _this.VatNatID = 0;
        _this.CC_CODE = "";
        _this.StatusFlag = "";
        return _this;
    }
    return AVAT_TR_SlsInvoiceItem;
}(SecurityClass));
var AQVAT_GetSlsInvoiceItem = /** @class */ (function (_super) {
    __extends(AQVAT_GetSlsInvoiceItem, _super);
    function AQVAT_GetSlsInvoiceItem() {
        var _this = _super.call(this) || this;
        _this.InvoiceItemID = 0;
        _this.InvoiceID = 0;
        _this.ItemID = 0;
        _this.UomID = 0;
        _this.SoldQty = 0;
        _this.Unitprice = 0;
        _this.DiscountPrc = 0;
        _this.DiscountAmount = 0;
        _this.NetUnitPrice = 0;
        _this.ItemTotal = 0;
        _this.VatPrc = 0;
        _this.VatAmount = 0;
        _this.NetAfterVat = 0;
        _this.VatApplied = 0;
        _this.TotRetQty = 0;
        _this.it_itemCode = "";
        _this.it_DescA = "";
        _this.CompCode = 0;
        _this.It_DescE = "";
        _this.Uom_Code = "";
        _this.Uom_DescA = "";
        _this.Uom_DescE = "";
        _this.InvoiceSoldQty = 0;
        _this.Serial = 0;
        _this.AllowAmount = 0;
        _this.AllowancePrc = 0;
        _this.AllowanceBase = 0;
        _this.AllowReason = "";
        _this.AllowCode = 0;
        _this.BaseQty = 0;
        _this.BaseQtyUomid = 0;
        _this.BaseQtyPrice = 0;
        _this.BaseQtyDiscount = 0;
        _this.DiscountPrcBase = 0;
        _this.DiscountVatNatID = 0;
        _this.Discountreason = "";
        _this.DiscountCode = 0;
        _this.ItemNetAmount = 0;
        _this.ChargeAmount = 0;
        _this.ChargePrc = 0;
        _this.ChargeBase = 0;
        _this.ChargeVatNatID = 0;
        _this.ChargeVatPrc = 0;
        _this.ChargeAfterVat = 0;
        _this.ChargeReason = "";
        _this.ChargeCode = 0;
        _this.VatNatID = 0;
        _this.CC_CODE = "";
        _this.CC_DESCA = "";
        _this.CC_DESCE = "";
        _this.Cat_DescA = "";
        _this.cat_DescE = "";
        _this.CAT_CODE = "";
        _this.Remarks = "";
        return _this;
    }
    return AQVAT_GetSlsInvoiceItem;
}(SecurityClass));
var AQVAT_GetSlsInvoiceList = /** @class */ (function (_super) {
    __extends(AQVAT_GetSlsInvoiceList, _super);
    function AQVAT_GetSlsInvoiceList() {
        var _this = _super.call(this) || this;
        _this.InvoiceID = 0;
        _this.TrNo = 0;
        _this.RefNO = "";
        _this.RefTrID = 0;
        _this.TrDate = "";
        _this.TrDateH = "";
        _this.TrType = 0;
        _this.IsCash = false;
        _this.SlsInvType = 0;
        _this.SlsInvSrc = 0;
        _this.CustomerId = 0;
        _this.CustomerName = "";
        _this.CustomerMobileNo = "";
        _this.SalesmanId = 0;
        _this.TotalAmount = 0;
        _this.VatAmount = 0;
        _this.VatType = 0;
        _this.DiscountAmount = 0;
        _this.DiscountPrc = 0;
        _this.NetAfterVat = 0;
        _this.CashAmount = 0;
        _this.CardAmount = 0;
        _this.BankTfAmount = 0;
        _this.BankAccount = "";
        _this.TotalPaidAmount = 0;
        _this.RemainAmount = 0;
        _this.Remark = "";
        _this.Status = 0;
        _this.IsPosted = false;
        _this.VoucherNo = 0;
        _this.VoucherType = 0;
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.Slsm_Code = "";
        _this.Slsm_DescA = "";
        _this.Slsm_DescE = "";
        _this.Cus_Code = "";
        _this.Cus_NameA = "";
        _this.Cus_NameE = "";
        _this.DocNo = "";
        _this.DocUUID = "";
        _this.TrTime = "";
        _this.InvoiceTypeCode = 0;
        _this.InvoiceTransCode = 0;
        _this.TaxNotes = "";
        _this.TaxCurrencyID = 0;
        _this.InvoiceCurrenyID = 0;
        _this.ContractNo = "";
        _this.PurchaseorderNo = "";
        _this.GlobalInvoiceCounter = 0;
        _this.PrevInvoiceHash;
        _this.QRCode;
        _this.CryptographicStamp;
        _this.DeliveryDate = "";
        _this.DeliveryEndDate = "";
        _this.PaymentMeansTypeCode = 0;
        _this.CRDBReasoncode = 0;
        _this.PaymentTerms = "";
        _this.PaymentTermsID = 0;
        _this.AllowAmount = 0;
        _this.AllowPrc = 0;
        _this.AllowBase = 0;
        _this.AllowVatNatID = 0;
        _this.AllowVatPrc = 0;
        _this.AllowAfterVat = 0;
        _this.AllowReason = "";
        _this.AllowCode = 0;
        _this.ChargeAmount = 0;
        _this.ChargePrc = 0;
        _this.ChargeBase = 0;
        _this.ChargeVatNatID = 0;
        _this.ChargeVatPrc = 0;
        _this.ChargeAfterVat = 0;
        _this.ChargeReason = "";
        _this.ChargeCode = 0;
        _this.ItemTotal = 0;
        _this.ItemAllowTotal = 0;
        _this.ItemDiscountTotal = 0;
        _this.ItemVatTotal = 0;
        _this.RoundingAmount = 0;
        _this.RetInv_TrNo = 0;
        _this.statusDesciption = "";
        _this.IsCashDesciption = "";
        _this.RetInv_DocNo = "";
        return _this;
    }
    return AQVAT_GetSlsInvoiceList;
}(SecurityClass));
var AQVAT_GetPurReturnDetail = /** @class */ (function () {
    function AQVAT_GetPurReturnDetail() {
        this.InvoiceDetailID = 0;
        this.TR_SERIAL = 0;
        this.Itemid = 0;
        this.UomID = 0;
        this.Unitprice = 0;
        this.DiscountPrc = 0;
        this.DiscountAmount = 0;
        this.NetUnitPrice = 0;
        this.ItemTotal = 0;
        this.VatApplied = 0;
        this.VatPrc = 0;
        this.VatAmount = 0;
        this.REMARK = "";
        this.ACTUAL_DATE = "";
        this.QTY_RET = 0;
        this.CC_CODE = "";
        this.CCDT_CODE = "";
        this.VatNatID = 0;
        this.VatNatureCode = "";
        this.VatNatureDescA = "";
        this.VatNatureDescE = "";
        this.CC_DESCA = "";
        this.CC_DESCE = "";
        this.uom_DescA = "";
        this.uom_DescE = "";
        this.UomCode = "";
        this.ItemCode = "";
        this.itm_DescA = "";
        this.itm_DescE = "";
        this.CompCode = 0;
        this.BranchCode = 0;
        this.InvoiceRetID = 0;
        this.InvoiceRetDetailid = 0;
        this.QTY_SOLD = 0;
    }
    return AQVAT_GetPurReturnDetail;
}());
var AQ_ServSlsInvoiceMasterDetails = /** @class */ (function (_super) {
    __extends(AQ_ServSlsInvoiceMasterDetails, _super);
    function AQ_ServSlsInvoiceMasterDetails() {
        var _this = _super.call(this) || this;
        _this.AQVAT_GetSlsInvoiceList = new Array();
        _this.AQVAT_GetSlsInvoiceItem = new Array();
        return _this;
    }
    return AQ_ServSlsInvoiceMasterDetails;
}(SecurityClass));
var ServSlsInvoiceMasterDetails = /** @class */ (function (_super) {
    __extends(ServSlsInvoiceMasterDetails, _super);
    function ServSlsInvoiceMasterDetails() {
        var _this = _super.call(this) || this;
        _this.AVAT_TR_SlsInvoice = new AVAT_TR_SlsInvoice();
        _this.AVAT_TR_SlsInvoiceItem = new Array();
        return _this;
    }
    return ServSlsInvoiceMasterDetails;
}(SecurityClass));
var AQVAT_GetPurInvoiceHeader = /** @class */ (function (_super) {
    __extends(AQVAT_GetPurInvoiceHeader, _super);
    function AQVAT_GetPurInvoiceHeader() {
        var _this = _super.call(this) || this;
        _this.InvoiceHeaderID = 0;
        _this.InvoiceId = 0;
        _this.COMPCODE = 0;
        _this.BranchCode = 0;
        _this.Ref_No = "";
        _this.DocNo = "";
        _this.VND_SERIAL = 0;
        _this.VendorID = 0;
        _this.TR_TYPE = 0;
        _this.VENDOR_NAME = "";
        _this.TOTAL = 0;
        _this.DISCOUNT = 0;
        _this.PAID = 0;
        _this.Vat = 0;
        _this.NetATax = 0;
        _this.VatApplied = false;
        _this.VndVatType = 0;
        _this.VatPrc = 0;
        _this.SalesType = 0;
        _this.PAY_ACC_CODE = "";
        _this.REMARK = "";
        _this.InvoiceDate = "";
        _this.CCDT_CODE = "";
        _this.VendorCode = "";
        _this.vnd_NameA = "";
        _this.Vnd_NameE = "";
        _this.ACC_DESCA = "";
        _this.ACC_DESCL = "";
        _this.StatusFlag = "";
        return _this;
    }
    return AQVAT_GetPurInvoiceHeader;
}(SecurityClass));
var AQVAT_GetPurInvoiceDetail = /** @class */ (function (_super) {
    __extends(AQVAT_GetPurInvoiceDetail, _super);
    function AQVAT_GetPurInvoiceDetail() {
        var _this = _super.call(this) || this;
        _this.InvoiceDetailID = 0;
        _this.InvoiceHeaderID = 0;
        _this.InvoiceId = 0;
        _this.TR_SERIAL = 0;
        _this.ItemID = 0;
        _this.UomID = 0;
        _this.SoldQty = 0;
        _this.Unitprice = 0;
        _this.DiscountPrc = 0;
        _this.DiscountAmount = 0;
        _this.NetUnitPrice = 0;
        _this.ItemTotal = 0;
        _this.VatApplied = 0;
        _this.VatPrc = 0;
        _this.VatAmount = 0;
        _this.NetAfterVat = 0;
        _this.REMARK = "";
        _this.ACTUAL_DATE = "";
        _this.QTY_RET = 0;
        _this.CC_CODE = "";
        _this.CCDT_CODE = "";
        _this.VatNatID = 0;
        _this.VatNatureCode = "";
        _this.VatNatureDescA = "";
        _this.VatNatureDescE = "";
        _this.CC_DESCA = "";
        _this.CC_DESCE = "";
        _this.uom_DescA = "";
        _this.uom_DescE = "";
        _this.UomCode = "";
        _this.ItemCode = "";
        _this.itm_DescA = "";
        _this.itm_DescE = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.VND_SERIAL = 0;
        _this.StatusFlag = "";
        return _this;
    }
    return AQVAT_GetPurInvoiceDetail;
}(SecurityClass));
var AVAT_TR_PurInvoice = /** @class */ (function (_super) {
    __extends(AVAT_TR_PurInvoice, _super);
    function AVAT_TR_PurInvoice() {
        var _this = _super.call(this) || this;
        _this.InvoiceId = 0;
        _this.TR_NO = 0;
        _this.DocNo = "";
        _this.TR_DATE = "";
        _this.PERSON = "";
        _this.TOTAL = 0;
        _this.DISCOUNT = 0;
        _this.PAID = 0;
        _this.JOURNAL_NO = 0;
        _this.JOURNAL_RET_NO = 0;
        _this.CLOSED = false;
        _this.CANCEL = false;
        _this.Remark = "";
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.IsPosted = false;
        _this.ACTUAL_DATE = "";
        _this.PrntNo = "";
        _this.Ref_No = "";
        _this.Vat = 0;
        _this.NetATax = 0;
        _this.InvoiceDate = "";
        _this.ImportInvoice = false;
        _this.CCDT_CODE = "";
        _this.ImportInvoiceDesc = "";
        _this.CLOSEDDesc = "";
        return _this;
    }
    return AVAT_TR_PurInvoice;
}(SecurityClass));
var AVAT_TR_PurInvoiceDetail = /** @class */ (function (_super) {
    __extends(AVAT_TR_PurInvoiceDetail, _super);
    function AVAT_TR_PurInvoiceDetail() {
        var _this = _super.call(this) || this;
        _this.InvoiceDetailID = 0;
        _this.InvoiceHeaderID = 0;
        _this.InvoiceId = 0;
        _this.TR_SERIAL = 0;
        _this.ItemID = 0;
        _this.UomID = 0;
        _this.SoldQty = 0;
        _this.Unitprice = 0;
        _this.DiscountPrc = 0;
        _this.DiscountAmount = 0;
        _this.NetUnitPrice = 0;
        _this.ItemTotal = 0;
        _this.VatApplied = 0;
        _this.VatPrc = 0;
        _this.VatAmount = 0;
        _this.NetAfterVat = 0;
        _this.REMARK = "";
        _this.ACTUAL_DATE = "";
        _this.QTY_RET = 0;
        _this.CC_CODE = "";
        _this.CCDT_CODE = "";
        _this.VatNatID = 0;
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.VND_SERIAL = 0;
        _this.StatusFlag = "";
        return _this;
    }
    return AVAT_TR_PurInvoiceDetail;
}(SecurityClass));
var AVAT_TR_PurInvoiceHeader = /** @class */ (function (_super) {
    __extends(AVAT_TR_PurInvoiceHeader, _super);
    function AVAT_TR_PurInvoiceHeader() {
        var _this = _super.call(this) || this;
        _this.InvoiceHeaderID = 0;
        _this.InvoiceId = 0;
        _this.Ref_No = "";
        _this.DocNo = "";
        _this.VND_SERIAL = 0;
        _this.VendorID = 0;
        _this.TR_TYPE = 0;
        _this.VENDOR_NAME = "";
        _this.TOTAL = 0;
        _this.DISCOUNT = 0;
        _this.PAID = 0;
        _this.Vat = 0;
        _this.NetATax = 0;
        _this.VatApplied = false;
        _this.VndVatType = 0;
        _this.VatPrc = 0;
        _this.SalesType = 0;
        _this.PAY_ACC_CODE = "";
        _this.REMARK = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.InvoiceDate = "";
        _this.CCDT_CODE = "";
        _this.StatusFlag = "";
        return _this;
    }
    return AVAT_TR_PurInvoiceHeader;
}(SecurityClass));
var AVAT_TR_PurInvoiceRet = /** @class */ (function (_super) {
    __extends(AVAT_TR_PurInvoiceRet, _super);
    function AVAT_TR_PurInvoiceRet() {
        var _this = _super.call(this) || this;
        _this.InvoiceRetID = 0;
        _this.TR_NO = 0;
        _this.DocNo = "";
        _this.TR_DATE = "";
        _this.TR_TYPE = 0;
        _this.VendorID = 0;
        _this.InvoiceHeaderID = 0;
        _this.InvoiceId = 0;
        _this.VENDOR_NAME = "";
        _this.TOTAL = 0;
        _this.DISCOUNT = 0;
        _this.PAID = 0;
        _this.JOURNAL_NO = 0;
        _this.CLOSED = false;
        _this.CANCEL = false;
        _this.Remark = "";
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.POSTED = false;
        _this.ACTUAL_DATE = "";
        _this.PrntNo = "";
        _this.Ref_No = "";
        _this.Con_No = 0;
        _this.Pay_No = 0;
        _this.ConTyp = 0;
        _this.Vat = 0;
        _this.NetATax = 0;
        _this.VatType = 0;
        _this.VatApplied = false;
        _this.VndVatType = 0;
        _this.DedTaxPrc = 0;
        _this.VatPrc = 0;
        _this.SalesType = 0;
        _this.ImportInvoice = false;
        _this.PAY_ACC_CODE = "";
        return _this;
    }
    return AVAT_TR_PurInvoiceRet;
}(SecurityClass));
var AQVAT_GetPurReturn = /** @class */ (function (_super) {
    __extends(AQVAT_GetPurReturn, _super);
    function AQVAT_GetPurReturn() {
        var _this = _super.call(this) || this;
        _this.InvoiceRetID = 0;
        _this.TR_NO = 0;
        _this.DocNo = "";
        _this.TR_DATE = "";
        _this.TR_TYPE = 0;
        _this.VendorID = 0;
        _this.InvoiceHeaderID = 0;
        _this.InvoiceId = 0;
        _this.VENDOR_NAME = "";
        _this.TOTAL = 0;
        _this.DISCOUNT = 0;
        _this.PAID = 0;
        _this.JOURNAL_NO = 0;
        _this.CLOSED = false;
        _this.CANCEL = false;
        _this.Remark = "";
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.POSTED = false;
        _this.ACTUAL_DATE = "";
        _this.PrntNo = "";
        _this.Ref_No = "";
        _this.Con_No = 0;
        _this.Pay_No = 0;
        _this.ConTyp = 0;
        _this.Vat = 0;
        _this.NetATax = 0;
        _this.VatType = 0;
        _this.VatApplied = false;
        _this.VndVatType = 0;
        _this.DedTaxPrc = 0;
        _this.VatPrc = 0;
        _this.SalesType = 0;
        _this.ImportInvoice = false;
        _this.PAY_ACC_CODE = "";
        _this.VendorCode = "";
        _this.vnd_NameA = "";
        _this.vnd_NameE = "";
        _this.Pur_Tr_No = 0;
        _this.Pur_DocNo = "";
        _this.Pur_TrDate = "";
        _this.PurHD_Serial = 0;
        _this.PurHd_DocNo = "";
        _this.Closed_txt = "";
        return _this;
    }
    return AQVAT_GetPurReturn;
}(SecurityClass));
var AVAT_TR_PurInvoiceRetDetail = /** @class */ (function () {
    function AVAT_TR_PurInvoiceRetDetail() {
        this.InvoiceRetDetailid = 0;
        this.InvoiceRetID = 0;
        this.InvoiceDetailID = 0;
        this.TR_SERIAL = 0;
        this.Itemid = 0;
        this.UomID = 0;
        this.QTY_SOLD = 0;
        this.QTY_RET = 0;
        this.Unitprice = 0;
        this.DiscountPrc = 0;
        this.DiscountAmount = 0;
        this.NetUnitPrice = 0;
        this.ItemTotal = 0;
        this.REMARK = "";
        this.ACTUAL_DATE = "";
        this.VatApplied = 0;
        this.VatPrc = 0;
        this.VatAmount = 0;
        this.CC_CODE = "";
        this.CCDT_CODE = "";
        this.VatNatID = 0;
        this.CompCode = 0;
        this.BranchCode = 0;
    }
    return AVAT_TR_PurInvoiceRetDetail;
}());
var A_CCDT_Types = /** @class */ (function (_super) {
    __extends(A_CCDT_Types, _super);
    function A_CCDT_Types() {
        var _this = _super.call(this) || this;
        _this.COMP_CODE = 0;
        _this.CCDT_TYPE = "";
        _this.DescA = "";
        _this.DescE = "";
        _this.Remarks = "";
        return _this;
    }
    return A_CCDT_Types;
}(SecurityClass));
var ListOperationDepositDetail = /** @class */ (function (_super) {
    __extends(ListOperationDepositDetail, _super);
    function ListOperationDepositDetail() {
        var _this = _super.call(this) || this;
        _this.I_TR_OperationSalesmanItem = new Array();
        _this.I_TR_OperationDeposit = new Array();
        return _this;
    }
    return ListOperationDepositDetail;
}(SecurityClass));
var ServPurchseInvoiceMasterDetail = /** @class */ (function (_super) {
    __extends(ServPurchseInvoiceMasterDetail, _super);
    function ServPurchseInvoiceMasterDetail() {
        var _this = _super.call(this) || this;
        _this.AVAT_TR_PurInvoice = new AVAT_TR_PurInvoice();
        _this.AVAT_TR_PurInvoiceDetail = new Array();
        _this.AVAT_TR_PurInvoiceHeader = new Array();
        return _this;
    }
    return ServPurchseInvoiceMasterDetail;
}(SecurityClass));
var PurInvoiceRetMasterDetails = /** @class */ (function () {
    function PurInvoiceRetMasterDetails() {
    }
    return PurInvoiceRetMasterDetails;
}());
var AQ_ServPurInvoiceMasterDetail = /** @class */ (function (_super) {
    __extends(AQ_ServPurInvoiceMasterDetail, _super);
    function AQ_ServPurInvoiceMasterDetail() {
        var _this = _super.call(this) || this;
        _this.AVAT_TR_PurInvoice = new Array();
        _this.AQVAT_GetPurInvoiceDetail = new Array();
        _this.AQVAT_GetPurInvoiceHeader = new Array();
        return _this;
    }
    return AQ_ServPurInvoiceMasterDetail;
}(SecurityClass));
var AQPurInvoiceRetMasterDetails = /** @class */ (function () {
    function AQPurInvoiceRetMasterDetails() {
    }
    return AQPurInvoiceRetMasterDetails;
}());
var Account_CCDT_CCDTTP_MasterDetails = /** @class */ (function () {
    function Account_CCDT_CCDTTP_MasterDetails() {
    }
    return Account_CCDT_CCDTTP_MasterDetails;
}());
var A_CCDT_COSTCENTERS = /** @class */ (function (_super) {
    __extends(A_CCDT_COSTCENTERS, _super);
    function A_CCDT_COSTCENTERS() {
        var _this = _super.call(this) || this;
        _this.COMP_CODE = 0;
        _this.CCDT_CODE = "";
        _this.CCDT_TYPE = "";
        _this.CCDT_DESCA = "";
        _this.CCDT_DESCE = "";
        _this.StatusFlag = "";
        return _this;
    }
    return A_CCDT_COSTCENTERS;
}(SecurityClass));
var AVAT_PERIOD = /** @class */ (function (_super) {
    __extends(AVAT_PERIOD, _super);
    function AVAT_PERIOD() {
        var _this = _super.call(this) || this;
        _this.COMP_CODE = 0;
        _this.VAT_YEAR = 0;
        _this.PERIOD_CODE = 0;
        _this.FROM_DATE = "";
        _this.TO_DATE = "";
        _this.STATUS = 0;
        _this.STATUS_txt = "";
        _this.VOUCHER_CODE = 0;
        _this.SALES_VAT = 0;
        _this.PUR_VAT = 0;
        _this.NETVAT_AMOUNT = 0;
        _this.TOTALPERIODVAT = 0;
        _this.CORRECTIONS = 0;
        _this.VAT_PREVBALANCE = 0;
        return _this;
    }
    return AVAT_PERIOD;
}(SecurityClass));
var AQVAT_GetPeriodDetail = /** @class */ (function (_super) {
    __extends(AQVAT_GetPeriodDetail, _super);
    function AQVAT_GetPeriodDetail() {
        var _this = _super.call(this) || this;
        _this.COMP_CODE = 0;
        _this.VAT_YEAR = 0;
        _this.PERIOD_CODE = 0;
        _this.TYPE = 0;
        _this.CODE = 0;
        _this.Val_Amount = 0;
        _this.Upd_Amount = 0;
        _this.VAT_Amount = 0;
        _this.DESCRIPTION = "";
        _this.VatPerc = 0;
        _this.LineOrder = 0;
        return _this;
    }
    return AQVAT_GetPeriodDetail;
}(SecurityClass));
var AVAT_TRANS = /** @class */ (function (_super) {
    __extends(AVAT_TRANS, _super);
    function AVAT_TRANS() {
        var _this = _super.call(this) || this;
        _this.COMP_CODE = 0;
        _this.SYSTEM_CODE = "";
        _this.TRTYPE = "";
        _this.TRDESCA = "";
        _this.TRDESCE = "";
        _this.SYSTEMDESCA = "";
        _this.SYSTEMDESCE = "";
        _this.SEC = 0;
        _this.ISAVAILABLE = false;
        return _this;
    }
    return AVAT_TRANS;
}(SecurityClass));
var A_CashVoucher_Detail = /** @class */ (function (_super) {
    __extends(A_CashVoucher_Detail, _super);
    function A_CashVoucher_Detail() {
        var _this = _super.call(this) || this;
        _this.VoucherDetailID = 0;
        _this.VoucherID = 0;
        _this.COMP_CODE = 0;
        _this.VOUCHER_CODE = 0;
        _this.VOUCHER_SERIAL = 0;
        _this.ACC_CODE = "";
        _this.CC_CODE = "";
        _this.DEBIT = 0;
        _this.CREDIT = 0;
        _this.DESCL = "";
        _this.DESCA = "";
        _this.CCDT_CODE = "";
        _this.INVOICE_NO = 0;
        _this.DEBIT_FC = 0;
        _this.CREDIT_FC = 0;
        _this.StatusFlag = "";
        return _this;
    }
    return A_CashVoucher_Detail;
}(SecurityClass));
var A_CashVoucher_Header = /** @class */ (function (_super) {
    __extends(A_CashVoucher_Header, _super);
    function A_CashVoucher_Header() {
        var _this = _super.call(this) || this;
        _this.VoucherID = 0;
        _this.COMP_CODE = 0;
        _this.VOUCHER_CODE = 0;
        _this.TRType = 0;
        _this.TYPE_CODE = 0;
        _this.CheckType = 0;
        _this.VOUCHER_DATE = "";
        _this.VOUCHER_DESC = "";
        _this.REF_CODE = "";
        _this.VOUCHER_STATUS = 0;
        _this.BENIFICIARY = "";
        _this.ACC_CODE = "";
        _this.AMOUNT = 0;
        _this.CHECK_CODE = "";
        _this.BANK = "";
        _this.DEPOSIT_ACC_CODE = "";
        _this.CheckStatus = 0;
        _this.CREATED_BY = "";
        _this.CREATED_AT = "";
        _this.UPDATED_BY = "";
        _this.UPDATED_AT = "";
        _this.POSTED_BY = "";
        _this.POSTED_AT = "";
        _this.DueDate = "";
        return _this;
    }
    return A_CashVoucher_Header;
}(SecurityClass));
var AQ_GetCashVoucherDetail = /** @class */ (function (_super) {
    __extends(AQ_GetCashVoucherDetail, _super);
    function AQ_GetCashVoucherDetail() {
        var _this = _super.call(this) || this;
        _this.COMP_CODE = 0;
        _this.VOUCHER_CODE = 0;
        _this.VOUCHER_SERIAL = 0;
        _this.ACC_CODE = "";
        _this.CC_CODE = "";
        _this.DEBIT = 0;
        _this.CREDIT = 0;
        _this.DESCL = "";
        _this.DESCA = "";
        _this.CCDT_CODE = "";
        _this.INVOICE_NO = 0;
        _this.DEBIT_FC = 0;
        _this.CREDIT_FC = 0;
        _this.CC_DESCA = "";
        _this.CC_DESCE = "";
        _this.ACC_DESCA = "";
        _this.ACC_DESCL = "";
        _this.VoucherDetailID = 0;
        _this.VoucherID = 0;
        _this.CCDT_DESCA = "";
        _this.CCDT_DESCE = "";
        _this.StatusFlag = "";
        return _this;
    }
    return AQ_GetCashVoucherDetail;
}(SecurityClass));
var I_TR_Collect = /** @class */ (function (_super) {
    __extends(I_TR_Collect, _super);
    function I_TR_Collect() {
        var _this = _super.call(this) || this;
        _this.CollectID = 0;
        _this.TrNo = 0;
        _this.RefNO = "";
        _this.TrDate = "";
        _this.TrDateH = "";
        _this.StoreID = 0;
        _this.Remark = "";
        _this.IsPosted = false;
        _this.VoucherNo = 0;
        _this.VoucherType = 0;
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.Status = 0;
        _this.LabourCost = 0;
        _this.MaterialCost = 0;
        _this.InputItemCost = 0;
        _this.status_txt = "";
        return _this;
    }
    return I_TR_Collect;
}(SecurityClass));
var I_TR_CollectDetail = /** @class */ (function () {
    function I_TR_CollectDetail() {
        this.CollectDetailID = 0;
        this.CollectID = 0;
        this.IsInput = false;
        this.ItemID = 0;
        this.UnitID = 0;
        this.Qty = 0;
        this.OnhandQty = 0;
        this.UnitCost = 0;
        this.NewUnitCost = 0;
        this.NewStockUnitCost = 0;
        this.StkUnitCost = 0;
        this.StockQty = 0;
        this.StockOnhandQty = 0;
        this.CostFactorPrc = 0;
        this.StatusFlag = "";
    }
    return I_TR_CollectDetail;
}());
var IQ_GetCollectDetail = /** @class */ (function () {
    function IQ_GetCollectDetail() {
        this.CollectDetailID = 0;
        this.CollectID = 0;
        this.IsInput = false;
        this.ItemID = 0;
        this.UnitID = 0;
        this.Qty = 0;
        this.OnhandQty = 0;
        this.UnitCost = 0;
        this.NewUnitCost = 0;
        this.StkUnitCost = 0;
        this.StockQty = 0;
        this.StockOnhandQty = 0;
        this.CostFactorPrc = 0;
        this.NewStockUnitCost = 0;
        this.ItemCode = "";
        this.itm_DescA = "";
        this.itm_DescE = "";
        this.UomCode = "";
        this.u_DescA = "";
        this.u_DescE = "";
    }
    return IQ_GetCollectDetail;
}());
var AQ_GetCashVoucherHeader = /** @class */ (function (_super) {
    __extends(AQ_GetCashVoucherHeader, _super);
    function AQ_GetCashVoucherHeader() {
        var _this = _super.call(this) || this;
        _this.COMP_CODE = 0;
        _this.VOUCHER_CODE = 0;
        _this.VOUCHER_DATE = "";
        _this.VOUCHER_DESC = "";
        _this.VOUCHER_STATUS = 0;
        _this.TYPE_CODE = 0;
        _this.REF_CODE = "";
        _this.CREATED_BY = "";
        _this.CREATED_AT = "";
        _this.UPDATED_BY = "";
        _this.UPDATED_AT = "";
        _this.POSTED_BY = "";
        _this.POSTED_AT = "";
        _this.TYPE_DESCA = "";
        _this.TYPE_DESCE = "";
        _this.St_DescE = "";
        _this.St_DescA = "";
        _this.VoucherID = 0;
        _this.TRType = 0;
        _this.CheckType = 0;
        _this.BENIFICIARY = "";
        _this.ACC_CODE = "";
        _this.AMOUNT = 0;
        _this.CHECK_CODE = "";
        _this.BANK = "";
        _this.DEPOSIT_ACC_CODE = "";
        _this.CheckStatus = 0;
        _this.DueDate = "";
        _this.chkType_DescA = "";
        _this.chkType_DescE = "";
        _this.ACC_DESCA = "";
        _this.ACC_DESCL = "";
        return _this;
    }
    return AQ_GetCashVoucherHeader;
}(SecurityClass));
var AQ_GetCashVoucherHeaderWithDetail = /** @class */ (function (_super) {
    __extends(AQ_GetCashVoucherHeaderWithDetail, _super);
    function AQ_GetCashVoucherHeaderWithDetail() {
        var _this = _super.call(this) || this;
        _this.AQ_GetCashVoucherHeader = new Array();
        _this.AQ_GetCashVoucherDetail = new Array();
        return _this;
    }
    return AQ_GetCashVoucherHeaderWithDetail;
}(SecurityClass));
var CashVoucherMasterDetails = /** @class */ (function (_super) {
    __extends(CashVoucherMasterDetails, _super);
    function CashVoucherMasterDetails() {
        var _this = _super.call(this) || this;
        _this.A_CashVoucher_Header = new A_CashVoucher_Header();
        _this.A_CashVoucher_Detail = new Array();
        return _this;
    }
    return CashVoucherMasterDetails;
}(SecurityClass));
var IQCollectMasterDetails = /** @class */ (function (_super) {
    __extends(IQCollectMasterDetails, _super);
    function IQCollectMasterDetails() {
        var _this = _super.call(this) || this;
        _this.I_TR_Collect = new I_TR_Collect();
        _this.IQ_GetCollectDetail = new Array();
        return _this;
    }
    return IQCollectMasterDetails;
}(SecurityClass));
var ICollectMasterDetails = /** @class */ (function (_super) {
    __extends(ICollectMasterDetails, _super);
    function ICollectMasterDetails() {
        var _this = _super.call(this) || this;
        _this.I_TR_Collect = new I_TR_Collect();
        _this.I_TR_CollectDetail = new Array();
        return _this;
    }
    return ICollectMasterDetails;
}(SecurityClass));
var I_TR_OperationItemsSum = /** @class */ (function (_super) {
    __extends(I_TR_OperationItemsSum, _super);
    function I_TR_OperationItemsSum() {
        var _this = _super.call(this) || this;
        _this.OperationItemSumID = 0;
        _this.OperationItemID = 0;
        _this.OperationID = 0;
        _this.ItemID = 0;
        _this.SoldQty = 0;
        _this.UnitPrice = 0;
        _this.Total = 0;
        _this.Remark = "";
        _this.StatusFlag = "";
        return _this;
    }
    return I_TR_OperationItemsSum;
}(SecurityClass));
var I_Period = /** @class */ (function (_super) {
    __extends(I_Period, _super);
    function I_Period() {
        var _this = _super.call(this) || this;
        _this.CompCode = 0;
        _this.FinYear = 0;
        _this.PERIOD_CODE = 0;
        _this.PERIOD_DESC = "";
        _this.FROM_DATE = "";
        _this.TO_DATE = "";
        _this.FixQty = false;
        _this.FixCost = false;
        _this.Status = 0;
        _this.Closed_BY = "";
        _this.Closed_AT = "";
        _this.ReOpen_BY = "";
        _this.ReOpen_AT = "";
        return _this;
    }
    return I_Period;
}(SecurityClass));
var I_PeriodItem = /** @class */ (function (_super) {
    __extends(I_PeriodItem, _super);
    function I_PeriodItem() {
        var _this = _super.call(this) || this;
        _this.CompCode = 0;
        _this.FinYear = 0;
        _this.PERIOD_CODE = 0;
        _this.Storeid = 0;
        _this.ItemID = 0;
        _this.StartQty = 0;
        _this.StartCost = 0;
        _this.PurchaseQty = 0;
        _this.PurchaseValue = 0;
        _this.SalesQty = 0;
        _this.SalesValue = 0;
        _this.ProdQty = 0;
        _this.prodValue = 0;
        _this.TFQty = 0;
        _this.AdjQty = 0;
        _this.AdjCost = 0;
        _this.CloseBalance = 0;
        _this.AverageCost = 0;
        return _this;
    }
    return I_PeriodItem;
}(SecurityClass));
var IQ_GetItemInfo = /** @class */ (function (_super) {
    __extends(IQ_GetItemInfo, _super);
    function IQ_GetItemInfo() {
        var _this = _super.call(this) || this;
        _this.ItemID = 0;
        _this.ItemCode = "";
        _this.Itm_DescA = "";
        _this.Itm_DescE = "";
        _this.UomID = 0;
        _this.ItemFamilyID = 0;
        _this.CompCode = 0;
        _this.RefItemCode = "";
        _this.FirstEntryDate = "";
        _this.Remarks = "";
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.LastBarCodeSeq = 0;
        _this.BarCodePrefix = "";
        _this.Uom_DescA = "";
        _this.Uom_DescE = "";
        _this.FamilyCode = "";
        _this.Family_DescA = "";
        _this.Family_DescE = "";
        _this.FinYear = 0;
        _this.StarGlobalCost = 0;
        _this.GlobalCost = 0;
        _this.ItemYearID = 0;
        _this.VatPrc = 0;
        _this.VatNatID = 0;
        _this.FirstYear = 0;
        _this.CatID = 0;
        _this.CatDescA = "";
        _this.cat_DescE = "";
        return _this;
    }
    return IQ_GetItemInfo;
}(SecurityClass));
var IQ_GetItemPrice = /** @class */ (function (_super) {
    __extends(IQ_GetItemPrice, _super);
    function IQ_GetItemPrice() {
        var _this = _super.call(this) || this;
        _this.ItemID = 0;
        _this.ItemCode = "";
        _this.CompCode = 0;
        _this.DescA = "";
        _this.DescL = "";
        _this.FinYear = 0;
        _this.UomId = 0;
        _this.MinUnitPrice = 0;
        _this.UnitPrice = 0;
        _this.UnitWholePrice = 0;
        _this.MinUnitWholePrice = 0;
        _this.UomCode = "";
        _this.uom_DescA = "";
        _this.uom_DescE = "";
        _this.Rate = 0;
        _this.IsStock = false;
        _this.IsRetailSales = false;
        _this.IsWholeSales = false;
        _this.IsPurchase = false;
        _this.ItemFamilyID = 0;
        _this.CatID = 0;
        return _this;
    }
    return IQ_GetItemPrice;
}(SecurityClass));
var IQ_GetItemPriceInfo = /** @class */ (function (_super) {
    __extends(IQ_GetItemPriceInfo, _super);
    function IQ_GetItemPriceInfo() {
        var _this = _super.call(this) || this;
        _this.ItemID = 0;
        _this.ItemCode = "";
        _this.Itm_DescA = "";
        _this.Itm_DescE = "";
        _this.UomID = 0;
        _this.ItemFamilyID = 0;
        _this.CompCode = 0;
        _this.RefItemCode = "";
        _this.FirstEntryDate = "";
        _this.Remarks = "";
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.LastBarCodeSeq = 0;
        _this.BarCodePrefix = "";
        _this.Uom_DescA = "";
        _this.Uom_DescE = "";
        _this.FamilyCode = "";
        _this.Family_DescA = "";
        _this.Family_DescE = "";
        _this.FinYear = 0;
        _this.MinUnitPrice = 0;
        _this.UnitPrice = 0;
        _this.StarGlobalCost = 0;
        _this.GlobalCost = 0;
        _this.UnitWholePrice = 0;
        _this.MinUnitWholePrice = 0;
        _this.ItemYearID = 0;
        _this.VatPrc = 0;
        _this.VatNatID = 0;
        _this.FirstYear = 0;
        _this.CatID = 0;
        _this.CatDescA = "";
        _this.cat_DescE = "";
        return _this;
    }
    return IQ_GetItemPriceInfo;
}(SecurityClass));
var I_Stk_TR_IssueToCC = /** @class */ (function (_super) {
    __extends(I_Stk_TR_IssueToCC, _super);
    function I_Stk_TR_IssueToCC() {
        var _this = _super.call(this) || this;
        _this.IssueToCcID = 0;
        _this.Tr_No = 0;
        _this.TRType = 0;
        _this.CC_CODE = "";
        _this.StoreID = 0;
        _this.StoreCode = 0;
        _this.Status = 0;
        _this.RefTRID = 0;
        _this.RefNo = "";
        _this.IssueTypeID = 0;
        _this.Remark = "";
        _this.TrDate = "";
        _this.TrDateH = "";
        _this.IsPosted = false;
        _this.VoucherNo = 0;
        _this.VoucherType = 0;
        _this.IssuedBy = "";
        _this.ReceivedBy = "";
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        return _this;
    }
    return I_Stk_TR_IssueToCC;
}(SecurityClass));
var I_Stk_TR_IssueToCCDetails = /** @class */ (function (_super) {
    __extends(I_Stk_TR_IssueToCCDetails, _super);
    function I_Stk_TR_IssueToCCDetails() {
        var _this = _super.call(this) || this;
        _this.IssueToCcDetailID = 0;
        _this.IssueToCcID = 0;
        _this.Serial = 0;
        _this.ItemID = 0;
        _this.UnitID = 0;
        _this.ReqQty = 0;
        _this.IssueQty = 0;
        _this.UnitCost = 0;
        _this.IssueedBeforeQty = 0;
        _this.TotRetQty = 0;
        _this.StatusFlag = "";
        return _this;
    }
    return I_Stk_TR_IssueToCCDetails;
}(SecurityClass));
var IQ_GetStkIssueCC = /** @class */ (function (_super) {
    __extends(IQ_GetStkIssueCC, _super);
    function IQ_GetStkIssueCC() {
        var _this = _super.call(this) || this;
        _this.IssueToCcID = 0;
        _this.Tr_No = 0;
        _this.TRType = 0;
        _this.CC_CODE = "";
        _this.StoreID = 0;
        _this.Status = 0;
        _this.RefTRID = 0;
        _this.RefNo = "";
        _this.IssueTypeID = 0;
        _this.Remark = "";
        _this.TrDate = "";
        _this.TrDateH = "";
        _this.IsPosted = false;
        _this.VoucherNo = 0;
        _this.VoucherType = 0;
        _this.IssuedBy = "";
        _this.ReceivedBy = "";
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.STORE_CODE = 0;
        _this.store_DescA = "";
        _this.Store_DescE = "";
        _this.CC_DESCA = "";
        _this.CC_DESCE = "";
        _this.Type_DescA = "";
        _this.Type_DescE = "";
        _this.GL_Acc_Code = "";
        return _this;
    }
    return IQ_GetStkIssueCC;
}(SecurityClass));
var IQ_GetStkIssueCCDetail = /** @class */ (function (_super) {
    __extends(IQ_GetStkIssueCCDetail, _super);
    function IQ_GetStkIssueCCDetail() {
        var _this = _super.call(this) || this;
        _this.IssueToCcDetailID = 0;
        _this.IssueToCcID = 0;
        _this.Serial = 0;
        _this.ItemID = 0;
        _this.UnitID = 0;
        _this.ReqQty = 0;
        _this.IssueQty = 0;
        _this.UnitCost = 0;
        _this.IssueedBeforeQty = 0;
        _this.TotRetQty = 0;
        _this.ItemCode = "";
        _this.itm_DescA = "";
        _this.itm_DescE = "";
        _this.uom_DescA = "";
        _this.UomCode = "";
        _this.uom_DescE = "";
        return _this;
    }
    return IQ_GetStkIssueCCDetail;
}(SecurityClass));
var I_D_IssueType = /** @class */ (function (_super) {
    __extends(I_D_IssueType, _super);
    function I_D_IssueType() {
        var _this = _super.call(this) || this;
        _this.IssueTypeID = 0;
        _this.DescA = "";
        _this.DescE = "";
        _this.GL_Acc_Code = "";
        _this.CompCode = 0;
        _this.Remarks = "";
        _this.CreatedAt = "";
        _this.CreatedBy = "";
        _this.UpdatedAt = "";
        _this.UpdatedBy = "";
        _this.StatusFlag = "";
        return _this;
    }
    return I_D_IssueType;
}(SecurityClass));
//# sourceMappingURL=Entities.js.map