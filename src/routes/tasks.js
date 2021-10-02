import { Router } from "express";
import { deleteTask, getTask, getTasks, getTasksCount, saveTask, updateTask } from "../controllers/tasks";


const router = Router();
//documentacion va antes de las rutas

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: enpoind de tareas // para agrupar las enpoind
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *     summary: Envia todas las tareas
 *     tags: [Tasks]
 */
router.get('/tasks', getTasks);

/**
 * @swagger
 * /tasks/count:
 *  get:
 *     summary: numero de total de tareas
 *     tags: [Tasks]
 */
router.get('/tasks/count', getTasksCount);

/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *     summary: tareas por id
 *     tags: [Tasks]
 */
router.get('/tasks/:id', getTask);

/**
 * @swagger
 * /tasks:
 *  post:
 *     summary: guarda una tarea
 */
router.post('/tasks', saveTask);

/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *     summary: elimina una tarea segun su id
 */
router.delete('/tasks/:id', deleteTask);

/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *     summary: modifica una tarea segun su id
 */
router.put('/tasks/:id', updateTask);

export default router;