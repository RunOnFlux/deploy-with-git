use gotham::helpers::http::response::create_response;
use gotham::prelude::*;
use gotham::router::builder::*;
use gotham::router::Router;
use gotham::state::State;
use hyper::{Body, Response, StatusCode};

const HTML: &str = r#"<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello, Flux!</title>
  <style>
    body { display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background: #f4f4f4; }
    h1 { font-size: 3rem; color: #2563eb; font-family: sans-serif; }
  </style>
</head>
<body>
  <h1>Hello, Flux!</h1>
</body>
</html>"#;

fn index(state: State) -> (State, Response<Body>) {
    let res = create_response(&state, StatusCode::OK, mime::TEXT_HTML_UTF_8, HTML.to_string());
    (state, res)
}

fn router() -> Router {
    build_simple_router(|route| {
        route.get("/").to(index);
    })
}

#[tokio::main]
async fn main() {
    let port: u16 = std::env::var("PORT")
        .unwrap_or_else(|_| "8080".to_string())
        .parse()
        .expect("PORT must be a number");

    let addr = format!("0.0.0.0:{port}");
    println!("Listening on {addr}");
    gotham::start(addr, router()).await.unwrap();
}
