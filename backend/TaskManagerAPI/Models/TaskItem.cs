namespace TaskManagerAPI.Models
{
    public class TaskItem
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty; // Default value
        public string Description { get; set; } = string.Empty; // Default value
        public bool IsCompleted { get; set; }
    }
}
