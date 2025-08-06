const ThemeScript = () => {
  const script = `
    (function() {
      try {
        var theme = localStorage.getItem('theme');
        var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        var systemTheme = mediaQuery.matches ? 'dark' : 'light';
        
        var applyTheme = function() {
          var shouldBeDark = theme === 'dark' || (theme === 'system' && mediaQuery.matches) || (!theme && mediaQuery.matches);
          var currentlyDark = document.documentElement.classList.contains('dark');
          
          if (shouldBeDark && !currentlyDark) {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
          } else if (!shouldBeDark && currentlyDark) {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
          }
        };
        
        var handleSystemThemeChange = function() {
          if (theme === 'system' || !theme) {
            applyTheme();
          }
        };
        
        // Apply theme initially
        applyTheme();
        
        // Listen for system theme changes
        mediaQuery.addEventListener('change', handleSystemThemeChange);
        
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