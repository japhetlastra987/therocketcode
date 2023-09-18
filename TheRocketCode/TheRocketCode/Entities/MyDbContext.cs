using Microsoft.EntityFrameworkCore;

namespace TheRocketCode.Entities
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySql("server=data-avimo.cgriqmyweq5c.us-east-2.rds.amazonaws.com;port=3306;database=users_test_japhet;user=testing;password=Pruebas%ALI%2020", new MySqlServerVersion(new Version(8, 0, 28)));
            }
        }

        public DbSet<Usuario> users_test_japhet { get; set; }
    }

}

