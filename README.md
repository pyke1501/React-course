# Terms
- first render: component render UI with initial state ""
- re-render (next render): component render UI with new state
- SPA (single page app)
- MPA (multiple page app)

# Other
- html, css -> parser html dom, css dom -> show UI with HTML DOM 
- jsx, typescript, react -> build tool (vite - esbuild, create react app - webpack) -> parser html, css -> show UI with HTML DOM
- react slick
  - import: install slick carousel (50kb) -> build html css -> bundle js 1M + 50kb = 1.50M
    - server của mình phải load lun resource của slick carousel
  - cdn: embed link into html -> build js (1M)
    - chia tải load resource vs server minh: server cdn sẽ load slick carousel
    - server của mình load resource js
