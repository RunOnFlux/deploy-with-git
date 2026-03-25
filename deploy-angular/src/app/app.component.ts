import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  standalone: true,
  template: `
    <main [ngStyle]="styles.container">
      <div [ngStyle]="styles.card">
        <h1 [ngStyle]="styles.title">Hello from Flux! 👋</h1>
        <p [ngStyle]="styles.subtitle">
          This Angular app is running on the decentralized Flux Network.
        </p>
        <a
          href="https://runonflux.com"
          target="_blank"
          rel="noopener noreferrer"
          [ngStyle]="styles.btn"
        >
          Learn more about Flux
        </a>
      </div>
    </main>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class AppComponent {
  styles = {
    container: {
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
      "min-height": "100vh",
      background: "#0a0a0a",
      color: "#ededed",
      "font-family": "sans-serif",
      margin: "0",
    },
    card: {
      "text-align": "center",
      padding: "2rem",
    },
    title: {
      "font-size": "3rem",
      "margin-bottom": "1rem",
    },
    subtitle: {
      "font-size": "1.25rem",
      color: "#a0a0a0",
      "margin-bottom": "2rem",
    },
    btn: {
      display: "inline-block",
      padding: "0.75rem 2rem",
      background: "#2563eb",
      color: "#fff",
      "border-radius": "0.5rem",
      "text-decoration": "none",
      "font-size": "1rem",
    },
  };
}
