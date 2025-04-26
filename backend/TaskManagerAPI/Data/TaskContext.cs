using TaskManagerAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace TaskManagerAPI.Data
{
    public class TaskContext : DbContext
    {
        public TaskContext(DbContextOptions<TaskContext> options) : base(options) { }

        public DbSet<TaskItem> Tasks { get; set; } // Ensure TaskItem is recognized
    }
}
