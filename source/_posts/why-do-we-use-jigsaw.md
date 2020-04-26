---
title: Why do we use jigsaw?
tags:
  - jigsaw
  - static sites
  - frontend
  - website
  - development
  - laravel
  - blade
date: 2020-06-19T00:54:04.134Z
cover: /assets/images/uploads/jigsaw-banner.png
---
**Jigsaw** is a framework for rapidly building static sites. Just like Laravel, it has integrated Blade. If you have already used the power of Blade and Laravel, now you can implement Blade in Jigsaw. We have already discussed static sites, tailwind css and explained Blade in previous posts. You use Jigsaw for the same reasons why you decide to build static sites.

You can install Jigsaw through the Composer by running

`composer require tightenco/jigsaw`

That’s it, now start building your static site with the technologies you want. Jigsaw allows you to use Markdown for building articles, blog, posts or documentation pages. Markdown’s syntax is used as a simple format for writing pages for the web. You can easily find a Markdown Cheatsheet on Github to understand the syntax of Markdown. For example, you use “**\#**” for heading 1, “**\##**” for h2, “**\######** ”for h6, italics is formed with “**\*word\***”, bold with “**\*\*word\*\***”, etc.

This is the entire process for creating static pages. After installing jigsaw, we install Tailwind CSS and VueJS. We create a master layout, header and footer. Then, we customize our Tailwind configuration if needed. We start building new pages and connect them with the layout. If we need to use blog posts, projects, services, etc, then we create a specific folder for each one of them. We start populating them with .md files and we create a design with Blade specifically for each one of them if needed.

The content of these .md files is written with Markdown syntax and we include the title, date, images, social media, tags etc, as variables. On our Blade template for these .md files we can access the data of the .md file and structure it accordingly. Thus, we have one Blade template for the projects section, but we have more than one project with each .md file. Each project has the same design, but different data. We use Purge CSS to minimize the code even more. In the end, we compile the code and the static site is ready.

There are other frameworks besides Jigsaw, like Sculpin, Couscous, Spress, Yellow, Carew etc. However, Jigsaw uses the same technologies that we use with Laravel, and this makes the learning curve more shallow. We usually use Jigsaw in a combination with Tailwind CSS and VueJS. That’s a very powerful and efficient set of tools that you can use for rapidly building static sites.