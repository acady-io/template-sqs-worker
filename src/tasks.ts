import DummyTask from "./tasks/dummy-task";
import {TaskProcessor} from "acady-task-worker";

const taskProcessor = new TaskProcessor();

taskProcessor.registerTask('DummyTask', DummyTask);

export default taskProcessor;
