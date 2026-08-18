-module(hello_flux_sup).
-behaviour(supervisor).

-export([start_link/0, init/1]).

start_link() ->
    supervisor:start_link({local, ?MODULE}, ?MODULE, []).

init([]) ->
    Child = #{id => hello_flux_server,
              start => {hello_flux_server, start_link, []},
              restart => permanent,
              shutdown => 5000,
              type => worker,
              modules => [hello_flux_server]},
    {ok, {{one_for_one, 1, 5}, [Child]}}.
