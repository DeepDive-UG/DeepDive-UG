// Theme toggle removed: site forced to dark-only.

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
		color: 0x52154e,
		backgroundColor: 0xa0220

	});
})();

// Mobile nav toggle for small screens
(function () {
	const toggle = document.querySelector('[data-nav-toggle]');
	const nav = document.querySelector('.nav');
	if (!toggle || !nav) return;

	toggle.addEventListener('click', () => {
		const opened = nav.classList.toggle('open');
		toggle.setAttribute('aria-expanded', String(opened));
	});

	// Close nav when a link is clicked (useful for single-page anchors)
	nav.querySelectorAll('a').forEach((a) => {
		a.addEventListener('click', () => {
			if (nav.classList.contains('open')) {
				nav.classList.remove('open');
				toggle.setAttribute('aria-expanded', 'false');
			}
		});
	});
})();