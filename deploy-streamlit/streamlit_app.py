import streamlit as st

st.set_page_config(page_title="Hello, Flux!")

st.markdown(
    """
    <style>
    .main { display: flex; justify-content: center; align-items: center; height: 80vh; }
    h1 { font-size: 3rem; color: #2563eb; text-align: center; }
    </style>
    """,
    unsafe_allow_html=True,
)

st.title("Hello, Flux!")
