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
    
    public partial class IProc_Prnt_PurPurchaseOrder_Result
    {
        public Nullable<int> Comp { get; set; }
        public Nullable<int> Bra { get; set; }
        public string CompNameA { get; set; }
        public string CompNameE { get; set; }
        public string BraNameA { get; set; }
        public string BraNameE { get; set; }
        public string LoginUser { get; set; }
        public System.DateTime PrintDate { get; set; }
        public int PurOrderID { get; set; }
        public Nullable<int> TrNo { get; set; }
        public string RefNO { get; set; }
        public Nullable<System.DateTime> TrDate { get; set; }
        public string TrDateH { get; set; }
        public Nullable<byte> Status { get; set; }
        public Nullable<int> SalesmanId { get; set; }
        public Nullable<int> VendorID { get; set; }
        public Nullable<byte> VATType { get; set; }
        public Nullable<bool> IsCash { get; set; }
        public string Remarks { get; set; }
        public Nullable<decimal> Total { get; set; }
        public Nullable<decimal> DiscountPrcnt { get; set; }
        public Nullable<decimal> DiscountAmount { get; set; }
        public Nullable<decimal> VatAmount { get; set; }
        public Nullable<decimal> NetDue { get; set; }
        public Nullable<bool> IsPosted { get; set; }
        public Nullable<int> VoucherNo { get; set; }
        public Nullable<byte> VoucherType { get; set; }
        public Nullable<System.DateTime> CreatedAt { get; set; }
        public string CreatedBy { get; set; }
        public Nullable<System.DateTime> UpdatedAt { get; set; }
        public string UpdatedBy { get; set; }
        public Nullable<int> CompCode { get; set; }
        public Nullable<int> BranchCode { get; set; }
        public Nullable<int> CurrencyID { get; set; }
        public string Slsm_NameA { get; set; }
        public string Slsm_NameE { get; set; }
        public string Vnd_NameA { get; set; }
        public string vnd_NameE { get; set; }
        public string VendorCode { get; set; }
        public string sls_Code { get; set; }
        public Nullable<bool> IsReceived { get; set; }
        public string DliveryConditions { get; set; }
        public string ShipmentConditions { get; set; }
        public string ValidityPeriod { get; set; }
        public Nullable<int> Serial { get; set; }
        public Nullable<int> ItemID { get; set; }
        public Nullable<int> UnitID { get; set; }
        public Nullable<decimal> POStockQty { get; set; }
        public Nullable<decimal> POQty { get; set; }
        public Nullable<decimal> UnitPrice { get; set; }
        public Nullable<decimal> VatPrc { get; set; }
        public Nullable<decimal> dt_VatAmount { get; set; }
        public Nullable<decimal> BonusQty { get; set; }
        public string ItemCode { get; set; }
        public string itm_DescA { get; set; }
        public string itm_DescE { get; set; }
        public string FamilyCode { get; set; }
        public string Fm_DescA { get; set; }
        public string Fm_DescE { get; set; }
        public string UomCode { get; set; }
        public string Uom_DescA { get; set; }
        public string UOM_DescE { get; set; }
        public string vat_Desc { get; set; }
        public string Cur_DescA { get; set; }
        public string Cur_DescL { get; set; }
        public string CurrencyCode { get; set; }
    }
}
