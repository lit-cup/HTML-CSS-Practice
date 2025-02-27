# CLAUDE.md - Guidelines for HTML-CSS-JS Practice

## Commands
- To preview HTML files: Use a local server like `npx serve` or `python -m http.server`
- For linting CSS: Use `npx stylelint "**/*.css"`
- For JavaScript validation: `npx eslint "**/*.js"`

## Code Style Guidelines
- HTML: Use semantic HTML5 elements, lowercase tags, double quotes for attributes
- CSS: Use kebab-case for class names, avoid inline styles, prefer rem/em over px
- JavaScript: 
  - Use camelCase for variables and functions
  - Use ES6+ features (arrow functions, template literals, etc.)
  - Handle errors with try/catch blocks as seen in loadTranslations()
  - Use async/await for asynchronous operations
  - Add comments for complex logic or sectioning code
  - Prefer event delegation for repeated event listeners

## Project Organization
- Group related files in dedicated folders (HTML, CSS, JS)
- Use descriptive, meaningful file names
- Keep language files in JSON format for translations
- Store images in dedicated folders with optimized formats