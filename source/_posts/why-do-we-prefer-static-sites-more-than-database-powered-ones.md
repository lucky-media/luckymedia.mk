---
title: Why do we prefer static sites more than database powered ones ?
tags:
  - static sites
  - static website
  - database
  - netlify
  - github pages
date: 2020-05-13T00:29:48.135Z
cover: /assets/images/uploads/static.jfif
---
**Static websites** are known as a combination of html, css and javascript without the need of backend calculation and database. A static website has already deployed all the files and they are ready for the user without runtime manipulation of the files and the data.

Database websites are the most widely taken approach in the world. Almost every website has a database that is used for manipulating its data and displaying them to the user. We can insert data from the user to the database and vice versa. These kinds of websites are also called dynamic because they are able to change the content according to the user requirement and the files are built when the user requires them.

Because of the way both approaches handle requests from users, it’s safe to say that static websites are more secure than database websites. The latter can be manipulated by hackers or it can be attacked through DDOS.

You are probably familiar with Wordpress and you know how easy it is to build a website and manage its content. There are many problems with this approach although it’s the most used, but we deal with it in another post. We explain the reasons why we don’t use Wordpress. However, there are many other Content Management Systems (CMS) that can be used for managing your website, adding new content, uploading photos, changing information, etc.

With static websites the content is the same and you are not able to use a CMS, but you need to hard code the new change, right? No, there are CMS available even for static sites. While database websites can be instantly changed by simply saving the new change, the static sites require an entire deployment process after the change. That’s why it’s also safe to say that although we prefer developing static sites, you shouldn’t use them for every scenario. If you need to have multiple user registration, product management, payments, etc, it’s obvious that the database website is the right choice. But, the majority of the websites that are used for promoting the company, with mostly static content, can be easily implemented through static sites. Even adding a blog with posts or changing content once in a while through CMS is also an option for static sites. For example, our website is a static site and we still add new projects and new posts on our blog through CMS. However, if you have a blog for many users and daily posts, database sites are better.

You can also use a combination of static and dynamic approach. For example, we implement the front end of the website as a static site and everything is deployed through Netlify. But, if the client also needs a program that will help him manage his services (but not his website), we can do that through the dynamic approach. We have already done that for our company and we are very happy with the result. It’s worth noting that both codes in this case are in separate servers and the only thing in common is the domain. When you visit [www.luckymedia.mk](http://www.luckymedia.mk) you have the static site on each page that you can find. However, if you specifically go to [web.luckymedia.mk](http://web.luckymedia.mk) then you will see a login form that requires a password for you to access the application. The latter is called a subdomain and is part of the main domain but it can be used to access code from a different server.

These static sites can be easily deployed on Netlify or even Github Pages. Since we’re only serving static pages, the server requirements are the bare minimum. We can host most of our static sites for free.