using DemoMvc.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Web;

namespace DemoMvc.Common
{
    /// <summary>
    /// 简单工厂生产DbConext子类
    /// <remarks>创建：2014.8.27</remarks>
    /// </summary>
    public static class ContextFactory
    {
        public static DemoDBContext GetCurrentContext() {
            DemoDBContext _dbContext = CallContext.GetData("DemoMvc") as DemoDBContext;



            if (_dbContext == null) {
                _dbContext = new DemoDBContext();
                CallContext.SetData("DemoMvc", _dbContext);
            }
            return _dbContext;        
        }


    }
}