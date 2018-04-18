using OrderOnlineAPI.dbModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Web;

namespace LibraryManageSys.DAL
{
    /// <summary>
    /// 简单工厂生产DbConext子类
    /// <remarks>创建：2014.8.27</remarks>
    /// </summary>
    public class ContextFactory
    {
        public static orderOnlineModelContainer GetCurrentContext() {
            orderOnlineModelContainer _dbContext = CallContext.GetData("orderOnlineModel") as orderOnlineModelContainer;
            if (_dbContext == null) {
                _dbContext = new orderOnlineModelContainer();
                CallContext.SetData("orderOnlineModel", _dbContext);
            }
            return _dbContext;        
        }
    }
}