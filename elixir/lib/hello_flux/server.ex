defmodule HelloFlux.Server do
  require Logger

  def listen do
    port = System.get_env("PORT", "8080") |> String.to_integer()

    {:ok, socket} =
      :gen_tcp.listen(port, [
        :binary,
        packet: :raw,
        active: false,
        reuseaddr: true,
        ip: {0, 0, 0, 0}
      ])

    Logger.info("Hello Flux listening on port #{port}")
    accept(socket)
  end

  defp accept(socket) do
    {:ok, client} = :gen_tcp.accept(socket)
    serve(client)
    accept(socket)
  end

  defp serve(client) do
    {:ok, request} = :gen_tcp.recv(client, 0, 5_000)
    body = if String.starts_with?(request, "GET /health "), do: "ok", else: "Hello from Elixir on Flux!"

    response = [
      "HTTP/1.1 200 OK\r\n",
      "content-type: text/plain; charset=utf-8\r\n",
      "content-length: #{byte_size(body)}\r\n",
      "connection: close\r\n\r\n",
      body
    ]

    :gen_tcp.send(client, response)
    :gen_tcp.close(client)
  end
end
