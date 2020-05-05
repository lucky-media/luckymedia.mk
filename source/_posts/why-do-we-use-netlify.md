---
title: Why do we use Netlify?
tags:
  - Netlify
  - Hosting
  - Web
  - Development
  - Static sites
date: 2020-05-06T00:23:05.179Z
cover: /assets/images/uploads/meta-image.jpg
---
**Netlify** is used as a hosting service for deploying static sites with integrated continuous deployment. If you haven’t heard about static sites, check our post about why we prefer to use static sites more than database powered ones. Netlify offers a free package that fulfills the needs of a freelancer or a small company, but it also offers some paid packages for greater teams and more functionalities.

The setup is very easy and the deployment process is very fast. Within a minute or so, your site is deployed and ready for production. Connecting the domain to the nameservers is also a basic task without any complication. Currently, the NS of Netlify are:

* dns1.p02.nsone.net
* dns2.p02.nsone.net
* dns3.p02.nsone.net
* dns4.p02.nsone.net

If you are interested to see a static site that is hosted on Netlify, feel free to check www.yep.mk . You will see that the website loads very fast and everything is done through html files that are already deployed at the server. This means that the server immediately delivers the html and css files which are about 300-700kb in total. The estimated load time is around 2 seconds on the first load and after the use of caching the loading time drops to almost half a second.

Do we manually upload the files to Netlify and then the deployment starts? No. All our projects are stored in Github as private or public. All the code and the changes are saved on Github. Then, the repository is connected to Netlify and the deployment starts when changes are made. We make a change to the code, we commit the change and push it to the master branch on Github, then Netlify gets the change and starts deploying the code for production, finally the website reflects the new code. This entire process is completed within 3-5 minutes and almost everything is automated. The developer’s task is only to start the entire process with the commit and the push to master.

How does Netlify know that a change was made on Github? Well, we need to follow the guidelines on the Netlify website for making this connection. The process is very quick and simple. By authorizing Netlify to access your Github repository, the changes are sent as notification to the server and the deployment process starts.

Do we always need to go through the entire process whenever we want to make a change? Yes and no. Yes, if that is the only change you want to make. No, if you plan to work longer on the code. Then, you can check your changes locally and after you are done with all the changes and multiple commits, you can go through the process of deployment for production.

Another option worth mentioning is the use of a netlify.toml file which allows for further modifications. We use it to notify Netlify which PHP version we want to use for a specific repository. It can be used for controlling the assets’ optimization settings as part of the build process. You can customize pretty URL’s, minifying CSS or Javascript, image compression, etc. Let’s say that you made a change, the deployment process was completed, but your website has crashed. You have no idea what’s wrong, and you don’t know how long it will take for you to solve the issue and redo the entire process. Don’t worry, Netlify offers you the option to cancel your latest deployment and it will jump to the one before, which was probably a successful one.