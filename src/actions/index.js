import * as ActionType from '../constants/ActionTypes';

export const listAll = () => {
    return {
        type: ActionType.LIST_ALL
    }
};

export const addTask = (task) => {
    return {
        type: ActionType.ADD_TASK,
        task
    }
};

export const toggleForm = () => {
    return {
        type: ActionType.TOGGLE_FORM
    }
};

export const openForm = () => {
    return {
        type: ActionType.OPEN_FORM
    }
};

export const closeForm = () => {
    return {
        type: ActionType.CLOSE_FORM
    }
};

export const onUpdateStatus = (taskId) => {
    return {
        type: ActionType.TOGGLE_STATUS_TASK,
        taskId
    }
};

export const onDeleteTask = (taskId) => {
    return {
        type: ActionType.DELETE_TASK,
        taskId
    }
};

export const onOpenTaskToUpdate = (task) => {
    return {
        type: ActionType.OPEN_TASK_TO_UPDATE,
        task
    }
};

export const onOpenTaskToCreate = (task) => {
    return {
        type: ActionType.OPEN_TASK_TO_CREATE,
        task
    }
};

export const onUpdateTask = (task) => {
    return {
        type: ActionType.UPDATE_TASK,
        task
    }
};
