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
    this.items.forEach((item) => {
      if (!input.value.length) {
        item.removeAttribute("data-live-filter-match");
        return;
      }
      if (!item.textContent.includes(input.value)) {
        item.setAttribute("data-live-filter-match", false);
      } else {
        item.setAttribute("data-live-filter-match", true);
      }
    });
  };

  itemContent(item) {
    if (this.scope) {
      return [...item.querySelectorAll(this.scope)]
        .map((item) => item.textContent)
        .join(" ");
    }
    return item.textContent;
  }

  get input() {
    return this.querySelector("input");
  }

  get items() {
    return this.selector
      ? this.querySelectorAll(this.selector)
      : this.querySelectorAll("li");
  }

  get selector() {
    return this.getAttribute("selector");
  }
}

LiveFilter.register();
