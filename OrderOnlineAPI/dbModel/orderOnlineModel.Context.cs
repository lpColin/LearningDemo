﻿//------------------------------------------------------------------------------
// <auto-generated>
//     此代码已从模板生成。
//
//     手动更改此文件可能导致应用程序出现意外的行为。
//     如果重新生成代码，将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace OrderOnlineAPI.dbModel
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class orderOnlineModelContainer : DbContext
    {
        public orderOnlineModelContainer()
            : base("name=orderOnlineModelContainer")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<order_info> order_info { get; set; }
        public virtual DbSet<order_item> order_item { get; set; }
        public virtual DbSet<production_info> production_info { get; set; }
        public virtual DbSet<user_info> user_info { get; set; }
        public virtual DbSet<production_picture> production_picture { get; set; }
    }
}
