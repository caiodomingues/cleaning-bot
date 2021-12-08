# Cleaning Bot

🤖 This bot is designed to clean up the chat with some predefined rules.

## Rules

### Defining a specific channel

Add `SPECIFIC_CHANNEL` to your `.env` file, where the value is the ID of the channel you want to clean.

- The bot will only clean up the channel you specify.
- If you don't specify a channel, the bot will clean up the current channel.

### Defining a specific user (any user/bot)

Add `SPECIFIC_USER` to your `.env` file, where the value is the ID of the user you want to clean.

- The bot will only clean up the user you specify.
- If you don't specify a user, the bot will clean up **ANY** user.

## Installation

Clone project

```sh
git clone git@github.com:caiodomingues/cleaning-bot.git your-app-name
cd your-app-name
```

Install dependencies

```sh
yarn install # or just yarn
```

Create environment variable files `.env` based on [.env.example](./.env.example) on project root folder

```sh
# linux / macOS
cp .env.example .env
```

```sh
# windows
copy .env.example .env
```

## Running on development environment

> ⚠ Remember to follow the [Installation](#Installation) steps before proceeding

Running the bot

```sh
yarn dev # or cross-env NODE_ENV=development env-cmd -f .env tsnd --transpile-only --respawn --no-notify --ignore-watch node_modules ./src/index.ts
```

> ⚠ Note that the loaded environment variables file is `.env`

## Running on production environment

### With Docker

> ⚠ Remember to follow the [Installation](#Installation) steps before proceeding

```sh
docker build -t your-app-name .
docker run -it --rm -e DISCORD_TOKEN="YOUR TOKEN HERE" --name your-app-name your-app-name
```

### With Docker Compose

> ⚠ Remember to follow the [Installation](#Installation) steps before proceeding

```sh
docker compose up -d
```

> ⚠ Note that the loaded environment variables file is `.env`

### Without Docker Compose

> ⚠ Remember to follow the [Installation](#Installation) steps before proceeding

Directly

```sh
yarn deploy
```

> ⚠ Note that the loaded environment variables file is `.env`

Manually

```sh
yarn build
```

Startup bot

```sh
yarn start # or cross-env NODE_ENV=production env-cmd -f .env node ./dist/index.js
```

> ⚠ Note that the loaded environment variables file is `.env`
