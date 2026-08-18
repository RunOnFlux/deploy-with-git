defmodule HelloFlux.Application do
  use Application

  @impl true
  def start(_type, _args) do
    children = [{Task, fn -> HelloFlux.Server.listen() end}]
    Supervisor.start_link(children, strategy: :one_for_one, name: HelloFlux.Supervisor)
  end
end
