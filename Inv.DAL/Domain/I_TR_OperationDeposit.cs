//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Inv.DAL.Domain
{
    using System;
    using System.Collections.Generic;
    
    public partial class I_TR_OperationDeposit
    {
        public int OperationDepositID { get; set; }
        public int OperationID { get; set; }
        public Nullable<int> ItemID { get; set; }
        public string Acc_Code { get; set; }
        public Nullable<decimal> DepositAmount { get; set; }
        public Nullable<System.DateTime> DepositDate { get; set; }
        public string Remarks { get; set; }
        public Nullable<int> DepositType { get; set; }
        public Nullable<int> CashBoxID { get; set; }
        public Nullable<int> SalesmanId { get; set; }
    }
}
