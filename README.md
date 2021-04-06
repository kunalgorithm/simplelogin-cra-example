# SimpleLogin Create React App Example

[SimpleLogin](https://simplelog.in) lets you add authentication to your app with just a couple lines of code. This project is a complete React app, bootstrapped with [Create React App](https://github.com/facebook/create-react-app), that demonstrates its usage. Your feedback is very much welcome.

> NOTE: Simplelogin is currently in beta and is currently subject to breaking API changes. It is ready to use for the purposes of learning and side projects, but should not yet be used in mission-critical production environments.

## Let's go

To get started, sign up at [SimpleLogin](https://simplelog.in/) and create a new project. Then, copy the generated API key, which we'll add to this project momentarily.

## Run the server

Clone the repository

```
git clone https://github.com/kunalgorithm/simplelogin-cra-example.git
cd simplelogin-cra-example
```

Rename `.env.example` to `.env` and set `REACT_APP_SIMPLELOGIN_KEY` to the API key for your project.

Create react app will read the value from the environment and associate your app with your newly created project, so you'll be able to see new users as they sign up in the _Users_ tab of your SimpleLogin [dashboard](https://simplelog.in/app).

Install dependencies

```
yarn install
```

and run the development server

```
yarn start
```

## Why is this cool?

You can now deploy your app and sign up users, all with a minimal amount of code.

If you open up `App.tsx` you'll be faced with all the required code needed to enable this.

At the top, we import and initialize the SimpleLogin object

```tsx
import SimpleLogin from "@simplelogin/client";
const simple = new SimpleLogin(process.env.REACT_APP_SIMPLELOGIN_KEY!);
```

This pulls from the environment variable you set above.

When the user enters and submits the form, we call `loginOrSignup` as follows

```tsx
onSubmit={async (e) => {
        e.preventDefault();
        await simple.loginOrSignup({ email });
    }}
```

This also renders a modal indicating to the user that they should check their email inbox, created by the JSX element included in the render method above

```tsx
<simple.LoginModal />
```

When the user clicks the link, it will direct them to a browser with the secret link included in the email, verify their identity, and authenticate the original browser window on which they signed up.

Now, you can use the `userUser` react hook to retrieve the authenticated user within any component.

```tsx
const { user, logout } = simple.useUser();
```

Moreover, the `user` object contains properties for `email`, `emailVerified`, and a unique string for `uid` for usage to synchronize with a backend or database.

SimpleLogin entirely handles the management of users, sessions and cookies so you can focus on the more unique features of your application.

## Questions?

- Read the [docs](https://simplelog.in/docs) for info (in progress)
- Contact me at [`me@kunal.sh`](mailto:me@kunal.sh)
