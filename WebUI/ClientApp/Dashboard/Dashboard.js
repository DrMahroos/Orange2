$(document).ready(function () {
    Dashboard.InitalizeComponent();
});
var Dashboard;
(function (Dashboard) {
    //system varables
    var SysSession = GetSystemSession(Modules.Dashboard);
    var compcode;
    var BranchCode;
    var sys = new SystemTools();
    // giedView 
    var IProc_DashAccounts = new Array();
    var IprocDash = new Array();
    var DashBalances = new Array();
    var print_1;
    var print_2;
    var print_3;
    var print_4;
    var print_5;
    //global     
    var CountGrid = 0;
    var totVal1 = 0;
    var totVal2 = 0;
    var totVal3 = 0;
    var totVal4 = 0;
    var totVal5 = 0;
    var totVal6 = 0;
    var totVal7 = 0;
    var totVal8 = 0;
    var totVal9 = 0;
    var totVal10 = 0;
    var totVal11 = 0;
    var totVal12 = 0;
    var totalVal = 0;
    var BigBalanceBank = 0;
    var BigBalanceCash = 0;
    function InitalizeComponent() {
        print_1 = document.getElementById('print_1');
        print_2 = document.getElementById('print_2');
        print_3 = document.getElementById('print_3');
        print_4 = document.getElementById('print_4');
        print_5 = document.getElementById('print_5');
        $('#divIconbar').addClass('display_none');
        compcode = Number(SysSession.CurrentEnvironment.CompCode);
        BranchCode = Number(SysSession.CurrentEnvironment.BranchCode);
        InitializeEvents();
        GetDataCashAndBank();
        GetBalances();
        GetDashboard(0);
        GetDashboard(1);
        GetDashboard(2);
    }
    Dashboard.InitalizeComponent = InitalizeComponent;
    function InitializeEvents() {
        print_1.onclick = function () { print(1); };
        print_2.onclick = function () { print(2); };
        print_3.onclick = function () { print(3); };
        print_4.onclick = function () { print(4); };
        print_5.onclick = function () { print(5); };
        TimerRun(10000);
    }
    function TimerRun(Time) {
        setTimeout(function () {
            GetDataCashAndBank();
            GetBalances();
            GetDashboard(0);
            GetDashboard(1);
            GetDashboard(2);
        }, Time);
    }
    function GetBalances() {
        Ajax.Callsync({
            type: "Get",
            url: sys.apiUrl("SystemTools", "GetDashBalances"),
            success: function (d) {
                var result = d;
                DashBalances = result.Response;
                if (DashBalances.length > 0) {
                    $('#BalancesSales').html('???????? ????????: ' + DashBalances[0].CustOp.toLocaleString('en-US', { maximumFractionDigits: 1 }));
                    $('#BalancesPurchase').html('???????? ????????: ' + DashBalances[0].VndOp.toLocaleString('en-US', { maximumFractionDigits: 1 }));
                }
            }
        });
    }
    function GetDashboard(_Type) {
        totVal1 = 0;
        totVal2 = 0;
        totVal3 = 0;
        totVal4 = 0;
        totVal5 = 0;
        totVal6 = 0;
        totVal7 = 0;
        totVal8 = 0;
        totVal9 = 0;
        totVal10 = 0;
        totVal11 = 0;
        totVal12 = 0;
        totalVal = 0;
        Ajax.Callsync({
            type: "Get",
            url: sys.apiUrl("SystemTools", "GetDashboard"),
            data: { _Type: _Type, comp: compcode, bracode: BranchCode },
            success: function (d) {
                var result = d;
                IprocDash = result.Response;
                CountGrid = 0;
                $("#dataTable_" + _Type).html('');
                for (var i = 0; i < IprocDash.length; i++) {
                    InitializeGrid(Number(i + '' + _Type + ''), _Type);
                    DisplayGrid(Number(i + '' + _Type + ''), IprocDash[i], _Type);
                    CountGrid++;
                }
                if (_Type != 0) {
                    DisplayTotal(Number((CountGrid + 1) + '' + _Type + ''), _Type);
                }
            }
        });
    }
    function InitializeGrid(cnt, _Type) {
        var html;
        html = ' <tr  id="Grid1_' + cnt + '" >' +
            '<input id = "txt_StatusFlag' + cnt + '" name = " " type = "hidden" class="form-control" /> ' +
            '<input id = "OpeningDetailID' + cnt + '" name = " " type = "hidden" class="form-control" /> ' +
            '<td id="titel' + cnt + '" > ' +
            '??????????????' +
            '</td>' +
            '<td  id="Val1_' + cnt + '" > ' +
            '0' +
            '</td>' +
            '<td  id="Val2_' + cnt + '"  > ' +
            '0' +
            '</td>' +
            '<td  id="Val3_' + cnt + '"  > ' +
            '0' +
            '</td>' +
            '<td id="Val4_' + cnt + '"  > ' +
            '0' +
            '</td>' +
            '<td id="Val5_' + cnt + '"  > ' +
            '0' +
            '</td>' +
            '<td id="Val6_' + cnt + '" > ' +
            '0' +
            '</td>' +
            '<td id="Val7_' + cnt + '" > ' +
            '0' +
            '</td>' +
            '<td id="Val8_' + cnt + '" > ' +
            '0' +
            '</td>' +
            '<td id="Val9_' + cnt + '" > ' +
            '0' +
            '</td>' +
            '<td id="Val10_' + cnt + '" > ' +
            '0' +
            '</td>' +
            '<td id="Val11_' + cnt + '" > ' +
            '0' +
            '</td>' +
            '<td id="Val12_' + cnt + '" > ' +
            '0' +
            '</td>' +
            '<td id="Total_' + cnt + '" > ' +
            '0' +
            '</td>' +
            '</tr>';
        $("#dataTable_" + _Type).append(html);
    }
    function DisplayGrid(i, _Data, _Type) {
        debugger;
        $('#titel' + i).addClass('th_Style');
        var titel = '';
        if (_Type == 0) { // ????????????
            titel = _Data.rowno == 1 ? '?????? ????????????????' : _Data.rowno == 2 ? '????????' : _Data.rowno == 3 ? '??????????' : _Data.rowno == 4 ? '????????????????' : _Data.rowno == 5 ? '??????????????????' : _Data.rowno == 6 ? '????????????????' : _Data.rowno == 7 ? '?????? ????????????' : _Data.rowno == 8 ? '  ??????????????' : _Data.rowno == 9 ? '  ??????????????' : _Data.rowno == 10 ? '  ????????????????' : '???????????? ?????????????? ';
        }
        if (_Type == 1) { // ??????????????
            titel = _Data.rowno == 1 ? '  ???????????? ??????????' : _Data.rowno == 2 ? '???????????? ????????' : _Data.rowno == 3 ? '??????????' : _Data.rowno == 4 ? '????????????' : _Data.rowno == 5 ? '????????????' : '';
        }
        if (_Type == 2) { // ????????????????
            titel = _Data.rowno == 1 ? '?????????????????? ????????  ' : _Data.rowno == 2 ? '?????????? ????????' : _Data.rowno == 3 ? '?????????????? ??????' : _Data.rowno == 4 ? '?????????? ??????' : _Data.rowno == 5 ? '????????????' : _Data.rowno == 6 ? '???????????? ' : _Data.rowno == 7 ? '????????????  ' : _Data.rowno == 8 ? '  ????????????' : '';
        }
        $('#titel' + i).html(titel);
        $('#Val1_' + i).html(_Data.Val1.toLocaleString('en-US', { maximumFractionDigits: 1 }));
        $('#Val2_' + i).html(_Data.Val2.toLocaleString('en-US', { maximumFractionDigits: 1 }));
        $('#Val3_' + i).html(_Data.Val3.toLocaleString('en-US', { maximumFractionDigits: 1 }));
        $('#Val4_' + i).html(_Data.Val4.toLocaleString('en-US', { maximumFractionDigits: 1 }));
        $('#Val5_' + i).html(_Data.Val5.toLocaleString('en-US', { maximumFractionDigits: 1 }));
        $('#Val6_' + i).html(_Data.Val6.toLocaleString('en-US', { maximumFractionDigits: 1 }));
        $('#Val7_' + i).html(_Data.Val7.toLocaleString('en-US', { maximumFractionDigits: 1 }));
        $('#Val8_' + i).html(_Data.Val8.toLocaleString('en-US', { maximumFractionDigits: 1 }));
        $('#Val9_' + i).html(_Data.Val9.toLocaleString('en-US', { maximumFractionDigits: 1 }));
        $('#Val10_' + i).html(_Data.Val10.toLocaleString('en-US', { maximumFractionDigits: 1 }));
        $('#Val11_' + i).html(_Data.Val11.toLocaleString('en-US', { maximumFractionDigits: 1 }));
        $('#Val12_' + i).html(_Data.Val12.toLocaleString('en-US', { maximumFractionDigits: 1 }));
        $('#Total_' + i).html(_Data.Total.toLocaleString('en-US', { maximumFractionDigits: 1 }));
        var totplus = 0;
        if (_Type == 1) // sales
         {
            if (_Data.rowno == 3 || _Data.rowno == 4) {
                totVal1 += (_Data.Val1 * -1);
                totVal2 += (_Data.Val2 * -1);
                totVal3 += (_Data.Val3 * -1);
                totVal4 += (_Data.Val4 * -1);
                totVal5 += (_Data.Val5 * -1);
                totVal6 += (_Data.Val6 * -1);
                totVal7 += (_Data.Val7 * -1);
                totVal8 += (_Data.Val8 * -1);
                totVal9 += (_Data.Val9 * -1);
                totVal10 += (_Data.Val10 * -1);
                totVal11 += (_Data.Val11 * -1);
                totVal12 += (_Data.Val12 * -1);
                totalVal += (_Data.Total * -1);
                totplus = 1;
            }
        }
        if (_Type == 2) // Purchase
         {
            if (_Data.rowno == 6 || _Data.rowno == 7) {
                totVal1 += (_Data.Val1 * -1);
                totVal2 += (_Data.Val2 * -1);
                totVal3 += (_Data.Val3 * -1);
                totVal4 += (_Data.Val4 * -1);
                totVal5 += (_Data.Val5 * -1);
                totVal6 += (_Data.Val6 * -1);
                totVal7 += (_Data.Val7 * -1);
                totVal8 += (_Data.Val8 * -1);
                totVal9 += (_Data.Val9 * -1);
                totVal10 += (_Data.Val10 * -1);
                totVal11 += (_Data.Val11 * -1);
                totVal12 += (_Data.Val12 * -1);
                totalVal += (_Data.Total * -1);
                totplus = 1;
            }
        }
        if (totplus == 0) {
            totVal1 += _Data.Val1;
            totVal2 += _Data.Val2;
            totVal3 += _Data.Val3;
            totVal4 += _Data.Val4;
            totVal5 += _Data.Val5;
            totVal6 += _Data.Val6;
            totVal7 += _Data.Val7;
            totVal8 += _Data.Val8;
            totVal9 += _Data.Val9;
            totVal10 += _Data.Val10;
            totVal11 += _Data.Val11;
            totVal12 += _Data.Val12;
            totalVal += _Data.Total;
        }
    }
    function DisplayTotal(cnt, _Type) {
        InitializeGrid(cnt, _Type);
        $('#titel' + cnt).addClass('th_Style');
        $('#titel' + cnt).html('????????????');
        $('#Val1_' + cnt).html(((totVal1.RoundToNum(2)) + (_Type == 1 ? DashBalances[0].CustOp : DashBalances[0].VndOp)).RoundToSt(2));
        $('#Val2_' + cnt).html((Number(totVal2.RoundToSt(2)) + Number(totVal1.RoundToSt(2)) + (_Type == 1 ? DashBalances[0].CustOp : DashBalances[0].VndOp)).RoundToSt(2));
        $('#Val3_' + cnt).html((Number(totVal3.RoundToSt(2)) + Number($('#Val2_' + cnt).html()) + (_Type == 1 ? DashBalances[0].CustOp : DashBalances[0].VndOp)).RoundToSt(2));
        $('#Val4_' + cnt).html((Number(totVal4.RoundToSt(2)) + Number($('#Val3_' + cnt).html()) + (_Type == 1 ? DashBalances[0].CustOp : DashBalances[0].VndOp)).RoundToSt(2));
        $('#Val5_' + cnt).html((Number(totVal5.RoundToSt(2)) + Number($('#Val4_' + cnt).html()) + (_Type == 1 ? DashBalances[0].CustOp : DashBalances[0].VndOp)).RoundToSt(2));
        $('#Val6_' + cnt).html((Number(totVal6.RoundToSt(2)) + Number($('#Val5_' + cnt).html()) + (_Type == 1 ? DashBalances[0].CustOp : DashBalances[0].VndOp)).RoundToSt(2));
        $('#Val7_' + cnt).html((Number(totVal7.RoundToSt(2)) + Number($('#Val6_' + cnt).html()) + (_Type == 1 ? DashBalances[0].CustOp : DashBalances[0].VndOp)).RoundToSt(2));
        $('#Val8_' + cnt).html((Number(totVal8.RoundToSt(2)) + Number($('#Val7_' + cnt).html()) + (_Type == 1 ? DashBalances[0].CustOp : DashBalances[0].VndOp)).RoundToSt(2));
        $('#Val9_' + cnt).html((Number(totVal9.RoundToSt(2)) + Number($('#Val8_' + cnt).html()) + (_Type == 1 ? DashBalances[0].CustOp : DashBalances[0].VndOp)).RoundToSt(2));
        $('#Val10_' + cnt).html((Number(totVal10.RoundToSt(2)) + Number($('#Val9_' + cnt).html()) + (_Type == 1 ? DashBalances[0].CustOp : DashBalances[0].VndOp)).RoundToSt(2));
        $('#Val11_' + cnt).html((Number(totVal11.RoundToSt(2)) + Number($('#Val10_' + cnt).html()) + (_Type == 1 ? DashBalances[0].CustOp : DashBalances[0].VndOp)).RoundToSt(2));
        $('#Val12_' + cnt).html((Number(totVal12.RoundToSt(2)) + Number($('#Val11_' + cnt).html()) + (_Type == 1 ? DashBalances[0].CustOp : DashBalances[0].VndOp)).RoundToSt(2));
        $('#Total_' + cnt).html((Number(totalVal.RoundToSt(2)) + Number($('#Val12_' + cnt).html()) + (_Type == 1 ? DashBalances[0].CustOp : DashBalances[0].VndOp)).RoundToSt(2));
        Number($('#Val1_' + cnt).html()) >= 0 ? $('#Val1_' + cnt).addClass('Total_Style_scss') : $('#Val1_' + cnt).addClass('Total_Style_Worng');
        Number($('#Val2_' + cnt).html()) >= 0 ? $('#Val2_' + cnt).addClass('Total_Style_scss') : $('#Val2_' + cnt).addClass('Total_Style_Worng');
        Number($('#Val3_' + cnt).html()) >= 0 ? $('#Val3_' + cnt).addClass('Total_Style_scss') : $('#Val3_' + cnt).addClass('Total_Style_Worng');
        Number($('#Val4_' + cnt).html()) >= 0 ? $('#Val4_' + cnt).addClass('Total_Style_scss') : $('#Val4_' + cnt).addClass('Total_Style_Worng');
        Number($('#Val5_' + cnt).html()) >= 0 ? $('#Val5_' + cnt).addClass('Total_Style_scss') : $('#Val5_' + cnt).addClass('Total_Style_Worng');
        Number($('#Val6_' + cnt).html()) >= 0 ? $('#Val6_' + cnt).addClass('Total_Style_scss') : $('#Val6_' + cnt).addClass('Total_Style_Worng');
        Number($('#Val7_' + cnt).html()) >= 0 ? $('#Val7_' + cnt).addClass('Total_Style_scss') : $('#Val7_' + cnt).addClass('Total_Style_Worng');
        Number($('#Val8_' + cnt).html()) >= 0 ? $('#Val8_' + cnt).addClass('Total_Style_scss') : $('#Val8_' + cnt).addClass('Total_Style_Worng');
        Number($('#Val9_' + cnt).html()) >= 0 ? $('#Val9_' + cnt).addClass('Total_Style_scss') : $('#Val9_' + cnt).addClass('Total_Style_Worng');
        Number($('#Val10_' + cnt).html()) >= 0 ? $('#Val10_' + cnt).addClass('Total_Style_scss') : $('#Val10_' + cnt).addClass('Total_Style_Worng');
        Number($('#Val11_' + cnt).html()) >= 0 ? $('#Val11_' + cnt).addClass('Total_Style_scss') : $('#Val11_' + cnt).addClass('Total_Style_Worng');
        Number($('#Val12_' + cnt).html()) >= 0 ? $('#Val12_' + cnt).addClass('Total_Style_scss') : $('#Val12_' + cnt).addClass('Total_Style_Worng');
        Number($('#Total_' + cnt).html()) >= 0 ? $('#Total_' + cnt).addClass('Total_Style_scss') : $('#Total_' + cnt).addClass('Total_Style_Worng');
        $('#Val1_' + cnt).html(Number($('#Val1_' + cnt).html()).toLocaleString('en-US', { maximumFractionDigits: 1 }));
        $('#Val2_' + cnt).html(Number($('#Val2_' + cnt).html()).toLocaleString('en-US', { maximumFractionDigits: 1 }));
        $('#Val3_' + cnt).html(Number($('#Val3_' + cnt).html()).toLocaleString('en-US', { maximumFractionDigits: 1 }));
        $('#Val4_' + cnt).html(Number($('#Val4_' + cnt).html()).toLocaleString('en-US', { maximumFractionDigits: 1 }));
        $('#Val5_' + cnt).html(Number($('#Val5_' + cnt).html()).toLocaleString('en-US', { maximumFractionDigits: 1 }));
        $('#Val6_' + cnt).html(Number($('#Val6_' + cnt).html()).toLocaleString('en-US', { maximumFractionDigits: 1 }));
        $('#Val7_' + cnt).html(Number($('#Val7_' + cnt).html()).toLocaleString('en-US', { maximumFractionDigits: 1 }));
        $('#Val8_' + cnt).html(Number($('#Val8_' + cnt).html()).toLocaleString('en-US', { maximumFractionDigits: 1 }));
        $('#Val9_' + cnt).html(Number($('#Val9_' + cnt).html()).toLocaleString('en-US', { maximumFractionDigits: 1 }));
        $('#Val10_' + cnt).html(Number($('#Val10_' + cnt).html()).toLocaleString('en-US', { maximumFractionDigits: 1 }));
        $('#Val11_' + cnt).html(Number($('#Val11_' + cnt).html()).toLocaleString('en-US', { maximumFractionDigits: 1 }));
        $('#Val12_' + cnt).html(Number($('#Val12_' + cnt).html()).toLocaleString('en-US', { maximumFractionDigits: 1 }));
        $('#Total_' + cnt).html(Number($('#Total_' + cnt).html()).toLocaleString('en-US', { maximumFractionDigits: 1 }));
    }
    function GetDataCashAndBank() {
        Ajax.Callsync({
            type: "Get",
            url: sys.apiUrl("SystemTools", "GetDataCashAndBank"),
            data: { comp: compcode, bracode: BranchCode },
            success: function (d) {
                var result = d;
                IProc_DashAccounts = result.Response;
                if (IProc_DashAccounts.length > 0) {
                    IProc_DashAccounts = IProc_DashAccounts.sort(function (a, b) { return b.EndBalance - a.EndBalance; });
                    CountGrid = 0;
                    $("#TableCashOrBank_1").html('');
                    $("#TableCashOrBank_2").html('');
                    var _Type = 0;
                    var ser1 = 0;
                    var ser2 = 0;
                    for (var i = 0; i < IProc_DashAccounts.length; i++) {
                        _Type = IProc_DashAccounts[i].Typ;
                        InitializeGridCashOrBank(Number(i + '' + _Type + ''), _Type);
                        DisplayGridCashOrBank(Number(i + '' + _Type + ''), IProc_DashAccounts[i], _Type, _Type == 1 ? ser1 + 1 : ser2 + 1);
                        CountGrid++;
                        _Type == 1 ? ser1 = ser1 + 1 : ser2 = ser2 + 1;
                    }
                }
            }
        });
    }
    function InitializeGridCashOrBank(cnt, _Type) {
        var html;
        html = ' <tr  id="GridCB_' + cnt + '" >' +
            '<td id="Ser' + cnt + '" > ' +
            '1' +
            '</td>' +
            '<td  id="CBDescA_' + cnt + '" > ' +
            '?????? ???????????? ' +
            '</td>' +
            '<td  > ' +
            '<div class="progress">' +
            '<div id="CBprogress_' + cnt + '" class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>' +
            '</div>' +
            '</td>' +
            '<td  class="text-success" id="CBBalance_' + cnt + '"  > ' +
            '0' +
            '<i class="mdi mdi-arrow-up"></i>' +
            '</td>' +
            '</tr>';
        $("#TableCashOrBank_" + _Type).append(html);
    }
    function DisplayGridCashOrBank(i, _Data, _Type, Ser) {
        $('#Ser' + i).html(Ser.toString());
        $('#CBDescA_' + i).html(_Data.acc_DescA.toString());
        $('#CBBalance_' + i).html(_Data.EndBalance.toLocaleString('en-US', { maximumFractionDigits: 1 }) /*+ '<i class="mdi mdi-arrow-up"></i>'*/);
        if (Ser == 1 && _Data.EndBalance > 0) {
            $('#CBprogress_' + i).attr('style', 'width: 80%');
            _Type == 1 ? BigBalanceBank = _Data.EndBalance : BigBalanceCash = _Data.EndBalance;
        }
        if (Ser != 1) {
            debugger;
            var BigEndBalance = _Type == 1 ? BigBalanceBank : BigBalanceCash;
            var progress = 0;
            progress = (_Data.EndBalance - (_Data.EndBalance > (BigEndBalance - ((BigEndBalance / 20) * 100)) ? (_Data.EndBalance / 2) : 0)) / BigEndBalance;
            progress = progress * 100;
            progress = progress.RoundToNum(2);
            if (progress > 0 && progress <= 5) {
                progress = 5;
            }
            if (progress > 1 && progress < 25) {
                $('#CBprogress_' + i).attr('class', 'progress-bar bg-warning');
                $('#CBBalance_' + i).attr('class', 'text-warning');
                $('#CBBalance_' + i).html(_Data.EndBalance.toLocaleString('en-US', { maximumFractionDigits: 1 }) /*+'<i class="mdi mdi-arrow-top-left"></i>'*/);
            }
            if (progress > 25 && progress < 60) {
                $('#CBprogress_' + i).attr('class', 'progress-bar bg-primary');
                $('#CBBalance_' + i).attr('class', 'text-primary');
            }
            if (progress > 60 && progress < 80) {
                $('#CBprogress_' + i).attr('class', 'progress-bar bg-info');
                $('#CBBalance_' + i).attr('class', 'text-info');
            }
            $('#CBprogress_' + i).attr('style', 'width: ' + progress + '%');
            if (_Data.EndBalance < 0) {
                $('#CBBalance_' + i).attr('class', 'text-danger');
                $('#CBBalance_' + i).html(_Data.EndBalance.toLocaleString('en-US', { maximumFractionDigits: 1 }) /*+'<i class="mdi mdi-arrow-down"></i>'*/);
            }
        }
    }
    function print(type) {
        var divToPrint = document.getElementById("Table_" + type);
        var newWin = window.open("");
        newWin.document.write(divToPrint.outerHTML);
        newWin.print();
        //newWin.close();
        //printDiv('dataTable');
    }
})(Dashboard || (Dashboard = {}));
//# sourceMappingURL=Dashboard.js.map