import os
import gradio as gr

with gr.Blocks(title="Hello, Flux!", css="""
    .container { display: flex; justify-content: center; align-items: center; height: 80vh; }
    h1 { font-size: 3rem; color: #2563eb; font-family: sans-serif; }
""") as app:
    gr.HTML('<div class="container"><h1>Hello, Flux!</h1></div>')

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 7860))
    app.launch(server_name="0.0.0.0", server_port=port)
