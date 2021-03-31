# SimpleLogin Create React App Example

NOTE: Simplelogin is currently in beta and is currently subject to breaking API changes. It is ready to use for the purposes of learning and side projects, but should not yet be used in mission-critical production environments.

This projects is a complete app that demonstrates its usage. Your feedback is very much welcome.

## Let's go

To get started, sign up at [SimpleLogin](https://simplelog.in/) and create a new project. Then, copy the generated API key.

Rename `.env.example` to `.env` and set `REACT_APP_SIMPLELOGIN_KEY` to the API key for your project.

Create react app will read the value from the environment and associate your app with your newly created project, so you'll be able to see new users as they sign up in the _Users_ tab.

## Run the server

Clone the repository

```
git clone https://github.com/kunalgorithm/simplelogin-cra-example.git
cd simplelogin-cra-example
```

Install dependencies

```
yarn install
```

and run the development server

```
yarn start
```

## Why is this cool?

You can now deploy your app and sign up users, all activated with a minimal amount of code.

If you open up `App.tsx` you'll be faced with literally all the required code needed to enable this.

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

## Questions?

- Read the [docs](https://simplelog.in/docs) for info
- Contact me at [`me@kunal.sh`](mailto:me@kunal.sh)
