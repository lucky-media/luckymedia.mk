<?php

return [
    'production' => false,
    'baseUrl' => 'https://www.luckymedia.dev',
    'siteName' => 'Lucky Media',
    'siteDescription' => 'The art of beautiful design and professional digital experience.',
    'homepage' => [
        'menu' => [
            0 => [
                'name' => 'Home',
                'link' => '/#app',
            ],
            1 => [
                'name' => 'About us',
                'link' => '/#about',
                'scroll' => true,
            ],
            2 => [
                'name' => 'Services',
                'link' => '/#services',
                'scroll' => true,
            ],
            3 => [
                'name' => 'Portfolio',
                'link' => '/portfolio',
            ],
            4 => [
                'name' => 'Blog',
                'link' => '/blog',
            ],
            5 => [
                'name' => 'Contact',
                'link' => '/contact',
            ],
        ],
        'cards' => [
            '0' => [
                'icon' => 'thunder',
                'title' => 'Branding Strategy',
                'desc' => 'We help brands achieve digital transformation.'
            ],
            '1' => [
                'icon' => 'window',
                'title' => 'Web Development',
                'desc' => 'Dedicated to innovative, user-oriented web development.'
            ],
            '2' => [
                'icon' => 'frame',
                'title' => 'Design Services',
                'desc' => 'Original designs that convert visitors into clients.'
            ],
            '3' => [
                'icon' => 'bulb',
                'title' => 'Creative Ideas',
                'desc' => 'We combine creativity with deep technical experience.'
            ],
            '4' => [
                'icon' => 'chat',
                'title' => 'Social Media',
                'desc' => 'We build attractive digital marketing campaigns.'
            ],
            '5' => [
                'icon' => 'network',
                'title' => 'Outsourcing solutions',
                'desc' => 'We provide professional staff and proven experience.'
            ],
        ],
    ],
    'technologies' => [
        '0' => [
            'name' => 'Php',
            'img' => 'assets/images/logos/php.png',
            'img_large' => 'assets/images/logos/php@2x.png',
            'link' => 'https://www.php.net/',
        ],
        '1' => [
            'name' => 'Laravel',
            'img' => 'assets/images/logos/laravel.png',
            'img_large' => 'assets/images/logos/laravel@2x.png',
            'link' => 'https://www.laravel.com/',
        ],
        '2' => [
            'name' => 'Tailwind',
            'img' => 'assets/images/logos/tailwind.png',
            'img_large' => 'assets/images/logos/tailwind@2x.png',
            'link' => 'https://tailwindcss.com/',
        ],
        '3' => [
            'name' => 'Javascript',
            'img' => 'assets/images/logos/js.png',
            'img_large' => 'assets/images/logos/js@2x.png',
            'link' => '/',
        ],
        '4' => [
            'name' => 'VueJS',
            'img' => 'assets/images/logos/vue.png',
            'img_large' => 'assets/images/logos/vue@2x.png',
            'link' => 'https://vuejs.org/',
        ],
        '5' => [
            'name' => 'ReactJS',
            'img' => 'assets/images/logos/react.png',
            'img_large' => 'assets/images/logos/react@2x.png',
            'link' => 'https://reactjs.org/',
        ],
    ],
    'collections' => [
        'projects' => [
            'path' => 'portfolio/{filename}',
            'extends' => '_layouts.project',
            'sort' => '-date',
        ],
        'posts' => [
            'path' => 'blog/{filename}',
            'extends' => '_layouts.post',
            'sort' => '-date',
        ],
        'testimonials' => [
            'sort' => '-date',
        ],
    ],

    'getDescription' => function ($page) {
        return strip_tags($page->getContent());
    },

    'getSeoDesc' => function($page) {
        $string = strip_tags($page->getContent());

        $stringCut = substr($string, 0, 160);

        $string = substr($stringCut, 0, strrpos($stringCut, ' ')) . '....';

        return $string;
    },

    'getShortDescription' => function ($page) {

        $string = strip_tags($page->getContent());

        $stringCut = substr($string, 0, 200);

        $string = substr($stringCut, 0, strrpos($stringCut, ' ')) . '....';

        return $string;

    },
];
