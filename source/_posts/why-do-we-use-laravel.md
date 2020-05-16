---
title: Why do we use Laravel?
tags:
  - Laravel
  - development
  - backend
  - website
date: 2020-06-03T00:38:26.899Z
cover: /assets/images/uploads/laravel.png
---
**Laravel** is an amazing PHP framework that follows the MVC pattern (model-view-controller) and has many built-in features that ease the development process. It can be used for organizing the code of complex web applications and provides authentication, sessions, routing and caching. What was just a simple PHP framework, nowadays it is an entire ecosystem that offers many services such as Vapor, Forge, Tinker, Mix, Telescope, Dusk etc.

If you want to dive into Laravel there’s no better place than Laracast. It has a ton of video tutorials that show the best practices of using the framework and some other technologies that can be used with it.

Complex websites require organization, security, functionalities, database manipulation, etc. Reinventing the wheel is never a good nor a fast option. Laravel provides everything with pure class and efficiency. If you are familiar with building websites with PHP then you will certainly be amazed by the features that are offered through Laravel. You might never want to go back to developing a website without using Laravel.

Laravel is very well documented and it has a great community. This makes it easier to find help if you are stuck somewhere and if you want to get a deeper understanding of how things function. If you follow up Laracast then you will be able to do code refactoring and clean up the code. It’s important to use Laravel as suggested by the documentation and make use of the provided features.

Almost every website nowadays requires some sort of user authentication and laravel provides everything with a simple command. You won’t believe how simple and quick the entire process is. For creating a new Laravel app you run the command

`laravel new blog`

and for adding a Laravel app with authentication you can do

`laravel new blog --auth`

That’s it. All the views, routes and controllers are ready for a secure login system. You can start working on the other sections of your website.

If you need to send emails, Laravel provides support for various notification email services such as Mailgun, Mandrill, SparkPost, Amazon SES, SendMail etc. You want to use a certain database like mysql and then decide to change to sqlite. By using Eloquent you can easily make this change together with many other relationships among the table within that database.

You need to have restrictions on the user roles that are able to see a certain page or HTML element, it can be easily implemented with authentication and policies. Authentication can stop a user to view an entire page and forward the user to another page. This can help you to provide administrator pages to the admin user and restrict the access for normal users. Let’s say you have a platform with courses, you can have an admin, teachers and students. You can give everyone control over different pages. With policies you don’t stop access from pages, but rather from elements within a page. For our course platform, we might have a lesson page where the user is able to see a “add comment” button, but not a “create lesson” which can be seen by the teacher. Then, the admin shouldn’t comment, but he can see a “delete comment” option.