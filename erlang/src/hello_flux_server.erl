-module(hello_flux_server).
-behaviour(gen_server).

-export([start_link/0]).
-export([init/1, handle_call/3, handle_cast/2, handle_info/2]).

start_link() ->
    gen_server:start_link({local, ?MODULE}, ?MODULE, [], []).

init([]) ->
    Port = list_to_integer(port()),
    {ok, Listen} = gen_tcp:listen(Port, [binary, {packet, raw}, {active, false},
                                          {reuseaddr, true}, {ip, {0, 0, 0, 0}}]),
    self() ! accept,
    logger:info("Hello Flux listening on port ~p", [Port]),
    {ok, Listen}.

handle_info(accept, Listen) ->
    {ok, Socket} = gen_tcp:accept(Listen),
    {ok, Request} = gen_tcp:recv(Socket, 0, 5000),
    Body = case Request of
        <<"GET /health ", _/binary>> -> <<"ok">>;
        _ -> <<"Hello from Erlang on Flux!">>
    end,
    Length = integer_to_binary(byte_size(Body)),
    gen_tcp:send(Socket, [<<"HTTP/1.1 200 OK\r\ncontent-type: text/plain; charset=utf-8\r\ncontent-length: ">>,
                          Length, <<"\r\nconnection: close\r\n\r\n">>, Body]),
    gen_tcp:close(Socket),
    self() ! accept,
    {noreply, Listen}.

handle_call(_Request, _From, State) ->
    {reply, ok, State}.

handle_cast(_Request, State) ->
    {noreply, State}.

port() ->
    case os:getenv("PORT") of
        false -> "8080";
        Value -> Value
    end.
