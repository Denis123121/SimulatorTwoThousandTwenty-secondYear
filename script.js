class Currency{
    #platinumCoins;
    #goldCoins;
    #silverCoins;

    constructor() {
        this.#platinumCoins = 1;
        this.#goldCoins = 10;
        this.#silverCoins = 1000;
    }

    getPlatinum() {
        return this.#platinumCoins;
    }

    getGold() {
        return this.#goldCoins;
    }

    getSilver() {
        return this.#silverCoins;
    }
}

/*window.onload = function () {
    let json = localStorage.getItem("todoItemsManager");
    if (json != null) {
        let obj = JSON.parse(json);

        todoItemsManager.globalId = obj.globalId;

        let todos = [];
        obj.todoItems.forEach(todo => {
            todos.push(new TodoItem(todo.id, new Date(todo.date), todo.description));
        })

        todoItemsManager.todoItems = todos;

        //показать изменения
    }
};*/