use thruster::{m, middleware_fn, App, BasicContext as Ctx, Context, MiddlewareNext, MiddlewareResult, Request, Server, ThrusterServer};

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

#[middleware_fn]
async fn index(mut context: Ctx, _next: MiddlewareNext<Ctx>) -> MiddlewareResult<Ctx> {
    context.set("Content-Type", "text/html; charset=utf-8");
    context.body(HTML);
    Ok(context)
}

fn main() {
    let port: u16 = std::env::var("PORT")
        .unwrap_or_else(|_| "8080".to_string())
        .parse()
        .expect("PORT must be a number");

    println!("Listening on 0.0.0.0:{port}");

    let app = App::<Request, Ctx, ()>::new_basic().get("/", m![index]);

    Server::new(app).start("0.0.0.0", port);
}
