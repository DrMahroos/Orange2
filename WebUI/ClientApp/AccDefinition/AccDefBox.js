$(document).ready(function () {
    AccDefBox.InitalizeComponent();
});
var AccDefBox;
(function (AccDefBox) {
    var NumAccType = 1;
    var NetworkAccType = 3;
    var AccountType = 1;
    var MSG_ID;
    var Details = new Array();
    var Details_NumAcount = new Array();
    var Details_NetworkAcount = new Array();
    //var Details: Array<G_USERS> = new Array<G_USERS>();
    var btnNew_sub_Add_service;
    var btnsave;
    var btnAddDetails;
    var btnedite;
    var sys = new SystemTools();
    var SysSession = GetSystemSession(Modules.AccDefBox);
    var Model = new A_RecPay_D_CashBox();
    var CountGrid = 0;
    var compcode; //SharedSession.CurrentEnvironment.CompCode;
    var BranchCode; //SharedSession.CurrentEnvironment.BranchCode;
    var btnback;
    var lang = (SysSession.CurrentEnvironment.ScreenLanguage);
    function InitalizeComponent() {
        if (SysSession.CurrentEnvironment.ScreenLanguage == "ar") {
            document.getElementById('Screen_name').innerHTML = "تعريف الصندوق";
        }
        else {
            document.getElementById('Screen_name').innerHTML = "Fund definition";
        }
        compcode = Number(SysSession.CurrentEnvironment.CompCode);
        BranchCode = Number(SysSession.CurrentEnvironment.BranchCode);
        InitalizeControls();
        InitalizeEvents();
        Display_Acount_Code();
        Display_Network_account_Code();
        Display();
    }
    AccDefBox.InitalizeComponent = InitalizeComponent;
    function InitalizeControls() {
        ////debugger;
        btnAddDetails = document.getElementById("btnAddDetails");
        btnedite = document.getElementById("btnedite");
        btnsave = document.getElementById("btnsave");
        btnback = document.getElementById("btnback");
        // Buton privialges for single record page
    }
    function InitalizeEvents() {
        ////debugger;
        btnAddDetails.onclick = AddNewRow; //
        btnsave.onclick = btnsave_onClick;
        btnback.onclick = btnback_onclick;
        btnedite.onclick = btnedite_onclick;
    }
    function AddNewRow() {
        if (!SysSession.CurrentPrivileges.AddNew)
            return;
        var CanAdd = true;
        if (CountGrid > 0) {
            for (var i = 0; i < CountGrid; i++) {
                debugger;
                CanAdd = Validation_Grid(i);
                if (CanAdd == false) {
                    break;
                }
            }
        }
        if (CanAdd) {
            BuildControls(CountGrid);
            $("#txt_StatusFlag" + CountGrid).val("i"); //In Insert mode
            //$("#txtCode" + CountGrid).removeAttr("disabled");
            $("#txtDescA" + CountGrid).removeAttr("disabled");
            $("#txtDescL" + CountGrid).removeAttr("disabled");
            //$("#txtUSERS" + CountGrid).removeAttr("disabled");
            $("#txtAcount" + CountGrid).removeAttr("disabled");
            $("#txtAcount_Code" + CountGrid).removeAttr("disabled");
            $("#checkbox" + CountGrid).removeAttr("disabled");
            $("#IsRecPayAccount" + CountGrid).removeAttr("disabled");
            $("#txtopenbalance" + CountGrid).removeAttr("disabled");
            $("#txtopenDate" + CountGrid).removeAttr("disabled");
            // can delete new inserted record  without need for delete privilage
            $("#btn_minus" + CountGrid).removeClass("display_none");
            $("#btn_minus" + CountGrid).removeAttr("disabled");
            $("#txtopenDate" + CountGrid).val(GetDate());
            //$(".minus_btn").addClass("display_none");
            $("#btnedite").removeClass("display_none");
            //$("#txtCode" + CountGrid).attr("disabled", "disabled");
            CountGrid++;
        }
        $("#btnedite").addClass("display_none");
    }
    function BuildControls(cnt) {
        var html;
        ////debugger;
        html = '<div id="No_Row' + cnt + '" class="col-lg-12" ><div class="col-lg-12"><span id="btn_minus' + cnt + '" class="glyphicon glyphicon-remove-sign fontitm3AccDefBox  minus_btn"></span><div class="col-lg-1 style_pading"><input id="txtDescA' + cnt + '" type= "text" class="form-control right3" disabled="disabled"/></div><div class="col-lg-1 style_pading"><input id="IsRecPayAccount' + cnt + '" type="checkbox" class="form-control right2 " disabled="disabled" ></div><div class="col-lg-3 style_pading"><select id="txtAcount' + cnt + '" class="form-control"  disabled="disabled"><option value="Null">' + (lang == "ar" ? "رقم الحساب" : "Account number") + '</option></select ></div><div class="col-lg-2 style_pading"><select id="txtAcount_Code' + cnt + '" class="form-control"  disabled="disabled"><option value="Null">' + (lang == "ar" ? "رقم الحساب الشبكة" : "Network account number") + '</option></select ></div><div class="col-lg-1 style_pading"><input id="checkbox' + cnt + '" type="checkbox" class="form-control right2 " disabled="disabled"></div><div class="col-lg-2 style_pading"><input id="txtopenbalance' + cnt + '" type= "number" class="form-control right3" disabled="disabled"/></div><div class="col-lg-2 style_pading"><input id="txtopenDate' + cnt + '" type= "date" class="form-control right3" disabled="disabled"/></div><div class="col-lg-1"><input id = "txt_StatusFlag' + cnt + '" name = " " type = "hidden" disabled class="form-control"/></div><div class="col-lg-1"><input id = "txt_ID' + cnt + '" name = " " type = "hidden" class="form-control"/></div></div></div>';
        $("#div_Data").append(html);
        for (var i = 0; i < Details_NumAcount.length; i++) {
            //debugger;
            $('#txtAcount' + cnt).append('<option value="' + Details_NumAcount[i].ACC_CODE + '">' + (lang == "ar" ? Details_NumAcount[i].ACC_DESCA : Details_NumAcount[i].ACC_DESCL) + '</option>');
        }
        for (var i = 0; i < Details_NetworkAcount.length; i++) {
            //debugger;
            $('#txtAcount_Code' + cnt).append('<option value="' + Details_NetworkAcount[i].ACC_CODE + '">' + (lang == "ar" ? Details_NetworkAcount[i].ACC_DESCA : Details_NetworkAcount[i].ACC_DESCL) + '</option>');
        }
        $("#btn_minus" + cnt).on('click', function () {
            DeleteRow(cnt);
        });
        $("#txtCode" + cnt).on('change', function () {
            //Validate_code(cnt);
        });
        $("#txtDescA" + cnt).on('change', function () {
            if ($("#txt_StatusFlag" + cnt).val() != "i")
                $("#txt_StatusFlag" + cnt).val("u");
        });
        $("#txtDescL" + cnt).on('change', function () {
            if ($("#txt_StatusFlag" + cnt).val() != "i")
                $("#txt_StatusFlag" + cnt).val("u");
        });
        $("#txtopenbalance" + cnt).on('change', function () {
            if ($("#txt_StatusFlag" + cnt).val() != "i")
                $("#txt_StatusFlag" + cnt).val("u");
        });
        $("#txtopenDate" + cnt).on('change', function () {
            if ($("#txt_StatusFlag" + cnt).val() != "i")
                $("#txt_StatusFlag" + cnt).val("u");
        });
        $("#txtAcount" + cnt).on('change', function () {
            if ($("#txt_StatusFlag" + cnt).val() != "i")
                $("#txt_StatusFlag" + cnt).val("u");
        });
        $("#txtAcount_Code" + cnt).on('change', function () {
            if ($("#txt_StatusFlag" + cnt).val() != "i")
                $("#txt_StatusFlag" + cnt).val("u");
        });
        $("#checkbox" + cnt).on('change', function () {
            if ($("#txt_StatusFlag" + cnt).val() != "i")
                $("#txt_StatusFlag" + cnt).val("u");
        });
        $("#IsRecPayAccount" + cnt).on('change', function () {
            if ($("#txt_StatusFlag" + cnt).val() != "i")
                $("#txt_StatusFlag" + cnt).val("u");
        });
        if (SysSession.CurrentPrivileges.Remove) {
            //$("#btn_minus" + cnt).removeClass("display_none");
            //$("#btn_minus" + cnt).removeAttr("disabled");
            $("#btn_minus" + cnt).addClass("display_none");
            $("#btn_minus" + cnt).attr("disabled", "disabled");
        }
        else {
            $("#btn_minus" + cnt).addClass("display_none");
            $("#btn_minus" + cnt).attr("disabled", "disabled");
        }
        return;
    }
    function Display_Acount_Code() {
        //var StkDefCategory: Array<G_USERS> = new Array<G_USERS>();
        //debugger;
        Ajax.Callsync({
            type: "Get",
            url: sys.apiUrl("GLDefAccount", "GetByType"),
            data: {
                CompCode: compcode, AccType: NumAccType, UserCode: SysSession.CurrentEnvironment.UserCode, Token: "HGFD-" + SysSession.CurrentEnvironment.Token
            },
            success: function (d) {
                var result = d;
                if (result.IsSuccess) {
                    //debugger
                    Details_NumAcount = result.Response;
                    //DisplayStkG_USERS();
                }
            }
        });
    }
    function Display_Network_account_Code() {
        //var StkDefCategory: Array<G_USERS> = new Array<G_USERS>();
        //debugger;
        Ajax.Callsync({
            type: "Get",
            url: sys.apiUrl("GLDefAccount", "GetByType"),
            data: {
                CompCode: compcode, AccType: NetworkAccType, UserCode: SysSession.CurrentEnvironment.UserCode, Token: "HGFD-" + SysSession.CurrentEnvironment.Token
            },
            success: function (d) {
                var result = d;
                if (result.IsSuccess) {
                    //debugger
                    Details_NetworkAcount = result.Response;
                    //DisplayStkG_USERS();
                }
            }
        });
    }
    function btnsave_onClick() {
        loading('btnsave');
        setTimeout(function () {
            finishSave('btnsave');
            var CanAdd = true;
            if (CountGrid == 0) {
                WorningMessage('يجب الاضافة للحفظ', 'Must Add for saving', 'خطاء', 'Erorr');
                Errorinput(btnAddDetails);
                CanAdd = false;
                return;
            }
            if (CountGrid > 0) {
                for (var i = 0; i < CountGrid; i++) {
                    debugger;
                    CanAdd = Validation_Grid(i);
                    if (CanAdd == false) {
                        break;
                    }
                }
            }
            if (CanAdd) {
                Update();
            }
        }, 100);
    }
    function btnedite_onclick() {
        if (!SysSession.CurrentPrivileges.EDIT)
            return;
        $('#btnsave').removeClass("display_none");
        $('#btnback').removeClass("display_none");
        $("#div_ContentData :input").removeAttr("disabled");
        $("#btnedite").addClass("display_none");
        $(".disable").attr("disabled", "disabled");
        if (SysSession.CurrentPrivileges.Remove == true) {
            $(".minus_btn").removeClass("display_none");
        }
        else {
            $(".minus_btn").addClass("display_none");
        }
        debugger;
        if (SysSession.CurrentPrivileges.AddNew == true) {
            $(".btnAddDetails").removeAttr("disabled");
            $('#btnAddDetails').removeClass("display_none");
        }
        else {
            $(".btnAddDetails").attr("disabled", "disabled");
            $('#btnAddDetails').addClass("display_none");
        }
    }
    function Display() {
        Ajax.Callsync({
            type: "Get",
            url: sys.apiUrl("AccDefBox", "GetAll"),
            data: {
                compCode: compcode, BranchCode: BranchCode, UserCode: SysSession.CurrentEnvironment.UserCode, Token: "HGFD-" + SysSession.CurrentEnvironment.Token
            },
            success: function (d) {
                //debugger;
                var result = d;
                if (result.IsSuccess) {
                    Details = result.Response;
                    DisplayAccDefBox();
                }
            }
        });
    }
    function DisplayAccDefBox() {
        $('#div_Data').html("");
        CountGrid = 0;
        for (var i = 0; i < Details.length; i++) {
            BuildControls(CountGrid);
            CountGrid++;
            $("#txt_ID" + i).val(Details[i].CashBoxID);
            $("#txtDescA" + i).val(Details[i].CashBox_DescA);
            $("#txtDescL" + i).val(Details[i].CashBox_DescE);
            $("#txtopenbalance" + i).val(Details[i].OpenBalance);
            $("#txtopenDate" + i).val(DateFormat(Details[i].OpenBalanceDate));
            if (Details[i].IsActive) {
                $("#checkbox" + i).attr('checked', 'true');
            }
            else
                $("#checkbox" + i).removeAttr('checked');
            if (Details[i].IsRecPayAccount) {
                $("#IsRecPayAccount" + i).attr('checked', 'true');
            }
            else
                $("#IsRecPayAccount" + i).removeAttr('checked');
            $("#txtAcount" + i).val(Details[i].AccountCode == "" ? "Null" : Details[i].AccountCode);
            $("#txtAcount_Code" + i).val(Details[i].CardAccountCode == "" ? "Null" : Details[i].CardAccountCode);
            $("#txt_StatusFlag" + i).val("");
        }
    }
    function DeleteRow(RecNo) {
        if (!SysSession.CurrentPrivileges.Remove)
            return;
        WorningMessage("هل تريد الحذف؟", "Do you want to delete?", "تحذير", "worning", function () {
            $("#txt_StatusFlag" + RecNo).val() == 'i' ? $("#txt_StatusFlag" + RecNo).val('m') : $("#txt_StatusFlag" + RecNo).val('d');
            $("#No_Row" + RecNo).attr("hidden", "true");
            //$("#txtCode" + RecNo).val("000");
        });
    }
    function btnback_onclick() {
        $('#btnsave').addClass("display_none");
        $('#btnback').addClass("display_none");
        $("#div_ContentData :input").attr("disabled", "true");
        $(".minus_btn").addClass("display_none");
        $("#btnedite").removeClass("display_none");
        $("#btnedite").removeAttr("disabled");
        $(".btnAddDetails").attr("disabled", "disabled");
        $("#btnAddDetails").addClass("display_none");
        DisplayAccDefBox();
    }
    function Validation_Grid(rowcount) {
        if ($("#txt_StatusFlag" + rowcount).val() == "d" || $("#txt_StatusFlag" + rowcount).val() == "m") {
            return true;
        }
        else {
            if ($("#txtDescA" + rowcount).val() == "") {
                $("#txtDescA" + rowcount).val($("#txtDescL" + rowcount).val());
            }
            if ($("#txtDescL" + rowcount).val() == "") {
                $("#txtDescL" + rowcount).val($("#txtDescA" + rowcount).val());
            }
            if ((lang == "ar" ? $("#txtDescA" + rowcount).val() : $("#txtDescL" + rowcount).val()) == '') {
                WorningMessage('ادخل الوصف ', 'Enter The Description', 'خطاء', 'Erorr');
                Errorinput((lang == "ar" ? $("#txtDescA" + rowcount) : $("#txtDescL" + rowcount)));
                return false;
            }
            if ($("#txtAcount" + rowcount).val() == 'Null') {
                WorningMessage('اختار رقم الحساب', 'Enter The code', 'خطاء', 'Erorr');
                Errorinput($("#txtAcount" + rowcount));
                return false;
            }
            if ($("#txtAcount_Code" + rowcount).val() == 'Null') {
                WorningMessage('اختار رقم حساب الشبكة ', 'Enter The Network Account Number', 'خطاء', 'Erorr');
                Errorinput($("#txtAcount_Code" + rowcount));
                return false;
            }
        }
        return true;
    }
    function Assign() {
        debugger;
        var StatusFlag;
        for (var i = 0; i < CountGrid; i++) {
            Model = new A_RecPay_D_CashBox();
            StatusFlag = $("#txt_StatusFlag" + i).val();
            if (StatusFlag == "i") {
                Model.StatusFlag = StatusFlag.toString();
                Model.CashBoxID = 0;
                Model.CompCode = Number(SysSession.CurrentEnvironment.CompCode);
                Model.BranchCode = Number(SysSession.CurrentEnvironment.BranchCode);
                //Model.CreatedBy = SysSession.CurrentEnvironment.UserCode;
                //Model.UpdatedBy = "";
                //Model.AccountCode = $("#txtCode" + i).val();
                Model.CashBox_DescA = $("#txtDescA" + i).val();
                Model.CashBox_DescE = $("#txtDescL" + i).val();
                Model.OpenBalance = $("#txtopenbalance" + i).val();
                Model.OpenBalanceDate = $("#txtopenDate" + i).val();
                //Model.User_Code = $("#txtUSERS" + i).val();
                if ($("#txtAcount" + i).val() == "Null") {
                    Model.AccountCode = "0";
                }
                else {
                    Model.AccountCode = $("#txtAcount" + i).val();
                }
                if ($("#txtAcount_Code" + i).val() == "Null") {
                    Model.CardAccountCode = "0";
                }
                else {
                    Model.CardAccountCode = $("#txtAcount_Code" + i).val();
                }
                if ($("#checkbox" + i).is(':checked')) {
                    Model.IsActive = true;
                }
                else {
                    Model.IsActive = false;
                }
                if ($("#IsRecPayAccount" + i).is(':checked')) {
                    Model.IsRecPayAccount = true;
                }
                else {
                    Model.IsRecPayAccount = false;
                }
                Details.push(Model);
                //Model.CompCode = Number(compcode);
            }
            if (StatusFlag == "u") {
                Model.StatusFlag = StatusFlag.toString();
                Model.CashBoxID = Number($("#txt_ID" + i).val());
                Model.CompCode = Number(SysSession.CurrentEnvironment.CompCode);
                Model.BranchCode = Number(SysSession.CurrentEnvironment.BranchCode);
                //Model.CreatedBy = SysSession.CurrentEnvironment.UserCode;
                //Model.UpdatedBy = "";
                //Model.AccountCode = $("#txtCode" + i).val();
                Model.CashBox_DescA = $("#txtDescA" + i).val();
                Model.CashBox_DescE = $("#txtDescL" + i).val();
                Model.OpenBalance = $("#txtopenbalance" + i).val();
                Model.OpenBalanceDate = $("#txtopenDate" + i).val();
                //Model.User_Code = $("#txtUSERS" + i).val();
                if ($("#txtAcount" + i).val() == "Null") {
                    Model.AccountCode = "0";
                }
                else {
                    Model.AccountCode = $("#txtAcount" + i).val();
                }
                if ($("#txtAcount_Code" + i).val() == "Null") {
                    Model.CardAccountCode = "0";
                }
                else {
                    Model.CardAccountCode = $("#txtAcount_Code" + i).val();
                }
                if ($("#checkbox" + i).is(':checked')) {
                    Model.IsActive = true;
                }
                else {
                    Model.IsActive = false;
                }
                if ($("#IsRecPayAccount" + i).is(':checked')) {
                    Model.IsRecPayAccount = true;
                }
                else {
                    Model.IsRecPayAccount = false;
                }
                Details.push(Model);
            }
            if (StatusFlag == "d") {
                if ($("#txt_ID" + i).val() != "") {
                    var UpdatedDetail = Details.filter(function (x) { return x.CashBoxID == $("#txt_ID" + i).val(); });
                    UpdatedDetail[0].StatusFlag = StatusFlag.toString();
                }
            }
        }
    }
    function Update() {
        Assign();
        Details[0].Token = "HGFD-" + SysSession.CurrentEnvironment.Token;
        Details[0].UserCode = SysSession.CurrentEnvironment.UserCode;
        //debugger;
        Ajax.Callsync({
            type: "POST",
            url: sys.apiUrl("AccDefBox", "UpdateLst"),
            data: JSON.stringify(Details),
            success: function (d) {
                //debugger
                var result = d;
                if (result.IsSuccess == true) {
                    WorningMessage("تم الحفظ!", "Saved!", "تحذير", "worning");
                    success();
                }
                else {
                    //debugger;
                    MessageBox.Show(result.ErrorMessage, "خطأ");
                }
            }
        });
    }
    function success() {
        $('#btnsave').addClass("display_none");
        $('#btnback').addClass("display_none");
        $("#div_ContentData :input").attr("disabled", "true");
        $(".minus_btn").addClass("display_none");
        $("#btnedite").removeClass("display_none");
        $("#btnedite").removeAttr("disabled");
        $(".btnAddDetails").attr("disabled", "disabled");
        $("#btnAddDetails").addClass("display_none");
        Display();
    }
})(AccDefBox || (AccDefBox = {}));
//# sourceMappingURL=AccDefBox.js.map