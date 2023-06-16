(() => {
  const refs = {
    openAuthorizationBtn: document.querySelector("[data-authorization-open]"),
    closeAuthorizationBtn: document.querySelector("[data-authorization-close]"),
    authorization: document.querySelector("[data-authorization]"),
  };

  refs.openAuthorizationBtn.addEventListener("click", toggleAuthorization);
  refs.closeAuthorizationBtn.addEventListener("click", toggleAuthorization);

  function toggleAuthorization() {
    const isAuthorizationOpen =
      refs.openAuthorizationBtn.getAttribute("aria-expanded") === "true" ||
      false;
    refs.openAuthorizationBtn.setAttribute(
      "aria-expanded",
      !isAuthorizationOpen
    );
    refs.authorization.classList.toggle("is-hidden");

    const scrollLockMethod = !isAuthorizationOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
    // bodyScrollLock[scrollLockMethod](document.body);
  }
})();
