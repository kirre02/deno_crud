# Deno Api

A simple REST API trying out the npm compatibility feature. The packages that was used for this project was express and mongoose

## requirements

* **[Deno](https://deno.land/manual/getting_started/installation)**
* a deno plugin (nvim: **[nvim-lspconfig](https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md#denols)**, vscode: **[deno extension](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)**)
* mongoDB(local or cloud)
* HTTP Client, e.g. Postman, Curl, ThunderClient

## routes
```js
GET http://localhost:9444/tasks | Gets all the tasks

GET http://localhost:9444/task/:id | Gets a task by id

PUT http://localhost:9444/task/:id | Updates a task by id

POST http://localhost:9444/task/create | Gets a task by id

DELETE http://localhost:9444/task/:id | Delete a task by id 