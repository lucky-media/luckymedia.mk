<div style="background: url('/assets/images/header.png') no-repeat center center / cover;"
     class="flex items-center py-5 md:py-12">
    <div class="container">
        <div class="row my-auto items-center">
            <div class="col-12 flex flex-row items-center">
                <svg class="block fill-current h-16 w-16 md:w-24 md:h-24 text-gray-500"
                     xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 48 48">
                    <path d="M0 24l10.286-10.286L20.57 24 10.286 34.286 0 24zM13.714 10.286L24 0l10.286 10.286L24 20.57 13.714 10.286zM13.714 37.714L24 27.43l10.286 10.285L24 48 13.714 37.714zM27.429 24l10.285-10.286L48 24 37.714 34.286 27.43 24z"/>
                </svg>
                <div class="flex flex-col ml-8 md:ml-12">
                    @if(isset($client))
                        <p class="text-blue-500 uppercase -mb-1 text-sm md:text-base">{{ $client }}</p>
                    @endif
                    <h2 class="text-2xl md:text-5xl font-bold text-gray-500">{{ $title }}</h2>
                </div>
            </div>
        </div>
    </div>
</div>