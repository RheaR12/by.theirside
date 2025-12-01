// ---------- MOBILE NAV ----------
const mobileBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('.close-mobile-nav');

if (mobileBtn && mobileNav && closeBtn) {
  mobileBtn.addEventListener('click', () => {
    mobileNav.classList.add('open');
  });

  closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('open');
  });
}

// ---------- DESKTOP DROPDOWN MENU (CLICK TO OPEN) ----------
const dropdownToggles = document.querySelectorAll('.desktop-nav .dropdown > a');

dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault(); // prevent "#" jump

    const parent = toggle.parentElement;

    // Close any other open dropdowns
    document.querySelectorAll('.desktop-nav .dropdown.open').forEach(drop => {
      if (drop !== parent) drop.classList.remove('open');
    });

    // Toggle this one
    parent.classList.toggle('open');
  });
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
  const isDropdown = e.target.closest('.dropdown');
  const isInsideDesktopNav = e.target.closest('.desktop-nav');

  if (!isDropdown && isInsideDesktopNav) {
    document.querySelectorAll('.desktop-nav .dropdown.open').forEach(drop => {
      drop.classList.remove('open');
    });
  }
});
