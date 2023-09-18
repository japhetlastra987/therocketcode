using Microsoft.AspNetCore.Mvc;
using TheRocketCode.Entities;

namespace TheRocketCode.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
       

        private readonly ILogger<UsersController> _logger;
        MyDbContext context;

        public UsersController(ILogger<UsersController> logger, MyDbContext context)
        {
            _logger = logger;
            this.context = context;
        }

        [HttpPost]
        public IActionResult Post(Usuario usuario)
        {
            context.users_test_japhet.Add(usuario);
            context.SaveChanges();
            return Ok();
        }
    }
}