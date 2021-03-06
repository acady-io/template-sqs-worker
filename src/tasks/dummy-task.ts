import {Task} from "acady-task-worker";

export default class DummyTask extends Task {

    work(taskData: any) {
        console.log(taskData);
    }

}
