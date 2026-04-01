const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());


let tasks = [];
let nextId = 1;

// 1. POST /tasks: Tạo task mới (ĐÃ FIX - LINH HOẠT HƠN)
app.post('/tasks', (req, res) => {
    const title = req.body.title || "New Task Test";

    const newTask = {
        id: nextId++,
        title: title,
        completed: false
    };

    tasks.push(newTask);
    console.log("-> Đã tạo task mới thành công:", newTask);
    res.status(201).json(newTask);
});

// 2. GET /tasks: Lấy toàn bộ danh sách
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// 3. GET /tasks/:id: Lấy chi tiết
app.get('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json(task);
});

// 4. PUT /tasks/:id: Cập nhật
app.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, completed } = req.body;
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) return res.status(404).json({ error: "Task not found" });

    if (title !== undefined) tasks[index].title = title;
    if (completed !== undefined) tasks[index].completed = completed;
    res.json(tasks[index]);
});

// 5. DELETE /tasks/:id: Xóa
app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const initialLength = tasks.length;
    tasks = tasks.filter(t => t.id !== id);
    if (tasks.length === initialLength) return res.status(404).json({ error: "Task not found" });
    res.status(204).send();
});

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`\n=== Task Management Server: http://localhost:${PORT} ===`);
    console.log(`1. Dùng POST http://localhost:${PORT}/tasks để tạo mới.`);
});