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
    
    public partial class G_LnkTrans_TempVchr
    {
        public int Seq { get; set; }
        public string User_Code { get; set; }
        public int SERIAL { get; set; }
        public Nullable<int> COMP_CODE { get; set; }
        public Nullable<int> BRANCH_CODE { get; set; }
        public string ACC_CODE { get; set; }
        public Nullable<decimal> DEBIT { get; set; }
        public Nullable<decimal> CREDIT { get; set; }
        public string CC_CODE { get; set; }
        public string LINE_DESCA { get; set; }
        public string LINE_DESCE { get; set; }
        public string Tr_Code { get; set; }
        public Nullable<int> Tr_No { get; set; }
        public Nullable<int> ROW_ID { get; set; }
    }
}
