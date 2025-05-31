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

# React structure code 
- custom hooks
- context
- dynamic layout + dynamic components
- group by folder
  - src/components
    - tables
    - pagination
    - buttons
    - images
  - src/hooks
  - src/helper
  - src/pages
    - product
        - import Button from './components/buttons'
    - home
    - user
    - login
  - src/features
    - login
        - hooks
        - components
        - helpers

- group by feature
    - src/components
      - tables
      - pagination
      - buttons
    - src/hooks
    - src/helper
    - src/feature
      - product
        - components
            - tables
            - pagination
            - buttons
      - user
        - import Table from './feature/product/components/table'

# Naming conversation
- UPPERCASE
  - format: PRODUCT, USER, PRODUCT_DETAIl
  - usage: constant, config
- PascalCase: 
  - format: product, user, product_detail
  - usage: variable, file, folder
- kebab-case: 
  - format: product-detail, product-service
  - usage:  file, folder
- camelCase:
  - format: convertNumberToString, fetchUser, convertDateToTimestap, openNewUrl, handleDeleteItem
  - usage:  file, function, custom hooks


## Gitflow

#### Step to step to implement an feature
```bash
1. create feature branch from main branch
$ git checkout main
$ git pull
$ git checkout -b feature/tony-1234-show-notification-login

2. create an MR (merge request)
- go to Pull Request 
- create Pull Request
- team member review
- click Merged

```

### Fix confict code

1. conflict code when merge your branch into develop/qc branch

2. conflict code when merge your branch (feature/a) into main branch
- 