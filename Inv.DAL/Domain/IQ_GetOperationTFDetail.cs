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
    
    public partial class IQ_GetOperationTFDetail
    {
        public int OperationTFDetailID { get; set; }
        public Nullable<int> OperationTFID { get; set; }
        public Nullable<int> OperationItemID { get; set; }
        public Nullable<int> ItemID { get; set; }
        public Nullable<decimal> SendQty { get; set; }
        public Nullable<decimal> RecQty { get; set; }
        public string ItemCode { get; set; }
        public string IT_DescA { get; set; }
        public string IT_DescE { get; set; }
        public string FamilyCode { get; set; }
        public string FamDescA { get; set; }
        public string Fam_DescE { get; set; }
    }
}
