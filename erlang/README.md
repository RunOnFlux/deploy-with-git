# Deploying an Erlang App on Flux Network with Deploy With Git

This is a minimal Erlang/OTP HTTP app ready to deploy on [Flux Network](https://runonflux.com) using [Deploy With Git](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/).

## How Flux Detects This App

Flux identifies Erlang projects by `rebar.config`. It then:

1. Reads the Erlang/OTP version from `.tool-versions`
2. Installs Rebar3 and resolves dependencies
3. Builds a production relx release with `rebar3 as prod release`
4. Starts the generated release in the foreground

The supervised server binds to `0.0.0.0` and reads the port from `PORT`. This sample has no third-party dependencies.

## Deploy

[<img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" />](https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=erlang&plan=free)

Or configure it manually:

1. Go to [orbit.app.runonflux.io](https://orbit.app.runonflux.io/).
2. Select this repository, the `master` branch, and project path `erlang`.
3. Select the free plan and set the application port to `8080`.
4. Review and register the app.

The app will be available at a URL like `https://YOUR-APP-NAME.app.runonflux.com`.

## Configuration

| Variable | Description | Default |
|---|---|---|
| `PORT` | Port used by the HTTP server | `8080` |
| `OTP_VERSION` | Overrides the Erlang/OTP version in `.tool-versions` | `28.4` |
| `REBAR3_VERSION` | Overrides Orbit's Rebar3 version | Orbit default |
| `BUILD_COMMAND` | Overrides the automatic Rebar3 release build | — |
| `RUN_COMMAND` | Overrides relx release startup | — |

Set the Flux application port to the same value as `PORT`.

## Run Locally

```bash
rebar3 shell
```

Open [http://localhost:8080](http://localhost:8080). The health endpoint is [http://localhost:8080/health](http://localhost:8080/health).

## Resources

- [Deploy With Git overview](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/)
- [Deploying Elixir and Erlang applications](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/guides/deploying-elixir-erlang)
- [Erlang](https://www.erlang.org/)
