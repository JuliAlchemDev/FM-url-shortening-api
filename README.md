# Shortly – URL Shortening API Landing Page

A modern URL shortener that uses the **[is.gd API](https://is.gd/apishorteningreference.php)** to generate shortened links. It features real-time validation, clipboard copy functionality, and fully responsive design optimized for all screen sizes.

| MacBook Air Preview                         | iPad Pro 11 Preview                         | iPhone 14 Plus Preview                         |
| ------------------------------------------- | ------------------------------------------- | ---------------------------------------------- |
| ![Mobile](./assets/images/macbook-air.webp) | ![Mobile](./assets/images/ipad-pro-11.webp) | ![Mobile](./assets/images/iphone-14-plus.webp) |

## Links

- Solution URL: [GitHub](https://github.com/JuliAlchemDev/FM-url-shortening-api)
- Live Site URL: [GitHub Pages](INSERT_LINK_HERE)

## Features

- Shortens valid URLs using the **[is.gd API](https://is.gd/apishorteningreference.php)**
- Real-time form validation with custom error messaging
- Dynamic rendering of shortened link cards
- One-click copy to clipboard with visual feedback
- Mobile-first responsive layout (mobile, tablet, desktop)
- Toggleable navigation menu for smaller screens
- Custom CSS design system using variables
- Accessible markup with screen-reader labels and `aria-live` updates
- Hover and focus-visible states for interactive elements

## Built With

[<img alt="HTML5" src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />](https://developer.mozilla.org/en-US/docs/Web/HTML)
[<img alt="CSS3" src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" />](https://developer.mozilla.org/en-US/docs/Web/CSS)
[<img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[<img alt="Markdown" src="https://img.shields.io/badge/-Markdown-000000?style=flat-square&logo=markdown&logoColor=white" />](https://www.markdownguide.org/)
[<img alt="Git" src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" />](https://git-scm.com/)
[<img alt="GitHub" src="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white" />](https://github.com/)
[<img alt="VS Code" src="https://img.shields.io/badge/-VS%20Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white" />](https://code.visualstudio.com/)
[<img alt="Figma" src="https://img.shields.io/badge/-Figma-F24E1E?style=flat-square&logo=figma&logoColor=white" />](https://www.figma.com/)

## Our Process

- Enhanced the `<head>` section with proper SEO metadata, Open Graph tags, Twitter cards, canonical links, and favicon setup to improve discoverability and sharing previews.
- Built the **Statistics section** using semantic HTML and BEM methodology, ensuring clean structure and scalable styling.
- Implemented the **URL shortener logic** using JavaScript:
  - Integrated the **[is.gd API](https://is.gd/apishorteningreference.php)** using `fetch` and `async/await`.
  - Added client-side validation using HTML5 form validation APIs.
  - Provided real-time UI feedback for invalid input.
  - Dynamically rendered shortened link cards in the DOM.
- Developed **copy-to-clipboard functionality** using the Clipboard API with visual state updates ("Copied!" button state).
- Styled and enhanced the **Shortener section UI**, including validation states, focus styles, and responsive behavior.
- Fully structured and styled the **Footer section**, applying accessibility considerations and responsive layout techniques.
- Ensured accessibility improvements across sections:
  - Used semantic elements and proper heading hierarchy.
  - Applied `aria-live="polite"` for dynamically added shortened links.
  - Implemented `:focus-visible` states for keyboard users.
- Applied a scalable CSS architecture using custom properties (design tokens), consistent spacing scale, and responsive breakpoints.
- Resolved merge conflicts and removed duplicated HTML introduced during collaboration.
- Organized repository workflow by setting up a `.github` directory and maintaining structured pull request practices.

### What We Learned

- Strengthened our understanding of integrating external APIs using `fetch`, `async/await`, and handling asynchronous data flows.
- Practiced implementing form validation using both native browser validation and custom UI feedback.
- Improved our skills in dynamic DOM manipulation, including generating components and handling event delegation.
- Gained experience working with the Clipboard API and managing UI state transitions.
- Deepened our understanding of accessibility patterns such as `aria-live`, semantic structure, and focus management.
- Reinforced scalable CSS architecture principles using design tokens, responsive breakpoints, and consistent spacing systems.
- Learned how to collaborate effectively through pull requests, merge conflict resolution, and maintaining clean commit history.
- Improved attention to detail when implementing SEO metadata and structured head elements for production readiness.
