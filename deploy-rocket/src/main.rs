#[macro_use]
extern crate rocket;

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

#[get("/")]
fn index() -> (rocket::http::ContentType, &'static str) {
    (rocket::http::ContentType::HTML, HTML)
}

#[launch]
fn rocket() -> _ {
    let port: u16 = std::env::var("PORT")
        .unwrap_or_else(|_| "8080".to_string())
        .parse()
        .expect("PORT must be a number");

    let config = rocket::Config {
        port,
        address: std::net::Ipv4Addr::new(0, 0, 0, 0).into(),
        ..rocket::Config::default()
    };

    rocket::custom(config).mount("/", routes![index])
}
