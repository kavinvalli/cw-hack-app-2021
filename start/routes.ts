/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', async ({ view }) => {
    return view.render('welcome')
  })

  Route.get('/login', 'AuthController.getLogin')

  Route.get('/register', 'AuthController.getRegister')
}).middleware('guest')

Route.post('/login', 'AuthController.login')

Route.post('/register', 'AuthController.register')

Route.post('/logout', 'AuthController.logout')

Route.get('/dashboard', 'MainsController.getDashboard').middleware('auth')

Route.post('/enter-details', 'MainsController.enterRecords').middleware('auth')

Route.get('/connect/github', 'GithubsController.redirect').middleware('auth')
Route.get('/connect/github/callback', 'GithubsController.callback').middleware('auth')

//Route.get('/connect/facebook', 'FacebooksController.redirect').middleware('auth')
//Route.get('/connect/facebook/callback', 'FacebooksController.callback').middleware('auth')

Route.post('/api/v1/join-meet', 'ExtensionsController.joinedMeet')
Route.post('/api/v1/leave-meet', 'ExtensionsController.leftMeet')
Route.get('/api/v1/list-meet-people', 'ExtensionsController.listMeetPeople')

//Route.get('/connect/linkedin', 'LinkedinsController.redirect').middleware('auth')
//Route.get('/connect/linkedin/callback', 'LinkedinsController.callback').middleware('auth')

//Route.post('/register', async ({ auth, request }) => {})

//Route.post('/login', async ({ auth, request }) => {
//const email = request.input('email')
//const password = request.input('password')
//})
