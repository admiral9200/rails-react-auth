### About
`rails-react-auth` is an out of the box solution to have a rails server (API) with devise and JWT support and a React application with a basis authentication system.

Also, we include material-ui as dependency for the UI, but this is completely optional.

---

### Running the Example Locally
```
1. git clone https://github.com/sanchan/rails-react-auth.git
2. cd rails-react-auth

Server
1. cd server
2. bundle install
3. rails db:setup
4. rails s

Client
1. cd client
2. npm install
3. npm start
```

Yay! You got the application working on http://localhost:4000 (the API works on port 3000)

For development for the client application you can open a new terminal and run:

```
npm run watch
```

to recompile the client everytime that a file changes.
