using Microsoft.EntityFrameworkCore;
using TaskManagerAPI.Data;  // ✅ Make sure this is added

var builder = WebApplication.CreateBuilder(args);

// ✅ Add this code to configure Entity Framework with SQL Server
builder.Services.AddDbContext<TaskContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);

// Add services to the container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
app.MapGet("/", () => "API is running!");

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseRouting(); // 👈 Ensure this is present
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();  //  Ensure this maps your controllers
});
//app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
