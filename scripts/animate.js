document.addEventListener('DOMContentLoaded', () => {
  const hybridSection = document.querySelector('.hybrid_section');
  const paths = document.querySelectorAll('.scroll_content path');

  // Set up each path for drawing animation
  paths.forEach(path => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.transition = 'none';
  });

    window.addEventListener('scroll', () => {
        const rect = hybridSection.getBoundingClientRect();
        const sectionHeight = hybridSection.offsetHeight;
        const viewportHeight = window.innerHeight;

        // Wait until section is fully in view before starting (rect.top <= 0)
        // Then animate over the remaining scroll distance
        const scrollableDistance = sectionHeight - viewportHeight;
        const scrolledIn = -rect.top; // how many px we've scrolled past the top of the section

        // Only start after the section top has passed the viewport top (fully in view)
        const progress = Math.min(Math.max(scrolledIn / scrollableDistance, 0), 1);

        paths.forEach((path, i) => {
            const length = path.getTotalLength();
            const start = i / paths.length;
            const end = i === paths.length - 1 ? 1.05 : (i + 1) / paths.length; // ← extend last path's end

            const localProgress = Math.min(Math.max((progress - start) / (end - start), 0), 1);
            path.style.strokeDashoffset = length * (1 - localProgress);
        });
    });
});