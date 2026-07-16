use tide::Request;

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

async fn index(_req: Request<()>) -> tide::Result {
    let mut res = tide::Response::new(200);
    res.set_body(HTML);
    res.set_content_type("text/html;charset=utf-8");
    Ok(res)
}

#[async_std::main]
async fn main() -> tide::Result<()> {
    let port: u16 = std::env::var("PORT")
        .unwrap_or_else(|_| "8080".to_string())
        .parse()
        .expect("PORT must be a number");

    let mut app = tide::new();
    app.at("/").get(index);

    println!("Listening on 0.0.0.0:{port}");
    app.listen(format!("0.0.0.0:{port}")).await?;
    Ok(())
}
