class LiveFilter extends HTMLElement {
  static register(tagName) {
    if ("customElements" in window) {
      customElements.define(tagName || "live-filter", LiveFilter);
    }
  }

  connectedCallback() {
    this.input.addEventListener("input", (event) =>
      this.handleInput(event.target)
    );
  }

  handleInput = (input) => {
    const value = this.formatString(input.value);

    this.items.forEach((item) => {
      if (!value.length) {
        item.removeAttribute("data-live-filter-match");
        return;
      }

      if (!this.formatString(item.textContent).includes(value)) {
        item.setAttribute("data-live-filter-match", false);
      } else {
        item.setAttribute("data-live-filter-match", true);
      }
    });
  };

  formatString(string) {
    return this.case === "insensitive" ? string.toLowerCase() : string;
  }

  get input() {
    return this.querySelector("input");
  }

  get items() {
    return this.querySelectorAll(this.selector);
  }

  get selector() {
    return this.getAttribute("selector") || "li";
  }

  get case() {
    return this.getAttribute("case");
  }
}

LiveFilter.register();
