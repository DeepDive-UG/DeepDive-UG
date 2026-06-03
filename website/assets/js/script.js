(function () {
	const storageKey = "deepdive-theme";
	const root = document.documentElement;
	const toggleButtons = document.querySelectorAll("[data-theme-toggle]");
	const sunIcon = "https://icons.getbootstrap.com/assets/icons/sun-fill.svg";
	const moonIcon = "https://icons.getbootstrap.com/assets/icons/moon-fill.svg";

	if (!toggleButtons.length) {
		return;
	}

	const getSystemTheme = () => (globalThis.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light");

	const setTheme = (theme, persist = true) => {
		const nextTheme = theme === "dark" ? "dark" : "light";
		root.dataset.theme = nextTheme;

		toggleButtons.forEach((button) => {
			const isDark = nextTheme === "dark";
			button.setAttribute("aria-pressed", String(isDark));
			button.setAttribute("aria-label", isDark ? "Przełącz na tryb jasny" : "Przełącz na tryb ciemny");
			button.setAttribute("title", isDark ? "Przełącz na tryb jasny" : "Przełącz na tryb ciemny");
			const icon = button.querySelector("[data-theme-icon]");
			if (icon) {
				icon.setAttribute("src", isDark ? sunIcon : moonIcon);
			}
		});

		if (persist) {
			globalThis.localStorage?.setItem(storageKey, nextTheme);
		}
	};

	const savedTheme = globalThis.localStorage?.getItem(storageKey);
	setTheme(savedTheme || getSystemTheme(), false);

	toggleButtons.forEach((button) => {
		button.addEventListener("click", () => {
			const currentTheme = root.dataset.theme === "dark" ? "dark" : "light";
			setTheme(currentTheme === "dark" ? "light" : "dark");
		});
	});

	if (globalThis.matchMedia) {
		const mediaQuery = globalThis.matchMedia("(prefers-color-scheme: dark)");
		mediaQuery.addEventListener?.("change", () => {
			if (!globalThis.localStorage?.getItem(storageKey)) {
				setTheme(getSystemTheme(), false);
			}
		});
	}
})();

// Active nav highlighting for anchor sections
(function () {
	const navLinks = Array.from(document.querySelectorAll('.nav a[href^="#"]'));
	if (!navLinks.length) return;

	const sections = navLinks
		.map((a) => document.querySelector(a.getAttribute('href')))
		.filter(Boolean);

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					navLinks.forEach((l) => l.removeAttribute('aria-current'));
					const id = `#${entry.target.id}`;
					const active = document.querySelector(`.nav a[href="${id}"]`);
					if (active) active.setAttribute('aria-current', 'page');
				}
			});
		},
		{ root: null, rootMargin: '-10% 0px -60% 0px', threshold: 0.2 }
	);

	sections.forEach((s) => observer.observe(s));
})();

// Vanta background (guarded to avoid errors if scripts are missing).
(function () {
	const target = document.querySelector("#vanta-bg");
	if (!target || !globalThis.VANTA?.NET) return;

	globalThis.VANTA.NET({
		el: "#vanta-bg",
		mouseControls: true,
		touchControls: true,
		gyroControls: false,
		minHeight: 200.0,
		minWidth: 200.0,
		scale: 1.0,
		scaleMobile: 1.0,
		color: 0xc63fff
	});
})();