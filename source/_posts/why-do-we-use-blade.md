---
title: Why do we use Blade?
tags:
  - Blade
  - Laravel
  - frontend
  - backend
date: 2020-05-24T00:40:58.576Z
cover: /assets/images/uploads/blade.jfif
---
**Blade** is a powerful templating engine that is provided by Laravel. There are also other PHP templating engines, like Twig, Smarty, Dwoo, Volt, Plates, Mustache, Latte, etc. Blade allows you to use pure PHP code beside the Blade directives. On the next post we will also explain the benefits of using Blade with Jigsaw for building powerful static sites.

With Blade you have the chance to manipulate many different functionalities on the front end of your website. If you are used to building HTML, CSS and Javascript websites, then you will clearly understand the need of Blade. For example, you have a menu that needs to be repeated on almost all pages. Making a change on the menu requires that you update all pages that have the same menu. Don’t even think about changing the footer or some other repeatable section. Well, with Blade you can create partials where you include a specific section and then you call it wherever you need to use it. For example, you have a menu partial that can be called on the pages that require a menu. You can also have a footer partial that does the same. You can create a master page with all the core elements in the header or body, and then extend that layout when you create new pages.

If you have combined PHP on your front end code, then you need to know that Blade simplifies and boosts that functionality even more. You want to include a variable or an array that comes from your previous url, it’s pretty simple. Just include the

`{{ $my_variable }}`

and the data will be shown. Or, you can use the Blade “**@foreach**” include as many HTML codes and PHP variables as you want, and then close it with “**@endforeach**”. When using a form you can use Blade to create the route that is predefined in another file. If you decide to make a change to your routes, you will do it in one file, and not all pages where you have forms. It also simplifies many other functions like loops, if else, switch, etc.

With Blade you can also use the “**@csrf**” to generate a token that will make sure that forms can only be sent by your website and prevent hackers from different attacks. You have learnt about GET and POST as the most common HTTP methods, but in Laravel we also have PUT, PATCH, DELETE that can be specified through a Blade directive.

You might need to use Javascript in some pages but not all of them. In your master layout you define the place where you want your Javascript to be used, body or head. Then, in the page you want to place Javascript you can use Blade stacks for pushing the Javascript code.