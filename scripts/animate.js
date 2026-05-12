document.addEventListener('DOMContentLoaded', () => {
  const hybridSection = document.querySelector('.hybrid_section');
  const paths = document.querySelectorAll('.scroll_content path');

  // path for drawing animation
  paths.forEach(path => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.transition = 'none';
  });

    window.addEventListener('scroll', () => {
        const box = hybridSection.getBoundingClientRect();
        const sectionHeight = hybridSection.offsetHeight;
        const viewportHeight = window.innerHeight;

        const scrollableDistance = sectionHeight - viewportHeight;
        const scrolledIn = -box.top;

        const progress = Math.min(Math.max(scrolledIn / scrollableDistance, 0), 1);

        paths.forEach((path, i) => {
            const length = path.getTotalLength();
            const start = i / paths.length;
            const end = i === paths.length - 1 ? 1.05 : (i + 1) / paths.length; // ← extend last path's end

            const lineProgress = Math.min(Math.max((progress - start) / (end - start), 0), 1);
            path.style.strokeDashoffset = length * (1 - lineProgress);
        });
    });
});