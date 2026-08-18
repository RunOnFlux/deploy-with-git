-module(hello_flux_app).
-behaviour(application).

-export([start/2, stop/1]).

start(_StartType, _StartArgs) ->
    hello_flux_sup:start_link().

stop(_State) ->
    ok.
