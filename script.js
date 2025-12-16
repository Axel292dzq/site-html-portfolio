/* Zatovo UI v2: small progressive enhancement */
(function () {
  // Accordion
  document.querySelectorAll("[data-accordion]").forEach((root) => {
    root.querySelectorAll(".accordionBtn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".accordionItem");
        const isOpen = item.getAttribute("data-open") === "true";
        // close others (optional)
        root.querySelectorAll(".accordionItem").forEach((it) => it.setAttribute("data-open", "false"));
        item.setAttribute("data-open", String(!isOpen));
      });
    });
  });

  // Current nav highlighting (works if you keep file names)
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll('.links a').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === path) a.setAttribute('aria-current', 'page');
  });
})();
