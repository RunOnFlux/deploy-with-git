# Deploying an Elixir App on Flux Network with Deploy With Git

This is a minimal Elixir/OTP HTTP app ready to deploy on [Flux Network](https://runonflux.com) using [Deploy With Git](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/).

## How Flux Detects This App

Flux identifies Elixir projects by `mix.exs`. It then:

1. Reads Elixir and Erlang/OTP versions from `.tool-versions`
2. Installs production dependencies with `MIX_ENV=prod mix deps.get --only prod`
3. Compiles the project and creates a production release with `mix release`
4. Starts the generated release in the foreground

The server binds to `0.0.0.0` and reads the port from `PORT`, as required by Flux. This sample has no third-party dependencies.

## Deploy

[<img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" />](https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=elixir&plan=free)

Or configure it manually:

1. Go to [orbit.app.runonflux.io](https://orbit.app.runonflux.io/).
2. Select this repository, the `master` branch, and project path `elixir`.
3. Select the free plan and set the application port to `8080`.
4. Review and register the app.

The app will be available at a URL like `https://YOUR-APP-NAME.app.runonflux.com`.

## Configuration

| Variable | Description | Default |
|---|---|---|
| `PORT` | Port and interface used by the HTTP server | `8080` |
| `ELIXIR_VERSION` | Overrides the Elixir version in `.tool-versions` | `1.20.2` |
| `OTP_VERSION` | Overrides the Erlang/OTP version in `.tool-versions` | `28.4` |
| `BUILD_COMMAND` | Overrides the automatic Mix build and release | — |
| `RUN_COMMAND` | Overrides production release startup | — |

Set the Flux application port to the same value as `PORT`. Orbit also exports `MIX_ENV=prod` automatically.

## Run Locally

```bash
mix run --no-halt
```

Open [http://localhost:8080](http://localhost:8080). The health endpoint is [http://localhost:8080/health](http://localhost:8080/health).

## Resources

- [Deploy With Git overview](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/)
- [Deploying Elixir and Erlang applications](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/guides/deploying-elixir-erlang)
- [Elixir](https://elixir-lang.org/)
