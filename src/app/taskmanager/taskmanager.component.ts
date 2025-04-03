import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-taskmanager',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './taskmanager.component.html',
  styleUrl: './taskmanager.component.css'
})
export class TaskmanagerComponent {
  searchQuery: string = '';
  tasks = [
    { id: 1, text: 'Complete project report', completed: false },
    { id: 2, text: 'Buy groceries', completed: false },
    { id: 3, text: 'Prepare presentation', completed: false },
    { id: 4, text: 'Exercise for 30 mins', completed: false },
  ];

  filteredTasks() {
    return this.tasks.filter((task) =>
      task.text.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  addTask(newTask: string) {
    if (newTask.trim()) {
      this.tasks.push({
        id: this.tasks.length + 1,
        text: newTask,
        completed: false,
      });
    }
  }

  editTask(task: any) {
    const newText = prompt('Edit task:', task.text);
    if (newText !== null) {
      task.text = newText;
    }
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  markComplete(task: any) {
    task.completed = !task.completed;
  }

    //  Create a getter method instead of using `every()` in the template
    allTasksIncomplete(): boolean {
      return this.tasks.every((t) => !t.completed);
    }

     //  Create a method to filter completed tasks
    getCompletedTasks() {
      return this.tasks.filter(task => task.completed);
    }

}
