using System;
using System.Collections.Generic;

#nullable disable

namespace Catalog.Models
{
    public partial class Product
    {
        public int Id { get; set; }
        public int? ProductId { get; set; }
        public int? ProductInventory { get; set; }
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
    }
}
