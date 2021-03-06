$(document).ready(function () {
    TranPosting.InitalizeComponent();
});
var TranPosting;
(function (TranPosting) {
    //System
    var sys = new SystemTools();
    var SysSession = GetSystemSession(Modules.TranPosting);
    var compcode;
    var branch;
    var startDate;
    var EndDate;
    var Selecteditem = new GQ_GetUsers;
    //GridView
    var SubSystemGrid = new JsGrid();
    var TransactionsGrid = new JsGrid();
    var VoucherDetailGrid = new JsGrid();
    //DropdownLists
    var ddlBranch;
    //textboxs
    var txtFromDate;
    var txtToDate;
    var txtFromNumber;
    var txtToNumber;
    var txtDebit;
    var txtCedit;
    var txtDesc;
    var txtDiff;
    //labels
    var lblVoucherNum;
    //buttons
    var btnLoad;
    var btnShowVouchers;
    var btnCreateVoucher;
    var btnSelectAll;
    var btnReverseSelection;
    var btnUnSelectAll;
    //Arrays
    var BranchDetails = new Array();
    var SubSystemDetails = new Array();
    var SubSystemDetailsRefreshed = new Array();
    var LnkTransDetails = new Array();
    var selectedLnkTransDetails = new Array();
    var GetLnkVoucherDetail = new Array();
    //var SelectedModuleCodes: Array<G_LnkTrans> = new Array<G_LnkTrans>();
    // global
    var debitTot = 0;
    var cerditTot = 0;
    var diffTot = 0;
    var lang;
    var lang = (SysSession.CurrentEnvironment.ScreenLanguage);
    function InitalizeComponent() {
        $('#dir_11').addClass('hidden_Control');
        InitalizeControls();
        //System
        (SysSession.CurrentEnvironment.ScreenLanguage == "ar") ? document.getElementById('Screen_name').innerHTML = "ترحيل الحسابات" : document.getElementById('Screen_name').innerHTML = "Receipt Voucher";
        compcode = Number(SysSession.CurrentEnvironment.CompCode);
        branch = Number(SysSession.CurrentEnvironment.BranchCode);
        lang = SysSession.CurrentEnvironment.ScreenLanguage;
        //Set Secial Values While Load
        txtFromDate.value = DateStartMonth();
        txtToDate.value = ConvertToDateDash(GetDate()) <= ConvertToDateDash(SysSession.CurrentEnvironment.EndDate) ? GetDate() : SysSession.CurrentEnvironment.EndDate;
        //Fill ddl
        fillddlBranch();
        InitializeEvents();
        // initialize Grids
        InitializeSubSystemGrid();
        // InitializePagesGrid();
        InitializeTransactionsGrid();
        InitializeVoucherDetailGrid();
        $("#btndiv_3").addClass("Actiev");
        $("#btndiv_1").removeClass("Actiev");
        $("#btndiv_2").removeClass("Actiev");
        $("#div_3").removeClass("display_none");
        $("#div_1").addClass("display_none");
        $("#div_2").addClass("display_none");
    }
    TranPosting.InitalizeComponent = InitalizeComponent;
    function InitalizeControls() {
        //DropdownLists
        ddlBranch = document.getElementById("ddlBranch");
        //textboxs
        txtFromDate = document.getElementById("txtFromDate");
        txtToDate = document.getElementById("txtToDate");
        txtFromNumber = document.getElementById("txtFromNumber");
        txtToNumber = document.getElementById("txtToNumber");
        txtDebit = document.getElementById("txtDebit");
        txtCedit = document.getElementById("txtCedit");
        txtDesc = document.getElementById("txtDesc");
        txtDiff = document.getElementById("txtDiff");
        //labels
        lblVoucherNum = document.getElementById("lblVoucherNum");
        //buttons
        btnLoad = document.getElementById("btnLoad");
        btnShowVouchers = document.getElementById("btnShowVouchers");
        btnCreateVoucher = document.getElementById("btnCreateVoucher");
        btnSelectAll = document.getElementById("btnSelectAll");
        btnReverseSelection = document.getElementById("btnReverseSelection");
        btnUnSelectAll = document.getElementById("btnUnSelectAll");
    }
    function InitializeEvents() {
        btnLoad.onclick = btnLoad_onclick;
        btnShowVouchers.onclick = btnShowVouchers_onclick;
        btnCreateVoucher.onclick = btnCreateVoucher_onclick;
        btnSelectAll.onclick = btnSelectAll_onclick;
        btnReverseSelection.onclick = btnReverseSelection_onclick;
        btnUnSelectAll.onclick = btnUnSelectAll_onclick;
    }
    //------------------------------------------------------ ButtonsRegion ----------------------------------
    function btnLoad_onclick() {
        if (!CheckDate(DateFormat(txtFromDate.value).toString(), DateFormat(SysSession.CurrentEnvironment.StartDate).toString(), DateFormat(SysSession.CurrentEnvironment.EndDate).toString())) {
            WorningMessage('  التاريخ ليس متطابق مع تاريخ السنه (' + DateFormat(SysSession.CurrentEnvironment.StartDate).toString() + ')', '  The date is not identical with the date of the year (' + DateFormat(SysSession.CurrentEnvironment.StartDate).toString() + ')', "تحذير", "worning");
            Errorinput(txtFromDate);
            return;
        }
        if (!CheckDate(DateFormat(txtToDate.value).toString(), DateFormat(SysSession.CurrentEnvironment.StartDate).toString(), DateFormat(SysSession.CurrentEnvironment.EndDate).toString())) {
            WorningMessage('  التاريخ ليس متطابق مع تاريخ السنه (' + DateFormat(SysSession.CurrentEnvironment.StartDate).toString() + ')', '  The date is not identical with the date of the year (' + DateFormat(SysSession.CurrentEnvironment.StartDate).toString() + ')', "تحذير", "worning");
            Errorinput(txtToDate);
            return;
        }
        var SelectFalg = false;
        if (ddlBranch.value == "null") {
            DisplayMassage("يجب اختيار الفرع", "you must Select Branch", MessageType.Error);
            Errorinput(ddlBranch);
            return;
        }
        else {
            var branchCode = Number(ddlBranch.value);
            var trType = "";
            for (var i = 0; i < SubSystemDetails.length; i++) {
                if (SubSystemDetails[i].Selected == true) {
                    if (trType != "")
                        trType += " , ";
                    trType += "" + SubSystemDetails[i].TR_CODE + "";
                    SelectFalg = true;
                }
            }
            if (SelectFalg == false) {
                DisplayMassage("يجب اختيار الحركات", "you must Select Transactions", MessageType.Error);
                return;
            }
            var StartDate = DateFormatRep(txtFromDate.value);
            var EndDate = DateFormatRep(txtToDate.value);
            var FromNum = 0;
            var ToNum = 0;
            if (txtFromNumber.value != "") {
                FromNum = Number(txtFromNumber.value);
            }
            if (txtToNumber.value != "") {
                ToNum = Number(txtToNumber.value);
            }
            Ajax.Callsync({
                type: "Get",
                url: sys.apiUrl("TranPosting", "LoadTransactions"),
                data: {
                    Comp: compcode, branchCode: branchCode, TrType: trType, StartDate: StartDate, EndDate: EndDate, FromNum: FromNum, ToNum: ToNum, UserCode: SysSession.CurrentEnvironment.UserCode, Token: "HGFD-" + SysSession.CurrentEnvironment.Token
                },
                success: function (d) {
                    var result = d;
                    if (result.IsSuccess) {
                        SubSystemDetails;
                        LnkTransDetails = result.Response;
                        LnkTransDetails = LnkTransDetails.filter(function (x) { return x.TR_NO != null; }).sort(function (a, b) { return a.TR_NO - b.TR_NO; });
                        //LnkTransDetails = LnkTransDetails.filter(x => x.TR_NO != null && x.TR_CODE != null).sort(function (a, b) { return a.TR_CODE.localeCompare(b.TR_CODE) || b.TR_NO - a.TR_NO; });
                        //LnkTransDetails.sort(function (a, b) {
                        //    return a.TR_NO - b.TR_NO && Number(a.TR_CODE) - Number(b.TR_CODE);
                        //});
                        for (var i = 0; i < LnkTransDetails.length; i++) {
                            (LnkTransDetails[i].TR_DATE != null) ? LnkTransDetails[i].TR_DATE = DateFormatRep(LnkTransDetails[i].TR_DATE) : "";
                            if (lang == "ar")
                                (LnkTransDetails[i].IsGenerated == true) ? LnkTransDetails[i].IsGeneratedDesc = "تم " : "";
                            else
                                (LnkTransDetails[i].IsGenerated == true) ? LnkTransDetails[i].IsGeneratedDesc = "Done " : "";
                        }
                        InitializeTransactionsGrid();
                        TransactionsGrid.DataSource = LnkTransDetails;
                        TransactionsGrid.Bind();
                        $("#btndiv_3").removeClass("Actiev");
                        $("#btndiv_1").addClass("Actiev");
                        $("#btndiv_2").removeClass("Actiev");
                        $("#div_3").addClass("display_none");
                        $("#div_1").removeClass("display_none");
                        $("#div_2").addClass("display_none");
                    }
                }
            });
        }
    }
    function btnShowVouchers_onclick() {
        if (!CheckDate(DateFormat(txtFromDate.value).toString(), DateFormat(SysSession.CurrentEnvironment.StartDate).toString(), DateFormat(SysSession.CurrentEnvironment.EndDate).toString())) {
            WorningMessage('  التاريخ ليس متطابق مع تاريخ السنه (' + DateFormat(SysSession.CurrentEnvironment.StartDate).toString() + ')', '  The date is not identical with the date of the year (' + DateFormat(SysSession.CurrentEnvironment.StartDate).toString() + ')', "تحذير", "worning");
            Errorinput(txtFromDate);
            return;
        }
        if (!CheckDate(DateFormat(txtToDate.value).toString(), DateFormat(SysSession.CurrentEnvironment.StartDate).toString(), DateFormat(SysSession.CurrentEnvironment.EndDate).toString())) {
            WorningMessage('  التاريخ ليس متطابق مع تاريخ السنه (' + DateFormat(SysSession.CurrentEnvironment.StartDate).toString() + ')', '  The date is not identical with the date of the year (' + DateFormat(SysSession.CurrentEnvironment.StartDate).toString() + ')', "تحذير", "worning");
            Errorinput(txtToDate);
            return;
        }
        debitTot = 0;
        cerditTot = 0;
        diffTot = 0;
        debugger;
        LnkTransDetails = new Array();
        LnkTransDetails = TransactionsGrid.DataSource;
        selectedLnkTransDetails = LnkTransDetails.filter(function (x) { return x.IsSelected == true; });
        if (selectedLnkTransDetails.length != 0) {
            Ajax.Callsync({
                type: "POST",
                url: sys.apiUrl("TranPosting", "UpdateTransactions"),
                data: JSON.stringify(selectedLnkTransDetails),
                success: function (d) {
                    var result = d;
                    if (result.IsSuccess) {
                        debugger;
                        GetLnkVoucherDetail = new Array();
                        VoucherDetailGrid.DataSource = new Array();
                        GetLnkVoucherDetail = result.Response;
                        VoucherDetailGrid.DataSource = GetLnkVoucherDetail;
                        for (var i = 0; i < GetLnkVoucherDetail.length; i++) {
                            debitTot += GetLnkVoucherDetail[i].DEBIT;
                            cerditTot += GetLnkVoucherDetail[i].CREDIT;
                        }
                        diffTot = debitTot - cerditTot;
                        txtDebit.value = debitTot.RoundToSt(2).toLocaleString();
                        txtCedit.value = cerditTot.RoundToSt(2).toLocaleString();
                        txtDiff.value = diffTot.RoundToSt(2).toLocaleString();
                        var brID = Number(ddlBranch.value);
                        var txtBranch = BranchDetails.filter(function (s) { return s.BRA_CODE == brID; });
                        if (lang == "ar")
                            txtDesc.value = "ملخص حركه  " + txtBranch[0].BRA_DESC + " الفتره من تاريخ " + txtFromDate.value + " الي تاريخ " + txtToDate.value;
                        else
                            txtDesc.value = "breif of transaction" + txtBranch[0].BRA_DESC + " period from date " + txtFromDate.value + " to date " + txtToDate.value;
                        VoucherDetailGrid.Bind();
                        RefreshTransactions();
                        $("#btndiv_3").removeClass("Actiev");
                        $("#btndiv_1").removeClass("Actiev");
                        $("#btndiv_2").addClass("Actiev");
                        $("#div_3").addClass("display_none");
                        $("#div_1").addClass("display_none");
                        $("#div_2").removeClass("display_none");
                    }
                }
            });
        }
        else {
            DisplayMassage("لا يوجد قيود لعرضها ", "There are no restrictions to display", MessageType.Error);
            return;
        }
    }
    function btnSelectAll_onclick() {
        for (var i = 0; i < LnkTransDetails.length; i++) {
            LnkTransDetails[i].IsSelected = true;
            updateselect(LnkTransDetails[i].ROW_ID, 1);
        }
        TransactionsGrid.DataSource = LnkTransDetails;
        TransactionsGrid.Bind();
    }
    function btnReverseSelection_onclick() {
        for (var i = 0; i < LnkTransDetails.length; i++) {
            if (LnkTransDetails[i].IsSelected == true) {
                LnkTransDetails[i].IsSelected = false;
                updateselect(LnkTransDetails[i].ROW_ID, 0);
            }
            else if (LnkTransDetails[i].IsSelected == false) {
                LnkTransDetails[i].IsSelected = true;
                updateselect(LnkTransDetails[i].ROW_ID, 1);
            }
        }
        TransactionsGrid.DataSource = LnkTransDetails;
        TransactionsGrid.Bind();
    }
    function btnUnSelectAll_onclick() {
        for (var i = 0; i < LnkTransDetails.length; i++) {
            LnkTransDetails[i].IsSelected = false;
            updateselect(LnkTransDetails[i].ROW_ID, 0);
        }
        TransactionsGrid.DataSource = LnkTransDetails;
        TransactionsGrid.Bind();
    }
    function btnCreateVoucher_onclick() {
        if (txtDesc.value == " ") {
            DisplayMassage("يجب ادخال الوصف", "you must enter description", MessageType.Error);
            Errorinput(txtDesc);
            return;
        }
        var isGeneratedFlag = false;
        for (var i = 0; i < LnkTransDetails.length; i++) {
            if (LnkTransDetails[i].IsGenerated == true) {
                isGeneratedFlag = true;
            }
        }
        if (isGeneratedFlag == false) {
            DisplayMassage("لا يوجد حركات للترحيل", "there is no transactions for posting", MessageType.Error);
            return;
        }
        if (!CheckDate(DateFormat(txtFromDate.value).toString(), DateFormat(SysSession.CurrentEnvironment.StartDate).toString(), DateFormat(SysSession.CurrentEnvironment.EndDate).toString())) {
            WorningMessage('  التاريخ ليس متطابق مع تاريخ السنه (' + DateFormat(SysSession.CurrentEnvironment.StartDate).toString() + ')', '  The date is not identical with the date of the year (' + DateFormat(SysSession.CurrentEnvironment.StartDate).toString() + ')', "تحذير", "worning");
            Errorinput(txtFromDate);
            return;
        }
        if (!CheckDate(DateFormat(txtToDate.value).toString(), DateFormat(SysSession.CurrentEnvironment.StartDate).toString(), DateFormat(SysSession.CurrentEnvironment.EndDate).toString())) {
            WorningMessage('  التاريخ ليس متطابق مع تاريخ السنه (' + DateFormat(SysSession.CurrentEnvironment.StartDate).toString() + ')', '  The date is not identical with the date of the year (' + DateFormat(SysSession.CurrentEnvironment.StartDate).toString() + ')', "تحذير", "worning");
            Errorinput(txtToDate);
            return;
        }
        var Desc = txtDesc.value;
        Ajax.Callsync({
            type: "Get",
            url: sys.apiUrl("TranPosting", "GenerateVoucher"),
            data: {
                comp: compcode, branch: branch, Desc: Desc, UserCode: SysSession.CurrentEnvironment.UserCode, Token: "HGFD-" + SysSession.CurrentEnvironment.Token
            },
            success: function (d) {
                var result = d;
                if (result.IsSuccess) {
                    if (result.Response != -1) {
                        lblVoucherNum.innerText = result.Response;
                        DisplayMassage("تم اصدار  سند قيد رقم  " + result.Response, "jouranl voucher number " + result.Response + "has been issued", MessageType.Succeed);
                        setTimeout(function () {
                            Clear();
                            $("#btndiv_3").removeClass("Actiev");
                            $("#btndiv_1").addClass("Actiev");
                            $("#btndiv_2").removeClass("Actiev");
                            $("#div_3").addClass("display_none");
                            $("#div_1").removeClass("display_none");
                            $("#div_2").addClass("display_none");
                        }, 5000);
                        RefreshTransactions();
                    }
                    else
                        DisplayMassage("لم تتم عملية الترحيل راجع اعدادات الربط  ", "Transposting process not accomplished please review connection settings", MessageType.Error);
                }
            }
        });
    }
    //------------------------------------------------------ Initialize Grid  Region ----------------------------------
    function InitializeSubSystemGrid() {
        var res = GetResourceList("");
        SubSystemGrid.ElementName = "SubSystemGrid";
        SubSystemGrid.PrimaryKey = "MODULE_CODE";
        SubSystemGrid.Paging = true;
        SubSystemGrid.PageSize = 10;
        SubSystemGrid.Sorting = true;
        SubSystemGrid.InsertionMode = JsGridInsertionMode.Binding;
        SubSystemGrid.Editing = false;
        SubSystemGrid.Inserting = false;
        SubSystemGrid.SelectedIndex = 1;
        SubSystemGrid.OnItemEditing = function () { };
        SubSystemGrid.Columns = [
            {
                title: res.TransSelect, css: "ColumPadding", name: "checkbox", width: "6%",
                itemTemplate: function (s, item) {
                    var txt = CreateElement("checkbox", "form-control checkbox", " ", " ", "", " ");
                    txt.style.height = "25px";
                    txt.style.width = "70px";
                    txt.onclick = function (e) {
                        if (txt.checked == true) {
                            item.Selected = true;
                        }
                        else {
                            item.Selected = false;
                        }
                    };
                    if (item.Selected == true) {
                        txt.checked = true;
                    }
                    else {
                        txt.checked = false;
                    }
                    return txt;
                }
            },
            { title: " ", name: "MODULE_CODE", type: "text", visible: false },
            { title: " ", name: "Statusflag", type: "text", visible: false },
            { title: res.TransSubSystem, name: "SUB_SYSTEM_CODE", type: "text", width: "5%" },
            { title: res.TransDesc, name: (lang == "ar" ? "TR_DESCA" : "TR_DESCE"), type: "text", width: "10%" },
        ];
        BindSubSystemGrid();
    }
    function BindSubSystemGrid() {
        Ajax.Callsync({
            type: "Get",
            url: sys.apiUrl("TranPosting", "GetAllTransactions"),
            data: {
                CompCode: compcode, UserCode: SysSession.CurrentEnvironment.UserCode, Token: "HGFD-" + SysSession.CurrentEnvironment.Token
            },
            success: function (d) {
                var result = d;
                if (result.IsSuccess) {
                    SubSystemDetails = result.Response;
                    SubSystemGrid.DataSource = SubSystemDetails;
                    SubSystemGrid.Bind();
                }
            }
        });
    }
    function InitializeTransactionsGrid() {
        var res = GetResourceList("");
        TransactionsGrid.ElementName = "TransactionsGrid";
        TransactionsGrid.PrimaryKey = "ROW_ID";
        TransactionsGrid.Paging = true;
        TransactionsGrid.PageSize = 10;
        TransactionsGrid.Sorting = true;
        TransactionsGrid.InsertionMode = JsGridInsertionMode.Binding;
        TransactionsGrid.Editing = false;
        TransactionsGrid.Inserting = false;
        TransactionsGrid.SelectedIndex = 1;
        TransactionsGrid.OnItemEditing = function () { };
        TransactionsGrid.Columns = [
            { title: "ROW_ID", name: "ROW_ID", type: "text", width: "5%", visible: false },
            { title: res.TransTrType, name: "TR_CODE", type: "text", width: "17%" },
            { title: res.App_Number, name: "TR_NO", type: "text", width: "8%" },
            { title: res.App_date, name: "TR_DATE", type: "text", width: "10%" },
            { title: res.TransDesc, name: (lang == "ar" ? "TR_DESCA" : "TR_DESCE"), type: "text", width: "15%" },
            { title: res.value, name: "TR_AMOUNT", type: "text", width: "15%" },
            { title: res.User, name: "User_Code", type: "text", width: "15%" },
            {
                title: res.appSelect, css: "ColumPadding", name: "IsSelected", width: "6%",
                itemTemplate: function (s, item) {
                    var txt = CreateElement("checkbox", "form-control checkbox", " ", " ", "", " ");
                    txt.style.height = "25px";
                    txt.style.width = "70px";
                    txt.onclick = function (e) {
                        if (txt.checked == true) {
                            debugger;
                            item.IsSelected = true;
                            updateselect(item.ROW_ID, 1);
                        }
                        else {
                            updateselect(item.ROW_ID, 0);
                            item.IsSelected = false;
                        }
                    };
                    if (item.IsSelected == true) {
                        txt.checked = true;
                    }
                    else
                        txt.checked = false;
                    return txt;
                }
            },
            { title: res.Trans_Generate, name: "IsGeneratedDesc", type: "text", width: "10%" },
            { title: res.App_Notes, name: "GenRemarks", type: "text", width: "15%" },
        ];
    }
    function updateselect(Rowid, isselect) {
        debugger;
        var branchcode = Number(ddlBranch.value);
        Ajax.Callsync({
            type: "Get",
            url: sys.apiUrl("TranPosting", "Updateselect"),
            data: {
                Comp: compcode, branchCode: branchcode, ROW_ID: Rowid, Isselect: isselect, UserCode: SysSession.CurrentEnvironment.UserCode, Token: "HGFD-" + SysSession.CurrentEnvironment.Token
            },
            success: function (d) {
                var result = d;
            }
        });
    }
    function InitializeVoucherDetailGrid() {
        var res = GetResourceList("");
        VoucherDetailGrid.ElementName = "VoucherDetailGrid";
        VoucherDetailGrid.Paging = true;
        VoucherDetailGrid.PageSize = 10;
        VoucherDetailGrid.Sorting = true;
        VoucherDetailGrid.InsertionMode = JsGridInsertionMode.Binding;
        VoucherDetailGrid.Editing = false;
        VoucherDetailGrid.Inserting = false;
        VoucherDetailGrid.SelectedIndex = 1;
        VoucherDetailGrid.OnItemEditing = function () { };
        VoucherDetailGrid.Columns = [
            { title: res.App_serial, name: "Seq", type: "text", width: "5%" },
            { title: res.p_account_number, name: "ACC_CODE", type: "text", width: "14%" },
            { title: res.TransDesc, name: (lang == "ar" ? "ACC_DESCA" : "ACC_DESCL"), type: "text", width: "20%" },
            { title: res.App_Debtor, name: "DEBIT", type: "text", width: "15%" },
            { title: res.App_Creditor, name: "CREDIT", type: "text", width: "15%" },
            { title: res.menu_Costcenter, name: "CC_CODE", type: "text", width: "15%" },
            { title: res.TransCCDesc, name: (lang == "ar" ? "CC_DESCA" : "CC_DESCE"), type: "text", width: "15%" },
            { title: res.TransExplain, name: (lang == "ar" ? "LINE_DESCA" : "LINE_DESCE"), type: "text", width: "30%" },
            { title: res.Trns_TrNO, name: "Tr_No", type: "text", width: "15%" },
        ];
    }
    function RefreshTransactions() {
        Ajax.Callsync({
            type: "Get",
            url: sys.apiUrl("TranPosting", "GetTransactions"),
            data: { UserCode: SysSession.CurrentEnvironment.UserCode, Token: "HGFD-" + SysSession.CurrentEnvironment.Token },
            success: function (d) {
                var result = d;
                if (result.IsSuccess) {
                    LnkTransDetails = new Array();
                    LnkTransDetails = result.Response;
                    for (var i = 0; i < LnkTransDetails.length; i++) {
                        (LnkTransDetails[i].TR_DATE != null) ? LnkTransDetails[i].TR_DATE = DateFormatRep(LnkTransDetails[i].TR_DATE) : "";
                        (LnkTransDetails[i].IsGenerated == true) ? LnkTransDetails[i].IsGeneratedDesc = "تم " : "";
                    }
                    InitializeTransactionsGrid();
                    TransactionsGrid.DataSource = LnkTransDetails;
                    TransactionsGrid.Bind();
                }
            }
        });
    }
    //------------------------------------------------------ Fill DropDownList Region ----------------------------------
    function fillddlBranch() {
        Ajax.Callsync({
            type: "Get",
            url: sys.apiUrl("GBranch", "GetAll"),
            data: {
                CompCode: compcode, UserCode: SysSession.CurrentEnvironment.UserCode, Token: "HGFD-" + SysSession.CurrentEnvironment.Token
            },
            success: function (d) {
                var result = d;
                if (result.IsSuccess) {
                    BranchDetails = result.Response;
                    if (SysSession.CurrentEnvironment.ScreenLanguage == "en") {
                        DocumentActions.FillCombowithdefult(BranchDetails, ddlBranch, "BRA_CODE", "BRA_DESCL", "Select branch");
                    }
                    else {
                        DocumentActions.FillCombowithdefult(BranchDetails, ddlBranch, "BRA_CODE", "BRA_DESC", "اختر الفرع");
                    }
                }
            }
        });
    }
    //------------------------------------------------------ Date&& Clear Region ----------------------------------
    function GetDate() {
        var today = new Date();
        var dd = today.getDate().toString();
        var ReturnedDate;
        var mm = (today.getMonth() + 1).toString();
        var yyyy = today.getFullYear();
        if (Number(dd) < 10) {
            dd = ('0' + dd);
        }
        if (Number(mm) < 10) {
            mm = ('0' + mm);
        }
        ReturnedDate = yyyy + '-' + mm + '-' + dd;
        return ReturnedDate;
    }
    function Clear() {
        lblVoucherNum.innerText = "";
        txtDesc.value = "";
        txtCedit.value = "";
        txtDebit.value = "";
        txtDiff.value = "";
        txtFromNumber.value = "";
        txtToNumber.value = "";
        VoucherDetailGrid.DataSource = null;
        RefreshTransactions();
    }
})(TranPosting || (TranPosting = {}));
//# sourceMappingURL=TranPosting.js.map