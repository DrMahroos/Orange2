$(document).ready(function () {
    AdminComp.InitalizeComponent();
});
var AdminComp;
(function (AdminComp) {
    var compcode;
    var AccountType = 1;
    var sys = new SystemTools();
    var link = 'http://localhost:51374/';
    var SysSession = GetSystemSession('Home');
    //var lang = (SysSession.CurrentEnvironment.ScreenLanguage);
    //////////////////////////////////////////////////////////////////////////
    var txt_COMP_CODE;
    var txt_NameA;
    var txt_NameE;
    var txt_Tel;
    var txt_Email;
    var txt_GMName;
    var txt_Address;
    var txt_GroupVatNo;
    var txt_VATNO;
    var txt_IDNo;
    var ddl_IdType;
    var txt_LogoIcon;
    var txt_BkImage1;
    var txt_BkImage2;
    var ddl_Country;
    var ddl_Currency;
    var txt_Address_Province;
    var txt_Address_City;
    var txt_Address_District;
    var txt_Address_Street;
    var txt_Address_Str_Additional;
    var txt_Address_BuildingNo;
    var txt_Address_Build_Additional;
    var txt_Address_Postal;
    var searchbutmemreport;
    var btnSave;
    var btnBack;
    var btnEdit;
    var btnAdd;
    ///////////secondDiv
    var btnSave2;
    var btnBack2;
    var btnEdit2;
    var chk_EMAIL_SSL;
    var chk_EMAIL_Authentication;
    var txt_EMAIL_Sender;
    var txt_EMAIL_SenderPassword;
    var txt_EMAIL_SenderSMTP;
    var txt_EMAIL_SendorPort;
    var txt_EMAIL_SenderName;
    var txt_EmailMaxDaily;
    var txt_SMS_Provider;
    var txt_SMS_UserName;
    var txt_SMS_Password;
    var txt_SMS_SenderName;
    // var txt_MobileNoPreFex      : HTMLInputElement;
    //////////ThirdDiv
    var btnSave3;
    var btnBack3;
    var btnEdit3;
    var chk_SendSMS;
    var chk_SendPublicSMS;
    var chk_IsVat;
    var chk_GL_VoucherCCType;
    var chk_GL_VoucherCCDT_Type;
    var chk_GL_JournalSaveUnbalanced;
    var chk_IsLocalBranchCustomer;
    var chk_IvoiceDateEditable;
    // var chk_InvoiceWithoutCust: HTMLInputElement;
    var txt_DocPDFFolder;
    var chk_InvoiceLineDiscount;
    var chk_InvoiceLineAllowance;
    var chk_InvoiceTotalAllowance;
    var chk_InvoiceTotalCharge;
    var chk_OperationPriceWithVAT;
    var chk_SalesPriceWithVAT;
    // var chk_sendEmail: HTMLInputElement;
    // var chk_sendshopEmail: HTMLInputElement;
    var chk_incoming;
    var chk_GL_VoucherCCDT_Type2;
    var chk_all;
    var txt_MobileLength;
    var txt_IDLength;
    var txt_MaxYearlyMSGs;
    var txt_UsedMSGs;
    var txt_NotePeriodinSec;
    var txt_DashBoardPeriodinSec;
    var txt_SysTimeOut;
    var ddl_DefSlsVatType;
    var ddl_DefPurVatType;
    var txt_MembeshipEndDate;
    var txt_MembershipAllanceDays;
    var txt_MembershipreadOnlyDays;
    var ddl_Gl_JournalOpenType;
    var txt_GL_JournalMonthlyNo;
    var txt_GL_JournalMonthlyNoWidth;
    var ddl_InvoiceTypeCode;
    var ddl_InvoiceTransCode;
    var txt_ExceedMinPricePassword;
    var txt_MembeshiptStartDate;
    var Txt_PswPrice;
    var chk_IsLocalSalePrice;
    var chk_IsLocalSalePrice2;
    var chk_IsLocalCost;
    var chk_IsLocalCost2;
    var chk_AutoupdateSalesPrice;
    var chk_AutoupdateSalesPrice2;
    var Txt_SalePriceAddPerc;
    var Txt_SalePriceMinAddPerc;
    var chk_IsActive;
    var IsNew = true;
    var comp_CODE = 0;
    var SystemCode;
    //------------------------------------------------------------
    var Grid = new JsGrid();
    var COMPANY = new Array();
    var Model = new G_COMPANY();
    var CodesTypes = new Array();
    var CountryFilter = new Array();
    var CurrencyFilter = new Array();
    var SelecteData = new Array();
    var SelecteDataComp = new Array();
    var SerDet = new Array();
    var IControl = new Array();
    var GAlertControl = new Array();
    var GAlertControlFilter = new Array();
    var IControlFilter = new Array();
    var Model_GAlertControl = new G_AlertControl();
    var Model_IControl = new I_Control();
    var ddl_AllDefVatTypeFilter = new Array();
    var ddl_DefSlsVatTypeFilter = new Array();
    var ddl_DefPurVatTypeFilter = new Array();
    var ddl_Gl_JournalOpenTypeFilter = new Array();
    var ddl_AllInvoiceCodeFilter = new Array();
    var ddl_InvoiceTypeCodeFilter = new Array();
    var ddl_InvoiceTransCodeFilter = new Array();
    var flage = false;
    function InitalizeComponent() {
        try {
            InitalizeControls();
            InitalizeEvents();
            InitializeGrid();
            Fillddl_IdType();
            Fillddl_Country();
            Fillddl_Currency();
            Disabled();
            DisabledSecondDiv();
            DisabledThirdDiv();
            // $("#divcompinformtion").addClass("display_none");
            //$("#SecondDiv").addClass("disabledDiv");
            //$("#ThirdDiv").addClass("disabledDiv");
            //Fillddl_DefSlsVatType();
            //Fillddl_Gl_JournalOpenTypeFilter();
            //Fillddl_InvoiceTypeCodeFilter();
            $("#btnEdit").addClass("display_none");
            $("#btnEdit2").addClass("display_none");
            $("#btnEdit3").addClass("display_none");
            Clear();
            CLearSecondDiv();
            clearThirdDiv();
        }
        catch (e) {
            MessageBox.Show("      يجب معاودة الدخول مرة اخري بستخدم الاسم وكلمة السر", "You must log in again using your name and password ", function () {
                window.location.href = "/Login/HomePage";
            }), 1000;
        }
    }
    AdminComp.InitalizeComponent = InitalizeComponent;
    function InitalizeControls() {
        chk_IsActive = document.getElementById("chk_IsActive");
        txt_COMP_CODE = document.getElementById("txt_COMP_CODE");
        txt_NameA = document.getElementById("txt_NameA");
        txt_NameE = document.getElementById("txt_NameE");
        txt_Tel = document.getElementById("txt_Tel");
        txt_Email = document.getElementById("txt_Email");
        txt_GMName = document.getElementById("txt_GMName");
        txt_Address = document.getElementById("txt_Address");
        txt_GroupVatNo = document.getElementById("txt_GroupVatNo");
        txt_VATNO = document.getElementById("txt_VATNO");
        txt_IDNo = document.getElementById("txt_IDNo");
        ddl_IdType = document.getElementById("txt_IdType");
        txt_LogoIcon = document.getElementById("txt_LogoIcon");
        txt_BkImage1 = document.getElementById("txt_BkImage1");
        txt_BkImage2 = document.getElementById("txt_BkImage2");
        ddl_Country = document.getElementById("txt_Country");
        ddl_Currency = document.getElementById("txt_Currency");
        txt_Address_Province = document.getElementById("txt_Address_Province");
        txt_Address_City = document.getElementById("txt_Address_City");
        txt_Address_District = document.getElementById("txt_Address_District");
        txt_Address_Street = document.getElementById("txt_Address_Street");
        txt_Address_Str_Additional = document.getElementById("txt_Address_Str_Additional");
        txt_Address_BuildingNo = document.getElementById("txt_Address_BuildingNo");
        txt_Address_Build_Additional = document.getElementById("txt_Address_Build_Additional");
        txt_Address_Postal = document.getElementById("txt_Address_Postal");
        searchbutmemreport = document.getElementById("searchbutmemreport");
        btnSave = document.getElementById("btnSave");
        btnBack = document.getElementById("btnBack");
        btnEdit = document.getElementById("btnEdit");
        btnAdd = document.getElementById("btnAdd");
        ///////////secondDiv
        btnSave2 = document.getElementById("btnSave2");
        btnBack2 = document.getElementById("btnBack2");
        btnEdit2 = document.getElementById("btnEdit2");
        txt_EMAIL_Sender = document.getElementById("txt_EMAIL_Sender");
        txt_EMAIL_SenderPassword = document.getElementById("txt_EMAIL_SenderPassword");
        txt_EMAIL_SenderSMTP = document.getElementById("txt_EMAIL_SenderSMTP");
        txt_EMAIL_SendorPort = document.getElementById("txt_EMAIL_SendorPort");
        txt_EMAIL_SenderName = document.getElementById("txt_EMAIL_SenderName");
        txt_EmailMaxDaily = document.getElementById("txt_EmailMaxDaily");
        txt_SMS_Provider = document.getElementById("txt_SMS_Provider");
        txt_SMS_UserName = document.getElementById("txt_SMS_UserName");
        txt_SMS_Password = document.getElementById("txt_SMS_Password");
        txt_SMS_SenderName = document.getElementById("txt_SMS_SenderName");
        // txt_MobileNoPreFex = document.getElementById("txt_MobileNoPreFex") as HTMLInputElement;
        chk_EMAIL_SSL = document.getElementById("chk_EMAIL_SSL");
        chk_EMAIL_Authentication = document.getElementById("chk_EMAIL_Authentication");
        //////////ThirdDiv
        btnSave3 = document.getElementById("btnSave3");
        btnBack3 = document.getElementById("btnBack3");
        btnEdit3 = document.getElementById("btnEdit3");
        txt_MobileLength = document.getElementById("txt_MobileLength");
        txt_IDLength = document.getElementById("txt_IDLength");
        txt_MaxYearlyMSGs = document.getElementById("txt_MaxYearlyMSGs");
        txt_UsedMSGs = document.getElementById("txt_UsedMSGs");
        txt_NotePeriodinSec = document.getElementById("txt_NotePeriodinSec");
        txt_DashBoardPeriodinSec = document.getElementById("txt_DashBoardPeriodinSec");
        txt_SysTimeOut = document.getElementById("txt_SysTimeOut");
        ddl_DefSlsVatType = document.getElementById("ddl_DefSlsVatType");
        ddl_DefPurVatType = document.getElementById("ddl_DefPurVatType");
        txt_MembeshipEndDate = document.getElementById("txt_MembeshipEndDate");
        txt_MembershipAllanceDays = document.getElementById("txt_MembershipAllanceDays");
        txt_MembershipreadOnlyDays = document.getElementById("txt_MembershipreadOnlyDays");
        ddl_Gl_JournalOpenType = document.getElementById("ddl_Gl_JournalOpenType");
        txt_GL_JournalMonthlyNo = document.getElementById("txt_GL_JournalMonthlyNo");
        txt_GL_JournalMonthlyNoWidth = document.getElementById("txt_GL_JournalMonthlyNoWidth");
        ddl_InvoiceTypeCode = document.getElementById("ddl_InvoiceTypeCode");
        ddl_InvoiceTransCode = document.getElementById("ddl_InvoiceTransCode");
        txt_ExceedMinPricePassword = document.getElementById("txt_ExceedMinPricePassword");
        txt_MembeshiptStartDate = document.getElementById("txt_MembeshiptStartDate");
        chk_incoming = document.getElementById("chk_incoming");
        chk_GL_VoucherCCDT_Type2 = document.getElementById("chk_GL_VoucherCCDT_Type2");
        chk_all = document.getElementById("chk_all");
        chk_SendSMS = document.getElementById("chk_SendSMS");
        chk_SendPublicSMS = document.getElementById("chk_SendPublicSMS");
        chk_IsVat = document.getElementById("chk_IsVat");
        chk_GL_VoucherCCType = document.getElementById("chk_GL_VoucherCCType");
        chk_GL_VoucherCCDT_Type = document.getElementById("chk_GL_VoucherCCDT_Type");
        chk_GL_JournalSaveUnbalanced = document.getElementById("chk_GL_JournalSaveUnbalanced");
        chk_IsLocalBranchCustomer = document.getElementById("chk_IsLocalBranchCustomer");
        chk_IvoiceDateEditable = document.getElementById("chk_IvoiceDateEditable");
        // chk_InvoiceWithoutCust = document.getElementById("chk_InvoiceWithoutCust") as HTMLInputElement;
        txt_DocPDFFolder = document.getElementById("txt_DocPDFFolder");
        chk_InvoiceLineDiscount = document.getElementById("chk_InvoiceLineDiscount");
        chk_InvoiceLineAllowance = document.getElementById("chk_InvoiceLineAllowance");
        chk_InvoiceTotalAllowance = document.getElementById("chk_InvoiceTotalAllowance");
        chk_InvoiceTotalCharge = document.getElementById("chk_InvoiceTotalCharge");
        chk_OperationPriceWithVAT = document.getElementById("chk_OperationPriceWithVAT");
        chk_SalesPriceWithVAT = document.getElementById("chk_SalesPriceWithVAT");
        //  chk_sendEmail = document.getElementById("chk_sendEmail") as HTMLInputElement;
        //  chk_sendshopEmail = document.getElementById("chk_sendshopEmail") as HTMLInputElement;
        Txt_PswPrice = document.getElementById("Txt_PswPrice");
        chk_IsLocalSalePrice = document.getElementById("chk_IsLocalSalePrice");
        chk_IsLocalSalePrice2 = document.getElementById("chk_IsLocalSalePrice2");
        chk_IsLocalCost = document.getElementById("chk_IsLocalCost");
        chk_IsLocalCost2 = document.getElementById("chk_IsLocalCost2");
        chk_AutoupdateSalesPrice = document.getElementById("chk_AutoupdateSalesPrice");
        chk_AutoupdateSalesPrice2 = document.getElementById("chk_AutoupdateSalesPrice2");
        Txt_SalePriceAddPerc = document.getElementById("Txt_SalePriceAddPerc");
        Txt_SalePriceMinAddPerc = document.getElementById("Txt_SalePriceMinAddPerc");
    }
    function InitalizeEvents() {
        btnAdd.onclick = btnAdd_onclick;
        btnSave.onclick = btnSave_onclick;
        btnBack.onclick = btnBack_onclick;
        btnEdit.onclick = btnEdit_onclick;
        searchbutmemreport.onkeyup = SearchBox;
        btnEdit2.onclick = btnEdit2_onclick;
        btnBack2.onclick = btnBack2_onclick;
        btnEdit3.onclick = btnEdit3_onclick;
        btnBack3.onclick = btnBack3_onclick;
        btnSave2.onclick = btnSave2_onclick;
        btnSave3.onclick = btnSave3_onclick;
        chk_IsLocalSalePrice.onclick = chk_IsLocalSalePrice_onchange;
        chk_IsLocalSalePrice2.onclick = chk_IsLocalSalePrice2_onchange;
        chk_IsLocalCost.onclick = chk_IsLocalCost_onchange;
        chk_IsLocalCost2.onclick = chk_IsLocalCost2_onchange;
        chk_AutoupdateSalesPrice.onclick = chk_AutoupdateSalesPrice_onchange;
        chk_AutoupdateSalesPrice2.onclick = chk_AutoupdateSalesPrice2_onchange;
    }
    function InitializeGrid() {
        var res = GetResourceList("");
        Grid.ElementName = "divGridDetails";
        Grid.Paging = true;
        Grid.PageSize = 10;
        Grid.Sorting = true;
        Grid.Editing = false;
        Grid.Inserting = false;
        Grid.SelectedIndex = 1;
        Grid.OnRowDoubleClicked = Grid_RowDoubleClicked;
        Grid.OnItemEditing = function () { };
        Grid.PrimaryKey = "COMP_CODE";
        Grid.Columns = [
            { title: res.App_Number, name: "COMP_CODE", type: "text", width: "2%", visible: false },
            { title: "رقم الفرع", name: "COMP_CODE", type: "text", width: "13%" },
            { title: "اسم الفرع", name: "NameA", type: "text", width: "12%" },
            { title: "رقم الموبيل", name: "Tel", type: "text", width: "20%" },
            { title: "الحالة", name: "NameActive", type: "text", width: "20%" },
        ];
        BindGrid();
    }
    ///////  BIND Grid ////////////////////////////////////
    function BindGrid() {
        $('#divShow').removeClass("display_none");
        var COMP_CODE = 0;
        //Ajax.Callsync({
        //    type: "Get",
        //    url: link + "GComp/GetAll",
        Ajax.Callsync({
            type: "Get",
            url: sys.apiUrl("GComp", "GetAll"),
            data: { UserCode: SysSession.CurrentEnvironment.UserCode, Token: "HGFD-" + SysSession.CurrentEnvironment.Token },
            success: function (d) {
                var result = d;
                if (result.IsSuccess) {
                    COMPANY = result.Response;
                    for (var i = 0; i < COMPANY.length; i++) {
                        COMPANY[i].NameActive = COMPANY[i].IsActive == true ? "مفعلة" : "غير مفعلة";
                    }
                    Grid.DataSource = COMPANY;
                    Grid.Bind();
                }
            }
        });
    }
    function BindIControlGrid() {
        var COMP_CODE = Number(Grid.SelectedKey);
        //Ajax.Callsync({
        //type: "Get",
        //url: link + "I_Control/GetAll",
        Ajax.Callsync({
            type: "Get",
            url: sys.apiUrl("I_Control", "GetAll"),
            data: { CompCode: COMP_CODE },
            success: function (d) {
                var result = d;
                if (result.IsSuccess) {
                    IControl = result.Response;
                    IControlFilter = IControl.filter(function (x) { return x.CompCode == COMP_CODE; });
                    chk_SendSMS.checked = IControl[0].SendSMS;
                    chk_SendPublicSMS.checked = IControl[0].SendPublicSMS;
                    chk_IsVat.checked = IControl[0].IsVat;
                    //chk_GL_VoucherCCType.checked = IControl[0].GL_VoucherCCType == 1 ? true : false;
                    if (IControl[0].GL_VoucherCCType == 0) {
                        chk_GL_VoucherCCType.checked = true;
                    }
                    else if (IControl[0].GL_VoucherCCType == 1) {
                        chk_incoming.checked = true;
                    }
                    else {
                        chk_all.checked = true;
                    }
                    // chk_GL_VoucherCCDT_Type.checked = IControl[0].GL_VoucherCCDT_Type == 1 ? true : false;
                    if (IControl[0].GL_VoucherCCDT_Type == 1) {
                        chk_GL_VoucherCCDT_Type.checked = true;
                    }
                    else {
                        chk_GL_VoucherCCDT_Type2.checked = true;
                    }
                    if (IControl[0].IsLocalSalePrice == true) {
                        chk_IsLocalSalePrice.checked = true;
                    }
                    else {
                        chk_IsLocalSalePrice2.checked = true;
                    }
                    if (IControl[0].IsLocalCost == true) {
                        chk_IsLocalCost.checked = true;
                    }
                    else {
                        chk_IsLocalCost2.checked = true;
                    }
                    if (IControl[0].AutoupdateSalesPrice == true) {
                        chk_AutoupdateSalesPrice.checked = true;
                    }
                    else {
                        chk_AutoupdateSalesPrice2.checked = true;
                    }
                    Txt_PswPrice.value = IControl[0].ExceedMinPricePassword;
                    Txt_SalePriceAddPerc.value = IControl[0].SalePriceAddPerc.toString();
                    Txt_SalePriceMinAddPerc.value = IControl[0].SalePriceMinAddPerc.toString();
                    chk_GL_JournalSaveUnbalanced.checked = IControl[0].GL_JournalSaveUnbalanced;
                    chk_IsLocalBranchCustomer.checked = IControl[0].IsLocalBranchCustomer;
                    chk_IvoiceDateEditable.checked = IControl[0].IvoiceDateEditable;
                    //chk_InvoiceWithoutCust.checked = IControl[0].InvoiceWithoutCust;
                    txt_DocPDFFolder.value = IControl[0].DocPDFFolder;
                    chk_InvoiceLineDiscount.checked = IControl[0].InvoiceLineDiscount;
                    chk_InvoiceLineAllowance.checked = IControl[0].InvoiceLineAllowance;
                    chk_InvoiceTotalAllowance.checked = IControl[0].InvoiceTotalAllowance;
                    chk_InvoiceTotalCharge.checked = IControl[0].InvoiceTotalCharge;
                    chk_OperationPriceWithVAT.checked = IControl[0].OperationPriceWithVAT;
                    chk_SalesPriceWithVAT.checked = IControl[0].SalesPriceWithVAT;
                    //chk_sendEmail.checked = IControl[0].Se;
                    //chk_sendshopEmail.checked = IControl[0].se;
                    //chk_incoming.checked = IControl[0].SendSMS;
                    //chk_GL_VoucherCCDT_Type2.checked = IControl[0].GL_VoucherCCDT_Type;
                    //chk_all.checked = IControl[0].all;
                    txt_MobileLength.value = IControl[0].MobileLength.toString();
                    txt_IDLength.value = IControl[0].IDLength.toString();
                    txt_MaxYearlyMSGs.value = IControl[0].MaxYearlyMSGs.toString();
                    txt_UsedMSGs.value = IControl[0].UsedMSGs.toString();
                    txt_NotePeriodinSec.value = IControl[0].NotePeriodinSec.toString();
                    txt_DashBoardPeriodinSec.value = IControl[0].DashBoardPeriodinSec.toString();
                    txt_SysTimeOut.value = IControl[0].SysTimeOut.toString();
                    ddl_DefSlsVatType.value = IControl[0].DefSlsVatType == null ? '' : IControl[0].DefSlsVatType.toString();
                    ddl_DefPurVatType.value = IControl[0].DefPurVatType == null ? '' : IControl[0].DefPurVatType.toString();
                    txt_MembeshipEndDate.value = DateFormat(IControl[0].MembeshipEndDate);
                    txt_MembershipAllanceDays.value = IControl[0].MembershipAllanceDays.toString();
                    txt_MembershipreadOnlyDays.value = IControl[0].MembershipreadOnlyDays.toString();
                    ddl_Gl_JournalOpenType.value = IControl[0].Gl_JournalOpenType == null ? '' : IControl[0].Gl_JournalOpenType.toString();
                    txt_GL_JournalMonthlyNo.value = IControl[0].GL_JournalMonthlyNo == null ? '' : IControl[0].GL_JournalMonthlyNo.toString();
                    txt_GL_JournalMonthlyNoWidth.value = IControl[0].GL_JournalMonthlyNoWidth == null ? '' : IControl[0].GL_JournalMonthlyNoWidth.toString();
                    ddl_InvoiceTypeCode.value = IControl[0].InvoiceTypeCode.toString();
                    ddl_InvoiceTransCode.value = IControl[0].InvoiceTransCode.toString();
                    txt_ExceedMinPricePassword.value = IControl[0].ExceedMinPricePassword.toString();
                    txt_MembeshiptStartDate.value = DateFormat(IControl[0].MembeshiptStartDate);
                    Txt_PswPrice.value = IControl[0].ExceedMinPricePassword.toString();
                }
            }
        });
    }
    function BindGAlertControlGrid() {
        var COMP_CODE = Number(Grid.SelectedKey);
        //Ajax.Callsync({
        //    type: "Get",
        //    url: link + "GAlertControl/GetAll",
        Ajax.Callsync({
            type: "Get",
            url: sys.apiUrl("GAlertControl", "GetAll"),
            data: { UserCode: SysSession.CurrentEnvironment.UserCode, Token: "HGFD-" + SysSession.CurrentEnvironment.Token },
            success: function (d) {
                var result = d;
                if (result.IsSuccess && result.Response != 0) {
                    GAlertControl = result.Response;
                    GAlertControlFilter = GAlertControl.filter(function (X) { return X.Compcode == COMP_CODE; });
                    SystemCode = GAlertControlFilter[0].SystemCode;
                    chk_EMAIL_SSL.checked = GAlertControlFilter[0].EMAIL_SSL;
                    chk_EMAIL_Authentication.checked = GAlertControlFilter[0].EMAIL_Authentication;
                    txt_EMAIL_Sender.value = GAlertControlFilter[0].EMAIL_Sender.toString();
                    txt_EMAIL_SenderPassword.value = GAlertControlFilter[0].EMAIL_SenderPassword.toString();
                    txt_EMAIL_SenderSMTP.value = GAlertControlFilter[0].EMAIL_SenderSMTP.toString();
                    txt_EMAIL_SendorPort.value = GAlertControlFilter[0].EMAIL_SendorPort.toString();
                    txt_EMAIL_SenderName.value = GAlertControlFilter[0].EMAIL_SenderName.toString();
                    txt_EmailMaxDaily.value = GAlertControlFilter[0].EmailMaxDaily.toString();
                    txt_SMS_Provider.value = GAlertControlFilter[0].SMS_Provider.toString();
                    txt_SMS_UserName.value = GAlertControlFilter[0].SMS_UserName.toString();
                    txt_SMS_Password.value = GAlertControlFilter[0].SMS_Password.toString();
                    txt_SMS_SenderName.value = GAlertControlFilter[0].SMS_SenderName.toString();
                    //txt_MobileNoPreFex.value = GAlertControlFilter[0].MobileNoPreFex.toString();
                }
            }
        });
    }
    ////////////////////////////////////////////////////////////////
    function Grid_RowDoubleClicked() {
        $("#divGrid").removeClass("display_none");
        $("#btnEdit").removeClass("display_none");
        $("#btnEdit2").removeClass("display_none");
        $("#btnEdit3").removeClass("display_none");
        $("#btnSave").addClass("display_none");
        $("#btnBack").addClass("display_none");
        $("#btnSave2").addClass("display_none");
        $("#btnBack2").addClass("display_none");
        $("#btnSave3").addClass("display_none");
        $("#btnBack3").addClass("display_none");
        compcode = Number(Grid.SelectedKey);
        // $('#divcompinformtion').removeClass("display_none");
        SelecteData = COMPANY.filter(function (x) { return x.COMP_CODE == Number(Grid.SelectedKey); });
        DocumentActions.RenderFromModel(SelecteData[0]);
        Fillddl_InvoiceTypeCodeFilter();
        ddl_IdType.value = SelecteData[0].VndIDTypeCode == null ? 'null' : SelecteData[0].VndIDTypeCode.toString();
        ddl_Country.value = SelecteData[0].NationalityID == null ? 'null' : SelecteData[0].NationalityID.toString();
        ddl_Currency.value = SelecteData[0].Currencyid == null ? 'null' : SelecteData[0].Currencyid.toString();
        Disabled();
        BindGAlertControlGrid();
        Fillddl_DefSlsVatType();
        Fillddl_Gl_JournalOpenTypeFilter();
        BindIControlGrid();
    }
    function succes() {
        BindGrid();
        Disabled();
        // $("#divcompinformtion").removeClass("display_none");
        $("#btnEdit").removeClass("display_none");
        $("#divGrid").removeClass("disabledDiv");
        $("#btnBack").addClass("display_none");
        $("#btnSave").addClass("display_none");
        if (IsNew == false) {
            Grid_RowDoubleClicked();
        }
        else {
            $("#divGrid").removeClass("display_none");
            $("#btnEdit").removeClass("display_none");
            $("#btnSave").addClass("display_none");
            $("#btnBack").addClass("display_none");
            //   $('#divcompinformtion').removeClass("display_none");
            SelecteData = COMPANY.filter(function (x) { return x.COMP_CODE == Number(comp_CODE); });
            DocumentActions.RenderFromModel(SelecteData[0]);
            ddl_IdType.value = SelecteData[0].VndIDTypeCode == null ? 'null' : SelecteData[0].VndIDTypeCode.toString();
            ddl_Country.value = SelecteData[0].NationalityID == null ? 'null' : SelecteData[0].NationalityID.toString();
            ddl_Currency.value = SelecteData[0].Currencyid == null ? 'null' : SelecteData[0].Currencyid.toString();
            Disabled();
        }
    }
    function Update() {
        Assign();
        $("#btnEdit").removeClass("display_none");
        $("#btnSave").addClass("display_none");
        $("#btnBack").addClass("display_none");
        //Ajax.Callsync({
        //    type: "POST",
        //    url: link + "GComp/Update",
        Ajax.Callsync({
            type: "POST",
            url: sys.apiUrl("GComp", "Update"),
            data: JSON.stringify(Model),
            success: function (d) {
                var result = d;
                if (result.IsSuccess) {
                    DisplayMassage("تم الحفظ بنجاح", "Saved successfully", MessageType.Succeed);
                    //var comp_CODE = result.Response as G_COMPANY;
                }
            }
        });
    }
    function Insert() {
        Assign();
        //Ajax.Callsync({
        //    type: "Post",
        //    url: link + "GComp/Insert",
        Ajax.Callsync({
            type: "Post",
            url: sys.apiUrl("GComp", "Insert"),
            data: JSON.stringify(Model),
            success: function (d) {
                var result = d;
                if (result.IsSuccess) {
                    DisplayMassage("تم الحفظ بنجاح", "Saved successfully", MessageType.Succeed);
                    comp_CODE = result.Response;
                }
                else {
                    DisplayMassage("خطأء", "Error", MessageType.Error);
                }
            }
        });
    }
    function Assign() {
        Model = new G_COMPANY();
        DocumentActions.AssignToModel(Model);
        Model.Token = "HGFD-" + SysSession.CurrentEnvironment.Token;
        Model.IDNo = txt_IDNo.value;
        Model.UserCode = SysSession.CurrentEnvironment.UserCode;
    }
    /////  FILL DDL////////////////////////////////////////////////////////////////
    function Fillddl_IdType() {
        //Ajax.Callsync({
        //    type: "Get",
        //    url: link + "GCodes/GetAll",
        Ajax.Callsync({
            type: "Get",
            url: sys.apiUrl("GCodes", "GetAll"),
            data: { codeType: 'VNDIDType', UserCode: SysSession.CurrentEnvironment.UserCode, Token: "HGFD-" + SysSession.CurrentEnvironment.Token },
            success: function (d) {
                var result = d;
                if (result.IsSuccess == true) {
                    CodesTypes = result.Response;
                    DocumentActions.FillCombowithdefult(CodesTypes, ddl_IdType, "CodeValue", "DescA", " اختر نوع المعرف ");
                }
            }
        });
    }
    function Fillddl_Country() {
        //Ajax.Callsync({
        //    type: "Get",
        //    url: link + "Nationality/GetAll",
        Ajax.Callsync({
            type: "Get",
            url: sys.apiUrl("Nationality", "GetAll"),
            data: { UserCode: SysSession.CurrentEnvironment.UserCode, Token: "HGFD-" + SysSession.CurrentEnvironment.Token },
            success: function (d) {
                var result = d;
                if (result.IsSuccess == true) {
                    CountryFilter = result.Response;
                    DocumentActions.FillCombowithdefult(CountryFilter, ddl_Country, "NationalityID", "DescA", " اختر الدولة ");
                }
            }
        });
    }
    function Fillddl_Currency() {
        //Ajax.Callsync({
        //    type: "Get",
        //    url: link + "AccDefVendor/GetAllCurrency",
        Ajax.Callsync({
            type: "Get",
            url: sys.apiUrl("AccDefVendor", "GetAllCurrency"),
            data: { UserCode: SysSession.CurrentEnvironment.UserCode, Token: "HGFD-" + SysSession.CurrentEnvironment.Token },
            success: function (d) {
                var result = d;
                if (result.IsSuccess == true) {
                    CurrencyFilter = result.Response;
                    DocumentActions.FillCombowithdefult(CurrencyFilter, ddl_Currency, "CurrencyID", "DescA", " اختر العملة ");
                }
            }
        });
    }
    function Fillddl_DefSlsVatType() {
        //Ajax.Callsync({
        //    type: "Get",
        //    url: link + "GenVatType/GetAll",
        Ajax.Callsync({
            type: "Get",
            url: sys.apiUrl("GenVatType", "GetAll"),
            data: { UserCode: SysSession.CurrentEnvironment.UserCode, Token: "HGFD-" + SysSession.CurrentEnvironment.Token },
            success: function (d) {
                var result = d;
                if (result.IsSuccess == true) {
                    ddl_AllDefVatTypeFilter = result.Response;
                    ddl_DefSlsVatTypeFilter = ddl_AllDefVatTypeFilter.filter(function (x) { return x.TYPE == 1 && x.COMP_CODE == compcode; });
                    DocumentActions.FillCombowithdefult(ddl_DefSlsVatTypeFilter, ddl_DefSlsVatType, "CODE", "DESCRIPTION", " اختر الضريبة في المبيعات ");
                    ddl_DefPurVatTypeFilter = ddl_AllDefVatTypeFilter.filter(function (x) { return x.TYPE == 2 && x.COMP_CODE == compcode; });
                    DocumentActions.FillCombowithdefult(ddl_DefPurVatTypeFilter, ddl_DefPurVatType, "CODE", "DESCRIPTION", " اختر الضريبة في المشتريات ");
                }
            }
        });
    }
    function Fillddl_Gl_JournalOpenTypeFilter() {
        //Ajax.Callsync({
        //    type: "Get",
        //    url: link + "GLTrVoucher/GetAll",
        Ajax.Callsync({
            type: "Get",
            url: sys.apiUrl("GLTrVoucher", "GetAllVoucherTypes"),
            data: { CompCode: compcode, UserCode: SysSession.CurrentEnvironment.UserCode, VoucherType: 1, Token: "HGFD-" + SysSession.CurrentEnvironment.Token },
            success: function (d) {
                var result = d;
                if (result.IsSuccess == true) {
                    ddl_Gl_JournalOpenTypeFilter = result.Response;
                    DocumentActions.FillCombowithdefult(ddl_Gl_JournalOpenTypeFilter, ddl_Gl_JournalOpenType, "TYPE_CODE", "TYPE_DESCA", " اختر القيد الافتتاحي ");
                }
            }
        });
    }
    function Fillddl_InvoiceTypeCodeFilter() {
        //Ajax.Callsync({
        //    type: "Get",
        //    url: link + "GCodes/GetAll_GCodes",
        Ajax.Callsync({
            type: "Get",
            url: sys.apiUrl("GCodes", "GetAll_GCodes"),
            data: { UserCode: SysSession.CurrentEnvironment.UserCode, Token: "HGFD-" + SysSession.CurrentEnvironment.Token },
            success: function (d) {
                var result = d;
                if (result.IsSuccess == true) {
                    ddl_AllInvoiceCodeFilter = result.Response;
                    ddl_InvoiceTypeCodeFilter = ddl_AllInvoiceCodeFilter.filter(function (x) { return x.CodeType == "InvoiceType"; });
                    DocumentActions.FillCombowithdefult(ddl_InvoiceTypeCodeFilter, ddl_InvoiceTypeCode, "CodeValue", "DescA", " اختر نوع الفاتورة ");
                    ddl_InvoiceTransCodeFilter = ddl_AllInvoiceCodeFilter.filter(function (x) { return x.CodeType == "InvoiceTrans"; });
                    DocumentActions.FillCombowithdefult(ddl_InvoiceTransCodeFilter, ddl_InvoiceTransCode, "CodeValue", "DescA", " اختر نوع حركة الفاتورة ");
                }
            }
        });
    }
    ///// function  BUTTONS FIRSTDIV  ////////////////////////////////////////////////////////////////
    function btnAdd_onclick() {
        txt_COMP_CODE.disabled = false;
        $("#divGrid").addClass("disabledDiv");
        $("#btnEdit").addClass("display_none");
        $("#btnEdit2").addClass("display_none");
        $("#btnEdit3").addClass("display_none");
        $("#btnSave").removeClass("display_none");
        $("#btnBack").removeClass("display_none");
        //$('#divcompinformtion').removeClass("display_none");
        Clear();
        CLearSecondDiv();
        clearThirdDiv();
        Enabled();
        DisabledSecondDiv();
        DisabledThirdDiv();
        IsNew = true;
    }
    function btnEdit_onclick() {
        $("#btnBack").removeClass("display_none");
        $("#btnSave").removeClass("display_none");
        $("#btnEdit").addClass("display_none");
        $("#divGrid").addClass("disabledDiv");
        $("#SecondDiv").addClass("disabledDiv");
        $("#ThirdDiv").addClass("disabledDiv");
        Enabled();
        IsNew = false;
    }
    function btnSave_onclick() {
        $("#SecondDiv").removeClass("disabledDiv");
        $("#ThirdDiv").removeClass("disabledDiv");
        if (!validation())
            return;
        Assign();
        if (IsNew == false) {
            Update();
            DisabledSecondDiv();
            DisabledThirdDiv();
        }
        else {
            Insert();
        }
        succes();
        Disabled();
        //$("#btnBack").addClass("display_none");
        //$("#btnSave").addClass("display_none");
        //$("#btnEdit").removeClass("display_none");
        //$("#divGrid").removeClass("display_none");
    }
    function btnBack_onclick() {
        $("#btnEdit").removeClass("display_none");
        $("#btnSave").addClass("display_none");
        $("#btnBack").addClass("display_none");
        $("#divGrid").removeClass("disabledDiv");
        $("#SecondDiv").removeClass("disabledDiv");
        $("#ThirdDiv").removeClass("disabledDiv");
        Disabled();
        if (IsNew == true) {
            $("#btnEdit").addClass("display_none");
            $("#btnEdit2").addClass("display_none");
            $("#btnEdit3").addClass("display_none");
            Clear();
            CLearSecondDiv();
            clearThirdDiv();
        }
        else {
            Grid_RowDoubleClicked();
            DisabledSecondDiv();
            DisabledThirdDiv();
            //btnBack2_onclick();
            //btnBack3_onclick();
        }
    }
    /////function  BUTTONS SECONDDIV  ////////////////////////////////////////////////////////////////
    function btnSave2_onclick() {
        if (!SecondDivvalidation()) {
            return;
        }
        if (flage == false) {
        }
        else {
            $("#btnEdit2").removeClass("display_none");
            $("#btnSave2").addClass("display_none");
            $("#btnBack2").addClass("display_none");
            $("#divGrid").removeClass("disabledDiv");
            Model_GAlertControl = new G_AlertControl();
            Model_GAlertControl.UserCode = sys.SysSession.CurrentEnvironment.UserCode;
            Model_GAlertControl.Token = "HGFD-" + sys.SysSession.CurrentEnvironment.Token;
            Model_GAlertControl.Compcode = Number(txt_COMP_CODE.value);
            //Model_GAlertControl.SystemCode = sys.SysSession.CurrentEnvironment.SystemCode;
            Model_GAlertControl.SystemCode = SystemCode;
            Model_GAlertControl.EMAIL_SSL = chk_EMAIL_SSL.checked;
            Model_GAlertControl.EMAIL_Authentication = chk_EMAIL_Authentication.checked;
            Model_GAlertControl.EMAIL_SenderName = txt_EMAIL_SenderName.value;
            Model_GAlertControl.EMAIL_Sender = txt_EMAIL_Sender.value;
            Model_GAlertControl.EMAIL_SenderPassword = txt_EMAIL_SenderPassword.value;
            Model_GAlertControl.EMAIL_SendorPort = Number(txt_EMAIL_SendorPort.value);
            Model_GAlertControl.EMAIL_SenderSMTP = txt_EMAIL_SenderSMTP.value;
            Model_GAlertControl.SMS_Provider = txt_SMS_Provider.value;
            Model_GAlertControl.SMS_UserName = txt_SMS_UserName.value;
            Model_GAlertControl.SMS_SenderName = txt_SMS_SenderName.value;
            Model_GAlertControl.SMS_Password = txt_SMS_Password.value;
            // Model_GAlertControl.MobileNoPreFex = "";
            Model_GAlertControl.EmailMaxDaily = Number(txt_EmailMaxDaily.value);
            //Ajax.Callsync({
            //    type: "POST",
            //    url: link + "GAlertControl/Update",
            Ajax.Callsync({
                type: "POST",
                url: sys.apiUrl("GAlertControl", "Update"),
                data: JSON.stringify(Model_GAlertControl),
                success: function (d) {
                    var result = d;
                    if (result.IsSuccess) {
                        DisplayMassage("تم الحفظ بنجاح", "Saved successfully", MessageType.Succeed);
                    }
                    else {
                        return;
                    }
                }
            });
            DisabledSecondDiv();
        }
    }
    function btnEdit2_onclick() {
        flage = true;
        $("#btnBack2").removeClass("display_none");
        $("#btnSave2").removeClass("display_none");
        $("#btnEdit2").addClass("display_none");
        $("#divGrid").addClass("disabledDiv");
        EnabledSecondDiv();
        IsNew = false;
    }
    function btnBack2_onclick() {
        flage = false;
        $("#btnEdit2").removeClass("display_none");
        $("#btnSave2").addClass("display_none");
        $("#btnBack2").addClass("display_none");
        $("#divGrid").removeClass("disabledDiv");
        DisabledSecondDiv();
        if (IsNew == true) {
            $("#btnEdit").addClass("display_none");
        }
        else {
            Grid_RowDoubleClicked();
            //btnBack_onclick();
            //btnBack3_onclick();
        }
    }
    /////function  BUTTONS THIRDDIV  ////////////////////////////////////////////////////////////////
    function btnSave3_onclick() {
        if (!ThirdDivvalidation()) {
            btnEdit2_onclick();
            //btnEdit_onclick();
            return;
        }
        else {
            DisabledThirdDiv();
            $("#btnEdit3").removeClass("display_none");
            $("#btnBack3").addClass("display_none");
            $("#btnSave3").addClass("display_none");
            $("#divGrid").removeClass("disabledDiv");
            Model_IControl = new I_Control();
            Model_IControl.CompCode = Number(txt_COMP_CODE.value);
            Model_IControl.DefSlsVatType = Number(ddl_DefSlsVatType.value);
            Model_IControl.DefPurVatType = Number(ddl_DefPurVatType.value);
            Model_IControl.IsVat = chk_IsVat.checked;
            Model_IControl.MobileLength = Number(txt_MobileLength.value);
            Model_IControl.IDLength = Number(txt_IDLength.value);
            Model_IControl.SendSMS = chk_SendSMS.checked;
            Model_IControl.SendPublicSMS = chk_SendPublicSMS.checked;
            Model_IControl.NotePeriodinSec = Number(txt_NotePeriodinSec.value);
            Model_IControl.DashBoardPeriodinSec = Number(txt_DashBoardPeriodinSec.value);
            Model_IControl.MaxYearlyMSGs = Number(txt_MaxYearlyMSGs.value);
            Model_IControl.UsedMSGs = Number(txt_UsedMSGs.value);
            Model_IControl.UserTimeZoneUTCDiff = 0;
            Model_IControl.ServerTimeZoneUTCDiff = 0;
            Model_IControl.SaudiNationID = 1;
            Model_IControl.WebCustomerWebsite = false;
            DateFormat(Model_IControl.MembeshiptStartDate = txt_MembeshiptStartDate.value);
            DateFormat(Model_IControl.MembeshipEndDate = txt_MembeshipEndDate.value);
            Model_IControl.MembershipAllanceDays = Number(txt_MembershipAllanceDays.value);
            Model_IControl.MembershipreadOnlyDays = Number(txt_MembershipreadOnlyDays.value);
            Model_IControl.IsFreePurchaseReturn = true;
            Model_IControl.IsFreeSalesReturn = true;
            Model_IControl.ExceedMinPricePassword = txt_ExceedMinPricePassword.value;
            //  Model_IControl.GL_VoucherCCType = Number(chk_GL_VoucherCCType.checked);
            if (chk_GL_VoucherCCType.checked == true) {
                Model_IControl.GL_VoucherCCType = 0;
            }
            else if (chk_incoming.checked == true) {
                Model_IControl.GL_VoucherCCType = 1;
            }
            else {
                Model_IControl.GL_VoucherCCType = 2;
            }
            //   Model_IControl.GL_VoucherCCDT_Type = Number(chk_GL_VoucherCCDT_Type.checked);
            if (chk_GL_VoucherCCDT_Type.checked == true) {
                Model_IControl.GL_VoucherCCDT_Type = 1;
            }
            else {
                Model_IControl.GL_VoucherCCDT_Type = 0;
            }
            if (chk_IsLocalSalePrice.checked == true) {
                Model_IControl.IsLocalSalePrice = true;
            }
            else {
                Model_IControl.IsLocalSalePrice = false;
            }
            if (chk_IsLocalCost.checked == true) {
                Model_IControl.IsLocalCost = true;
            }
            else {
                Model_IControl.IsLocalCost = false;
            }
            if (chk_AutoupdateSalesPrice.checked == true) {
                Model_IControl.AutoupdateSalesPrice = true;
            }
            else {
                Model_IControl.AutoupdateSalesPrice = false;
            }
            Model_IControl.ExceedMinPricePassword = Txt_PswPrice.value;
            Model_IControl.SalePriceAddPerc = Number(Txt_SalePriceAddPerc.value);
            Model_IControl.SalePriceMinAddPerc = Number(Txt_SalePriceMinAddPerc.value);
            Model_IControl.Gl_JournalOpenType = Number(ddl_Gl_JournalOpenType.value);
            Model_IControl.GL_JournalMonthlyNo = txt_GL_JournalMonthlyNo.checked;
            Model_IControl.GL_JournalMonthlyNoWidth = Number(txt_GL_JournalMonthlyNoWidth.value);
            Model_IControl.GL_JournalSaveUnbalanced = chk_GL_JournalSaveUnbalanced.checked;
            Model_IControl.IsLocalBranchCustomer = chk_IsLocalBranchCustomer.checked;
            Model_IControl.SysTimeOut = Number(txt_SysTimeOut.value);
            Model_IControl.NationalityID = Number(ddl_Country.value);
            Model_IControl.Currencyid = Number(ddl_Currency.value);
            Model_IControl.InvoiceTypeCode = Number(ddl_InvoiceTypeCode.value);
            Model_IControl.InvoiceTransCode = Number(ddl_InvoiceTransCode.value);
            //Model_IControl.InvoiceWithoutCust = chk_InvoiceWithoutCust.checked;
            Model_IControl.DocPDFFolder = txt_DocPDFFolder.value;
            Model_IControl.IvoiceDateEditable = chk_IvoiceDateEditable.checked;
            Model_IControl.InvoiceLineDiscount = chk_InvoiceLineDiscount.checked;
            Model_IControl.InvoiceLineAllowance = chk_InvoiceLineAllowance.checked;
            Model_IControl.InvoiceTotalAllowance = chk_InvoiceTotalAllowance.checked;
            Model_IControl.InvoiceTotalCharge = chk_InvoiceTotalCharge.checked;
            Model_IControl.OperationPriceWithVAT = chk_OperationPriceWithVAT.checked;
            Model_IControl.SalesPriceWithVAT = chk_SalesPriceWithVAT.checked;
            //if (chk_sendEmail.checked == true) {
            //    chk_sendEmail.checked = true;
            //} else {
            //    chk_sendEmail.checked = false;
            //}
            //Model_IControl.sendEmail = chk_sendEmail.checked;
            //Model_IControl.sendshopEmail = chk_sendshopEmail.checked;
            // Model_IControl.incoming = chk_incoming.checked;
            // Model_IControl.all = chk_all.checked;
            //Ajax.Callsync({
            //    type: "POST",
            //    url: link + "I_Control/Update",
            Ajax.Callsync({
                type: "POST",
                url: sys.apiUrl("I_Control", "Update"),
                data: JSON.stringify(Model_IControl),
                success: function (d) {
                    var result = d;
                    if (result.IsSuccess) {
                        DisplayMassage("تم الحفظ بنجاح", "Saved successfully", MessageType.Succeed);
                    }
                }
            });
        }
        btnSave2_onclick();
    }
    function btnEdit3_onclick() {
        $("#btnBack3").removeClass("display_none");
        $("#btnSave3").removeClass("display_none");
        $("#btnEdit3").addClass("display_none");
        $("#divGrid").addClass("disabledDiv");
        EnabledThirdDiv();
        IsNew = false;
    }
    function btnBack3_onclick() {
        $("#btnEdit3").removeClass("display_none");
        $("#btnSave3").addClass("display_none");
        $("#btnBack3").addClass("display_none");
        $("#divGrid").removeClass("disabledDiv");
        btnBack2_onclick();
        DisabledThirdDiv();
        if (IsNew == true) {
            $("#btnEdit").addClass("display_none");
        }
        else {
            Grid_RowDoubleClicked();
            //btnBack_onclick();
            //btnBack2_onclick();
        }
    }
    /////CONTROL FIRSTDIV  //////////////////////////////////////////////////////////////////////////
    function Disabled() {
        txt_COMP_CODE.disabled = true;
        txt_NameA.disabled = true;
        txt_NameE.disabled = true;
        txt_Tel.disabled = true;
        txt_Email.disabled = true;
        txt_GMName.disabled = true;
        txt_Address.disabled = true;
        txt_GroupVatNo.disabled = true;
        txt_VATNO.disabled = true;
        txt_IDNo.disabled = true;
        ddl_IdType.disabled = true;
        txt_LogoIcon.disabled = true;
        txt_BkImage1.disabled = true;
        txt_BkImage2.disabled = true;
        ddl_Country.disabled = true;
        ddl_Currency.disabled = true;
        txt_Address_Province.disabled = true;
        txt_Address_City.disabled = true;
        txt_Address_District.disabled = true;
        txt_Address_Street.disabled = true;
        txt_Address_Str_Additional.disabled = true;
        txt_Address_BuildingNo.disabled = true;
        txt_Address_Build_Additional.disabled = true;
        txt_Address_Postal.disabled = true;
        chk_IsActive.disabled = true;
    }
    function Enabled() {
        txt_NameA.disabled = false;
        txt_NameE.disabled = false;
        txt_Tel.disabled = false;
        txt_Email.disabled = false;
        txt_GMName.disabled = false;
        txt_Address.disabled = false;
        txt_GroupVatNo.disabled = false;
        txt_VATNO.disabled = false;
        txt_IDNo.disabled = false;
        ddl_IdType.disabled = false;
        txt_LogoIcon.disabled = false;
        txt_BkImage1.disabled = false;
        txt_BkImage2.disabled = false;
        ddl_Country.disabled = false;
        ddl_Currency.disabled = false;
        txt_Address_Province.disabled = false;
        txt_Address_City.disabled = false;
        txt_Address_District.disabled = false;
        txt_Address_Street.disabled = false;
        txt_Address_Str_Additional.disabled = false;
        txt_Address_BuildingNo.disabled = false;
        txt_Address_Build_Additional.disabled = false;
        txt_Address_Postal.disabled = false;
        chk_IsActive.disabled = false;
    }
    function Clear() {
        txt_COMP_CODE.value = "";
        txt_NameA.value = "";
        txt_NameE.value = "";
        txt_Tel.value = "";
        txt_Email.value = "";
        txt_GMName.value = "";
        txt_Address.value = "";
        txt_GroupVatNo.value = "";
        txt_VATNO.value = "";
        txt_IDNo.value = "";
        ddl_IdType.value = "null";
        txt_LogoIcon.value = "";
        txt_BkImage1.value = "";
        txt_BkImage2.value = "";
        ddl_Country.value = "null";
        ddl_Currency.value = "null";
        txt_Address_Province.value = "";
        txt_Address_City.value = "";
        txt_Address_District.value = "";
        txt_Address_Street.value = "";
        txt_Address_Str_Additional.value = "";
        txt_Address_BuildingNo.value = "";
        txt_Address_Build_Additional.value = "";
        txt_Address_Postal.value = "";
        chk_IsActive.checked = false;
    }
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    function validate_email() {
        var email = $("#txt_Email").val();
        validateEmail(email);
        return validateEmail(email);
    }
    function validation() {
        var zero = Number(txt_COMP_CODE.value);
        SelecteDataComp = COMPANY.filter(function (x) { return x.COMP_CODE == zero; });
        if (IsNew == true && SelecteDataComp.length > 0) {
            DisplayMassage("الرمز موجود من قبل ", "The Code already exists", MessageType.Worning);
            Errorinput(txt_COMP_CODE);
            return false;
        }
        if (txt_COMP_CODE.value == "" || txt_COMP_CODE.value.trim() == "" || zero <= 0) {
            DisplayMassage("يجب ادخال الرمز  ", "Please, Enter The Code!", MessageType.Worning);
            Errorinput(txt_COMP_CODE);
            return false;
        }
        //if (txt_LogoIcon.value == "" || txt_LogoIcon.value.trim() == "") {
        //    DisplayMassage("يجب صورة اللوجن  ", "Please, Enter The Login!", MessageType.Worning);
        //    Errorinput(txt_LogoIcon);
        //    return false;
        //}
        if ((txt_NameA.value == "" || txt_NameA.value.trim() == "") && (txt_NameE.value == "" || txt_NameE.value.trim() == "")) {
            DisplayMassage("يجب ادخال اسم الشركة بالعربي او اسم الشركة بالانجليزي  ", "Please, Enter The Arabic Or English Name !", MessageType.Worning);
            Errorinput(txt_NameA);
            Errorinput(txt_NameE);
            return false;
        }
        if ((txt_NameA.value == "" || txt_NameA.value.trim() == "") && txt_NameE.value != "") {
            txt_NameA.value = txt_NameE.value;
        }
        if ((txt_NameE.value == "" || txt_NameE.value.trim() == "") && txt_NameA.value != "") {
            txt_NameE.value = txt_NameA.value;
        }
        //if (txt_BkImage1.value == "" || txt_BkImage1.value.trim() == "") {
        //    DisplayMassage("يجب ادخال صورة الخلفية   ", "Please, Enter The Background!", MessageType.Worning);
        //    Errorinput(txt_BkImage1);
        //    return false;
        //}
        //if (txt_BkImage2.value == "" || txt_BkImage2.value.trim() == "") {
        //    DisplayMassage("يجب ادخال صورة الخلفية الاضافية  ", "Please, Enter The Additional Background!", MessageType.Worning);
        //    Errorinput(txt_BkImage2);
        //    return false;
        //}
        //if (txt_Tel.value == "" || txt_Tel.value.trim() == "") {
        //    DisplayMassage("يجب ادخال رقم الهاتف  ", "Please, Enter The telephone Number!", MessageType.Worning);
        //    Errorinput(txt_Tel);
        //    return false;
        //}
        if ($('#txt_Email').val().trim() != '') {
            if (validate_email() == false) {
                DisplayMassage("يجب ادخال البريد الالكتروني صحيح ", "You must enter a valid email", MessageType.Worning);
                Errorinput($('#txt_Email'));
                return false;
            }
        }
        //if (txt_Email.value == "" || txt_Email.value.trim() == "") {
        //    DisplayMassage("يجب ادخال البريد الالكتروني  ", "Please, Enter The Email!", MessageType.Worning);
        //    Errorinput(txt_Email);
        //    return false;
        //}
        //if (txt_GMName.value == "" || txt_GMName.value.trim() == "") {
        //    DisplayMassage("يجب ادخال اسم المسؤول  ", "Please, Enter The Responsible Name!", MessageType.Worning);
        //    Errorinput(txt_GMName);
        //    return false;
        //}
        //if (txt_Address.value == "" || txt_Address.value.trim() == "") {
        //    DisplayMassage("يجب ادخال العنوان  ", "Please, Enter The Address!", MessageType.Worning);
        //    Errorinput(txt_Address);
        //    return false;
        //}
        if (txt_GroupVatNo.value.trim() == "" && txt_VATNO.value.trim() == "") {
            DisplayMassage("يجب ادخال الرقم الضريبي  ", "Please, Enter The Tax!", MessageType.Worning);
            Errorinput(txt_VATNO);
            return false;
        }
        //if (txt_GroupVatNo.value == "" || txt_GroupVatNo.value.trim() == "") {
        //    DisplayMassage("يجب ادخال رقم المجموعة الضريبية  ", "Please, Enter The group Tax!", MessageType.Worning);
        //    Errorinput(txt_GroupVatNo);
        //    return false;
        //}
        //if (txt_VATNO.value == "" || txt_VATNO.value.trim() == "") {
        //    DisplayMassage("يجب ادخال قيمةالضريبية  ", "Please, Enter The Tax!", MessageType.Worning);
        //    Errorinput(txt_VATNO);
        //    return false;
        //}
        //if (txt_IDNo.value == "" || txt_IDNo.value.trim() == "") {
        //    DisplayMassage("يجب ادخال الرقم التعريفي  ", "Please, Enter The Identity!", MessageType.Worning);
        //    Errorinput(txt_IDNo);
        //    return false;
        //}
        //if (ddl_IdType.value == "" || ddl_IdType.value == "null" || ddl_IdType.value.trim() == "") {
        //    DisplayMassage("يجب ادخال نوع المعرف  ", "Please, Enter The Vndor ID Type Code!", MessageType.Worning);
        //    Errorinput(ddl_IdType);
        //    return false;
        //}
        if (txt_IDNo.value.trim() != "" && ddl_IdType.value == "null") {
            DisplayMassage("يجب ادخال نوع المعرف  ", "Please, Enter The Vndor ID Type Code!", MessageType.Worning);
            Errorinput(ddl_IdType);
            return false;
        }
        //if (ddl_Country.value == "" || ddl_Country.value == "null" || ddl_Country.value.trim() == "") {
        //    DisplayMassage("يجب ادخال الدولة", "Please, Enter The Country!", MessageType.Worning);
        //    Errorinput(ddl_Country);
        //    return false;
        //}
        //if (ddl_Currency.value == "" || ddl_Currency.value == "null" || ddl_Currency.value.trim() == "") {
        //    DisplayMassage("يجب ادخال العملة", "Please, Enter The Currency!", MessageType.Worning);
        //    Errorinput(ddl_Currency);
        //    return false;
        //}
        //if (txt_Address_Province.value == "" || txt_Address_Province.value.trim() == "") {
        //    DisplayMassage("يجب ادخال المنطقة  ", "Please, Enter The Region!", MessageType.Worning);
        //    Errorinput(txt_Address_Province);
        //    return false;
        //}
        //if (txt_Address_City.value == "" || txt_Address_City.value.trim() == "") {
        //    DisplayMassage("يجب ادخال المدينة  ", "Please, Enter The City!", MessageType.Worning);
        //    Errorinput(txt_Address_City);
        //    return false;
        //}
        //if (txt_Address_District.value == "" || txt_Address_District.value.trim() == "") {
        //    DisplayMassage("يجب ادخال الحي  ", "Please, Enter The District!", MessageType.Worning);
        //    Errorinput(txt_Address_District);
        //    return false;
        //}
        //if (txt_Address_Street.value == "" || txt_Address_Street.value.trim() == "") {
        //    DisplayMassage("يجب ادخال الشارع  ", "Please, Enter The Street", MessageType.Worning);
        //    Errorinput(txt_Address_Street);
        //    return false;
        //}
        //if (txt_Address_Str_Additional.value == "" || txt_Address_Str_Additional.value.trim() == "") {
        //    DisplayMassage("يجب ادخال الشارع الاضافي  ", "Please, Enter The Additional Street!", MessageType.Worning);
        //    Errorinput(txt_Address_Str_Additional);
        //    return false;
        //}
        //if (txt_Address_BuildingNo.value == "" || txt_Address_BuildingNo.value.trim() == "") {
        //    DisplayMassage("يجب ادخال رقم المبني   ", "Please, Enter The Building Number!", MessageType.Worning);
        //    Errorinput(txt_Address_BuildingNo);
        //    return false;
        //}
        //if (txt_Address_Build_Additional.value == "" || txt_Address_Build_Additional.value.trim() == "") {
        //    DisplayMassage(" يجب ادخال رقم المبني الاضافي    ", "Please, Enter The Additional Building Number!", MessageType.Worning);
        //    Errorinput(txt_Address_Build_Additional);
        //    return false;
        //}
        //if (txt_Address_Postal.value == "" || txt_Address_Postal.value.trim() == "") {
        //    DisplayMassage(" يجب ادخال الرمز البريدي    ", "Please, Enter The post Code!", MessageType.Worning);
        //    Errorinput(txt_Address_Postal);
        //    return false;
        //}
        return true;
    }
    function SearchBox() {
        var SearchDetails = new Array();
        if (searchbutmemreport.value != "") {
            var search_1 = searchbutmemreport.value.toLowerCase();
            SearchDetails = COMPANY.filter(function (x) { return x.COMP_CODE.toString().toLowerCase().search(search_1) >= 0 || x.NameA.toLowerCase().search(search_1) >= 0 || x.NameE.toLowerCase().search(search_1) >= 0; });
            Grid.DataSource = SearchDetails;
            Grid.Bind();
        }
        else {
            Grid.DataSource = COMPANY;
            Grid.Bind();
        }
    }
    /////CONTROL SECONDDIV  //////////////////////////////////////////////////////////////////////////
    function DisabledSecondDiv() {
        txt_EMAIL_Sender.disabled = true;
        txt_EMAIL_SenderPassword.disabled = true;
        txt_EMAIL_SenderSMTP.disabled = true;
        txt_EMAIL_SendorPort.disabled = true;
        txt_EMAIL_SenderName.disabled = true;
        txt_EmailMaxDaily.disabled = true;
        txt_SMS_Provider.disabled = true;
        txt_SMS_UserName.disabled = true;
        txt_SMS_Password.disabled = true;
        txt_SMS_SenderName.disabled = true;
        //  txt_MobileNoPreFex.disabled = true;
        chk_EMAIL_SSL.disabled = true;
        chk_EMAIL_Authentication.disabled = true;
    }
    function EnabledSecondDiv() {
        txt_EMAIL_Sender.disabled = false;
        txt_EMAIL_SenderPassword.disabled = false;
        txt_EMAIL_SenderSMTP.disabled = false;
        txt_EMAIL_SendorPort.disabled = false;
        txt_EMAIL_SenderName.disabled = false;
        txt_EmailMaxDaily.disabled = false;
        txt_SMS_Provider.disabled = false;
        txt_SMS_UserName.disabled = false;
        txt_SMS_Password.disabled = false;
        txt_SMS_SenderName.disabled = false;
        // txt_MobileNoPreFex.disabled = false;
        chk_EMAIL_SSL.disabled = false;
        chk_EMAIL_Authentication.disabled = false;
    }
    function CLearSecondDiv() {
        txt_EMAIL_Sender.value = "";
        txt_EMAIL_SenderPassword.value = "";
        txt_EMAIL_SenderSMTP.value = "";
        txt_EMAIL_SendorPort.value = "";
        txt_EMAIL_SenderName.value = "";
        txt_EmailMaxDaily.value = "";
        txt_SMS_Provider.value = "";
        txt_SMS_UserName.value = "";
        txt_SMS_Password.value = "";
        txt_SMS_SenderName.value = "";
        //   txt_MobileNoPreFex.value = "";
        chk_EMAIL_SSL.checked = false;
        chk_EMAIL_Authentication.checked = false;
    }
    function validateSEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    function validate_semail() {
        var email = $("#txt_EMAIL_Sender").val();
        validateSEmail(email);
        return validateSEmail(email);
    }
    function SecondDivvalidation() {
        if ($('#txt_EMAIL_Sender').val().trim() != '') {
            if (validate_semail() == false) {
                DisplayMassage("يجب ادخال البريد الالكتروني صحيح ", "You must enter a valid email", MessageType.Worning);
                Errorinput($('#txt_EMAIL_Sender'));
                return false;
            }
        }
        if ((txt_SMS_Provider.value.trim() == "" || txt_SMS_UserName.value.trim() == "" || txt_SMS_Password.value.trim() == "" || txt_SMS_SenderName.value.trim() == "") && chk_SendSMS.checked == true) {
            DisplayMassage("يجب ادخال بيانات رسائل الموبيل  ", "Please, Enter The Message Phone !", MessageType.Worning);
            Errorinput(txt_SMS_Provider);
            Errorinput(txt_SMS_UserName);
            Errorinput(txt_SMS_Password);
            Errorinput(txt_SMS_SenderName);
            return false;
        }
        if ((txt_SMS_Provider.value.trim() == "" || txt_SMS_UserName.value.trim() == "" || txt_SMS_Password.value.trim() == "" || txt_SMS_SenderName.value.trim() == "") && chk_SendPublicSMS.checked == true) {
            DisplayMassage("يجب ادخال بيانات رسائل الموبيل  ", "Please, Enter The Message Phone !", MessageType.Worning);
            Errorinput(txt_SMS_Provider);
            Errorinput(txt_SMS_UserName);
            Errorinput(txt_SMS_Password);
            Errorinput(txt_SMS_SenderName);
            return false;
        }
        return true;
    }
    /////CONTROL THIRDDIV  //////////////////////////////////////////////////////////////////////////
    function DisabledThirdDiv() {
        txt_MobileLength.disabled = true;
        txt_IDLength.disabled = true;
        txt_MaxYearlyMSGs.disabled = true;
        txt_UsedMSGs.disabled = true;
        txt_NotePeriodinSec.disabled = true;
        txt_DashBoardPeriodinSec.disabled = true;
        txt_SysTimeOut.disabled = true;
        ddl_DefSlsVatType.disabled = true;
        ddl_DefPurVatType.disabled = true;
        txt_MembeshipEndDate.disabled = true;
        txt_MembershipAllanceDays.disabled = true;
        txt_MembershipreadOnlyDays.disabled = true;
        ddl_Gl_JournalOpenType.disabled = true;
        txt_GL_JournalMonthlyNo.disabled = true;
        txt_GL_JournalMonthlyNoWidth.disabled = true;
        ddl_InvoiceTypeCode.disabled = true;
        ddl_InvoiceTransCode.disabled = true;
        txt_ExceedMinPricePassword.disabled = true;
        txt_MembeshiptStartDate.disabled = true;
        chk_SendSMS.disabled = true;
        chk_SendPublicSMS.disabled = true;
        chk_IsVat.disabled = true;
        chk_GL_VoucherCCType.disabled = true;
        chk_GL_VoucherCCDT_Type.disabled = true;
        chk_GL_JournalSaveUnbalanced.disabled = true;
        chk_IsLocalBranchCustomer.disabled = true;
        chk_IvoiceDateEditable.disabled = true;
        //chk_InvoiceWithoutCust.disabled = true;
        txt_DocPDFFolder.disabled = true;
        chk_InvoiceLineDiscount.disabled = true;
        chk_InvoiceLineAllowance.disabled = true;
        chk_InvoiceTotalAllowance.disabled = true;
        chk_InvoiceTotalCharge.disabled = true;
        chk_OperationPriceWithVAT.disabled = true;
        chk_SalesPriceWithVAT.disabled = true;
        //chk_sendEmail.disabled = true;
        //chk_sendshopEmail.disabled = true;
        chk_incoming.disabled = true;
        chk_GL_VoucherCCDT_Type2.disabled = true;
        chk_all.disabled = true;
        Txt_PswPrice.disabled = true;
        chk_IsLocalSalePrice.disabled = true;
        chk_IsLocalSalePrice2.disabled = true;
        chk_IsLocalCost.disabled = true;
        chk_IsLocalCost2.disabled = true;
        chk_AutoupdateSalesPrice.disabled = true;
        chk_AutoupdateSalesPrice2.disabled = true;
        Txt_SalePriceAddPerc.disabled = true;
        Txt_SalePriceMinAddPerc.disabled = true;
    }
    function EnabledThirdDiv() {
        txt_MobileLength.disabled = false;
        txt_IDLength.disabled = false;
        txt_MaxYearlyMSGs.disabled = false;
        txt_UsedMSGs.disabled = false;
        txt_NotePeriodinSec.disabled = false;
        txt_DashBoardPeriodinSec.disabled = false;
        txt_SysTimeOut.disabled = false;
        ddl_DefSlsVatType.disabled = false;
        ddl_DefPurVatType.disabled = false;
        txt_MembeshipEndDate.disabled = false;
        txt_MembershipAllanceDays.disabled = false;
        txt_MembershipreadOnlyDays.disabled = false;
        ddl_Gl_JournalOpenType.disabled = false;
        txt_GL_JournalMonthlyNo.disabled = false;
        txt_GL_JournalMonthlyNoWidth.disabled = false;
        ddl_InvoiceTypeCode.disabled = false;
        ddl_InvoiceTransCode.disabled = false;
        txt_ExceedMinPricePassword.disabled = false;
        txt_MembeshiptStartDate.disabled = false;
        chk_SendSMS.disabled = false;
        chk_SendPublicSMS.disabled = false;
        chk_IsVat.disabled = false;
        chk_GL_VoucherCCType.disabled = false;
        chk_GL_VoucherCCDT_Type.disabled = false;
        chk_GL_JournalSaveUnbalanced.disabled = false;
        chk_IsLocalBranchCustomer.disabled = false;
        chk_IvoiceDateEditable.disabled = false;
        //chk_InvoiceWithoutCust.disabled = false;
        txt_DocPDFFolder.disabled = false;
        chk_InvoiceLineDiscount.disabled = false;
        chk_InvoiceLineAllowance.disabled = false;
        chk_InvoiceTotalAllowance.disabled = false;
        chk_InvoiceTotalCharge.disabled = false;
        chk_OperationPriceWithVAT.disabled = false;
        chk_SalesPriceWithVAT.disabled = false;
        //chk_sendEmail.disabled = false;
        //chk_sendshopEmail.disabled = false;
        chk_incoming.disabled = false;
        chk_GL_VoucherCCDT_Type2.disabled = false;
        chk_all.disabled = false;
        Txt_PswPrice.disabled = false;
        chk_IsLocalSalePrice.disabled = false;
        chk_IsLocalSalePrice2.disabled = false;
        chk_IsLocalCost.disabled = false;
        chk_IsLocalCost2.disabled = false;
        chk_AutoupdateSalesPrice.disabled = false;
        chk_AutoupdateSalesPrice2.disabled = false;
        //Txt_SalePriceAddPerc.disabled = false;
        //Txt_SalePriceMinAddPerc.disabled = false;
    }
    function clearThirdDiv() {
        txt_MobileLength.value = "";
        txt_IDLength.value = "";
        txt_MaxYearlyMSGs.value = "";
        txt_UsedMSGs.value = "";
        txt_NotePeriodinSec.value = "";
        txt_DashBoardPeriodinSec.value = "";
        txt_SysTimeOut.value = "";
        ddl_DefSlsVatType.value = "null";
        ddl_DefPurVatType.value = "null";
        txt_MembeshipEndDate.value = "";
        txt_MembershipAllanceDays.value = "";
        txt_MembershipreadOnlyDays.value = "";
        ddl_Gl_JournalOpenType.value = "null";
        txt_GL_JournalMonthlyNo.value = "";
        txt_GL_JournalMonthlyNoWidth.value = "";
        ddl_InvoiceTypeCode.value = "null";
        ddl_InvoiceTransCode.value = "null";
        txt_ExceedMinPricePassword.value = "";
        txt_MembeshiptStartDate.value = "";
        chk_SendSMS.checked = false;
        chk_SendPublicSMS.checked = false;
        chk_IsVat.checked = false;
        chk_GL_VoucherCCType.checked = false;
        chk_GL_VoucherCCDT_Type.checked = false;
        chk_GL_JournalSaveUnbalanced.checked = false;
        chk_IsLocalBranchCustomer.checked = false;
        chk_IvoiceDateEditable.checked = false;
        //chk_InvoiceWithoutCust.checked = false;
        txt_DocPDFFolder.value = "";
        chk_InvoiceLineDiscount.checked = false;
        chk_InvoiceLineAllowance.checked = false;
        chk_InvoiceTotalAllowance.checked = false;
        chk_InvoiceTotalCharge.checked = false;
        chk_OperationPriceWithVAT.checked = false;
        chk_SalesPriceWithVAT.checked = false;
        //chk_sendEmail.checked = false;
        //chk_sendshopEmail.checked = false;
        chk_incoming.checked = false;
        chk_GL_VoucherCCDT_Type2.checked = false;
        chk_all.checked = false;
        Txt_PswPrice.value = "";
        chk_IsLocalSalePrice.checked = true;
        chk_IsLocalSalePrice2.checked = false;
        chk_IsLocalCost.checked = true;
        chk_IsLocalCost2.checked = false;
        chk_AutoupdateSalesPrice.checked = true;
        chk_AutoupdateSalesPrice2.checked = false;
        Txt_SalePriceAddPerc.value = "";
        Txt_SalePriceMinAddPerc.value = "";
    }
    function ThirdDivvalidation() {
        //if ((txt_EMAIL_Sender.value.trim() == "" || txt_EMAIL_SenderPassword.value.trim() == "" || txt_EMAIL_SenderSMTP.value.trim() == "" || txt_EMAIL_SendorPort.value.trim() == "" || chk_EMAIL_SSL.checked == false || chk_EMAIL_Authentication.checked == false || txt_EMAIL_SenderName.value.trim() == "" || txt_EmailMaxDaily.value.trim() == "") && chk_sendEmail.checked == true) {
        //    DisplayMassage("يجب ادخال بيانات الايميل  ", "Please, Enter The Email Data!", MessageType.Worning);
        //    Errorinput(txt_EMAIL_Sender);
        //    Errorinput(txt_EMAIL_SenderPassword);
        //    Errorinput(txt_EMAIL_SenderSMTP);
        //    Errorinput(txt_EMAIL_SendorPort);
        //    Errorinput(txt_EMAIL_SenderName);
        //    Errorinput(txt_EmailMaxDaily);
        //    return false;
        //}
        //if ((txt_EMAIL_Sender.value.trim() == "" || txt_EMAIL_SenderPassword.value.trim() == "" || txt_EMAIL_SenderSMTP.value.trim() == "" || txt_EMAIL_SendorPort.value.trim() == "" || chk_EMAIL_SSL.checked == false || chk_EMAIL_Authentication.checked == false || txt_EMAIL_SenderName.value.trim() == "" || txt_EmailMaxDaily.value.trim() == "") && chk_sendshopEmail.checked == true) {
        //    DisplayMassage("يجب ادخال بيانات الايميل  ", "Please, Enter The Email Data!", MessageType.Worning);
        //    Errorinput(txt_EMAIL_Sender);
        //    Errorinput(txt_EMAIL_SenderPassword);
        //    Errorinput(txt_EMAIL_SenderSMTP);
        //    Errorinput(txt_EMAIL_SendorPort);
        //    Errorinput(txt_EMAIL_SenderName);
        //    Errorinput(txt_EmailMaxDaily);
        //    return false;
        //}
        if ((txt_SMS_Provider.value.trim() == "" || txt_SMS_UserName.value.trim() == "" || txt_SMS_Password.value.trim() == "" || txt_SMS_SenderName.value.trim() == "") && chk_SendSMS.checked == true) {
            DisplayMassage("يجب ادخال بيانات رسائل الموبيل  ", "Please, Enter The Message Phone !", MessageType.Worning);
            Errorinput(txt_SMS_Provider);
            Errorinput(txt_SMS_UserName);
            Errorinput(txt_SMS_Password);
            Errorinput(txt_SMS_SenderName);
            return false;
        }
        if ((txt_SMS_Provider.value.trim() == "" || txt_SMS_UserName.value.trim() == "" || txt_SMS_Password.value.trim() == "" || txt_SMS_SenderName.value.trim() == "") && chk_SendPublicSMS.checked == true) {
            DisplayMassage("يجب ادخال بيانات رسائل الموبيل  ", "Please, Enter The Message Phone !", MessageType.Worning);
            Errorinput(txt_SMS_Provider);
            Errorinput(txt_SMS_UserName);
            Errorinput(txt_SMS_Password);
            Errorinput(txt_SMS_SenderName);
            return false;
        }
        var Per = Number(txt_NotePeriodinSec.value);
        if (Per < 10) {
            DisplayMassage("لا يجب ان يقل الثواني لتحديث الاشعارات عن 10  ", "Please, Enter The telephone Number!", MessageType.Worning);
            Errorinput(txt_NotePeriodinSec);
            return false;
        }
        var Board = Number(txt_DashBoardPeriodinSec.value);
        if (Board < 10) {
            DisplayMassage("لا يجب ان يقل الثواني لتحديث لوحة الإدارة عن 10  ", "Please, Enter The group Tax!", MessageType.Worning);
            Errorinput(txt_DashBoardPeriodinSec);
            return false;
        }
        var Sys = Number(txt_SysTimeOut.value);
        if (Sys < 10) {
            DisplayMassage("لا يجب ان يقل طول فترة الجلسة (دقائق) عن 10  ", "Please, Enter The Tax!", MessageType.Worning);
            Errorinput(txt_SysTimeOut);
            return false;
        }
        if (ddl_DefSlsVatType.value == "null" || ddl_DefPurVatType.value == "null") {
            DisplayMassage("يجب ادخال الرقم الضريبي  ", "Please, Enter The Tax!", MessageType.Worning);
            Errorinput(txt_GroupVatNo);
            return false;
        }
        return true;
    }
    function chk_IsLocalSalePrice_onchange() {
        Txt_SalePriceAddPerc.disabled = true;
        Txt_SalePriceMinAddPerc.disabled = true;
        chk_IsLocalCost.checked = true;
    }
    function chk_IsLocalSalePrice2_onchange() {
        chk_IsLocalCost2.checked = true;
        if (chk_AutoupdateSalesPrice.checked == true) {
            Txt_SalePriceAddPerc.disabled = false;
            Txt_SalePriceMinAddPerc.disabled = false;
        }
        else {
            Txt_SalePriceAddPerc.disabled = true;
            Txt_SalePriceMinAddPerc.disabled = true;
        }
    }
    function chk_IsLocalCost_onchange() {
        Txt_SalePriceAddPerc.disabled = true;
        Txt_SalePriceMinAddPerc.disabled = true;
        chk_IsLocalSalePrice.checked = true;
    }
    function chk_IsLocalCost2_onchange() {
        chk_IsLocalSalePrice2.checked = true;
        if (chk_AutoupdateSalesPrice.checked == true) {
            Txt_SalePriceAddPerc.disabled = false;
            Txt_SalePriceMinAddPerc.disabled = false;
        }
        else {
            Txt_SalePriceAddPerc.disabled = true;
            Txt_SalePriceMinAddPerc.disabled = true;
        }
    }
    function chk_AutoupdateSalesPrice_onchange() {
        if (chk_IsLocalSalePrice2.checked == true && chk_IsLocalCost2.checked == true) {
            Txt_SalePriceAddPerc.disabled = false;
            Txt_SalePriceMinAddPerc.disabled = false;
        }
        else {
            Txt_SalePriceAddPerc.disabled = true;
            Txt_SalePriceMinAddPerc.disabled = true;
        }
    }
    function chk_AutoupdateSalesPrice2_onchange() {
        Txt_SalePriceAddPerc.disabled = true;
        Txt_SalePriceMinAddPerc.disabled = true;
    }
})(AdminComp || (AdminComp = {}));
//# sourceMappingURL=AdminComp.js.map