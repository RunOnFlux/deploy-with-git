import 'dart:io';

Future<void> main() async {
  final port = int.parse(
    Platform.environment['PORT'] ??
        Platform.environment['APP_PORT'] ??
        '8080',
  );
  final server = await HttpServer.bind(InternetAddress.anyIPv4, port);

  stdout.writeln('Hello Flux listening on port $port');

  await for (final request in server) {
    request.response.headers.contentType = ContentType.text;
    request.response.write(
      request.uri.path == '/health' ? 'ok' : 'Hello from Dart on Flux!',
    );
    await request.response.close();
  }
}
