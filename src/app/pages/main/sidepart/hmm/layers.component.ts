import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-layers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './layers.component.html',
  styleUrls: ['./layers.component.scss'],
})
export class LayersComponent {
  tasks: any[] = [];
  editingTask: any = null;
  newStepText: string = '';
  originalTaskRef: any = null;

  constructor() {
    this.loadTasks();
  }

  get completedTasks() {
    return this.tasks.filter(t => t.checked).length;
  }

  get inProgressTasks() {
    return this.tasks.filter(t => !t.checked && t.progress > 0 && t.progress < 100).length;
  }

  get overallProgress() {
    if (!this.tasks.length) return 0;
    const total = this.tasks.reduce((sum, t) => sum + (t.progress || 0), 0);
    return Math.round(total / this.tasks.length);
  }

  loadTasks() {
    const saved = localStorage.getItem('tasks');
    if (saved) this.tasks = JSON.parse(saved);
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  addTask() {
    this.tasks.push({
      title: '',
      description: '',
      progress: 0,
      checked: false,
      subtasks: []
    });
    this.saveTasks();
  }

  deleteTask(task: any) {
    this.tasks = this.tasks.filter(t => t !== task);
    this.saveTasks();
  }

  editTask(task: any) {
  this.editingTask = JSON.parse(JSON.stringify(task));
  this.originalTaskRef = task;

  if (this.editingTask && this.editingTask.description) {
    const lines: string[] = this.editingTask.description
      .split('\n')
      .map((line: string) => line.trim())
      .filter((line: string) => line);

    this.editingTask.subtasks = lines.map((text: string) => ({
      text,
      done: false,
    }));
  }
}


  saveTaskEdits() {
    if (this.editingTask) {
      const index = this.tasks.indexOf(this.originalTaskRef);
      if (index > -1) {
        const doneCount = this.editingTask.subtasks?.filter((s: any) => s.done).length || 0;
        const total = this.editingTask.subtasks?.length || 0;
        const progress = total ? Math.round((doneCount / total) * 100) : 0;

        this.editingTask.progress = progress;
        this.tasks[index] = { ...this.editingTask };
        this.saveTasks();
      }
      this.editingTask = null;
    }
  }

  cancelEdit() {
    this.editingTask = null;
  }

  toggleSubtask(task: any, sub: any) {
    sub.done = !sub.done;
    const total = task.subtasks?.length || 0;
    const done = task.subtasks?.filter((s: any) => s.done).length || 0;
    task.progress = total ? Math.round((done / total) * 100) : 0;
    this.saveTasks();
  }
}
