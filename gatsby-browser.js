import netlifyIdentity from "netlify-identity-widget";
import React from "react";
import { ImageProvider } from "./src/components/images/image-context";

export const wrapRootElement = ({ element }) => (
    <ImageProvider>{element}</ImageProvider>
);

const ROUTE_LOADER_ID = "route-loading-overlay";

const hideRouteLoader = () => {
    if (!isBrowser) return;
    const el = document.getElementById(ROUTE_LOADER_ID);
    if (el) el.hidden = true;
};

const isBrowser =
    typeof window !== "undefined" && typeof document !== "undefined";

const clearPadding = () => {
    if (!isBrowser) return;
    document.documentElement.style.removeProperty("scroll-padding-top");
    document.documentElement.style.removeProperty("scroll-behavior");
};

const forceAutoScroll = () => {
    if (!isBrowser) return;
    document.documentElement.style.setProperty(
        "scroll-padding-top",
        "0px",
        "important"
    );
    document.documentElement.style.setProperty(
        "scroll-behavior",
        "auto",
        "important"
    );
};

const blurActive = () => {
    if (!isBrowser) return;
    const el = document.activeElement;
    if (el && el !== document.body && el !== document.documentElement) {
        try {
            el.blur();
        } catch (_) {}
    }
};

const toTop = () => {
    if (!isBrowser) return;
    document.documentElement.classList.remove("nav-active");
    forceAutoScroll();
    const se = document.scrollingElement ?? document.documentElement;
    se.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
    window.scrollTo(0, 0);
};

const focusWrapperNoScroll = () => {
    if (!isBrowser) return;
    const w = document.getElementById("gatsby-focus-wrapper");
    if (!w) return;
    if (!w.hasAttribute("tabindex")) w.setAttribute("tabindex", "-1");
    w.style.outline = "none";
    try {
        w.focus({ preventScroll: true });
    } catch (_) {
        const y = window.pageYOffset;
        try {
            w.focus();
        } catch (_) {}
        if (window.pageYOffset !== y) window.scrollTo(0, 0);
    }
};

const stopGuard = () => {
    clearPadding();
};

const guardToTop = () => {
    if (!isBrowser) return;
    stopGuard();
    blurActive();
    toTop();
    focusWrapperNoScroll();
    toTop();
    window.requestAnimationFrame(() => {
        toTop();
        window.requestAnimationFrame(() => {
            toTop();
            clearPadding();
        });
    });
    window.setTimeout(() => {
        toTop();
        clearPadding();
    }, 80);
};

const aboutSectionId = key => {
    if (!isBrowser || !key) return null;
    const direct = document.getElementById(key);
    if (direct) return key;
    const byData = document.querySelector(`[data-about-section="${key}"]`);
    if (byData?.id) return byData.id;
    const map = {
        "members-aboutus": "members-aboutUs",
        membros: "members-aboutUs",
        "godparents-aboutus": "godparents-aboutUs",
        padrinhos: "godparents-aboutUs",
        "tiet-aboutus": "tiet-aboutUs",
        "tudo-isto-e-tuna": "tiet-aboutUs",
        ensaios: "rehearsals-aboutUs",
        "rehearsals-aboutus": "rehearsals-aboutUs",
        historial: "historial",
    };
    const norm = String(key).toLowerCase();
    const mapped = map[norm];
    if (mapped && document.getElementById(mapped)) return mapped;
    return null;
};

const scrollToHash = hash => {
    if (!isBrowser || !hash) return;
    stopGuard();
    clearPadding();
    const raw = decodeURIComponent(hash.replace("#", ""));
    const id = aboutSectionId(raw) || raw;
    if (!id) return;
    let attempts = 0;
    let cancelled = false;
    let programmatic = false;

    const cleanup = () => {
        window.removeEventListener("wheel", onUser, { passive: true });
        window.removeEventListener("touchstart", onUser, { passive: true });
        window.removeEventListener("pointerdown", onUser, { passive: true });
        window.removeEventListener("keydown", onKey, true);
        window.removeEventListener("scroll", onScroll, true);
    };
    const onUser = () => {
        cancelled = true;
        cleanup();
    };
    const onScroll = () => {
        if (!programmatic) {
            cancelled = true;
            cleanup();
        }
    };
    const onKey = e => {
        if (
            [
                "ArrowUp",
                "ArrowDown",
                "PageUp",
                "PageDown",
                "Home",
                "End",
                " ",
            ].includes(e.key)
        ) {
            cancelled = true;
            cleanup();
        }
    };
    window.addEventListener("wheel", onUser, { passive: true });
    window.addEventListener("touchstart", onUser, { passive: true });
    window.addEventListener("pointerdown", onUser, { passive: true });
    window.addEventListener("keydown", onKey, true);
    window.addEventListener("scroll", onScroll, true);

    const align = () => {
        const targetId = aboutSectionId(raw) || id;
        const el = document.getElementById(targetId);
        if (!el) return false;
        const nav = document.querySelector("[data-section-nav]");
        const navH =
            nav?.getBoundingClientRect().height ?? nav?.offsetHeight ?? 0;
        const heading = el.querySelector("h3, h2, h4");
        const base = heading ?? el;
        const y =
            base.getBoundingClientRect().top +
            window.pageYOffset -
            77 -
            navH -
            (heading ? 4 : 0);
        const se = document.scrollingElement ?? document.documentElement;
        const prev = se.style.scrollBehavior;
        se.style.scrollBehavior = "auto";
        programmatic = true;
        window.scrollTo(0, Math.max(0, Math.round(y)));
        se.style.scrollBehavior = prev;
        window.requestAnimationFrame(() => {
            programmatic = false;
        });
        if (nav) {
            document.documentElement.classList.toggle(
                "nav-active",
                nav.getBoundingClientRect().top <= 78
            );
        }
        return true;
    };
    const tick = () => {
        if (cancelled) {
            cleanup();
            return;
        }
        if (
            !aboutSectionId(raw) &&
            !document.getElementById(id) &&
            attempts < 80
        ) {
            attempts += 1;
            window.setTimeout(tick, 50);
            return;
        }
        if (!align()) {
            cleanup();
            return;
        }
        cleanup();
    };
    window.requestAnimationFrame(() => window.requestAnimationFrame(tick));
};

export const onClientEntry = () => {
    if (isBrowser && "scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
    }
};

export const onPreRouteUpdate = ({ location, prevLocation }) => {
    if (!isBrowser) return;
    if (location?.pathname !== prevLocation?.pathname) {
        showLoader();
    }
};

export const shouldUpdateScroll = args => {
    if (!isBrowser) return false;
    const routerProps = args?.routerProps ?? args;
    const prevRouterProps = args?.prevRouterProps;
    const next = routerProps?.location;
    const prev = prevRouterProps?.location;
    if (!next) return false;

    if (next.hash) {
        stopGuard();
        clearPadding();
        if (next.hash !== prev?.hash || next.pathname !== prev?.pathname) {
            scrollToHash(next.hash);
        }
        return false;
    }

    if (next.pathname !== prev?.pathname) {
        if (next.state?.tunafeScrollTo) {
            stopGuard();
            clearPadding();
            scrollToHash(`#${next.state.tunafeScrollTo}`);
            return false;
        }
        try {
            const norm = p =>
                (p || "/").replace(/\/+$/, "").replace(/\/index$/, "") || "/";
            const pending = sessionStorage.getItem("tunafe-scroll-to");
            if (pending && norm(next.pathname) === norm("/sobre-nos")) {
                sessionStorage.removeItem("tunafe-scroll-to");
                stopGuard();
                clearPadding();
                scrollToHash(`#${pending}`);
                return false;
            }
        } catch (_) {}
        guardToTop(900);
        return [0, 0];
    }

    return false;
};

const PAGE_LOADER_ID = "tunafe-ssr-loader";
const LOADER_ID = "route-loading-bar";
const LOADER_STYLE_ID = "route-loading-style";

const hidePageLoader = () => {
    if (!isBrowser) return;
    const el = document.getElementById(PAGE_LOADER_ID);
    if (!el) return;
    el.setAttribute("hidden", "");
    el.style.display = "none";
};

const ensureLoader = () => {
    if (!isBrowser) return null;
    if (!document.getElementById(LOADER_STYLE_ID)) {
        const style = document.createElement("style");
        style.id = LOADER_STYLE_ID;
        style.textContent = `
      @keyframes route-loading-spin { to { transform: rotate(360deg); } }
      @keyframes route-loading-bar { 0% { transform: translateX(-100%); } 100% { transform: translateX(220%); } }
      #${LOADER_ID} { position:fixed;top:0;left:0;right:0;height:3px;z-index:2000;opacity:0;pointer-events:none;transition:opacity .15s ease;overflow:hidden;background:rgba(153,83,69,.16); }
      #${LOADER_ID}[data-active="true"] { opacity:1; }
      #${LOADER_ID} .route-loading-bar { position:absolute;inset:0;width:45%;background:var(--light-engineer,#995345);border-radius:999px;animation:route-loading-bar 1s ease-in-out infinite; }
      #${LOADER_ID} .route-loading-icon { position:fixed;top:14px;right:14px;width:18px;height:18px;border:2px solid rgba(153,83,69,.25);border-top-color:var(--light-engineer,#995345);border-radius:50%;animation:route-loading-spin .7s linear infinite;box-shadow:0 0 0 3px rgba(240,240,240,.65);background:rgba(240,240,240,.35); }
    `;
        document.head.appendChild(style);
    }
    let el = document.getElementById(LOADER_ID);
    if (!el) {
        el = document.createElement("div");
        el.id = LOADER_ID;
        el.setAttribute("role", "status");
        el.setAttribute("aria-live", "polite");
        el.setAttribute("aria-label", "A carregar");
        el.innerHTML =
            '<div class="route-loading-bar"></div><div class="route-loading-icon"></div>';
        document.body.appendChild(el);
    }
    return el;
};

const showLoader = () => {
    const el = ensureLoader();
    if (el) el.dataset.active = "true";
};

const hideLoader = () => {
    if (!isBrowser) return;
    const el = document.getElementById(LOADER_ID);
    if (el) el.dataset.active = "false";
};

export const onRouteUpdateDelayed = () => {
    showLoader();
};

export const onRouteUpdate = ({ location, prevLocation }) => {
    if (!isBrowser) return;
    hidePageLoader();
    hideLoader();
    hideRouteLoader();
    if (location?.pathname === "/admin/") netlifyIdentity.init();
    if (location?.hash) {
        const hash = location.hash;
        const clean = window.location.pathname || "/";
        try {
            window.history.replaceState(window.history.state, "", clean);
        } catch (_) {}
        scrollToHash(hash);
        return;
    }
    try {
        const pending = sessionStorage.getItem("tunafe-scroll-to");
        const norm = p =>
            (p || "/").replace(/\/+$/, "").replace(/\/index$/, "") || "/";
        if (pending && norm(location?.pathname) === norm("/sobre-nos")) {
            sessionStorage.removeItem("tunafe-scroll-to");
            scrollToHash(`#${pending}`);
            return;
        }
    } catch (_) {}
    if (location?.pathname !== prevLocation?.pathname || !prevLocation)
        guardToTop(900);
};

export const onInitialClientRender = () => {
    if (!isBrowser) return;
    hidePageLoader();
    hideLoader();
    focusWrapperNoScroll();
    if (window.location.hash) {
        const hash = window.location.hash;
        const clean = window.location.pathname || "/";
        try {
            window.history.replaceState(window.history.state, "", clean);
        } catch (_) {}
        scrollToHash(hash);
        return;
    }
    try {
        const pending = sessionStorage.getItem("tunafe-scroll-to");
        if (pending) {
            sessionStorage.removeItem("tunafe-scroll-to");
            scrollToHash(`#${pending}`);
            return;
        }
    } catch (_) {}
    stopGuard();
    toTop();
    clearPadding();
};
