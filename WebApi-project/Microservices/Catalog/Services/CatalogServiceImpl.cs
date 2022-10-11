using Catalog.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Catalog.Services
{
    public class CatalogServiceImpl:ICatalogService
    {
        CatalogDBContext db;
        public CatalogServiceImpl(CatalogDBContext _db)
        {
            db = _db;
        }

        public IEnumerable<Product> findall()
        {
            return db.Products;
        }
    }
}
