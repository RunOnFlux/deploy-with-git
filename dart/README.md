# Deploying a Dart App on Flux Network with Deploy With Git

This is a minimal `dart:io` HTTP app ready to deploy on [Flux Network](https://runonflux.com) using [Deploy With Git](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/).

## How Flux Detects This App

Flux identifies Dart server projects by `pubspec.yaml`. It then:

1. Reads the Dart SDK version from `.dart-version`
2. Resolves dependencies with `dart pub get`
3. Finds the conventional `bin/server.dart` entrypoint
4. Compiles it to a native executable with `dart compile exe`
5. Starts the compiled executable

The server binds to `0.0.0.0` and reads `PORT` (or `APP_PORT`). This sample uses only the Dart standard library.

## Deploy

[<img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" />](https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=dart&plan=free)

Or configure it manually:

1. Go to [orbit.app.runonflux.io](https://orbit.app.runonflux.io/).
2. Select this repository, the `master` branch, and project path `dart`.
3. Select the free plan and set the application port to `8080`.
4. Review and register the app.

The app will be available at a URL like `https://YOUR-APP-NAME.app.runonflux.com`.

## Configuration

| Variable | Description | Default |
|---|---|---|
| `PORT` | Port used by the HTTP server | `8080` |
| `DART_VERSION` | Overrides the SDK version in `.dart-version` | `3.12.2` |
| `DART_ENTRYPOINT` | Overrides the detected server entrypoint | `bin/server.dart` |
| `BUILD_COMMAND` | Overrides native executable compilation | — |
| `RUN_COMMAND` | Overrides compiled executable startup | — |

Set the Flux application port to the same value as `PORT`.

## Run Locally

```bash
dart run bin/server.dart
```

Open [http://localhost:8080](http://localhost:8080). The health endpoint is [http://localhost:8080/health](http://localhost:8080/health).

## Resources

- [Deploy With Git overview](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/)
- [Deploying Dart server applications](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/guides/deploying-dart)
- [Dart server documentation](https://dart.dev/server)
