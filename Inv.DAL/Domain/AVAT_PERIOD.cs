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
    
    public partial class AVAT_PERIOD
    {
        public int COMP_CODE { get; set; }
        public int VAT_YEAR { get; set; }
        public int PERIOD_CODE { get; set; }
        public Nullable<System.DateTime> FROM_DATE { get; set; }
        public Nullable<System.DateTime> TO_DATE { get; set; }
        public Nullable<byte> STATUS { get; set; }
        public Nullable<int> VOUCHER_CODE { get; set; }
        public Nullable<decimal> SALES_VAT { get; set; }
        public Nullable<decimal> PUR_VAT { get; set; }
        public Nullable<decimal> NETVAT_AMOUNT { get; set; }
        public Nullable<decimal> TOTALPERIODVAT { get; set; }
        public Nullable<decimal> CORRECTIONS { get; set; }
        public Nullable<decimal> VAT_PREVBALANCE { get; set; }
    }
}
