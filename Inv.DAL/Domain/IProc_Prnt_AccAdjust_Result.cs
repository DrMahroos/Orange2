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
    
    public partial class IProc_Prnt_AccAdjust_Result
    {
        public Nullable<int> Comp { get; set; }
        public Nullable<int> Bra { get; set; }
        public string CompNameA { get; set; }
        public string CompNameE { get; set; }
        public string BraNameA { get; set; }
        public string BraNameE { get; set; }
        public string LoginUser { get; set; }
        public System.DateTime PrintDate { get; set; }
        public Nullable<int> Par_RepType { get; set; }
        public int AdjustmentID { get; set; }
        public Nullable<int> AdustmentTypeID { get; set; }
        public Nullable<bool> IsDebit { get; set; }
        public Nullable<bool> IsCustomer { get; set; }
        public Nullable<int> VendorId { get; set; }
        public Nullable<int> CustomerId { get; set; }
        public string TrNo { get; set; }
        public Nullable<System.DateTime> TrDate { get; set; }
        public string TrDateH { get; set; }
        public Nullable<int> Status { get; set; }
        public Nullable<decimal> Amount { get; set; }
        public Nullable<decimal> VatAmount { get; set; }
        public Nullable<decimal> NetAfterVAT { get; set; }
        public string AdjustDescA { get; set; }
        public string AdjustDescE { get; set; }
        public Nullable<bool> IsPosted { get; set; }
        public Nullable<int> VoucherNo { get; set; }
        public Nullable<byte> VoucherType { get; set; }
        public string Remarks { get; set; }
        public Nullable<System.DateTime> CreatedAt { get; set; }
        public string CreatedBy { get; set; }
        public Nullable<System.DateTime> UpdatedAt { get; set; }
        public string UpdatedBy { get; set; }
        public Nullable<int> CompCode { get; set; }
        public Nullable<int> BranchCode { get; set; }
        public string CustomerCODE { get; set; }
        public string cus_NameA { get; set; }
        public string Cus_NameE { get; set; }
        public string VendorCode { get; set; }
        public string Vnd_NameA { get; set; }
        public string Vnd_NameE { get; set; }
        public Nullable<int> AdjCode { get; set; }
        public string Adj_DescA { get; set; }
        public string Adj_DescE { get; set; }
        public string DESCRIPTION { get; set; }
        public Nullable<decimal> VatPerc { get; set; }
        public Nullable<int> VatType { get; set; }
        public string AmountinWords { get; set; }
    }
}
