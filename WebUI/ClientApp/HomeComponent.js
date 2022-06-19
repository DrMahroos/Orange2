$(document).ready(function () {
    //HomeComponent.Language();
    HomeComponent.InitalizeComponent();
});
var HomeComponent;
(function (HomeComponent) {
    //let res: any = GetResourceList("");
    var sys = new SystemTools();
    var ddbra;
    ddbra = document.getElementById("ddbra");
    var btnDashboard;
    var btn_loguotuser;
    var SysSession = GetSystemSession('Home');
    var systemEnv = SysSession.CurrentEnvironment;
    var G_BRANCHService = new Array();
    var selectedbar;
    var newtap = false;
    G_BRANCHService = GetSystemG_BRANCH();
    function OpenPage(moduleCode) {
        SysSession.CurrentEnvironment.ModuleCode = moduleCode;
        // //debugger;
        var compCode = SysSession.CurrentEnvironment.CompCode;
        var branchCode = SysSession.CurrentEnvironment.BranchCode;
        var UserCode = SysSession.CurrentEnvironment.UserCode;
        var SystemCode = SysSession.CurrentEnvironment.SystemCode;
        var SubSystemCode = SysSession.CurrentEnvironment.SubSystemCode;
        var Modulecode = SysSession.CurrentEnvironment.ModuleCode;
        var CurrentYear = SysSession.CurrentEnvironment.CurrentYear;
        Ajax.Callsync({
            type: "GET",
            url: sys.apiUrl("SystemTools", "GetUserPrivilage"),
            data: { year: Number(CurrentYear), compCode: compCode, branchCode: branchCode, UserCode: UserCode, SystemCode: SystemCode, Modulecode: Modulecode },
            success: function (d) {
                if (d == undefined) {
                    window.open(Url.Action("LoginIndex", "Login"), "_self");
                    return;
                }
                else {
                    var result = JSON.parse(d);
                    if (result == null) {
                        MessageBox.Show("Access denied", moduleCode);
                        return;
                    }
                    if (result.Access == true) {
                        SysSession.CurrentPrivileges = result;
                        //document.cookie = "Inv1_Privilage=" + JSON.stringify(result).toString() + ";expires=Fri, 31 Dec 2030 23:59:59 GMT;path=/";
                        window.open(Url.Action(moduleCode + "Index", "Home"), "_self");
                    }
                    else {
                        MessageBox.Show("No Inv1_Privilage", moduleCode);
                    }
                }
            }
        });
    }
    HomeComponent.OpenPage = OpenPage;
    function OpenReportsPopup(moduleCode) {
        SysSession.CurrentEnvironment.ModuleCode = moduleCode;
        var compCode = SysSession.CurrentEnvironment.CompCode;
        var branchCode = SysSession.CurrentEnvironment.BranchCode;
        var UserCode = SysSession.CurrentEnvironment.UserCode;
        var SystemCode = SysSession.CurrentEnvironment.SystemCode;
        var SubSystemCode = SysSession.CurrentEnvironment.SubSystemCode;
        var Modulecode = SysSession.CurrentEnvironment.ModuleCode;
        Ajax.CallAsync({
            url: sys.apiUrl("SystemTools", "GetUserPrivilage"),
            data: { compCode: compCode, branchCode: branchCode, UserCode: UserCode, SystemCode: SystemCode, SubSystemCode: SubSystemCode, Modulecode: Modulecode },
            success: function (d) {
                if (d == undefined) {
                    window.open(Url.Action("LoginIndex", "Login"), "_self");
                    return;
                }
                else {
                    var result = JSON.parse(d);
                    if (result == null) {
                        MessageBox.Show("Access denied", "GeneralReports");
                        return;
                    }
                    if (result.Access == true) {
                        var opt = {
                            url: Url.Action(moduleCode, "GeneralReports"),
                            success: function (d) {
                                var result = d;
                                $("#PopupDialog").modal("show");
                                $("#PopupBody").html(result);
                                $('#PopupDialog').modal({
                                    refresh: true
                                });
                                var val = $("#rpTitle").text();
                                $("#TitleSpan").html(val);
                            }
                        };
                        Ajax.CallAsync(opt);
                    }
                    else {
                        MessageBox.Show("Access denied", "GeneralReports");
                    }
                }
            }
        });
    }
    HomeComponent.OpenReportsPopup = OpenReportsPopup;
    function InitalizeComponent() {
        $("#ddbra").on('change', function () {
            selectedbar = $('#ddbra').val();
            systemEnv.BranchCode = selectedbar;
            document.cookie = "Inv1_systemProperties=" + JSON.stringify(systemEnv).toString() + ";expires=Fri, 31 Dec 2030 23:59:59 GMT;path=/";
            newtap = false;
            OpenPage(Modules.Home);
        });
        Getbranch();
        $('#sidebarCollapse').on('click', function () {
            $(".left-sidebar-pro").css({ 'display': 'block' });
        });
        $('#sidebarCollapse2').on('click', function () {
            $(".left-sidebar-pro").toggle("slide");
            $("#cont").addClass("colapsdivcont");
            $("#i_toolpar").removeAttr('hidden');
            $("#i_toolpar").addClass('i_toolpar');
        });
        $('#i_toolpar').on('click', function () {
            $(".left-sidebar-pro").css({ 'display': 'none' });
            $("#cont").addClass("colapsdivcont");
            $("#i_toolpar").attr('hidden');
            $("#i_toolpar").removeClass('i_toolpar');
        });
        Language();
        if (SysSession.CurrentEnvironment.ScreenLanguage == "ar") {
            $("#camp_name").text(SysSession.CurrentEnvironment.CompanyNameAr + " - " + SysSession.CurrentEnvironment.CurrentYear);
            // document.getElementById('camp_name').innerHTML = SysSession.CurrentEnvironment.CompanyNameAr + " - " + SysSession.CurrentEnvironment.CurrentYear;
        }
        else {
            document.getElementById('camp_name').innerHTML = SysSession.CurrentEnvironment.CompanyName + " - " + SysSession.CurrentEnvironment.CurrentYear;
            $("#camp_name").text(SysSession.CurrentEnvironment.CompanyNameAr + " - " + SysSession.CurrentEnvironment.CurrentYear);
        }
        //GetBackgroundImage(); 
        //GetNotificationData();
        //Notifications_Message()
        // Apply user and company privilages 
        ApplyModules();
        ApplyCompanyPrivilages();
        //$("#btnHelpRep").click(() => { ScreenHelp(); })
        InitializePages();
        $("#DashButton").css('pointer-events', 'auto');
        document.getElementById('Admin_name').innerHTML = SysSession.CurrentEnvironment.UserCode;
        if (SysSession.CurrentEnvironment.ScreenLanguage == 'ar') {
            $('#homeTitle').text("نظام سيف لادارة الاملاك");
        }
        else {
            $('#homeTitle').text("Safe Proprity Managment");
            $("#main-menu").removeClass("sm-rtl");
        }
        if (SysSession.CurrentEnvironment.ScreenLanguage == 'ar') {
            $('#LanguageButtonHome').text("Change Language");
        }
        else {
            $('#LanguageButtonHome').text(" تغير اللغة  ");
        }
        btn_loguotuser = DocumentActions.GetElementById("btn_loguotuser");
        btn_loguotuser.onclick = LogoutUserApi;
        //CheckTime(); 
        $("#LanguageButtonHome").click(function () {
            if (SysSession.CurrentEnvironment.ScreenLanguage == "ar") { // English Mode  
                RemoveStyleSheet("bootstrap-rtl");
                //RemoveStyleSheet("mainAR");
                //RemoveStyleSheet("Style_Arabic");
                //RemoveStyleSheet("style");
                //RemoveStyleSheet("StyleNewmassege");
                //RemoveStyleSheet("responsive_AR");
                //AppendStyleSheet("bootstrap.min");
                //AppendStyleSheet("main");
                //AppendStyleSheet("responsive");
                //AppendStyleSheet("StyleEn");
                SysSession.CurrentEnvironment.ScreenLanguage = "en";
                $('#LanguageButtonHome').text(" تغير اللغة  ");
                document.cookie = "Inv1_systemProperties=" + JSON.stringify(SysSession.CurrentEnvironment) + ";expires=Fri, 31 Dec 2030 23:59:59 GMT;path=/";
            }
            else { // Arabic Mode
                //RemoveStyleSheet("StyleEn");
                //RemoveStyleSheet("bootstrap.min");
                //RemoveStyleSheet("main");
                //RemoveStyleSheet("responsive");
                //AppendStyleSheet("bootstrap-rtl");
                //AppendStyleSheet("StyleNewmassege");
                //AppendStyleSheet("mainAR");
                //AppendStyleSheet("style");
                //AppendStyleSheet("Style_Arabic");
                //AppendStyleSheet("responsive_AR");
                SysSession.CurrentEnvironment.ScreenLanguage = "ar";
                $('#LanguageButtonHome').text("Change Language");
                document.cookie = "Inv1_systemProperties=" + JSON.stringify(SysSession.CurrentEnvironment) + ";expires=Fri, 31 Dec 2030 23:59:59 GMT;path=/";
            }
            window.location.reload();
        });
        $(window).scroll(function () {
            var backtotop = $('.back-to-top');
            if (window.scrollY > 10) {
                backtotop.addClass('active');
            }
            else {
                backtotop.removeClass('active');
            }
        });
        Cheak_UserTokenlog();
    }
    HomeComponent.InitalizeComponent = InitalizeComponent;
    function Getbranch() {
        var lang = SysSession.CurrentEnvironment.Language;
        for (var i = 0; i < G_BRANCHService.length; i++) {
            $('#ddbra').append('<option value="' + G_BRANCHService[i].BRA_CODE + '">' + (lang == "ar" ? "  " + G_BRANCHService[i].BRA_CODE + " - " + G_BRANCHService[i].BRA_DESC : "  " + G_BRANCHService[i].BRA_CODE + " - " + G_BRANCHService[i].BRA_DESCE) + '</option>');
        }
        $('#ddbra').val(SysSession.CurrentEnvironment.BranchCode);
    }
    function LogoutUserApi() {
        var userCode = SysSession.CurrentEnvironment.UserCode;
        Ajax.Callsync({
            type: "GET",
            url: sys.apiUrl("G_USERS", "LogoutUser"),
            data: { user: userCode },
            success: function (d) {
                // //debugger;
                if (d !== undefined) {
                    window.open(Url.Action("HomePage", "Login"), "_self");
                    return;
                }
            }
        });
    }
    HomeComponent.LogoutUserApi = LogoutUserApi;
    ;
    function ApplyCompanyPrivilages() {
        if (systemEnv.IsDashboardActive == false) {
            // disable dashboard button
            btnDashboard = DocumentActions.GetElementById("btnDashboard");
            btnDashboard.style.display = "none";
        }
    }
    function ApplyModules() {
        var lis = document.getElementsByClassName("liItem");
        var obj = [document.getElementById('liItem')];
        var modules = new Array();
        var compCode = SysSession.CurrentEnvironment.CompCode;
        var branchCode = SysSession.CurrentEnvironment.BranchCode;
        var UserCode = SysSession.CurrentEnvironment.UserCode;
        var SystemCode = SysSession.CurrentEnvironment.SystemCode;
        var SubSystemCode = SysSession.CurrentEnvironment.SubSystemCode;
        var CurrentYear = SysSession.CurrentEnvironment.CurrentYear;
        $.ajax({
            type: "GET",
            url: sys.apiUrl("SystemTools", "GetAllUserPrivilage"),
            async: false,
            data: { year: Number(CurrentYear), compCode: Number(compCode), branchCode: Number(branchCode), UserCode: UserCode, SystemCode: SystemCode, SubSystemCode: SubSystemCode },
            success: function (d) {
                modules = d;
            }
        });
        // filter moulules where isavailable = false or access = false 
        var li;
        for (var i = 0; i < modules.length; i++) {
            var singleUserModule = modules[i];
            //Notification control
            if (singleUserModule.MODULE_CODE.substring(0, 5) == "Note_") {
                li = document.getElementById(singleUserModule.MODULE_CODE);
            }
            else if (singleUserModule.MODULE_CODE.substring(0, 4) == "tol_") {
                li = document.getElementById(singleUserModule.MODULE_CODE);
            }
            else {
                li = document.getElementById("btn" + singleUserModule.MODULE_CODE);
            }
            //debugger
            if (li != null) {
                if (singleUserModule != null) {
                    if (singleUserModule.Access === false)
                        li.style.display = "none";
                    if (singleUserModule.AVAILABLE === false)
                        li.style.display = "none";
                }
                else {
                    var key = li.getAttribute("key");
                    li.style.display = "";
                    li.className = "liItem";
                }
            }
            else {
                //alert("wrong code  " + singleUserModule.MODULE_CODE)
            }
        }
        $('.MED').removeClass('display_none');
        if (SysSession.CurrentEnvironment.I_Control[0].GL_VoucherCCDT_Type != 1) {
            $('#btnDtcostcenter').addClass('display_none');
            $('#btnCcdtAccState').addClass('display_none');
        }
    }
    //By Muhammad Rajab 
    function GetNotificationData() {
        var comCode = SysSession.CurrentEnvironment.CompCode;
        var BraCode = SysSession.CurrentEnvironment.BranchCode;
        var SystemCode = SysSession.CurrentEnvironment.SystemCode;
        var SubSystemCode = SysSession.CurrentEnvironment.SubSystemCode;
        var yearid = SysSession.CurrentEnvironment.CurrentYear;
        var PeriodinSec = SysSession.CurrentEnvironment.I_Control[0].NotePeriodinSec;
        $.ajax({
            type: "GET",
            url: sys.apiUrl("SystemTools", "GetNotifications"),
            data: { comCode: comCode, BraCode: BraCode, yearid: yearid, SystemCode: SystemCode, SubSystemCode: SubSystemCode },
            async: false,
            success: function (d) {
                var not = d;
                var ulcontent = "";
                $("#notificationUL").html("");
                var _loop_1 = function (n) {
                    var li = document.createElement("li");
                    var span = document.createElement("span");
                    var span2 = document.createElement("span");
                    if (n.NoteCount > 0) {
                        li.onclick = function () {
                            notification_onclick(n.MODULE_CODE, n.MODULE_CODE);
                        };
                    }
                    li.className = "liItem disabledLi dropdown cursor";
                    li.id = n.MODULE_CODE;
                    if (SysSession.CurrentEnvironment.ScreenLanguage == "ar") {
                        span.innerText = n.MODULE_DESCA;
                    }
                    else {
                        span.innerText = n.MODULE_DESCE;
                    }
                    span2.className = 'price';
                    span.className = 'bading_left';
                    span2.innerText = n.NoteCount.toString();
                    li.appendChild(span);
                    li.appendChild(span2);
                    $("#notificationUL").append(li);
                };
                for (var _i = 0, not_1 = not; _i < not_1.length; _i++) {
                    var n = not_1[_i];
                    _loop_1(n);
                }
                setTimeout(GetNotificationData, PeriodinSec * 1000);
            }
        });
    }
    function notification_onclick(ModuleCode, btnName) {
        var sys = new SystemTools();
        var condation = "CompCode = " + SysSession.CurrentEnvironment.CompCode + " and BranchCode = " + SysSession.CurrentEnvironment.BranchCode + "and finyear = " + SysSession.CurrentEnvironment.CurrentYear;
        //if (ModuleCode == "Note_openinvoice")
        //    condation = condation + "  and Status = 0";
        //else if (ModuleCode == "Note_openreceipt") 
        //    condation = condation + "  and Status = 0 and TrType =1";
        //else if (ModuleCode == "Note_openopration") 
        //    condation = condation + "  and Status = 0 ";
        //else if (ModuleCode == "Note_openpaymnt")
        //    condation = condation + "  and Status = 0 and TrType =2";
        sys.FindKey(ModuleCode, btnName, condation, function () {
        });
    }
    function UpdateNotificationAndSendMsg() {
        if (SysSession.CurrentEnvironment.IsNotificaitonActive == true) {
            var PeriodinSec = SysSession.CurrentEnvironment.I_Control[0].NotePeriodinSec;
            var comCode = SysSession.CurrentEnvironment.CompCode;
            var BraCode = SysSession.CurrentEnvironment.BranchCode;
            var SystemCode = SysSession.CurrentEnvironment.SystemCode;
            var SubSystemCode = SysSession.CurrentEnvironment.SubSystemCode;
            $.ajax({
                type: "GET",
                url: sys.apiUrl("SystemTools", "UpdateNotificationAndSndMsg"),
                data: { comCode: comCode, BraCode: BraCode, SystemCode: SystemCode, SubSystemCode: SubSystemCode },
                success: function (d) {
                    GetNotificationData();
                    ApplyModules();
                    setTimeout(UpdateNotificationAndSendMsg, PeriodinSec * 1000);
                }
            });
        }
    }
    function HomePrev(controllerName, moduleCode) {
        var compCode = SysSession.CurrentEnvironment.CompCode;
        var branchCode = SysSession.CurrentEnvironment.BranchCode;
        var UserCode = SysSession.CurrentEnvironment.UserCode;
        var SystemCode = SysSession.CurrentEnvironment.SystemCode;
        var SubSystemCode = SysSession.CurrentEnvironment.SubSystemCode;
        var Modulecode = SysSession.CurrentEnvironment.ModuleCode;
        Ajax.Callsync({
            url: sys.apiUrl("SystemTools", "GetUserPrivilage"),
            data: { compCode: compCode, branchCode: branchCode, UserCode: UserCode, SystemCode: SystemCode, SubSystemCode: SubSystemCode, Modulecode: moduleCode },
            success: function (d) {
                if (d == undefined) {
                    window.open(Url.Action("LoginIndex", "Login"), "_self");
                    return;
                }
                else {
                    var result = JSON.parse(d);
                    if (result == null) {
                        MessageBox.Show("Access denied", controllerName);
                        return;
                    }
                    if (result.Access == true) {
                        $("#spnFav").css("display", "inline-block");
                        SysSession.CurrentPrivileges = result;
                        SysSession.CurrentPrivileges.MODULE_CODE = SysSession.CurrentEnvironment.ModuleCode;
                        document.cookie = "Inv1_Privilage=" + JSON.stringify(result).toString() + ";expires=Fri, 31 Dec 2030 23:59:59 GMT;path=/";
                    }
                    else {
                        MessageBox.Show("Access denied", controllerName);
                    }
                }
            }
        });
    }
    HomeComponent.HomePrev = HomePrev;
    function OpenView(controllerName, moduleCode) {
        //debugger;
        SysSession.CurrentEnvironment.ModuleCode = moduleCode;
        var compCode = SysSession.CurrentEnvironment.CompCode;
        var branchCode = SysSession.CurrentEnvironment.BranchCode;
        var UserCode = SysSession.CurrentEnvironment.UserCode;
        var SystemCode = SysSession.CurrentEnvironment.SystemCode;
        var SubSystemCode = SysSession.CurrentEnvironment.SubSystemCode;
        var Modulecode = SysSession.CurrentEnvironment.ModuleCode;
        var CurrentYear = SysSession.CurrentEnvironment.CurrentYear;
        localStorage.setItem("Compcode1", compCode);
        Ajax.Callsync({
            url: sys.apiUrl("SystemTools", "GetAllUserPrivilage"),
            data: { compCode: compCode, branchCode: branchCode, UserCode: UserCode, SystemCode: SystemCode, SubSystemCode: SubSystemCode, Modulecode: Modulecode },
            success: function (d) {
                //debugger;
                if (d == undefined) {
                    window.open(Url.Action("LoginIndex", "Login"), "_self");
                    return;
                }
                else {
                    var result = JSON.parse(d);
                    if (result == null) {
                        MessageBox.Show("Access denied", controllerName);
                        return;
                    }
                    if (result.Access == true) {
                        $("#spnFav").css("display", "inline-block");
                        SysSession.CurrentPrivileges = result;
                        SysSession.CurrentPrivileges.MODULE_CODE = SysSession.CurrentEnvironment.ModuleCode;
                        sessionStorage.setItem("MODU_CODE", SysSession.CurrentEnvironment.ModuleCode);
                        systemEnv.ScreenLanguage = sessionStorage.getItem("temp_lang");
                        document.cookie = "Privilage=" + JSON.stringify(d).toString() + ";expires=Fri, 31 Dec 2030 23:59:59 GMT;path=/";
                        window.open(Url.Action(controllerName + "Index", controllerName), "_self");
                    }
                    else {
                        MessageBox.Show("Access denied", controllerName);
                    }
                }
            }
        });
    }
    HomeComponent.OpenView = OpenView;
    function InitializePages() {
        $("#btnHome").click(function () { OpenPage(Modules.Home); });
        $("#btnStkDefItems").click(function () { OpenPage(Modules.StkDefItems); });
        $("#btnStkDefItemsNew").click(function () { OpenPage(Modules.StkDefItemsNew); });
        $("#btnStkDefCategory").click(function () { OpenPage(Modules.StkDefCategory); });
        $("#btnPeriodManagement").click(function () { OpenPage(Modules.PeriodManagement); }); //
        $("#btnItemPeriodSummary").click(function () { OpenPage(Modules.ItemPeriodSummary); }); //
        $("#btnStkDefUnit").click(function () { OpenPage(Modules.StkDefUnit); });
        $("#btnStkDefItemType").click(function () { OpenPage(Modules.StkDefItemType); });
        $("#btnStkDefStore").click(function () { OpenPage(Modules.StkDefStore); });
        $("#btnAccDefVendor").click(function () { OpenPage(Modules.AccDefVendor); });
        $("#btnAccDefCustomer").click(function () { OpenPage(Modules.AccDefCustomer); });
        $("#btnAccDefSalesmen").click(function () { OpenPage(Modules.AccDefSalesmen); });
        $("#btnAccDefBox").click(function () { OpenPage(Modules.AccDefBox); });
        $("#btnAccDefExpenses").click(function () { OpenPage(Modules.AccDefExpenses); });
        $("#btnAccDefReceipts").click(function () { OpenPage(Modules.AccDefReceipts); });
        $("#btnCashBankAccount").click(function () { OpenPage(Modules.CashBankAccount); });
        $("#btnAgingCust").click(function () { OpenPage(Modules.AgingCust); }); //
        $("#btnAgingVend").click(function () { OpenPage(Modules.AgingVend); }); //
        $("#btnGenDefCustomerCat").click(function () { OpenPage(Modules.GenDefCustomerCat); });
        $("#btnGendefCustomerGroup").click(function () { OpenPage(Modules.GendefCustomerGroup); });
        $("#btnGenDefCustomerAdjust").click(function () { OpenPage(Modules.GenDefCustomerAdjust); });
        $("#btnGenDefVendorCat").click(function () { OpenPage(Modules.GenDefVendorCat); });
        $("#btnGendefVendorGroup").click(function () { OpenPage(Modules.GendefVendorGroup); });
        $("#btnGenDefVendorAdjust").click(function () { OpenPage(Modules.GenDefVendorAdjust); });
        $("#btnAccTrInvReceipt").click(function () { OpenPage(Modules.AccTrInvReceipt); });
        $("#btnAccTrReceiptNote").click(function () { OpenPage(Modules.AccTrReceiptNote); });
        $("#btnAccTrPaymentNote").click(function () { OpenPage(Modules.AccTrPaymentNote); });
        $("#btnAccTrCustomerAdjust").click(function () { OpenPage(Modules.AccTrCustomerAdjust); });
        $("#btnAccTrVendorAdjust").click(function () { OpenPage(Modules.AccTrVendorAdjust); });
        $("#btnSlsTrSales").click(function () { OpenPage(Modules.SlsTrSales); });
        $("#btnSlsTrReturn").click(function () { OpenPage(Modules.SlsTrReturn); });
        $("#btnSlsTrSalesManager").click(function () { OpenPage(Modules.SlsTrSalesManager); });
        $("#btnSlsTrShowPrice").click(function () { OpenPage(Modules.SlsTrShowPrice); });
        $("#btnPurOrder").click(function () { OpenPage(Modules.PurOrder); });
        $("#btnPurTrReceive").click(function () { OpenPage(Modules.PurTrReceive); });
        $("#btnPurTrReturn").click(function () { OpenPage(Modules.PurTrReturn); });
        $("#btnPurTrpaymemt").click(function () { OpenPage(Modules.PurTrpaymemt); });
        $("#btnProcesses").click(function () { OpenPage(Modules.Processes); });
        $("#btnSalesTrans").click(function () { OpenPage(Modules.SalesTrans); });
        $("#btnProcSalesRet").click(function () { OpenPage(Modules.ProcSalesRet); });
        $("#btnOperationScrap").click(function () { OpenPage(Modules.OperationScrap); });
        $("#btnProcSalesInvoice").click(function () { OpenPage(Modules.ProcSalesInvoice); });
        $("#btnProcSalesMgr").click(function () { OpenPage(Modules.ProcSalesMgr); }); //
        $("#btnCloseProcesses").click(function () { OpenPage(Modules.CloseProcesses); }); //
        $("#btnClientaccstat").click(function () { OpenPage(Modules.Clientaccstat); }); //
        $("#btnCollectedaccstat").click(function () { OpenPage(Modules.Collectedaccstat); }); //
        $("#btnSupplieraccstat").click(function () { OpenPage(Modules.Supplieraccstat); }); //
        $("#btnCashBoxAccount").click(function () { OpenPage(Modules.CashBoxAccount); }); //
        $("#btnInventorymove").click(function () { OpenPage(Modules.Inventorymove); }); //
        $("#btnInventoryvalue").click(function () { OpenPage(Modules.Inventoryvalue); }); //
        $("#btnIncomeoperations").click(function () { OpenPage(Modules.Incomeoperations); }); // 
        $("#Eslam").click(function () { OpenPage(Modules.Incomeoperations); }); // 
        $("#btnItemsalesSum").click(function () { OpenPage(Modules.ItemsalesSum); }); //
        $("#btnItemPurchase").click(function () { OpenPage(Modules.ItemPurchase); }); //
        $("#btnIssueType").click(function () { OpenPage(Modules.IssueType); }); //
        $("#btnIssueToCC").click(function () { OpenPage(Modules.IssueToCC); }); //
        $("#btnGLDefAccount").click(function () { OpenPage(Modules.GLDefAccount); }); //
        $("#btnJournalVoucher").click(function () { OpenPage(Modules.JournalVoucher); });
        $("#btnReceiptVoucher").click(function () { OpenPage(Modules.ReceiptVoucher); });
        $("#btnPaymentVoucher").click(function () { OpenPage(Modules.PaymentVoucher); });
        $("#btnManagementVoucher").click(function () { OpenPage(Modules.ManagementVoucher); }); //
        $("#btnCostCenter").click(function () { OpenPage(Modules.CostCenter); }); //
        $("#btnAccountstatement").click(function () { OpenPage(Modules.Accountstatement); }); //
        $("#btnAccountbalances").click(function () { OpenPage(Modules.Accountbalances); }); //
        $("#btnfinancialreports").click(function () { OpenPage(Modules.financialreports); }); //
        $("#btnUSERS").click(function () { OpenPage(Modules.USERS); }); //
        $("#btnTranPosting").click(function () { OpenPage(Modules.TranPosting); }); //
        $("#btnLnkvarBranch").click(function () { OpenPage(Modules.LnkvarBranch); }); //
        $("#btnLnkTransVoucher").click(function () { OpenPage(Modules.LnkTransVoucher); }); //
        $("#btnDirecttransfer").click(function () { OpenPage(Modules.Directtransfer); });
        $("#btnSTKAdjust").click(function () { OpenPage(Modules.STKAdjust); });
        $("#btnReceiveTransfer").click(function () { OpenPage(Modules.ReceiveTransfer); });
        $("#btnsendTransfer").click(function () { OpenPage(Modules.sendTransfer); });
        $("#btnGenDefAdd").click(function () { OpenPage(Modules.GenDefAdd); });
        $("#btnDefStore").click(function () { OpenPage(Modules.DefStore); });
        $("#btnServiceCategories").click(function () { OpenPage(Modules.ServiceCategories); });
        $("#btnServices").click(function () { OpenPage(Modules.Services); });
        $("#btnSales_Services").click(function () { OpenPage(Modules.Sales_Services); });
        $("#btnSer_Return_Sales").click(function () { OpenPage(Modules.Ser_Return_Sales); });
        $("#btnSer_Purchasing").click(function () { OpenPage(Modules.Ser_Purchasing); });
        $("#btnSer_Return_Pur").click(function () { OpenPage(Modules.Ser_Return_Pur); });
        $("#btnSer_Sales_Report").click(function () { OpenPage(Modules.Ser_Sales_Report); });
        $("#btnSer_Pur_Report").click(function () { OpenPage(Modules.Ser_Pur_Report); });
        $("#btnVatLists").click(function () { OpenPage(Modules.VatLists); });
        $("#btnVatReport").click(function () { OpenPage(Modules.VatReport); });
        $("#btnVatSetting").click(function () { OpenPage(Modules.VatSetting); });
        $("#btnDtcostcenter").click(function () { OpenPage(Modules.Dtcostcenter); });
        $("#btnCcdtAccState").click(function () { OpenPage(Modules.CcdtAccState); });
        $("#btnCollectUnit").click(function () { OpenPage(Modules.CollectUnit); });
    }
    function Notifications_Message() {
        var comCode = SysSession.CurrentEnvironment.CompCode;
        var BraCode = SysSession.CurrentEnvironment.BranchCode;
        var SystemCode = SysSession.CurrentEnvironment.SystemCode;
        var SubSystemCode = SysSession.CurrentEnvironment.SubSystemCode;
        $.ajax({
            type: "GET",
            url: sys.apiUrl("SystemTools", "GetNotifications_Message"),
            // data: { comCode: comCode, SystemCode: SystemCode },
            async: false,
            success: function (d) {
                var massg = d;
                var ulcontent = "";
                $("#creatnotesmassg").html("");
                for (var _i = 0, massg_1 = massg; _i < massg_1.length; _i++) {
                    var ms = massg_1[_i];
                    var li = document.createElement("li");
                    var span = document.createElement("span");
                    var span2 = document.createElement("span");
                    var span3 = document.createElement("span");
                    var span4 = document.createElement("span");
                    li.id = ms.AlertID.toString();
                    if (ms.NoteSubType == 1) {
                        li.className = "liItem disabledLi dropdown cursor border_li style_li1";
                    }
                    else {
                        li.className = "liItem disabledLi dropdown cursor border_li style_li2";
                    }
                    span.innerText = ms.MsgText;
                    span.className = 'bading_left font_mseeg';
                    span2.className = 'col-lg-12 font_mseeg';
                    span3.className = 'col-lg-12 font_mseeg';
                    span4.className = 'col-lg-12 font_mseeg';
                    span2.innerText = DateTimeFormat(ms.MsgDate);
                    li.appendChild(span);
                    li.appendChild(span2);
                    li.appendChild(span3);
                    li.appendChild(span4);
                    $("#creatnotesmassg").append(li);
                }
            }
        });
    }
    //By Muhammad Rajab
    function Language() {
        if (SysSession.CurrentEnvironment.ScreenLanguage == "en") {
            RemoveStyleSheet("bootstrap-rtl");
            //RemoveStyleSheet("responsive_AR");
            //RemoveStylejs("mainAR");
            //RemoveStyleSheet("Style_Arabic");
            //RemoveStyleSheet("style");
            //RemoveStyleSheet("StyleNewmassege");
            //$("#bootstrap_rtl").remove();
            //$("#Style_Arabic").remove();
            //AppendStyleSheet("bootstrap.min");
            //AppendStylejs("main");
            //AppendStyleSheet("responsive");
            //AppendStyleSheet("StyleEn");
            SysSession.CurrentEnvironment.ScreenLanguage = "en";
            $("#btn_loguotuser").text("Logout");
        }
        else {
            //RemoveStyleSheet("StyleEn");
            //RemoveStyleSheet("bootstrap.min");
            //RemoveStylejs("main");
            //RemoveStyleSheet("responsive");
            AppendStyleSheet("bootstrap-rtl");
            //AppendStyleSheet("StyleNewmassege");
            //AppendStylejs("mainAR");
            //AppendStyleSheet("style");
            //AppendStyleSheet("Style_Arabic");
            //AppendStyleSheet("responsive_AR");
            //$('#langImg').attr('src', '../images/english.png');
            SysSession.CurrentEnvironment.ScreenLanguage = "ar";
            $("#btn_loguotuser").text("الخروج من النظام");
        }
        //$("#SearchBox").draggable();
        App.Startup();
    }
    HomeComponent.Language = Language;
    function AppendStyleSheet(fileName) {
        var lnk = document.createElement('link');
        lnk.href = "../Style_design/" + fileName + ".css";
        lnk.rel = 'stylesheet';
        lnk.type = 'text/css';
        document.getElementsByTagName("head")[0].appendChild(lnk);
    }
    function RemoveStyleSheet(fileName) {
        var href = "../Style_design/" + fileName + ".css";
        $("link[rel=stylesheet][href~='" + href + "']").remove();
    }
    //By Muhammad Rajab 
    function AppendStylejs(fileName) {
        var script = document.createElement('script');
        script.src = "../Style_design/" + fileName + ".js";
        document.getElementById("caret_script").appendChild(script);
    }
    //By Muhammad Rajab 
    function RemoveStylejs(fileName) {
        var href = "../Style_design/" + fileName + ".js";
        $("<script src=" + href + " ></script>").remove();
    }
    function ScreenHelp() {
        var ModuleCode = SysSession.CurrentPrivileges.MODULE_CODE;
        //debugger
        $.ajax({
            type: "GET",
            url: sys.apiUrl("SystemTools", "GetHelp"),
            data: { ModuleCode: ModuleCode },
            async: false,
            success: function (d) {
                //debugger;
                var result = d;
                var res = result.Response;
                if (res != null) {
                    if (SysSession.CurrentEnvironment.ScreenLanguage == "ar") {
                        $("#modalHelpRep").html("<div style=\"direction:rtl;height: 289px;overflow: scroll;overflow-x: hidden;font-weight: bold;\" >" + res.HelpBody_Ar + "</div>");
                    }
                    else {
                        $("#modalHelpRep").html("<div style=\"direction:ltr;height: 289px;overflow: scroll;overflow-x: hidden;font-weight: bold;\">" + res.HelpBody_En + "</div>");
                    }
                }
            }
        });
    }
})(HomeComponent || (HomeComponent = {}));
//# sourceMappingURL=HomeComponent.js.map