const ThemeScript = () => {
  const script = `
    (function() {
      try {
        var theme = localStorage.getItem('theme');
        var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        
        // Determine the correct theme
        var shouldBeDark = theme === 'dark' || (theme === 'system' && systemTheme === 'dark') || (!theme && systemTheme === 'dark');
        
        // Only update if different from current state to minimize hydration issues
        var currentlyDark = document.documentElement.classList.contains('dark');
        
        if (shouldBeDark && !currentlyDark) {
          document.documentElement.classList.remove('light');
          document.documentElement.classList.add('dark');
        } else if (!shouldBeDark && currentlyDark) {
          document.documentElement.classList.remove('dark');
          document.documentElement.classList.add('light');
        }
      } catch (e) {
        // Fallback: ensure light theme if no dark class
        if (!document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.add('light');
        }
      }
    })()
  `;

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: script,
      }}
    />
  );
};

export default ThemeScript;