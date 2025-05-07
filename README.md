# swu223.github.io

This repository is meant to house Sarah's portfolio on the website: <https://swu223.github.io>.

This repository also acts as a storage repository of the class materials from MITxPRO 2023.

# 10.23.2024 edit
Start editing the page itself, working with next.js components, tailwind css styling. Goal is to have a navbar on the top of the page that stays in place while the rest of the page can scroll. 

# 10.22.2024 edit
Found out via this stackoverflow regarding how to use pnpm in github actions. Deployment successful. https://stackoverflow.com/questions/76664013/how-to-use-pnpm-instead-of-npm-in-github-actions


# 09.22.2024 edit
Used the following resources to attempt to deploy a Next.js file to github:

https://www.freecodecamp.org/news/how-to-deploy-next-js-app-to-github-pages/
  - Uses a custom next.js action file in addition to the publish.yml
https://github.com/gregrickaby/nextjs-github-pages/blob/main/.github/workflows/deploy.yml
  - Instead of publish yml, uses "deploy.yml" and uses a built in next.js action file.

  # Next steps:
  Review how to deploy a github page with custom actions.
  
  https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages
  
  https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

  https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#creating-a-custom-github-actions-workflow-to-publish-your-site.